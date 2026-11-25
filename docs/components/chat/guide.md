---
doc-type: 'tab-item'
description: 'Usage guide for chat.'
---

# Chat - Usage

Chats are the outer containers that bring together the three building blocks of a conversational thread: [Chat input](../chat-input) at the bottom for writing and sending prompts, [user messages](../user-message) that show what users submitted and [AI messages](../ai-message) that display AI responses.

![Chat anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8909-49727&t=eVKxr5qGy8GLG1Ge-4)

1. [User message](../user-message)
2. [AI message](../ai-message)
3. [Chat input](../chat-input)

## Options

- **Welcome screen:** While the chat has no messages, greet users and show what the assistant can do, e.g. with a short heading, a description and a few Prompt suggestions users can pick instead of typing. The Welcome screen disappears as soon as the conversation starts.
- **Message actions:** Use the same message actions for each message, e.g. copy, regenerate and feedback, and move further actions into an overflow menu.
- **Custom scroll behavior:** Turn off auto-scroll and the "Scroll to latest" button if your application controls scrolling itself, e.g. to show the start of a new answer instead of its end. The application can also scroll the chat to the top or bottom, e.g. after loading a previous conversation.

## Behavior in context

- **Placement:** We recommend placing the chat either in the main content or in panes depending on the user goals:
  - [Main content](../content): Use when the chat is the main focus of the experience, e.g. standalone or workspace copilots
  - [Panes](../panes): Use when the chat is a secondary feature, e.g. for contextual help
- **Responsiveness:** Chats will resize to a max-width of `45rem`.
- **Auto-scroll:** By default, the chat keeps the latest content in view while new messages are added or a response streams. Auto-scroll stops as soon as users scroll away from the bottom and resumes when they return to the bottom, select "Scroll to latest" or send a new prompt.
- **Scroll to latest:** While users are away from the bottom, a "Scroll to latest" button is shown above the chat input. It never covers the chat input and scrolls without animation when users prefer reduced motion.

## Dos and Don’ts

- Do keep auto-scroll enabled so users can read along while a response streams
- Don't scroll users back to the latest content while they are reading previous responses
- Don't add limits to how many messages are visible, instead always display full chat sessions
- Do keep Prompt suggestions short, specific and limited to a few, so users can scan them quickly

## Related

- [Chat input](../chat-input)
- [User message](../user-message)
- [AI message](../ai-message)
- [Conversational design guidelines](../../guidelines/conversational-design/getting-started)
- [SDL AI UX Guidelines](https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?t=Kv2aR7JVmhNYuR1S-0) (Siemens AG internal resource)

