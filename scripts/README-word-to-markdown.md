# Word to Markdown Converter

A TypeScript utility to convert Microsoft Word (.docx) documents to Markdown format with automatic image extraction.

## Features

✨ **What it does:**
- Converts `.docx` files to clean Markdown
- Extracts embedded images to an `images/` folder
- Preserves headings, text formatting (bold, italic, strikethrough)
- Handles lists, tables, and code blocks
- Cleans up formatting for readability
- Shows helpful progress feedback

## Installation

First, install the required dependencies:

```bash
npm install mammoth turndown sharp adm-zip
```

These libraries handle:
- **mammoth** – Reads .docx files and converts to HTML
- **turndown** – Converts HTML to Markdown
- **sharp** – Image processing (optional, for image optimization)
- **adm-zip** – Extracts media from .docx archive

## Usage

### Basic Usage

```bash
npx tsx ./scripts/word-to-markdown.ts input.docx
```

This creates a `./markdown-output/` directory with:
- `input.md` – The converted Markdown file
- `images/` – Folder containing extracted images

### Custom Output Directory

```bash
npx tsx ./scripts/word-to-markdown.ts document.docx --output docs/converted
```

### Help

```bash
npx tsx ./scripts/word-to-markdown.ts --help
```

## Examples

### Convert a single document

```bash
npx tsx ./scripts/word-to-markdown.ts my-report.docx
```

### Convert to docs folder

```bash
npx tsx ./scripts/word-to-markdown.ts guide.docx --output docs/guides
```

### Convert and organize

```bash
npx tsx ./scripts/word-to-markdown.ts chapter1.docx --output docs/components/my-component
```

## Output Structure

```
markdown-output/
├── input.md              # Converted Markdown
└── images/
    ├── image1.png
    ├── image2.jpg
    └── image3.svg
```

Image references in the Markdown automatically point to `./images/filename`.

## What Gets Converted

| Element | Conversion |
|---------|-----------|
| Heading 1 | `# Heading` |
| Heading 2 | `## Heading` |
| Bold | `**text**` |
| Italic | `_text_` |
| Strikethrough | `~~text~~` |
| Lists | `- item` or `1. item` |
| Tables | Markdown table format |
| Code blocks | ` ```code``` ` |
| Images | `![alt](./images/name.ext)` |
| Links | `[text](url)` |
| **Dos & Don'ts** | **Automatically formatted** with div structure! |
| **Curly quotation marks** | **Automatically converted from straight quotes** |

## Automatic Dos & Don'ts Formatting

✨ **The converter automatically detects and formats dos/don'ts sections!**

If your Word document has headings like "Dos" or "Do's" followed by "Don'ts" or "Don't", the converter will automatically wrap the lists in the proper div structure.

**Example:**

Word document:
```
Dos
- Item 1
- Item 2

Don'ts
- Item 1
- Item 2
```

Converted to:
```html
<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Item 1
- Item 2

</div>
<div className="donts" markdown="true">

- Item 1
- Item 2

</div>
</div>
```

✅ No manual formatting needed!

## Post-Conversion Tips

After conversion, review the output for:

✅ **Check:**
- Headings are properly formatted
- Image alt text is meaningful
- Links are correct
- Tables look good
- Code formatting is preserved

🔧 **May need manual fixes:**
- Complex formatting (columns, text boxes)
- Nested tables
- Special shapes or diagrams
- Unusual fonts or colors
- Custom styles

## Post-Conversion Tips

After conversion, review the output for:

Install the required packages:
```bash
npm install mammoth turndown sharp adm-zip
```

### File not found error

Check that the .docx file path is correct and relative to where you run the command.

### Images not extracting

- Ensure images are embedded in the .docx (not linked)
- Check that the output directory has write permissions
- Some .docx files may have corrupted media folders

### Markdown formatting looks odd

- This is normal – Word formatting doesn't always map cleanly to Markdown
- You may need to manually adjust formatting
- Remove inline styling that doesn't translate well

## Configuration

You can customize the conversion by modifying the `styleMap` in the script:

```typescript
styleMap: [
  'p[style-name="Heading 1"] => h1',
  'p[style-name="Heading 2"] => h2',
  'p[style-name="Heading 3"] => h3',
  // Add more mappings as needed
],
```

And Turndown options:

```typescript
const turndownService = new TurndownService({
  headingStyle: 'atx',        // Use # style (vs. underline)
  bulletListMarker: '-',      // Use - for lists
  codeBlockStyle: 'fenced',   // Use ``` for code blocks
  emDelimiter: '_',           // Use _ for emphasis
  strongDelimiter: '**',      // Use ** for strong
});
```

## Integration with Docusaurus

To use this converter for your documentation:

1. Place .docx files in a working directory
2. Run the converter: `npx tsx ./scripts/word-to-markdown.ts file.docx --output docs/components/new-component`
3. Move the markdown and images to the appropriate Docusaurus location
4. Update `sidebars.ts` if adding new documentation
5. Review and test with `pnpm start`

## Limitations

- Complex Word formatting may not convert perfectly
- Headers/footers are not extracted
- Comments and tracked changes are ignored
- Embedded objects (OLE) are not supported
- Some Unicode characters may need manual fixes

## License

This script is part of the ix-docs repository and follows the same license.

---

**Need help?** Check the Word document first to ensure it's well-formatted, then review the output Markdown for any issues.
