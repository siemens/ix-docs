---
name: word-to-markdown
description: 'Convert Microsoft Word .docx content into repository-ready Markdown using scripts/word-to-markdown.ts, including image extraction, cleanup, and docs integration checks.'
argument-hint: Provide the input .docx path and optional output directory.
---

# Word to Markdown

Use this skill to convert `.docx` source material into Markdown that can be reviewed and integrated into this docs repository.

This skill is based on:

- `scripts/word-to-markdown.ts`

## When To Use

- User asks to convert a Word file (`.docx`) to Markdown
- You need to extract embedded images from a Word file and keep relative references
- You need a quick baseline conversion before manual editorial cleanup

Do not use this skill for already-authored Markdown files that only need light edits.

## Required Inputs

- Input `.docx` file path
- Optional output directory

If no output directory is provided, use the script default `./markdown-output`.

## Prerequisites

Install dependencies before conversion:

```bash
npm install mammoth turndown sharp adm-zip
```

If dependencies are missing, the script will fail and prompt installation guidance.

## Conversion Command

Basic:

```bash
npx tsx ./scripts/word-to-markdown.ts <input.docx>
```

With custom output:

```bash
npx tsx ./scripts/word-to-markdown.ts <input.docx> --output <dir>
```

Help:

```bash
npx tsx ./scripts/word-to-markdown.ts --help
```

## What The Script Produces

- A Markdown file named after the input document
- An `images/` folder in the output directory with extracted media
- Updated image references in Markdown (`./images/<file>`)
- Cleaned formatting (blank lines, trailing spaces)
- Automatic Dos and Don'ts section formatting
- Curly quote conversion in non-code content

## Expected Output Shape

```text
<output-dir>/
  <input-name>.md
  images/
    <media files>
```

## Post-conversion Review Checklist

After running conversion, always review:

- Heading levels are reasonable and not flattened
- Lists and tables render correctly
- Image references point to existing files
- Code blocks stay fenced and readable
- Links are valid and still meaningful
- Dos and Don'ts blocks match current repo conventions

## Dos and Don'ts Block Note

The script may produce Dos and Don'ts sections that need normalization before the content is ready for this repo.

The current expected structure is:

```html
<div className="dos-and-donts">
<div className="dos">
  <ul aria-label="Recommended practices">
    <li>Do ...</li>
  </ul>
</div>
<div className="donts">
  <ul aria-label="Practices to avoid">
    <li>Don’t ...</li>
  </ul>
</div>
</div>
```

During post-editing, verify all of the following:

- use `className`, not `class`
- do not use `markdown="true"`
- wrap the content in explicit `<ul>` and `<li>` elements
- keep the accessibility labels `Recommended practices` and `Practices to avoid`

## Integration Workflow For Docs

1. Convert source `.docx` to a temporary output directory
2. Move generated `.md` and `images/` into the target docs location
3. Adjust frontmatter and section headings to match nearby docs
4. Normalize links and naming conventions
5. Run docs checks (build or local preview) and fix issues

## Failure Handling

If conversion fails:

- Confirm the input path exists and points to a `.docx`
- Reinstall dependencies
- Re-run with `--help` to verify arguments
- If output is malformed, continue with manual cleanup instead of retry loops

## What To Avoid

- Do not assume converted Markdown is publication-ready without review
- Do not skip image extraction verification
- Do not overwrite existing docs files without checking for conflicts
- Do not retain awkward Word-specific phrasing when editorial cleanup is requested
