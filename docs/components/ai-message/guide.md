---
doc-type: 'tab-item'
description: 'Usage guide for AI message'
---

# AI message - Usage

AI messages display a single assistant response inside a conversational thread. We recommend using them for answers users need to read, review and act on, not for transient status updates that fit better in [toasts](../toast) or [progress indicators](../progress-indicator).

![AI message anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7959-520&t=8Rj3ErabF16Vm3lH-4)

1. Content
2. Actions

## Options

- **Content:** Keep the response easy to scan. We usually structure longer answers with a short lead sentence followed by lists, short paragraphs or other lightweight content blocks.
- **Actions:** Add only message-level actions that users expect after reading, e.g. copy, rate response quality or regenerate. We recommend using subtle tertiary [icon buttons](../icon-button) so actions stay available without competing with the answer.
- **Sources:** If the response is grounded in files, web results or internal data, expose that provenance close to the message content, e.g. with [chips](../chip). Only show sources when they are real and inspectable.

## Behavior in context

- **Responsiveness:** AI messages use 45 to 80 % of the chat container width.

## Dos and Don’ts


- Do structure longer responses into short paragraphs or lists so users can scan them quickly
- Do show clear [loading indicators](../spinner/) while the assistant is processing
- Do offer only the few actions users commonly need after reading, e.g. copy, feedback or regenerate
- Do show sources or evidence when the response refers to external or retrieved information
- Don’t present speculative or low-confidence output as if it were verified fact

## Related

- [Chat](../chat)
- [User message](../user-message)
- [Chat input](../chat-input)
