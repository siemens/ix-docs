---
doc-type: 'tab-item'
description: 'Usage guide for tooltips'
---

# Tooltip - Usage

Use tooltips to clarify the function of familiar icon-only controls or add brief context without cluttering the interface. We recommend them only for non-essential information that users can understand without interacting with the overlay. Use tooltips sparingly and prefer visible labels for unfamiliar icons or important information.

![Tooltip anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8177-86)

1. Tooltip container
2. Spike
3. Icon and title
4. Content

## Options

- **Title:** Add a short title when users need a topic before reading the content. Omit it when a single line explains the trigger clearly.
- **Icon:** Add an icon only when it helps users identify the message type or subject faster.
- **Content:** Keep content brief and specific. Follow the [tooltip language guidance](uxwriting.mdx) for labels, sentence structure and punctuation.
- **Interactive:** Enable this option when users need to move the pointer onto the tooltip, for example to select or copy its content.
- **Spike direction:** Point the spike toward the trigger. Choose top, right, bottom or left based on the available space, or omit the spike when the relationship to the trigger is clear.

## Behavior in context

![Tooltip behavior](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8196-111&t=PY7WtvFZYEs3ukFT-4)

- **Interaction:** Tooltips appear when users hover over or focus the trigger and disappear when the pointer or focus moves away. The component controls the delay for showing and hiding tooltips.
- **Overflow:** Tooltips wrap content within their predefined maximum width of 292 px. Their height adapts to the content and has no predefined maximum.
- **Placement:** The position depends on the trigger element, e.g. a button. By default, tooltips appear above the trigger. When there isn’t enough space for the selected placement, the position is corrected automatically.
- **Responsiveness:** Touch devices don’t provide a persistent hover state. Tapping a trigger can open its tooltip and activate the trigger’s primary action at the same time.
- **Accessibility:** The `aria-describedby` attribute connects tooltips to their triggers as supplementary descriptions. Accessible names remain separate. Disabled elements don’t receive keyboard focus, so their tooltips don’t appear through focus.

## States

Tooltips don’t have visual interaction states. They are hidden by default and appear when users hover over or focus the trigger.

## Dos and Don’ts

- Do use tooltips to name familiar icon-only controls or provide supplementary context
- Do keep tooltip content concise and useful without further interaction
- Do use tooltips only with familiar icons and provide unfamiliar icons with visible labels that communicate their meaning without hover or focus
- Don’t place essential instructions or critical feedback only in a tooltip, use persistent content or [message modals](../message-modal) instead
- Don’t add links, buttons or form controls to tooltips, use [popovers](../popover) instead
- Don’t repeat a visible label when the tooltip adds no new information
- Don’t attach tooltips to disabled elements
- Don’t use native browser tooltips, use the tooltip component for consistent behavior and accessibility

## Related

- [Popover](../popover)
- [Icon button](../icon-button)
- [Tooltip language guidance](../../guidelines/language/messaging/tooltips)
- [Accessibility](../../guidelines/accessibility)
