# Key value - Code

> Code examples and API documentation for the ix-key-value

# Key value - Code

## Basic

### React Examples

#### key-value.tsx
```tsx
import { IxKeyValue } from '@siemens/ix-react';

export default () => {
  return <IxKeyValue label="Label" value="Value"></IxKeyValue>;
};
```

### Angular Examples

#### key-value.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `<ix-key-value label="Label" value="Value"></ix-key-value>`,
})
export default class KeyValue {}
```

### Angular Standalone Examples

#### key-value.ts
```ts
import { Component } from '@angular/core';
import { IxKeyValue } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxKeyValue],
  template: `<ix-key-value label="Label" value="Value"></ix-key-value>`,
})
export default class KeyValue {}
```

### Vue Examples

#### key-value.vue
```vue
<script setup lang="ts">
import { IxKeyValue } from '@siemens/ix-vue';
</script>

<template>
  <IxKeyValue label="Label" value="Value"></IxKeyValue>
</template>
```

## With custom value

### React Examples

#### key-value-with-custom-value.tsx
```tsx
import './key-value-with-custom-value.scoped.css';
import { IxKeyValue } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValue label="Label">
      <input
        className="ix-form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </IxKeyValue>
  );
};
```

#### key-value-with-custom-value.scoped.css
```css
.ix-form-control {
  width: 100% !important;
}
```

### Angular Examples

#### key-value-with-custom-value.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-key-value label="Label">
      <input
        class="ix-form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </ix-key-value>
  `,
  styleUrls: ['./key-value-with-custom-value.css'],
})
export default class KeyValueWithCustomValue {}
```

#### key-value-with-custom-value.css
```css
.ix-form-control {
  width: 100% !important;
}
```

### Angular Standalone Examples

#### key-value-with-custom-value.ts
```ts
import { Component } from '@angular/core';
import { IxKeyValue } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxKeyValue],
  template: `
    <ix-key-value label="Label">
      <input placeholder="Enter text here" type="text" slot="custom-value" />
    </ix-key-value>
  `,
  styleUrls: ['./key-value-with-custom-value.css'],
})
export default class KeyValueWithCustomValue {}
```

#### key-value-with-custom-value.css
```css
.ix-form-control {
  width: 100% !important;
}
```

### Vue Examples

#### key-value-with-custom-value.vue
```vue
<script setup lang="ts">
import { IxKeyValue } from '@siemens/ix-vue';
</script>

<style scoped src="./key-value-with-custom-value.css"></style>

<template>
  <IxKeyValue label="Label">
    <input
      class="ix-form-control"
      placeholder="Enter text here"
      type="text"
      slot="custom-value"
    />
  </IxKeyValue>
</template>
```

#### key-value-with-custom-value.css
```css
.ix-form-control {
  width: 100% !important;
}
```

## With icon

### React Examples

#### key-value-with-icon.tsx
```tsx
import { iconLocation } from '@siemens/ix-icons/icons';
import { IxKeyValue } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValue icon={iconLocation} label="Label" value="Value"></IxKeyValue>
  );
};
```

### Angular Examples

#### key-value-with-icon.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-key-value icon="location" label="Label" value="Value"></ix-key-value>
  `,
})
export default class KeyValueWithIcon {}
```

### Angular Standalone Examples

#### key-value-with-icon.ts
```ts
import { Component } from '@angular/core';
import { IxKeyValue } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxKeyValue],
  template: `
    <ix-key-value icon="location" label="Label" value="Value"></ix-key-value>
  `,
})
export default class KeyValueWithIcon {}
```

### Vue Examples

#### key-value-with-icon.vue
```vue
<script setup lang="ts">
import { iconLocation } from '@siemens/ix-icons/icons';
import { IxKeyValue } from '@siemens/ix-vue';
</script>

<template>
  <IxKeyValue :icon="iconLocation" label="Label" value="Value"></IxKeyValue>
</template>
```

## With label on left side

### React Examples

#### key-value-with-label-left.tsx
```tsx
import { IxKeyValue } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
  );
};
```

### Angular Examples

#### key-value-with-label-left.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-key-value
      label="Label"
      labelPosition="left"
      value="Value"
    ></ix-key-value>
  `,
})
export default class KeyValueWithLabelLeft {}
```

### Angular Standalone Examples

#### key-value-with-label-left.ts
```ts
import { Component } from '@angular/core';
import { IxKeyValue } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxKeyValue],
  template: `
    <ix-key-value
      label="Label"
      labelPosition="left"
      value="Value"
    ></ix-key-value>
  `,
})
export default class KeyValueWithLabelLeft {}
```

### Vue Examples

#### key-value-with-label-left.vue
```vue
<script setup lang="ts">
import { IxKeyValue } from '@siemens/ix-vue';
</script>

<template>
  <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
</template>
```

## API for ix-key-value

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelIcon | ARIA label for the icon | aria-label-icon | string \| undefined |  |
| icon | Optional key value icon | icon | string \| undefined |  |
| label | Key value label | label | string |  |
| labelPosition | Optional key value label position - 'top' or 'left' | label-position | "left" \| "top" | 'top' |
| value | Optional key value text value | value | string \| undefined |  |

### Slot

| Name | Description |
| --- | --- |
| custom-value | { `Optional custom value at key value instead of text value` } |
