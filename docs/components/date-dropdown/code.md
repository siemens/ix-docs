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

## With user defined range options

### React Examples

#### date-dropdown-user-range.tsx
```tsx
import { DateDropdownOption } from '@siemens/ix';
import { IxDateDropdown } from '@siemens/ix-react';

const today = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const lastSevenDays = new Date(
  new Date().getTime() - 7 * 24 * 60 * 60 * 1000
).toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const dateRangeOptions: DateDropdownOption[] = [
  {
    id: 'last-7',
    label: 'Last 7 days',
    from: lastSevenDays,
    to: today,
  },
  {
    id: 'today',
    label: 'Today',
    from: today,
    to: today,
  },
];

export default () => {
  return (
    <IxDateDropdown
      dateRangeOptions={dateRangeOptions}
      date-range-id="last-7"
      format="LL/dd/yyyy"
    />
  );
};
```

### Angular Examples

#### date-dropdown-user-range.ts
```ts
import { Component } from '@angular/core';
import { DateDropdownOption } from '@siemens/ix';

const today = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const lastSevenDays = new Date(
  new Date().getTime() - 7 * 24 * 60 * 60 * 1000
).toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-dropdown-user-range.html',
})
export default class DateDropdownUserRange {
  dateDropdownOptions: DateDropdownOption[] = [
    {
      id: 'last-7',
      label: 'Last 7 days',
      from: lastSevenDays,
      to: today,
    },
    {
      id: 'today',
      label: 'Today',
      from: today,
      to: today,
    },
  ];
}
```

#### date-dropdown-user-range.html
```html
<ix-date-dropdown
  [dateRangeOptions]="dateDropdownOptions"
  date-range-id="last-7"
  format="LL/dd/yyyy"
></ix-date-dropdown>
```

### Angular Standalone Examples

#### date-dropdown-user-range.ts
```ts
import { Component } from '@angular/core';
import { IxDateDropdown } from '@siemens/ix-angular/standalone';

import { DateDropdownOption } from '@siemens/ix';

const today = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const lastSevenDays = new Date(
  new Date().getTime() - 7 * 24 * 60 * 60 * 1000
).toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

@Component({
  selector: 'app-example',
  imports: [IxDateDropdown],
  templateUrl: './date-dropdown-user-range.html',
})
export default class DateDropdownUserRange {
  dateDropdownOptions: DateDropdownOption[] = [
    {
      id: 'last-7',
      label: 'Last 7 days',
      from: lastSevenDays,
      to: today,
    },
    {
      id: 'today',
      label: 'Today',
      from: today,
      to: today,
    },
  ];
}
```

#### date-dropdown-user-range.html
```html
<ix-date-dropdown
  [dateRangeOptions]="dateDropdownOptions"
  date-range-id="last-7"
  format="LL/dd/yyyy"
></ix-date-dropdown>
```

### Vue Examples

#### date-dropdown-user-range.vue
```vue
<script setup lang="ts">
import { IxDateDropdown } from '@siemens/ix-vue';

const today = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const lastSevenDays = new Date(
  new Date().getTime() - 7 * 24 * 60 * 60 * 1000
).toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const dateDropdownOptions = [
  {
    id: 'last-7',
    label: 'Last 7 days',
    from: lastSevenDays,
    to: today,
  },
  {
    id: 'today',
    label: 'Today',
    from: today,
    to: today,
  },
];
</script>

<template>
  <IxDateDropdown
    :dateRangeOptions="dateDropdownOptions"
    date-range-id="last-7"
    format="LL/dd/yyyy"
  />
</template>
```

## API for ix-date-dropdown

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelDropdownButton | ARIA label for the dropdown Will be set as aria-label on the nested HTML button element that will trigger the dropdown | aria-label-dropdown-button | string \| undefined |  |
| customRangeDisabled | Controls whether custom date range selection is disabled in the component. When set to 'false', the user can select a custom date range using the date picker. When set to 'true', only predefined time date ranges are available for selection. | custom-range-disabled | boolean | false |
| dateRangeId | Used to set the initial select date range as well as the button name, if not set or no according date range label is found, nothing will be selected | date-range-id | string | 'custom' |
| dateRangeOptions | An array of predefined date range options for the date picker. Each option is an object with a label describing the range and a function that returns the start and end dates of the range as a DateRangeOption object. Example format: { id: 'some unique id', label: 'Name of the range', from: undefined, to: '2023/03/29' }, // ... other predefined date range options ... |  | DateDropdownOption[] | [] |
| disabled | Disable the button that opens the dropdown containing the date picker. | disabled | boolean | false |
| enableTopLayer | Enable Popover API rendering for dropdown. | enable-top-layer | boolean | false |
| format | Date format string. See [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens. | format | string | 'yyyy/LL/dd' |
| from | Picker date. If the picker is in range mode this property is the start date. If set to \`null\` no default start date will be pre-selected. Format is based on \`format\` | from | string | '' |
| i18nCustomItem | Text for custom dropdown item. Will be used for translation. | i18n-custom-item | string | 'Custom...' |
| i18nDone | Text for the done button. Will be used for translation. | i18n-done | string | 'Done' |
| i18nNoRange | Text for the done button. Will be used for translation. | i18n-no-range | string | 'No range set' |
| loading | Loading button | loading | boolean | false |
| locale | Locale identifier (e.g. 'en' or 'de'). | locale | string \| undefined |  |
| maxDate | The latest date that can be selected by the date picker. If not set there will be no restriction. | max-date | string | '' |
| minDate | The earliest date that can be selected by the date picker. If not set there will be no restriction. | min-date | string | '' |
| showWeekNumbers | Shows week numbers displayed on the left side of the date picker | show-week-numbers | boolean | false |
| singleSelection | If true disables date range selection (from/to). | single-selection | boolean | false |
| to | Picker date. If the picker is in range mode this property is the end date. If the picker is not in range mode leave this value \`null\` Format is based on \`format\` | to | string | '' |
| variant | Button variant | variant | "danger-primary" \| "danger-secondary" \| "danger-tertiary" \| "primary" \| "secondary" \| "subtle-primary" \| "subtle-secondary" \| "subtle-tertiary" \| "tertiary" | 'primary' |
| weekStartIndex | The index of which day to start the week on, based on the Locale#weekdays array. E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday. | week-start-index | number | 0 |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| dateRangeChange | EventEmitter for date range change events. This event is emitted when the date range changes within the component. The event payload contains information about the selected date range. | dateRangeChange | { id: string; from?: string \| undefined; to?: string \| undefined; } |
