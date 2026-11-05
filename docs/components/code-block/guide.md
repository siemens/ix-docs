---
doc-type: 'tab-item'
description: 'Usage guide for code block.'
---

# Code block - Usage

Code blocks display a piece of code with an optional filename, a language label and a copy action. We recommend using them to show code, commands or configuration that users read or copy, e.g. in AI responses. The [Markdown view](../markdown) uses code blocks for fenced code automatically.

## Options

- **Filename:** Optionally shows the name of the file the code belongs to.
- **Language:** Shows the language of the code as a label.
- **Copy:** Copies the code to the clipboard. The button shows a temporary "Copied" state, which is also announced to assistive technologies.
- **Syntax highlighting:** Applications can add syntax highlighting with a highlighter of their choice.

## Behavior in context

- **Overflow:** Long lines scroll horizontally, the code doesn't wrap.

## Dos and Don’ts

- Do set the language so users know what they are looking at
- Do add the filename when the code belongs to a specific file
- Don’t use code blocks for short inline code in a sentence, use inline code instead

## Related

- [Markdown view](../markdown)
- [AI message](../ai-message)
