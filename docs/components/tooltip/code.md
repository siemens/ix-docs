# Tooltip - Code

> Code examples and API documentation for the ix-tooltip

# Tooltip - Code

## Basic

### React Examples

#### tooltip.tsx
```tsx
import './tooltip.scoped.css';

import { IxButton, IxTooltip } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton className="any-class" aria-describedby="tooltip-1">
        Hover me
      </IxButton>
      <IxTooltip id="tooltip-1" for=".any-class">
        Simple selector
      </IxTooltip>

      <IxButton
        my-custom-special-selector="any-value"
        aria-describedby="tooltip-2"
      >
        Also hover me
      </IxButton>
      <IxTooltip id="tooltip-2" for="[my-custom-special-selector='any-value']">
        Custom selector
      </IxTooltip>
    </>
  );
};
```

#### tooltip.scoped.css
```css
ix-button {
  margin: 4rem;
}
```

### Angular Examples

#### tooltip.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './tooltip.html',
  styleUrls: ['./tooltip.css'],
})
export default class Tooltip {}
```

#### tooltip.html
```html
<ix-button class="any-class" aria-describedby="tooltip-1">Hover me</ix-button>
<ix-tooltip id="tooltip-1" for=".any-class">Simple selector</ix-tooltip>

<ix-button my-custom-special-selector="any-value" aria-describedby="tooltip-2">
  Also hover me
</ix-button>
<ix-tooltip id="tooltip-2" for="[my-custom-special-selector='any-value']">
  Custom selector
</ix-tooltip>
```

#### tooltip.css
```css
ix-button {
  margin: 4rem;
}
```

### Angular Standalone Examples

#### tooltip.ts
```ts
import { Component } from '@angular/core';
import { IxButton, IxTooltip } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton, IxTooltip],
  templateUrl: './tooltip.html',
  styleUrls: ['./tooltip.css'],
})
export default class Tooltip {}
```

#### tooltip.html
```html
<ix-button class="any-class" aria-describedby="tooltip-1">Hover me</ix-button>
<ix-tooltip id="tooltip-1" for=".any-class">Simple selector</ix-tooltip>

<ix-button my-custom-special-selector="any-value" aria-describedby="tooltip-2">
  Also hover me
</ix-button>
<ix-tooltip id="tooltip-2" for="[my-custom-special-selector='any-value']">
  Custom selector
</ix-tooltip>
```

#### tooltip.css
```css
ix-button {
  margin: 4rem;
}
```

### Vue Examples

#### tooltip.vue
```vue
<script setup lang="ts">
import { IxButton, IxTooltip } from '@siemens/ix-vue';
</script>

<style scoped src="./tooltip.css"></style>

<template>
  <IxButton class="any-class" aria-describedby="tooltip-1"> Hover me </IxButton>
  <IxTooltip id="tooltip-1" for=".any-class">Simple selector</IxTooltip>

  <IxButton my-custom-special-selector="any-value" aria-describedby="tooltip-2"
    >Also hover me</IxButton
  >
  <IxTooltip id="tooltip-2" for="[my-custom-special-selector='any-value']">
    Custom selector
  </IxTooltip>
</template>
```

#### tooltip.css
```css
ix-button {
  margin: 4rem;
}
```

## Delay

Example is supported since version 6.0.0

Use `showDelay` and `hideDelay` to set the delay in milliseconds before the tooltip is shown or hidden. By default, tooltips are shown immediately (`0` ms) and hidden after `50` ms. Interactive tooltips wait `150` ms before hiding by default, so users have time to move the pointer onto the tooltip. Avoid very short hide delays for interactive tooltips, otherwise the tooltip closes before the pointer reaches it. Pressing `Escape` closes the tooltip immediately, regardless of `hideDelay`.

```html
<ix-button id="delayed-trigger">Asset details</ix-button>
<ix-tooltip for="#delayed-trigger" show-delay="500" hide-delay="200">
  Additional asset information
</ix-tooltip>
```

## A11y

Set the `aria-describedby` attribute on the trigger element to the tooltip `id` attribute. This allows assistive technologies to establish a logical connection between the trigger and the tooltip.

See examples [above](#basic).

[More information](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

## API for ix-tooltip

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| for | { "CSS selector for hover trigger element e.g. `for=\"[data-my-custom-select]\"`" } | for | ElementReference[] \| HTMLElement \| Promise \| string \| undefined |  |
| hideDelay | { "Delay in milliseconds before the tooltip is hidden.\n\nDefaults to 50 ms, or 150 ms for interactive tooltips,\n\nso the user has time to move the pointer into the tooltip.\n\nFor interactive tooltips, avoid very short delays, otherwise the tooltip\n\ncloses before the pointer reaches it." } | hide-delay | number \| undefined |  |
| interactive | { "Define if the user can access the tooltip via mouse." } | interactive | boolean | false |
| placement | { "Initial placement of the tooltip.\n\nIf the selected placement doesn't have enough space, the tooltip will be repositioned to another location." } | placement | "bottom" \| "left" \| "right" \| "top" | 'top' |
| showDelay | { "Delay in milliseconds before the tooltip is shown." } | show-delay | number | 0 |
| titleContent | { "Title of the tooltip" } | title-content | string \| undefined |  |

### Slot

| Name | Description |
| --- | --- |
| default | { "Tooltip content." } |
| title-content | { "Content of tooltip title" } |
| title-icon | { "Icon displayed next to the tooltip title. The icon will be displayed as 16x16px." } |
