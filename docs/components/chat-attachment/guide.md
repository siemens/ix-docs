---
doc-type: 'tab-item'
description: 'Usage guide for chat attachment'
---

# Chat attachment - Usage

Chat attachments display files that users have uploaded to a chat prompt. It is typically displayed when users are writing in the chat input [chat inputs](../chat-input) and in all sent user messages.

![Chat attachment anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7970-230&t=HrpSIFfB7yjzt741-4)

1. File icon
2. File name
3. Remove button

## Options

- **File name:** Show the file name including the file extension.
- **Remove button:** Show remove buttons in a [chat input](../chat-input/), and hide it once an attachment is part of a submitted [message](../user-message/).
- **Preview supported:** Use only for supported files to show e.g. thumbnails.
- **Tooltip:** By default, the tooltip shows the file name in case of truncation. Override it to show additional information, e.g. for previews or file size.

## Behavior in context

- **Chat input context:** If attachments exceed the chat input's width, they overflow into a scrollable horizontal list.
- **User message context:** If attachments exceed the user message container's width, a more button is visible.
- **Text overflow:** If an attachment exceeds `20rem`, the file name is truncated at the end while preserving the file extension. A tooltip shows the full file name on hover.

## States

Chat attachments have six states: default, hover, active, loading, focused and error.

Chat attachments follow the [chip](../chip) interaction model, including hover, active and focused behavior. In an error state, attachments stay visible and show clear feedback so users can retry or remove files.

## Dos and Don’ts

- Do keep attachments visible in user messages so attachments stay traceable within context
- Don’t hide the remove action while users are still composing a prompt in the [chat input](../chat-input/)
- Don’t detach attachments from their related [user message](../user-message/) after sending 
- 

## Related

- [Chat](../chat)
- [Chat input](../chat-input)
- [Chip](../chip)
- [User message](../user-message)
