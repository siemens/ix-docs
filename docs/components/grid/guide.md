---
doc-type: 'tab-item'
---

# Data Grid (AG Grid) - Usage

Data grids display, organize, and manipulate large, complex datasets with advanced sorting, filtering, grouping, inline editing, and bulk operations. In our applications, we use data grids for sophisticated data analysis and bulk data management. Typically, we use data grids when users work with hundreds or thousands of records, but don’t use them for simple datasets or mobile-first designs.

![Data grid overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7694-2867&t=88rD8RIqPEX6oMWs-4)

1. Column headers with sorting and filtering
2. Row with checkbox selection
3. Sorting indicator
4. Row actions context menu
5. Grouped row sections

## Options

- **Selection**: Enable row selection via checkboxes. Selection is independent of row clicks.
- **Sorting**: Support single or multi-column sorting (Ctrl/Cmd+click). Supports ascending and descending for all data types.
- **Filtering**: Column-level filters with operators (equals, contains, range). Support AND/OR combinations.
- **Grouping**: Group rows by selected criteria. Grouped sections collapse and expand via blind controls.
- **Column visibility**: Show or hide columns. Provide meaningful defaults and allow custom arrangements.
- **Column pinning**: Pin important columns to remain visible during horizontal scroll.
- **Column reordering**: Allow drag-and-drop reordering of columns via handle. Protect pinned columns from accidental moves.
- **Inline editing**: Enable cell editing directly in the grid for single or multiple records.
- **Detail view**: Trigger via row click or context menu. Display as drawer, side pane, or modal dialog.
- **Multiple values**: Support cells with multiple values (e.g., IP addresses, tags). Visually separate values.

## Behavior in context

### Sorting

Click a column header to sort ascending. Click again for descending. The active sort column displays a directional indicator (↑ or ↓). We recommend supporting multi-column sorting by holding Ctrl (Windows) or Cmd (Mac) while clicking additional columns. Show sort priority numbers for clarity.

### Filtering

Click a filter icon in the column header to open the filter dialog. We typically display an active filter indicator in the toolbar even when the filtered column is hidden or scrolled. Show the count of filtered results (e.g., "12 of 248 records match filters") and allow easy removal of individual or all filters. For complex needs, support range-based conditions (value > 5 AND value < 20) and AND/OR logic.

### Grouping

Users select a column to group by (e.g., Status, Department, Device Type). Rows are organized into collapsible sections (blinds) where users click section headers to expand or collapse grouped rows. We typically provide toolbar buttons to expand or collapse all groups at once, and support nested grouping (secondary grouping within primary groups). Optional: display summaries (count, sum, average) for numeric columns within groups.

### Row selection and actions

Checkboxes let users select rows independently of row clicks. We usually include a header checkbox to select or deselect all visible rows at once. Selected rows have a distinct background highlight. A context menu (three-dot icon) appears on row hover or click. We recommend limiting primary actions to 2-3 direct buttons; group remaining actions in a dropdown menu. Action buttons appear with reduced prominence by default; increase visibility on hover or selection. When multiple rows are selected, offer bulk operation buttons in the toolbar.

### Bulk operations

Users select multiple rows via checkboxes or header select-all. The toolbar displays bulk actions (edit, delete, export, etc.) when rows are selected. For destructive actions, show a confirmation dialog with the count of affected items. After completion, show a toast notification with results.

### Context menu

Display up to 2 important actions directly as icon buttons. Group remaining actions in a dropdown menu. Pin the context menu column to the right side of the table to ensure actions remain visible during horizontal scroll. If panes or overlays may cover the context menu, ensure all critical actions are available within detail views. Provide keyboard shortcuts for common actions (e.g., Ctrl+E for Edit).

### Detail view

Users click a row or context menu to open a detail view. Detail views open as a drawer (slide-in panel), side pane, or modal. We typically provide next and previous buttons for navigation within the detail view. The grid remains visible and accessible while the detail view is open. Highlight the row being detailed (distinct from selection state). Selection persists when opening detail views, and users can view different rows sequentially. Provide the same context menu and editing capabilities within the detail view.

### Column management and multiple values

Users click a settings icon (gear or funnel) to show or hide columns. Provide a "Reset to default" button in column settings. Allow drag-and-drop reordering of columns via a handle. Pin important columns to remain visible during horizontal scroll. Save user preferences in local storage. For cells with multiple values (e.g., IP addresses, tags), visually separate values with commas, line breaks, or chips. Support filtering by individual values within multi-value cells, and grouping by multi-value columns. Note: Sorting is not supported for multi-value columns.

## States

Data grids have multiple states: default, sorted, filtered, selected, loading, grouped, and edit mode. In a default state, data grids display rows and columns with minimal visual interaction. In a sorted state, active sort columns display directional indicators (↑ or ↓). In a filtered state, active filters show badges and match counts. In a selected state, rows are highlighted with bulk action buttons displayed in the toolbar. In a loading state, skeleton loaders or spinners indicate data is being fetched. In a grouped state, sections show with expand/collapse indicators. In an edit mode state, cells display input controls while non-editable content is grayed out.

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
