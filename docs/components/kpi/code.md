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
      <IxKpi label="Motor speed" value="{122.6}" state="warning"></IxKpi>
      <IxKpi label="Motor speed" value="{122.6}" state="danger"></IxKpi>
      <IxKpi label="Motor speed" value="{122.6}" state="caution"></IxKpi>
      <IxKpi label="Motor speed" value="{122.6}" state="success"></IxKpi>
      <IxKpi label="Motor speed" value="{122.6}" state="information"></IxKpi>
      <IxKpi label="Motor speed" value="{122.6}" state="accent"></IxKpi>
      <IxKpi label="Motor speed" value="{122.6}" state="critical"></IxKpi>

      <IxKpi label="Motor speed" value="Nominal" orientation="vertical"></IxKpi>
      <IxKpi
        label="Motor speed"
        value="{122.6}"
        unit="rpm"
        state="danger"
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
      <ix-kpi label="Motor speed" value="{122.6}" state="warning"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="danger"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="caution"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="success"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="information"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="accent"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="critical"></ix-kpi>

      <ix-kpi
        label="Motor speed"
        value="Nominal"
        orientation="vertical"
      ></ix-kpi>
      <ix-kpi
        label="Motor speed"
        value="{122.6}"
        unit="rpm"
        state="danger"
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
      <ix-kpi label="Motor speed" value="{122.6}" state="warning"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="danger"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="caution"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="success"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="information"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="accent"></ix-kpi>
      <ix-kpi label="Motor speed" value="{122.6}" state="critical"></ix-kpi>

      <ix-kpi
        label="Motor speed"
        value="Nominal"
        orientation="vertical"
      ></ix-kpi>
      <ix-kpi
        label="Motor speed"
        value="{122.6}"
        unit="rpm"
        state="danger"
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
    <IxKpi label="Motor speed" value="122.6" state="warning"></IxKpi>
    <IxKpi label="Motor speed" value="122.6" state="danger"></IxKpi>
    <IxKpi label="Motor speed" value="122.6" state="caution"></IxKpi>
    <IxKpi label="Motor speed" value="122.6" state="success"></IxKpi>
    <IxKpi label="Motor speed" value="122.6" state="information"></IxKpi>
    <IxKpi label="Motor speed" value="122.6" state="accent"></IxKpi>
    <IxKpi label="Motor speed" value="122.6" state="critical"></IxKpi>

    <IxKpi label="Motor speed" value="Nominal" orientation="vertical"></IxKpi>
    <IxKpi
      label="Motor speed"
      value="122.6"
      unit="rpm"
      state="danger"
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

Figma main component ID: `423:3986` (node ID of the matching main component in the IX Figma library; use it to map Figma design specs to this component).

### Properties

| Name | Description | Attribute | Type | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| label | { "" } | label | string \| undefined |  |  |
| orientation | { "" } | orientation | "horizontal" \| "vertical" | 'horizontal' |  |
| state | { "Status of the KPI.\n\n`neutral` and `accent` show no status icon.\n\nStatus icons are decorative (`aria-hidden`); convey status in visible text or the host accessible name when it matters for assistive technology." } | state | "accent" \| "caution" \| "critical" \| "danger" \| "information" \| "neutral" \| "success" \| "warning" | 'neutral' | Breaking change in v6.0.0: Status state values renamed |
| unit | { "" } | unit | string \| undefined |  |  |
| value | { "" } | value | number \| string \| undefined |  |  |
