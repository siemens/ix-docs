# Date time picker - Code

> Code examples and API documentation for the ix-datetime-picker

# Date time picker - Code

## Basic

### React Examples

#### datetimepicker.tsx
```tsx
import { IxDatetimePicker } from '@siemens/ix-react';

export default () => {
  return <IxDatetimePicker />;
};
```

### Angular Examples

#### datetimepicker.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `<ix-datetime-picker></ix-datetime-picker>`,
})
export default class Datetimepicker {}
```

### Angular Standalone Examples

#### datetimepicker.ts
```ts
import { Component } from '@angular/core';
import { IxDatetimePicker } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDatetimePicker],
  template: `<ix-datetime-picker></ix-datetime-picker>`,
})
export default class Datetimepicker {}
```

### Vue Examples

#### datetimepicker.vue
```vue
<script setup lang="ts">
import { IxDatetimePicker } from '@siemens/ix-vue';
</script>

<template>
  <IxDatetimePicker />
</template>
```

<!-- Re-add this when migrating to the rework components -->
<!-- # Translation
The `ix-date-picker` uses the DayJS locale for the translations of the names of the weekdays and months. To change the default english translation you have to import the desired DayJS locale. Please refer to the [DayJS documentation](https://day.js.org/docs/en/i18n/loading-into-browser) or the examples below.

```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/de.js"></script>

<ix-datetime-picker></ix-datetime-picker>

<script>
  document.querySelector('ix-datetime-picker-rework').dayJsLocale = window.dayjs_locale_de;
</script>
```

Or

```tsx
import dayjs from 'dayjs';

export default async () => {
  const locale = await import('dayjs/locale/de');
  return <IxDateTimePicker dayJsLocale={locale} />;
};
``` -->

## API for ix-datetime-picker

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelNextMonthButton | ARIA label for the next month icon button. Will be set as aria-label on the nested HTML button element. | aria-label-next-month-button | string \| undefined | 'Next month' |
| ariaLabelPreviousMonthButton | ARIA label for the previous month icon button. Will be set as aria-label on the nested HTML button element. | aria-label-previous-month-button | string \| undefined | 'Previous month' |
| dateFormat | Date format string. See [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens. | date-format | string | 'yyyy/LL/dd' |
| from | The selected starting date. If the picker is not in range mode, this is the selected date. Format has to match the \`dateFormat\` property. | from | string \| undefined |  |
| i18nDone | Text of the date select button. | i18n-done | string | 'Done' |
| i18nTime | Top label of the time picker. | i18n-time | string | 'Time' |
| locale | Locale identifier (e.g. 'en' or 'de'). See [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens. | locale | string \| undefined |  |
| maxDate | The latest date that can be selected. If not set there will be no restriction. | max-date | string \| undefined |  |
| minDate | The earliest date that can be selected. If not set there will be no restriction. | min-date | string \| undefined |  |
| showTimeReference | Show AM/PM time reference control. | show-time-reference | boolean | false |
| showWeekNumbers | Shows week numbers displayed on the left side of the date picker. | show-week-numbers | boolean | false |
| singleSelection | If true, disables date range selection (from/to). | single-selection | boolean | false |
| time | Selected time value for the embedded time picker. Format has to match the \`timeFormat\` property. | time | string \| undefined |  |
| timeFormat | Time format string. See [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens. | time-format | string | 'HH:mm:ss' |
| timeReference | Time reference (AM or PM). | time-reference | "AM" \| "PM" \| undefined |  |
| to | The selected end date. If the picker is not in range mode, this property has no impact. Format has to match the \`dateFormat\` property. | to | string \| undefined |  |
| weekStartIndex | The index of which day to start the week on, based on the Locale#weekdays array. E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on Monday. | week-start-index | number | 0 |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| dateChange | Date change event. Emitted when the date changes in the embedded date picker. | dateChange | "time" \| string \| { from?: string \| undefined; to?: string \| undefined; time: string; } |
| dateSelect | Datetime selection event. Emitted when the user confirms the selection. | dateSelect | { from?: string \| undefined; to?: string \| undefined; time: string; } |
| timeChange | Time change event. Emitted when the time changes in the embedded time picker. | timeChange | string |
