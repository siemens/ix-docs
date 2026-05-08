# Date input - Code

> Code examples and API documentation for the ix-date-input

# Date input - Code

## Basic

### React Examples

#### date-input.tsx
```tsx
import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return <IxDateInput value="1970/01/01"></IxDateInput>;
};
```

### Angular Examples

#### date-input.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-input.html',
})
export default class DateInput {}
```

#### date-input.html
```html
<ix-date-input value='1970/01/01'></ix-date-input>
```

### Angular Standalone Examples

#### date-input.ts
```ts
import { Component } from '@angular/core';
import {
  IxDateInput,
  IxDateValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDateInput, IxDateValueAccessorDirective],
  templateUrl: './date-input.html',
})
export default class DateInput {}
```

#### date-input.html
```html
<ix-date-input value="1970/01/01"></ix-date-input>
```

### Vue Examples

#### date-input.vue
```vue
<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput value="1970/01/01"></IxDateInput>
</template>
```

## Disabled

### React Examples

#### date-input-disabled.tsx
```tsx
import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return <IxDateInput value="1970/01/01" disabled></IxDateInput>;
};
```

### Angular Examples

#### date-input-disabled.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-input-disabled.html',
})
export default class DateInputDisabled {}
```

#### date-input-disabled.html
```html
<ix-date-input value='1970/01/01' disabled></ix-date-input>
```

### Angular Standalone Examples

#### date-input-disabled.ts
```ts
import { Component } from '@angular/core';
import {
  IxDateInput,
  IxDateValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDateInput, IxDateValueAccessorDirective],
  templateUrl: './date-input-disabled.html',
})
export default class DateInputDisabled {}
```

#### date-input-disabled.html
```html
<ix-date-input value="1970/01/01" disabled></ix-date-input>
```

### Vue Examples

#### date-input-disabled.vue
```vue
<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput value="1970/01/01" disabled></IxDateInput>
</template>
```

## Label

### React Examples

#### date-input-label.tsx
```tsx
import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxDateInput
      label="Begin"
      name="begin"
      helper-text="Some helper text"
      value="1970/01/01"
    ></IxDateInput>
  );
};
```

### Angular Examples

#### date-input-label.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-input-label.html',
})
export default class DateInputLabel {}
```

#### date-input-label.html
```html
<ix-date-input
  label='Begin'
  name='begin'
  helper-text='Some helper text'
  value='1970/01/01'
></ix-date-input>
```

### Angular Standalone Examples

#### date-input-label.ts
```ts
import { Component } from '@angular/core';
import {
  IxDateInput,
  IxDateValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDateInput, IxDateValueAccessorDirective],
  templateUrl: './date-input-label.html',
})
export default class DateInputLabel {}
```

#### date-input-label.html
```html
<ix-date-input
  label="Begin"
  name="begin"
  helper-text="Some helper text"
  value="1970/01/01"
></ix-date-input>
```

### Vue Examples

#### date-input-label.vue
```vue
<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput
    label="Begin"
    name="begin"
    helper-text="Some helper text"
    value="1970/01/01"
  ></IxDateInput>
</template>
```

## Readonly

### React Examples

#### date-input-readonly.tsx
```tsx
import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return <IxDateInput value="1970/01/01" readonly></IxDateInput>;
};
```

### Angular Examples

#### date-input-readonly.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-input-readonly.html',
})
export default class DateInputReadonly {}
```

#### date-input-readonly.html
```html
<ix-date-input value='1970/01/01' readonly></ix-date-input>
```

### Angular Standalone Examples

#### date-input-readonly.ts
```ts
import { Component } from '@angular/core';
import {
  IxDateInput,
  IxDateValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDateInput, IxDateValueAccessorDirective],
  templateUrl: './date-input-readonly.html',
})
export default class DateInputReadonly {}
```

#### date-input-readonly.html
```html
<ix-date-input value="1970/01/01" readonly></ix-date-input>
```

### Vue Examples

#### date-input-readonly.vue
```vue
<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput value="1970/01/01" readonly></IxDateInput>
</template>
```

## Validation

### React Examples

#### date-input-validation.tsx
```tsx
import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxDateInput
          value="1970/01/01"
          infoText="Info text"
          className="ix-info"
        ></IxDateInput>
      </div>

      <div>
        <IxDateInput
          value="1970/01/01"
          warningText="Warning text"
          className="ix-warning"
        ></IxDateInput>
      </div>

      <div>
        <IxDateInput
          value="1970/01/01"
          validText="Valid text"
          className="ix-valid"
        ></IxDateInput>
      </div>

      <div>
        <IxDateInput
          value="1970/01/01"
          invalidText="Invalid text"
          className="ix-invalid"
        ></IxDateInput>
      </div>
    </>
  );
};
```

### Angular Examples

#### date-input-validation.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-input-validation.html',
})
export default class DateInputValidation {}
```

#### date-input-validation.html
```html
<div>
  <ix-date-input
    value='1970/01/01'
    info-text='Info text'
    class='ix-info'
  ></ix-date-input>
</div>

<div>
  <ix-date-input
    value='1970/01/01'
    warning-text='Warning text'
    class='ix-warning'
  ></ix-date-input>
</div>

<div>
  <ix-date-input
    value='1970/01/01'
    valid-text='Valid text'
    class='ix-valid'
  ></ix-date-input>
</div>

<div>
  <ix-date-input
    value='1970/01/01'
    invalid-text='Invalid text'
    class='ix-invalid'
  ></ix-date-input>
</div>
```

### Angular Standalone Examples

#### date-input-validation.ts
```ts
import { Component } from '@angular/core';
import {
  IxDateInput,
  IxDateValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDateInput, IxDateValueAccessorDirective],
  templateUrl: './date-input-validation.html',
})
export default class DateInputValidation {}
```

#### date-input-validation.html
```html
<div>
  <ix-date-input
    value="1970/01/01"
    info-text="Info text"
    class="ix-info"
  ></ix-date-input>
</div>

<div>
  <ix-date-input
    value="1970/01/01"
    warning-text="Warning text"
    class="ix-warning"
  ></ix-date-input>
</div>

<div>
  <ix-date-input
    value="1970/01/01"
    valid-text="Valid text"
    class="ix-valid"
  ></ix-date-input>
</div>

<div>
  <ix-date-input
    value="1970/01/01"
    invalid-text="Invalid text"
    class="ix-invalid"
  ></ix-date-input>
</div>
```

### Vue Examples

#### date-input-validation.vue
```vue
<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxDateInput
      value="1970/01/01"
      info-text="Info text"
      class="ix-info"
    ></IxDateInput>
  </div>

  <div>
    <IxDateInput
      value="1970/01/01"
      warning-text="Warning text"
      class="ix-warning"
    ></IxDateInput>
  </div>

  <div>
    <IxDateInput
      value="1970/01/01"
      valid-text="Valid text"
      class="ix-valid"
    ></IxDateInput>
  </div>

  <div>
    <IxDateInput
      value="1970/01/01"
      invalid-text="Invalid text"
      class="ix-invalid"
    ></IxDateInput>
  </div>
</template>
```

## Slots

### React Examples

#### date-input-with-slots.tsx
```tsx
import { IxDateInput, IxIcon, IxTypography } from '@siemens/ix-react';
import { iconBulb } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxDateInput value="1970/01/01">
      <IxIcon name={iconBulb} slot="start" size="16"></IxIcon>
      <IxTypography slot="end">Slot</IxTypography>
    </IxDateInput>
  );
};
```

### Angular Examples

#### date-input-with-slots.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-input-with-slots.html',
})
export default class DateInputWithSlots {}
```

#### date-input-with-slots.html
```html
<ix-date-input value="1970/01/01">
  <ix-icon name="bulb" slot="start" size="16"></ix-icon>
  <ix-typography slot="end">Slot</ix-typography>
</ix-date-input>
```

### Angular Standalone Examples

#### date-input-with-slots.ts
```ts
import { Component } from '@angular/core';
import {
  IxDateInput,
  IxIcon,
  IxTypography,
  IxDateValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDateInput, IxIcon, IxTypography, IxDateValueAccessorDirective],
  templateUrl: './date-input-with-slots.html',
})
export default class DateInputWithSlots {}
```

#### date-input-with-slots.html
```html
<ix-date-input value="1970/01/01">
  <ix-icon name="bulb" slot="start" size="16"></ix-icon>
  <ix-typography slot="end">Slot</ix-typography>
</ix-date-input>
```

### Vue Examples

#### date-input-with-slots.vue
```vue
<script setup lang="ts">
import { iconBulb } from '@siemens/ix-icons/icons';
import { IxDateInput, IxIcon, IxTypography } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput value="1970/01/01">
    <IxIcon :name="iconBulb" slot="start" size="16"></IxIcon>
    <IxTypography slot="end">Slot</IxTypography>
  </IxDateInput>
</template>
```

## Min- and max-date

### React Examples

#### date-input-min-max-date.tsx
```tsx
import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxDateInput
      minDate="2025/07/06"
      maxDate="2025/07/14"
      value="2025/07/07"
    ></IxDateInput>
  );
};
```

### Angular Examples

#### date-input-min-max-date.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-input-min-max-date.html',
})
export default class DateInputMinMaxDate {}
```

#### date-input-min-max-date.html
```html
<ix-date-input
  minDate="2025/07/06"
  maxDate="2025/07/14"
  value="2025/07/07"
></ix-date-input>
```

### Angular Standalone Examples

#### date-input-min-max-date.ts
```ts
import { Component } from '@angular/core';
import {
  IxDateInput,
  IxDateValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDateInput, IxDateValueAccessorDirective],
  templateUrl: './date-input-min-max-date.html',
})
export default class DateInputMinMaxDate {}
```

#### date-input-min-max-date.html
```html
<ix-date-input
  minDate="2025/07/06"
  maxDate="2025/07/14"
  value="2025/07/07"
></ix-date-input>
```

### Vue Examples

#### date-input-min-max-date.vue
```vue
<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput minDate="2025/07/06" maxDate="2025/07/14" value="2025/07/07" />
</template>
```

## API for ix-date-input

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelCalendarButton | ARIA label for the calendar icon button. Will be set as aria-label on the nested HTML button element. | aria-label-calendar-button | string \| undefined | 'Open calendar' |
| ariaLabelNextMonthButton | ARIA label for the next month icon button. Will be set as aria-label on the nested HTML button element. | aria-label-next-month-button | string \| undefined | 'Next month' |
| ariaLabelPreviousMonthButton | ARIA label for the previous month icon button. Will be set as aria-label on the nested HTML button element. | aria-label-previous-month-button | string \| undefined | 'Previous month' |
| disabled | Disabled attribute. | disabled | boolean | false |
| enableTopLayer | Enable Popover API rendering for dropdown. | enable-top-layer | boolean | false |
| format | Date format string. See [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens. | format | string | 'yyyy/LL/dd' |
| helperText | Helper text below the input field. | helper-text | string \| undefined |  |
| i18nErrorDateUnparsable | I18n string for the error message when the date is not parsable. | i18n-error-date-unparsable | string | 'Date is not valid' |
| infoText | Info text below the input field. | info-text | string \| undefined |  |
| invalidText | Error text below the input field. | invalid-text | string \| undefined |  |
| label | Label of the input field. | label | string \| undefined |  |
| locale | Locale identifier (e.g. 'en' or 'de'). The locale is used to translate the labels for weekdays and months. It also determines the default order of weekdays based on the locale's conventions. When the locale changes, the weekday labels are rotated according to the \`weekStartIndex\`. It does not affect the values returned by methods and events. | locale | string \| undefined |  |
| maxDate | The latest date that can be selected by the date input/picker. If not set there will be no restriction. | max-date | string | '' |
| minDate | The earliest date that can be selected by the date input/picker. If not set there will be no restriction. | min-date | string | '' |
| name | Name of the input element. | name | string \| undefined |  |
| placeholder | Placeholder of the input element. | placeholder | string \| undefined |  |
| readonly | Readonly attribute. | readonly | boolean | false |
| required | Required attribute. | required | boolean \| undefined |  |
| showTextAsTooltip | Show text as tooltip. | show-text-as-tooltip | boolean \| undefined |  |
| showWeekNumbers | Shows week numbers displayed on the left side of the date picker. | show-week-numbers | boolean | false |
| suppressSubmitOnEnter | If false, pressing Enter will submit the form (if inside a form). Set to true to suppress submit on Enter. | suppress-submit-on-enter | boolean | false |
| textAlignment | Text alignment within the date input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input. | text-alignment | "end" \| "start" | 'start' |
| validText | Valid text below the input field. | valid-text | string \| undefined |  |
| value | Value of the input element. | value | string \| undefined | '' |
| warningText | Warning text below the input field. | warning-text | string \| undefined |  |
| weekStartIndex | The index of which day to start the week on, based on the Locale#weekdays array. E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on Monday. | week-start-index | number | 0 |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| ixChange | Change event. Emitted when the date input loses focus and the value has changed. | ixChange | string \| undefined |
| validityStateChange | Validation state change event. Emitted when the validation state changes. | validityStateChange | { patternMismatch: boolean; valueMissing: boolean; invalidReason?: string \| undefined; } |
| valueChange | Value change event. Emitted when the input value changes. | valueChange | string \| undefined |

### Slot

| Name | Description |
| --- | --- |
| end | { `Element will be displayed at the end of the input` } |
| start | { `Element will be displayed at the start of the input` } |
