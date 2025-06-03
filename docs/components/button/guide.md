---
doc-type: 'tab-item'
---
# Button - Usage

Buttons initiate actions, apply actions to selected objects and activate/deactivate functions. We typically use buttons to trigger an immediate action, and you can place them within dialogs, forms, modal windows and other containers.

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5771-4670&t=yk9Vv3HSXaEzBbQk-4)

1. Label
2. Icon

## Variants

![Button variants](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5771-6179&t=yk9Vv3HSXaEzBbQk-4)

- **Subtle:** Use as an alternative to the default button when a less prominent visual emphasis is desired. Previously labeled as 'secondary' in earlier versions of the design system, the term 'subtle' more accurately reflects its intended purpose and visual hierarchy.
- **Danger:** Use for destructive or critical actions like "delete" or "remove". We typically use the danger button for actions that are irreversible or have a significant impact on the user’s data or the application state.

## Options

- **Default:** Use default buttons with filled style for primary actions.
- **Outline:** Use outline buttons for secondary actions supporting the primary action, e.g. "Cancel" or "Reset".
- **Ghost:** Use ghost buttons for tertiary actions that serve specialized or conditional purposes, e.g. "Advanced settings", "More options", "Help" or "Customize", "Change preferences" or "View details".
- **Label:** The label is the text displayed on the button. We typically use short, descriptive labels that clearly communicate the action the button triggers.
- **Icon:** An icon can be displayed on the button. We typically use icons to support the label and make the button more easy to discover by the user. The icon should be widely known for representing the action or function among your users. See [icon button](../icon-button/index.mdx) for buttons without label and icon only.
- **Type:** Use the type "submit" when sending user input from a form to a server. For all other actions such as triggering dialogs or performing navigation use the default type "button".

## Behavior in context

- **Interaction:** Buttons can be triggered by pressing anywhere within the button container. When buttons are focused, they can be triggered by pressing `Space`.
- **Text truncation:** Button labels are not truncated. All text on buttons is one line only. 
- **Alignment:** Buttons can be left- or right-aligned or fully span a container’s width.
- **Button width:** Buttons dynamically adjust their width based on content but have a default minimum width of `5rem` to ensure harmonious alignment for common pairs like "OK" and "Cancel". The minimum width can be customized for different needs.
- **Cluster buttons:** Cluster buttons in groups with related functions. A cluster might include various types of buttons, e.g. default, outline and ghost to show primary, secondary and tertiary actions. We recommend a gap of `0.5rem` between buttons.

![Cluster buttons](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5773-6487&t=yk9Vv3HSXaEzBbQk-4)

## States

Buttons have six states: Default, hover, active, disabled, loading and focused. In a disabled and loading state, buttons are visually displayed but don’t offer any user interaction.

![Button states](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5878-6015&t=yk9Vv3HSXaEzBbQk-4)

## Dos and Don’ts

- Do use short button labels to allow users to quickly scan, understand and remember them (see our [writing style guide](../../guidelines/language/dialogs-and-buttons.md))
- Do use ellipsis (…) to indicate that an action requires further input or choice from the user, e.g. "Save as…" which opens a list of file types to choose from.
- Do use the default option for buttons to indicate one primary action in a visual unit, all other secondary actions should use the outline option.
- Don’t use the danger button excessively or repetitively in lists or tables
- Don’t rely on standard buttons when many actions are necessary (use [dropdown buttons](../dropdown-button/index.mdx) or [split buttons](../split-button/index.mdx) instead, or move some functionality to a [pane](../panes/index.mdx) or a [dialog](../modal/index.mdx))

## Related

- [Dropdown button](../dropdown-button/index.mdx)
- [Split button](../split-button/index.mdx)
- [Toggle button](../toggle-button/index.mdx)
- [Modal](../modal/index.mdx)
