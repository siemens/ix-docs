---
doc-type: 'tab-item'
---

import DoAndDont from '@site/src/components/DoAndDont';

# Custom modal - Usage

Custom modals present rich, contextual content, e.g. forms, complex workflows or nested interactions that require the user's focus.

Use custom models when a task requires immediate attention and the user returns to the same place after closing the modal.

![Modal overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7350-2529&t=WHbXyipgpGwQbVsV-4)

1. Title
2. Close button
3. Modal header
4. Modal content
5. Modal footer

## Options

- **Centered**: Center content by default; use top alignment for tall dialogs that expand during interaction.
- **Size**: Choose an appropriate size based on context and device:
    - **Fixed max-width (360-840px):** Use as default for most layouts. Note that on narrower screens or viewports, the modal scales down and becomes proportionally narrower to fit the available space.
    - **Full width:** Use for data-heavy interfaces on desktop, e.g. large datasets.
    - **Full screen:** Since the modal container covers the whole [application](../application) (including [menu](../application-menu) and [header](../application-header)), use for immersive experiences or multi-step workflows. Note that users have no visual connection to the app which is why we recommend establishing it in the title or content.
- **Backdrop**: Use a backdrop to focus attention and prevent background interaction.
- **Animation**: By default, modals fade in. Disable for performance-sensitive contexts.
- **Close on backdrop click**: Enable clicking on the backdrop to close modals for informational messages. Disable for critical decisions that require confirmation.
- **Before dismiss**: Add follow-up actions when users try to close modals, e.g. add a confirmation prompt to avoid unintentional discarding of inputs when closing.
- **Modal header:**
    - **Title**: Use a short, specific title that describes the task or decision.
    - **Icon and icon color:** Repeat icons from the trigger to establish a connection (e.g. if a button with label and icon opens the modal then reuse the same label and icon). Use [iX theme colors](../../styles/colors).
    - **Hide close**: We recommend only hiding the close button for critical flows that require an explicit decision.
- **Modal footer:** Place one primary, one secondary and optionally one tertiary [button](../button) on the right side to follow the Z-shape reading pattern in left-to-right languages.

## Behavior in context

- **Interaction:**
    - Modals are opened by the system (e.g. when another process finishes) or by users (e.g. when clicking buttons).
    - Modals are closed:
        - When clicking on close or on buttons in the footer (typically cancel or confirm).
        - When pressing the Escape key.
        - If enabled, when clicking outside the modal (on the backdrop).
    - Focus moves into the modal when it opens and returns to the trigger when it closes.
- **Overflow:**
    - The modal height increases with content until reaching screen height, then a scrollbar appears.
    - We recommend implementing a sticky footer when content overflows.
    - Avoid horizontal scrollbars by using a larger modal size and defining adaptive behaviors for different viewports.
- **Placement:** Horizontally centered, vertically centered or top-aligned.
- **Responsiveness:**
    - Height: Depends on its content except for `full-screen`.
    - Content: Needs to be built responsively to adapt with the container's width.

## States

Modals have two states: Closed and opened.

## Dos and Don’ts

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Do provide at least one visible way to close the modal</DoAndDont.Item>
    <DoAndDont.Item>Do provide a clear primary action that describes the result</DoAndDont.Item>
    <DoAndDont.Item>Do ensure all controls are accessible by keyboard and screen‑reader</DoAndDont.Item>
    <DoAndDont.Item>Do preserve scroll position and page state when closing</DoAndDont.Item>
    <DoAndDont.Item>Do return users to the previous state when cancelling, not an unrelated page</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>Don’t use modals if a decision should be made (use [message modals](../message-modal) instead)</DoAndDont.Item>
    <DoAndDont.Item>Don’t nest modals, e.g. to load more data, instead use [spinners](../spinner) within modal contents)</DoAndDont.Item>
    <DoAndDont.Item>Don’t auto close modals for irreversible actions</DoAndDont.Item>
    <DoAndDont.Item>Don’t overload the modal with unrelated content</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>

## Related

- [Message modal](../message-modal)
- [Loading modal](../loading-modal)
- [Forms field](../forms-field)
- [Accessibility](../../guidelines/accessibility)