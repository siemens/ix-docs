---
doc-type: 'tab-item'
description: 'Usage guide for the ix-badge'
---
# Badge - Usage

Badges are non-interactive visual aids for status, counters and notification cues. They usually carry dynamic information. We recommend badges when users need a compact signal next to another element or as a standalone status cue. Interaction always belongs to the anchor, not the badge.

1. Anchor
2. Indicator (label, counter, dot or status icon)

Badges work **standalone** or **attached** to an anchor. Use the related [pill](../pill) for static category labels without an overlay relationship, and the [chip](../chip) when users need to interact with the item.

## Variants

Badge types define the anatomy of the indicator:

- **Counter:** Default type. Use for notifications that need attention, with integers up to two digits (`99+` for larger values). Short words are an exception, e.g. `new`.
- **Label:** Use for an entity’s status, e.g. Online or Offline in a list. Labels can include an icon that matches the semantic meaning of the color.
- **Dot:** Use for a compact notification that needs attention without a count.
- **Status icon:** Use for notifications that need attention or to show an entity’s status with a semantic glyph.

Semantic color variants communicate meaning, not decoration:

- **Primary:** Highlight new features, discoveries or exploratory information.
- **Alarm:** Show negative values, removals or high-urgency counts.
- **Critical:** Emphasize severe conditions that require strong attention.
- **Warning:** Call attention to information that requires caution, e.g. pending actions.
- **Info:** Draw attention to new or updated information or informative numeric data.
- **Success:** Show positive values or additions, e.g. growth metrics.
- **Neutral:** Use for general-purpose information that doesn’t carry semantic meaning.
- **Custom:** Set an explicit background and badge color when you need a product-specific palette.

We recommend matching icons on label badges to the meaning of the chosen color. Prefer outlined styles when you need lower visual emphasis on busy surfaces.

## Options

- **Placement:** Use inline (standalone) to show an entity’s status in a list. With an anchor, we typically use top after for notifications that need attention and bottom after for status on individual elements, e.g. user presence.
- **Label:** Grows with content unless you set a max width via `--ix-badge-max-width`.
- **Outline:** Use for lower visual emphasis. On status icons, outline selects the outline glyph.
- **Border:** Add a high-contrast border on filled badges when the surface behind them is busy. Ignore border when outline is on.
- **Offset:** Keep the indicator close to the anchor without covering it fully and without leaving the parent bounding box. Defaults are type-specific in the component.
- **Pulse animation:** Use `enable-animation` only for immediate, urgent attention. Animation respects `prefers-reduced-motion`.
- **Custom colors:** With the custom variant, set background and badge color together so contrast stays readable.

## Behavior in context

- **Attached vs standalone:** In attached mode the slotted anchor keeps its role and the badge stays a visual cue. In standalone mode authors provide accessible naming on the host when there is no visible text.
- **Resizing:** Labels hug their content unless a max width is applied.
- **Overflow:** With a max width, label text truncates. We recommend avoiding multiline badge text.
- **Interaction:** Badges themselves are not interactive. Label text can be selected.

## States

Badges are read-only. They don’t have hover, active or disabled interaction states of their own. When pulse animation is enabled, it draws attention until the product turns it off.

## Dos and Don’ts

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Do use badges for status, counters or notification cues that stay secondary to the anchor</li>
      <li>Do keep counter labels to integers with at most two digits, using 99+ when needed</li>
      <li>Do provide an accessible name on standalone dot or status-icon badges</li>
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
- [Tooltip](../tooltip)
