---
doc-type: 'tab-item'
description: 'Usage guide for user message.'
---

# User message - Usage

User messages display a single prompt submitted by users in a conversational thread. We recommend using them to preserve what users asked, attached or edited so follow-up answers maintain context.

![User message anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7959-1370&t=8Rj3ErabF16Vm3lH-4)

1. Attachments
2. Message
3. Actions

## Options

- **Attachments:** When users attach files with their prompts, show those [attachments](../chat-attachment) with the message to maintain context even after multiple turns in the conversation.
- **Message:** Show the original user input as the main message content without alterations.
- **Actions:** Add only the few actions users need for their own prompt, e.g. copy, edit or open a compact overflow menu. We recommend using subtle tertiary [icon buttons](../icon-button) so actions stay secondary to the message.

## Behavior in context

- **Interaction:** User messages keep the sent prompts visible as a chat history of user input.
- **Actions:** Message actions are only shown when users hover over the message with a mouse, tap the message on touch devices or reach the message with the `Tab` key.
- **Placement:** User messages are always placed on the right side of the [chat](../chat/) to visually distinguish them from [AI messages](../ai-message) on the left side.
- **Responsiveness:** User messages take from 45 to 80% of the chat's container width, depending on the viewport width.

## Dos and Don’ts

- Do offer only the few actions users need after sending, e.g. copy or edit
- Do keep the messages and attachments visible as a continuous chat

## Related

- [Chat](../chat)
- [AI message](../ai-message)
- [Chat input](../chat-input)
