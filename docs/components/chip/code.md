# Chip - Code

> Code examples and API documentation for the ix-chip

# Chip - Code

## Basic

### React Examples

#### chip.tsx
```tsx
import { iconPrint } from '@siemens/ix-icons/icons';
import './chip.scoped.css';

import { IxChip } from '@siemens/ix-react';

export default () => {
  return (
    <div className="chip">
      <div className="chip-column">
        <IxChip icon={iconPrint} variant="primary" closable>
          Primary
        </IxChip>
        <IxChip icon={iconPrint} variant="alarm" closable>
          Alarm
        </IxChip>
        <IxChip icon={iconPrint} variant="critical">
          Critical
        </IxChip>
        <IxChip icon={iconPrint} variant="warning">
          Warning
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="info"
          tooltipText="Open details for this status"
          aria-label="In review"
        >
          Info
        </IxChip>
        <IxChip icon={iconPrint} variant="success">
          Success
        </IxChip>
        <IxChip icon={iconPrint} variant="neutral">
          Neutral
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="custom"
          background="var(--theme-chart-11)"
          chipColor="var(--theme-color-inv-std-text)"
          closable
        >
          Custom
        </IxChip>
        <IxChip icon={iconPrint} variant="primary" closable>
          Chip with icon
        </IxChip>
      </div>
      <div className="chip-column">
        <IxChip icon={iconPrint} variant="primary" outline closable>
          Primary
        </IxChip>
        <IxChip icon={iconPrint} variant="alarm" outline closable>
          Alarm
        </IxChip>
        <IxChip icon={iconPrint} variant="critical" outline>
          Critical
        </IxChip>
        <IxChip icon={iconPrint} variant="warning" outline>
          Warning
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="info"
          outline
          tooltipText="Open details for this status"
          aria-label="In review"
        >
          Info
        </IxChip>
        <IxChip icon={iconPrint} variant="success" outline>
          Success
        </IxChip>
        <IxChip icon={iconPrint} variant="neutral" outline>
          Neutral
        </IxChip>
        <IxChip
          icon={iconPrint}
          variant="custom"
          background="var(--theme-chart-11)"
          chipColor="var(--theme-chip-outline--color)"
          outline
          closable
        >
          Custom
        </IxChip>
        <IxChip variant="primary" outline closable>
          Chip without icon
        </IxChip>
      </div>
    </div>
  );
};
```

#### chip.scoped.css
```css
.chip {
  display: flex;
  gap: 2rem;
}

.chip-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

### Angular Examples

#### chip.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="chip">
      <div class="chip-column">
        <ix-chip icon="print" variant="primary" closable>Primary</ix-chip>
        <ix-chip icon="print" variant="alarm" closable>Alarm</ix-chip>
        <ix-chip icon="print" variant="critical">Critical</ix-chip>
        <ix-chip icon="print" variant="warning">Warning</ix-chip>
        <ix-chip
          icon="print"
          variant="info"
          tooltip-text="Open details for this status"
          aria-label="In review"
          >Info</ix-chip
        >
        <ix-chip icon="print" variant="success">Success</ix-chip>
        <ix-chip icon="print" variant="neutral">Neutral</ix-chip>
        <ix-chip
          icon="print"
          variant="custom"
          background="var(--theme-chart-11)"
          chip-color="var(--theme-color-inv-std-text)"
          closable
          >Custom</ix-chip
        >
        <ix-chip icon="print" variant="primary" closable
          >Chip with icon
        </ix-chip>
      </div>
      <div class="chip-column">
        <ix-chip icon="print" variant="primary" outline closable
          >Primary</ix-chip
        >
        <ix-chip icon="print" variant="alarm" outline closable>Alarm</ix-chip>
        <ix-chip icon="print" variant="critical" outline>Critical</ix-chip>
        <ix-chip icon="print" variant="warning" outline>Warning</ix-chip>
        <ix-chip
          icon="print"
          variant="info"
          outline
          tooltip-text="Open details for this status"
          aria-label="In review"
          >Info</ix-chip
        >
        <ix-chip icon="print" variant="success" outline>Success</ix-chip>
        <ix-chip icon="print" variant="neutral" outline>Neutral</ix-chip>
        <ix-chip
          icon="print"
          variant="custom"
          background="var(--theme-chart-11)"
          chip-color="var(--theme-chip-outline--color)"
          outline
          closable
          >Custom</ix-chip
        >
        <ix-chip variant="primary" outline closable>Chip without icon</ix-chip>
      </div>
    </div>
  `,
  styleUrls: ['./chip.css'],
})
export default class Chip {}
```

#### chip.css
```css
.chip {
  display: flex;
  gap: 2rem;
}

.chip-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

### Angular Standalone Examples

#### chip.ts
```ts
import { Component } from '@angular/core';
import { IxChip } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxChip],
  template: `
    <div class="chip">
      <div class="chip-column">
        <ix-chip icon="print" variant="primary" closable>Primary</ix-chip>
        <ix-chip icon="print" variant="alarm" closable>Alarm</ix-chip>
        <ix-chip icon="print" variant="critical">Critical</ix-chip>
        <ix-chip icon="print" variant="warning">Warning</ix-chip>
        <ix-chip
          icon="print"
          variant="info"
          tooltip-text="Open details for this status"
          aria-label="In review"
          >Info</ix-chip
        >
        <ix-chip icon="print" variant="success">Success</ix-chip>
        <ix-chip icon="print" variant="neutral">Neutral</ix-chip>
        <ix-chip
          icon="print"
          variant="custom"
          background="var(--theme-chart-11)"
          chip-color="var(--theme-color-inv-std-text)"
          closable
          >Custom</ix-chip
        >
        <ix-chip icon="print" variant="primary" closable
          >Chip with icon
        </ix-chip>
      </div>
      <div class="chip-column">
        <ix-chip icon="print" variant="primary" outline closable
          >Primary</ix-chip
        >
        <ix-chip icon="print" variant="alarm" outline closable>Alarm</ix-chip>
        <ix-chip icon="print" variant="critical" outline>Critical</ix-chip>
        <ix-chip icon="print" variant="warning" outline>Warning</ix-chip>
        <ix-chip
          icon="print"
          variant="info"
          outline
          tooltip-text="Open details for this status"
          aria-label="In review"
          >Info</ix-chip
        >
        <ix-chip icon="print" variant="success" outline>Success</ix-chip>
        <ix-chip icon="print" variant="neutral" outline>Neutral</ix-chip>
        <ix-chip
          icon="print"
          variant="custom"
          background="var(--theme-chart-11)"
          chip-color="var(--theme-chip-outline--color)"
          outline
          closable
          >Custom</ix-chip
        >
        <ix-chip variant="primary" outline closable>Chip without icon</ix-chip>
      </div>
    </div>
  `,
  styleUrls: ['./chip.css'],
})
export default class Chip {}
```

#### chip.css
```css
.chip {
  display: flex;
  gap: 2rem;
}

.chip-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

### Vue Examples

#### chip.vue
```vue
<script setup lang="ts">
import { iconPrint } from '@siemens/ix-icons/icons';
import { IxChip } from '@siemens/ix-vue';
</script>

<style scoped src="./chip.css"></style>

<template>
  <div class="chip">
    <div class="chip-column">
      <IxChip :icon="iconPrint" variant="primary" closable> Primary </IxChip>
      <IxChip :icon="iconPrint" variant="alarm" closable> Alarm </IxChip>
      <IxChip :icon="iconPrint" variant="critical"> Critical </IxChip>
      <IxChip :icon="iconPrint" variant="warning"> Warning </IxChip>
      <IxChip
        :icon="iconPrint"
        variant="info"
        tooltip-text="Open details for this status"
        aria-label="In review"
      >
        Info
      </IxChip>
      <IxChip :icon="iconPrint" variant="success"> Success </IxChip>
      <IxChip :icon="iconPrint" variant="neutral"> Neutral </IxChip>
      <IxChip
        :icon="iconPrint"
        variant="custom"
        background="var(--theme-chart-11)"
        chip-color="var(--theme-color-inv-std-text)"
        closable
      >
        Custom
      </IxChip>
      <IxChip :icon="iconPrint" variant="primary" closable>
        Chip with icon
      </IxChip>
    </div>
    <div class="chip-column">
      <IxChip :icon="iconPrint" variant="primary" outline closable>
        Primary
      </IxChip>
      <IxChip :icon="iconPrint" variant="alarm" outline closable>
        Alarm
      </IxChip>
      <IxChip :icon="iconPrint" variant="critical" outline> Critical </IxChip>
      <IxChip :icon="iconPrint" variant="warning" outline> Warning </IxChip>
      <IxChip
        :icon="iconPrint"
        variant="info"
        outline
        tooltip-text="Open details for this status"
        aria-label="In review"
      >
        Info
      </IxChip>
      <IxChip :icon="iconPrint" variant="success" outline> Success </IxChip>
      <IxChip :icon="iconPrint" variant="neutral" outline> Neutral </IxChip>
      <IxChip
        :icon="iconPrint"
        variant="custom"
        background="var(--theme-chart-11)"
        chip-color="var(--theme-chip-outline--color)"
        outline
        closable
      >
        Custom
      </IxChip>
      <IxChip variant="primary" outline closable>Chip without icon</IxChip>
    </div>
  </div>
</template>
```

#### chip.css
```css
.chip {
  display: flex;
  gap: 2rem;
}

.chip-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

## API for ix-chip

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelCloseButton | { "ARIA label for the close button\n\nWill be set as aria-label on the nested HTML button element" } | aria-label-close-button | string \| undefined | 'Close chip' |
| ariaLabelIcon | { "Accessible name for the leading icon.\n\nWhen unset, the icon is treated as decorative (hidden from assistive tech) when the default slot supplies a visible label." } | aria-label-icon | string \| undefined |  |
| background | { "Custom background color.\n\nOnly has an effect on chips with `variant='custom'`" } | background | string \| undefined |  |
| centerContent | { "Center the content of the chip.\n\nSet to false to disable centering." } | center-content | boolean | false |
| chipColor | { "Custom font and icon color.\n\nOnly has an effect on chips with `variant='custom'`" } | chip-color | string \| undefined |  |
| closable | { "Show close icon" } | closable | boolean | false |
| icon | { "Show icon" } | icon | string \| undefined |  |
| inactive | { "Determines if the chip is interactive. If true no user input (e.g. mouse states, keyboard navigation)\n\nwill be possible and also the close button will not be present." } | inactive | boolean | false |
| outline | { "Show chip with outline style" } | outline | boolean | false |
| tooltipText | { "Display a tooltip. By default, no tooltip will be displayed.\n\nAdd the attribute to display the text content of the component as a tooltip or use a string to display a custom text." } | tooltip-text | boolean \| string | false |
| variant | { "Chip variant.\n\nDefaults to `primary`. When unset or set to an unknown value the chip falls back to `primary` styling." } | variant | "alarm" \| "critical" \| "custom" \| "info" \| "neutral" \| "primary" \| "success" \| "warning" | 'primary' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| closeChip | { "Fire event if close button is clicked" } | closeChip | any |
