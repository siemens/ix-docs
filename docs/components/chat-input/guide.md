---
doc-type: 'tab-item'
description: 'Usage guide for chat input'
---

# Chat input - Usage

Chat inputs help users compose and send short conversational messages in chat experiences. We recommend using them for quick, iterative exchanges, not for multi-step data entries.

![Anatomy component](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7940-7427&t=mrtbkWj76QJhvNLI-11)

1. Follow-up questions
2. Attachments
3. Textarea
4. Start slot for secondary actions
5. Disclaimer
6. End slot for alternative input methods
7. Send button

## Options

- **Placeholder:** Use clear, contextual prompts, e.g. “Enter a command, question or topic…”
- **Follow-up slot:** Optionally include a slot for follow-up questions. We typically use tertiary outline [buttons](../button) or [icon buttons](../icon-button) for that purpose.
- **Attachment slot:** Optionally include a slot for [attachments](../chat-attachment/).
- **Start slot:** Add secondary actions. We recommend using tertiary outline [icon buttons](../icon-button) and trying to stick to one action. If you have more than one action, use [dropdown buttons](../dropdown-button/).
- **End slot:** Use this slot to add alternative input methods, e.g. voice input.
- **Disclaimer:** In AI contexts, include a short visible disclaimer near the input.
- **Character limit:** Set soft and hard character limits that either warn users or prevent further input.

## Behavior in context

- **Interaction:** Keep the input compact at start and let it grow to multiline while users type
- **Overflow:**
  - On the follow-up slot: If the follow-up actions exceed max width, they break into multiple lines
  - On the input: If the input reaches max height, the input shows a vertical scroll
  - On the attachments: If the attachments reach max width, they show a horizontal scroll

![Anatomy component](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7940-7020&t=mrtbkWj76QJhvNLI-11)

## States

Chat inputs have six states: default, hover, focused and processing.

![States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7940-2809&t=mrtbkWj76QJhvNLI-4)

## Dos and Don’ts

- Do keep labels and helper text explicit instead of relying on placeholder text only
- Do keep action labels verb-based and specific so users understand the outcome
- Do show attachment or action context before send so users can review what they submit
- Don’t allow sending empty input
- Don’t rely on color alone to communicate validation errors
- Don’t hide essential guidance only in tooltips
- Don’t place AI disclaimers away from user input and messages

## Related

- [Chat](../chat)
- [AI message](../ai-message)
- [User message](../user-message)
- [Textarea](../textarea)
