# Category filter - Code

> Code examples and API documentation for the ix-category-filter

# Category filter - Code

## Basic

### React Examples

#### category-filter.tsx
```tsx
import { FilterState, LogicalFilterOperator } from '@siemens/ix';
import { IxCategoryFilter } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [filter] = useState<FilterState>({
    tokens: ['Custom filter text'],
    categories: [
      {
        id: 'ID_1',
        value: 'IBM',
        operator: LogicalFilterOperator.NOT_EQUAL,
      },
    ],
  });

  const [categories] = useState({
    ID_1: {
      label: 'Vendor',
      options: ['Apple', 'MS', 'Siemens'],
    },
    ID_2: {
      label: 'Product',
      options: ['iPhone X', 'Windows', 'APS'],
    },
  });

  return (
    <IxCategoryFilter
      placeholder="Filter by"
      uniqueCategories={false}
      filterState={filter}
      categories={categories}
    ></IxCategoryFilter>
  );
};
```

### Angular Examples

#### category-filter.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-category-filter
      placeholder="Filter by"
      [uniqueCategories]="uniqueCategories"
      [categories]="categories"
      [filterState]="filterState"
    ></ix-category-filter>
  `,
})
export default class CategoryFilter {
  uniqueCategories = true;
  filterState = {
    tokens: ['Custom filter text'],
    categories: [
      {
        id: 'ID_1',
        value: 'IBM',
        operator: 'Not equal',
      },
    ],
  };
  categories = {
    ID_1: {
      label: 'Vendor',
      options: ['Apple', 'MS', 'Siemens'],
    },
    ID_2: {
      label: 'Product',
      options: ['iPhone X', 'Windows', 'APS'],
    },
  };
}
```

### Angular Standalone Examples

#### category-filter.ts
```ts
import { Component } from '@angular/core';
import { IxCategoryFilter } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxCategoryFilter],
  template: `
    <ix-category-filter
      placeholder="Filter by"
      [uniqueCategories]="uniqueCategories"
      [categories]="categories"
      [filterState]="filterState"
    ></ix-category-filter>
  `,
})
export default class CategoryFilter {
  uniqueCategories = true;
  filterState = {
    tokens: ['Custom filter text'],
    categories: [
      {
        id: 'ID_1',
        value: 'IBM',
        operator: 'Not equal',
      },
    ],
  };
  categories = {
    ID_1: {
      label: 'Vendor',
      options: ['Apple', 'MS', 'Siemens'],
    },
    ID_2: {
      label: 'Product',
      options: ['iPhone X', 'Windows', 'APS'],
    },
  };
}
```

### Vue Examples

#### category-filter.vue
```vue
<script setup lang="ts">
import { FilterState, LogicalFilterOperator } from '@siemens/ix';
import { IxCategoryFilter } from '@siemens/ix-vue';

const filter: FilterState = {
  tokens: ['Custom filter text'],
  categories: [
    {
      id: 'ID_1',
      value: 'IBM',
      operator: LogicalFilterOperator.NOT_EQUAL,
    },
  ],
};

const categories = {
  ID_1: {
    label: 'Vendor',
    options: ['Apple', 'MS', 'Siemens'],
  },
  ID_2: {
    label: 'Product',
    options: ['iPhone X', 'Windows', 'APS'],
  },
};
</script>

<template>
  <IxCategoryFilter
    placeholder="Filter by"
    :uniqueCategories="false"
    :filterState="filter"
    :categories="categories"
  ></IxCategoryFilter>
</template>
```

## Without categories

### React Examples

#### category-filter-suggestions.tsx
```tsx
import { IxCategoryFilter } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [suggestions] = useState(['Item 1', 'Item 2']);

  return (
    <IxCategoryFilter
      placeholder="Filter by"
      suggestions={suggestions}
    ></IxCategoryFilter>
  );
};
```

### Angular Examples

#### category-filter-suggestions.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-category-filter
      placeholder="Filter by"
      [suggestions]="suggestions"
    ></ix-category-filter>
  `,
})
export default class CategoryFilterSuggestions {
  suggestions = ['Item 1', 'Item 2'];
}
```

### Angular Standalone Examples

#### category-filter-suggestions.ts
```ts
import { Component } from '@angular/core';
import { IxCategoryFilter } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxCategoryFilter],
  template: `
    <ix-category-filter
      placeholder="Filter by"
      [suggestions]="suggestions"
    ></ix-category-filter>
  `,
})
export default class CategoryFilterSuggestions {
  suggestions = ['Item 1', 'Item 2'];
}
```

### Vue Examples

#### category-filter-suggestions.vue
```vue
<script setup lang="ts">
import { IxCategoryFilter } from '@siemens/ix-vue';
import { ref } from 'vue';

const suggestions = ref(['Item 1', 'Item 2']);
</script>

<template>
  <IxCategoryFilter
    placeholder="Filter by"
    :suggestions="suggestions"
  ></IxCategoryFilter>
</template>
```

## API for ix-category-filter

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelFilterInput | ARIA label for the filter input Will be set as aria-label on the nested HTML input element | aria-label-filter-input | string \| undefined |  |
| ariaLabelOperatorButton | ARIA label for the operator button Will be set as aria-label on the nested HTML button element | aria-label-operator-button | string \| undefined |  |
| ariaLabelResetButton | ARIA label for the reset button Will be set as aria-label on the nested HTML button element | aria-label-reset-button | string \| undefined |  |
| categories | Configuration object hash used to populate the dropdown menu for type-ahead and quick selection functionality. Each ID maps to an object with a label and an array of options to select from. |  | undefined \| { [id: string]: { label: string; options: string[]; }; } |  |
| disabled | If true the filter will be in disabled state | disabled | boolean | false |
| enableTopLayer | Enable Popover API rendering for dropdown. | enable-top-layer | boolean | false |
| filterState | A set of search criteria to populate the component with. |  | FilterState \| undefined |  |
| hideIcon | Allows to hide the icon inside the text input. Defaults to false | hide-icon | boolean | false |
| i18nPlainText | i18n label for 'Filter by text' | i18n-plain-text | string | 'Filter by text' |
| icon | The icon next to the actual text input Defaults to 'search' | icon | string \| undefined |  |
| labelCategories | i18n | label-categories | string | 'Categories' |
| nonSelectableCategories | In certain use cases some categories may not be available for selection anymore. To allow proper display of set filters with these categories this ID to label mapping can be populated. Configuration object hash used to supply labels to the filter chips in the input field. Each ID maps to a string representing the label to display. |  | undefined \| { [id: string]: string; } | {} |
| placeholder | Placeholder text to be displayed in an empty input field. | placeholder | string \| undefined |  |
| readonly | If true the filter will be in readonly mode | readonly | boolean | false |
| staticOperator | If set categories will always be filtered via the respective logical operator. Toggling of the operator will not be available to the user. | static-operator | LogicalFilterOperator.EQUAL \| LogicalFilterOperator.NOT_EQUAL \| undefined |  |
| suggestions | A list of strings that will be supplied as type-ahead suggestions not tied to any categories. |  | string[] \| undefined |  |
| uniqueCategories | If set to true, prevents that a single category can be set more than once. An already set category will not appear in the category dropdown if set to true. | unique-categories | boolean | false |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| categoryChanged | Event dispatched whenever a category gets selected in the dropdown | categoryChanged | string |
| filterChanged | Event dispatched whenever the filter state changes. | filterChanged | FilterState |
| filterCleared | Event dispatched whenever the filter gets cleared. | filterCleared | void |
| inputChanged | Event dispatched whenever the text input changes. | inputChanged | InputState |
