# Radio - Code

> Code examples and API documentation for the ix-radio, ix-radio-group

# Radio - Code

Enclosing all related radio buttons together in a single radio group container ensures correct selection behavior, grouping and accessibility.

## Basic

### React Examples

#### radio.tsx
```tsx
import { IxRadio } from '@siemens/ix-react';

export default () => {
  return (
    <IxRadio label="256GB SSD storage" value="1" name="storage-256gb"></IxRadio>
  );
};
```

### Angular Examples

#### radio.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './radio.html',
})
export default class Radio {}
```

#### radio.html
```html
<ix-radio
  label='256GB SSD storage'
  value='1'
  name='storage-256gb'
></ix-radio>
```

### Angular Standalone Examples

#### radio.ts
```ts
import { Component } from '@angular/core';
import {
  IxRadio,
  IxRadioValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxRadio, IxRadioValueAccessorDirective],
  templateUrl: './radio.html',
})
export default class Radio {}
```

#### radio.html
```html
<ix-radio label="256GB SSD storage" value="1" name="storage-256gb"></ix-radio>
```

### Vue Examples

#### radio.vue
```vue
<script setup lang="ts">
import { IxRadio } from '@siemens/ix-vue';
</script>

<template>
  <IxRadio label="256GB SSD storage" value="1" name="storage-256gb"></IxRadio>
</template>
```

## Disabled

### React Examples

#### radio-disabled.tsx
```tsx
import { IxRadio } from '@siemens/ix-react';

export default () => {
  return (
    <IxRadio
      label="2TB SSD storage"
      value="2048"
      name="storage-2tb"
      disabled
    ></IxRadio>
  );
};
```

### Angular Examples

#### radio-disabled.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './radio-disabled.html',
})
export default class RadioDisabled {}
```

#### radio-disabled.html
```html
<ix-radio
  label='2TB SSD storage'
  value='2048'
  name='storage-2tb'
  disabled
></ix-radio>
```

### Angular Standalone Examples

#### radio-disabled.ts
```ts
import { Component } from '@angular/core';
import {
  IxRadio,
  IxRadioValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxRadio, IxRadioValueAccessorDirective],
  templateUrl: './radio-disabled.html',
})
export default class RadioDisabled {}
```

#### radio-disabled.html
```html
<ix-radio
  label="2TB SSD storage"
  value="2048"
  name="storage-2tb"
  disabled
></ix-radio>
```

### Vue Examples

#### radio-disabled.vue
```vue
<script setup lang="ts">
import { IxRadio } from '@siemens/ix-vue';
</script>

<template>
  <IxRadio
    label="2TB SSD storage"
    value="2048"
    name="storage-2tb"
    disabled
  ></IxRadio>
</template>
```

## Group

### React Examples

#### radio-group.tsx
```tsx
import { IxRadio, IxRadioGroup } from '@siemens/ix-react';

export default () => {
  return (
    <IxRadioGroup label="Storage options">
      <IxRadio
        label="256GB SSD storage"
        value="256"
        name="storage-256gb"
      ></IxRadio>
      <IxRadio
        label="512GB SSD storage"
        value="512"
        name="storage-512gb"
      ></IxRadio>
      <IxRadio
        label="1TB SSD storage"
        value="1024"
        name="storage-1tb"
      ></IxRadio>
      <IxRadio
        label="2TB SSD storage"
        value="2048"
        name="storage-2tb"
        disabled
      ></IxRadio>
    </IxRadioGroup>
  );
};
```

### Angular Examples

#### radio-group.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './radio-group.html',
})
export default class RadioGroup {}
```

#### radio-group.html
```html
<ix-radio-group label='Storage options'>
  <ix-radio
    label='256GB SSD storage'
    value='256'
    name='storage-256gb'
  ></ix-radio>
  <ix-radio
    label='512GB SSD storage'
    value='512'
    name='storage-512gb'
  ></ix-radio>
  <ix-radio
    label='1TB SSD storage'
    value='1024'
    name='storage-1tb'
  ></ix-radio>
  <ix-radio
    label='2TB SSD storage'
    value='2048'
    name='storage-2tb'
    disabled
  ></ix-radio>
</ix-radio-group>
```

### Angular Standalone Examples

#### radio-group.ts
```ts
import { Component } from '@angular/core';
import {
  IxRadioGroup,
  IxRadio,
  IxRadioValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxRadioGroup, IxRadio, IxRadioValueAccessorDirective],
  templateUrl: './radio-group.html',
})
export default class RadioGroup {}
```

#### radio-group.html
```html
<ix-radio-group label="Storage options">
  <ix-radio
    label="256GB SSD storage"
    value="256"
    name="storage-256gb"
  ></ix-radio>
  <ix-radio
    label="512GB SSD storage"
    value="512"
    name="storage-512gb"
  ></ix-radio>
  <ix-radio label="1TB SSD storage" value="1024" name="storage-1tb"></ix-radio>
  <ix-radio
    label="2TB SSD storage"
    value="2048"
    name="storage-2tb"
    disabled
  ></ix-radio>
</ix-radio-group>
```

### Vue Examples

#### radio-group.vue
```vue
<script setup lang="ts">
import { IxRadio, IxRadioGroup } from '@siemens/ix-vue';
</script>

<template>
  <IxRadioGroup label="Storage options">
    <IxRadio
      label="256GB SSD storage"
      value="256"
      name="storage-256gb"
    ></IxRadio>
    <IxRadio
      label="512GB SSD storage"
      value="512"
      name="storage-512gb"
    ></IxRadio>
    <IxRadio
      label="1TB SSD storage"
      value="1024"
      name="storage-1tb"
    ></IxRadio>
    <IxRadio
      label="2TB SSD storage"
      value="2048"
      name="storage-2tb"
      disabled
    ></IxRadio>
  </IxRadioGroup>
</template>
```

## Validation

### React Examples

#### radio-validation.tsx
```tsx
import { IxRadio, IxRadioGroup } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxRadioGroup
          label="Storage options"
          infoText="Storage options might differ in speed."
        >
          <IxRadio
            label="256GB SSD storage"
            value="256"
            name="storage-256gb"
            checked
            className="ix-info"
          ></IxRadio>
          <IxRadio
            label="512GB SSD storage"
            value="512"
            name="storage-512gb"
            className="ix-info"
          ></IxRadio>
        </IxRadioGroup>
      </div>

      <div>
        <IxRadioGroup
          label="Storage options"
          warningText="Storage options might not be available."
        >
          <IxRadio
            label="256GB SSD storage"
            value="256"
            name="storage-256gb"
            checked
            className="ix-warning"
          ></IxRadio>
          <IxRadio
            label="512GB SSD storage"
            value="512"
            name="storage-512gb"
            className="ix-warning"
          ></IxRadio>
        </IxRadioGroup>
      </div>

      <div>
        <IxRadioGroup
          label="Storage options"
          validText="Storage option is available."
        >
          <IxRadio
            label="256GB SSD storage"
            value="256"
            name="storage-256gb"
            checked
            className="ix-valid"
          ></IxRadio>
          <IxRadio
            label="512GB SSD storage"
            value="512"
            name="storage-512gb"
            className="ix-valid"
          ></IxRadio>
        </IxRadioGroup>
      </div>

      <div>
        <IxRadioGroup
          label="Storage options"
          invalidText="Storage option is not available."
        >
          <IxRadio
            label="256GB SSD storage"
            value="256"
            name="storage-256gb"
            checked
            className="ix-invalid"
          ></IxRadio>
          <IxRadio
            label="512GB SSD storage"
            value="512"
            name="storage-512gb"
            className="ix-invalid"
          ></IxRadio>
        </IxRadioGroup>
      </div>
    </>
  );
};
```

### Angular Examples

#### radio-validation.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './radio-validation.html',
})
export default class RadioValidation {}
```

#### radio-validation.html
```html
<div>
  <ix-radio-group
    label='Storage options'
  >
    <ix-radio
      label='256GB SSD storage'
      value='256'
      name='storage-256gb'
      checked
      class='ix-info'
      info-text='Storage options might differ in speed.'
    ></ix-radio>
    <ix-radio
      label='512GB SSD storage'
      value='512'
      name='storage-512gb'
      class='ix-warning'
      warning-text='Storage options might not be available.'
    ></ix-radio>
  </ix-radio-group>
</div>

<div>
  <ix-radio-group
    label='Storage options'
  >
    <ix-radio
      label='256GB SSD storage'
      value='256'
      name='storage-256gb'
      checked
      class='ix-valid'
      valid-text='Storage option is available.'
    ></ix-radio>
    <ix-radio
      label='512GB SSD storage'
      value='512'
      name='storage-512gb'
      class='ix-invalid'
      invalid-text='Storage option is not available.'
    ></ix-radio>
  </ix-radio-group>
</div>
```

### Angular Standalone Examples

#### radio-validation.ts
```ts
import { Component } from '@angular/core';
import {
  IxRadioGroup,
  IxRadio,
  IxRadioValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxRadioGroup, IxRadio, IxRadioValueAccessorDirective],
  templateUrl: './radio-validation.html',
})
export default class RadioValidation {}
```

#### radio-validation.html
```html
<div>
  <ix-radio-group label="Storage options">
    <ix-radio
      label="256GB SSD storage"
      value="256"
      name="storage-256gb"
      checked
      class="ix-info"
      info-text="Storage options might differ in speed."
    ></ix-radio>
    <ix-radio
      label="512GB SSD storage"
      value="512"
      name="storage-512gb"
      class="ix-warning"
      warning-text="Storage options might not be available."
    ></ix-radio>
  </ix-radio-group>
</div>

<div>
  <ix-radio-group label="Storage options">
    <ix-radio
      label="256GB SSD storage"
      value="256"
      name="storage-256gb"
      checked
      class="ix-valid"
      valid-text="Storage option is available."
    ></ix-radio>
    <ix-radio
      label="512GB SSD storage"
      value="512"
      name="storage-512gb"
      class="ix-invalid"
      invalid-text="Storage option is not available."
    ></ix-radio>
  </ix-radio-group>
</div>
```

### Vue Examples

#### radio-validation.vue
```vue
<script setup lang="ts">
import { IxRadio, IxRadioGroup } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxRadioGroup
      label="Storage options"
      info-text="Storage options might differ in speed."
    >
      <IxRadio
        label="256GB SSD storage"
        value="256"
        name="storage-256gb"
        checked
        class="ix-info"
      ></IxRadio>
      <IxRadio
        label="512GB SSD storage"
        value="512"
        name="storage-512gb"
        class="ix-info"
      ></IxRadio>
    </IxRadioGroup>
  </div>

  <div>
    <IxRadioGroup
      label="Storage options"
      warning-text="Storage options might not be available."
    >
      <IxRadio
        label="256GB SSD storage"
        value="256"
        name="storage-256gb"
        checked
        class="ix-warning"
      ></IxRadio>
      <IxRadio
        label="512GB SSD storage"
        value="512"
        name="storage-512gb"
        class="ix-warning"
      ></IxRadio>
    </IxRadioGroup>
  </div>

  <div>
    <IxRadioGroup
      label="Storage options"
      valid-text="Storage option is available."
    >
      <IxRadio
        label="256GB SSD storage"
        value="256"
        name="storage-256gb"
        checked
        class="ix-valid"
      ></IxRadio>
      <IxRadio
        label="512GB SSD storage"
        value="512"
        name="storage-512gb"
        class="ix-valid"
      ></IxRadio>
    </IxRadioGroup>
  </div>

  <div>
    <IxRadioGroup
      label="Storage options"
      invalid-text="Storage option is not available."
    >
      <IxRadio
        label="256GB SSD storage"
        value="256"
        name="storage-256gb"
        checked
        class="ix-invalid"
      ></IxRadio>
      <IxRadio
        label="512GB SSD storage"
        value="512"
        name="storage-512gb"
        class="ix-invalid"
      ></IxRadio>
    </IxRadioGroup>
  </div>
</template>
```

## API for ix-radio

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| checked | Checked state of the radio component | checked | boolean | false |
| disabled | Disabled state of the radio component | disabled | boolean | false |
| label | Label for the radio component | label | string \| undefined |  |
| name | Name of the radio component | name | string \| undefined |  |
| required | Requires the radio component and its group to be checked for the form to be submittable | required | boolean | false |
| value | Value of the radio component | value | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| checkedChange | Event emitted when the checked state of the radio changes | checkedChange | boolean |
| ixBlur | Event emitted when the radio is blurred | ixBlur | void |
| valueChange | Event emitted when the value of the radio changes | valueChange | string |

## API for ix-radio-group

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| direction | Alignment of the radio buttons in the group | direction | "column" \| "row" | 'column' |
| helperText | Show text below the field component | helper-text | string \| undefined |  |
| infoText | Info text for the field component | info-text | string \| undefined |  |
| invalidText | Error text for the field component | invalid-text | string \| undefined |  |
| label | Label for the field component | label | string \| undefined |  |
| showTextAsTooltip | Show helper, info, warning, error and valid text as tooltip | show-text-as-tooltip | boolean \| undefined |  |
| validText | Valid text for the field component | valid-text | string \| undefined |  |
| value | Value of the radiobutton group component | value | string \| undefined |  |
| warningText | Warning text for the field component | warning-text | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| valueChange | Event emitted when the value of the radiobutton group changes | valueChange | string |
