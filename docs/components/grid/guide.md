---
doc-type: 'tab-item'
---

# Data Grid (AG Grid) - Usage

![Data grid overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7694-2867&t=DhTc5f9RNL434mRu-4)

1. Header
2. Row with checkbox selection
3. Column sorting
4. Row context menu

## Options

:::info

Only a subset of the most commonly used options and features are listed here. For a complete set of available options and configuration, please refer to the [official AG Grid documentation](https://www.ag-grid.com).

:::

- **[Filtering](https://www.ag-grid.com/javascript-data-grid/filtering-overview/)**: Column-level filters with operators (equals, contains, range). Support AND/OR combinations.
- **Rows**:
    - **Grouping**: Group rows by selected criteria. Grouped sections collapse and expand via blind controls.
    - **Selection**: Enable row selection via checkboxes. Selection is independent of row clicks.
    - **Detail view**: Trigger via row click or context menu. Display as drawer, side pane, or modal dialog.
- **Columns**:
    - **[Sorting](https://www.ag-grid.com/javascript-data-grid/row-sorting/)**: Support single or multi-column sorting. Supports ascending and descending for all data types.
    - **Visibility and [reordering](https://www.ag-grid.com/javascript-data-grid/row-dragging/)**: Enable to show or hide columns, or to reorder columns via drag-and-drop.
- **Cells**:
    - **Inline editing**: Enable cell editing directly in the grid for single or multiple records.

## Behavior in context

- **Interaction**:
    - **Column header**: Click column header to sort. Show active sort indicators. Support multi-column sorting with Ctrl/Cmd+click.
    - **Selection**: Click row checkbox to select. Header checkbox selects/deselects all visible rows. Row clicks open detail view without affecting selection.
    - **Row selection and actions**: Users select rows via independent checkboxes (with a header checkbox for all visible rows), access actions via context menu.

## States

Data grid columns, rows and cells have multiple states: Default, hover, active and focused.

## Dos and Don'ts

- Do display only essential information and use column selection to manage complexity
- Do provide clear visual feedback for selection, sorting, filtering, and grouping states
- Do keep selection and row-click behavior independent to avoid confusion
- Do support full keyboard navigation and offer shortcuts for common actions
- Do design responsive layouts that adapt to different screen sizes
- Don’t overload tables with too many columns; use column selection and sensible defaults
- Don’t mix selection with navigation (e.g., checkbox click should select, not navigate)
- Don’t use complex nested menus or hidden actions that require discovery
- Don’t embed heavily interactive components within grid cells
- Don’t rely solely on color for status; use icons, labels, or badges

## Related

- [HTML Table](../html-grid)
- [Panes](../panes)
- [Button](../button)
- [Dialog](../modal)
- [Application Header](../application-header)
