# Message modal - usage

> import { IxButton } from '@siemens/ix-react';

Message modal - usage

Message modals present short messages, confirmations or important alerts that require a decision or acknowledgment. Use them for confirmations, simple decisions and critical alerts that need user action before proceeding.

![Message modal](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7349-215&t=WHbXyipgpGwQbVsV-4)

1. Icon
2. Title
3. Close button
4. Message
5. Cancel action
6. Confirm action

Variants

- **Error:** Use for system failures, validation issues or blocking errors.
- **Info:** Use for neutral information, instructions or notifications.
- **Question:** Use for confirmations requiring user decisions.
- **Success:** Use for completed actions when another action is needed, e.g. download backup or copy generated link.
- **Warning:** Use for potential issues or action consequences, e.g. overwrite files.

![Message modal variants](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7376-535&t=APgwguIwWKMbj5sA-4)

Options

- **Title:** Use a clear, outcome-oriented title (e.g. "Delete item", see [writing guidelines](/docs/guidelines/language/dialogs-and-buttons)).
- **Message:** Include if you need to provide additional information, e.g. consequences (see [writing guidelines](/docs/guidelines/language/messaging/error-messages)).
- **Confirm action:** Use precise action text, e.g. "Delete", "Confirm", or "Continue".
- **Cancel action:** Use "Cancel" or "Close". We recommend returning to the previous context the user was in.
- **Close on backdrop click:** Enable clicking on the backdrop to close modals for informational messages. Disable for critical decisions that require confirmation.

Note that the choice of button variant is independent from the modal variant, e.g.:

| Visual                                                                                               | Content and buttons                                                                                  |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![Error](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7351-3560&t=WHbXyipgpGwQbVsV-4) | **Title:** A system error occurred<br/>**Variant:** Error<br/>**Buttons:** Subtle primary button "Reload" and primary button "Try again" |
| ![Question delete](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7351-3731&t=WHbXyipgpGwQbVsV-4) | **Title:** Deleting this item cannot be undone<br/>**Variant:** Question<br/>**Buttons:** Primary danger button "Delete" and primary ghost button "Cancel" |
| ![Question discard](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7351-3947&t=WHbXyipgpGwQbVsV-4) | **Title:** Do you want to save your changes before leaving?<br/>**Variant:** Question<br/>**Buttons:** Primary button "Save changes", secondary button "Cancel" and tertiary button "Discard" |

Since our web component offers a predefined cancel and confirm action use [modals](../modal) if you intend to adapt the button arrangement or variants.

Behavior in context

- **Interaction:** See [custom modal behavior](../modal/guide.md#behavior-in-context).
- **Placement:** Horizontally centered, vertically top-aligned.

States

Message modals have two states: Closed and opened.

Dos and Don’ts

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Do use action labels that describe the result (avoid Yes or No)
- Do communicate consequences clearly for destructive actions
- Do keep messages short and scannable

</div>
<div className="donts" markdown="true">

- Don’t use message modals for non-essential information, use [toasts](../toast) instead
- Don’t hide confirm actions behind ambiguous labels

</div>
</div>

Related

- [Custom modal](../modal)
- [Loading modal](../loading-modal)
- [Toast](../toast)
- [Message bar](../messagebar)
- [Accessibility](../../guidelines/accessibility)

import { IxButton } from '@siemens/ix-react';

# Message modal - usage

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
- **Success:** Use for completed actions when another action is needed, e.g. download backup or copy generated link.
- **Warning:** Use for potential issues or action consequences, e.g. overwrite files.

![Message modal variants](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7376-535&t=APgwguIwWKMbj5sA-4)

## Options

- **Title:** Use a clear, outcome-oriented title (e.g. "Delete item", see [writing guidelines](/docs/guidelines/language/dialogs-and-buttons)).
- **Message:** Include if you need to provide additional information, e.g. consequences (see [writing guidelines](/docs/guidelines/language/messaging/error-messages)).
- **Confirm action:** Use precise action text, e.g. "Delete", "Confirm", or "Continue".
- **Cancel action:** Use "Cancel" or "Close". We recommend returning to the previous context the user was in.
- **Close on backdrop click:** Enable clicking on the backdrop to close modals for informational messages. Disable for critical decisions that require confirmation.

Note that the choice of button variant is independent from the modal variant, e.g.:

| Visual                                                                                               | Content and buttons                                                                                  |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| ![Error](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7351-3560&t=WHbXyipgpGwQbVsV-4) | **Title:** A system error occurred**Variant:** Error**Buttons:** Subtle primary button "Reload" and primary button "Try again" |
| ![Question delete](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7351-3731&t=WHbXyipgpGwQbVsV-4) | **Title:** Deleting this item cannot be undone**Variant:** Question**Buttons:** Primary danger button "Delete" and primary ghost button "Cancel" |
| ![Question discard](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7351-3947&t=WHbXyipgpGwQbVsV-4) | **Title:** Do you want to save your changes before leaving?**Variant:** Question**Buttons:** Primary button "Save changes", secondary button "Cancel" and tertiary button "Discard" |

Since our web component offers a predefined cancel and confirm action use [modals](../modal) if you intend to adapt the button arrangement or variants.

## Behavior in context

- **Interaction:** See [custom modal behavior](../modal/guide.md#behavior-in-context).
- **Placement:** Horizontally centered, vertically top-aligned.

## States

Message modals have two states: Closed and opened.

## Dos and Don’ts

- Do use action labels that describe the result (avoid Yes or No)
- Do communicate consequences clearly for destructive actions
- Do keep messages short and scannable

- Don’t use message modals for non-essential information, use [toasts](../toast) instead
- Don’t hide confirm actions behind ambiguous labels

## Related

- [Custom modal](../modal)
- [Loading modal](../loading-modal)
- [Toast](../toast)
- [Message bar](../messagebar)
- [Accessibility](../../guidelines/accessibility)
