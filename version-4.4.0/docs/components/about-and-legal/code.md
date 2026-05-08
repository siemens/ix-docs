# About and legal - Code

> Code examples and API documentation for the ix-menu-about, ix-menu-about-item

# About and legal - Code

## Basic

### React Examples

#### about-and-legal.tsx
```tsx
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
} from '@siemens/ix-react';
import { useLayoutEffect, useRef } from 'react';

export default () => {
  const ref = useRef<HTMLIxMenuElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (element) {
      element.toggleAbout(true);
    }
  }, []);

  return (
    <IxApplication>
      <IxApplicationHeader>
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>
      <IxMenu ref={ref}>
        <IxMenuAbout>
          <IxMenuAboutItem label="Tab 1">Content 1</IxMenuAboutItem>
          <IxMenuAboutItem label="Tab 2">Content 2</IxMenuAboutItem>
        </IxMenuAbout>
      </IxMenu>
    </IxApplication>
  );
};
```

### Angular Examples

#### about-and-legal.ts
```ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './about-and-legal.html',
})
export default class AboutAndLegal implements AfterViewInit {
  @ViewChild('menu', { read: ElementRef })
  menuRef!: ElementRef<HTMLIxMenuElement>;

  ngAfterViewInit() {
    const { nativeElement } = this.menuRef;
    nativeElement.toggleAbout(true);
  }
}
```

#### about-and-legal.html
```html
<ix-application>
  <ix-application-header>
    <div class="placeholder-logo" slot="logo"></div>
  </ix-application-header>
  <ix-menu #menu>
    <ix-menu-about>
      <ix-menu-about-item label="Tab 1">Content 1</ix-menu-about-item>
      <ix-menu-about-item label="Tab 2">Content 2</ix-menu-about-item>
    </ix-menu-about>
  </ix-menu>
</ix-application>
```

### Angular Standalone Examples

#### about-and-legal.ts
```ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxMenu,
    IxMenuAbout,
    IxMenuAboutItem,
  ],
  templateUrl: './about-and-legal.html',
})
export default class AboutAndLegal implements AfterViewInit {
  @ViewChild('menu', { read: ElementRef })
  menuRef!: ElementRef<HTMLIxMenuElement>;

  ngAfterViewInit() {
    const { nativeElement } = this.menuRef;
    nativeElement.toggleAbout(true);
  }
}
```

#### about-and-legal.html
```html
<ix-application>
  <ix-application-header>
    <div class="placeholder-logo" slot="logo"></div>
  </ix-application-header>
  <ix-menu #menu>
    <ix-menu-about>
      <ix-menu-about-item label="Tab 1">Content 1</ix-menu-about-item>
      <ix-menu-about-item label="Tab 2">Content 2</ix-menu-about-item>
    </ix-menu-about>
  </ix-menu>
</ix-application>
```

### Vue Examples

#### about-and-legal.vue
```vue
<script setup lang="ts">
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
} from '@siemens/ix-vue';
import { useTemplateRef, onMounted } from 'vue';

const input = useTemplateRef<HTMLIxMenuElement>('menu');
onMounted(() => {
  input.value?.toggleAbout(true);
});
</script>

<template>
  <IxApplication>
    <IxApplicationHeader>
      <div className="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>
    <IxMenu ref="menu">
      <IxMenuAbout>
        <IxMenuAboutItem label="Tab 1">Content 1</IxMenuAboutItem>
        <IxMenuAboutItem label="Tab 2">Content 2</IxMenuAboutItem>
      </IxMenuAbout>
    </IxMenu>
  </IxApplication>
</template>
```

## Change language of legal links

Supported language codes are `'global/en' | 'global/es' | 'de/de' | 'cn/zh'`

## API for ix-menu-about

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| activeTabLabel | Active tab | active-tab-label | string \| undefined |  |
| ariaLabelCloseButton | Aria label for close button | aria-label-close-button | string | 'Close About' |
| label | Content of the header | label | string | 'About & legal information' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| close | About and Legal closed | close | CustomCloseEvent |
| tabChange | Active tab changed | tabChange | string |

## API for ix-menu-about-item

### Properties

| Name | Description | Attribute | Type |
| --- | --- | --- | --- |
| label | About Item label | label | string \| undefined |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| labelChange | Label changed | labelChange | CustomLabelChangeEvent |
