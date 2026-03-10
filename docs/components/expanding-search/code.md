# Expanding search - Code

> Code examples and API documentation for the ix-expanding-search

# Expanding search - Code

## Basic

### React Examples

#### expanding-search.tsx
```tsx
import { IxExpandingSearch } from '@siemens/ix-react';

export default () => {
  return <IxExpandingSearch placeholder="Search..."></IxExpandingSearch>;
};
```

### Angular Examples

#### expanding-search.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-expanding-search placeholder="Search..."></ix-expanding-search>
  `,
})
export default class ExpandingSearch {}
```

### Angular Standalone Examples

#### expanding-search.ts
```ts
import { Component } from '@angular/core';
import { IxExpandingSearch } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxExpandingSearch],
  template: `
    <ix-expanding-search placeholder="Search..."></ix-expanding-search>
  `,
})
export default class ExpandingSearch {}
```

### Vue Examples

#### expanding-search.vue
```vue
<script setup lang="ts">
import { IxExpandingSearch } from '@siemens/ix-vue';
</script>

<template>
  <IxExpandingSearch placeholder="Search..."></IxExpandingSearch>
</template>
```

## API for ix-expanding-search

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelClearIconButton | ARIA label for the clear icon button Will be set as aria-label on the nested HTML button element | aria-label-clear-icon-button | string \| undefined |  |
| ariaLabelSearchIconButton | ARIA label for the search icon button Will be set as aria-label on the nested HTML button element | aria-label-search-icon-button | string \| undefined |  |
| ariaLabelSearchInput | ARIA label for the search input Will be set as aria-label on the nested HTML input element | aria-label-search-input | string \| undefined |  |
| fullWidth | If true the search field will fill all available horizontal space of it's parent container when expanded. | full-width | boolean | false |
| icon | Search icon | icon | string \| undefined |  |
| placeholder | Placeholder text | placeholder | string | 'Enter text here' |
| value | Default value | value | string | '' |
| variant | button variant | variant | "danger-primary" \| "danger-secondary" \| "danger-tertiary" \| "primary" \| "secondary" \| "subtle-primary" \| "subtle-secondary" \| "subtle-tertiary" \| "tertiary" | 'tertiary' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| valueChange | Value changed | valueChange | string |
