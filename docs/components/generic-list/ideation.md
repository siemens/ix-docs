---
title: 'Generic list - ideation'
description: 'Research and design notes for the generic list component.'
---

# Generic list - ideation

The generic list (`ix-list` and `ix-list-item`) is a single-column collection for related items that need more structure or interaction than a plain list, but do not need the columns and data operations of a table.

## 1. Anatomy

A list fills the available width of its parent and grows in height to fit its content. The standard item:

1. Leading icon
2. Primary label or title
3. Supporting description or subtitle
4. Status label, pill or other supporting content
5. Actions

Multi-line descriptions, notification content, and custom content increase the item height to fit. The default slot places non-interactive custom content after the standard icon, label, and description layout. The `action` slot places trailing interactive controls that do not activate the item.

A divider appears within the item boundary. A separator is a distinct content element that adds space between item groups. Keep those concepts separate: use a divider for item delineation and a separator for a meaningful group boundary.

**Additional information**

- The branch implementation renders the list with `role="list"` and items with `role="listitem"`

**Open discussion points**

- ▶️ `ix-list-separator`-> option or separate component? Any special recommendations?
- ▶️ What are the standard-item anatomy for status labels and pills?
- ▶️How do we document the templates?

## 2. When to use

Use the generic list when:

- Content is straightforward, related, and primarily single-column
- Users need to scan items vertically and possibly activate, select, or reorder them
- Items need a consistent combination of icon, label, description, status, and actions
- A lighter alternative to a table is useful for basic data
- The list sits inside a card, modal, side panel, or another layout container
- A team needs controlled selection, custom content, or contextual actions without building a row pattern from scratch

Choose another component when:

- Data needs multiple columns, sorting, filtering, comparison, or dense editing: use a [grid](../grid) or table pattern
- Content has parent-child hierarchy: use a [tree](../tree)
- Items represent events with timestamps or event-specific details: use an [event list](../event-list)
- Items are primarily visual summaries arranged as cards: use a [card list](../card-list)
- The content is only a semantic list of text: use native HTML list elements

Keep the list focused on one item type and one primary purpose. For our software, concise labels and predictable rows support fast scanning under time pressure; the same recommendation applies to any operational interface.

**Additional information**

- Siemens Element positions list groups as a responsive, lightweight alternative to tables for straightforward single-column data
- Material recommends logical ordering, short scannable items, and consistent placement of icons, text, and actions
- Carbon recommends moving complex, sortable, filterable, or selection-heavy data to a data table
- Separate list groups may sit side by side when they align to a larger grid, but individual items should remain vertically arranged

**Open discussion points**

- ▶️ Should we include a formal decision table comparing generic list, grid, tree, event list, and card list?
- ▶️ Define the maximum content complexity before custom content should become a dedicated component or pattern
- ▶️ If content is non-interactive and simple text -> should native HTML lists be used?

## Variants

- Filled (default): Use for standard row
- Ghost: Surrounding surface already provides containment
- Outline: If stronger item boundary is needed

▶️ Is mixing within a list encouraged / in specific scenarios?

## 3. Options

### List

- **`hasDivider`:**

   Displays dividers between direct list items. ▶️ when?
- **`itemGap`:** Sets the space between list items in pixels
    - Use 0 for cotinuous list
    - Use 4 or 8 for light separation
    - Use 12 (default) for strong separation (if item content needs clearer grouping)
- **`checkbox`:** Sets the default selection-checkbox setting for items that do not define their own setting
- **`actionOnHover`:** Sets the default behavior for showing action content on hover or focus
- **`actionSlotAlignment`:** Sets the default vertical alignment of action content to `start` or `center`
- **`draggable`:** Enables pointer and keyboard reordering
- **`dragBehavior`:** Chooses the visual behavior while dragging; supported values are `dynamic` (default) and `separator`

### List item

- **`label`:** Provides the standard-layout title
- **`description`:** Provides supporting text below the label
- **`icon`:** Show icon on the left -> add a meaningful name to `ariaLabelIcon` for assistive technology
- **`selected`:** Shows the item as selected
- **`checkbox`:** Displays selection checkbox semantics - use only when users select items independently of activating them
- **`hasDivider`: **Displays a divider below the item
- **`actionOnHover`:** Shows action-slot content only on hover or focus
- **`actionSlotAlignment`:** Align action content at center (default) or start
- **Default slot:** Use for non-interactive custom content after the standard layout
- **`action` slot:** Use for trailing controls that do not activate the item
    - Typical action examples include a context menu, up to four icon buttons, up to two text buttons, or a toggle switch
    - Keep actions secondary to the primary item content and give every interactive control a meaningful accessible name
    - Use existing IX buttons, checkboxes, toggles, menus, pills, badges, icons, and tooltips rather than recreating them

### Recommendations and best practices

- Set list-level defaults when most items share the same treatment, then override only genuine exceptions at item level
- Reserve hover-only actions for supplementary actions; keep essential actions visible or keyboard reachable
- Use custom content when the standard layout cannot represent the item, not to bypass consistent alignment

**Additional discussion points**

- ▶️ Is`actionSlotAlignment` a visual option or reserved for advanced layouts?
- ▶️ Is `itemGap: 12` also default in Figma?
- ▶️ Are "max 4 icon buttons" and "max 2 buttons" hard limits or design recommendations?
- ▶️ Confirm the intended label truncation and tooltip behavior; the branch API has no truncation option

## 4. Behavior in context

- Height of a list item expands with its content

### Interaction

The list supports mouse, touch, keyboard, and screen-reader-oriented interaction:

- The active enabled item is the only enabled, visible item in the list tab sequence
- `ArrowUp` and `ArrowDown` move between enabled, visible items
- `Home` and `End` move to the first and last enabled item
- `ArrowRight` enters the primary controls or action controls; `ArrowLeft` moves within the active control group
- `Tab` moves through the item’s available control groups and out of the list
- `Space` or `Enter` activates the primary item surface
- The drag gripper uses `Space` or `Enter` to begin keyboard reordering, arrow keys to move, `Space` or `Enter` to drop, and `Escape` to cancel
- Pointer dragging starts from the drag gripper; disabled and hidden items cannot be reordered
- Interactive content in the default or action slots must not activate the primary item surface

### Responsive behavior

Keep the list width fluid and allow item height to grow with descriptions, notifications, and custom content. Touch layouts should support selection and activation without relying on hover. The Figma specification calls out dynamic drag behavior as desktop-only, so do not make pointer-drag affordances essential on touch devices.

### Overflow

- List
    - list width as fill or 100% of the parent and the height as hug or content-driven
    - A scrollable list should make overflow discoverable with a scrollbar
- List item
    - ▶️ Does text truncate or wrap? (-> long identifiers in industrial contexts)
    - ▶️ Tooltips?

### Screen readers and accessible input

Use semantic list roles, preserve logical reading order, and provide accessible names for icons, checkboxes, drag controls, and actions. A custom item still needs a meaningful accessible label. Announce reorder status and position changes, and ensure disabled and selected states are exposed semantically.

**Additional information**

- It uses roving focus behavior and remembers the active item while synchronizing child items
- It announces lift, movement, drop, cancellation, and position information during keyboard reorder
- It cancels an active reorder when focus leaves the list in the relevant interaction path
- Element and Material both emphasize responsive layouts, concise content, and predictable item alignment
- Figma documents reading order as icon, title, label or subtitle, then action

**Open discussion points**

- ▶️ Validate the exact Tab behavior for custom focusable content in the default slot -> do??

## 5. Statuses

The component should document these states separately for list items and controls:

- Default
- Hover
- Focus
- Active
- Disabled
- Dragging

**Additional information**

- `selected` is reflected by the item and maps to `aria-pressed` when checkbox semantics are not active
- `disabled` prevents activation and makes action content inert
- The action slot can remain persistent or appear on hover/focus depending on `actionOnHover`
- The Figma edge-case examples include long text, tooltip disclosure, always-visible pills, multi-line content, and scrollbars

**Open discussion points**

- ▶️ How about loading, error and empty states?
- ▶️ Is overflow tooltip a component guarantee or an author responsibility?

## 6. Other Dos and Don’ts

- Do use one consistent item type, alignment, and spacing model within a list
- Do make essential actions visible and keyboard accessible
- Don’t use a generic list for multi-column comparison, sorting, filtering, or dense editing, use Grid/Tables instead
- Don’t hide the only way to complete an essential task behind hover

**Additional information**

- Carbon advises wrapping list content rather than forcing excessive width and recommends data tables for complex data
- Material advises logical ordering, short items, and consistent icon, text, and action placement
- Element recommends concise items and responsive behavior in cards, modals, side panels, and similar containers
- Industrial interfaces may involve glare, high-contrast displays, gloves, and time pressure; validate more than a conventional mouse-and-keyboard path

**Open discussion points**

- ▶️ Identify representative industrial examples for the final documentation playgrounds

## References

- [IX generic-list overview](./index.mdx)
- [IX generic-list code examples](./code.mdx)
- [Siemens IX `feature/1795_generic-list` branch](https://github.com/siemens/ix/tree/feature/1795_generic-list)
- [Siemens IX generic-list pull request](https://github.com/siemens/ix/pull/2724)
- [Figma iX Components - List](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=119427-28530)
- [Siemens Element - List group](https://element.siemens.io/components/lists-tables-trees/list-group/)
- [Material 3 - Lists](https://m3.material.io/components/lists/overview)
- [Carbon - List usage](https://carbondesignsystem.com/components/list/usage/)
- [IX design-system component catalogue](https://designsystems.surf/design-systems/siemens-ix)
- [W3C - Designing for web accessibility](https://www.w3.org/WAI/tips/designing/)
