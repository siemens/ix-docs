---
doc-type: 'tab-item'
---
import DoAndDont from '@site/src/components/DoAndDont';

# Loading modal - Usage

Loading modals communicate that the system is performing an operation that takes time and that the user should wait. Use them for short blocking tasks (upload, processing) where the user must not interact with the page until completion.

![Loading modal](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=... )

1. Icon or spinner
2. Title or short status line
3. Progress indicator or message
4. Optional cancel action

## Options

- **Blocking**: Use for operations that must complete before continuing; avoid for long-running tasks.
- **Message**: Provide a concise, contextual message that explains what is happening.
- **Progress indicator**: Prefer determinate progress when possible, otherwise use an indeterminate spinner.
- **Auto close**: Close the modal automatically on success; show a final message for a short time to confirm the result.
- **Cancel**: Offer cancel only when the operation can be safely interrupted.

## Behavior in context

- Display immediately when an action starts and remove when finished or on error
- For long operations provide an alternative (background processing with notification) instead of blocking the user
- Keep messages short and avoid technical details; surface only what the user needs to know
- If allowing cancellation, confirm consequences and rollback expectations
- Announce progress updates to assistive technologies

## States

Loading modals have two states: Closed and opened.

## Dos and Don’ts

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Do show an expected time or progress when available</DoAndDont.Item>
    <DoAndDont.Item>Do provide a clear success or error message after completion</DoAndDont.Item>
    <DoAndDont.Item>Do offer a safe cancel option only if the operation supports interruption</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>Don’t block the user for long tasks without an alternative</DoAndDont.Item>
    <DoAndDont.Item>Don’t show vague messages that leave users unsure what is happening</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>

## Related

- [Message modal](../message-modal)
- [Custom modal](../modal)
- [Modal - Code](../modal/code)
- [Progress indicator](../progress-indicator)
- [Toasts](../../patterns/toasts)
- [Progress indicators](../../components/progress)
- [Accessibility](../../guidelines/accessibility)