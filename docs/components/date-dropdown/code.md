# Date dropdown - Code

> Code examples and API documentation for the ix-date-dropdown

# Date dropdown - Code

## Basic

### React Examples

#### date-dropdown.tsx
```tsx
import { IxDateDropdown } from '@siemens/ix-react';

export default () => {
  return <IxDateDropdown />;
};
```

### Angular Examples

#### date-dropdown.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-dropdown.html',
})
export default class DateDropdown {}
```

#### date-dropdown.html
```html
<ix-date-dropdown></ix-date-dropdown>
```

### Angular Standalone Examples

#### date-dropdown.ts
```ts
import { Component } from '@angular/core';
import { IxDateDropdown } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDateDropdown],
  templateUrl: './date-dropdown.html',
})
export default class DateDropdown {}
```

#### date-dropdown.html
```html
<ix-date-dropdown></ix-date-dropdown>
```

### Vue Examples

#### date-dropdown.vue
```vue
<script setup lang="ts">
import { IxDateDropdown } from '@siemens/ix-vue';
</script>

<template>
  <IxDateDropdown />
</template>
```

## With presets

### React Examples

#### date-dropdown-presets.tsx
```tsx
import { DateDropdownOption } from '@siemens/ix';
import { IxDateDropdown } from '@siemens/ix-react';

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
}

function getDateDaysAgo(numberOfDays: number) {
  const date = new Date();
  date.setDate(date.getDate() - numberOfDays);

  return formatDate(date);
}

const today = formatDate(new Date());

const dateRangeOptions: DateDropdownOption[] = [
  { id: 'today', label: 'Today', from: today, to: today },
  {
    id: 'last-7',
    label: 'Last 7 days',
    from: getDateDaysAgo(6),
    to: today,
  },
  {
    id: 'last-30',
    label: 'Last 30 days',
    from: getDateDaysAgo(29),
    to: today,
  },
  {
    id: 'last-90',
    label: 'Last 90 days',
    from: getDateDaysAgo(89),
    to: today,
  },
  {
    id: 'last-365',
    label: 'Last 365 days',
    from: getDateDaysAgo(364),
    to: today,
  },
];

export default () => {
  return (
    <IxDateDropdown
      dateRangeOptions={dateRangeOptions}
      dateRangeId="last-7"
      format="yyyy/LL/dd"
    />
  );
};
```

### Angular Examples

#### date-dropdown-presets.ts
```ts
import { Component } from '@angular/core';
import { DateDropdownOption } from '@siemens/ix';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-dropdown-presets.html',
})
export default class DateDropdownPresets {
  dateRangeOptions: DateDropdownOption[] = this.buildOptions();

  private buildOptions(): DateDropdownOption[] {
    const today = this.formatDate(new Date());

    return [
      { id: 'today', label: 'Today', from: today, to: today },
      {
        id: 'last-7',
        label: 'Last 7 days',
        from: this.getDateDaysAgo(6),
        to: today,
      },
      {
        id: 'last-30',
        label: 'Last 30 days',
        from: this.getDateDaysAgo(29),
        to: today,
      },
      {
        id: 'last-90',
        label: 'Last 90 days',
        from: this.getDateDaysAgo(89),
        to: today,
      },
      {
        id: 'last-365',
        label: 'Last 365 days',
        from: this.getDateDaysAgo(364),
        to: today,
      },
    ];
  }

  private formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
  }

  private getDateDaysAgo(numberOfDays: number) {
    const date = new Date();
    date.setDate(date.getDate() - numberOfDays);

    return this.formatDate(date);
  }
}
```

#### date-dropdown-presets.html
```html
<ix-date-dropdown
  [dateRangeOptions]="dateRangeOptions"
  date-range-id="last-7"
  format="yyyy/LL/dd"
></ix-date-dropdown>
```

### Angular Standalone Examples

#### date-dropdown-presets.ts
```ts
import { Component } from '@angular/core';
import { IxDateDropdown } from '@siemens/ix-angular/standalone';

import { DateDropdownOption } from '@siemens/ix';

@Component({
  selector: 'app-example',
  imports: [IxDateDropdown],
  templateUrl: './date-dropdown-presets.html',
})
export default class DateDropdownPresets {
  dateRangeOptions: DateDropdownOption[] = this.buildOptions();

  private buildOptions(): DateDropdownOption[] {
    const today = this.formatDate(new Date());

    return [
      { id: 'today', label: 'Today', from: today, to: today },
      {
        id: 'last-7',
        label: 'Last 7 days',
        from: this.getDateDaysAgo(6),
        to: today,
      },
      {
        id: 'last-30',
        label: 'Last 30 days',
        from: this.getDateDaysAgo(29),
        to: today,
      },
      {
        id: 'last-90',
        label: 'Last 90 days',
        from: this.getDateDaysAgo(89),
        to: today,
      },
      {
        id: 'last-365',
        label: 'Last 365 days',
        from: this.getDateDaysAgo(364),
        to: today,
      },
    ];
  }

  private formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
  }

  private getDateDaysAgo(numberOfDays: number) {
    const date = new Date();
    date.setDate(date.getDate() - numberOfDays);

    return this.formatDate(date);
  }
}
```

#### date-dropdown-presets.html
```html
<ix-date-dropdown
  [dateRangeOptions]="dateRangeOptions"
  dateRangeId="last-7"
  format="yyyy/LL/dd"
></ix-date-dropdown>
```

### Vue Examples

#### date-dropdown-presets.vue
```vue
<script setup lang="ts">
import { IxDateDropdown } from '@siemens/ix-vue';

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
}

function getDateDaysAgo(numberOfDays: number) {
  const date = new Date();
  date.setDate(date.getDate() - numberOfDays);

  return formatDate(date);
}

const today = formatDate(new Date());

const dateRangeOptions = [
  { id: 'today', label: 'Today', from: today, to: today },
  {
    id: 'last-7',
    label: 'Last 7 days',
    from: getDateDaysAgo(6),
    to: today,
  },
  {
    id: 'last-30',
    label: 'Last 30 days',
    from: getDateDaysAgo(29),
    to: today,
  },
  {
    id: 'last-90',
    label: 'Last 90 days',
    from: getDateDaysAgo(89),
    to: today,
  },
  {
    id: 'last-365',
    label: 'Last 365 days',
    from: getDateDaysAgo(364),
    to: today,
  },
];
</script>

<template>
  <IxDateDropdown
    :dateRangeOptions="dateRangeOptions"
    date-range-id="last-7"
    format="yyyy/LL/dd"
  />
</template>
```

## API for ix-date-dropdown

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| dateRangeId | { "Used to set the initial select date range as well as the button name,\n\nif not set or no according date range label is found, nothing will be selected" } | date-range-id | string | 'custom' |
| dateRangeOptions | { "An array of predefined date range options for the date picker.\n\nEach option is an object with a label describing the range and a function\n\nthat returns the start and end dates of the range as a DateRangeOption object.\n\nExample format:\n\n {\n\n id: 'some unique id',\n\n label: 'Name of the range',\n\n from: undefined, to: '2023/03/29'\n\n },\n\n // ... other predefined date range options ..." } |  | DateDropdownOption[] | [] |
| disabled | { "Disable the button that opens the dropdown containing the date picker." } | disabled | boolean | false |
| enableTopLayer | { "Enable Popover API rendering for dropdown." } | enable-top-layer | boolean | false |
| format | { "Date format string.\n\nSee [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens." } | format | string | 'yyyy/LL/dd' |
| from | { "Picker date. If the picker is in range mode this property is the start date.\n\nIf set to `null` no default start date will be pre-selected.\n\nFormat is based on `format`" } | from | string | '' |
| i18nDone | { "Text for the done button. Will be used for translation." } | i18n-done | string | 'Done' |
| i18nNoRange | { "Text for the done button. Will be used for translation." } | i18n-no-range | string | 'No range set' |
| loading | { "Loading button" } | loading | boolean | false |
| locale | { "Locale identifier (e.g. 'en' or 'de')." } | locale | string \| undefined |  |
| maxDate | { "The latest date that can be selected by the date picker.\n\nIf not set there will be no restriction." } | max-date | string | '' |
| minDate | { "The earliest date that can be selected by the date picker.\n\nIf not set there will be no restriction." } | min-date | string | '' |
| showWeekNumbers | { "Shows week numbers displayed on the left side of the date picker" } | show-week-numbers | boolean | false |
| singleSelection | { "If true disables date range selection (from/to)." } | single-selection | boolean | false |
| to | { "Picker date. If the picker is in range mode this property is the end date.\n\nIf the picker is not in range mode leave this value `null`\n\nFormat is based on `format`" } | to | string | '' |
| variant | { "Button variant" } | variant | "danger-primary" \| "danger-secondary" \| "danger-tertiary" \| "primary" \| "secondary" \| "subtle-primary" \| "subtle-secondary" \| "subtle-tertiary" \| "tertiary" | 'primary' |
| weekStartIndex | { "The index of which day to start the week on, based on the Locale#weekdays array.\n\nE.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday." } | week-start-index | number | 0 |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| dateRangeChange | { "EventEmitter for date range change events.\n\nThis event is emitted when the date range changes within the component.\n\nThe event payload contains information about the selected date range." } | dateRangeChange | { id: string; from?: string \| undefined; to?: string \| undefined; } |
