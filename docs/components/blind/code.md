# Blind - Code

> Code examples and API documentation for the ix-blind

# Blind - Code

## Basic

### React Examples

#### blind.tsx
```tsx
import './blind.scoped.css';

import { IxBlind } from '@siemens/ix-react';

export default () => {
  return (
    <IxBlind label="Example">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </IxBlind>
  );
};
```

#### blind.scoped.css
```css
ix-blind {
  margin: 0.5rem 0;
}
```

### Angular Examples

#### blind.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './blind.html',
  styleUrls: ['./blind.css'],
})
export default class Blind {}
```

#### blind.html
```html
<ix-blind label="Example">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</ix-blind>
```

#### blind.css
```css
ix-blind {
  margin: 0.5rem 0;
}
```

### Angular Standalone Examples

#### blind.ts
```ts
import { Component } from '@angular/core';
import { IxBlind } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBlind],
  templateUrl: './blind.html',
  styleUrls: ['./blind.css'],
})
export default class Blind {}
```

#### blind.html
```html
<ix-blind label="Example">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</ix-blind>
```

#### blind.css
```css
ix-blind {
  margin: 0.5rem 0;
}
```

### Vue Examples

#### blind.vue
```vue
<script setup lang="ts">
import { IxBlind } from '@siemens/ix-vue';
</script>

<style scoped src="./blind.css"></style>

<template>
  <IxBlind label="Example">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </IxBlind>
</template>
```

#### blind.css
```css
ix-blind {
  margin: 0.5rem 0;
}
```

## Header actions

Example is supported since version 1.5.0

### React Examples

#### blind-header-actions.tsx
```tsx
import {
  iconContextMenu,
  iconInfo,
  iconRename,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import './blind-header-actions.scoped.css';

import {
  IxBlind,
  IxDropdown,
  IxDropdownItem,
  IxIconButton,
} from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxBlind label="Example" icon={iconInfo}>
        <IxIconButton
          variant="tertiary"
          id="context-menu"
          slot="header-actions"
          icon={iconContextMenu}
          iconColor="--si-sys-color-text-accent"
        ></IxIconButton>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </IxBlind>
      <IxDropdown trigger={'context-menu'}>
        <IxDropdownItem icon={iconRename}>Rename...</IxDropdownItem>
        <IxDropdownItem icon={iconTrashcan}>Delete</IxDropdownItem>
      </IxDropdown>
    </>
  );
};
```

#### blind-header-actions.scoped.css
```css
ix-blind {
  margin: 0.5rem 0;
}
```

### Angular Examples

#### blind-header-actions.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-blind label="Example" icon="info">
      <ix-icon-button
        variant="tertiary"
        id="context-menu"
        slot="header-actions"
        icon="context-menu"
        iconColor="--si-sys-color-text-accent"
      ></ix-icon-button>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </ix-blind>
    <ix-dropdown trigger="context-menu">
      <ix-dropdown-item icon="rename">Rename...</ix-dropdown-item>
      <ix-dropdown-item icon="trashcan">Delete...</ix-dropdown-item>
    </ix-dropdown>
  `,
  styleUrls: ['./blind-header-actions.css'],
})
export default class Blind {}
```

#### blind-header-actions.css
```css
ix-blind {
  margin: 0.5rem 0;
}
```

### Angular Standalone Examples

#### blind-header-actions.ts
```ts
import { Component } from '@angular/core';
import {
  IxBlind,
  IxIconButton,
  IxDropdown,
  IxDropdownItem,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBlind, IxIconButton, IxDropdown, IxDropdownItem],
  template: `
    <ix-blind label="Example" icon="info">
      <ix-icon-button
        variant="tertiary"
        id="context-menu"
        slot="header-actions"
        icon="context-menu"
        iconColor="--si-sys-color-text-accent"
      ></ix-icon-button>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </ix-blind>
    <ix-dropdown trigger="context-menu">
      <ix-dropdown-item icon="rename">Rename...</ix-dropdown-item>
      <ix-dropdown-item icon="trashcan">Delete...</ix-dropdown-item>
    </ix-dropdown>
  `,
  styleUrls: ['./blind-header-actions.css'],
})
export default class Blind {}
```

#### blind-header-actions.css
```css
ix-blind {
  margin: 0.5rem 0;
}
```

### Vue Examples

#### blind-header-actions.vue
```vue
<script setup lang="ts">
import {
  iconContextMenu,
  iconInfo,
  iconRename,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import { IxBlind, IxDropdown, IxIconButton } from '@siemens/ix-vue';
</script>

<style scoped src="./blind-header-actions.css"></style>

<template>
  <IxBlind label="Example" :icon="iconInfo">
    <IxIconButton
      variant="tertiary"
      id="context-menu"
      slot="header-actions"
      :icon="iconContextMenu"
      icon-color="--si-sys-color-text-accent"
    ></IxIconButton>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </IxBlind>
  <IxDropdown trigger="context-menu">
    <IxDropdownItem label="Rename..." :icon="iconRename"></IxDropdownItem>
    <IxDropdownItem label="trashcan" :icon="iconTrashcan"></IxDropdownItem>
  </IxDropdown>
</template>
```

#### blind-header-actions.css
```css
ix-blind {
  margin: 0.5rem 0;
}
```

## Variants

Example is supported since version 2.0.0

### React Examples

#### blind-variants.tsx
```tsx
import { iconBulb } from '@siemens/ix-icons/icons';
import './blind-variants.scoped.css';

import { IxBlind } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxBlind
        outline={false}
        icon={iconBulb}
        label="Filled"
        sublabel="sublabel"
      >
        <div>Filled content</div>
      </IxBlind>
      <IxBlind icon={iconBulb} label="Outline" sublabel="sublabel">
        <div>Outline content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="danger"
        label="Danger"
        sublabel="sublabel"
      >
        <div>Danger content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="warning"
        label="Warning"
        sublabel="sublabel"
      >
        <div>Warning content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="caution"
        label="Caution"
        sublabel="sublabel"
      >
        <div>Caution content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="information"
        label="Information"
        sublabel="sublabel"
      >
        <div>Information content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="accent"
        label="Accent"
        sublabel="sublabel"
      >
        <div>Accent content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="critical"
        label="Critical"
        sublabel="sublabel"
      >
        <div>Critical content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="success"
        label="Success"
        sublabel="sublabel"
      >
        <div>Success content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant="neutral"
        label="Neutral"
        sublabel="sublabel"
      >
        <div>Neutral content</div>
      </IxBlind>
    </>
  );
};
```

#### blind-variants.scoped.css
```css
ix-blind {
  margin: 0.5rem 0;
}
```

### Angular Examples

#### blind-variants.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './blind-variants.html',
  styleUrls: ['./blind-variants.css'],
})
export default class Blind {}
```

#### blind-variants.html
```html
<ix-blind outline="false" icon="bulb" label="Filled" sublabel="sublabel">
  <div>Filled content</div>
</ix-blind>
<ix-blind icon="bulb" label="Outline" sublabel="sublabel">
  <div>Outline content</div>
</ix-blind>
<ix-blind icon="bulb" variant="danger" label="Danger" sublabel="sublabel">
  <div>Danger content</div>
</ix-blind>
<ix-blind icon="bulb" variant="warning" label="Warning" sublabel="sublabel">
  <div>Warning content</div>
</ix-blind>
<ix-blind icon="bulb" variant="caution" label="Caution" sublabel="sublabel">
  <div>Caution content</div>
</ix-blind>
<ix-blind
  icon="bulb"
  variant="information"
  label="Information"
  sublabel="sublabel"
>
  <div>Information content</div>
</ix-blind>
<ix-blind icon="bulb" variant="accent" label="Accent" sublabel="sublabel">
  <div>Accent content</div>
</ix-blind>
<ix-blind icon="bulb" variant="critical" label="Critical" sublabel="sublabel">
  <div>Critical content</div>
</ix-blind>
<ix-blind icon="bulb" variant="success" label="Success" sublabel="sublabel">
  <div>Success content</div>
</ix-blind>
<ix-blind icon="bulb" variant="neutral" label="Neutral" sublabel="sublabel">
  <div>Neutral content</div>
</ix-blind>
```

#### blind-variants.css
```css
ix-blind {
  margin: 0.5rem 0;
}
```

### Angular Standalone Examples

#### blind-variants.ts
```ts
import { Component } from '@angular/core';
import { IxBlind } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBlind],
  templateUrl: './blind-variants.html',
  styleUrls: ['./blind-variants.css'],
})
export default class Blind {}
```

#### blind-variants.html
```html
<ix-blind outline="false" icon="bulb" label="Filled" sublabel="sublabel">
  <div>Filled content</div>
</ix-blind>
<ix-blind icon="bulb" label="Outline" sublabel="sublabel">
  <div>Outline content</div>
</ix-blind>
<ix-blind icon="bulb" variant="danger" label="Danger" sublabel="sublabel">
  <div>Danger content</div>
</ix-blind>
<ix-blind icon="bulb" variant="warning" label="Warning" sublabel="sublabel">
  <div>Warning content</div>
</ix-blind>
<ix-blind icon="bulb" variant="caution" label="Caution" sublabel="sublabel">
  <div>Caution content</div>
</ix-blind>
<ix-blind
  icon="bulb"
  variant="information"
  label="Information"
  sublabel="sublabel"
>
  <div>Information content</div>
</ix-blind>
<ix-blind icon="bulb" variant="accent" label="Accent" sublabel="sublabel">
  <div>Accent content</div>
</ix-blind>
<ix-blind icon="bulb" variant="critical" label="Critical" sublabel="sublabel">
  <div>Critical content</div>
</ix-blind>
<ix-blind icon="bulb" variant="success" label="Success" sublabel="sublabel">
  <div>Success content</div>
</ix-blind>
<ix-blind icon="bulb" variant="neutral" label="Neutral" sublabel="sublabel">
  <div>Neutral content</div>
</ix-blind>
```

#### blind-variants.css
```css
ix-blind {
  margin: 0.5rem 0;
}
```

### Vue Examples

#### blind-variants.vue
```vue
<script setup lang="ts">
import { iconBulb } from '@siemens/ix-icons/icons';
import { IxBlind } from '@siemens/ix-vue';
</script>

<style scoped src="./blind-variants.css"></style>

<template>
  <IxBlind :outline="false" :icon="iconBulb" label="Filled" sublabel="sublabel">
    <div>Filled content</div>
  </IxBlind>
  <IxBlind :icon="iconBulb" label="Outline" sublabel="sublabel">
    <div>Outline content</div>
  </IxBlind>
  <IxBlind :icon="iconBulb" variant="danger" label="Danger" sublabel="sublabel">
    <div>Danger content</div>
  </IxBlind>
  <IxBlind
    :icon="iconBulb"
    variant="warning"
    label="Warning"
    sublabel="sublabel"
  >
    <div>Warning content</div>
  </IxBlind>
  <IxBlind
    :icon="iconBulb"
    variant="caution"
    label="Caution"
    sublabel="sublabel"
  >
    <div>Caution content</div>
  </IxBlind>
  <IxBlind
    :icon="iconBulb"
    variant="information"
    label="Information"
    sublabel="sublabel"
  >
    <div>Information content</div>
  </IxBlind>
  <IxBlind :icon="iconBulb" variant="accent" label="Accent" sublabel="sublabel">
    <div>Accent content</div>
  </IxBlind>
  <IxBlind
    :icon="iconBulb"
    variant="critical"
    label="Critical"
    sublabel="sublabel"
  >
    <div>Critical content</div>
  </IxBlind>
  <IxBlind
    :icon="iconBulb"
    variant="success"
    label="Success"
    sublabel="sublabel"
  >
    <div>Success content</div>
  </IxBlind>
  <IxBlind
    :icon="iconBulb"
    variant="neutral"
    label="Neutral"
    sublabel="sublabel"
  >
    <div>Neutral content</div>
  </IxBlind>
</template>
```

#### blind-variants.css
```css
ix-blind {
  margin: 0.5rem 0;
}
```

## API for ix-blind

### Properties

| Name | Description | Attribute | Type | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| collapsed | { "Collapsed state" } | collapsed | boolean | false |  |
| icon | { "Optional icon to be displayed next to the header label" } | icon | string \| undefined |  |  |
| label | { "Label of blind" } | label | string \| undefined |  |  |
| outline | { "Show the blind with outline chrome.\n\nWhen omitted, outline chrome is used (`true`).\n\nWhen `false`, uses a filled surface.\n\nA non-base status shows a left status strip." } | outline | boolean \| undefined |  | Breaking change in v6.0.0: Replaces the outline and filled values of variant |
| sublabel | { "Secondary label inside blind header" } | sublabel | string \| undefined |  |  |
| variant | { "Blind status variant" } | variant | "accent" \| "base" \| "caution" \| "critical" \| "danger" \| "information" \| "neutral" \| "success" \| "warning" | 'base' | Breaking change in v6.0.0: Status variant values renamed (default is now base), outline and filled replaced by the outline property |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| collapsedChange | { "Collapsed state changed" } | collapsedChange | boolean |

### Slot

| Name | Description |
| --- | --- |
| default | { "Content shown when the blind is expanded." } |
| custom-header | { "Custom header content replacing the label and icon." } |
| header-actions | { "Additional actions displayed in the header." } |
