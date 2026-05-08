# Breadcrumb - Code

> Code examples and API documentation for the ix-breadcrumb, ix-breadcrumb-item

# Breadcrumb - Code

## Basic

### React Examples

#### breadcrumb.tsx
```tsx
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxBreadcrumb>
      <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>
    </IxBreadcrumb>
  );
};
```

### Angular Examples

#### breadcrumb.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-breadcrumb visibleItemCount="3">
      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
    </ix-breadcrumb>
  `,
})
export default class Breadcrumb {}
```

### Angular Standalone Examples

#### breadcrumb.ts
```ts
import { Component } from '@angular/core';
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBreadcrumb, IxBreadcrumbItem],
  template: `
    <ix-breadcrumb visibleItemCount="3">
      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
    </ix-breadcrumb>
  `,
})
export default class Breadcrumb {}
```

### Vue Examples

#### breadcrumb.vue
```vue
<script setup lang="ts">
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-vue';
</script>

<template>
  <IxBreadcrumb>
    <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>
  </IxBreadcrumb>
</template>
```

## Truncate

### React Examples

#### breadcrumb-truncate.tsx
```tsx
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxBreadcrumb visibleItemCount={3}>
      <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 4"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 5"></IxBreadcrumbItem>
    </IxBreadcrumb>
  );
};
```

### Angular Examples

#### breadcrumb-truncate.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-breadcrumb visibleItemCount="3">
      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 4"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 5"></ix-breadcrumb-item>
    </ix-breadcrumb>
  `,
})
export default class BreadcrumbTruncate {}
```

### Angular Standalone Examples

#### breadcrumb-truncate.ts
```ts
import { Component } from '@angular/core';
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBreadcrumb, IxBreadcrumbItem],
  template: `
    <ix-breadcrumb visibleItemCount="3">
      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 4"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 5"></ix-breadcrumb-item>
    </ix-breadcrumb>
  `,
})
export default class BreadcrumbTruncate {}
```

### Vue Examples

#### breadcrumb-truncate.vue
```vue
<script setup lang="ts">
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-vue';
</script>

<template>
  <IxBreadcrumb :visibleItemCount="3">
    <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 4"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 5"></IxBreadcrumbItem>
  </IxBreadcrumb>
</template>
```

## Lazy loaded next items

### React Examples

#### breadcrumb-next-items.tsx
```tsx
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-react';
import { useEffect, useState } from 'react';

export default () => {
  const [nextItems, setNextItems] = useState<string[]>([]);

  useEffect(() => {
    setNextItems(['Next Item 1']);
  }, [setNextItems]);

  return (
    <IxBreadcrumb nextItems={nextItems}>
      <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>
    </IxBreadcrumb>
  );
};
```

### Angular Examples

#### breadcrumb-next-items.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-breadcrumb [nextItems]="nextItems">
      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
    </ix-breadcrumb>
  `,
})
export default class BreadcrumbNextItems {
  nextItems = ['Next Item 1'];
}
```

### Angular Standalone Examples

#### breadcrumb-next-items.ts
```ts
import { Component } from '@angular/core';
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBreadcrumb, IxBreadcrumbItem],
  template: `
    <ix-breadcrumb [nextItems]="nextItems">
      <ix-breadcrumb-item label="Item 1"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 2"></ix-breadcrumb-item>
      <ix-breadcrumb-item label="Item 3"></ix-breadcrumb-item>
    </ix-breadcrumb>
  `,
})
export default class BreadcrumbNextItems {
  nextItems = ['Next Item 1'];
}
```

### Vue Examples

#### breadcrumb-next-items.vue
```vue
<script setup lang="ts">
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-vue';
import { ref } from 'vue';

const nextItems = ref<string[]>(['Next Item 1']);
</script>

<template>
  <IxBreadcrumb :nextItems="nextItems">
    <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>
    <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>
  </IxBreadcrumb>
</template>
```

## API for ix-breadcrumb

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelPreviousButton | Accessibility label for the dropdown button (ellipsis icon) used to access the dropdown list with conditionally hidden previous items | aria-label-previous-button | string | 'previous' |
| enableTopLayer | Enable Popover API rendering for dropdown. | enable-top-layer | boolean | false |
| nextItems | Items will be accessible through a dropdown |  | string[] | [] |
| subtle | Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover) | subtle | boolean | false |
| visibleItemCount | Excess items will get hidden inside of dropdown | visible-item-count | number | 9 |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| itemClick | Crumb item clicked event | itemClick | string |
| nextClick | Next item clicked event | nextClick | { event: UIEvent; item: string; } |

## API for ix-breadcrumb-item

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelButton | ARIA label for the button Will be set as aria-label for the nested HTML button element | aria-label-button | string \| undefined |  |
| href | URL for the button link. When provided, the button will render as an anchor tag. | href | string \| undefined |  |
| icon | Icon to be displayed next ot the label | icon | string \| undefined |  |
| label | Breadcrumb label | label | string \| undefined |  |
| rel | Specifies the relationship between the current document and the linked document when href is provided. | rel | string \| undefined |  |
| target | Specifies where to open the linked document when href is provided. | target | "_blank" \| "_parent" \| "_self" \| "_top" \| undefined | '_self' |
