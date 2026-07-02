---
doc-type: 'tab-item'
description: 'Usage guide for chat'
---

# Chat - Usage

Chats are the outer containers that bring together the three building blocks of a conversational thread: [Chat input](../chat-input) at the bottom for writing and sending prompts, [user messages](../user-message) that show what users submitted and [AI messages](../ai-message) that display AI responses.

![Chat anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7962-804&t=8Rj3ErabF16Vm3lH-4)

1. [User message](../user-message)
2. [AI message](../ai-message)
3. [Chat input](../chat-input)

## Behavior in context

- **Placement:** We recommend placing the chat either in the main content or in panes depending on the user goals:
  - [Main content](../content): Use when the chat is the main focus of the experience, e.g. standalone or workspace copilots
  - [Panes](../panes): Use when the chat is a secondary feature, e.g. for contextual help

## Related

- [Chat input](../chat-input)
- [User message](../user-message)
- [AI message](../ai-message)
- [Conversational design guidelines](../../guidelines/conversational-design/getting-started)
- [SDL AI UX Guidelines](https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?t=Kv2aR7JVmhNYuR1S-0) (can be accessed exclusively by Siemens AG employees)

## Dos and Don’ts

- Do use chats for conversational experiences that require users to read, review and act on messages in a thread
- Do enable auto-scroll when users are already at the latest message, not when they are reading older messages
- Don't add limits to how many messages are visible, instead always display full chat sessions
