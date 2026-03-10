# Forms layout - Code

> Code examples and API documentation for the ix-validation-tooltip

# Forms layout - Code

## Using custom layout

To align `form-ready` components in a complex form layout, you typically omit the `label` attribute and define the label
as an `ix-field-label` component.

You can follow the example here:

1. Define the `ix-input` component including an `id` attribute.

```html
<ix-input id="mytest"></ix-input>
```

2. Define an `ix-field-label` component with a `for` attribute to link the label to the `ix-input` component.

```html
<ix-field-label htmlFor="mytest">Test</ix-field-label>
```

3. Define an `ix-helper-text` component with a `for` attribute to link the helper text to the `ix-input` component.

```html
<ix-helper-text
  htmlFor="mytest"
  helperText="Helper text"
  invalidText="Error text"
  validText="Valid text"
  warningText="Warning text"
  infoText="Info text"
></ix-helper-text>
```

## Using `ix-layout-auto`

### React Examples

#### form-layout-auto.tsx
```tsx
import {
  IxButton,
  IxFieldLabel,
  IxInput,
  IxLayoutAuto,
  IxSelect,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxLayoutAuto>
      <IxFieldLabel htmlFor="my-select-1">Example</IxFieldLabel>
      <IxSelect id="my-select-1"></IxSelect>
      <IxFieldLabel htmlFor="my-select-2">Example</IxFieldLabel>
      <IxInput id="my-select-2"></IxInput>
      <IxButton data-colspan="2">Submit</IxButton>
    </IxLayoutAuto>
  );
};
```

### Angular Examples

#### form-layout-auto.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './form-layout-auto.html',
})
export default class FormLayoutAuto {}
```

#### form-layout-auto.html
```html
<ix-layout-auto>
  <ix-field-label for="my-select-1">Example</ix-field-label>
  <ix-select id="my-select-1"></ix-select>
  <ix-field-label for="my-select-2">Example</ix-field-label>
  <ix-input id="my-select-2"></ix-input>
  <ix-button data-colspan="2">Submit</ix-button>
</ix-layout-auto>
```

### Angular Standalone Examples

#### form-layout-auto.ts
```ts
import { Component } from '@angular/core';
import {
  IxLayoutAuto,
  IxFieldLabel,
  IxSelect,
  IxInput,
  IxButton,
  IxSelectValueAccessorDirective,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxLayoutAuto,
    IxFieldLabel,
    IxSelect,
    IxInput,
    IxButton,
    IxSelectValueAccessorDirective,
    IxTextValueAccessorDirective,
  ],
  templateUrl: './form-layout-auto.html',
})
export default class FormLayoutAuto {}
```

#### form-layout-auto.html
```html
<ix-layout-auto>
  <ix-field-label for="my-select-1">Example</ix-field-label>
  <ix-select id="my-select-1"></ix-select>
  <ix-field-label for="my-select-2">Example</ix-field-label>
  <ix-input id="my-select-2"></ix-input>
  <ix-button data-colspan="2">Submit</ix-button>
</ix-layout-auto>
```

### Vue Examples

#### form-layout-auto.vue
```vue
<script setup lang="ts">
import {
  IxButton,
  IxFieldLabel,
  IxInput,
  IxLayoutAuto,
  IxSelect,
} from '@siemens/ix-vue';
</script>

<template>
  <IxLayoutAuto>
    <IxFieldLabel htmlFor="my-select-1">Example</IxFieldLabel>
    <IxSelect id="my-select-1"></IxSelect>
    <IxFieldLabel htmlFor="my-select-2">Example</IxFieldLabel>
    <IxInput id="my-select-2"></IxInput>
    <IxButton data-colspan="2">Submit</IxButton>
  </IxLayoutAuto>
</template>
```

## Using `ix-layout-grid`

### React Examples

#### form-layout-grid.tsx
```tsx
import {
  IxButton,
  IxCol,
  IxFieldLabel,
  IxInput,
  IxLayoutGrid,
  IxRow,
  IxSelect,
} from '@siemens/ix-react';

import './form-layout-grid.scoped.css';

export default () => {
  return (
    <IxLayoutGrid className="layout-grid-example">
      <IxRow>
        <IxCol size="2" size-sm="12">
          <IxFieldLabel htmlFor="my-select-1">Example</IxFieldLabel>
        </IxCol>
        <IxCol>
          <IxSelect id="my-select-1"></IxSelect>
        </IxCol>
      </IxRow>
      <IxRow>
        <IxCol size="2" size-sm="12">
          <IxFieldLabel htmlFor="my-select-2">Example</IxFieldLabel>
        </IxCol>
        <IxCol>
          <IxInput id="my-select-2"></IxInput>
        </IxCol>
      </IxRow>
      <IxRow>
        <IxCol size="12" size-sm="12">
          <IxButton data-colspan="2">Submit</IxButton>
        </IxCol>
      </IxRow>
    </IxLayoutGrid>
  );
};
```

#### form-layout-grid.scoped.css
```css
.layout-grid-example ix-select,
ix-input,
ix-button {
  width: 100%;
}
```

### Angular Examples

#### form-layout-grid.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './form-layout-grid.html',
  styleUrls: ['./form-layout-grid.css'],
})
export default class FormLayoutGrid {}
```

#### form-layout-grid.html
```html
<ix-layout-grid class="layout-grid-example">
  <ix-row>
    <ix-col size="2" size-sm="12">
      <ix-field-label for="my-select-1">Example</ix-field-label>
    </ix-col>
    <ix-col>
      <ix-select id="my-select-1"></ix-select>
    </ix-col>
  </ix-row>
  <ix-row>
    <ix-col size="2" size-sm="12">
      <ix-field-label for="my-select-2">Example</ix-field-label>
    </ix-col>
    <ix-col>
      <ix-input id="my-select-2"></ix-input>
    </ix-col>
  </ix-row>
  <ix-row>
    <ix-col size="12" size-sm="12">
      <ix-button data-colspan="2">Submit</ix-button>
    </ix-col>
  </ix-row>
</ix-layout-grid>
```

#### form-layout-grid.css
```css
.layout-grid-example ix-select,
ix-input,
ix-button {
  width: 100%;
}
```

### Angular Standalone Examples

#### form-layout-grid.ts
```ts
import { Component } from '@angular/core';
import {
  IxLayoutGrid,
  IxRow,
  IxCol,
  IxFieldLabel,
  IxSelect,
  IxInput,
  IxButton,
  IxSelectValueAccessorDirective,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxLayoutGrid,
    IxRow,
    IxCol,
    IxFieldLabel,
    IxSelect,
    IxInput,
    IxButton,
    IxSelectValueAccessorDirective,
    IxTextValueAccessorDirective,
  ],
  templateUrl: './form-layout-grid.html',
  styleUrls: ['./form-layout-grid.css'],
})
export default class FormLayoutGrid {}
```

#### form-layout-grid.html
```html
<ix-layout-grid class="layout-grid-example">
  <ix-row>
    <ix-col size="2" size-sm="12">
      <ix-field-label for="my-select-1">Example</ix-field-label>
    </ix-col>
    <ix-col>
      <ix-select id="my-select-1"></ix-select>
    </ix-col>
  </ix-row>
  <ix-row>
    <ix-col size="2" size-sm="12">
      <ix-field-label for="my-select-2">Example</ix-field-label>
    </ix-col>
    <ix-col>
      <ix-input id="my-select-2"></ix-input>
    </ix-col>
  </ix-row>
  <ix-row>
    <ix-col size="12" size-sm="12">
      <ix-button data-colspan="2">Submit</ix-button>
    </ix-col>
  </ix-row>
</ix-layout-grid>
```

#### form-layout-grid.css
```css
.layout-grid-example ix-select,
ix-input,
ix-button {
  width: 100%;
}
```

### Vue Examples

#### form-layout-grid.vue
```vue
<script setup lang="ts">
import {
  IxButton,
  IxCol,
  IxFieldLabel,
  IxInput,
  IxLayoutGrid,
  IxRow,
  IxSelect,
} from '@siemens/ix-vue';
</script>

<style scoped src="./form-layout-grid.css"></style>

<template>
  <IxLayoutGrid class="layout-grid-example">
    <IxRow>
      <IxCol size="2" size-sm="12">
        <IxFieldLabel htmlFor="my-select-1">Example</IxFieldLabel>
      </IxCol>
      <IxCol>
        <IxSelect id="my-select-1"></IxSelect>
      </IxCol>
    </IxRow>
    <IxRow>
      <IxCol size="2" size-sm="12">
        <IxFieldLabel htmlFor="my-select-2">Example</IxFieldLabel>
      </IxCol>
      <IxCol>
        <IxInput id="my-select-2"></IxInput>
      </IxCol>
    </IxRow>
    <IxRow>
      <IxCol size="12" size-sm="12">
        <IxButton data-colspan="2">Submit</IxButton>
      </IxCol>
    </IxRow>
  </IxLayoutGrid>
</template>
```

#### form-layout-grid.css
```css
.layout-grid-example ix-select,
ix-input,
ix-button {
  width: 100%;
}
```
