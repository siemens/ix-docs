# Empty state - Code

> Code examples and API documentation for the ix-empty-state

# Empty state - Code

## Basic

### React Examples

#### empty-state.tsx
```tsx
import { iconAdd } from '@siemens/ix-icons/icons';
import { IxEmptyState } from '@siemens/ix-react';

export default () => {
  return (
    <IxEmptyState
      header="No elements available"
      subHeader="Create an element first"
      icon={iconAdd}
      action="Create element"
      onActionClick={console.log}
    ></IxEmptyState>
  );
};
```

### Angular Examples

#### empty-state.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `<ix-empty-state
    header="No elements available"
    subHeader="Create an element first"
    icon="add"
    action="Create element"
    (actionClick)="onActionClick($event)"
  ></ix-empty-state>`,
})
export default class EmptyState {
  onActionClick(event: Event) {
    console.log(event);
  }
}
```

### Angular Standalone Examples

#### empty-state.ts
```ts
import { Component } from '@angular/core';
import { IxEmptyState } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxEmptyState],
  template: `<ix-empty-state
    header="No elements available"
    subHeader="Create an element first"
    icon="add"
    action="Create element"
    (actionClick)="onActionClick($event)"
  ></ix-empty-state>`,
})
export default class EmptyState {
  onActionClick(event: Event) {
    console.log(event);
  }
}
```

### Vue Examples

#### empty-state.vue
```vue
<script setup lang="ts">
import { iconAdd } from '@siemens/ix-icons/icons';
import { IxEmptyState } from '@siemens/ix-vue';
</script>

<template>
  <IxEmptyState
    header="No elements available"
    subHeader="Create an element first"
    :icon="iconAdd"
    action="Create element"
  ></IxEmptyState>
</template>
```

## Compact

### React Examples

#### empty-state-compact.tsx
```tsx
import { iconAdd } from '@siemens/ix-icons/icons';
import { IxEmptyState } from '@siemens/ix-react';

export default () => {
  return (
    <IxEmptyState
      layout="compact"
      header="No elements available"
      subHeader="Create an element first"
      icon={iconAdd}
      action="Create element"
      onActionClick={console.log}
    ></IxEmptyState>
  );
};
```

### Angular Examples

#### empty-state-compact.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `<ix-empty-state
    layout="compact"
    header="No elements available"
    subHeader="Create an element first"
    icon="add"
    action="Create element"
    (actionClick)="onActionClick($event)"
  ></ix-empty-state>`,
})
export default class EmptyStateCompact {
  onActionClick(event: Event) {
    console.log(event);
  }
}
```

### Angular Standalone Examples

#### empty-state-compact.ts
```ts
import { Component } from '@angular/core';
import { IxEmptyState } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxEmptyState],
  template: `<ix-empty-state
    layout="compact"
    header="No elements available"
    subHeader="Create an element first"
    icon="add"
    action="Create element"
    (actionClick)="onActionClick($event)"
  ></ix-empty-state>`,
})
export default class EmptyStateCompact {
  onActionClick(event: Event) {
    console.log(event);
  }
}
```

### Vue Examples

#### empty-state-compact.vue
```vue
<script setup lang="ts">
import { iconAdd } from '@siemens/ix-icons/icons';
import { IxEmptyState } from '@siemens/ix-vue';
</script>

<template>
  <IxEmptyState
    layout="compact"
    header="No elements available"
    subHeader="Create an element first"
    :icon="iconAdd"
    action="Create element"
  ></IxEmptyState>
</template>
```

## Compact break

### React Examples

#### empty-state-compact-break.tsx
```tsx
import { iconAdd } from '@siemens/ix-icons/icons';
import { IxEmptyState } from '@siemens/ix-react';

export default () => {
  return (
    <IxEmptyState
      layout="compactBreak"
      header="No elements available"
      subHeader="Create an element first"
      icon={iconAdd}
      action="Create element"
      onActionClick={console.log}
    ></IxEmptyState>
  );
};
```

### Angular Examples

#### empty-state-compact-break.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-empty-state
    layout="compactBreak"
    header="No elements available"
    subHeader="Create an element first"
    icon="add"
    action="Create element"
    (actionClick)="onActionClick($event)"
  ></ix-empty-state>`,
})
export default class EmptyStateCompactBreak {
  onActionClick(event: Event) {
    console.log(event);
  }
}
```

### Angular Standalone Examples

#### empty-state-compact-break.ts
```ts
import { Component } from '@angular/core';
import { IxEmptyState } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxEmptyState],
  template: ` <ix-empty-state
    layout="compactBreak"
    header="No elements available"
    subHeader="Create an element first"
    icon="add"
    action="Create element"
    (actionClick)="onActionClick($event)"
  ></ix-empty-state>`,
})
export default class EmptyStateCompactBreak {
  onActionClick(event: Event) {
    console.log(event);
  }
}
```

### Vue Examples

#### empty-state-compact-break.vue
```vue
<script setup lang="ts">
import { iconAdd } from '@siemens/ix-icons/icons';
import { IxEmptyState } from '@siemens/ix-vue';
</script>

<template>
  <IxEmptyState
    layout="compactBreak"
    header="No elements available"
    subHeader="Create an element first"
    :icon="iconAdd"
    action="Create element"
  ></IxEmptyState>
</template>
```

## API for ix-empty-state

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| action | Optional empty state action | action | string \| undefined |  |
| ariaLabelEmptyStateIcon | ARIA label for the empty state icon | aria-label-empty-state-icon | string \| undefined |  |
| header | Empty state header | header | string |  |
| icon | Optional empty state icon | icon | string \| undefined |  |
| layout | Optional empty state layout - one of 'large', 'compact' or 'compactBreak' | layout | "compact" \| "compactBreak" \| "large" | 'large' |
| subHeader | Optional empty state sub header | sub-header | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| actionClick | Empty state action click event | actionClick | void |
