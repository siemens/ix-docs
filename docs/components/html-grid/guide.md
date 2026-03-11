---
doc-type: 'tab-item'
---

# HTML Table - Usage

HTML tables display structured, tabular data enabling users to compare, sort, and filter information. In our applications, we use tables to present datasets where users need to quickly locate items and perform actions. Typically, we use tables for comparing data across rows and columns, but don't use them for complex layouts or when important information needs emphasis.

![Table overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1680-22044&mode=design&t=iP7h44Wf17P209P7-4)

1. Table header
2. Rows
3. Row checkbox
4. Sorting icon
5. Row actions

## Options

- **Selection**: Enable row selection via checkboxes for bulk operations.
- **Sorting**: Users sort columns by clicking headers (ascending/descending).
- **Filtering**: Enable column-level filtering to display matching rows only.
- **Density**: Offer compact or spacious row heights for different data volumes.
- **Borders**: Choose between bordered or borderless cell design.
- **Row actions**: Configure action buttons or context menus for row operations.
- **Zebra striping**: Optional alternating row colors improve readability.

## Behavior in context

### Sorting

Users click a column header to sort ascending. Click again for descending, and a directional indicator (↑ or ↓) shows the active sort. We recommend supporting single-column sorting for simplicity, though multi-column sorting is possible by holding Ctrl or Cmd while clicking additional columns.

### Filtering

Users click a filter icon in the column header to open the filter dialog. We typically display an active filter indicator in the toolbar even when the filtered column is hidden or scrolled. Show the count of filtered results (e.g., "30 of 2304 records") and allow users to clear all filters or individual filters easily.

### Row selection

Optional checkboxes let users select rows independently of row clicks. We usually include a header checkbox to select or deselect all visible rows at once. Selected rows receive a distinct background highlight, and users can perform bulk operations like delete or export on selected items. Selection persists when users interact with other table elements.

### Interaction

- **Row clicks**: Define whether clicking a row triggers a detail view, selection, or another action. Don't mix these behaviors.
- **Hover feedback**: Rows show visual feedback on hover, indicating interactivity.
- **Action visibility**: Action buttons appear on row hover or selection with increasing prominence.
- **Keyboard support**: Support Tab, Enter, and Arrow keys for navigation.

## States

Tables have several key states: sorted, filtered, selected, empty, loading, and no results. When no data is present, display a clear message. Show skeleton loaders or spinners while fetching data. When filters yield no results, display guidance on adjusting filters. Sorted columns display directional indicators, and filtered states show badges or active filter indicators. Selected rows have a distinct background color, and hover states provide visual feedback on interactivity.

## Dos and Don'ts

- Do display only essential information; use column selection for customization
- Do provide clear visual feedback for selection, sorting, and filtering states
- Do design tables to adapt responsively to different screen sizes
- Do support keyboard navigation for full accessibility
- Don't use tables for unstructured or hierarchical data, use [lists](../list) instead
- Don't embed complex interactions within cells
- Don't rely solely on color for status; use icons or labels for clarity

## Related

- [Data Grid (AG Grid)](../grid)
- [Panes](../panes)
- [Button](../button)
- [Application Header](../application-header)
