# Development

> Code examples and API documentation for the ix-group, ix-group-item

# Development

## Basic

### React Examples

#### group.tsx
```tsx
import { IxGroup, IxGroupItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxGroup header="Header text" subHeader="Subheader text">
      <IxGroupItem text="Example text 1"></IxGroupItem>
      <IxGroupItem text="Example text 2"></IxGroupItem>
      <IxGroupItem text="Example text 3"></IxGroupItem>
    </IxGroup>
  );
};
```

### Angular Examples

#### group.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-group header="Header text" subHeader="Subheader text">
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item text="Example text 3"></ix-group-item>
    </ix-group>
  `,
})
export default class Group {}
```

### Angular Standalone Examples

#### group.ts
```ts
import { Component } from '@angular/core';
import { IxGroup, IxGroupItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxGroup, IxGroupItem],
  template: `
    <ix-group header="Header text" subHeader="Subheader text">
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item text="Example text 3"></ix-group-item>
    </ix-group>
  `,
})
export default class Group {}
```

### Vue Examples

#### group.vue
```vue
<script setup lang="ts">
import { IxGroup, IxGroupItem } from '@siemens/ix-vue';
</script>

<template>
  <IxGroup header="Header text" sub-header="Subheader text">
    <IxGroupItem text="Example text 1"></IxGroupItem>
    <IxGroupItem text="Example text 2"></IxGroupItem>
    <IxGroupItem text="Example text 3"></IxGroupItem>
  </IxGroup>
</template>
```

## Suppress header selection

### React Examples

#### group-header-suppressed.tsx
```tsx
import { IxGroup, IxGroupItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxGroup
      header="Header text"
      subHeader="Subheader text"
      suppressHeaderSelection
    >
      <IxGroupItem text="Example text 1"></IxGroupItem>
      <IxGroupItem text="Example text 2"></IxGroupItem>
      <IxGroupItem text="Example text 3"></IxGroupItem>
    </IxGroup>
  );
};
```

### Angular Examples

#### group-header-suppressed.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-group
      header="Header text"
      subHeader="Subheader text"
      suppressHeaderSelection
    >
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item text="Example text 3"></ix-group-item>
    </ix-group>
  `,
})
export default class GroupHeaderSuppressed {}
```

### Angular Standalone Examples

#### group-header-suppressed.ts
```ts
import { Component } from '@angular/core';
import { IxGroup, IxGroupItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxGroup, IxGroupItem],
  template: `
    <ix-group
      header="Header text"
      subHeader="Subheader text"
      suppressHeaderSelection
    >
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item text="Example text 3"></ix-group-item>
    </ix-group>
  `,
})
export default class GroupHeaderSuppressed {}
```

### Vue Examples

#### group-header-suppressed.vue
```vue
<script setup lang="ts">
import { IxGroup, IxGroupItem } from '@siemens/ix-vue';
</script>

<template>
  <IxGroup
    header="Header text"
    sub-header="Subheader text"
    suppress-header-selection
  >
    <IxGroupItem text="Example text 1"></IxGroupItem>
    <IxGroupItem text="Example text 2"></IxGroupItem>
    <IxGroupItem text="Example text 3"></IxGroupItem>
  </IxGroup>
</template>
```

## Custom group entry

### React Examples

#### group-custom-entry.tsx
```tsx
import { IxButton, IxGroup, IxGroupItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxGroup header="Header text" subHeader="Subheader text">
      <IxGroupItem text="Example text 1"></IxGroupItem>
      <IxGroupItem text="Example text 2"></IxGroupItem>
      <IxGroupItem>
        <IxButton>Test</IxButton>
      </IxGroupItem>
    </IxGroup>
  );
};
```

### Angular Examples

#### group-custom-entry.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-group header="Header text" subHeader="Subheader text">
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item><ix-button>Test</ix-button></ix-group-item>
    </ix-group>
  `,
})
export default class GroupCustomEntry {}
```

### Angular Standalone Examples

#### group-custom-entry.ts
```ts
import { Component } from '@angular/core';
import { IxGroup, IxGroupItem, IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxGroup, IxGroupItem, IxButton],
  template: `
    <ix-group header="Header text" subHeader="Subheader text">
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item><ix-button>Test</ix-button></ix-group-item>
    </ix-group>
  `,
})
export default class GroupCustomEntry {}
```

### Vue Examples

#### group-custom-entry.vue
```vue
<script setup lang="ts">
import { IxButton, IxGroup, IxGroupItem } from '@siemens/ix-vue';
</script>

<template>
  <IxGroup header="Header text" sub-header="Subheader text">
    <IxGroupItem text="Example text 1"></IxGroupItem>
    <IxGroupItem text="Example text 2"></IxGroupItem>
    <IxGroupItem>
      <IxButton>Test</IxButton>
    </IxGroupItem>
  </IxGroup>
</template>
```

## Group with context menu

:::info

Please note that there is an issue with the slot rendering that can only be fixed with the next major version of Siemens iX.
Luckily there exists a workaround for rendering context menus inside the group component.

:::

To show a context menu place an `ix-dropdown` with `slot="dropdown"` combined with `ix-dropdown-item`'s inside the `ix-group-tag` tag.

### React Examples

#### group-context-menu.tsx
```tsx
import {
  IxDropdown,
  IxDropdownItem,
  IxGroup,
  IxGroupItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxGroup header="Header text" subHeader="Subheader text">
      <IxDropdown slot="dropdown">
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdown>
      <IxGroupItem text="Example text 1"></IxGroupItem>
      <IxGroupItem text="Example text 2"></IxGroupItem>
      <IxGroupItem text="Example text 3"></IxGroupItem>
    </IxGroup>
  );
};
```

### Angular Examples

#### group-context-menu.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-group header="Header text" subHeader="Subheader text">
      <ix-dropdown slot="dropdown">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      </ix-dropdown>
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item text="Example text 3"></ix-group-item>
    </ix-group>
  `,
})
export default class GroupContextMenu {}
```

### Angular Standalone Examples

#### group-context-menu.ts
```ts
import { Component } from '@angular/core';
import {
  IxGroup,
  IxDropdown,
  IxDropdownItem,
  IxGroupItem,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxGroup, IxDropdown, IxDropdownItem, IxGroupItem],
  template: `
    <ix-group header="Header text" subHeader="Subheader text">
      <ix-dropdown slot="dropdown">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      </ix-dropdown>
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item text="Example text 3"></ix-group-item>
    </ix-group>
  `,
})
export default class GroupContextMenu {}
```

### Vue Examples

#### group-context-menu.vue
```vue
<script setup lang="ts">
import {
  IxDropdown,
  IxDropdownItem,
  IxGroup,
  IxGroupItem,
} from '@siemens/ix-vue';
</script>

<template>
  <IxGroup header="Header text" sub-header="Subheader text">
    <IxDropdown slot="dropdown">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdown>
    <IxGroupItem text="Example text 1"></IxGroupItem>
    <IxGroupItem text="Example text 2"></IxGroupItem>
    <IxGroupItem text="Example text 3"></IxGroupItem>
  </IxGroup>
</template>
```

## API for ix-group

Figma main component ID: `162440:187838` (node ID of the matching main component in the IX Figma library; use it to map Figma design specs to this component).

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelExpand | { "ARIA label for the expand disclosure button.\n\nFalls back to **header** when unset.\n\nExpanded/collapsed state comes from **aria-expanded**." } | aria-label-expand | string \| undefined |  |
| ariaLabelSelect | { "ARIA label for the header select button.\n\nFalls back to **header** when unset." } | aria-label-select | string \| undefined |  |
| expandOnHeaderClick | { "Expand the group if the header is clicked" } | expand-on-header-click | boolean | false |
| expanded | { "Whether the group is expanded or collapsed. Defaults to false." } | expanded | boolean | false |
| header | { "Group header" } | header | string \| undefined |  |
| index | { "The index of the selected group entry.\n\nIf undefined no group item is selected." } | index | number \| undefined |  |
| selected | { "Whether the group is selected." } | selected | boolean | false |
| subHeader | { "Group header subtitle" } | sub-header | string \| undefined |  |
| suppressHeaderSelection | { "Prevent header from being selectable" } | suppress-header-selection | boolean | false |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| expandedChanged | { "Group expanded" } | expandedChanged | boolean |
| selectGroup | { "Emits when whole group gets selected." } | selectGroup | boolean |
| selectItem | { "Emits when group item gets selected." } | selectItem | number |

### Slot

| Name | Description |
| --- | --- |
| default | { "Group content." } |
| dropdown | { "Dropdown content displayed in the group header." } |
| footer | { "Footer content." } |
| header | { "Additional header content." } |

## API for ix-group-item

Figma main component ID: `162374:19834` (node ID of the matching main component in the IX Figma library; use it to map Figma design specs to this component).

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelIcon | { "ARIA label for the icon" } | aria-label-icon | string \| undefined |  |
| disabled | { "Disable the group item.\n\nThe elements tabindex attribute will get set accordingly.\n\nIf false tabindex will be 0, -1 otherwise." } | disabled | boolean | false |
| icon | { "Group item icon" } | icon | string \| undefined |  |
| index | { "Index" } | index | number \| undefined |  |
| secondaryText | { "Group item secondary text" } | secondary-text | string \| undefined |  |
| selected | { "Show selected state" } | selected | boolean | false |
| suppressSelection | { "Supress the selection of the group" } | suppress-selection | boolean | false |
| text | { "Group item text" } | text | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| selectedChanged | { "Selection changed" } | selectedChanged | HTMLIxGroupItemElement |

### Slot

| Name | Description |
| --- | --- |
| default | { "Group item content." } |
