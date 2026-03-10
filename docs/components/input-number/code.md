# Number input - Code

> Code examples and API documentation for the ix-number-input

# Number input - Code

## Basic

### React Examples

#### number-input.tsx
```tsx
import { IxNumberInput } from '@siemens/ix-react';

export default () => {
  return <IxNumberInput></IxNumberInput>;
};
```

### Angular Examples

#### number-input.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './number-input.html',
})
export default class NumberInput {}
```

#### number-input.html
```html
<ix-number-input></ix-number-input>
```

### Angular Standalone Examples

#### number-input.ts
```ts
import { Component } from '@angular/core';
import {
  IxNumberInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxNumberInput, IxTextValueAccessorDirective],
  templateUrl: './number-input.html',
})
export default class NumberInput {}
```

#### number-input.html
```html
<ix-number-input></ix-number-input>
```

### Vue Examples

#### number-input.vue
```vue
<script setup lang="ts">
import { IxNumberInput } from '@siemens/ix-vue';
</script>

<template>
  <IxNumberInput></IxNumberInput>
</template>
```

## Disabled

### React Examples

#### number-input-disabled.tsx
```tsx
import { IxNumberInput } from '@siemens/ix-react';

export default () => {
  return <IxNumberInput disabled></IxNumberInput>;
};
```

### Angular Examples

#### number-input-disabled.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './number-input-disabled.html',
})
export default class NumberInputDisabled {}
```

#### number-input-disabled.html
```html
<ix-number-input disabled></ix-number-input>
```

### Angular Standalone Examples

#### number-input-disabled.ts
```ts
import { Component } from '@angular/core';
import {
  IxNumberInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxNumberInput, IxTextValueAccessorDirective],
  templateUrl: './number-input-disabled.html',
})
export default class NumberInputDisabled {}
```

#### number-input-disabled.html
```html
<ix-number-input disabled></ix-number-input>
```

### Vue Examples

#### number-input-disabled.vue
```vue
<script setup lang="ts">
import { IxNumberInput } from '@siemens/ix-vue';
</script>

<template>
  <IxNumberInput disabled></IxNumberInput>
</template>
```

## Label

### React Examples

#### number-input-label.tsx
```tsx
import { IxNumberInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxNumberInput
      label="Some label"
      helperText="Some helper text"
    ></IxNumberInput>
  );
};
```

### Angular Examples

#### number-input-label.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './number-input-label.html',
})
export default class NumberInputLabel {}
```

#### number-input-label.html
```html
<ix-number-input
  label='Some label'
  helper-text='Some helper text'
></ix-number-input>
```

### Angular Standalone Examples

#### number-input-label.ts
```ts
import { Component } from '@angular/core';
import {
  IxNumberInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxNumberInput, IxTextValueAccessorDirective],
  templateUrl: './number-input-label.html',
})
export default class NumberInputLabel {}
```

#### number-input-label.html
```html
<ix-number-input
  label="Some label"
  helper-text="Some helper text"
></ix-number-input>
```

### Vue Examples

#### number-input-label.vue
```vue
<script setup lang="ts">
import { IxNumberInput } from '@siemens/ix-vue';
</script>

<template>
  <IxNumberInput
    label="Some label"
    helper-text="Some helper text"
  ></IxNumberInput>
</template>
```

## Readonly

### React Examples

#### number-input-readonly.tsx
```tsx
import { IxNumberInput } from '@siemens/ix-react';

export default () => {
  return <IxNumberInput readonly></IxNumberInput>;
};
```

### Angular Examples

#### number-input-readonly.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './number-input-readonly.html',
})
export default class NumberInputReadonly {}
```

#### number-input-readonly.html
```html
<ix-number-input readonly></ix-number-input>
```

### Angular Standalone Examples

#### number-input-readonly.ts
```ts
import { Component } from '@angular/core';
import {
  IxNumberInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxNumberInput, IxTextValueAccessorDirective],
  templateUrl: './number-input-readonly.html',
})
export default class NumberInputReadonly {}
```

#### number-input-readonly.html
```html
<ix-number-input readonly></ix-number-input>
```

### Vue Examples

#### number-input-readonly.vue
```vue
<script setup lang="ts">
import { IxNumberInput } from '@siemens/ix-vue';
</script>

<template>
  <IxNumberInput readonly></IxNumberInput>
</template>
```

## Stepper buttons

### React Examples

#### number-input-stepper-button.tsx
```tsx
import { IxNumberInput } from '@siemens/ix-react';

export default () => {
  return <IxNumberInput value={0} showStepperButtons></IxNumberInput>;
};
```

### Angular Examples

#### number-input-stepper-button.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './number-input-stepper-button.html',
})
export default class NumberInputStepperButton {}
```

#### number-input-stepper-button.html
```html
<ix-number-input
  value='0'
  show-stepper-buttons
></ix-number-input>
```

### Angular Standalone Examples

#### number-input-stepper-button.ts
```ts
import { Component } from '@angular/core';
import {
  IxNumberInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxNumberInput, IxTextValueAccessorDirective],
  templateUrl: './number-input-stepper-button.html',
})
export default class NumberInputStepperButton {}
```

#### number-input-stepper-button.html
```html
<ix-number-input value="0" show-stepper-buttons></ix-number-input>
```

### Vue Examples

#### number-input-stepper-button.vue
```vue
<script setup lang="ts">
import { IxNumberInput } from '@siemens/ix-vue';
</script>

<template>
  <IxNumberInput
    :value="0"
    show-stepper-buttons
  ></IxNumberInput>
</template>
```

## Validation

### React Examples

#### number-input-validation.tsx
```tsx
import { IxNumberInput } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxNumberInput
          value={5}
          infoText="Info text"
          className="ix-info"
        ></IxNumberInput>
      </div>

      <div>
        <IxNumberInput
          value={5}
          warningText="Warning text"
          className="ix-warning"
        ></IxNumberInput>
      </div>

      <div>
        <IxNumberInput
          value={5}
          validText="Valid text"
          className="ix-valid"
        ></IxNumberInput>
      </div>

      <div>
        <IxNumberInput
          value={5}
          invalidText="Invalid text"
          class="ix-invalid"
        ></IxNumberInput>
      </div>
    </>
  );
};
```

### Angular Examples

#### number-input-validation.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './number-input-validation.html',
})
export default class NumberInputValidation {}
```

#### number-input-validation.html
```html
<div>
  <ix-number-input
    value='5'
    info-text='Info text'
    class='ix-info'
  ></ix-number-input>
</div>

<div>
  <ix-number-input
    value='5'
    warning-text='Warning text'
    class='ix-warning'
  ></ix-number-input>
</div>

<div>
  <ix-number-input
    value='5'
    valid-text='Valid text'
    class='ix-valid'
  ></ix-number-input>
</div>

<div>
  <ix-number-input
    value='5'
    invalid-text='Invalid text'
    class='ix-invalid'
  ></ix-number-input>
</div>
```

### Angular Standalone Examples

#### number-input-validation.ts
```ts
import { Component } from '@angular/core';
import {
  IxNumberInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxNumberInput, IxTextValueAccessorDirective],
  templateUrl: './number-input-validation.html',
})
export default class NumberInputValidation {}
```

#### number-input-validation.html
```html
<div>
  <ix-number-input
    value="5"
    info-text="Info text"
    class="ix-info"
  ></ix-number-input>
</div>

<div>
  <ix-number-input
    value="5"
    warning-text="Warning text"
    class="ix-warning"
  ></ix-number-input>
</div>

<div>
  <ix-number-input
    value="5"
    valid-text="Valid text"
    class="ix-valid"
  ></ix-number-input>
</div>

<div>
  <ix-number-input
    value="5"
    invalid-text="Invalid text"
    class="ix-invalid"
  ></ix-number-input>
</div>
```

### Vue Examples

#### number-input-validation.vue
```vue
<script setup lang="ts">
import { IxNumberInput } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxNumberInput
      :value="5"
      info-text="Info text"
      class="ix-info"
    ></IxNumberInput>
  </div>

  <div>
    <IxNumberInput
      :value="5"
      warning-text="Warning text"
      class="ix-warning"
    ></IxNumberInput>
  </div>

  <div>
    <IxNumberInput
      :value="5"
      valid-text="Valid text"
      class="ix-valid"
    ></IxNumberInput>
  </div>

  <div>
    <IxNumberInput
      :value="5"
      invalid-text="Invalid text"
      class="ix-invalid"
    ></IxNumberInput>
  </div>
</template>
```

## Slots

### React Examples

#### number-input-with-slots.tsx
```tsx
import { IxIcon, IxNumberInput, IxTypography } from '@siemens/ix-react';
import { iconBulb } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxNumberInput>
      <IxIcon name={iconBulb} slot="start" size="16"></IxIcon>
      <IxTypography slot="end">unit</IxTypography>
    </IxNumberInput>
  );
};
```

### Angular Examples

#### number-input-with-slots.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './number-input-with-slots.html',
})
export default class NumberInputWithSlots {}
```

#### number-input-with-slots.html
```html
<ix-number-input>
  <ix-icon name="bulb" slot="start" size="16"></ix-icon>
  <ix-typography slot="end">unit</ix-typography>
</ix-number-input>
```

### Angular Standalone Examples

#### number-input-with-slots.ts
```ts
import { Component } from '@angular/core';
import {
  IxNumberInput,
  IxIcon,
  IxTypography,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxNumberInput, IxIcon, IxTypography, IxTextValueAccessorDirective],
  templateUrl: './number-input-with-slots.html',
})
export default class NumberInputWithSlots {}
```

#### number-input-with-slots.html
```html
<ix-number-input>
  <ix-icon name="bulb" slot="start" size="16"></ix-icon>
  <ix-typography slot="end">unit</ix-typography>
</ix-number-input>
```

### Vue Examples

#### number-input-with-slots.vue
```vue
<script setup lang="ts">
import { iconBulb } from '@siemens/ix-icons/icons';
import { IxIcon, IxNumberInput, IxTypography } from '@siemens/ix-vue';
</script>

<template>
  <IxNumberInput>
    <IxIcon :name="iconBulb" slot="start" size="16"></IxIcon>
    <IxTypography slot="end">unit</IxTypography>
  </IxNumberInput>
</template>
```

## API for ix-number-input

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| allowEmptyValueChange | If true, the valueChange event will return null instead of 0 for an empty input state. This property will be removed in 5.0.0 and this behaviour will be default. | allow-empty-value-change | boolean | false |
| allowedCharactersPattern | The allowed characters pattern for the input field | allowed-characters-pattern | string \| undefined |  |
| disabled | Disables the input field | disabled | boolean | false |
| helperText | The helper text for the input field | helper-text | string \| undefined |  |
| infoText | The info text for the input field | info-text | string \| undefined |  |
| invalidText | The error text for the input field | invalid-text | string \| undefined |  |
| label | The label for the input field | label | string \| undefined |  |
| max | The maximum value for the input field | max | number \| string \| undefined |  |
| min | The minimum value for the input field | min | number \| string \| undefined |  |
| name | name of the input element | name | string \| undefined |  |
| pattern | The pattern for the input field | pattern | string \| undefined |  |
| placeholder | placeholder of the input element | placeholder | string \| undefined |  |
| readonly | Indicates if the field is read-only | readonly | boolean | false |
| required | Indicates if the field is required. When required, empty values (undefined) are not accepted. | required | boolean | false |
| showStepperButtons | Indicates if the stepper buttons should be shown | show-stepper-buttons | boolean \| undefined |  |
| showTextAsTooltip | Indicates if the text should be shown as a tooltip | show-text-as-tooltip | boolean \| undefined |  |
| step | Step value to increment or decrement the input value. Default step value is 1. | step | number \| string \| undefined | 1 |
| suppressSubmitOnEnter | If false, pressing Enter will submit the form (if inside a form). Set to true to suppress submit on Enter. | suppress-submit-on-enter | boolean | false |
| textAlignment | Text alignment within the number input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input. | text-alignment | "end" \| "start" | 'end' |
| validText | The valid text for the input field | valid-text | string \| undefined |  |
| value | The value of the input field. Supports numeric values, scientific notation (1E6, 1E-6), or undefined for empty. | value | number \| undefined | 0 |
| warningText | The warning text for the input field | warning-text | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| ixBlur | Event emitted when the input field loses focus | ixBlur | void |
| validityStateChange | Event emitted when the validity state of the input field changes | validityStateChange | ValidityState |
| valueChange | Event emitted when the value of the input field changes | valueChange | number |

### Slot

| Name | Description |
| --- | --- |
| end | { `Element will be displayed at the end of the input` } |
| start | { `Element will be displayed at the start of the input` } |
