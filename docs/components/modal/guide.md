---
doc-type: 'tab-item'
---

import DoAndDont from '@site/src/components/DoAndDont';

# Custom modal - Usage

Custom modals present rich, contextual content such as forms, complex workflows or nested interactions that require user focus. Use them when a task requires immediate attention but the user should return to the same place after closing the modal.

![Modal overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=... )

1. Header
2. Close button
3. Content
4. Footer

## Options

- **Whole modal:**
    - **Centered**: Center content by default; use top alignment for tall dialogs that expand during interaction.
    - **Size**: Choose a fixed max-width, full width or full screen modal based on context and device:
        - **Fixed max-width (360-840px):** Use as default for all kinds of different layouts. Note that
        - **Full width:** Data-heavy interfaces on desktop, e.g. large datasets.
        - **Full screen:** Immersive experiences or multi-step workflows. Note that users have no visual connection to the app, since the modal container will stretch across full screen, covering the whole [application](../application).
    - **Backdrop**: Use a backdrop to focus attention and prevent background interaction.
    - **Animation**: By default, modals fade in. Disable for performance-sensitive contexts.
    - **Close on backdrop click**: Allow users to dismiss the modal by clicking the backdrop. We typically disable it for critical decisions requiring explicit confirmation.
    - **Before dismiss**: Add follow-up actions when users try to close modals (e.g. add a confirmation prompt to avoid unintentional discarding of inputs when closing).
    - **Container:** Similar to [dropdown triggers](../dropdown/code#property-trigger), defines which element opens the modal.
- **Modal header:**
    - **Title**: Use a short, specific title that describes the task or decision.
    - **Icon and icon color:** Repeat icons from the container (trigger) to establish a connection (e.g. if a button with label and icon opens the modal then reuse the same label and icon).
    - **Icon color:** Use [iX theme colors](../../styles/colors).
    - **Hide close**: Only hide the close button for critical flows that require an explicit decision
- **Modal footer:**
    - **Primary action**: Use an explicit primary action label that describes the outcome (for example "Save" or "Confirm").
    - **Secondary actions**: Offer a clear secondary action (Cancel) and avoid multiple secondary options that compete with the primary action.

## Behavior in context

- **Interaction:**
    - Modals are opened by the system (e.g. when another process is finished) or by the user (e.g. when clicking on buttons)
    - Modals are closed:
        - when clicking on close or on buttons in the footer (typically cancel or confirm)
        - when pressing the Escape key
        - If enabled, when clicking outside the modal (on the backdrop)
    - Focus moves into the modal when it opens and returns to the trigger when it closes
- **Overflow:**
    - The modal height increases with content until reaching screen height, then a scrollbar appears.
    - Footer remains sticky when content overflows (requires implementation).
    - Avoid horizontal scrollbars by using a larger modal size and defining adaptive behaviors for different viewports.
- **Placement:** Horizontally centered, vertically centered.
- **Responsiveness:**
    - Height: Except for `full-screen`, the height depends on its content.
    - Content: Needs to be built responsively to adapt with the container's width

## States

Modals have two states: Closed and opened.

## Dos and Don’ts

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Do keep titles short and task focused</DoAndDont.Item>
    <DoAndDont.Item>Do provide at least one visible way to close the modal</DoAndDont.Item>
    <DoAndDont.Item>Do provide a clear primary action that describes the result</DoAndDont.Item>
    <DoAndDont.Item>Do ensure keyboard and screen‑reader access to all controls</DoAndDont.Item>
    <DoAndDont.Item>Do preserve scroll position and page state when closing</DoAndDont.Item>
    <DoAndDont.Item>Do return users to the previous state, not an unrelated page (preserve scroll position and page state)</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
		<DoAndDont.Item>Don't use modals if a decision should be made (use [message modals](../message-modal) instead)</DoAndDont.Item>
    <DoAndDont.Item>Don’t nest modals (e.g. to load more data, use [spinners](../spinner) within modal contents)</DoAndDont.Item>
    <DoAndDont.Item>Don’t auto close modals for irreversible actions</DoAndDont.Item>
    <DoAndDont.Item>Don’t overload the modal with unrelated content</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>

## Related

- [Message modal](../message-modal)
- [Loading modal](../loading-modal)
- [Modal - Code](../code)
- [Forms field](../../forms-field)
- [Accessibility](../../guidelines/accessibility)