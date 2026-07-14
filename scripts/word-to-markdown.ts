/**
 * Word to Markdown Converter
 *
 * Converts Microsoft Word (.docx) documents to Markdown format with image extraction.
 *
 * Usage:
 *   npx tsx ./scripts/word-to-markdown.ts <input.docx> [--output <dir>]
 *
 * Example:
 *   npx tsx ./scripts/word-to-markdown.ts document.docx --output docs/converted
 *
 * Requirements:
 *   npm install mammoth turndown sharp adm-zip
 */

import * as fs from 'fs-extra';
import * as path from 'path';
import { parseArgs } from 'util';

// Dynamic imports for optional dependencies
async function importDependencies() {
  try {
    const mammoth = await import('mammoth');
    const TurndownService = await import('turndown');
    return {
      mammoth: mammoth.default || mammoth,
      TurndownService: TurndownService.default || TurndownService,
    };
  } catch (error) {
    console.error('❌ Missing required dependencies.');
    console.error(
      '\nPlease install them with:\n  npm install mammoth turndown sharp adm-zip'
    );
    process.exit(1);
  }
}

interface ConversionOptions {
  input: string;
  output: string;
}

async function extractImages(
  docxPath: string,
  outputDir: string
): Promise<Map<string, string>> {
  const imageMap = new Map<string, string>();

  try {
    // Dynamic import of AdmZip to read .docx structure
    const AdmZip = (await import('adm-zip')).default;
    const zip = new AdmZip(docxPath);
    const zipEntries = zip.getEntries();

    // Create images directory
    const imagesDir = path.join(outputDir, 'images');
    await fs.ensureDir(imagesDir);

    // Extract images from media folder
    zipEntries.forEach((entry) => {
      if (entry.entryName.startsWith('word/media/')) {
        const fileName = path.basename(entry.entryName);
        const outputPath = path.join(imagesDir, fileName);

        fs.writeFileSync(outputPath, entry.getData());
        imageMap.set(entry.entryName, `./images/${fileName}`);

        console.log(`  📸 Extracted: ${fileName}`);
      }
    });
  } catch (error) {
    console.warn('⚠️  Could not extract images:', (error as Error).message);
  }

  return imageMap;
}

async function convertWordToMarkdown(options: ConversionOptions) {
  const { input, output } = options;

  // Validate input file
  if (!fs.existsSync(input)) {
    console.error(`❌ File not found: ${input}`);
    process.exit(1);
  }

  if (!input.toLowerCase().endsWith('.docx')) {
    console.error('❌ Input file must be a .docx file');
    process.exit(1);
  }

  console.log(`\n📄 Converting Word document to Markdown...`);
  console.log(`  Input:  ${input}`);
  console.log(`  Output: ${output}\n`);

  try {
    // Import dependencies
    const { mammoth, TurndownService } = await importDependencies();

    // Create output directory
    await fs.ensureDir(output);

    // Extract images first
    console.log('🖼️  Extracting images...');
    const imageMap = await extractImages(input, output);

    // Convert Word document to HTML
    console.log('\n⚙️  Converting .docx to HTML...');
    const result = await mammoth.convertToHtml({
      path: input,
      styleMap: [
        'p[style-name="Heading 1"] => h1',
        'p[style-name="Heading 2"] => h2',
        'p[style-name="Heading 3"] => h3',
        'p[style-name="Heading 4"] => h4',
        'b => strong',
        'i => em',
      ],
    });

    let html = result.value;

    // Replace image references
    if (imageMap.size > 0) {
      imageMap.forEach((mdPath, docxPath) => {
        const fileName = path.basename(docxPath);
        const regex = new RegExp(`media/${fileName.replace(/[.*+?^${}()|\\[\]\\\\]/g, '\\$&')}`, 'g');
        html = html.replace(regex, mdPath);
      });
    }

    // Convert HTML to Markdown
    console.log('📝 Converting HTML to Markdown...');
    const turndownService = new TurndownService({
      headingStyle: 'atx',
      bulletListMarker: '-',
      codeBlockStyle: 'fenced',
      fence: '```',
      emDelimiter: '_',
      strongDelimiter: '**',
    });

    // Add rules for better markdown formatting
    turndownService.addRule('strikethrough', {
      filter: ['s', 'strike', 'del'],
      replacement: (content: string) => `~~${content}~~`,
    });

    const markdown = turndownService.turndown(html);

    // Clean up markdown
    const cleanedMarkdown = cleanupMarkdown(markdown);

    // Generate output filename
    const baseName = path.basename(input, '.docx');
    const outputFile = path.join(output, `${baseName}.md`);

    // Write markdown file
    await fs.writeFile(outputFile, cleanedMarkdown, 'utf-8');

    console.log(`\n✅ Conversion complete!`);
    console.log(`  Markdown: ${outputFile}`);
    if (imageMap.size > 0) {
      console.log(`  Images:   ${path.join(output, 'images')}`);
      console.log(`  (${imageMap.size} images extracted)`);
    }
    console.log('\n💡 Tip: Review the markdown for formatting issues and adjust as needed.\n');
  } catch (error) {
    console.error('❌ Conversion failed:', (error as Error).message);
    if ((error as Error).stack) {
      console.error((error as Error).stack);
    }
    process.exit(1);
  }
}

function cleanupMarkdown(markdown: string): string {
  let cleaned = markdown;

  // Remove excessive blank lines (more than 2 consecutive)
  cleaned = cleaned.replace(/\n\n\n+/g, '\n\n');

  // Fix markdown image paths (ensure proper spacing)
  cleaned = cleaned.replace(/!\[([^\]]*)\]\(([^)]*)\)/g, '![$1]($2)');

  // Remove trailing whitespace from each line
  cleaned = cleaned
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n');

  // Automatically format dos and don'ts sections
  cleaned = formatDosAndDonts(cleaned);

  // Convert straight quotes to curly quotation marks in Markdown text
  cleaned = convertCurlyQuotes(cleaned);

  // Ensure file ends with newline
  if (!cleaned.endsWith('\n')) {
    cleaned += '\n';
  }

  return cleaned;
}

function formatDosAndDontsList(list: string, type: 'dos' | 'donts') {
  const ariaLabel =
    type === 'dos' ? 'Recommended practices' : 'Practices to avoid';
  const items = list
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line) => `    <li>${line.slice(2)}</li>`)
    .join('\n');

  return `<div className="${type}">
  <ul aria-label="${ariaLabel}">
${items}
  </ul>
</div>`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatDosAndDontsItems(items: string[], type: 'dos' | 'donts') {
  const ariaLabel =
    type === 'dos' ? 'Recommended practices' : 'Practices to avoid';
  const listItems = items
    .map((item) => {
      const content = escapeHtml(item)
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .join('<br />');

      return `    <li>${content}</li>`;
    })
    .join('\n');

  return `<div className="${type}">
  <ul aria-label="${ariaLabel}">
${listItems}
  </ul>
</div>`;
}

function isStructuredExampleContinuation(line: string): boolean {
  const trimmed = line.trim();

  return (
    trimmed.startsWith('- ') ||
    trimmed.startsWith('• ') ||
    /^\d+\.\s+/.test(trimmed) ||
    /^[A-Z][A-Z0-9 /&()'-]*:/.test(trimmed)
  );
}

function formatDosAndDontsExamplePairs(markdown: string): string {
  const lines = markdown.split('\n');
  const result: string[] = [];
  const exampleStartPattern = /^(#{1,6}\s+)?(DO|DON['’]T):\s*(.*)$/;

  let index = 0;

  while (index < lines.length) {
    const startMatch = lines[index].match(exampleStartPattern);

    if (!startMatch) {
      result.push(lines[index]);
      index += 1;
      continue;
    }

    const dos: string[] = [];
    const donts: string[] = [];
    const startIndex = index;

    while (index < lines.length) {
      const currentMatch = lines[index].match(exampleStartPattern);
      if (!currentMatch) {
        break;
      }

      const type = currentMatch[2] === 'DO' ? 'dos' : 'donts';
      const blockLines = [currentMatch[3].trim()].filter(Boolean);
      index += 1;

      while (index < lines.length) {
        const nextLine = lines[index];

        if (nextLine.match(exampleStartPattern)) {
          break;
        }

        if (nextLine.match(/^#{1,6}\s+/)) {
          break;
        }

        if (nextLine.trim() === '') {
          let lookaheadIndex = index + 1;

          while (
            lookaheadIndex < lines.length &&
            lines[lookaheadIndex].trim() === ''
          ) {
            lookaheadIndex += 1;
          }

          const nextNonEmptyLine = lines[lookaheadIndex];

          if (
            nextNonEmptyLine === undefined ||
            nextNonEmptyLine.match(exampleStartPattern) ||
            nextNonEmptyLine.match(/^#{1,6}\s+/)
          ) {
            break;
          }

          if (!isStructuredExampleContinuation(nextNonEmptyLine)) {
            break;
          }

          index += 1;
          continue;
        }

        if (!isStructuredExampleContinuation(nextLine)) {
          break;
        }

        blockLines.push(nextLine);
        index += 1;
      }

      const content = blockLines.join('\n').trim();
      if (content) {
        if (type === 'dos') {
          dos.push(content);
        } else {
          donts.push(content);
        }
      }

      while (index < lines.length && lines[index].trim() === '') {
        const nextLine = lines[index + 1];

        if (nextLine?.match(exampleStartPattern)) {
          index += 1;
          break;
        }

        if (nextLine?.match(/^#{1,6}\s+/)) {
          break;
        }

        if (!nextLine || !isStructuredExampleContinuation(nextLine)) {
          break;
        }

        index += 1;
      }
    }

    if (dos.length > 0 || donts.length > 0) {
      const sections = [];

      if (dos.length > 0) {
        sections.push(formatDosAndDontsItems(dos, 'dos'));
      }

      if (donts.length > 0) {
        sections.push(formatDosAndDontsItems(donts, 'donts'));
      }

      result.push(`<div className="dos-and-donts">
${sections.join('\n')}
</div>`);
      continue;
    }

    result.push(...lines.slice(startIndex, index));
  }

  return result.join('\n');
}

function formatDosAndDonts(markdown: string): string {
  // Pattern 1: Look for "Dos" or "Do's" / "Don'ts" or "Don't" headings followed by lists
  const dosPattern = /^(#{1,6})\s+(?:Dos?|Do['’]s?)\s*\n((?:(?:^-.*\n?)+(?:\n)?)+)(?=(#{1,6})\s+(?:Don['’]?ts?|Don['’]t))/gm;

  // Check if we have dos/don'ts pairs
  let formatted = markdown;
  const matches = Array.from(markdown.matchAll(dosPattern));

  if (matches.length > 0) {
    // Process each dos section paired with don'ts
    formatted = markdown.replace(
      /^(#{1,6})\s+(?:Dos?|Do['’]s?)\s*\n((?:(?:^-.*(?:\n|$))+(?:\n)?)+)(?=(#{1,6})\s+(?:Don['’]?ts?|Don['’]t))\3\s+(?:Don['’]?ts?|Don['’]t)\s*\n((?:(?:^-.*(?:\n|$))+(?:\n)?)+)/gm,
      (match, heading1, dosList, heading2, dontsList) => {
        return `<div className="dos-and-donts">
${formatDosAndDontsList(dosList.trim(), 'dos')}
${formatDosAndDontsList(dontsList.trim(), 'donts')}
</div>`;
      }
    );
  }

  return formatDosAndDontsExamplePairs(formatted);
}

function convertCurlyQuotes(markdown: string): string {
  let result = '';
  let inTag = false;
  let inInlineCode = false;
  let inCodeFence = false;
  let open = true;

  const lines = markdown.split('\n');

  for (let line of lines) {
    if (line.trim().startsWith('```')) {
      inCodeFence = !inCodeFence;
      result += `${line}\n`;
      continue;
    }

    if (inCodeFence) {
      result += `${line}\n`;
      continue;
    }

    let lineResult = '';
    for (let i = 0; i < line.length; i += 1) {
      const char = line[i];

      if (char === '`') {
        inInlineCode = !inInlineCode;
        lineResult += char;
        continue;
      }

      if (char === '<' && !inInlineCode) {
        inTag = true;
        lineResult += char;
        continue;
      }

      if (char === '>' && inTag && !inInlineCode) {
        inTag = false;
        lineResult += char;
        continue;
      }

      if (char === '"' && !inTag && !inInlineCode) {
        lineResult += open ? '“' : '”';
        open = !open;
        continue;
      }

      lineResult += char;
    }

    result += `${lineResult}\n`;
  }

  return result;
}

async function main() {
  const { values, positionals } = parseArgs({
    options: {
      output: {
        type: 'string',
        short: 'o',
        description: 'Output directory (default: ./markdown-output)',
      },
      help: {
        type: 'boolean',
        short: 'h',
        description: 'Show help message',
      },
    },
    allowPositionals: true,
  });

  if (values.help || positionals.length === 0) {
    console.log(`
Word to Markdown Converter

Usage:
  npx tsx ./scripts/word-to-markdown.ts <input.docx> [--output <dir>]

Examples:
  npx tsx ./scripts/word-to-markdown.ts document.docx
  npx tsx ./scripts/word-to-markdown.ts report.docx --output docs/converted

Options:
  -o, --output <dir>  Output directory (default: ./markdown-output)
  -h, --help          Show this help message

Prerequisites:
  npm install mammoth turndown sharp adm-zip

What it does:
  1. Converts .docx to HTML using Mammoth
  2. Converts HTML to Markdown using Turndown
  3. Extracts embedded images to an 'images' subdirectory
  4. Cleans up formatting for better readability
    `);
    process.exit(values.help ? 0 : 1);
  }

  const inputFile = positionals[0] as string;
  const outputDir = (values.output as string) || './markdown-output';

  await convertWordToMarkdown({
    input: inputFile,
    output: outputDir,
  });
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
