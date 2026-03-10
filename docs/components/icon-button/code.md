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

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| a11yLabel | Accessibility label for the icon button Will be set as aria-label on the nested HTML button element | a11y-label | string \| undefined |  |
| disabled | Disabled | disabled | boolean | false |
| icon | Icon name | icon | string \| undefined |  |
| iconColor | Color of icon in button | icon-color | string \| undefined |  |
| loading | Loading button | loading | boolean | false |
| oval | Button in oval shape | oval | boolean | false |
| size | Size of icon in button | size | "12" \| "16" \| "24" | '24' |
| type | Type of the button | type | "button" \| "submit" | 'button' |
| variant | Variant of button | variant | "danger-primary" \| "danger-secondary" \| "danger-tertiary" \| "primary" \| "secondary" \| "subtle-primary" \| "subtle-secondary" \| "subtle-tertiary" \| "tertiary" | 'subtle-primary' |
