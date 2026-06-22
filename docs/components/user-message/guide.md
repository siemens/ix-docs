---
doc-type: 'tab-item'
description: 'Usage guide for user message'
---

# User message - Usage

User messages display a single prompt submitted by users in a conversational thread. We recommend using them to preserve what users asked, attached or edited so follow-up answers keep the right context.

![User message anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7959-1370&t=8Rj3ErabF16Vm3lH-4)

1. Attachments
2. Message
3. Actions

## Options

- **Attachments:** If users submit files together with a prompt, show those [attachments](../chat-user-message) directly with the message so the request stays understandable later in the thread.
- **Message:** Show the original user input as the main message content without alterations.
- **Actions:** Add only the few actions users need for their own prompt, e.g. copy, edit or open a compact overflow menu. We recommend using subtle tertiary [icon buttons](../icon-button) so actions stay secondary to the message.

## Behavior in context

- **Interaction:** User messages keep the submitted prompt visible as the main record of what users asked.
- **Actions:** Message actions are only shown when users hover over the message with a mouse, tap the message on touch devices or reach the message with the `Tab` key.
- **Placement:** We usually keep attachments above or alongside the message content inside the same container so users can review the full prompt context at a glance.
- **Responsiveness:** User messages take 45 to 80 % of the chat container width.

## Dos and Don’ts

- Do offer only the few actions users need after sending, e.g. copy, edit or more actions
- Do keep the original message wording and attachments visible so users can review what they submitted

## Related

- [Chat](../chat)
- [AI message](../ai-message)
- [Chat input](../chat-input)
