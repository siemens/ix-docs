---
doc-type: 'tab-item'
---

import DoAndDont from '@site/src/components/DoAndDont';
import { IxButton } from '@siemens/ix-react';

# Message modal - Usage

Message modals present short messages, confirmations or important alerts that require a decision or acknowledgment. Use them for confirmations, simple decisions and critical alerts that need user action before proceeding.

![Message modal](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7349-215&t=WHbXyipgpGwQbVsV-4)

1. Icon
2. Title
3. Close button
4. Message
5. Cancel action
6. Confirm action

## Variants

- **Error:** Use for system failures, validation issues or blocking errors.
- **Info:** Use for neutral information, instructions or notifications.
- **Question:** Use for confirmations requiring user decisions.
- **Success:** Use for completed actions when another action is needed, e.g. download backup, copy generated link.
- **Warning:** Use for potential issues or action consequences, e.g. overwrite files.

:::info

Note that the choice of button variant is independent from the modal variant, e.g.:

- **A system error occurred:** Use error modal with subtle primary button "Reload" and primary button "Try again".
- **Are you sure you want to delete this item permanently?:** Use question modal with primary danger button "Delete".
- **Do you want to save your changes before leaving?:** Use question modal with primary button "Save changes".

| Variant  | Message title                                          | Button labels and variants                                                                           |
| -------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Error    | A system error occurred                                | <IxButton variant="subtle-primary">Reload</IxButton> <IxButton>Try again</IxButton>                  |
| Question | Are you sure you want to delete this item permanently? | <IxButton variant="danger-primary">Delete</IxButton> <IxButton variant="primary-ghost">Cancel</IxButton> |
| Question | Do you want to save your changes before leaving?       | <IxButton>Save changes</IxButton> <IxButton variant="secondary">Cancel</IxButton> <IxButton variant="tertiary">Discard</IxButton> |





| Column A | Column B |
|---|---|
| [Error](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7351-3560&t=WHbXyipgpGwQbVsV-4) | Title: A system error occurred<br/>Variant: Error<br/>Buttons: subtle primary button "Reload" and primary button "Try again" |
| [Question delete](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7351-3731&t=WHbXyipgpGwQbVsV-4) | Title: Are you sure you want to delete this item permanently?<br/>Variant: Question<br/>Buttons: primary danger button "Delete" and primary ghost button "Cancel" |
| [Question discard](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7351-3947&t=WHbXyipgpGwQbVsV-4) | Title: Do you want to save your changes before leaving?<br/>Variant: Question<br/>Buttons: primary button "Save changes", secondary button "Cancel" and tertiary button "Discard" |

/*TODO Remove either bullet points or table*/

:::

## Options

- **Title:** Use a clear, outcome-oriented title (e.g. "Delete item", see [writing guidelines](/docs/guidelines/language/dialogs-and-buttons)).
- **Message:** Include if you need to provide additional information e.g. consequences (see [writing guidelines](/docs/guidelines/language/error-messages)).
- **Confirm action:** Use precise action text, e.g. "Delete," "Confirm," or "Continue."
- **Cancel action:** Use "Cancel" or "Close".
- **Close on backdrop click:** Enable clicking on the backdrop to close modals for informational messages. Disable for critical decisions that require confirmation.
- **Preserve context:** After closing, return users to the same screen state.

## Behavior in context

- **Interaction:**
    - Message modals are opened by the system (e.g. after an error occurs) or by users (e.g. when clicking a delete button).
    - Message modals are closed when clicking on close or on buttons in the footer (typically cancel or confirm).
    - Focus moves into the modal when it opens and returns to the trigger when it closes.
- **Usage:** Use for confirmations that are direct and reversible or for important information requiring acknowledgement.
- **Communication:** Make consequences explicit in the message and action labels (e.g. "Delete permanently").
- **Focus management:** Ensure the primary action is keyboard accessible and focused by default.
- **Frequency:** Use confirm dialogs sparingly and only when consequences are significant.

## States

Message modals have two states: Closed and opened.

## Dos and Don’ts

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Do use action labels that describe the result (avoid Yes or No)</DoAndDont.Item>
    <DoAndDont.Item>Do communicate consequences clearly for destructive actions</DoAndDont.Item>
    <DoAndDont.Item>Do keep the message short and scannable</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>Don’t use message modals for non-essential information (use toasts instead)</DoAndDont.Item>
    <DoAndDont.Item>Don’t hide confirm actions behind ambiguous labels</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>

## Related

- [Custom modal](../modal)
- [Loading modal](../loading-modal)
- [Toast](../toast)
- [Message bar](../messagebar)
- [Accessibility](../../guidelines/accessibility)