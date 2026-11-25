---
doc-type: 'tab-item'
description: 'Usage guide for AI message.'
---

# AI message - Usage

AI messages display a single assistant response inside a conversational thread. We recommend using them for answers users need to read, review and act on.

![AI message anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7959-520&t=8Rj3ErabF16Vm3lH-4)

1. Activity trace (optional)
2. Content
3. Actions

## Options

- **Activity trace:** Show the steps the AI took to produce the response, e.g. reasoning, searching or reading files, above the content. Each step shows its state (running, completed, warning or failed) and can reveal details such as inputs and output. Once the response is complete, summarize the trace (e.g. "Answer generated from 3 sources") and collapse it so the answer stays in focus.
- **Content:** Keep the response easy to scan by structuring it (see [content guidelines](../../guidelines/conversational-design/overview.md)).
- **Actions:** Add only message-level actions that users expect after reading, e.g. copy, rate response quality or regenerate. We recommend using subtle tertiary [icon buttons](../icon-button) so actions stay available without competing with the answer.
- **Sources:** If the response is grounded in files, web results or internal data, expose that provenance close to the message content. Only display if there are dedicated sources to show.

## Behavior in context

- **Responsiveness:** AI messages use from 45 to 80% of the chat's container width, depending on the viewport width.

## Dos and Don’ts

- Do show what the assistant is doing while it generates a response: a running Trace item with a generic label such as "Thinking…" while nothing specific is running, then one Trace item per step (see [wording guidelines](../../guidelines/conversational-design/essentials/wording-terms.mdx#response-progress-indicator))
- Do collapse the activity trace behind a summary when the response is complete
- Don't use skeleton loaders for AI responses; the activity trace shows that the assistant is working
- Do use the same actions for each AI message for consistency, but not more than 4 to avoid overloading users, e.g. copy, feedback, regenerate
- Do add thumbs up or down actions only if you are aligned with data protection guidelines

## Related

- [Chat](../chat)
- [User message](../user-message)
- [Chat input](../chat-input)
- [Conversational design guidelines](../../guidelines/conversational-design/overview.md)
