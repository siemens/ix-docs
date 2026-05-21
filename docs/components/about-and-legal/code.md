# About and legal - Code

> Code examples and API documentation for the ix-menu-about

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
  IxTabItem,
  IxTabs,
} from '@siemens/ix-react';
import { useLayoutEffect, useRef, useState } from 'react';

export default () => {
  const ref = useRef<HTMLIxMenuElement>(null);
  const [activeTabKey, setActiveTabKey] = useState('tab-1');

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
        <IxMenuAbout suppressLegacyTabs>
          <IxTabs
            activeTabKey={activeTabKey}
            onTabChange={({ detail }) => setActiveTabKey(detail ?? 'tab-1')}
          >
            <IxTabItem tabKey="tab-1">Tab 1</IxTabItem>
            <IxTabItem tabKey="tab-2">Tab 2</IxTabItem>
          </IxTabs>
          {activeTabKey === 'tab-1' ? (
            <section role="tabpanel" aria-label="About and legal content">
              Content 1
            </section>
          ) : null}
          {activeTabKey === 'tab-2' ? (
            <section role="tabpanel" aria-label="About and legal content">
              Content 2
            </section>
          ) : null}
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

  activeTabKey = 'tab-1';

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
    <ix-menu-about suppressLegacyTabs>
      <ix-tabs
        [activeTabKey]="activeTabKey"
        (tabChange)="activeTabKey = $event.detail ?? 'tab-1'"
      >
        <ix-tab-item tabKey="tab-1">Tab 1</ix-tab-item>
        <ix-tab-item tabKey="tab-2">Tab 2</ix-tab-item>
      </ix-tabs>
      @if (activeTabKey === 'tab-1') {
      <section role="tabpanel" aria-label="About and legal content">
        Content 1
      </section>
      } @else {
      <section role="tabpanel" aria-label="About and legal content">
        Content 2
      </section>
      }
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
  IxTabItem,
  IxTabs,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxMenu,
    IxMenuAbout,
    IxTabs,
    IxTabItem,
  ],
  templateUrl: './about-and-legal.html',
})
export default class AboutAndLegal implements AfterViewInit {
  @ViewChild('menu', { read: ElementRef })
  menuRef!: ElementRef<HTMLIxMenuElement>;

  activeTabKey = 'tab-1';

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
    <ix-menu-about suppressLegacyTabs>
      <ix-tabs
        [activeTabKey]="activeTabKey"
        (tabChange)="activeTabKey = $event.detail ?? 'tab-1'"
      >
        <ix-tab-item tabKey="tab-1">Tab 1</ix-tab-item>
        <ix-tab-item tabKey="tab-2">Tab 2</ix-tab-item>
      </ix-tabs>
      @if (activeTabKey === 'tab-1') {
      <section role="tabpanel" aria-label="About and legal content">
        Content 1
      </section>
      } @else {
      <section role="tabpanel" aria-label="About and legal content">
        Content 2
      </section>
      }
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
  IxTabItem,
  IxTabs,
} from '@siemens/ix-vue';
import { onMounted, ref, useTemplateRef } from 'vue';

const input = useTemplateRef<InstanceType<typeof IxMenu>>('menu');
const activeTabKey = ref('tab-1');

const setActiveTabKey = (event: CustomEvent<string | undefined>) => {
  activeTabKey.value = event.detail ?? 'tab-1';
};

onMounted(() => {
  input.value?.$el?.toggleAbout(true);
});
</script>

<template>
  <IxApplication>
    <IxApplicationHeader>
      <div className="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>
    <IxMenu ref="menu">
      <IxMenuAbout suppressLegacyTabs>
        <IxTabs :activeTabKey="activeTabKey" @tabChange="setActiveTabKey">
          <IxTabItem tabKey="tab-1">Tab 1</IxTabItem>
          <IxTabItem tabKey="tab-2">Tab 2</IxTabItem>
        </IxTabs>
        <section
          v-if="activeTabKey === 'tab-1'"
          role="tabpanel"
          aria-label="About and legal content"
        >
          Content 1
        </section>
        <section
          v-if="activeTabKey === 'tab-2'"
          role="tabpanel"
          aria-label="About and legal content"
        >
          Content 2
        </section>
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
| activeTabKey | { "Active tab used for legacy ix-menu-about-item integrations" } | active-tab-key | string \| undefined |  |
| ariaLabelCloseButton | { "Aria label for close button" } | aria-label-close-button | string | 'Close About' |
| label | { "Content of the header" } | label | string | 'About & legal information' |
| suppressLegacyTabs | { "Whether to suppress legacy tabs (ix-menu-about-item) and use slotted tabs\n\n(ix-tab-item) instead" } | suppress-legacy-tabs | boolean | false |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| close | { "About and Legal closed" } | close | CustomCloseEvent |
| tabChange | { "Active tab changed" } | tabChange | string |
