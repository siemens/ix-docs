# Spinner - Code

> Code examples and API documentation for the ix-spinner

# Spinner - Code

## Basic

### React Examples

#### spinner.tsx
```tsx
import { IxSpinner } from '@siemens/ix-react';

export default () => {
  return <IxSpinner></IxSpinner>;
};
```

### Angular Examples

#### spinner.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-spinner></ix-spinner> `,
})
export default class Spinner {}
```

### Angular Standalone Examples

#### spinner.ts
```ts
import { Component } from '@angular/core';
import { IxSpinner } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxSpinner],
  template: ` <ix-spinner></ix-spinner> `,
})
export default class Spinner {}
```

### Vue Examples

#### spinner.vue
```vue
<script setup lang="ts">
import { IxSpinner } from '@siemens/ix-vue';
</script>

<template>
  <IxSpinner></IxSpinner>
</template>
```

## Large

### React Examples

#### spinner-large.tsx
```tsx
import { IxSpinner } from '@siemens/ix-react';

export default () => {
  return <IxSpinner size="xxl"></IxSpinner>;
};
```

### Angular Examples

#### spinner-large.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-spinner size="xxl"></ix-spinner> `,
})
export default class SpinnerLarge {}
```

### Angular Standalone Examples

#### spinner-large.ts
```ts
import { Component } from '@angular/core';
import { IxSpinner } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxSpinner],
  template: ` <ix-spinner size="xxl"></ix-spinner> `,
})
export default class SpinnerLarge {}
```

### Vue Examples

#### spinner-large.vue
```vue
<script setup lang="ts">
import { IxSpinner } from '@siemens/ix-vue';
</script>

<template>
  <IxSpinner size="xxl"></IxSpinner>
</template>
```

## API for ix-spinner

### Properties

| Name | Description | Attribute | Type | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| size | { "Size of the spinner.\n\n- **xxs**: 12px.\n\n- **xs**: 16px.\n\n- **sm**: 20px.\n\n- **md**: 32px (default).\n\n- **xxl**: 96px." } | size | "md" \| "sm" \| "xs" \| "xxl" \| "xxs" | 'md' | Breaking change in v6.0.0: Size values renamed and remapped to different pixel sizes |
| variant | { "Variant of spinner" } | variant | "primary" \| "secondary" | 'secondary' |  |
