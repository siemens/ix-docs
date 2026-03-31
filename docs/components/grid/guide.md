---
doc-type: 'tab-item'
---

# Data Grid (AG Grid) - Usage

[AG Grid](https://www.ag-grid.com) displays large datasets with advanced interactive features such as sorting, filtering, and row selection. Use it when you need to present tabular data with complex interactions and rich customization options.

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
    - **Alternate row styling**: Use striped rows to improve readability. We typically use it for datasets with many columns to help users track across rows.
    - **[Grouping](https://www.ag-grid.com/javascript-data-grid/grouping/)**: Group rows by selected criteria. Grouped sections collapse and expand via interactive controls.
    - **[Selection](https://www.ag-grid.com/javascript-data-grid/row-selection/)**: Enable row selection via checkboxes. Selection is independent of row clicks.
    - **Detail view**: Open [modals](../modal) or [panes](../panes) via row click or context menu.
- **Columns**:
    - **[Sorting](https://www.ag-grid.com/javascript-data-grid/row-sorting/)**: Support single or multi-column sorting. Supports ascending and descending for all data types.
    - **[Visibility](https://www.ag-grid.com/javascript-data-grid/tool-panel-columns/) and [reordering](https://www.ag-grid.com/javascript-data-grid/row-dragging/)**: Enable to show or hide columns, or to reorder columns via drag-and-drop.
- **Cells**:
    - **[Inline editing](https://www.ag-grid.com/javascript-data-grid/cell-editing/)**: Enable cell editing directly in the grid for single or multiple records.

## Behavior in context

- **Interaction**:
    - **Column header**: Click column header to sort. Show active sort indicators. Support multi-column sorting with Ctrl/Cmd+click.
    - **Selection**: Click row checkbox to select. Header checkbox selects/deselects all visible rows. Row clicks open detail view without affecting selection.
    - **Row selection and actions**: Users select rows via independent checkboxes (with a header checkbox for all visible rows), access actions via context menu.
- **Overflow**: By default, if the total [width of columns](https://www.ag-grid.com/javascript-data-grid/column-sizing/#auto-sizing-columns) exceeds the grid width, horizontal scrolling is enabled.

## States

Data grid columns, rows and cells have multiple states: Default, hover, active and focused.

![Data grid states](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7743-1852&t=pnIkODidZu9oNqXj-4)

## Dos and Don'ts

- Do only display primary information by default and use [column tool panels](https://www.ag-grid.com/javascript-data-grid/tool-panel-columns/) for secondary information
- Do keep selection and row-click behavior independent to avoid confusion
- Do design responsive layouts that adapt to different screen sizes
- Don’t embed heavily interactive components within grid cells
- Don’t rely solely on color for status, use icons, labels or badges instead

## Related

- [HTML Table](../html-grid)
- [Key value list](../key-value-list)
- [KPI](../kpi)
- [Panes](../panes)
- [Modal](../modal)
