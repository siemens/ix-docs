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
        <IxIconButton variant="tertiary" id="context-menu" slot="header-actions" icon={iconContextMenu} iconColor="color-primary"></IxIconButton>
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
      <ix-icon-button variant="tertiary" id="context-menu" slot="header-actions" icon="context-menu" icon-color="color-primary"></ix-icon-button>
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
      <ix-icon-button variant="tertiary" id="context-menu" slot="header-actions" icon="context-menu" icon-color="color-primary"></ix-icon-button>
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
    <IxIconButton variant="tertiary" id="context-menu" slot="header-actions" :icon="iconContextMenu" iconColor="color-primary"></IxIconButton>
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
      <IxBlind icon={iconBulb} label="Example" sublabel="sublabel">
        <div>Filled content</div>
      </IxBlind>
      <IxBlind
        variant="outline"
        icon={iconBulb}
        label="Outline"
        sublabel="sublabel"
      >
        <div>Outline content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant={'alarm'}
        label="Alarm"
        sublabel="sublabel"
      >
        <div>Alarm content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant={'critical'}
        label="Critical"
        sublabel="sublabel"
      >
        <div>Critical content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant={'warning'}
        label="Warning"
        sublabel="sublabel"
      >
        <div>Warning content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant={'info'}
        label="Info"
        sublabel="sublabel"
      >
        <div>Info content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant={'success'}
        label="Success"
        sublabel="sublabel"
      >
        <div>Success content</div>
      </IxBlind>
      <IxBlind
        icon={iconBulb}
        variant={'neutral'}
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
<ix-blind icon="bulb" label="Example" sublabel="sublabel">
  <div>Filled content</div>
</ix-blind>
<ix-blind variant="outline" icon="bulb" label="Outline" sublabel="sublabel">
  <div>Outline content</div>
</ix-blind>
<ix-blind icon="bulb" variant="alarm" label="Alarm" sublabel="sublabel">
  <div>Alarm content</div>
</ix-blind>
<ix-blind icon="bulb" variant="critical" label="Critical" sublabel="sublabel">
  <div>Critical content</div>
</ix-blind>
<ix-blind icon="bulb" variant="warning" label="Warning" sublabel="sublabel">
  <div>Warning content</div>
</ix-blind>
<ix-blind icon="bulb" variant="info" label="Info" sublabel="sublabel">
  <div>Info content</div>
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
<ix-blind icon="bulb" label="Example" sublabel="sublabel">
  <div>Filled content</div>
</ix-blind>
<ix-blind variant="outline" icon="bulb" label="Outline" sublabel="sublabel">
  <div>Outline content</div>
</ix-blind>
<ix-blind icon="bulb" variant="alarm" label="Alarm" sublabel="sublabel">
  <div>Alarm content</div>
</ix-blind>
<ix-blind icon="bulb" variant="critical" label="Critical" sublabel="sublabel">
  <div>Critical content</div>
</ix-blind>
<ix-blind icon="bulb" variant="warning" label="Warning" sublabel="sublabel">
  <div>Warning content</div>
</ix-blind>
<ix-blind icon="bulb" variant="info" label="Info" sublabel="sublabel">
  <div>Info content</div>
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
  <IxBlind :icon="iconBulb" label="Example" sublabel="sublabel">
    <div>Filled content</div>
  </IxBlind>
  <IxBlind
    variant="outline"
    :icon="iconBulb"
    label="Outline"
    sublabel="sublabel"
  >
    <div>Outline content</div>
  </IxBlind>
  <IxBlind :icon="iconBulb" variant="alarm" label="Alarm" sublabel="sublabel">
    <div>Alarm content</div>
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
    variant="warning"
    label="Warning"
    sublabel="sublabel"
  >
    <div>Warning content</div>
  </IxBlind>
  <IxBlind :icon="iconBulb" variant="info" label="Info" sublabel="sublabel">
    <div>Info content</div>
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

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| collapsed | Collapsed state | collapsed | boolean | false |
| icon | Optional icon to be displayed next to the header label | icon | string \| undefined |  |
| label | Label of blind | label | string \| undefined |  |
| sublabel | Secondary label inside blind header | sublabel | string \| undefined |  |
| variant | Blind variant | variant | "alarm" \| "critical" \| "filled" \| "info" \| "neutral" \| "outline" \| "primary" \| "success" \| "warning" | 'filled' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| collapsedChange | Collapsed state changed | collapsedChange | boolean |
