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

## Require confirmation

By default, date time pickers apply every pick immediately and **Done** finishes the selection.
Set `requireConfirmation` to only apply the date and time when users click **Confirm**.
**Cancel** restores the last confirmed value.
Date time pickers emit `dateChange` and `timeChange` for every pick and `dateSelect` only when they apply the selection (on **Done** or **Confirm**).

### React Examples

#### datetime-picker-require-confirmation.tsx
```tsx
import { IxDatetimePicker } from '@siemens/ix-react';

export default () => {
  return (
    <IxDatetimePicker
      from="2026/10/05"
      time="09:30:00"
      singleSelection
      requireConfirmation
    />
  );
};
```

### Angular Examples

#### datetime-picker-require-confirmation.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './datetime-picker-require-confirmation.html',
})
export default class DatetimePickerRequireConfirmation {}
```

#### datetime-picker-require-confirmation.html
```html
<ix-datetime-picker
  from='2026/10/05'
  time='09:30:00'
  singleSelection
  requireConfirmation
></ix-datetime-picker>
```

### Angular Standalone Examples

#### datetime-picker-require-confirmation.ts
```ts
import { Component } from '@angular/core';
import { IxDatetimePicker } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDatetimePicker],
  templateUrl: './datetime-picker-require-confirmation.html',
})
export default class DatetimePickerRequireConfirmation {}
```

#### datetime-picker-require-confirmation.html
```html
<ix-datetime-picker
  from='2026/10/05'
  time='09:30:00'
  singleSelection
  requireConfirmation
></ix-datetime-picker>
```

### Vue Examples

#### datetime-picker-require-confirmation.vue
```vue
<script setup lang="ts">
import { IxDatetimePicker } from '@siemens/ix-vue';
</script>

<template>
  <IxDatetimePicker
    from="2026/10/05"
    time="09:30:00"
    single-selection
    require-confirmation
  ></IxDatetimePicker>
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

Figma main component ID: `70466:78415` (node ID of the matching main component in the IX Figma library; use it to map Figma design specs to this component).

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelNextMonthButton | { "ARIA label for the next month icon button.\n\nWill be set as aria-label on the nested HTML button element." } | aria-label-next-month-button | string \| undefined | 'Next month' |
| ariaLabelPreviousMonthButton | { "ARIA label for the previous month icon button.\n\nWill be set as aria-label on the nested HTML button element." } | aria-label-previous-month-button | string \| undefined | 'Previous month' |
| dateFormat | { "Date format string.\n\nSee [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens." } | date-format | string | 'yyyy/LL/dd' |
| from | { "The selected starting date. If the picker is not in range mode, this is the selected date.\n\nFormat has to match the `dateFormat` property." } | from | string \| undefined |  |
| i18nAm | { "Label for the AM button in 12-hour mode." } | i18n-am | string | 'AM' |
| i18nCancel | { "Text of the cancel button shown when `requireConfirmation` is enabled." } | i18n-cancel | string | 'Cancel' |
| i18nConfirm | { "Text of the confirm button shown when `requireConfirmation` is enabled." } | i18n-confirm | string | 'Confirm' |
| i18nDone | { "Text of the date select button." } | i18n-done | string | 'Done' |
| i18nHourColumnHeader | { "Text for the time picker hour column header." } | i18n-hour-column-header | string | 'hr' |
| i18nMillisecondColumnHeader | { "Text for the time picker millisecond column header." } | i18n-millisecond-column-header | string | 'ms' |
| i18nMinuteColumnHeader | { "Text for the time picker minute column header." } | i18n-minute-column-header | string | 'min' |
| i18nPm | { "Label for the PM button in 12-hour mode." } | i18n-pm | string | 'PM' |
| i18nSecondColumnHeader | { "Text for the time picker second column header." } | i18n-second-column-header | string | 'sec' |
| i18nTime | { "Top label of the time picker." } | i18n-time | string | 'Time' |
| locale | { "Locale identifier (e.g. 'en' or 'de').\n\nSee [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens." } | locale | string \| undefined |  |
| maxDate | { "The latest date that can be selected.\n\nIf not set there will be no restriction." } | max-date | string \| undefined |  |
| maxTime | { "Latest selectable time (`timeFormat` tokens). Invalid non-empty values are ignored." } | max-time | string \| undefined |  |
| minDate | { "The earliest date that can be selected.\n\nIf not set there will be no restriction." } | min-date | string \| undefined |  |
| minTime | { "Earliest selectable time (`timeFormat` tokens). Invalid non-empty values are ignored." } | min-time | string \| undefined |  |
| requireConfirmation | { "If true, a selection is only applied after the user confirms it with the\n\nconfirm button, which emits `dateSelect`. The cancel button discards the\n\npending selection.\n\nIf false, the done button emits `dateSelect`. In both modes `dateChange`\n\nand `timeChange` are emitted for every selection." } | require-confirmation | boolean | false |
| showTimeReference | { "Show AM/PM time reference control." } | show-time-reference | boolean | false |
| showWeekNumbers | { "Shows week numbers displayed on the left side of the date picker." } | show-week-numbers | boolean | false |
| singleSelection | { "If true, disables date range selection (from/to)." } | single-selection | boolean | false |
| time | { "Selected time value for the embedded time picker.\n\nFormat has to match the `timeFormat` property." } | time | string \| undefined |  |
| timeFormat | { "Time format string.\n\nSee [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens." } | time-format | string | 'HH:mm:ss' |
| timeReference | { "Time reference (AM or PM)." } | time-reference | "AM" \| "PM" \| undefined |  |
| to | { "The selected end date. If the picker is not in range mode, this property has no impact.\n\nFormat has to match the `dateFormat` property." } | to | string \| undefined |  |
| weekStartIndex | { "The index of the day the week starts on, as a 0-based index into Luxon's\n\n`Info.weekdays()` array. That array is always ordered Monday-first\n\nregardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday.\n\nE.g. weekStartIndex = 6 results in starting the week on Sunday." } | week-start-index | number | 0 |

### Events

| Name | Description | Event | Detail | Notes |
| --- | --- | --- | --- | --- |
| dateCancel | { "Emitted when the pending selection is discarded via the cancel button,\n\nafter `dateChange`/`timeChange` reported the restored selection.\n\nOnly emitted when `requireConfirmation` is enabled." } | dateCancel | void |  |
| dateChange | { "Date change event. Emitted when the date changes in the embedded date picker.\n\nEmitted for every pick, also for a range with only a start date and for\n\na selection that is not confirmed yet (`requireConfirmation`). When a\n\npending selection is discarded, it is emitted with the confirmed date\n\nagain. Use `dateSelect` for the applied selection." } | dateChange | "time" \| DateRange & { isoFrom?: string \| undefined; isoTo?: string \| undefined; } & { time: string; isoTime?: string \| undefined; } \| string |  |
| dateSelect | { "Datetime selection event. Emitted when the selection is applied via the\n\ndone button, or via the confirm button with `requireConfirmation`." } | dateSelect | DateRange & { isoFrom?: string \| undefined; isoTo?: string \| undefined; } & { time: string; isoTime?: string \| undefined; } | Breaking change in v6.0.0: from, to and time are localized, use isoFrom, isoTo and isoTime for ISO 8601 values |
| timeChange | { "Time change event. Emitted when the time changes in the embedded time picker.\n\nEmitted for every pick, also for a selection that is not confirmed yet\n\n(`requireConfirmation`). When a pending selection is discarded, it is\n\nemitted with the confirmed time again, or the default time if none is\n\nconfirmed, which is also emitted on load. Use `dateSelect` for the\n\napplied selection." } | timeChange | string |  |
