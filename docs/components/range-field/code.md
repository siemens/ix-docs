# Range field - Code

> Code examples and API documentation for the ix-range-field

# Range field - Code

## Date range

### React Examples

#### date-range.tsx
```tsx
import { IxDateInput, IxRangeField } from '@siemens/ix-react';

export default () => {
  return (
    <IxRangeField
      type="date-range"
      style={{ width: '32rem' }}
      aria-label="date range"
    >
      <IxDateInput label="Start date"></IxDateInput>
      <IxDateInput label="End date"></IxDateInput>
    </IxRangeField>
  );
};
```

### Angular Examples

#### date-range.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-range-field type="date-range" style="width: 32rem" aria-label="date range">
      <ix-date-input label="Start date"></ix-date-input>
      <ix-date-input label="End date"></ix-date-input>
    </ix-range-field>
  `,
})
export default class DateRange {}
```

### Angular Standalone Examples

#### date-range.ts
```ts
import { Component } from '@angular/core';
import { IxDateInput, IxRangeField } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxRangeField, IxDateInput],
  template: `
    <ix-range-field type="date-range" style="width: 32rem" aria-label="date range">
      <ix-date-input label="Start date"></ix-date-input>
      <ix-date-input label="End date"></ix-date-input>
    </ix-range-field>
  `,
})
export default class DateRange {}
```

### Vue Examples

#### date-range.vue
```vue
<script setup lang="ts">
import { IxDateInput, IxRangeField } from '@siemens/ix-vue';
</script>

<template>
  <IxRangeField type="date-range" style="width: 32rem" aria-label="date range">
    <IxDateInput label="Start date"></IxDateInput>
    <IxDateInput label="End date"></IxDateInput>
  </IxRangeField>
</template>
```

## Time range

### React Examples

#### time-range.tsx
```tsx
import { IxRangeField, IxTimeInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxRangeField
      type="time-range"
      style={{ width: '32rem' }}
      aria-label="Time range"
    >
      <IxTimeInput label="Start time"></IxTimeInput>
      <IxTimeInput label="End time"></IxTimeInput>
    </IxRangeField>
  );
};
```

### Angular Examples

#### time-range.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-range-field type="time-range" style="width: 32rem" aria-label="Time range">
      <ix-time-input label="Start time"></ix-time-input>
      <ix-time-input label="End time"></ix-time-input>
    </ix-range-field>
  `,
})
export default class TimeRange {}
```

### Angular Standalone Examples

#### time-range.ts
```ts
import { Component } from '@angular/core';
import { IxRangeField, IxTimeInput } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxRangeField, IxTimeInput],
  template: `
    <ix-range-field type="time-range" style="width: 32rem" aria-label="Time range">
      <ix-time-input label="Start time"></ix-time-input>
      <ix-time-input label="End time"></ix-time-input>
    </ix-range-field>
  `,
})
export default class TimeRange {}
```

### Vue Examples

#### time-range.vue
```vue
<script setup lang="ts">
import { IxRangeField, IxTimeInput } from '@siemens/ix-vue';
</script>

<template>
  <IxRangeField type="time-range" style="width: 32rem" aria-label="Time range">
    <IxTimeInput label="Start time"></IxTimeInput>
    <IxTimeInput label="End time"></IxTimeInput>
  </IxRangeField>
</template>
```

## Date time range

### React Examples

#### datetime-range.tsx
```tsx
import { IxDatetimeInput, IxRangeField } from '@siemens/ix-react';

export default () => {
  return (
    <IxRangeField
      type="datetime-range"
      style={{ width: '32rem' }}
      aria-label="Datetime range"
    >
      <IxDatetimeInput label="Start date and time"></IxDatetimeInput>
      <IxDatetimeInput label="End date and time"></IxDatetimeInput>
    </IxRangeField>
  );
};
```

### Angular Examples

#### datetime-range.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-range-field type="datetime-range" style="width: 32rem" aria-label="Datetime range">
      <ix-datetime-input label="Start date and time"></ix-datetime-input>
      <ix-datetime-input label="End date and time"></ix-datetime-input>
    </ix-range-field>
  `,
})
export default class DatetimeRange {}
```

### Angular Standalone Examples

#### datetime-range.ts
```ts
import { Component } from '@angular/core';
import { IxDatetimeInput, IxRangeField } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxRangeField, IxDatetimeInput],
  template: `
    <ix-range-field type="datetime-range" style="width: 32rem" aria-label="Datetime range">
      <ix-datetime-input label="Start date and time"></ix-datetime-input>
      <ix-datetime-input label="End date and time"></ix-datetime-input>
    </ix-range-field>
  `,
})
export default class DatetimeRange {}
```

### Vue Examples

#### datetime-range.vue
```vue
<script setup lang="ts">
import { IxDatetimeInput, IxRangeField } from '@siemens/ix-vue';
</script>

<template>
  <IxRangeField
    type="datetime-range"
    style="width: 32rem"
    aria-label="Datetime range"
  >
    <IxDatetimeInput label="Start date and time"></IxDatetimeInput>
    <IxDatetimeInput label="End date and time"></IxDatetimeInput>
  </IxRangeField>
</template>
```

## API for ix-range-field

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| hideArrow | { "Hides the arrow icon between the two input fields. This can be used when the input range is used in a context where the arrow icon is not desired, such as in a form field with a custom label." } | hide-arrow | boolean | false |
| type | { "The type of the input range. If set to \"time-range\", the input range will be displayed as a time range." } | type | "date-range" \| "datetime-range" \| "time-range" \| undefined |  |
