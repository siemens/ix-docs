---
doc-type: 'tab-item'
description: 'Usage guide for chat input.'
---

# Chat input - Usage

In chat inputs, users write and send messages. We recommend using them for quick, iterative exchanges, not for multi-step data entries.

![Chat input anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7940-7427&t=mrtbkWj76QJhvNLI-11)

1. Follow-up prompts
2. Attachments
3. Textarea
4. Start slot for secondary actions
5. Disclaimer
6. End slot for alternative input methods
7. Send button

## Options

- **Placeholder:** Use clear, contextual prompts, e.g. “Enter a command, question or topic…” (see [writing guidelines](../../guidelines/conversational-design/essentials/wording-terms)).
- **Follow-up slot:** Optionally include a slot for follow-up questions. We typically use tertiary outline [buttons](../button) or [icon buttons](../icon-button) for that purpose.
- **Attachment slot:** Optionally include a slot for [attachments](../chat-attachment/).
- **Start slot:** Add secondary actions. We recommend using tertiary outline [icon buttons](../icon-button) and trying to stick to one action. If you have more than one action, use [dropdown buttons](../dropdown-button/).
- **End slot:** Use this slot to add alternative input methods, e.g. voice input.
- **Disclaimer:** In AI contexts, we recommend including a visible disclaimer under the input instead of under each [AI message](../ai-message/). For Siemens AG products, find legal disclaimers [here](https://code.siemens.com/siemens-ix/ix-brand-theme/-/blob/main/apps/documentation/src/pages/legal-disclaimers-copilots.md).
- **Character limit:** Set soft and hard character limits that either warn users or prevent further input.
- **Interrupt:** Let users stop a response while it is being generated. Set `interruptible` to enable the stop button during processing, then cancel the request when `promptInterrupt` is emitted. Localize the stop button label with `i18nStopGenerating`.

## Behavior in context

- **Interaction:** Keep the input compact at start and let it grow to multiline while users type
- **Overflow:**
  - On the follow-up actions: If the actions exceed max width, they break into multiple lines
  - On the input: If the input reaches max height, the input shows a vertical scroll
  - On the attachments: If the attachments reach max width, they show a horizontal scroll

![Overflow behavior](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7940-7020&t=mrtbkWj76QJhvNLI-11)

## States

Chat inputs have five states: default, hover, focused, processing and interrupting.

- **Processing:** A response is being generated. Users can't send a new prompt. With `interruptible`, the stop button is enabled so users can interrupt the response.
- **Interrupting:** An interrupt was requested and is being processed. The stop button is disabled and shows progress until the application confirms the interrupt and returns to the default state.

![States](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7940-2809&t=mrtbkWj76QJhvNLI-4)

## Dos and Don’ts

- Do keep action labels verb-based and specific so users understand the outcome (see [guidelines for Siemens AG employees](https://www.figma.com/design/lqjt9c5IzzwQ4eJ4nqG7Kv/AI-Terminology?node-id=1-9&t=d5UkOPKJfj9qDmYM-1))
- Don’t allow users to send empty input
- Do set the interrupting state right after users stop a response, so they don’t click stop repeatedly
- Don’t rely on color alone to communicate validation errors
- Don’t place AI disclaimers away from user input and messages

## Related

- [Chat](../chat)
- [AI message](../ai-message)
- [User message](../user-message)
- [Textarea](../textarea)
- [Conversational design guidelines](../../guidelines/conversational-design/getting-started)
