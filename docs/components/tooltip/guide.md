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
- **Content:** Keep content brief and specific. Follow the [tooltip language guidance](../tooltip/uxwriting.mdx) for labels, sentence structure and punctuation.
- **Spike direction:** Point the spike toward the trigger. Choose top, right, bottom or left based on the available space, or omit the spike when the relationship to the trigger remains clear.
- **Maximum width:** We recommend a maximum width of 292 px. Allow shorter tooltips to fit their content instead of forcing them to use the maximum width.

## Behavior in context

- **Interaction:** Apply tooltips only to interactive, keyboard-focusable triggers. Tooltips appear when users hover over or focus the trigger and dismiss when the pointer or focus moves away. We recommend a 500 ms delay before they appear to avoid distracting users as the pointer moves across the interface. Keep actions, links and other interactive content out of tooltips, use [popovers](../popover) instead.
- **Overflow:** Wrap text within the maximum width rather than truncating it. Use tooltips to reveal truncated text only when users can focus the affected element. If the content needs several paragraphs, move it to a popover or dedicated page.
- **Placement:** Position tooltips close to their trigger without covering the trigger or information users need to understand it. Allow placement to change near viewport edges so the full tooltip remains visible.
- **Responsiveness:** On touch devices, prefer visible labels or another persistent pattern. If a tooltip is necessary, open it on tap and make sure the gesture doesn’t conflict with the trigger’s primary action.
- **Accessibility:** Connect each tooltip to its trigger with `aria-describedby`. Tooltips supplement accessible names but don’t replace them. Don’t attach tooltips to disabled elements because users can’t focus them.

## States

Tooltips don’t have visual interaction states. They are hidden by default and appear when users hover over or focus the trigger.

## Dos and Don’ts

- Do use tooltips to name familiar icon-only controls or provide supplementary context
- Do keep tooltip content concise and useful without further interaction
- Do provide the same tooltip on hover and keyboard focus
- Do use visible labels for unfamiliar icons and important information
- Don’t place essential instructions or critical feedback only in a tooltip, use persistent content or a [message modal](../message-modal) instead
- Don’t add links, buttons or form controls to tooltips, use [popovers](../popover) instead
- Don’t repeat a visible label when the tooltip adds no new information
- Don’t attach tooltips to disabled elements
- Don’t use native browser tooltips, use the tooltip component for consistent behavior and accessibility

## Related

- [Popover](../popover)
- [Icon button](../icon-button)
- [Tooltip language guidance](../../guidelines/language/messaging/tooltips)
- [Accessibility](../../guidelines/accessibility)
