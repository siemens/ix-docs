# Popover news - Code

> Code examples and API documentation for the ix-menu-about-news

# Popover news - Code

## Basic

### React Examples

#### popover-news.tsx
```tsx
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
  IxMenuAboutNews,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplication>
      <IxApplicationHeader>
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuAbout>
          <IxMenuAboutItem label="Example"> </IxMenuAboutItem>
        </IxMenuAbout>
        <IxMenuAboutNews label="Test" show about-item-label="Example">
          Test
        </IxMenuAboutNews>
      </IxMenu>
    </IxApplication>
  );
};
```

### Angular Examples

#### popover-news.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './popover-news.html',
})
export default class PopoverNews {}
```

#### popover-news.html
```html
<ix-application>
  <ix-application-header>
    <div class="placeholder-logo" slot="logo"></div>
  </ix-application-header>
  <ix-menu>
    <ix-menu-about>
      <ix-menu-about-item label="Example"> </ix-menu-about-item>
    </ix-menu-about>
    <ix-menu-about-news label="Test" show about-item-label="Example">
      Test
    </ix-menu-about-news>
  </ix-menu>
</ix-application>
```

### Angular Standalone Examples

#### popover-news.ts
```ts
import { Component } from '@angular/core';
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
  IxMenuAboutNews,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxMenu,
    IxMenuAbout,
    IxMenuAboutItem,
    IxMenuAboutNews,
  ],
  templateUrl: './popover-news.html',
})
export default class PopoverNews {}
```

#### popover-news.html
```html
<ix-application>
  <ix-application-header>
    <div class="placeholder-logo" slot="logo"></div>
  </ix-application-header>
  <ix-menu>
    <ix-menu-about>
      <ix-menu-about-item label="Example"> </ix-menu-about-item>
    </ix-menu-about>
    <ix-menu-about-news label="Test" show about-item-label="Example">
      Test
    </ix-menu-about-news>
  </ix-menu>
</ix-application>
```

### Vue Examples

#### popover-news.vue
```vue
<script setup lang="ts">
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
  IxMenuAboutNews,
} from '@siemens/ix-vue';
</script>

<template>
  <IxApplication>
    <IxApplicationHeader>
      <div className="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>
    <IxMenu>
      <IxMenuAbout>
        <IxMenuAboutItem label="Example"> </IxMenuAboutItem>
      </IxMenuAbout>
      <IxMenuAboutNews label="Test" show about-item-label="Example">
        Test
      </IxMenuAboutNews>
    </IxMenu>
  </IxApplication>
</template>
```

## API for ix-menu-about-news

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| aboutItemLabel | Subtitle of the about news | about-item-label | string \| undefined |  |
| i18nShowMore | i18n label for 'Show more' button | i18n-show-more | string | 'Show more' |
| label | Title of the about news | label | string \| undefined |  |
| show | Show about news | show | boolean | false |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| closePopover | Popover closed | closePopover | void |
| showMore | Show More button is pressed | showMore | MouseEvent |
