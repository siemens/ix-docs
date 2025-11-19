---
doc-type: 'tab-item'
---
import DoAndDont from '@site/src/components/DoAndDont';

# Custom modal - Usage

Custom modals present rich, contextual content such as forms, complex workflows or nested interactions that require user focus. Use them when a task requires immediate attention but the user should return to the same place after closing the modal.

![Modal overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=... )

1. Header (title and optional icon)
2. Body content (form, details, or custom layout)
3. Action row (primary and secondary buttons)
4. Close control

## Options

- **Title**: Use a short, specific title that describes the task or decision.
- **Hide close**: Only hide the close button for critical flows that require an explicit decision.
- **Centered**: Center content by default; use top alignment for tall dialogs that expand during interaction.
- **Size**: Choose a size that fits content, and avoid full screen for short tasks.
- **Backdrop**: Use a backdrop to focus attention and prevent background interaction.
- **Primary action**: Use an explicit primary action label that describes the outcome (for example "Save" or "Confirm").
- **Secondary actions**: Offer a clear secondary action (Cancel) and avoid multiple secondary options that compete with the primary action.

## Behavior in context

- Focus moves into the modal when it opens and returns to the trigger when it closes
- Trap keyboard focus inside the modal while it is open
- Provide at least one visible way to close the modal (close button, cancel action or Esc)
- Preserve context: when closing, return users to the previous state, not to an unrelated page
- Avoid auto-closing on backdrop click for critical decisions; prefer explicit confirmation

## States

Modals have two states: Closed and opened.

## Dos and Don’ts

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Do keep titles short and task focused</DoAndDont.Item>
    <DoAndDont.Item>Do provide a clear primary action that describes the result</DoAndDont.Item>
    <DoAndDont.Item>Do ensure keyboard and screen‑reader access to all controls</DoAndDont.Item>
    <DoAndDont.Item>Do preserve scroll position and page state when closing</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>Don’t nest modals unless absolutely necessary</DoAndDont.Item>
    <DoAndDont.Item>Don’t auto close modals for irreversible actions</DoAndDont.Item>
    <DoAndDont.Item>Don’t overload the modal with unrelated content</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>

## Related

- [Modal - Code](../code)
- [Forms field](../../forms-field)
- [Accessibility](../../guidelines/accessibility)