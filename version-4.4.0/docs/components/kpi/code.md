# KPI - Code

> Code examples and API documentation for the ix-kpi

# KPI - Code

## Basic

### React Examples

#### kpi.tsx
```tsx
import './kpi.scoped.css';

import { IxKpi } from '@siemens/ix-react';

export default () => {
  return (
    <div className="kpi">
      <IxKpi label="Motor speed" value="Nominal"></IxKpi>
      <IxKpi label="Motor speed" value="{122.6}" unit="rpm"></IxKpi>
      <IxKpi label="Motor speed" value="{122.6}" state="alarm"></IxKpi>
      <IxKpi label="Motor speed" value="{122.6}" state="warning"></IxKpi>

      <IxKpi label="Motor speed" value="Nominal" orientation="vertical"></IxKpi>
      <IxKpi
        label="Motor speed"
        value="{122.6}"
        unit="rpm"
        state="alarm"
        orientation="vertical"
      ></IxKpi>
    </div>
  );
};
```

#### kpi.scoped.css
```css
.kpi {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.kpi > ix-kpi {
  margin: 0.5rem;
}
```

### Angular Examples

#### kpi.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="kpi">
      <ix-kpi label="Motor speed" value="Nominal"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" unit="rpm"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="alarm"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="warning"></ix-kpi>

      <ix-kpi
        label="Motor speed"
        value="Nominal"
        orientation="vertical"
      ></ix-kpi>
      <ix-kpi
        label="Motor speed"
        value="{122.6}"
        unit="rpm"
        state="alarm"
        orientation="vertical"
      ></ix-kpi>
    </div>
  `,
  styleUrls: ['./kpi.css'],
})
export default class Kpi {}
```

#### kpi.css
```css
.kpi {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.kpi > ix-kpi {
  margin: 0.5rem;
}
```

### Angular Standalone Examples

#### kpi.ts
```ts
import { Component } from '@angular/core';
import { IxKpi } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxKpi],
  template: `
    <div class="kpi">
      <ix-kpi label="Motor speed" value="Nominal"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" unit="rpm"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="alarm"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="warning"></ix-kpi>

      <ix-kpi
        label="Motor speed"
        value="Nominal"
        orientation="vertical"
      ></ix-kpi>
      <ix-kpi
        label="Motor speed"
        value="{122.6}"
        unit="rpm"
        state="alarm"
        orientation="vertical"
      ></ix-kpi>
    </div>
  `,
  styleUrls: ['./kpi.css'],
})
export default class Kpi {}
```

#### kpi.css
```css
.kpi {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.kpi > ix-kpi {
  margin: 0.5rem;
}
```

### Vue Examples

#### kpi.vue
```vue
<script setup lang="ts">
import { IxKpi } from '@siemens/ix-vue';
</script>

<style scoped src="./kpi.css"></style>

<template>
  <div class="kpi">
    <IxKpi label="Motor speed" value="Nominal"></IxKpi>
    <IxKpi label="Motor speed" value="122.6" unit="rpm"></IxKpi>
    <IxKpi label="Motor speed" value="122.6" state="alarm"></IxKpi>
    <IxKpi label="Motor speed" value="122.6" state="warning"></IxKpi>

    <IxKpi label="Motor speed" value="Nominal" orientation="vertical"></IxKpi>
    <IxKpi
      label="Motor speed"
      value="122.6"
      unit="rpm"
      state="alarm"
      orientation="vertical"
    ></IxKpi>
  </div>
</template>
```

#### kpi.css
```css
.kpi {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.kpi > ix-kpi {
  margin: 0.5rem;
}
```

## API for ix-kpi

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelAlarmIcon | ARIA label for the alarm icon | aria-label-alarm-icon | string \| undefined |  |
| ariaLabelWarningIcon | ARIA label for the warning icon | aria-label-warning-icon | string \| undefined |  |
| label |  | label | string \| undefined |  |
| orientation |  | orientation | "horizontal" \| "vertical" | 'horizontal' |
| state |  | state | "alarm" \| "neutral" \| "warning" | 'neutral' |
| unit |  | unit | string \| undefined |  |
| value |  | value | number \| string \| undefined |  |
