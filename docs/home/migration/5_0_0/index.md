---
sidebar_position: 0
sidebar_title: Upgrade to V5
title: Upgrade to V5
doc-type: banner
description: Welcome to the migration guide for upgrading from Siemens Industrial Experience design system V4 to V5. This guide supports you through all the major changes.
---

import ButtonMigrationHelper from '@site/src/components/ButtonMigrationHelper/ButtonMigrationHelper';

# Upgrade to V5.0.0

## ix-category-filter

The category filter has been significantly reworked to support full operand-based filtering, a cleaner data model and better UX (chip overflow handling, loading/error states, keyboard navigation).

### Improvements

- **Multi-step filter selection**: Category → Operand → Value, with a configurable list of operands (equals, contains, starts with, etc.)
- **Unified filter value model**: Filter chips and free-text search tokens are now represented as a single typed array (`FilterAndSearchValue[]`)
- **Chip overflow**: Excess chips are hidden and accessible via a "+N more" dropdown
- **New states**: `isLoading` and `hasError` props for async data scenarios
- **Disable free-text search**: `disableSearch` prop to restrict users to category-only filters
- **Keyboard navigation**: Full arrow key, Enter, Backspace and Escape support in the dropdown

### Changed properties

| ❌ **Old**                                                | ✅ **Replace with**                                                 |
| :-------------------------------------------------------- | :------------------------------------------------------------------ |
| `filterState` (`FilterState`)                             | `filterState` (`FilterAndSearchValue[]`)                            |
| `categories` (object hash `{ [id]: { label, options } }`) | `categories` (`FilterCategory[]` array of `{ key, label, values }`) |
| `staticOperator` (`LogicalFilterOperator`)                | `staticOperand` (string key from the `operands` array)              |
| `ariaLabelOperatorButton`                                 | _(removed — no replacement)_                                        |

### Removed types

| ❌ **Removed**               | ✅ **Replace with**                                  |
| :--------------------------- | :--------------------------------------------------- |
| `FilterState` class          | `FilterAndSearchValue[]`                             |
| `LogicalFilterOperator` enum | `FilterOperand` interface (`{ key, label, symbol }`) |

### Migration

#### `filterState`

Old `FilterState` had two separate arrays — `tokens` (free-text) and `categories` (structured). The new model uses a single discriminated union array:

```ts
// ❌ Old
const state: FilterState = {
  tokens: ['foo'],
  categories: [{ id: 'status', value: 'active', operator: LogicalFilterOperator.EQUAL }],
};

// ✅ New
const state: FilterAndSearchValue[] = [
  { type: 'search', value: 'foo' },
  {
    type: 'filter',
    category: 'status',
    operand: { key: 'equals', label: 'equals (=)', symbol: '=' },
    value: 'active',
  },
];
```

#### `categories`

```ts
// ❌ Old
const categories = {
  status: { label: 'Status', options: ['active', 'inactive'] },
};

// ✅ New
const categories: FilterCategory[] = [{ key: 'status', label: 'Status', values: ['active', 'inactive'] }];
```

#### `staticOperator`

```html
<!-- ❌ Old -->
<ix-category-filter static-operator="Equal"></ix-category-filter>

<!-- ✅ New: use a key from the operands array -->
<ix-category-filter static-operand="equals"></ix-category-filter>
```

#### `filterChanged` event handler

```ts
// ❌ Old
filter.addEventListener('filterChanged', (e: CustomEvent<FilterState>) => {
  const tokens = e.detail.tokens;
  const categories = e.detail.categories; // { id, value, operator }[]
});

// ✅ New
filter.addEventListener('filterChanged', (e: CustomEvent<FilterAndSearchValue[]>) => {
  const searches = e.detail.filter((v) => v.type === 'search');
  const filters = e.detail.filter((v) => v.type === 'filter');
});
```
