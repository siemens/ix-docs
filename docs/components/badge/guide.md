---
doc-type: 'tab-item'
description: 'Usage guide for the badge component'
---
# Badge - Usage

Badges are non-interactive visual aids for status, counters and notification cues. We recommend badges when users need a compact signal next to another element or a lightweight standalone status cue. Interaction always belongs to the anchor, not to the badge.

![Badge anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8141-4052&t=v625YpvIn3UzoFuJ-4)

1. Badge of type `label` as standalone
2. Badge of type `counter`
3. Badge of type `dot`
4. Badge of type `status icon`
5. Anchor element

Badges work **standalone** or **attached** to an anchor. As a general rule, we use badges for dynamic status or notification information and [chips](../chip) when users need to interact with the item.

## Variants

Badge types define how the indicator appears:

- **Counter:** Default type. Use for notifications that need attention, with integers up to two digits (`99+` for larger values). Short words are an exception, e.g. `new`.
- **Label:** Use for status, e.g. Online or Offline in a list. Labels can include an icon that matches the semantic meaning of the color.
- **Dot:** Use for a compact notification that needs attention without a count.
- **Status icon:** Use for notifications that need attention or to show a status with a semantic glyph.

Semantic color variants communicate meaning, not decoration:

![Badge variants](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8141-4066&t=v625YpvIn3UzoFuJ-4)

- **Primary:** Highlight new features, discoveries or exploratory information.
- **Alarm:** Show negative values, removals or high-urgency counts.
- **Critical:** Emphasize severe conditions that require strong attention.
- **Warning:** Call attention to information that requires caution, e.g. pending actions.
- **Info:** Draw attention to new or updated information or informative numeric data.
- **Success:** Show positive values or additions, e.g. growth metrics.
- **Neutral:** Use for general-purpose information that doesn’t carry semantic meaning.
- **Custom:** Set an explicit background and badge color when you need a product-specific palette.

We recommend matching icons on label badges to the meaning of the chosen color. Prefer outlined styles when you need lower visual emphasis on busy surfaces.

:::info
Badges with type `label` replace the deprecated [pill](../pill). Use a standalone label badge for existing pill use cases, e.g. compact statuses or categories. Attach it to an anchor only when the label supplements that specific element.
:::

## Options

![Badge options](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8161-118&t=OTo6nDmRwFCU9cVf-4)

- **Placement:** Use inline (standalone) to show an entity’s status in a list. With an anchor, we typically use `top after` for notifications that need attention and `bottom after` for status on individual elements, e.g. user presence.
- **Label:** Grows with content unless you set a max width via `--ix-badge-max-width`.
- **Outline:** Intended for lower visual emphasis on standalone badges. On status icons, outline selects the outline glyph.
- **Border:** Add a high-contrast border on filled badges when the surface behind them is busy. Ignore border when outline is on.
- **Offset:** Keep the indicator close to the anchor without covering it fully and without leaving the parent bounding box. Defaults are type-specific in the component.
- **Pulse animation:** Use `enable-animation` only for immediate, urgent attention. Animation respects `prefers-reduced-motion`.
- **Custom colors:** With the custom variant, set background and badge color together so contrast stays readable.
- **Tooltip text**: Provide a specific text to be displayed as the tooltip or set the attribute without a specific value to display the badge's text content. The tooltip works only for standalone badges.

## Behavior in context

![Badge behavior](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8173-214&t=OTo6nDmRwFCU9cVf-4)

- **Interaction:** Badges are read-only visual cues with no interaction but label text can be selected.
- **Overflow:** With a max width, label text truncates. We recommend short labels. Badges of type `counter` do not provide an overflow due to limited character count.
- **Container and overlapping:** An attached badge overlaps the anchor at its edge without extending the parent’s bounding box. This placement leaves the anchor recognizable and its critical content, e.g. the icon that identifies a notification button, visible.
- **Responsiveness:** In compact layouts, we usually prefer dot or status icon badges over long labels.
- **Notification context:** Attach badges to the control that opens or represents the related information, e.g. a notification or calendar icon. Use counters when the number helps users decide what to do, dots when only the presence of new information matters and status icons when users need to recognize a state or severity.
- **Updates:** Keep badges synchronized with the underlying notification state. Update or remove the indicator when users read notifications or when the status changes, and don’t leave stale counts or statuses attached to an anchor.
- **Accessibility**
   - **Accessible naming:** When badges are attached, include their meaning in the anchor’s accessible name, e.g. “Notifications, 3 unread”. Standalone dot and status icon badges need an accessible name because they don’t contain readable text.
   - **Dynamic updates:** We recommend a polite live region when users need to hear an important badge update without moving focus. Reserve assertive announcements for critical conditions that require immediate attention, and don’t announce routine count changes.
   - **Reading order:** Treat an attached badge and its anchor as one accessible unit. Avoid exposing the same information separately when this causes duplicate announcements.

## States

Badges are read-only. They don’t have hover, active or disabled interaction states of their own. When pulse animation is enabled, it draws attention until the application disables it.

## Dos and Don’ts

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Do use badges for status, counters or notification cues that stay secondary to the anchor</li>
      <li>Do keep counter labels to integers with at most two digits, using 99+ when needed</li>
      <li>Do include the badge meaning in the accessible name of its anchor</li>
      <li>Do announce meaningful dynamic updates without announcing every routine count change</li>
      <li>Do keep the badge inside the parent and leave enough of the anchor visible</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Don’t make badges interactive, use chips when users need to click or dismiss</li>
      <li>Don’t use color alone to convey meaning without supporting text or ARIA on the host or anchor</li>
      <li>Don’t rely on pulse animation for long-running or low-priority hints</li>
      <li>Don’t place essential primary content only in a badge</li>
    </ul>
  </div>
</div>

## Related

- [Pill](../pill)
- [Chip](../chip)
- [Popover](../popover)
- [UX writing basics](../../guidelines/language/basics)
- [Accessibility](../../guidelines/accessibility)
