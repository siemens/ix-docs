# Markdown → Word (DOCX) conversion

This script converts Markdown files under the `docs/` directory into Word `.docx` files.

Files created: `docs-word/` (preserves subfolders and filenames, `.md` → `.docx`).

Requirements
- `pandoc` installed and available on `PATH` (recommended).

Quick install (macOS Homebrew):
```bash
brew install pandoc
```

Usage
```bash
python3 scripts/markdown_to_word.py
```

Output example: `docs/components/button/overview.md` -> `docs-word/components/button/overview.docx`

Notes
- The script intentionally uses `pandoc` for accurate conversion of Markdown features.
- If you need a single combined document instead of per-file DOCX, run a custom `pandoc` command (e.g., concatenate files or use a TOC input file).
