# Time picker - Code

> Code examples and API documentation for the ix-time-picker

# Time picker - Code

## Basic

### React Examples

#### timepicker.tsx
```tsx
import { IxTimePicker } from '@siemens/ix-react';

export default () => {
  return <IxTimePicker minTime="13:00:00" maxTime="17:30:00" time="12:45:00" />;
};
```

### Angular Examples

#### timepicker.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './timepicker.html',
})
export default class Timepicker {}
```

#### timepicker.html
```html
<ix-time-picker></ix-time-picker>
```

### Angular Standalone Examples

#### timepicker.ts
```ts
import { Component } from '@angular/core';
import { IxTimePicker } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTimePicker],
  templateUrl: './timepicker.html',
})
export default class Timepicker {}
```

#### timepicker.html
```html
<ix-time-picker></ix-time-picker>
```

### Vue Examples

#### timepicker.vue
```vue
<script setup lang="ts">
import { IxTimePicker } from '@siemens/ix-vue';
</script>

<template>
  <IxTimePicker />
</template>
```

## Adjusted to Format

### React Examples

#### timepicker-format-adjusted.tsx
```tsx
import { IxTimePicker } from '@siemens/ix-react';

export default () => {
  return <IxTimePicker format="hh:mm:ss.SSS" time="01:01:01.100" />;
};
```

### Angular Examples

#### timepicker-format-adjusted.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './timepicker-format-adjusted.html',
})
export default class TimepickerFormatAdjusted {}
```

#### timepicker-format-adjusted.html
```html
<ix-time-picker format="hh:mm:ss.SSS" time="01:01:01.100"></ix-time-picker>
```

### Angular Standalone Examples

#### timepicker-format-adjusted.ts
```ts
import { Component } from '@angular/core';
import { IxTimePicker } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTimePicker],
  templateUrl: './timepicker-format-adjusted.html',
})
export default class TimepickerFormatAdjusted {}
```

#### timepicker-format-adjusted.html
```html
<ix-time-picker format="hh:mm:ss.SSS" time="01:01:01.100"></ix-time-picker>
```

### Vue Examples

#### timepicker-format-adjusted.vue
```vue
<script setup lang="ts">
import { IxTimePicker } from '@siemens/ix-vue';
</script>

<template>
  <IxTimePicker format="hh:mm:ss.SSS" time="01:01:01.100" />
</template>
```

## Custom intervals

### React Examples

#### timepicker-intervals.tsx
```tsx
import { IxTimePicker } from '@siemens/ix-react';

export default () => {
  return (
    <IxTimePicker
      time="01:15:10 AM"
      format="hh:mm:ss a"
      hourInterval={2}
      minuteInterval={15}
      secondInterval={10}
    />
  );
};
```

### Angular Examples

#### timepicker-intervals.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './timepicker-intervals.html',
})
export default class TimepickerIntervals {}
```

#### timepicker-intervals.html
```html
<ix-time-picker
  format="hh:mm:ss a"
  time="01:15:10 AM"
  hourInterval="2"
  minuteInterval="15"
  secondInterval="10"
></ix-time-picker>
```

### Angular Standalone Examples

#### timepicker-intervals.ts
```ts
import { Component } from '@angular/core';
import { IxTimePicker } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTimePicker],
  templateUrl: './timepicker-intervals.html',
})
export default class TimepickerIntervals {}
```

#### timepicker-intervals.html
```html
<ix-time-picker
  format="hh:mm:ss a"
  time="01:15:10 AM"
  hourInterval="2"
  minuteInterval="15"
  secondInterval="10"
></ix-time-picker>
```

### Vue Examples

#### timepicker-intervals.vue
```vue
<script setup lang="ts">
import { IxTimePicker } from '@siemens/ix-vue';
</script>

<template>
  <IxTimePicker
    format="hh:mm:ss a"
    time="01:15:10 AM"
    :hour-interval="2"
    :minute-interval="15"
    :second-interval="10"
  />
</template>
```

## API for ix-time-picker

### Properties

| Name | Description | Attribute | Type | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| corners | { "Corner style." } | corners | "left" \| "right" \| "rounded" \| "straight" | 'rounded' |  |
| embedded | { "Embedded style (for use in other components)." } | embedded | boolean | false |  |
| format | { "Format of time string.\n\nSee [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens.\n\nNote: Formats that combine date and time (like f or F) are not supported. Timestamp tokens x and X are not supported either." } | format | string | 'TT' |  |
| hideHeader | { "Hides the header of the picker." } | hide-header | boolean | false |  |
| hourInterval | { "Interval for hour selection." } | hour-interval | number | 1 |  |
| i18nAm | { "Label for the AM button in 12-hour mode.\n\nIf not set, falls back to the first value of `Info.meridiems()` from Luxon." } | i18n-am | string \| undefined |  |  |
| i18nCancel | { "Text of the cancel button." } | i18n-cancel | string | 'Cancel' |  |
| i18nConfirm | { "Text of the time confirm button." } | i18n-confirm | string | 'Confirm' | Breaking change in v6.0.0: Replaces the removed i18nConfirmTime property |
| i18nHeader | { "Text for the top header." } | i18n-header | string | 'Time' |  |
| i18nHourColumnHeader | { "Text for the hour column header." } | i18n-hour-column-header | string | 'hr' |  |
| i18nMillisecondColumnHeader | { "Text for the millisecond column header." } | i18n-millisecond-column-header | string | 'ms' |  |
| i18nMinuteColumnHeader | { "Text for the minute column header." } | i18n-minute-column-header | string | 'min' |  |
| i18nPm | { "Label for the PM button in 12-hour mode.\n\nIf not set, falls back to the second value of `Info.meridiems()` from Luxon." } | i18n-pm | string \| undefined |  |  |
| i18nSecondColumnHeader | { "Text for the second column header." } | i18n-second-column-header | string | 'sec' |  |
| locale | { "Locale identifier (e.g. 'en' or 'de'). Passed to Luxon for locale-aware parsing and formatting." } | locale | string \| undefined |  |  |
| maxTime | { "Latest selectable time (`format` tokens). Invalid non-empty values are ignored." } | max-time | string \| undefined |  |  |
| millisecondInterval | { "Interval for millisecond selection." } | millisecond-interval | number | 100 |  |
| minTime | { "Earliest selectable time (`format` tokens). Invalid non-empty values are ignored." } | min-time | string \| undefined |  |  |
| minuteInterval | { "Interval for minute selection." } | minute-interval | number | 1 |  |
| secondInterval | { "Interval for second selection." } | second-interval | number | 1 |  |
| time | { "Selected time value.\n\nFormat has to match the `format` property." } | time | string \| undefined |  |  |

### Methods

#### getCurrentIsoTime

```ts
getCurrentIsoTime(): Promise&lt;string | undefined&gt;;
```

{ "Get the current confirmed time in ISO format" }

#### getCurrentTime

```ts
getCurrentTime(): Promise&lt;string | undefined&gt;;
```

{ "Get the current confirmed time based on the wanted format" }

### Events

| Name | Description | Event | Detail | Notes |
| --- | --- | --- | --- | --- |
| timeCancel | { "Emitted when the pending selection is discarded via the cancel button,\n\nafter `timeChange` reported the restored time." } | timeCancel | void |  |
| timeChange | { "Time change event. Emitted for every change made, also for a time that is\n\nnot confirmed yet. When a pending time is discarded, it is emitted with\n\nthe confirmed time again, or the default time if none is confirmed, which\n\nis also emitted on load. Use `timeSelect` for the applied time." } | timeChange | string | Breaking change in v6.0.0: Emitted for every pick, the applied time is emitted with timeSelect |
| timeSelect | { "Time event. Emitted only when the user confirms the selected time.\n\nUse it for the applied time." } | timeSelect | string |  |
