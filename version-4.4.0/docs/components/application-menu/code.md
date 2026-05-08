# Application menu - Code

> Code examples and API documentation for the ix-menu-settings, ix-menu, ix-menu-item, ix-menu-category, ix-menu-avatar, ix-menu-avatar-item

# Application menu - Code

## Basic

### React Examples

#### vertical-tabs.tsx
```tsx
import { iconGlobe, iconHome, iconStar } from '@siemens/ix-icons/icons';
import './vertical-tabs.scoped.css';

import { IxMenu, IxMenuItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxMenu>
      <IxMenuItem home icon={iconHome}>
        Home
      </IxMenuItem>
      <IxMenuItem icon={iconGlobe}>Normal tab</IxMenuItem>
      <IxMenuItem icon={iconStar} disabled>
        Disabled tab
      </IxMenuItem>
      <IxMenuItem icon={iconStar}>With other icon</IxMenuItem>
      <IxMenuItem icon={iconGlobe} style={{ display: 'none' }}>
        Should not be visible
      </IxMenuItem>
    </IxMenu>
  );
};
```

#### vertical-tabs.scoped.css
```css
ix-menu {
  width: 100vw;
  height: 100vh;
}
```

### Angular Examples

#### vertical-tabs.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-menu>
      <ix-menu-item home-tab icon="home">Home</ix-menu-item>
      <ix-menu-item icon="globe">Normal tab</ix-menu-item>
      <ix-menu-item icon="star" disabled>Disabled tab</ix-menu-item>
      <ix-menu-item icon="star">With other icon</ix-menu-item>
      <ix-menu-item icon="globe" style="display: none">
        Should not be visible
      </ix-menu-item>
    </ix-menu>
  `,
  styleUrls: ['./vertical-tabs.css'],
})
export default class VerticalTabs {}
```

#### vertical-tabs.css
```css
ix-menu {
  width: 100vw;
  height: 100vh;
}
```

### Angular Standalone Examples

#### vertical-tabs.ts
```ts
import { Component } from '@angular/core';
import { IxMenu, IxMenuItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxMenu, IxMenuItem],
  template: `
    <ix-menu>
      <ix-menu-item home-tab icon="home">Home</ix-menu-item>
      <ix-menu-item icon="globe">Normal tab</ix-menu-item>
      <ix-menu-item icon="star" disabled>Disabled tab</ix-menu-item>
      <ix-menu-item icon="star">With other icon</ix-menu-item>
      <ix-menu-item icon="globe" style="display: none">
        Should not be visible
      </ix-menu-item>
    </ix-menu>
  `,
  styleUrls: ['./vertical-tabs.css'],
})
export default class VerticalTabs {}
```

#### vertical-tabs.css
```css
ix-menu {
  width: 100vw;
  height: 100vh;
}
```

### Vue Examples

#### vertical-tabs.vue
```vue
<script setup lang="ts">
import { iconGlobe, iconHome, iconStar } from '@siemens/ix-icons/icons';
import { IxMenu, IxMenuItem } from '@siemens/ix-vue';
</script>

<style scoped src="./vertical-tabs.css"></style>

<template>
  <IxMenu>
    <IxMenuItem home-tab :icon="iconHome">Home</IxMenuItem>
    <IxMenuItem :icon="iconGlobe">Normal tab</IxMenuItem>
    <IxMenuItem :icon="iconStar" disabled>Disabled tab</IxMenuItem>
    <IxMenuItem :icon="iconStar">With other icon</IxMenuItem>
    <IxMenuItem :icon="iconGlobe" style="display: none">
      Should not be visible
    </IxMenuItem>
  </IxMenu>
</template>
```

#### vertical-tabs.css
```css
ix-menu {
  width: 100vw;
  height: 100vh;
}
```

## 2nd navigation level

### React Examples

#### menu-category.tsx
```tsx
import { iconGlobe, iconHome, iconRocket } from '@siemens/ix-icons/icons';
import {
  IxApplication,
  IxMenu,
  IxMenuCategory,
  IxMenuItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplication>
      <IxMenu>
        <IxMenuItem home icon={iconHome}>
          Home
        </IxMenuItem>
        <IxMenuItem icon={iconGlobe}>Normal Tab</IxMenuItem>
        <IxMenuCategory label="Top level Category" icon={iconRocket}>
          <IxMenuItem icon={iconGlobe}>Nested Tab</IxMenuItem>
          <IxMenuItem icon={iconGlobe}>Nested Tab</IxMenuItem>
        </IxMenuCategory>
      </IxMenu>
    </IxApplication>
  );
};
```

### Angular Examples

#### menu-category.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './menu-category.html',
})
export default class MenuCategory {}
```

#### menu-category.html
```html
<ix-application>
  <ix-menu>
    <ix-menu-item home icon="home">Home</ix-menu-item>
    <ix-menu-item icon="globe">Normal Tab</ix-menu-item>
    <ix-menu-category label="Top level Category" icon="rocket">
      <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
      <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
    </ix-menu-category>
  </ix-menu>
</ix-application>
```

### Angular Standalone Examples

#### menu-category.ts
```ts
import { Component } from '@angular/core';
import {
  IxApplication,
  IxMenu,
  IxMenuItem,
  IxMenuCategory,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxApplication, IxMenu, IxMenuItem, IxMenuCategory],
  templateUrl: './menu-category.html',
})
export default class MenuCategory {}
```

#### menu-category.html
```html
<ix-application>
  <ix-menu>
    <ix-menu-item home icon="home">Home</ix-menu-item>
    <ix-menu-item icon="globe">Normal Tab</ix-menu-item>
    <ix-menu-category label="Top level Category" icon="rocket">
      <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
      <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
    </ix-menu-category>
  </ix-menu>
</ix-application>
```

### Vue Examples

#### menu-category.vue
```vue
<script setup lang="ts">
import { iconGlobe, iconHome, iconRocket } from '@siemens/ix-icons/icons';
import {
  IxApplication,
  IxMenu,
  IxMenuCategory,
  IxMenuItem,
} from '@siemens/ix-vue';
</script>

<template>
  <IxApplication>
    <IxMenu>
      <IxMenuItem home :icon="iconHome"> Home </IxMenuItem>
      <IxMenuItem :icon="iconGlobe">Normal Tab</IxMenuItem>
      <IxMenuCategory label="Top level Category" :icon="iconRocket">
        <IxMenuItem :icon="iconGlobe">Nested Tab</IxMenuItem>
        <IxMenuItem :icon="iconGlobe">Nested Tab</IxMenuItem>
      </IxMenuCategory>
    </IxMenu>
  </IxApplication>
</template>
```

## Bottom tabs

  Caution: Since the old implementation using the bottom
  property on menu items had some problems and will not work anymore, please use
  slot="bottom" instead.

### React Examples

#### menu-with-bottom-tabs.tsx
```tsx
import { iconGlobe, iconHome } from '@siemens/ix-icons/icons';
import { IxMenu, IxMenuItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxMenu>
      <IxMenuItem home icon={iconHome}>
        Home
      </IxMenuItem>
      <IxMenuItem icon={iconGlobe} slot="bottom">
        Bottom tab
      </IxMenuItem>
    </IxMenu>
  );
};
```

### Angular Examples

#### menu-with-bottom-tabs.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-menu>
      <ix-menu-item home-tab icon="home">Home</ix-menu-item>
      <ix-menu-item icon="info" slot="bottom">Bottom tab</ix-menu-item>
    </ix-menu>
  `,
})
export default class VerticalTabs {}
```

### Angular Standalone Examples

#### menu-with-bottom-tabs.ts
```ts
import { Component } from '@angular/core';
import { IxMenu, IxMenuItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxMenu, IxMenuItem],
  template: `
    <ix-menu>
      <ix-menu-item home-tab icon="home">Home</ix-menu-item>
      <ix-menu-item icon="info" slot="bottom">Bottom tab</ix-menu-item>
    </ix-menu>
  `,
})
export default class VerticalTabs {}
```

### Vue Examples

#### menu-with-bottom-tabs.vue
```vue
<script setup lang="ts">
import { iconGlobe, iconHome } from '@siemens/ix-icons/icons';
import { IxMenu, IxMenuItem } from '@siemens/ix-vue';
</script>

<template>
  <IxMenu>
    <IxMenuItem home-tab :icon="iconHome">Home</IxMenuItem>
    <IxMenuItem :icon="iconGlobe" slot="bottom">Bottom tab</IxMenuItem>
  </IxMenu>
</template>
```

## API for ix-menu-settings

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| activeTabLabel | Active tab | active-tab-label | string \| undefined |  |
| ariaLabelCloseButton | Aria label for close button | aria-label-close-button | string | 'Close Settings' |
| label | Label of first tab | label | string | 'Settings' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| close | Popover closed | close | CustomCloseEvent |
| tabChange | Active tab changed | tabChange | string |

## API for ix-menu

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| applicationDescription | Should only be set if you use ix-menu standalone | application-description | string | '' |
| applicationName | Should only be set if you use ix-menu standalone | application-name | string \| undefined |  |
| enableToggleTheme | Show toggle between light and dark variant. Only if the provided theme have implemented both! | enable-toggle-theme | boolean | false |
| expand | Toggle the expand state of the menu | expand | boolean | false |
| i18nCollapse | i18n label for 'Collapse' button | i18n-collapse | string | 'Collapse' |
| i18nExpand | i18n label for 'Expand' button | i18n-expand | string | ' Expand' |
| i18nExpandSidebar | Accessibility i18n label for the burger menu of the sidebar | i18n-expand-sidebar | string | 'Expand sidebar' |
| i18nLegal | i18n label for 'About & legal information' button | i18n-legal | string | 'About & legal information' |
| i18nSettings | i18n label for 'Settings' button | i18n-settings | string | 'Settings' |
| i18nToggleTheme | i18n label for 'Toggle theme' button | i18n-toggle-theme | string | 'Toggle theme' |
| pinned | Menu stays pinned to the left | pinned | boolean | false |
| showAbout | Is about tab visible | show-about | boolean | false |
| showSettings | Is settings tab visible | show-settings | boolean | false |
| startExpanded | If set the menu will be expanded initially. This will only take effect at the breakpoint 'lg'. | start-expanded | boolean | false |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| expandChange | Menu expanded | expandChange | boolean |
| mapExpandChange | Map Sidebar expanded | mapExpandChange | boolean |
| openAbout | Event emitted when the about button is clicked | openAbout | void |
| openAppSwitch | Event emitted when the app switch button is clicked | openAppSwitch | void |
| openSettings | Event emitted when the settings button is clicked | openSettings | void |

## API for ix-menu-item

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| active | State to display active | active | boolean | false |
| bottom | Caution: this is no longer working. Please use slot="bottom" instead. Place tab on bottom | bottom | boolean | false |
| disabled | Disable tab and remove event handlers | disabled | boolean | false |
| home | Move the Tab to a top position. | home | boolean | false |
| href | URL for the button link. When provided, the button will render as an anchor tag. | href | string \| undefined |  |
| icon | Name of the icon you want to display. Icon names can be resolved from the documentation [https://ix.siemens.io/docs/icon-library/icons](https://ix.siemens.io/docs/icon-library/icons) | icon | string \| undefined |  |
| label | Label of the menu item. Will also be used as tooltip text | label | string \| undefined |  |
| notifications | Show notification count on tab | notifications | number \| undefined |  |
| rel | Specifies the relationship between the current document and the linked document when href is provided. | rel | string \| undefined |  |
| target | Specifies where to open the linked document when href is provided. | target | "_blank" \| "_parent" \| "_self" \| "_top" \| undefined | '_self' |
| tooltipText | Will be shown as tooltip text, if not provided menu text content will be used. | tooltip-text | string \| undefined |  |

### Slot

| Name | Description |
| --- | --- |
| menu-item-label Custom label | { `` } |

## API for ix-menu-category

### Properties

| Name | Description | Attribute | Type |
| --- | --- | --- | --- |
| icon | Icon of the category | icon | string \| undefined |
| label | Display name of the category | label | string \| undefined |
| notifications | Show notification count on the category | notifications | number \| undefined |
| tooltipText | Will be shown as tooltip text, if not provided menu text content will be used. | tooltip-text | string \| undefined |
