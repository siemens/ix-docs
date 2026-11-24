# Date input - Code

> Code examples and API documentation for the ix-date-input

# Date input - Code

## Basic

### React Examples

#### date-input.tsx
```tsx
import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return <IxDateInput value="2026/02/08"></IxDateInput>;
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
<ix-date-input value="2026/02/08"></ix-date-input>
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
<ix-date-input value="2026/02/08"></ix-date-input>
```

### Vue Examples

#### date-input.vue
```vue
<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput value="2026/02/08"></IxDateInput>
</template>
```

## Disabled

### React Examples

#### date-input-disabled.tsx
```tsx
import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return <IxDateInput value="2026/02/08" disabled></IxDateInput>;
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
<ix-date-input value='2026/02/08' disabled></ix-date-input>
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
<ix-date-input value="2026/02/08" disabled></ix-date-input>
```

### Vue Examples

#### date-input-disabled.vue
```vue
<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput value="2026/02/08" disabled></IxDateInput>
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
      helperText="Some helper text"
      value="2026/02/08"
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
  helperText='Some helper text'
  value='2026/02/08'
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
  helperText="Some helper text"
  value="2026/02/08"
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
    value="2026/02/08"
  ></IxDateInput>
</template>
```

## Readonly

### React Examples

#### date-input-readonly.tsx
```tsx
import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return <IxDateInput value="2026/02/08" readonly></IxDateInput>;
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
<ix-date-input value='2026/02/08' readonly></ix-date-input>
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
<ix-date-input value="2026/02/08" readonly></ix-date-input>
```

### Vue Examples

#### date-input-readonly.vue
```vue
<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput value="2026/02/08" readonly></IxDateInput>
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
          value="2026/02/08"
          infoText="Info text"
          className="ix-info"
        ></IxDateInput>
      </div>

      <div>
        <IxDateInput
          value="2026/02/08"
          warningText="Warning text"
          className="ix-warning"
        ></IxDateInput>
      </div>

      <div>
        <IxDateInput
          value="2026/02/08"
          validText="Valid text"
          className="ix-valid"
        ></IxDateInput>
      </div>

      <div>
        <IxDateInput
          value="2026/02/08"
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
    value='2026/02/08'
    infoText='Info text'
    class='ix-info'
  ></ix-date-input>
</div>

<div>
  <ix-date-input
    value='2026/02/08'
    warningText='Warning text'
    class='ix-warning'
  ></ix-date-input>
</div>

<div>
  <ix-date-input
    value='2026/02/08'
    validText='Valid text'
    class='ix-valid'
  ></ix-date-input>
</div>

<div>
  <ix-date-input
    value='2026/02/08'
    invalidText='Invalid text'
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
    value="2026/02/08"
    infoText="Info text"
    class="ix-info"
  ></ix-date-input>
</div>

<div>
  <ix-date-input
    value="2026/02/08"
    warningText="Warning text"
    class="ix-warning"
  ></ix-date-input>
</div>

<div>
  <ix-date-input
    value="2026/02/08"
    validText="Valid text"
    class="ix-valid"
  ></ix-date-input>
</div>

<div>
  <ix-date-input
    value="2026/02/08"
    invalidText="Invalid text"
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
      value="2026/02/08"
      info-text="Info text"
      class="ix-info"
    ></IxDateInput>
  </div>

  <div>
    <IxDateInput
      value="2026/02/08"
      warning-text="Warning text"
      class="ix-warning"
    ></IxDateInput>
  </div>

  <div>
    <IxDateInput
      value="2026/02/08"
      valid-text="Valid text"
      class="ix-valid"
    ></IxDateInput>
  </div>

  <div>
    <IxDateInput
      value="2026/02/08"
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
    <IxDateInput value="2026/02/08">
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
<ix-date-input value="2026/02/08">
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
<ix-date-input value="2026/02/08">
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
  <IxDateInput value="2026/02/08">
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
      minDate="2026/02/01"
      maxDate="2026/02/28"
      value="2026/02/08"
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
  minDate="2026/02/01"
  maxDate="2026/02/28"
  value="2026/02/08"
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
  minDate="2026/02/01"
  maxDate="2026/02/28"
  value="2026/02/08"
></ix-date-input>
```

### Vue Examples

#### date-input-min-max-date.vue
```vue
<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput minDate="2026/02/01" maxDate="2026/02/28" value="2026/02/08" />
</template>
```

## Require confirmation

By default, date inputs apply the picked date and close the date picker.
Set `requireConfirmation` to only apply the value when users click **Confirm**.
**Cancel**, <kbd>Escape</kbd> or clicking outside discards the pending selection.
Date inputs then emit `valueChange` only for confirmed picks.
Valid values typed into the input field are always applied immediately and emit `valueChange`.

### React Examples

#### date-input-require-confirmation.tsx
```tsx
import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return <IxDateInput label="Date" value="2026/10/05" requireConfirmation />;
};
```

### Angular Examples

#### date-input-require-confirmation.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-input-require-confirmation.html',
})
export default class DateInputRequireConfirmation {}
```

#### date-input-require-confirmation.html
```html
<ix-date-input
  label='Date'
  value='2026/10/05'
  requireConfirmation
></ix-date-input>
```

### Angular Standalone Examples

#### date-input-require-confirmation.ts
```ts
import { Component } from '@angular/core';
import { IxDateInput } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDateInput],
  templateUrl: './date-input-require-confirmation.html',
})
export default class DateInputRequireConfirmation {}
```

#### date-input-require-confirmation.html
```html
<ix-date-input
  label='Date'
  value='2026/10/05'
  requireConfirmation
></ix-date-input>
```

### Vue Examples

#### date-input-require-confirmation.vue
```vue
<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput
    label="Date"
    value="2026/10/05"
    require-confirmation
  ></IxDateInput>
</template>
```

## Display format

Set `displayFormat` to show and type the date in a different format than `format`.
`value`, `minDate`, `maxDate` and emitted values keep using `format`.
When users type a date, parts missing in `displayFormat` are kept from the current value.
A typed two-digit year resolves to the year closest to the current value.

### React Examples

#### date-input-display-format.tsx
```tsx
import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxDateInput
      label="Date"
      value="2026/10/05"
      displayFormat="dd.LL.yy"
    />
  );
};
```

### Angular Examples

#### date-input-display-format.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-input-display-format.html',
})
export default class DateInputDisplayFormat {}
```

#### date-input-display-format.html
```html
<ix-date-input
  label='Date'
  value='2026/10/05'
  displayFormat='dd.LL.yy'
></ix-date-input>
```

### Angular Standalone Examples

#### date-input-display-format.ts
```ts
import { Component } from '@angular/core';
import { IxDateInput } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDateInput],
  templateUrl: './date-input-display-format.html',
})
export default class DateInputDisplayFormat {}
```

#### date-input-display-format.html
```html
<ix-date-input
  label='Date'
  value='2026/10/05'
  displayFormat='dd.LL.yy'
></ix-date-input>
```

### Vue Examples

#### date-input-display-format.vue
```vue
<script setup lang="ts">
import { IxDateInput } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput
    label="Date"
    value="2026/10/05"
    display-format="dd.LL.yy"
  ></IxDateInput>
</template>
```

## API for ix-date-input

### Properties

| Name | Description | Attribute | Type | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| ariaLabelCalendarButton | { "ARIA label for the calendar icon button.\n\nWill be set as aria-label on the nested HTML button element." } | aria-label-calendar-button | string \| undefined | 'Open calendar' |  |
| ariaLabelNextMonthButton | { "ARIA label for the next month icon button.\n\nWill be set as aria-label on the nested HTML button element." } | aria-label-next-month-button | string \| undefined | 'Next month' |  |
| ariaLabelPreviousMonthButton | { "ARIA label for the previous month icon button.\n\nWill be set as aria-label on the nested HTML button element." } | aria-label-previous-month-button | string \| undefined | 'Previous month' |  |
| disabled | { "Disabled attribute." } | disabled | boolean | false |  |
| displayFormat | { "Date format used to display and type the date in the input field.\n\n`value`, `minDate`, `maxDate` and emitted values keep using `format`,\n\ne.g. `format=\"yyyy/LL/dd\"` with `displayFormat=\"yy/LL/dd\"` displays a\n\ntwo-digit year without losing the century of the value.\n\nDate parts missing in `displayFormat` are kept from the current value\n\nwhen the user types a date. A typed two-digit year resolves to the year\n\nclosest to the current value.\n\nDefaults to `format`.\n\nSee [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens." } | display-format | string \| undefined |  |  |
| enableTopLayer | { "Enable Popover API rendering for dropdown." } | enable-top-layer | boolean | false |  |
| format | { "Date format string.\n\nSee [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens." } | format | string | 'yyyy/LL/dd' |  |
| helperText | { "Helper text below the input field." } | helper-text | string \| undefined |  |  |
| i18nCancel | { "Text of the cancel button shown when `requireConfirmation` is enabled." } | i18n-cancel | string | 'Cancel' |  |
| i18nConfirm | { "Text of the confirm button shown when `requireConfirmation` is enabled." } | i18n-confirm | string | 'Confirm' |  |
| i18nErrorDateUnparsable | { "I18n string for the error message when the date is not parsable." } | i18n-error-date-unparsable | string | 'Date is not valid' |  |
| infoText | { "Info text below the input field." } | info-text | string \| undefined |  |  |
| invalidText | { "Error text below the input field." } | invalid-text | string \| undefined |  |  |
| label | { "Label of the input field." } | label | string \| undefined |  |  |
| locale | { "Locale identifier (e.g. 'en' or 'de').\n\nThe locale is used to translate the labels for weekdays and months,\n\ndetermine the default order of weekdays, and parse user input.\n\nValues emitted via `valueChange` are in `format`." } | locale | string \| undefined |  | Breaking change in v6.0.0: Also used to parse user input and format the values emitted via valueChange |
| maxDate | { "The latest date that can be selected by the date input/picker.\n\nIf not set there will be no restriction." } | max-date | string | '' |  |
| minDate | { "The earliest date that can be selected by the date input/picker.\n\nIf not set there will be no restriction." } | min-date | string | '' |  |
| name | { "Name of the input element." } | name | string \| undefined |  |  |
| placeholder | { "Placeholder of the input element." } | placeholder | string \| undefined |  |  |
| readonly | { "Readonly attribute." } | readonly | boolean | false |  |
| requireConfirmation | { "If true, changes require clicking confirm.\n\nCancel, Escape or clicking outside all discard pending selections.\n\nIf false, changes are applied immediately without requiring confirmation." } | require-confirmation | boolean | false |  |
| required | { "Required attribute." } | required | boolean \| undefined |  |  |
| showTextAsTooltip | { "Show text as tooltip." } | show-text-as-tooltip | boolean \| undefined |  |  |
| showWeekNumbers | { "Shows week numbers displayed on the left side of the date picker." } | show-week-numbers | boolean | false |  |
| suppressSubmitOnEnter | { "If false, pressing Enter will submit the form (if inside a form).\n\nSet to true to suppress submit on Enter." } | suppress-submit-on-enter | boolean | false |  |
| textAlignment | { "Text alignment within the date input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input." } | text-alignment | "end" \| "start" | 'start' |  |
| validText | { "Valid text below the input field." } | valid-text | string \| undefined |  |  |
| value | { "Value of the input element." } | value | string \| undefined | '' |  |
| warningText | { "Warning text below the input field." } | warning-text | string \| undefined |  |  |
| weekStartIndex | { "The index of the day the week starts on, as a 0-based index into Luxon's\n\n`Info.weekdays()` array. That array is always ordered Monday-first\n\nregardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday.\n\nE.g. weekStartIndex = 6 results in starting the week on Sunday." } | week-start-index | number | 0 |  |

### Methods

#### clear

```ts
clear(): Promise&lt;void&gt;;
```

{ "Clears the input field value and resets validation state.\n\nSets the value to empty and removes touched state to suppress validation." }

#### focusInput

```ts
focusInput(): Promise&lt;void&gt;;
```

{ "Focuses the input field" }

#### getNativeInputElement

```ts
getNativeInputElement(): Promise&lt;HTMLInputElement&gt;;
```

{ "Get the native input element" }

### Events

| Name | Description | Event | Detail | Notes |
| --- | --- | --- | --- | --- |
| ixChange | { "Change event. Emitted when the date input loses focus and the value has changed." } | ixChange | string \| undefined |  |
| validityStateChange | { "Validation state change event. Emitted when the validation state changes." } | validityStateChange | { patternMismatch: boolean; valueMissing: boolean; invalidReason?: string \| undefined; } |  |
| valueChange | { "Value change event. Emitted when the input value changes." } | valueChange | string \| undefined | Breaking change in v6.0.0: Emit timing changed with requireConfirmation |

### Slot

| Name | Description |
| --- | --- |
| end | { "Element will be displayed at the end of the input" } |
| start | { "Element will be displayed at the start of the input" } |
