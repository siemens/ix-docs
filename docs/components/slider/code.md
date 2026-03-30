# Slider - Code

> Code examples and API documentation for the ix-slider

# Slider - Code

## Basic

### React Examples

#### slider.tsx
```tsx
import { IxSlider } from '@siemens/ix-react';
import './slider.scoped.css';

export default () => {
  return (
    <div className="slider-container">
      <IxSlider value={25}>
        <span slot="label-start">0</span>
        <span slot="label-end">100</span>
      </IxSlider>

      <IxSlider min={0} max={50} step={10} value={10}>
        <span slot="label-start">0</span>
        <span slot="label-end">50</span>
      </IxSlider>
    </div>
  );
};
```

#### slider.scoped.css
```css
.slider-container {
  padding: 0.5rem;
}
```

### Angular Examples

#### slider.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './slider.html',
  styleUrls: ['./slider.css'],
})
export default class Slider {}
```

#### slider.html
```html
<div class="slider-container">
  <ix-slider value="25">
    <span slot="label-start">0</span>
    <span slot="label-end">100</span>
  </ix-slider>

  <ix-slider min="0" max="50" step="10" value="10">
    <span slot="label-start">0</span>
    <span slot="label-end">50</span>
  </ix-slider>
</div>
```

#### slider.css
```css
.slider-container {
  padding: 0.5rem;
}
```

### Angular Standalone Examples

#### slider.ts
```ts
import { Component } from '@angular/core';
import { IxSlider } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxSlider],
  templateUrl: './slider.html',
  styleUrls: ['./slider.css'],
})
export default class Slider {}
```

#### slider.html
```html
<div class="slider-container">
  <ix-slider value="25">
    <span slot="label-start">0</span>
    <span slot="label-end">100</span>
  </ix-slider>

  <ix-slider min="0" max="50" step="10" value="10">
    <span slot="label-start">0</span>
    <span slot="label-end">50</span>
  </ix-slider>
</div>
```

#### slider.css
```css
.slider-container {
  padding: 0.5rem;
}
```

### Vue Examples

#### slider.vue
```vue
<script setup lang="ts">
import { IxSlider } from '@siemens/ix-vue';
</script>

<style scoped src="./slider.css"></style>

<template>
  <div class="slider-container">
    <IxSlider :value="25">
      <span slot="label-start">0</span>
      <span slot="label-end">100</span>
    </IxSlider>

    <IxSlider :min="0" :max="50" :step="10" :value="10">
      <span slot="label-start">0</span>
      <span slot="label-end">50</span>
    </IxSlider>
  </div>
</template>
```

#### slider.css
```css
.slider-container {
  padding: 0.5rem;
}
```

## Marker

### React Examples

#### slider-marker.tsx
```tsx
import { IxSlider } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxSlider marker={[0, 25, 50, 75, 100]}>
        <span slot="label-start">0</span>
        <span slot="label-end">100</span>
      </IxSlider>

      <IxSlider min={0} max={50} step={10} marker={[0, 10, 20, 30, 40, 50]}>
        <span slot="label-start">0</span>
        <span slot="label-end">50</span>
      </IxSlider>
    </>
  );
};
```

### Angular Examples

#### slider-marker.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './slider-marker.html',
})
export default class SliderMarker {}
```

#### slider-marker.html
```html
<ix-slider value="25" [marker]="[0, 25, 50, 75, 100]">
  <span slot="label-start">0</span>
  <span slot="label-end">100</span>
</ix-slider>

<ix-slider
  min="0"
  max="50"
  step="10"
  value="10"
  marker="[0, 10, 20, 30, 40, 50]"
>
  <span slot="label-start">0</span>
  <span slot="label-end">50</span>
</ix-slider>
```

### Angular Standalone Examples

#### slider-marker.ts
```ts
import { Component } from '@angular/core';
import { IxSlider } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxSlider],
  templateUrl: './slider-marker.html',
})
export default class SliderMarker {}
```

#### slider-marker.html
```html
<ix-slider value="25" [marker]="[0, 25, 50, 75, 100]">
  <span slot="label-start">0</span>
  <span slot="label-end">100</span>
</ix-slider>

<ix-slider
  min="0"
  max="50"
  step="10"
  value="10"
  marker="[0, 10, 20, 30, 40, 50]"
>
  <span slot="label-start">0</span>
  <span slot="label-end">50</span>
</ix-slider>
```

### Vue Examples

#### slider-marker.vue
```vue
<script setup lang="ts">
import { IxSlider } from '@siemens/ix-vue';
</script>

<template>
  <IxSlider :marker="[0, 25, 50, 75, 100]">
    <span slot="label-start">0</span>
    <span slot="label-end">100</span>
  </IxSlider>

  <IxSlider :min="0" :max="50" :step="10" :marker="[0, 10, 20, 30, 40, 50]">
    <span slot="label-start">0</span>
    <span slot="label-end">50</span>
  </IxSlider>
</template>
```

## Trace

### React Examples

#### slider-trace.tsx
```tsx
import { IxSlider } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxSlider
        trace
        trace-reference={50}
        marker={[0, 25, 50, 75, 100]}
        value={25}
      >
        <span slot="label-start">0</span>
        <span slot="label-end">100</span>
      </IxSlider>

      <IxSlider
        min={0}
        max={50}
        value={20}
        step={10}
        trace
        trace-reference={10}
        marker={[0, 10, 20, 30, 40, 50]}
      >
        <span slot="label-start">0</span>
        <span slot="label-end">50</span>
      </IxSlider>
    </>
  );
};
```

### Angular Examples

#### slider-trace.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './slider-trace.html',
})
export default class SliderTrace {}
```

#### slider-trace.html
```html
<ix-slider
  trace
  trace-reference="50"
  [marker]="[0, 25, 50, 75, 100]"
  value="25"
>
  <span slot="label-start">0</span>
  <span slot="label-end">100</span>
</ix-slider>

<ix-slider
  min="0"
  max="50"
  value="20"
  step="10"
  trace
  trace-reference="10"
  [marker]="[0, 10, 20, 30, 40, 50]"
>
  <span slot="label-start">0</span>
  <span slot="label-end">50</span>
</ix-slider>
```

### Angular Standalone Examples

#### slider-trace.ts
```ts
import { Component } from '@angular/core';
import { IxSlider } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxSlider],
  templateUrl: './slider-trace.html',
})
export default class SliderTrace {}
```

#### slider-trace.html
```html
<ix-slider
  trace
  trace-reference="50"
  [marker]="[0, 25, 50, 75, 100]"
  value="25"
>
  <span slot="label-start">0</span>
  <span slot="label-end">100</span>
</ix-slider>

<ix-slider
  min="0"
  max="50"
  value="20"
  step="10"
  trace
  trace-reference="10"
  [marker]="[0, 10, 20, 30, 40, 50]"
>
  <span slot="label-start">0</span>
  <span slot="label-end">50</span>
</ix-slider>
```

### Vue Examples

#### slider-trace.vue
```vue
<script setup lang="ts">
import { IxSlider } from '@siemens/ix-vue';
</script>

<template>
  <IxSlider
    trace
    :trace-reference="50"
    :marker="[0, 25, 50, 75, 100]"
    :value="25"
  >
    <span slot="label-start">0</span>
    <span slot="label-end">100</span>
  </IxSlider>

  <IxSlider
    :min="0"
    :max="50"
    :value="20"
    :step="10"
    :trace="true"
    :trace-reference="10"
    :marker="[0, 10, 20, 30, 40, 50]"
  >
    <span slot="label-start">0</span>
    <span slot="label-end">50</span>
  </IxSlider>
</template>
```

## Error

### React Examples

#### slider-error.tsx
```tsx
import { IxSlider } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxSlider trace trace-reference={50} marker={[0, 25, 50, 75, 100]} error>
        <span slot="label-start">0</span>
        <span slot="label-end">100</span>
      </IxSlider>

      <IxSlider
        min={0}
        max={50}
        step={10}
        trace
        trace-reference={10}
        marker={[0, 10, 20, 30, 40, 50]}
        error={'Error message'}
      >
        <span slot="label-start">0</span>
        <span slot="label-end">50</span>
      </IxSlider>
    </>
  );
};
```

### Angular Examples

#### slider-error.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './slider-error.html',
})
export default class SliderError {}
```

#### slider-error.html
```html
<ix-slider trace trace-reference="50" [marker]="[0, 25, 50, 75, 100]" error>
  <span slot="label-start">0</span>
  <span slot="label-end">100</span>
</ix-slider>

<ix-slider
  min="0"
  max="50"
  step="10"
  value="20"
  trace
  trace-reference="50"
  [marker]="[0, 10, 20, 30, 40, 50]"
  error="Error message"
>
  <span slot="label-start">0</span>
  <span slot="label-end">50</span>
</ix-slider>
```

### Angular Standalone Examples

#### slider-error.ts
```ts
import { Component } from '@angular/core';
import { IxSlider } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxSlider],
  templateUrl: './slider-error.html',
})
export default class SliderError {}
```

#### slider-error.html
```html
<ix-slider trace trace-reference="50" [marker]="[0, 25, 50, 75, 100]" error>
  <span slot="label-start">0</span>
  <span slot="label-end">100</span>
</ix-slider>

<ix-slider
  min="0"
  max="50"
  step="10"
  value="20"
  trace
  trace-reference="50"
  [marker]="[0, 10, 20, 30, 40, 50]"
  error="Error message"
>
  <span slot="label-start">0</span>
  <span slot="label-end">50</span>
</ix-slider>
```

### Vue Examples

#### slider-error.vue
```vue
<script setup lang="ts">
import { IxSlider } from '@siemens/ix-vue';
</script>

<template>
  <IxSlider
    trace
    :trace-reference="50"
    :marker="[0, 25, 50, 75, 100]"
    :error="true"
  >
    <span slot="label-start">0</span>
    <span slot="label-end">100</span>
  </IxSlider>

  <IxSlider
    :min="0"
    :max="50"
    :step="10"
    trace
    :trace-reference="10"
    :marker="[0, 10, 20, 30, 40, 50]"
    error="Error message"
  >
    <span slot="label-start">0</span>
    <span slot="label-end">50</span>
  </IxSlider>
</template>
```

## API for ix-slider

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| disabled | Show control as disabled | disabled | boolean | false |
| error | Show error state and message | error | boolean \| string \| undefined |  |
| helperText | Show text below the field component | helper-text | string \| undefined |  |
| infoText | Info text for the field component | info-text | string \| undefined |  |
| invalidText | Error text for the field component | invalid-text | string \| undefined |  |
| label | Label for the field component | label | string \| undefined |  |
| marker | Define tick marker on the slider. Marker has to be within slider min/max |  | number[] \| undefined |  |
| max | Maximum slider value | max | number | 100 |
| min | Minimum slider value | min | number | 0 |
| showTextAsTooltip | Show helper, info, warning, error and valid text as tooltip | show-text-as-tooltip | boolean | false |
| step | Legal number intervals [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step) | step | number | 1 |
| trace | Show a trace line | trace | boolean | false |
| traceReference | Define the start point of the trace line | trace-reference | number | 0 |
| validText | Valid text for the field component | valid-text | string \| undefined |  |
| value | Current value of the slider | value | number | 0 |
| warningText | Warning text for the field component | warning-text | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| valueChange | Will emit the value when it changes | valueChange | number |

### Slot

| Name | Description |
| --- | --- |
| label-end | { `Element will be displayed at the end of the slider` } |
| label-start | { `Element will be displayed at the start of the slider` } |
