---
doc-type: 'tab-item'
---
import DoAndDont from '@site/src/components/DoAndDont';

# Message modal - Usage

Message modals present short messages, confirmations or important alerts that require a decision or acknowledgment. Use them for confirmations, simple decisions and critical alerts that need user action before proceeding.

![Message modal](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=... )

1. Icon (optional)
2. Title
3. Message body (one or two short paragraphs)
4. Primary and secondary actions

## Options

- **Title:** Use a clear, outcome-oriented title (for example, "Delete item").
- **Icon:** Add an icon that reinforces the message type (info, warning, danger).
- **Primary action:** Use precise action text such as "Delete," "Confirm," or "Continue."
- **Secondary action:** Use "Cancel" or "Close" and keep it visually less prominent.
- **Close on backdrop:** Allow closing by clicking the backdrop for informational messages but disable it for critical confirmations.
- **Preserve context:** After closing, return users to the same screen state.

## Behavior in context

- Use for confirmations that are direct and reversible or for important information requiring acknowledgement
- Make consequences explicit in the message and action labels (for example Delete permanently)
- Ensure the primary action is keyboard accessible and focused by default
- Use confirm dialogs sparingly and only when consequences are significant

## States

Message modals have two states: Closed and opened.

## Dos and Don’ts

<DoAndDont>
  <DoAndDont.Do>
    <DoAndDont.Item>Do use action labels that describe the result (avoid Yes or No)</DoAndDont.Item>
    <DoAndDont.Item>Do communicate consequences clearly for destructive actions</DoAndDont.Item>
    <DoAndDont.Item>Do keep the message short and scannable</DoAndDont.Item>
  </DoAndDont.Do>
  <DoAndDont.Dont>
    <DoAndDont.Item>Don’t use message modals for non-essential information (use toasts instead)</DoAndDont.Item>
    <DoAndDont.Item>Don’t hide confirm actions behind ambiguous labels</DoAndDont.Item>
  </DoAndDont.Dont>
</DoAndDont>

## Related

- [Toasts](../..//toasts)
- [Accessibility](../../guidelines/accessibility)