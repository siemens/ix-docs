---
doc-type: 'tab-item'
description: 'Usage guide for the ix-popover'
---
# Popover - Usage

Use popovers when users need extra context without leaving the current task or losing sight of the trigger. We recommend popovers for short, contextual content that helps users decide, confirm or learn more in place.

![Anatomy component](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7956-140&t=ekGYaTlPLbfy7TSp-4)

1. Header with popover title (optional)
2. Image (optional)
3. Content
4. Footer (optional)
5. Spike (optional)

## Options

- **Trigger:** Use a clear trigger that signals additional context, e.g. an info icon, status chip or secondary action
- **Placement:** We typically use the default bottom placement because it feels connected to the trigger and works well in dense layouts
- **Has spike:** Use the spike when users need a stronger visual connection between the popover and its trigger
- **Trigger mode:** Prefer click for interactive content. Use hover only for lightweight, non-essential information
- **Close on click outside:** Keep this enabled for temporary, dismissible information so users can return to the page quickly
- **Title:** Add a short title when users need to understand the topic before scanning the content
- **Image:** Use images sparingly and only when they clarify the message faster than text alone
- **Footer actions:** Add footer actions only when users need a lightweight next step, e.g. dismissing a hint or opening more details
- **Alignment:** Use horizontal footer actions by default. Switch to vertical only when labels are long or space is constrained

## Behavior in context

- **Interaction:**
    - Popovers open from a trigger and keep users in the current context instead of redirecting them to another screen
    - We recommend keeping the content short enough that users can understand it at a glance and either dismiss it or continue with one lightweight action
    - If the content includes interactive elements, users need a clear way to close the popover and return to the trigger
- **Overflow:**
    - Keep text concise to avoid large floating panels that cover too much surrounding content
    - If content grows beyond a short explanation or a small set of actions, we recommend using a [modal](../modal) instead
    - Use images, metadata and actions only when they support the main message rather than competing with it
- **Placement:**
    - Popovers anchor to the trigger element, so placement should preserve that visual relationship
    - We usually place popovers below the trigger. When space is limited near the viewport edge, the placement adjusts automatically
- **Responsiveness:**
    - On smaller viewports, keep the content especially brief so the popover doesn’t obscure the surrounding interface
    - If users need to compare information, read long text or complete multiple actions on mobile, we recommend switching to a modal or dedicated page

## States

Popovers have two states: Closed and opened. When a popover is opened, it appears anchored to the trigger and is dismissible so users can return to the underlying context quickly.

## Dos and Don’ts

- Do use popovers for contextual information, e.g. release highlights or guided hints
- Do use popovers when users need one lightweight action without leaving the current task
- Do use a short title and concise content so users can scan the message quickly
- Do use tooltips for brief, non-interactive hints on hover or focus
- Don’t use popovers for essential information that must be read before proceeding, use [modals](../modal) instead
- Don’t use popovers for selecting from a list of actions, use [dropdowns](../dropdown) instead
- Don’t use popovers for long explanations or multi-step tasks, use a [modal](../modal) or dedicated page instead

## Related

- [Popover news](../popover-news)
- [Tooltip](../tooltip)
- [Modal](../modal)
- [Dropdown](../dropdown)
