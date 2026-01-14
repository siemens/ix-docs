#!/usr/bin/env python3
"""
Convert Markdown files under `docs/` to Word `.docx` using `pandoc`.

Usage:
  python3 scripts/markdown_to_word.py

Outputs are written to `docs-word/` preserving subdirectory structure.
This script prefers `pandoc` (recommended). If `pandoc` is not found it
prints installation instructions.
"""
import os
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT / "docs"
OUT_DIR = ROOT / "docs-word"


def find_pandoc() -> bool:
    return shutil.which("pandoc") is not None


def convert_with_pandoc(md_path: Path, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    cmd = ["pandoc", str(md_path), "-o", str(out_path)]
    try:
        subprocess.run(cmd, check=True)
        print(f"Converted: {md_path} -> {out_path}")
    except subprocess.CalledProcessError as e:
        print(f"pandoc failed for {md_path}: {e}")


def collect_markdown_files(base: Path):
    for root, dirs, files in os.walk(base):
        # skip hidden directories
        dirs[:] = [d for d in dirs if not d.startswith(".")]
        for f in files:
            if f.lower().endswith(".md"):
                yield Path(root) / f


def main():
    if not DOCS_DIR.exists():
        print(f"Docs directory not found: {DOCS_DIR}")
        return

    if not find_pandoc():
        print("pandoc not found. Please install pandoc and retry.")
        print("macOS: brew install pandoc")
        print("Or visit: https://pandoc.org/installing.html")
        return

    print(f"Writing docx files to: {OUT_DIR}")

    for md in collect_markdown_files(DOCS_DIR):
        # preserve relative path under docs/
        rel = md.relative_to(DOCS_DIR)
        out_path = OUT_DIR / rel.with_suffix(".docx")
        convert_with_pandoc(md, out_path)


if __name__ == "__main__":
    main()
