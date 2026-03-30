# Date picker - Code

> Code examples and API documentation for the ix-date-picker

# Date picker - Code

## Basic

### React Examples

#### datepicker-range.tsx
```tsx
import { IxDatePicker } from '@siemens/ix-react';

export default () => {
  return <IxDatePicker from="2022/12/15" to="2022/12/24" />;
};
```

### Angular Examples

#### datepicker-range.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-date-picker [from]="fromDate" [to]="toDate"></ix-date-picker>
  `,
})
export default class DatepickerRange {
  fromDate = '2022/12/15';
  toDate = '2022/12/24';
}
```

### Angular Standalone Examples

#### datepicker-range.ts
```ts
import { Component } from '@angular/core';
import { IxDatePicker } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDatePicker],
  template: `
    <ix-date-picker [from]="fromDate" [to]="toDate"></ix-date-picker>
  `,
})
export default class DatepickerRange {
  fromDate = '2022/12/15';
  toDate = '2022/12/24';
}
```

### Vue Examples

#### datepicker-range.vue
```vue
<script setup lang="ts">
import { IxDatePicker } from '@siemens/ix-vue';
</script>

<template>
  <IxDatePicker from="2022/12/15" to="2022/12/24" />
</template>
```

## Single Selection

### React Examples

#### datepicker.tsx
```tsx
import { IxDatePicker } from '@siemens/ix-react';

export default () => {
  return <IxDatePicker />;
};
```

### Angular Examples

#### datepicker.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-date-picker range="false"></ix-date-picker> `,
})
export default class Datepicker {}
```

### Angular Standalone Examples

#### datepicker.ts
```ts
import { Component } from '@angular/core';
import { IxDatePicker } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDatePicker],
  template: ` <ix-date-picker range="false"></ix-date-picker> `,
})
export default class Datepicker {}
```

### Vue Examples

#### datepicker.vue
```vue
<script setup lang="ts">
import { IxDatePicker } from '@siemens/ix-vue';
</script>

<template>
  <IxDatePicker :range="false" />
</template>
```

## Translation

The `ix-date-picker` can be configured using [BCP 47](https://tools.ietf.org/html/rfc5646) locale strings specifying the language to use generating or interpreting strings. More information can be found [here](https://moment.github.io/luxon/#/intl?id=default-locale)

### React Examples

#### datepicker-locale.tsx
```tsx
import { IxDatePicker, IxSelect, IxSelectItem } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [locale, setLocale] = useState<'de' | 'en' | (string & {})>('de');

  return (
    <>
      <span style={{ marginRight: '1rem' }}>Language:</span>
      <IxSelect
        value={locale}
        onValueChange={({ detail }) => {
          if (!Array.isArray(detail)) {
            setLocale(detail);
          }
        }}
        style={{
          margin: '1rem 0',
        }}
      >
        <IxSelectItem label="de" value={'de'}></IxSelectItem>
        <IxSelectItem label="en" value={'en'}></IxSelectItem>
      </IxSelect>
      <IxDatePicker locale={locale} />
    </>
  );
};
```

### Angular Examples

#### datepicker-locale.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './datepicker-locale.html',
})
export default class DatepickerLocale {
  locale: 'de' | 'en' | (string & {}) = 'de';

  setLocale(event: Event) {
    const { detail } = event as CustomEvent<string>;

    this.locale = detail;
  }
}
```

#### datepicker-locale.html
```html
<span style="margin-right: 1rem">Language:</span>
<ix-select
  style="margin: 1rem 0"
  [value]="locale"
  (valueChange)="setLocale($event)"
>
  <ix-select-item value="de" label="de"></ix-select-item>
  <ix-select-item value="en" label="en"></ix-select-item>
</ix-select>
<ix-date-picker range="false" [locale]="locale"></ix-date-picker>
```

### Angular Standalone Examples

#### datepicker-locale.ts
```ts
import { Component } from '@angular/core';
import {
  IxSelect,
  IxSelectItem,
  IxDatePicker,
  IxSelectValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

type Locale = 'de' | 'en';

@Component({
  selector: 'app-example',
  imports: [
    IxSelect,
    IxSelectItem,
    IxDatePicker,
    IxSelectValueAccessorDirective,
  ],
  templateUrl: './datepicker-locale.html',
})
export default class DatepickerLocale {
  locale: Locale = 'de';

  setLocale(event: Event) {
    const { detail } = event as CustomEvent<string>;

    this.locale = detail as Locale;
  }
}
```

#### datepicker-locale.html
```html
<span style="margin-right: 1rem">Language:</span>
<ix-select
  style="margin: 1rem 0"
  [value]="locale"
  (valueChange)="setLocale($event)"
>
  <ix-select-item value="de" label="de"></ix-select-item>
  <ix-select-item value="en" label="en"></ix-select-item>
</ix-select>
<ix-date-picker range="false" [locale]="locale"></ix-date-picker>
```

### Vue Examples

#### datepicker-locale.vue
```vue
<script setup lang="ts">
import { IxDatePicker, IxSelect, IxSelectItem } from '@siemens/ix-vue';
</script>

<script lang="ts">
export default {
  data() {
    return {
      locale: 'de',
    };
  },
  methods: {
    setLocale({ detail: newLocale }: CustomEvent<string | string[]>) {
      if (Array.isArray(newLocale)) {
        return;
      }

      this.locale = newLocale;
    },
  },
};
</script>

<template>
  <span style="margin-right: 1rem">Language:</span>
  <IxSelect :value="locale" @valueChange="setLocale" style="margin: 1rem 0">
    <IxSelectItem label="de" value="de"></IxSelectItem>
    <IxSelectItem label="en" value="en"></IxSelectItem>
  </IxSelect>
  <IxDatePicker v-bind:locale="locale" />
</template>
```

## API for ix-date-picker

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelNextMonthButton | ARIA label for the next month icon button. Will be set as aria-label on the nested HTML button element. | aria-label-next-month-button | string \| undefined | 'Next month' |
| ariaLabelPreviousMonthButton | ARIA label for the previous month icon button. Will be set as aria-label on the nested HTML button element. | aria-label-previous-month-button | string \| undefined | 'Previous month' |
| corners | Corner style. | corners | "left" \| "right" \| "rounded" \| "straight" | 'rounded' |
| enableTopLayer | Enable Popover API rendering for dropdown. | enable-top-layer | boolean | false |
| format | Date format string. See [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens. | format | string | 'yyyy/LL/dd' |
| from | The selected starting date. If the date picker is not in range mode, this is the selected date. Format has to match the \`format\` property. | from | string \| undefined |  |
| i18nDone | Text of the date select button. | i18n-done | string | 'Done' |
| locale | Locale identifier (e.g. 'en' or 'de'). The locale is used to translate the labels for weekdays and months. It also determines the default order of weekdays based on the locale's conventions. When the locale changes, the weekday labels are rotated according to the \`weekStartIndex\`. It does not affect the values returned by methods and events. | locale | string \| undefined |  |
| maxDate | The latest date that can be selected by the date picker. If not set there will be no restriction. | max-date | string | '' |
| minDate | The earliest date that can be selected by the date picker. If not set there will be no restriction. | min-date | string | '' |
| showWeekNumbers | Shows week numbers displayed on the left side of the date picker. | show-week-numbers | boolean | false |
| singleSelection | If true, disables date range selection (from/to). | single-selection | boolean | false |
| to | The selected end date. If the date picker is not in range mode, this property has no impact. Format has to match the \`format\` property. | to | string \| undefined |  |
| weekStartIndex | The index of which day to start the week on, based on the Locale#weekdays array. E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on Monday. | week-start-index | number | 0 |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| dateChange | Emitted when the date selection changes. The \`DateChangeEvent\` contains \`from\` and \`to\` properties. The property strings are formatted according to the \`format\` property and not affected by the \`locale\` property. The locale applied is always \`en-US\`. Note: Since 2.0.0 \`dateChange\` does not dispatch detail property as \`string\` | dateChange | { from?: string \| undefined; to?: string \| undefined; } |
| dateRangeChange | Date range change event. Emitted when the date range selection changes and the component is in range mode. The \`DateChangeEvent\` contains \`from\` and \`to\` properties. The property strings are formatted according to the \`format\` property and not affected by the \`locale\` property. The locale applied is always \`en-US\`. | dateRangeChange | { from?: string \| undefined; to?: string \| undefined; } |
| dateSelect | Date selection event. Emitted when the selection is confirmed via the date select button. The \`DateChangeEvent\` contains \`from\` and \`to\` properties. The property strings are formatted according to the \`format\` property and not affected by the \`locale\` property. The locale applied is always \`en-US\`. | dateSelect | { from?: string \| undefined; to?: string \| undefined; } |
