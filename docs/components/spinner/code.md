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
  return <IxSpinner size="large"></IxSpinner>;
};
```

### Angular Examples

#### spinner-large.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-spinner size="large"></ix-spinner> `,
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
  template: ` <ix-spinner size="large"></ix-spinner> `,
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
  <IxSpinner size="large"></IxSpinner>
</template>
```

## API for ix-spinner

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| size | Size of spinner | size | "large" \| "medium" \| "small" \| "x-small" \| "xx-small" | 'medium' |
| variant | Variant of spinner | variant | "primary" \| "secondary" | 'secondary' |
