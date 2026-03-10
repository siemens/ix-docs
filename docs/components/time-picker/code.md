# Time picker - Code

> Code examples and API documentation for the ix-time-picker

# Time picker - Code

## Basic

### React Examples

#### timepicker.tsx
```tsx
import { IxTimePicker } from '@siemens/ix-react';

export default () => {
  return <IxTimePicker />;
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
  hour-interval="2"
  minute-interval="15"
  second-interval="10"
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
  hour-interval="2"
  minute-interval="15"
  second-interval="10"
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
    :hourInterval="2"
    :minuteInterval="15"
    :secondInterval="10"
  />
</template>
```

## API for ix-time-picker

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| corners | Corner style | corners | "left" \| "right" \| "rounded" \| "straight" | 'rounded' |
| embedded | Embedded style (for use in other components) | embedded | boolean | false |
| format | Format of time string See [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens. Note: Formats that combine date and time (like f or F) are not supported. Timestamp tokens x and X are not supported either. | format | string | 'TT' |
| hideHeader | Hides the header of the picker. | hide-header | boolean | false |
| hourInterval | Interval for hour selection | hour-interval | number | HOUR_INTERVAL_DEFAULT |
| i18nConfirmTime | Text of the time confirm button | i18n-confirm-time | string | CONFIRM_BUTTON_DEFAULT |
| i18nHeader | Text for top header | i18n-header | string | HEADER_DEFAULT |
| i18nHourColumnHeader | Text for hour column header | i18n-column-header | string | 'hr' |
| i18nMillisecondColumnHeader | Text for millisecond column header | i18n-millisecond-column-header | string | 'ms' |
| i18nMinuteColumnHeader | Text for minute column header | i18n-minute-column-header | string | 'min' |
| i18nSecondColumnHeader | Text for second column header | i18n-second-column-header | string | 'sec' |
| millisecondInterval | Interval for millisecond selection | millisecond-interval | number | MILLISECOND_INTERVAL_DEFAULT |
| minuteInterval | Interval for minute selection | minute-interval | number | MINUTE_INTERVAL_DEFAULT |
| secondInterval | Interval for second selection | second-interval | number | SECOND_INTERVAL_DEFAULT |
| time | Select time with format string Format has to match the \`format\` property. | time | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| timeChange | Time change event | timeChange | string |
| timeSelect | Time event | timeSelect | string |
