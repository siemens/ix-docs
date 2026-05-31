---
doc-type: 'tab-item'
description: 'Usage guide for the ix-popover'
---
# Popover - Usage

Popovers present contextual information in a floating panel anchored to a trigger element. Unlike tooltips, they typically open on click and can include a title, image, body text, and footer actions. Unlike modals, they do not block the entire page.

![Popover overview](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=115095-99218)

1. Header with **popover title** (optional)
2. Image (optional)
3. Content
4. Footer (optional)
5. Spike (optional)

## Composition

Place child components inside `ix-popover` in this order:

| Component | Purpose |
| --- | --- |
| `ix-popover-header` | Title row with optional icon, **popover title**, additional items, and close button |
| `ix-popover-image` | Optional full-width image |
| `ix-popover-content` | Body text or custom markup |
| `ix-popover-footer` | Actions and optional leading metadata |

### Popover title

The **popover title** is the default slot text of `ix-popover-header`. It is rendered as heading text (`h5`). Place it between the opening and closing tags:

```html
<ix-popover-header icon="info">Release highlights</ix-popover-header>
```

Use the `additional-items` slot for badges or pills next to the title.

### Footer slots

`ix-popover-footer` has two slots:

- **Default slot** — action buttons (for example Cancel, Save), aligned to the end.
- **`start` slot** — optional leading content (for example version text or `1 / 3` in a stepper).

Wire **Cancel** to `hidePopover()` on the parent `ix-popover`. The header close button dismisses the popover automatically.

## Options

### `ix-popover`

- **trigger** — id, selector, or element reference for the open/close control.
- **placement** — `top`, `bottom` (default), `left`, or `right`. Adjusts automatically near viewport edges.
- **has-spike** — show the caret pointing at the trigger.
- **trigger-mode** — `click` (default) or `hover`.
- **close-on-click-outside** — dismiss when clicking outside the popover and trigger.
- **show** — open/closed state; can also use `showPopover()` / `hidePopover()`.
- **aria-label** — set on `ix-popover` when the title alone does not name the dialog (accessibility patterns are subject to adjustment).

### `ix-popover-header`

- **icon** / **icon-color** / **aria-label-icon** — optional leading icon.
- **hide-close** — hide the built-in close (X) button.
- **aria-label-close-icon-button** — accessible name for the close button (default: `Close`).

### `ix-popover-content`

- **paddingless** — remove default inner padding (for example when content supplies its own spacing).

### `ix-popover-footer`

- **alignment** — `horizontal` (default) or `vertical` button layout.

### `ix-popover-image`

- **src** / **alt** — image URL and alternative text.

## Behavior

- Open via trigger click (or hover when `trigger-mode="hover"`), `showPopover()`, or `show`.
- Close via header close button, Escape, click outside (when enabled), trigger toggle, `hidePopover()`, or a custom action such as Cancel.
- **showChange** fires before open/close and can be cancelled; **showChanged** fires after the state updates.
- Popovers with focusable content trap focus while open and restore focus to the trigger on close.
- Popovers without focusable content stay non-modal (similar to tooltips).

## When to use

- Do use popovers for contextual information such as release highlights or guided hints.
- Do use modals when the user must complete a task or read essential information before continuing.
- Do use tooltips for brief, non-interactive hints on hover or focus.
- Do use dropdowns when the user selects from a list of actions.
- Don't use popovers for essential information that must be read before proceeding.

## Related

- [Popover news](../popover-news)
- [Tooltip](../tooltip)
- [Modal](../modal)
- [Dropdown](../dropdown)
