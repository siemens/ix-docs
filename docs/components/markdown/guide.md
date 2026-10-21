---
doc-type: 'tab-item'
description: 'Usage guide for the Markdown view.'
---

# Markdown view - Usage

The Markdown view shows Markdown source as iX-styled content. We recommend using it for AI responses inside an [AI message](../ai-message), and for any other text that is authored or generated as Markdown.

## Options

- **Content:** Supports CommonMark and GitHub Flavored Markdown: headings, paragraphs, lists, task lists, tables, block quotes, code, emphasis, strikethrough, images, links, thematic breaks and footnotes.
- **Streaming:** While the response is still being generated, the Markdown view shows partial content immediately and repairs unfinished syntax at the end, e.g. an open code fence or an unclosed bold marker. Content that is already complete doesn't move or flicker, and keyboard focus is kept.
- **Tables:** Wide tables scroll horizontally. Once a table is complete, users can copy it as CSV or download it as a CSV file.
- **Code:** Fenced code is shown in a [code block](../code-block) with language label and copy action.
- **Directives:** Directives add iX components that plain Markdown can't express: buttons, pills, icons and callouts. Buttons report a Markdown action to the application, e.g. to start a follow-up task.
- **Custom components:** Applications can show their own components for Directives or Markdown elements, e.g. an asset card for `::asset[Pump P-102]{id=p-102}`.

## Behavior in context

- **Responsiveness:** The Markdown view takes the full width of its container. Tables and code scroll horizontally instead of growing the layout.
- **Safe content:** Links open in a new tab, and HTML in the Markdown source is shown as text, so generated content can't inject markup (see [Security](./code.mdx#security)).
- **Accessibility:** While streaming, the Markdown view is marked as busy for assistive technologies. Icons without a label are hidden from assistive technologies.

## Dos and Don’ts

- Do keep AI responses scannable with headings, short paragraphs and lists (see [content guidelines](../../guidelines/conversational-design/overview.md))
- Do use callouts sparingly to highlight warnings or important information
- Do use button Directives only for actions that directly relate to the response
- Don’t use the Markdown view for long-form documentation pages or forms
- Don’t rely on raw HTML in the Markdown source, use Directives or Custom components instead

## Related

- [AI message](../ai-message)
- [Code block](../code-block)
- [Chat](../chat)
- [Message bar](../messagebar)
- [Conversational design guidelines](../../guidelines/conversational-design/overview.md)
