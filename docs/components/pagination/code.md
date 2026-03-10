# Pagination - Code

> Code examples and API documentation for the ix-pagination

# Pagination - Code

## Basic

### React Examples

#### pagination.tsx
```tsx
import { IxPagination } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxPagination count={100}></IxPagination>
    </>
  );
};
```

### Angular Examples

#### pagination.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-pagination count="100"></ix-pagination> `,
})
export default class Pagination {}
```

### Angular Standalone Examples

#### pagination.ts
```ts
import { Component } from '@angular/core';
import { IxPagination } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxPagination],
  template: ` <ix-pagination count="100"></ix-pagination> `,
})
export default class Pagination {}
```

### Vue Examples

#### pagination.vue
```vue
<script setup lang="ts">
import { IxPagination } from '@siemens/ix-vue';
</script>

<template>
  <IxPagination :count="100"></IxPagination>
</template>
```

## Advanced

### React Examples

#### pagination-advanced.tsx
```tsx
import { IxPagination } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxPagination advanced showItemCount count={100}></IxPagination>
    </>
  );
};
```

### Angular Examples

#### pagination-advanced.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-pagination advanced showItemCount count="100"></ix-pagination>
  `,
})
export default class Pagination {}
```

### Angular Standalone Examples

#### pagination-advanced.ts
```ts
import { Component } from '@angular/core';
import { IxPagination } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxPagination],
  template: `
    <ix-pagination advanced showItemCount count="100"></ix-pagination>
  `,
})
export default class Pagination {}
```

### Vue Examples

#### pagination-advanced.vue
```vue
<script setup lang="ts">
import { IxPagination } from '@siemens/ix-vue';
</script>

<template>
  <IxPagination advanced show-item-count :count="100"></IxPagination>
</template>
```

## API for ix-pagination

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| advanced | Advanced mode | advanced | boolean | false |
| ariaLabelChevronLeftIconButton | ARIA label for the chevron left icon button Will be set as aria-label on the nested HTML button element | aria-label-chevron-left-icon-button | string \| undefined |  |
| ariaLabelChevronRightIconButton | ARIA label for the chevron right icon button Will be set as aria-label on the nested HTML button element | aria-label-chevron-right-icon-button | string \| undefined |  |
| ariaLabelPageSelection | ARIA label for the page selection input Will be set as aria-label on the nested HTML input element | aria-label-page-selection | string | 'Page selection input' |
| count | Total number of pages | count | number | 0 |
| hideItemCount | Hide item count in advanced mode | hide-item-count | boolean | false |
| i18nItems | i18n label for 'Items' | i18n-items | string | 'Items' |
| i18nOf | i18n label for 'of' | i18n-of | string | 'of' |
| i18nPage | i18n label for 'Page' | i18n-page | string | 'Page' |
| itemCount | Number of items shown at once. Can only be changed in advaced mode. | item-count | number | 15 |
| selectedPage | Zero based index of currently selected page | selected-page | number | 0 |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| itemCountChanged | Item count change event | itemCountChanged | number |
| pageSelected | Page selection event | pageSelected | number |
