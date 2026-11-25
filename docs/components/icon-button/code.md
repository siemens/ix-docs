# Icon button - Code

> Code examples and API documentation for the ix-icon-button

# Icon button - Code

## Basic

### React Examples

#### button-with-icon.tsx
```tsx
import { iconInfo } from '@siemens/ix-icons/icons';
import './button-with-icon.scoped.css';

import { IxIconButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxIconButton icon={iconInfo} variant="primary"></IxIconButton>
        <IxIconButton icon={iconInfo}></IxIconButton>
        <IxIconButton icon={iconInfo} variant="danger-primary"></IxIconButton>
        <IxIconButton variant="subtle-primary" icon={iconInfo}></IxIconButton>
        <IxIconButton variant="tertiary" icon={iconInfo}></IxIconButton>
      </div>

      <div>
        <IxIconButton icon={iconInfo} oval variant="primary"></IxIconButton>
        <IxIconButton icon={iconInfo} oval></IxIconButton>
        <IxIconButton icon={iconInfo} oval variant="danger-primary"></IxIconButton>
        <IxIconButton variant="subtle-primary" icon={iconInfo} oval></IxIconButton>
        <IxIconButton variant="tertiary" icon={iconInfo} oval></IxIconButton>
      </div>

      <div>
        <IxIconButton icon={iconInfo} size="12"></IxIconButton>
        <IxIconButton icon={iconInfo} size="16"></IxIconButton>
        <IxIconButton icon={iconInfo} size="24"></IxIconButton>
      </div>
    </>
  );
};
```

#### button-with-icon.scoped.css
```css
body {
  display: flex;
  flex-direction: column;
}

div,
ix-icon-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### button-with-icon.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './button-with-icon.html',
  styleUrls: ['./button-with-icon.css'],
})
export default class ButtonWithIcon {}
```

#### button-with-icon.html
```html
<div>
  <ix-icon-button icon="info" variant="primary"></ix-icon-button>
  <ix-icon-button icon="info"></ix-icon-button>
  <ix-icon-button icon="info" variant="danger-primary"></ix-icon-button>
  <ix-icon-button variant="subtle-primary" icon="info"></ix-icon-button>
  <ix-icon-button variant="tertiary" icon="info"></ix-icon-button>
</div>

<div>
  <ix-icon-button icon="info" oval variant="primary"></ix-icon-button>
  <ix-icon-button icon="info" oval></ix-icon-button>
  <ix-icon-button icon="info" oval variant="danger-primary"></ix-icon-button>
  <ix-icon-button variant="subtle-primary" icon="info" oval></ix-icon-button>
  <ix-icon-button variant="tertiary" icon="info" oval></ix-icon-button>
</div>

<div>
  <ix-icon-button icon="info" size="12"></ix-icon-button>
  <ix-icon-button icon="info" size="16"></ix-icon-button>
  <ix-icon-button icon="info" size="24"></ix-icon-button>
</div>
```

#### button-with-icon.css
```css
body {
  display: flex;
  flex-direction: column;
}

div,
ix-icon-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### button-with-icon.ts
```ts
import { Component } from '@angular/core';
import { IxIconButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxIconButton],
  templateUrl: './button-with-icon.html',
  styleUrls: ['./button-with-icon.css'],
})
export default class ButtonWithIcon {}
```

#### button-with-icon.html
```html
<div>
  <ix-icon-button icon="info" variant="primary"></ix-icon-button>
  <ix-icon-button icon="info"></ix-icon-button>
  <ix-icon-button icon="info" variant="danger-primary"></ix-icon-button>
  <ix-icon-button variant="subtle-primary" icon="info"></ix-icon-button>
  <ix-icon-button variant="tertiary" icon="info"></ix-icon-button>
</div>

<div>
  <ix-icon-button icon="info" oval variant="primary"></ix-icon-button>
  <ix-icon-button icon="info" oval></ix-icon-button>
  <ix-icon-button icon="info" oval variant="danger-primary"></ix-icon-button>
  <ix-icon-button variant="subtle-primary" icon="info" oval></ix-icon-button>
  <ix-icon-button variant="tertiary" icon="info" oval></ix-icon-button>
</div>

<div>
  <ix-icon-button icon="info" size="12"></ix-icon-button>
  <ix-icon-button icon="info" size="16"></ix-icon-button>
  <ix-icon-button icon="info" size="24"></ix-icon-button>
</div>
```

#### button-with-icon.css
```css
body {
  display: flex;
  flex-direction: column;
}

div,
ix-icon-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### button-with-icon.vue
```vue
<script setup lang="ts">
import { iconInfo } from '@siemens/ix-icons/icons';
import { IxIconButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-with-icon.css"></style>

<template>
  <div>
    <IxIconButton :icon="iconInfo" variant="primary"></IxIconButton>
    <IxIconButton :icon="iconInfo"></IxIconButton>
    <IxIconButton :icon="iconInfo" variant="danger-primary"></IxIconButton>
    <IxIconButton variant="subtle-primary" :icon="iconInfo"></IxIconButton>
    <IxIconButton variant="tertiary" :icon="iconInfo"></IxIconButton>
  </div>

  <div>
    <IxIconButton :icon="iconInfo" oval variant="primary"></IxIconButton>
    <IxIconButton :icon="iconInfo" oval></IxIconButton>
    <IxIconButton :icon="iconInfo" oval variant="danger-primary"></IxIconButton>
    <IxIconButton variant="subtle-primary" :icon="iconInfo" oval></IxIconButton>
    <IxIconButton variant="tertiary" :icon="iconInfo" oval></IxIconButton>
  </div>

  <div>
    <IxIconButton :icon="iconInfo" size="12"></IxIconButton>
    <IxIconButton :icon="iconInfo" size="16"></IxIconButton>
    <IxIconButton :icon="iconInfo" size="24"></IxIconButton>
  </div>
</template>
```

#### button-with-icon.css
```css
body {
  display: flex;
  flex-direction: column;
}

div,
ix-icon-button {
  margin: 0.25rem;
}
```

## API for ix-icon-button

Figma main component ID: `270:941` (node ID of the matching main component in the IX Figma library; use it to map Figma design specs to this component).

### Properties

| Name | Description | Attribute | Type | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| disabled | { "Disabled" } | disabled | boolean | false |  |
| icon | { "Icon name" } | icon | string \| undefined |  |  |
| iconColor | { "Icon color as a CSS custom property name, for example\n\n`--si-sys-color-text-primary`." } | icon-color | string \| undefined |  | Breaking change in v6.0.0: Requires the full CSS custom property name |
| loading | { "Loading button" } | loading | boolean | false |  |
| oval | { "Button in oval shape" } | oval | boolean | false |  |
| size | { "Size of icon in button.\n\n`12` and `16` shrink the control. `20` and `24` keep a 32×32 control.\n\nDefaults to `20`." } | size | "12" \| "16" \| "20" \| "24" | '20' | Breaking change in v6.0.0: Default changed to 20 |
| type | { "Type of the button" } | type | "button" \| "submit" | 'button' |  |
| variant | { "Variant of button" } | variant | "danger-primary" \| "danger-secondary" \| "danger-tertiary" \| "primary" \| "secondary" \| "subtle-primary" \| "subtle-secondary" \| "subtle-tertiary" \| "tertiary" | 'subtle-primary' |  |
