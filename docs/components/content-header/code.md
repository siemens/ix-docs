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
      hasBackButton
      headerTitle="Content title"
      headerSubtitle="Subtitle"
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
      headerTitle="Content title"
      headerSubtitle="Subtitle"
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
  hasBackButton
  headerTitle="Content title"
  headerSubtitle="Subtitle"
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
  hasBackButton
  headerTitle="Content title"
  headerSubtitle="Subtitle"
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

## Truncated text

Titles and subtitles wrap by default when space is limited. Set `textOverflow` to `ellipsis` when the header must retain a compact height.

### React Examples

#### content-header-text-overflow.tsx
```tsx
import { IxButton, IxContentHeader } from '@siemens/ix-react';

export default () => {
  return (
    <IxContentHeader
      hasBackButton
      headerTitle="Content title that remains compact when horizontal space is limited"
      headerSubtitle="Supporting context is truncated independently when space is limited"
      textOverflow="ellipsis"
    >
      <IxButton variant="tertiary">Button1</IxButton>
      <IxButton variant="tertiary">Button2</IxButton>
      <IxButton variant="tertiary">Button3</IxButton>
    </IxContentHeader>
  );
};
```

### Angular Examples

#### content-header-text-overflow.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './content-header-text-overflow.html',
})
export default class ContentHeaderTextOverflow {}
```

#### content-header-text-overflow.html
```html
<ix-content-header
  hasBackButton
  headerTitle="Content title that remains compact when horizontal space is limited"
  headerSubtitle="Supporting context is truncated independently when space is limited"
  textOverflow="ellipsis"
>
  <ix-button variant="tertiary">Button1</ix-button>
  <ix-button variant="tertiary">Button2</ix-button>
  <ix-button variant="tertiary">Button3</ix-button>
</ix-content-header>
```

### Angular Standalone Examples

#### content-header-text-overflow.ts
```ts
import { Component } from '@angular/core';
import { IxButton, IxContentHeader } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxContentHeader, IxButton],
  templateUrl: './content-header-text-overflow.html',
})
export default class ContentHeaderTextOverflow {}
```

#### content-header-text-overflow.html
```html
<ix-content-header
  hasBackButton
  headerTitle="Content title that remains compact when horizontal space is limited"
  headerSubtitle="Supporting context is truncated independently when space is limited"
  textOverflow="ellipsis"
>
  <ix-button variant="tertiary">Button1</ix-button>
  <ix-button variant="tertiary">Button2</ix-button>
  <ix-button variant="tertiary">Button3</ix-button>
</ix-content-header>
```

### Vue Examples

#### content-header-text-overflow.vue
```vue
<script setup lang="ts">
import { IxButton, IxContentHeader } from '@siemens/ix-vue';
</script>

<template>
  <IxContentHeader
    has-back-button
    header-title="Content title that remains compact when horizontal space is limited"
    header-subtitle="Supporting context is truncated independently when space is limited"
    text-overflow="ellipsis"
  >
    <IxButton variant="tertiary">Button1</IxButton>
    <IxButton variant="tertiary">Button2</IxButton>
    <IxButton variant="tertiary">Button3</IxButton>
  </IxContentHeader>
</template>
```

## API for ix-content-header

### Properties

| Name | Description | Attribute | Type | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| ariaLabelMoreActions | { "Accessible label for the secondary actions overflow menu." } | aria-label-more-actions | string | 'More actions' |  |
| hasBackButton | { "Display a back button" } | has-back-button | boolean | false |  |
| headerSubtitle | { "Subtitle of Header" } | header-subtitle | string \| undefined | undefined |  |
| headerTitle | { "Title of Header" } | header-title | string \| undefined |  |  |
| textOverflow | { "Controls how the title and subtitle handle limited horizontal space.\n\nEllipsis visually truncates the text without adding a tooltip." } | text-overflow | "ellipsis" \| "wrap" | 'wrap' | Breaking change in v6.0.0: Text wraps by default instead of truncating, set ellipsis to restore truncation |
| variant | { "Variant of content header" } | variant | "primary" \| "secondary" | 'primary' |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| backButtonClick | { "Triggered when back button is clicked" } | backButtonClick | void |

### Slot

| Name | Description |
| --- | --- |
| default | { "Default slot for action buttons or other content" } |
| header | { "Content to be placed in the header area next to the title" } |
| secondary-actions | { "ix-button and ix-icon-button actions that collapse into a vertical overflow menu when space is limited. Provide an accessible name for icon-only actions." } |
