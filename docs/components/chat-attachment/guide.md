---
doc-type: 'tab-item'
description: 'Usage guide for chat attachment'
---

# Chat attachment - Usage

Chat attachments display files that users add to a chat prompt. We recommend using them in [chat inputs](../chat-input) while users compose a message and in [user messages](../user-message) after submission to preserve the full request context.

![Chat attachment anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7970-230&t=HrpSIFfB7yjzt741-4)

1. File icon
2. File name
3. Remove button

## Options

- **File icon:** Show a recognizable file-type icon so users can identify attachments quickly, e.g. pdf-document.
- **File name:** Show the file name including the file extension.
- **Remove button:** Show remove buttons in a [chat input](../chat-input/), and hide it once an attachment is part of a submitted [message](../user-message/).
- **Preview supported:** Use only for supported files to show e.g. thumbnails.

## Behavior in context

- **Chat input context:** If attachments exceed the chat input's width, they overflow into a scrollable horizontal list.
- **User message context:** If attachments exceed the user message container's width, a more button is visible.
- **Text overflow:** If an attachment exceeds `20rem`, the file name is truncated at the end while preserving the file extension.

## States

Chat attachments have six states: default, hover, active, loading, focused and error.

Chat attachments follow the [chip](../chip) interaction model, including hover, active and focused behavior. In an error state, attachments stay visible and show clear feedback so users can retry or remove files.

## Dos and Don’ts

- Do keep submitted attachments visible in user messages so conversation context stays traceable
- Don’t hide the remove action while users are still composing a prompt in the [chat input](../chat-input/)
- Don’t detach attachments from their related [user message](../user-message/) after submission

## Related

- [Chat](../chat)
- [Chat input](../chat-input)
- [Chip](../chip)
- [User message](../user-message)
