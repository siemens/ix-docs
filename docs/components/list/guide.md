---
doc-type: 'tab-item'
description: 'Usage guide for the ix-list and ix-list-item'
---

# List - Usage

Use lists when users need to scan related items vertically and might need to select or reorder them. Lists work well in [cards](../card/), [modals](../modal/), [panes](../panes/) and similar layouts.


![List anatomy](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8309-10950&t=xnc4u6vlAsTkE0Uc-11)

1. Drag indicator
2. Checkbox
3. Content with icon, label and status badge
4. Actions
5. Divider
6. Separator

Keep lists focused on one item type. Use a divider to distinguish items within lists. Use a separator to create space between groups of items. Keep these two patterns distinct so users can understand both item boundaries and group boundaries at a glance.

## Variants

- **Ghost (default):** Use when the surrounding surface already groups the list visually, e.g. in a card or modal
- **Filled:** Use when list items need a distinct background to stand out from the surrounding surface
- **Outline:** Use when placed within a grouping surface e.g. cards, but with stronger boundaries than the ghost variant provides

Use one variant consistently within a list. When one item needs emphasis, use its content or status rather than mixing item variants.

## Options

### List item

- **Checkbox:** Use a checkbox when users select items independently of activating the item.
- **Icon:** Use a meaningful icon and provide a descriptive accessible name when the icon carries information.
- **Label:** Keep the primary title short and specific so items remain easy to scan.
- **Description:** Add supporting information only when it helps users identify or act on the item.
- **Selected:** Use selected state when an item is currently chosen or active.
- **Content:** Use the built-in icon, label and description properties for all common list item layouts. Alternatively, create your own custom layout, e.g. notifications or events.
- **Action content:** Place controls that do not activate the item in the trailing action area. We recommend to use up to four icon buttons or up to two text buttons.

### List

- **Dividers:** Use dividers between direct list items, primarily with the ghost variant.
- **Item gap:** Control the gap between items. We recommend `none` for a continuous list, `sm` (default) or `md` for light separation between items, or `lg` when groups need stronger visual distinction.
- **Selection:** Allow selecting an item in the list.
- **Action on hover:** Show supplementary actions only when the list item is hovered or focused to keep the list uncluttered. Use this approach only if they are also accessible elsewhere in the workflow, e.g. to enable shortcuts for actions available in a detail view.
- **Action alignment:** Center-align actions vertically for single-line items. Top-align them (`start`) when descriptions or custom content create taller items.
- **Reordering:** Enable dragging only when item order has meaning.
  - **Dynamic behavior:** The drop target is indicated by the other items moving. Use for short lists or if users should only reorder items roughly, e.g. to quickly prioritize work items.
  - **Separator behavior:** The drop target is indicated by a separator. Use for long, scrollable lists or where users need to place items between specific items, e.g. to define the exact position of work items in a queue.

![List examples](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8338-10306&t=wY8oAkKcZaMecojj-11)

## Behavior in context

- **Interaction:** The primary item surface supports activation with Enter or Space. Arrow keys move between enabled, visible items, while Home and End move to the first and last item.
  - **Focus:** The list uses roving focus so only the active enabled item enters the tab sequence. Tab moves through available control groups and then out of the list. Arrow right enters the primary or action controls, while arrow left moves within the active control group.
  - **Actions:** The action area can remain visible or appear on hover and focus according to the action visibility setting.
  - **Reordering:** Start pointer dragging from the drag indicator. Disabled and hidden items cannot be reordered. For keyboard input, use Space or Enter to start, the arrow keys to move, Space or Enter to drop and Escape to cancel.
- **Placement:** Keep the list within the layout container that gives it context, e.g. [cards](../card/), [modals](../modal/) or [panes](../panes/). Use a separate list when the purpose or item type changes. Separate list groups may sit side by side in a larger grid, but individual items remain vertically arranged.
  - **Overflow:** List width fills its parent. Items grow with their content in height. Make scrolling discoverable with a scrollbar when the list has constrained height.
  - **Loading more content:** Pagination and lazy loading are outside the component’s scope and need to be added by the application.

## States

List items have these states: Default, hover, active, focused, dragging and disabled.

![List states](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=8309-32187)

## Dos and Don’ts

<div class="dos-and-donts">
  <div class="dos">
    <ul aria-label="Recommended practices">
      <li>Do keep one consistent item type, alignment, and spacing model within a list</li>
      <li>Do keep essential actions visible and keyboard accessible</li>
      <li>Do provide an empty state or spinner when a list has no content or is loading</li>
      <li>Do provide accessible names and logical reading order when using custom content</li>
    </ul>
  </div>
  <div class="donts">
    <ul aria-label="Practices to avoid">
      <li>Don’t use lists for multi-column data comparison, sorting, filtering, or dense editing, use [grids](../grid) or [tables](../html-grid) instead</li>
      <li>Don’t mix list item variants to highlight individual items</li>
      <li>Don’t make pointer dragging the only way to reorder items on touch devices</li>
    </ul>
  </div>
</div>

## Related

- [Grid](../grid)
- [Tree](../tree)
- [Event list](../event-list)
- [Card list](../card-list)
- [Group](../group)
- [Tooltip](../tooltip)
