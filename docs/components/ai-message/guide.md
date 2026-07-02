---
doc-type: 'tab-item'
description: 'Usage guide for AI message'
---

# AI message - Usage

AI messages display a single assistant response inside a conversational thread. We recommend using them for answers users need to read, review and act on.

![AI message anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7959-520&t=8Rj3ErabF16Vm3lH-4)

1. Content
2. Actions

## Options

- **Content:** Keep the response easy to scan. We usually structure longer answers with a short lead sentence followed by lists, short paragraphs or other lightweight content blocks.
- **Actions:** Add only message-level actions that users expect after reading, e.g. copy, rate response quality or regenerate. We recommend using subtle tertiary [icon buttons](../icon-button) so actions stay available without competing with the answer.
- **Sources:** If the response is grounded in files, web results or internal data, expose that provenance close to the message content, e.g. with [chips](../chip). Only show sources when they are real and inspectable.

## Behavior in context

- **Responsiveness:** AI messages use from 45 to 80% of the chat's container width, depending on the viewport width.

## Dos and Don’ts

- Do structure longer responses into short paragraphs or lists so users can scan them quickly
- Do show clear [loading indicators](../spinner/) while the assistant is generating responses (see [wording guidelines](../../guidelines/conversational-design/essentials/wording-terms.mdx#response-progress-indicator))
- Do show sources or evidence when the response refers to external or retrieved information
- Do use the same actions for each AI message for consistency, but not more than 4 to avoid overloading users, e.g. copy, feedback, regenerate
- Do add thumbs up or down actions only if you are aligned with data protection guidelines

## Related

- [Chat](../chat)
- [User message](../user-message)
- [Chat input](../chat-input)
