# Time input - Code

> Code examples and API documentation for the ix-time-input

# Time input - Code

## Basic

### React Examples

#### time-input.tsx
```tsx
import { IxTimeInput } from '@siemens/ix-react';

export default () => {
  return <IxTimeInput></IxTimeInput>;
};
```

### Angular Examples

#### time-input.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './time-input.html',
})
export default class TimeInput {}
```

#### time-input.html
```html
<ix-time-input></ix-time-input>
```

### Angular Standalone Examples

#### time-input.ts
```ts
import { Component } from '@angular/core';
import {
  IxTimeInput,
  IxTimeValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTimeInput, IxTimeValueAccessorDirective],
  templateUrl: './time-input.html',
})
export default class TimeInput {}
```

#### time-input.html
```html
<ix-time-input></ix-time-input>
```

### Vue Examples

#### time-input.vue
```vue
<script setup lang="ts">
import { IxTimeInput } from '@siemens/ix-vue';
</script>

<template>
  <IxTimeInput></IxTimeInput>
</template>
```

## Label

### React Examples

#### time-input-label.tsx
```tsx
import { IxTimeInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxTimeInput
      label="Time"
      name="time"
      helperText="Some helper text"
    ></IxTimeInput>
  );
};
```

### Angular Examples

#### time-input-label.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './time-input-label.html',
})
export default class TimeInputLabel {}
```

#### time-input-label.html
```html
<ix-time-input
  label="Time"
  name="time"
  helper-text="Some helper text"
></ix-time-input>
```

### Angular Standalone Examples

#### time-input-label.ts
```ts
import { Component } from '@angular/core';
import {
  IxTimeInput,
  IxTimeValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTimeInput, IxTimeValueAccessorDirective],
  templateUrl: './time-input-label.html',
})
export default class TimeInputLabel {}
```

#### time-input-label.html
```html
<ix-time-input
  label="Time"
  name="time"
  helper-text="Some helper text"
></ix-time-input>
```

### Vue Examples

#### time-input-label.vue
```vue
<script setup lang="ts">
import { IxTimeInput } from '@siemens/ix-vue';
</script>

<template>
  <IxTimeInput
    label="Time"
    name="time"
    helper-text="Some helper text"
  ></IxTimeInput>
</template>
```

## Disabled

### React Examples

#### time-input-disabled.tsx
```tsx
import { IxTimeInput } from '@siemens/ix-react';

export default () => {
  return <IxTimeInput disabled></IxTimeInput>;
};
```

### Angular Examples

#### time-input-disabled.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './time-input-disabled.html',
})
export default class TimeInputDisabled {}
```

#### time-input-disabled.html
```html
<ix-time-input disabled></ix-time-input>
```

### Angular Standalone Examples

#### time-input-disabled.ts
```ts
import { Component } from '@angular/core';
import {
  IxTimeInput,
  IxTimeValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTimeInput, IxTimeValueAccessorDirective],
  templateUrl: './time-input-disabled.html',
})
export default class TimeInputDisabled {}
```

#### time-input-disabled.html
```html
<ix-time-input disabled></ix-time-input>
```

### Vue Examples

#### time-input-disabled.vue
```vue
<script setup lang="ts">
import { IxTimeInput } from '@siemens/ix-vue';
</script>

<template>
  <IxTimeInput disabled></IxTimeInput>
</template>
```

## Readonly

### React Examples

#### time-input-readonly.tsx
```tsx
import { IxTimeInput } from '@siemens/ix-react';

export default () => {
  return <IxTimeInput readonly></IxTimeInput>;
};
```

### Angular Examples

#### time-input-readonly.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './time-input-readonly.html',
})
export default class TimeInputReadonly {}
```

#### time-input-readonly.html
```html
<ix-time-input readonly></ix-time-input>
```

### Angular Standalone Examples

#### time-input-readonly.ts
```ts
import { Component } from '@angular/core';
import {
  IxTimeInput,
  IxTimeValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTimeInput, IxTimeValueAccessorDirective],
  templateUrl: './time-input-readonly.html',
})
export default class TimeInputReadonly {}
```

#### time-input-readonly.html
```html
<ix-time-input readonly></ix-time-input>
```

### Vue Examples

#### time-input-readonly.vue
```vue
<script setup lang="ts">
import { IxTimeInput } from '@siemens/ix-vue';
</script>

<template>
  <IxTimeInput readOnly></IxTimeInput>
</template>
```

## Validation

### React Examples

#### time-input-validation.tsx
```tsx
import { IxTimeInput } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxTimeInput infoText="Info text" className="ix-info"></IxTimeInput>
      </div>

      <div>
        <IxTimeInput
          warningText="Warning text"
          className="ix-warning"
        ></IxTimeInput>
      </div>

      <div>
        <IxTimeInput validText="Valid text" className="ix-valid"></IxTimeInput>
      </div>

      <div>
        <IxTimeInput
          invalidText="Invalid text"
          className="ix-invalid"
        ></IxTimeInput>
      </div>
    </>
  );
};
```

### Angular Examples

#### time-input-validation.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './time-input-validation.html',
})
export default class TimeInputValidation {}
```

#### time-input-validation.html
```html
<div>
  <ix-time-input info-text="Info text" class="ix-info"></ix-time-input>
</div>

<div>
  <ix-time-input warning-text="Warning text" class="ix-warning"></ix-time-input>
</div>

<div>
  <ix-time-input valid-text="Valid text" class="ix-valid"></ix-time-input>
</div>

<div>
  <ix-time-input invalid-text="Invalid text" class="ix-invalid"></ix-time-input>
</div>
```

### Angular Standalone Examples

#### time-input-validation.ts
```ts
import { Component } from '@angular/core';
import {
  IxTimeInput,
  IxTimeValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTimeInput, IxTimeValueAccessorDirective],
  templateUrl: './time-input-validation.html',
})
export default class TimeInputValidation {}
```

#### time-input-validation.html
```html
<div>
  <ix-time-input info-text="Info text" class="ix-info"></ix-time-input>
</div>

<div>
  <ix-time-input warning-text="Warning text" class="ix-warning"></ix-time-input>
</div>

<div>
  <ix-time-input valid-text="Valid text" class="ix-valid"></ix-time-input>
</div>

<div>
  <ix-time-input invalid-text="Invalid text" class="ix-invalid"></ix-time-input>
</div>
```

### Vue Examples

#### time-input-validation.vue
```vue
<script setup lang="ts">
import { IxTimeInput } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxTimeInput info-text="Info text" class="ix-info"></IxTimeInput>
  </div>

  <div>
    <IxTimeInput warning-text="Warning text" class="ix-warning"></IxTimeInput>
  </div>

  <div>
    <IxTimeInput valid-text="Valid text" class="ix-valid"></IxTimeInput>
  </div>

  <div>
    <IxTimeInput invalid-text="Invalid text" class="ix-invalid"></IxTimeInput>
  </div>
</template>
```

## Slots

### React Examples

#### time-input-with-slots.tsx
```tsx
import { IxTimeInput, IxIcon, IxTypography } from '@siemens/ix-react';
import { iconBulb } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxTimeInput>
      <IxIcon name={iconBulb} slot="start" size="16"></IxIcon>
      <IxTypography slot="end">Slot</IxTypography>
    </IxTimeInput>
  );
};
```

### Angular Examples

#### time-input-with-slots.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './time-input-with-slots.html',
})
export default class TimeInputWithSlots {}
```

#### time-input-with-slots.html
```html
<ix-time-input>
  <ix-icon name="bulb" slot="start" size="16"></ix-icon>
  <ix-typography slot="end">Slot</ix-typography>
</ix-time-input>
```

### Angular Standalone Examples

#### time-input-with-slots.ts
```ts
import { Component } from '@angular/core';
import {
  IxTimeInput,
  IxIcon,
  IxTypography,
  IxTimeValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTimeInput, IxIcon, IxTypography, IxTimeValueAccessorDirective],
  templateUrl: './time-input-with-slots.html',
})
export default class TimeInputWithSlots {}
```

#### time-input-with-slots.html
```html
<ix-time-input>
  <ix-icon name="bulb" slot="start" size="16"></ix-icon>
  <ix-typography slot="end">Slot</ix-typography>
</ix-time-input>
```

### Vue Examples

#### time-input-with-slots.vue
```vue
<script setup lang="ts">
import { iconBulb } from '@siemens/ix-icons/icons';
import { IxTimeInput, IxIcon, IxTypography } from '@siemens/ix-vue';
</script>

<template>
  <IxTimeInput>
    <IxIcon :name="iconBulb" slot="start" size="16"></IxIcon>
    <IxTypography slot="end">Slot</IxTypography>
  </IxTimeInput>
</template>
```

## API for ix-time-input

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| disabled | Disabled attribute | disabled | boolean | false |
| enableTopLayer | Enable Popover API rendering for dropdown. | enable-top-layer | boolean | false |
| format | Format of time string See [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens. | format | string | 'TT' |
| helperText | Helper text below the input field | helper-text | string \| undefined |  |
| hideHeader | Hides the header of the picker. | hide-header | boolean | false |
| hourInterval | Interval for hour selection | hour-interval | number | 1 |
| i18nErrorTimeUnparsable | I18n string for the error message when the time is not parsable | i18n-error-time-unparsable | string | 'Time is not valid' |
| i18nHourColumnHeader | Text for time-picker hour column header | i18n-hour-column-header | string | 'hr' |
| i18nMillisecondColumnHeader | Text for time-picker millisecond column header | i18n-millisecond-column-header | string | 'ms' |
| i18nMinuteColumnHeader | Text for time-picker minute column header | i18n-minute-column-header | string | 'min' |
| i18nSecondColumnHeader | Text for time-picker second column header | i18n-second-column-header | string | 'sec' |
| i18nSelectTime | Text of time-picker time select button | i18n-select-time | string | 'Confirm' |
| i18nTime | Text for time-picker top label | i18n-time | string | 'Time' |
| infoText | Info text below the input field | info-text | string \| undefined |  |
| invalidText | Error text below the input field | invalid-text | string \| undefined |  |
| label | Label of the input field | label | string \| undefined |  |
| millisecondInterval | Interval for millisecond selection | millisecond-interval | number | 100 |
| minuteInterval | Interval for minute selection | minute-interval | number | 1 |
| name | Name of the input element | name | string \| undefined |  |
| placeholder | Placeholder of the input element | placeholder | string \| undefined |  |
| readonly | Readonly attribute | readonly | boolean | false |
| required | Required attribute | required | boolean \| undefined |  |
| secondInterval | Interval for second selection | second-interval | number | 1 |
| showTextAsTooltip | Show text as tooltip | show-text-as-tooltip | boolean \| undefined |  |
| suppressSubmitOnEnter | If false, pressing Enter will submit the form (if inside a form). Set to true to suppress submit on Enter. | suppress-submit-on-enter | boolean | false |
| textAlignment | Text alignment within the time input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input. | text-alignment | "end" \| "start" | 'start' |
| validText | Valid text below the input field | valid-text | string \| undefined |  |
| value | Value of the input element | value | string | '' |
| warningText | Warning text below the input field | warning-text | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| validityStateChange | Validation state change event. | validityStateChange | { patternMismatch: boolean; invalidReason?: string \| undefined; } |
| valueChange | Input change event. | valueChange | string |

### Slot

| Name | Description |
| --- | --- |
| end | { `Element will be displayed at the end of the input` } |
| start | { `Element will be displayed at the start of the input` } |
