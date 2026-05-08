# Layout auto - Code

> Code examples and API documentation for the ix-layout-auto

# Layout auto - Code

## Basic

### React Examples

#### layout-auto.tsx
```tsx
import './layout-auto.scoped.css';

import { IxLayoutAuto, IxTypography } from '@siemens/ix-react';

export default () => {
  return (
    <IxLayoutAuto className="LayoutExample">
      <IxTypography format="display">1</IxTypography>
      <IxTypography format="display">2</IxTypography>
      <IxTypography format="display">3</IxTypography>
      <IxTypography format="display" data-colspan="2">
        4
      </IxTypography>
      <IxTypography format="display">5</IxTypography>
      <IxTypography format="display">6</IxTypography>
    </IxLayoutAuto>
  );
};
```

#### layout-auto.scoped.css
```css
ix-layout-auto ix-typography {
  display: flex;
  padding: 0.15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border: 0.0625rem solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 0.1875rem;
}
```

### Angular Examples

#### layout-auto.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './layout-auto.html',
  styleUrls: ['./layout-auto.css'],
})
export default class LayoutAuto {}
```

#### layout-auto.html
```html
<ix-layout-auto>
  <ix-typography format="display">1</ix-typography>
  <ix-typography format="display">2</ix-typography>
  <ix-typography format="display">3</ix-typography>
  <ix-typography format="display" data-colspan="2">4</ix-typography>
  <ix-typography format="display">5</ix-typography>
  <ix-typography format="display">6</ix-typography>
</ix-layout-auto>
```

#### layout-auto.css
```css
ix-layout-auto ix-typography {
  display: flex;
  padding: 0.15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border: 0.0625rem solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 0.1875rem;
}
```

### Angular Standalone Examples

#### layout-auto.ts
```ts
import { Component } from '@angular/core';
import { IxLayoutAuto, IxTypography } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLayoutAuto, IxTypography],
  templateUrl: './layout-auto.html',
  styleUrls: ['./layout-auto.css'],
})
export default class LayoutAuto {}
```

#### layout-auto.html
```html
<ix-layout-auto>
  <ix-typography format="display">1</ix-typography>
  <ix-typography format="display">2</ix-typography>
  <ix-typography format="display">3</ix-typography>
  <ix-typography format="display" data-colspan="2">4</ix-typography>
  <ix-typography format="display">5</ix-typography>
  <ix-typography format="display">6</ix-typography>
</ix-layout-auto>
```

#### layout-auto.css
```css
ix-layout-auto ix-typography {
  display: flex;
  padding: 0.15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border: 0.0625rem solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 0.1875rem;
}
```

### Vue Examples

#### layout-auto.vue
```vue
<script setup lang="ts">
import { IxLayoutAuto, IxTypography } from '@siemens/ix-vue';
</script>

<style scoped src="./layout-auto.css"></style>

<template>
  <IxLayoutAuto className="LayoutExample">
    <IxTypography format="display">1</IxTypography>
    <IxTypography format="display">2</IxTypography>
    <IxTypography format="display">3</IxTypography>
    <IxTypography format="display" data-colspan="2"> 4 </IxTypography>
    <IxTypography format="display">5</IxTypography>
    <IxTypography format="display">6</IxTypography>
  </IxLayoutAuto>
</template>
```

#### layout-auto.css
```css
ix-layout-auto ix-typography {
  display: flex;
  padding: 0.15rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border: 0.0625rem solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 0.1875rem;
}
```

## Custom columns

### React Examples

#### layout-auto-custom.tsx
```tsx
import './layout-auto.scoped.css';

import { IxLayoutAuto, IxTypography } from '@siemens/ix-react';

export default () => {
  return (
    <IxLayoutAuto
      className="LayoutExample"
      layout={[
        { minWidth: '0', columns: 1 },
        { minWidth: '560px', columns: 2 },
        { minWidth: '800px', columns: 4 },
      ]}
    >
      <IxTypography format="display">1</IxTypography>
      <IxTypography format="display">2</IxTypography>
      <IxTypography format="display">3</IxTypography>
      <IxTypography format="display" data-colspan="2">
        4
      </IxTypography>
      <IxTypography format="display">5</IxTypography>
      <IxTypography format="display">6</IxTypography>
    </IxLayoutAuto>
  );
};
```

### Angular Examples

#### layout-auto-custom.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './layout-auto-custom.html',
  styleUrls: ['./layout-auto.css'],
})
export default class LayoutAutoCustom {
  layout = [
    { minWidth: '0', columns: 1 },
    { minWidth: '35rem', columns: 2 },
    { minWidth: '50rem', columns: 4 },
  ];
}
```

#### layout-auto-custom.html
```html
<ix-layout-auto [layout]="layout">
  <ix-typography format="display">1</ix-typography>
  <ix-typography format="display">2</ix-typography>
  <ix-typography format="display">3</ix-typography>
  <ix-typography format="display" data-colspan="2">4</ix-typography>
  <ix-typography format="display">5</ix-typography>
  <ix-typography format="display">6</ix-typography>
</ix-layout-auto>
```

### Angular Standalone Examples

#### layout-auto-custom.ts
```ts
import { Component } from '@angular/core';
import { IxLayoutAuto, IxTypography } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLayoutAuto, IxTypography],
  templateUrl: './layout-auto-custom.html',
  styleUrls: ['./layout-auto.css'],
})
export default class LayoutAutoCustom {
  layout = [
    { minWidth: '0', columns: 1 },
    { minWidth: '35rem', columns: 2 },
    { minWidth: '50rem', columns: 4 },
  ];
}
```

#### layout-auto-custom.html
```html
<ix-layout-auto [layout]="layout">
  <ix-typography format="display">1</ix-typography>
  <ix-typography format="display">2</ix-typography>
  <ix-typography format="display">3</ix-typography>
  <ix-typography format="display" data-colspan="2">4</ix-typography>
  <ix-typography format="display">5</ix-typography>
  <ix-typography format="display">6</ix-typography>
</ix-layout-auto>
```

### Vue Examples

#### layout-auto-custom.vue
```vue
<script setup lang="ts">
import { IxLayoutAuto, IxTypography } from '@siemens/ix-vue';

const layout = [
  { minWidth: '0', columns: 1 },
  { minWidth: '560px', columns: 2 },
  { minWidth: '800px', columns: 4 },
];
</script>

<style scoped src="./layout-auto.css"></style>

<template>
  <IxLayoutAuto className="LayoutExample" :layout="layout">
    <IxTypography format="display">1</IxTypography>
    <IxTypography format="display">2</IxTypography>
    <IxTypography format="display">3</IxTypography>
    <IxTypography format="display" data-colspan="2"> 4 </IxTypography>
    <IxTypography format="display">5</IxTypography>
    <IxTypography format="display">6</IxTypography>
  </IxLayoutAuto>
</template>
```

## API for ix-layout-auto

### Properties

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| layout | Defines the layout of the form. | { minWidth: string; columns: number; }[] | [ { minWidth: '0', columns: 1 }, { minWidth: '48em', columns: 2 }, ] |
