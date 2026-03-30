# Content header - Code

> Code examples and API documentation for the ix-content-header

# Content header - Code

## Basic

### React Examples

#### content-header.tsx
```tsx
import { IxButton, IxContentHeader } from '@siemens/ix-react';

export default () => {
  return (
    <IxContentHeader
      has-back-button
      header-title="Content title"
      header-subtitle="Subtitle"
    >
      <IxButton variant="tertiary">Button1</IxButton>
      <IxButton variant="tertiary">Button2</IxButton>
      <IxButton variant="tertiary">Button3</IxButton>
    </IxContentHeader>
  );
};
```

### Angular Examples

#### content-header.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './content-header.html',
})
export default class ContentHeader {}
```

#### content-header.html
```html
<ix-content-header
  hasBackButton
  headerTitle="Content title"
  headerSubtitle="Subtitle"
>
  <ix-button variant="tertiary">Button1</ix-button>
  <ix-button variant="tertiary">Button2</ix-button>
  <ix-button variant="tertiary">Button3</ix-button>
</ix-content-header>
```

### Angular Standalone Examples

#### content-header.ts
```ts
import { Component } from '@angular/core';
import { IxContentHeader, IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxContentHeader, IxButton],
  templateUrl: './content-header.html',
})
export default class ContentHeader {}
```

#### content-header.html
```html
<ix-content-header
  hasBackButton
  headerTitle="Content title"
  headerSubtitle="Subtitle"
>
  <ix-button variant="tertiary">Button1</ix-button>
  <ix-button variant="tertiary">Button2</ix-button>
  <ix-button variant="tertiary">Button3</ix-button>
</ix-content-header>
```

### Vue Examples

#### content-header.vue
```vue
<script setup lang="ts">
import { IxButton, IxContentHeader } from '@siemens/ix-vue';
</script>

<template>
  <IxContentHeader
    has-back-button
    header-title="Content title"
    header-subtitle="Subtitle"
  >
    <IxButton variant="tertiary">Button1</IxButton>
    <IxButton variant="tertiary">Button2</IxButton>
    <IxButton variant="tertiary">Button3</IxButton>
  </IxContentHeader>
</template>
```

## No back button

### React Examples

#### content-header-no-back.tsx
```tsx
import {
  iconContextMenu,
  iconPen,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import { IxContentHeader, IxIconButton } from '@siemens/ix-react';

export default () => {
  return (
    <IxContentHeader
      variant="subtle-primary"
      header-title="Content title"
      header-subtitle="Subtitle"
    >
      <IxIconButton icon={iconPen} variant="tertiary">
        Button1
      </IxIconButton>
      <IxIconButton icon={iconTrashcan} variant="tertiary">
        Button2
      </IxIconButton>
      <IxIconButton icon={iconContextMenu} variant="tertiary">
        Button3
      </IxIconButton>
    </IxContentHeader>
  );
};
```

### Angular Examples

#### content-header-no-back.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './content-header-no-back.html',
})
export default class ContentHeaderNoBack {}
```

#### content-header-no-back.html
```html
<ix-content-header
  variant="subtle-primary"
  headerTitle="Content title"
  headerSubtitle="Subtitle"
>
  <ix-icon-button icon="pen" variant="tertiary"> Button1 </ix-icon-button>
  <ix-icon-button icon="trashcan" variant="tertiary">
    Button2
  </ix-icon-button>
  <ix-icon-button icon="context-menu" variant="tertiary">
    Button3
  </ix-icon-button>
</ix-content-header>
```

### Angular Standalone Examples

#### content-header-no-back.ts
```ts
import { Component } from '@angular/core';
import { IxContentHeader, IxIconButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxContentHeader, IxIconButton],
  templateUrl: './content-header-no-back.html',
})
export default class ContentHeaderNoBack {}
```

#### content-header-no-back.html
```html
<ix-content-header
  variant="subtle-primary"
  headerTitle="Content title"
  headerSubtitle="Subtitle"
>
  <ix-icon-button icon="pen" variant="tertiary"> Button1 </ix-icon-button>
  <ix-icon-button icon="trashcan" variant="tertiary">
    Button2
  </ix-icon-button>
  <ix-icon-button icon="context-menu" variant="tertiary">
    Button3
  </ix-icon-button>
</ix-content-header>
```

### Vue Examples

#### content-header-no-back.vue
```vue
<script setup lang="ts">
import {
  iconContextMenu,
  iconPen,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import { IxContentHeader, IxIconButton } from '@siemens/ix-vue';
</script>

<template>
  <IxContentHeader
    variant="subtle-primary"
    header-title="Content title"
    header-subtitle="Subtitle"
  >
    <IxIconButton :icon="iconPen" variant="tertiary">
      Button1
    </IxIconButton>
    <IxIconButton :icon="iconTrashcan" variant="tertiary">
      Button2
    </IxIconButton>
    <IxIconButton :icon="iconContextMenu" variant="tertiary">
      Button3
    </IxIconButton>
  </IxContentHeader>
</template>
```

## With header slot

### React Examples

#### content-header-with-slot.tsx
```tsx
import { IxButton, IxContentHeader, IxPill } from '@siemens/ix-react';
import { iconInfo } from '@siemens/ix-icons/icons';
import './content-header-with-slot.scoped.css';

export default () => {
  return (
    <IxContentHeader
      hasBackButton
      headerTitle="Content title"
      headerSubtitle="Subtitle"
    >
      <IxPill slot="header" icon={iconInfo} className="margin-top">
        Label
      </IxPill>
      <IxButton variant='tertiary'>Button1</IxButton>
      <IxButton variant='tertiary'>Button2</IxButton>
      <IxButton variant='tertiary'>Button3</IxButton>
    </IxContentHeader>
  );
};
```

#### content-header-with-slot.scoped.css
```css
.margin-top {
  margin-top: 0.375rem;
}
```

### Angular Examples

#### content-header-with-slot.ts
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './content-header-with-slot.html',
  styleUrls: ['./content-header-with-slot.css'],
  standalone: false,
})
export default class ContentHeaderWithSlot {}
```

#### content-header-with-slot.html
```html
<ix-content-header
  has-back-button
  header-title="Content title"
  header-subtitle="Subtitle"
>
  <ix-pill slot="header" icon="info" class="margin-top">Label</ix-pill>
  <ix-button variant="tertiary">Button1</ix-button>
  <ix-button variant="tertiary">Button2</ix-button>
  <ix-button variant="tertiary">Button3</ix-button>
</ix-content-header>
```

#### content-header-with-slot.css
```css
.margin-top {
  margin-top: 0.375rem;
}
```

### Angular Standalone Examples

#### content-header-with-slot.ts
```ts
import { Component } from '@angular/core';
import {
  IxButton,
  IxContentHeader,
  IxPill,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxContentHeader, IxPill, IxButton],
  templateUrl: './content-header-with-slot.html',
  styleUrls: ['./content-header-with-slot.css'],
})
export default class ContentHeaderWithSlot {}
```

#### content-header-with-slot.html
```html
<ix-content-header
  has-back-button
  header-title="Content title"
  header-subtitle="Subtitle"
>
  <ix-pill slot="header" icon="info" class="margin-top">Label</ix-pill>
  <ix-button variant="tertiary">Button1</ix-button>
  <ix-button variant="tertiary">Button2</ix-button>
  <ix-button variant="tertiary">Button3</ix-button>
</ix-content-header>
```

#### content-header-with-slot.css
```css
.margin-top {
  margin-top: 0.375rem;
}
```

### Vue Examples

#### content-header-with-slot.vue
```vue
<script setup lang="ts">
import { IxButton, IxContentHeader, IxPill } from '@siemens/ix-vue';
import { iconInfo } from '@siemens/ix-icons/icons';
</script>

<style scoped src="./content-header-with-slot.css"></style>

<template>
  <IxContentHeader has-back-button header-title="Content title" header-subtitle="Subtitle">
    <IxPill slot="header" :icon="iconInfo" class="margin-top">Label</IxPill>
    <IxButton variant="tertiary">Button1</IxButton>
    <IxButton variant="tertiary">Button2</IxButton>
    <IxButton variant="tertiary">Button3</IxButton>
  </IxContentHeader>
</template>
```

#### content-header-with-slot.css
```css
.margin-top {
  margin-top: 0.375rem;
}
```

## API for ix-content-header

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| hasBackButton | Display a back button | has-back-button | boolean | false |
| headerSubtitle | Subtitle of Header | header-subtitle | string \| undefined | undefined |
| headerTitle | Title of Header | header-title | string \| undefined |  |
| variant | Variant of content header | variant | "primary" \| "secondary" | 'primary' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| backButtonClick | Triggered when back button is clicked | backButtonClick | void |

### Slot

| Name | Description |
| --- | --- |
|  | { `Default slot for action buttons or other content` } |
| header | { `Content to be placed in the header area next to the title` } |
