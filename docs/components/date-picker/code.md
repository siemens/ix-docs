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

## Require confirmation

By default, date pickers apply every pick immediately.
Set `requireConfirmation` to only apply the selection when users click **Confirm**.
**Cancel** restores the last confirmed value.

:::info
Date pickers emit `dateChange` for every pick and `dateSelect` only when the selection should be applied: with **Done** or **Confirm**, or on pick in single selection without `requireConfirmation`.
:::

### React Examples

#### date-picker-require-confirmation.tsx
```tsx
import { IxDatePicker } from '@siemens/ix-react';

export default () => {
  return <IxDatePicker from="2026/10/05" to="2026/10/09" requireConfirmation />;
};
```

### Angular Examples

#### date-picker-require-confirmation.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './date-picker-require-confirmation.html',
})
export default class DatePickerRequireConfirmation {}
```

#### date-picker-require-confirmation.html
```html
<ix-date-picker
  from='2026/10/05'
  to='2026/10/09'
  requireConfirmation
></ix-date-picker>
```

### Angular Standalone Examples

#### date-picker-require-confirmation.ts
```ts
import { Component } from '@angular/core';
import { IxDatePicker } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDatePicker],
  templateUrl: './date-picker-require-confirmation.html',
})
export default class DatePickerRequireConfirmation {}
```

#### date-picker-require-confirmation.html
```html
<ix-date-picker
  from='2026/10/05'
  to='2026/10/09'
  requireConfirmation
></ix-date-picker>
```

### Vue Examples

#### date-picker-require-confirmation.vue
```vue
<script setup lang="ts">
import { IxDatePicker } from '@siemens/ix-vue';
</script>

<template>
  <IxDatePicker
    from="2026/10/05"
    to="2026/10/09"
    require-confirmation
  ></IxDatePicker>
</template>
```

## Translation

The `ix-date-picker` can be configured using [BCP 47](https://tools.ietf.org/html/rfc5646) locale strings specifying the language to use generating or interpreting strings. More information can be found [here](https://moment.github.io/luxon/#/intl?id=default-locale)

### React Examples

#### datepicker-locale.tsx
```tsx
import {
  IxCol,
  IxDatePicker,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
} from '@siemens/ix-react';
import type { DateChangeEvent } from '@siemens/ix';
import { useState } from 'react';

const LOCALES = [
  { label: 'de', value: 'de' },
  { label: 'en', value: 'en' },
  { label: 'fr', value: 'fr' },
  { label: 'ja', value: 'ja' },
];

const FORMATS = [
  { label: 'yyyy/LL/dd (default)', value: 'yyyy/LL/dd' },
  { label: 'EEEE, dd MMMM yyyy (all locale names)', value: 'EEEE, dd MMMM yyyy' },
  { label: 'dd MMMM yyyy (month name)', value: 'dd MMMM yyyy' },
  { label: 'dd MMM yyyy (short month)', value: 'dd MMM yyyy' },
  { label: 'LL/dd/yyyy', value: 'LL/dd/yyyy' },
];

type EventLog = {
  from?: string;
  to?: string;
  isoFrom?: string;
  isoTo?: string;
};

const EVENT_ROWS = [
  { key: 'from' as const, note: '(locale-aware)' },
  { key: 'to' as const, note: '(locale-aware)' },
  { key: 'isoFrom' as const, note: '(ISO 8601, stable)' },
  { key: 'isoTo' as const, note: '(ISO 8601, stable)' },
];

export default () => {
  const [locale, setLocale] = useState('de');
  const [format, setFormat] = useState('yyyy/LL/dd');
  const [lastEvent, setLastEvent] = useState<EventLog | null>(null);

  const handleDateChange = (e: CustomEvent<DateChangeEvent>) => {
    const { from, to, isoFrom, isoTo } = e.detail;
    setLastEvent({ from, to, isoFrom, isoTo });
  };

  return (
    <IxLayoutGrid>
      <IxRow>
        <IxCol size="3">
          <span style={{ marginRight: '0.5rem' }}>Language:</span>
          <IxSelect
            value={locale}
            onValueChange={({ detail }) => {
              if (!Array.isArray(detail)) setLocale(detail);
            }}
          >
            {LOCALES.map((l) => (
              <IxSelectItem key={l.value} label={l.label} value={l.value} />
            ))}
          </IxSelect>
        </IxCol>
        <IxCol size="4">
          <span style={{ marginRight: '0.5rem' }}>Format:</span>
          <IxSelect
            value={format}
            onValueChange={({ detail }) => {
              if (!Array.isArray(detail)) setFormat(detail);
            }}
          >
            {FORMATS.map((f) => (
              <IxSelectItem key={f.value} label={f.label} value={f.value} />
            ))}
          </IxSelect>
        </IxCol>
      </IxRow>
      <IxRow>
        <IxCol size="12">
          <div style={{ width: 'fit-content', maxWidth: '100%' }}>
            <IxDatePicker
              locale={locale}
              format={format}
              onDateChange={handleDateChange}
            />
            <div
              style={{
                marginTop: '0.5rem',
                padding: '0.75rem 1rem',
                border: '1px solid var(--si-sys-color-border-4)',
                borderRadius: '4px',
                background: 'var(--si-sys-color-background-1)',
              }}
            >
              <span
                style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}
              >
                Last date-picker event
              </span>
              {lastEvent === null ? (
                <span style={{ color: 'var(--si-sys-color-text-secondary)' }}>
                  Select a date to see event values
                </span>
              ) : (
                <IxLayoutGrid noMargin>
                  {EVENT_ROWS.map(({ key, note }) => (
                    <IxRow key={key}>
                      <IxCol
                        size="2"
                        style={{
                          fontWeight: 600,
                          color: 'var(--si-sys-color-text-primary)',
                        }}
                      >
                        {key}
                      </IxCol>
                      <IxCol
                        style={{
                          fontFamily: 'monospace',
                          color: 'var(--si-sys-color-text-accent)',
                        }}
                      >
                        {lastEvent[key] ?? '—'}
                      </IxCol>
                      <IxCol
                        style={{
                          color: 'var(--si-sys-color-text-secondary)',
                          fontSize: '0.8em',
                        }}
                      >
                        {note}
                      </IxCol>
                    </IxRow>
                  ))}
                </IxLayoutGrid>
              )}
            </div>
          </div>
        </IxCol>
      </IxRow>
    </IxLayoutGrid>
  );
};
```

### Angular Examples

#### datepicker-locale.ts
```ts
import { Component } from '@angular/core';
import type { DateChangeEvent } from '@siemens/ix';

type EventLog = {
  from?: string;
  to?: string;
  isoFrom?: string;
  isoTo?: string;
  [key: string]: string | undefined;
};

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './datepicker-locale.html',
})
export default class DatepickerLocale {
  locales = [
    { label: 'de', value: 'de' },
    { label: 'en', value: 'en' },
    { label: 'fr', value: 'fr' },
    { label: 'ja', value: 'ja' },
  ];

  formats = [
    { label: 'yyyy/LL/dd (default)', value: 'yyyy/LL/dd' },
    { label: 'EEEE, dd MMMM yyyy (all locale names)', value: 'EEEE, dd MMMM yyyy' },
    { label: 'dd MMMM yyyy (month name)', value: 'dd MMMM yyyy' },
    { label: 'dd MMM yyyy (short month)', value: 'dd MMM yyyy' },
    { label: 'LL/dd/yyyy', value: 'LL/dd/yyyy' },
  ];

  locale = 'de';
  format = 'yyyy/LL/dd';
  lastEvent: EventLog | null = null;

  setLocale(event: Event) {
    const { detail } = event as CustomEvent<string>;
    if (!Array.isArray(detail)) {
      this.locale = detail;
    }
  }

  setFormat(event: Event) {
    const { detail } = event as CustomEvent<string>;
    if (!Array.isArray(detail)) {
      this.format = detail;
    }
  }

  onDateChange(event: Event) {
    const { detail } = event as CustomEvent<DateChangeEvent>;
    const { from, to, isoFrom, isoTo } = detail;
    this.lastEvent = { from, to, isoFrom, isoTo };
  }
}
```

#### datepicker-locale.html
```html
<ix-layout-grid>
  <ix-row>
    <ix-col>
      <span style="margin-right: 0.5rem">Language:</span>
      <ix-select [value]="locale" (valueChange)="setLocale($event)">
        <ix-select-item
          *ngFor="let l of locales"
          [value]="l.value"
          [label]="l.label"
        ></ix-select-item>
      </ix-select>
    </ix-col>
    <ix-col>
      <span style="margin-right: 0.5rem">Format:</span>
      <ix-select [value]="format" (valueChange)="setFormat($event)">
        <ix-select-item
          *ngFor="let f of formats"
          [value]="f.value"
          [label]="f.label"
        ></ix-select-item>
      </ix-select>
    </ix-col>
  </ix-row>

  <ix-row>
    <ix-col size="12">
      <ix-date-picker
        [locale]="locale"
        [format]="format"
        (dateChange)="onDateChange($event)"
      ></ix-date-picker>
    </ix-col>
  </ix-row>

  <ix-row>
    <ix-col
      size="12"
      style="
        padding: 0.75rem 1rem;
        border: 1px solid var(--si-sys-color-border-4);
        border-radius: 4px;
        background: var(--si-sys-color-background-1);
      "
    >
      <span style="display: block; font-weight: 700; margin-bottom: 0.5rem">
        Last date-picker event
      </span>
      <ng-container *ngIf="lastEvent === null; else eventValues">
        <span style="color: var(--si-sys-color-text-secondary)">
          Select a date to see event values
        </span>
      </ng-container>
      <ng-template #eventValues>
        <ix-layout-grid no-margin>
          <ix-row
            *ngFor="
              let row of [
                { key: 'from', label: 'from', note: '(locale-aware)' },
                { key: 'to', label: 'to', note: '(locale-aware)' },
                { key: 'isoFrom', label: 'isoFrom', note: '(ISO 8601, stable)' },
                { key: 'isoTo', label: 'isoTo', note: '(ISO 8601, stable)' }
              ]
            "
          >
            <ix-col
              size="2"
              style="font-weight: 600; color: var(--si-sys-color-text-primary)"
            >
              {{ row.label }}
            </ix-col>
            <ix-col style="font-family: monospace; color: var(--si-sys-color-text-accent)">
              {{ lastEvent?.[row.key] ?? '—' }}
            </ix-col>
            <ix-col style="color: var(--si-sys-color-text-secondary); font-size: 0.8em">
              {{ row.note }}
            </ix-col>
          </ix-row>
        </ix-layout-grid>
      </ng-template>
    </ix-col>
  </ix-row>
</ix-layout-grid>
```

### Angular Standalone Examples

#### datepicker-locale.ts
```ts
import { Component } from '@angular/core';
import type { DateChangeEvent } from '@siemens/ix';
import {
  IxCol,
  IxDatePicker,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
  IxSelectValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

type EventLog = {
  from?: string;
  to?: string;
  isoFrom?: string;
  isoTo?: string;
};

type EventLogRow = {
  key: keyof EventLog;
  label: string;
  note: string;
};

const LOCALE_AWARE = '(locale-aware)';
const STABLE_ISO = '(ISO 8601, stable)';

@Component({
  selector: 'app-example',
  imports: [
    IxCol,
    IxDatePicker,
    IxLayoutGrid,
    IxRow,
    IxSelect,
    IxSelectItem,
    IxSelectValueAccessorDirective,
  ],
  templateUrl: './datepicker-locale.html',
})
export default class DatepickerLocale {
  readonly locales = ['de', 'en', 'fr', 'ja'].map((code) => ({
    value: code,
    label: code,
  }));

  readonly formats = [
    { value: 'yyyy/LL/dd', label: 'yyyy/LL/dd (default)' },
    { value: 'EEEE, dd MMMM yyyy', label: 'EEEE, dd MMMM yyyy (all locale names)' },
    { value: 'dd MMMM yyyy', label: 'dd MMMM yyyy (month name)' },
    { value: 'dd MMM yyyy', label: 'dd MMM yyyy (short month)' },
    { value: 'LL/dd/yyyy', label: 'LL/dd/yyyy' },
  ];

  readonly eventRows: EventLogRow[] = [
    { key: 'from', label: 'from', note: LOCALE_AWARE },
    { key: 'to', label: 'to', note: LOCALE_AWARE },
    { key: 'isoFrom', label: 'isoFrom', note: STABLE_ISO },
    { key: 'isoTo', label: 'isoTo', note: STABLE_ISO },
  ];

  locale = this.locales[0].value;
  format = this.formats[0].value;
  lastEvent: EventLog | null = null;

  setLocale(event: Event) {
    this.locale = this.readSelection(event) ?? this.locale;
  }

  setFormat(event: Event) {
    this.format = this.readSelection(event) ?? this.format;
  }

  onDateChange(event: Event) {
    const { from, to, isoFrom, isoTo } = (event as CustomEvent<DateChangeEvent>)
      .detail;

    this.lastEvent = { from, to, isoFrom, isoTo };
  }

  
  private readSelection(event: Event): string | undefined {
    const { detail } = event as CustomEvent<string | string[]>;

    return Array.isArray(detail) ? undefined : detail;
  }
}
```

#### datepicker-locale.html
```html
<ix-layout-grid>
  <ix-row>
    <ix-col>
      <span style="margin-right: 0.5rem">Language:</span>
      <ix-select [value]="locale" (valueChange)="setLocale($event)">
        @for (l of locales; track l.value) {
          <ix-select-item [value]="l.value" [label]="l.label"></ix-select-item>
        }
      </ix-select>
    </ix-col>
    <ix-col>
      <span style="margin-right: 0.5rem">Format:</span>
      <ix-select [value]="format" (valueChange)="setFormat($event)">
        @for (f of formats; track f.value) {
          <ix-select-item [value]="f.value" [label]="f.label"></ix-select-item>
        }
      </ix-select>
    </ix-col>
  </ix-row>

  <ix-row>
    <ix-col size="12">
      <ix-date-picker
        [locale]="locale"
        [format]="format"
        (dateChange)="onDateChange($event)"
      ></ix-date-picker>
    </ix-col>
  </ix-row>

  <ix-row>
    <ix-col
      size="12"
      style="
        padding: 0.75rem 1rem;
        border: 1px solid var(--si-sys-color-border-4);
        border-radius: 4px;
        background: var(--si-sys-color-background-1);
      "
    >
      <span style="display: block; font-weight: 700; margin-bottom: 0.5rem">
        Last date-picker event
      </span>
      @if (lastEvent === null) {
        <span style="color: var(--si-sys-color-text-secondary)">
          Select a date to see event values
        </span>
      } @else {
        <ix-layout-grid no-margin>
          @for (row of eventRows; track row.key) {
            <ix-row>
              <ix-col
                size="2"
                style="font-weight: 600; color: var(--si-sys-color-text-primary)"
              >
                {{ row.label }}
              </ix-col>
              <ix-col style="font-family: monospace; color: var(--si-sys-color-text-accent)">
                {{ lastEvent[row.key] || '—' }}
              </ix-col>
              <ix-col style="color: var(--si-sys-color-text-secondary); font-size: 0.8em">
                {{ row.note }}
              </ix-col>
            </ix-row>
          }
        </ix-layout-grid>
      }
    </ix-col>
  </ix-row>
</ix-layout-grid>
```

### Vue Examples

#### datepicker-locale.vue
```vue
<script setup lang="ts">
import {
  IxCol,
  IxDatePicker,
  IxLayoutGrid,
  IxRow,
  IxSelect,
  IxSelectItem,
} from '@siemens/ix-vue';
import type { DateChangeEvent } from '@siemens/ix';
import { ref } from 'vue';

const locales = [
  { label: 'de', value: 'de' },
  { label: 'en', value: 'en' },
  { label: 'fr', value: 'fr' },
  { label: 'ja', value: 'ja' },
];

const formats = [
  { label: 'yyyy/LL/dd (default)', value: 'yyyy/LL/dd' },
  {
    label: 'EEEE, dd MMMM yyyy (all locale names)',
    value: 'EEEE, dd MMMM yyyy',
  },
  { label: 'dd MMMM yyyy (month name)', value: 'dd MMMM yyyy' },
  { label: 'dd MMM yyyy (short month)', value: 'dd MMM yyyy' },
  { label: 'LL/dd/yyyy', value: 'LL/dd/yyyy' },
];

type EventLog = {
  from?: string;
  to?: string;
  isoFrom?: string;
  isoTo?: string;
  [key: string]: string | undefined;
};

const eventRows = [
  { key: 'from', note: '(locale-aware)' },
  { key: 'to', note: '(locale-aware)' },
  { key: 'isoFrom', note: '(ISO 8601, stable)' },
  { key: 'isoTo', note: '(ISO 8601, stable)' },
];

const locale = ref('de');
const format = ref('yyyy/LL/dd');
const lastEvent = ref<EventLog | null>(null);

function setLocale(event: CustomEvent<string | string[]>) {
  if (!Array.isArray(event.detail)) {
    locale.value = event.detail;
  }
}

function setFormat(event: CustomEvent<string | string[]>) {
  if (!Array.isArray(event.detail)) {
    format.value = event.detail;
  }
}

function onDateChange(event: CustomEvent<DateChangeEvent>) {
  const { from, to, isoFrom, isoTo } = event.detail;
  lastEvent.value = { from, to, isoFrom, isoTo };
}
</script>

<template>
  <IxLayoutGrid>
    <IxRow>
      <IxCol size="3">
        <span style="margin-right: 0.5rem">Language:</span>
        <IxSelect :value="locale" @valueChange="setLocale">
          <IxSelectItem
            v-for="l in locales"
            :key="l.value"
            :label="l.label"
            :value="l.value"
          />
        </IxSelect>
      </IxCol>
      <IxCol size="4">
        <span style="margin-right: 0.5rem">Format:</span>
        <IxSelect :value="format" @valueChange="setFormat">
          <IxSelectItem
            v-for="f in formats"
            :key="f.value"
            :label="f.label"
            :value="f.value"
          />
        </IxSelect>
      </IxCol>
    </IxRow>
    <IxRow>
      <IxCol size="12">
        <div style="width: fit-content; max-width: 100%">
          <IxDatePicker
            :locale="locale"
            :format="format"
            @dateChange="onDateChange"
          />
          <div
            style="
              margin-top: 0.5rem;
              padding: 0.75rem 1rem;
              border: 1px solid var(--si-sys-color-border-4);
              border-radius: 4px;
              background: var(--si-sys-color-background-1);
            "
          >
            <span
              style="display: block; font-weight: 700; margin-bottom: 0.5rem"
            >
              Last date-picker event
            </span>
            <span
              v-if="lastEvent === null"
              style="color: var(--si-sys-color-text-secondary)"
            >
              Select a date to see event values
            </span>
            <IxLayoutGrid v-else no-margin>
              <IxRow v-for="row in eventRows" :key="row.key">
                <IxCol
                  size="2"
                  style="
                    font-weight: 600;
                    color: var(--si-sys-color-text-primary);
                  "
                >
                  {{ row.key }}
                </IxCol>
                <IxCol
                  style="
                    font-family: monospace;
                    color: var(--si-sys-color-text-accent);
                  "
                >
                  {{ lastEvent?.[row.key] ?? '—' }}
                </IxCol>
                <IxCol
                  style="
                    color: var(--si-sys-color-text-secondary);
                    font-size: 0.8em;
                  "
                >
                  {{ row.note }}
                </IxCol>
              </IxRow>
            </IxLayoutGrid>
          </div>
        </div>
      </IxCol>
    </IxRow>
  </IxLayoutGrid>
</template>
```

## API for ix-date-picker

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelMonthSelection | { "ARIA label for the next month icon button\n\nWill be set as aria-label on the nested HTML button element" } | aria-label-month-selection | string \| undefined | 'Select month' |
| ariaLabelNextMonthButton | { "ARIA label for the next month icon button.\n\nWill be set as aria-label on the nested HTML button element." } | aria-label-next-month-button | string \| undefined | 'Change calendar view to next month' |
| ariaLabelPreviousMonthButton | { "ARIA label for the previous month icon button.\n\nWill be set as aria-label on the nested HTML button element." } | aria-label-previous-month-button | string \| undefined | 'Change calendar view to previous month' |
| ariaLabelYearSelection | { "ARIA label for the next month icon button\n\nWill be set as aria-label on the nested HTML button element" } | aria-label-year-selection | string \| undefined | 'Select year' |
| corners | { "Corner style." } | corners | "left" \| "right" \| "rounded" \| "straight" | 'rounded' |
| enableTopLayer | { "Enable Popover API rendering for dropdown." } | enable-top-layer | boolean | false |
| format | { "Date format string.\n\nSee [https://moment.github.io/luxon/#/formatting?id=table-of-tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for all available tokens." } | format | string | 'yyyy/LL/dd' |
| from | { "The selected starting date. If the date picker is not in range mode, this is the selected date.\n\nFormat has to match the `format` property." } | from | string \| undefined |  |
| i18nCancel | { "Text of the cancel button shown when `requireConfirmation` is enabled." } | i18n-cancel | string | 'Cancel' |
| i18nConfirm | { "Text of the confirm button shown when `requireConfirmation` is enabled." } | i18n-confirm | string | 'Confirm' |
| i18nDone | { "Text of the date select button." } | i18n-done | string | 'Done' |
| locale | { "Locale identifier (e.g. 'en' or 'de').\n\nThe locale is used to translate the labels for weekdays and months.\n\nWhen the locale changes, the weekday labels are rotated according to the `weekStartIndex`.\n\nThe locale is also applied when formatting and parsing date values.\n\nFor locale-dependent format tokens (e.g. `MMMM`, `MMM`), the output will reflect the locale.\n\nUse the `isoFrom` and `isoTo` fields on events for locale-independent values." } | locale | string \| undefined |  |
| maxDate | { "The latest date that can be selected by the date picker.\n\nIf not set there will be no restriction." } | max-date | string | '' |
| minDate | { "The earliest date that can be selected by the date picker.\n\nIf not set there will be no restriction." } | min-date | string | '' |
| requireConfirmation | { "If true, a selection is only applied after the user confirms it with the\n\nconfirm button, which emits `dateSelect`. `dateChange` still reports\n\nevery pick. The cancel button discards the\n\npending selection." } | require-confirmation | boolean | false |
| showWeekNumbers | { "Shows week numbers displayed on the left side of the date picker." } | show-week-numbers | boolean | false |
| singleSelection | { "If true, disables date range selection (from/to)." } | single-selection | boolean | false |
| to | { "The selected end date. If the date picker is not in range mode, this property has no impact.\n\nFormat has to match the `format` property." } | to | string \| undefined |  |
| weekStartIndex | { "The index of the day the week starts on, as a 0-based index into Luxon's\n\n`Info.weekdays()` array. That array is always ordered Monday-first\n\nregardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday.\n\nE.g. weekStartIndex = 6 results in starting the week on Sunday." } | week-start-index | number | 0 |

### Methods

#### getCurrentDate

```ts
getCurrentDate(): Promise&lt;DateRangeWithIso&gt;;
```

{ "Get the confirmed date or range. The object returned contains `from` and `to` properties\n\nformatted according to the `format` and `locale` properties.\n\nUse `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.\n\nWith `requireConfirmation`, a pending selection is not returned until it is\n\nconfirmed. Listen to `dateChange` to get every pick." }

### Events

| Name | Description | Event | Detail | Notes |
| --- | --- | --- | --- | --- |
| dateCancel | { "Emitted when the pending selection is discarded via the cancel button." } | dateCancel | void |  |
| dateChange | { "Emitted on any date selection change. The `DateChangeEvent` contains `from` and `to` properties\n\nformatted according to the `format` and `locale` properties.\n\nUse `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.\n\nNote: Since 2.0.0 `dateChange` does not dispatch detail property as `string`\n\nWhen a pending selection is discarded, it is emitted with the confirmed\n\nselection again. Use `dateSelect` to receive only the applied selection." } | dateChange | DateRange & { isoFrom?: string \| undefined; isoTo?: string \| undefined; } | Breaking change in v6.0.0: from and to are localized, use isoFrom and isoTo for ISO 8601 values |
| dateRangeChange | { "Date range change event. Emitted when the date range selection changes and the component is in range mode.\n\nThe `DateChangeEvent` contains `from` and `to` properties formatted according to the `format` and `locale` properties.\n\nUse `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.\n\nEmitted together with `dateChange`." } | dateRangeChange | DateRange & { isoFrom?: string \| undefined; isoTo?: string \| undefined; } | Breaking change in v6.0.0: Deprecated, from and to are localized (use isoFrom and isoTo) |
| dateSelect | { "Date selection event. Emitted when the selection is applied via the done\n\nbutton, or via the confirm button with `requireConfirmation`. With\n\n`singleSelection` and without `requireConfirmation` there is no button,\n\nso it is emitted together with `dateChange` when a date is picked.\n\nThe `DateChangeEvent` contains `from` and `to` properties formatted according to the `format` and `locale` properties.\n\nUse `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings." } | dateSelect | DateRange & { isoFrom?: string \| undefined; isoTo?: string \| undefined; } | Breaking change in v6.0.0: from and to are localized, use isoFrom and isoTo for ISO 8601 values |
