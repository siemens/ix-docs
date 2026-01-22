---
doc-type: 'tab-item'
---

# Loading modal - usage

Loading modals communicate that the system is performing an operation that takes time and that users should wait. Use them for short blocking tasks (upload, processing) where users should not interact with the page until completion.

![Loading modal](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7351-4017&t=WHbXyipgpGwQbVsV-4)

1. Spinner
2. Message

## Options

- **Message**: Provide a concise, contextual message that explains what is happening (e.g. "Uploading files" instead of "Loading", see [writing guidelines](../../guidelines/language/dialogs-and-buttons)).

## Behavior in context

- **Interaction:** Loading modals open and close automatically to prevent user interaction.
- **Overflow:** If the message exceeds the available width, it breaks into multiple lines.
- **Placement:** Horizontally top-aligned, vertically centered.
- **Responsiveness:** Loading modals adjust their width depending on the screen width.

## States

Loading modals have two states: Closed and opened.

## Dos and Don’ts

<div className="dos-and-donts" markdown="true">
<div className="dos" markdown="true">

- Do only use if any user interaction needs to be blocked, otherwise use [spinners](../spinner) instead
- Do use if user interaction needs to be blocked and the progress is unknown, otherwise use [progress indicators](../progress-indicator) placed in [custom modals](../modal) instead

</div>
<div className="donts" markdown="true">

- Don’t block users for long tasks without an alternative
- Don’t show vague messages that leave users unsure what is happening

</div>
</div>

## Related

- [Message modal](../message-modal)
- [Custom modal](../modal)
- [Progress indicator](../progress-indicator)
- [Toasts](../toast)
- [Accessibility](../../guidelines/accessibility)