---
doc-type: 'tab-item'
description: 'Usage guide for the ix-popover'
---
# Popover - Usage

Popovers present contextual information in a floating panel anchored to a trigger element. Unlike tooltips, they typically open on click and can include a title, image, body text and footer actions. Unlike modals, they don’t block the entire page.

![Popover overview](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=115095-99218)

1. Header with **popover title** (optional)
2. Image (optional)
3. Content
4. Footer (optional)
5. Spike (optional)

## Composition

We recommend placing child components inside `ix-popover` in this order:

| Component | Purpose |
| --- | --- |
| `ix-popover-header` | Title row with optional icon, **popover title**, additional items and close button |
| `ix-popover-image` | Optional full-width image |
| `ix-popover-content` | Body text or custom markup |
| `ix-popover-footer` | Actions and optional leading metadata |

### Popover title

The **popover title** is the default slot text of `ix-popover-header`. It is rendered as heading text (`h5`). We recommend placing it between the opening and closing tags:

```html
<ix-popover-header icon="info">Release highlights</ix-popover-header>
```

We recommend using the `additional-items` slot for badges or pills next to the title.

### Footer slots

`ix-popover-footer` has two slots:

- **Default slot** — action buttons (e.g. Cancel, Save), aligned to the end.
- **`start` slot** — optional leading content (e.g. version text or `1 / 3` in a stepper).

Typically, we wire **Cancel** to `hidePopover()` on the parent `ix-popover`. The header close button dismisses the popover automatically.

## Options

### `ix-popover`

- **Trigger:** ID, selector or element reference for the open/close control.
- **Placement:** `top`, `bottom` (default), `left` or `right`. Adjusts automatically near viewport edges.
- **Has spike:** Show the caret pointing at the trigger.
- **Trigger mode:** `click` (default) or `hover`.
- **Close on click outside:** Dismiss when clicking outside the popover and trigger.
- **Show:** Open/closed state; can also use `showPopover()` / `hidePopover()`.
- **Aria label:** Set on `ix-popover` when the title alone doesn’t name the dialog (accessibility patterns are subject to adjustment).

### `ix-popover-header`

- **Icon** / **Icon color** / **Aria label icon:** Optional leading icon.
- **Hide close:** Hide the built-in close (X) button.
- **Aria label close icon button:** Accessible name for the close button (default: `Close`).

### `ix-popover-content`

- **Paddingless:** Remove default inner padding (e.g. when content supplies its own spacing).

### `ix-popover-footer`

- **Alignment:** `horizontal` (default) or `vertical` button layout.

### `ix-popover-image`

- **Src** / **Alt:** Image URL and alternative text.

## Behavior in context

- **Interaction:**
    - Popovers open via trigger click (or hover when `trigger-mode="hover"`), `showPopover()` or `show`.
    - Popovers close via header close button, Escape, click outside (when enabled), trigger toggle, `hidePopover()` or a custom action (e.g. Cancel).
    - Users can cancel the `showChange` event, which fires before open/close; `showChanged` fires after the state updates.
    - Popovers with focusable content trap focus while open and restore focus to the trigger on close.
    - Popovers without focusable content stay non-modal (e.g. tooltips).
- **Placement:** Popovers anchor to the trigger element. We typically use `bottom` placement; when there isn’t enough space, placement adjusts automatically near viewport edges.

## Dos and Don’ts

- Do use popovers for contextual information, e.g. release highlights or guided hints
- Do use modals when users must complete a task or read essential information before continuing
- Do use tooltips for brief, non-interactive hints on hover or focus
- Do use dropdowns when users select from a list of actions
- Don’t use popovers for essential information that must be read before proceeding, use [modals](../modal) instead

## Related

- [Popover news](../popover-news)
- [Tooltip](../tooltip)
- [Modal](../modal)
- [Dropdown](../dropdown)
