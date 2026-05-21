# Settings - Code

> Code examples and API documentation for the ix-menu-settings

# Settings - Code

## Basic

### React Examples

#### settings.tsx
```tsx
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuSettings,
  IxTabItem,
  IxTabs,
} from '@siemens/ix-react';
import { useLayoutEffect, useRef, useState } from 'react';

export default () => {
  const ref = useRef<HTMLIxMenuElement>(null);
  const [activeTabKey, setActiveTabKey] = useState('tab-1');

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.toggleSettings(true);
    }
  }, []);

  return (
    <IxApplication>
      <IxApplicationHeader>
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>
      <IxMenu ref={ref}>
        <IxMenuSettings suppressLegacyTabs>
          <IxTabs
            activeTabKey={activeTabKey}
            onTabChange={({ detail }) => setActiveTabKey(detail ?? 'tab-1')}
          >
            <IxTabItem tabKey="tab-1">Example Setting 1</IxTabItem>
            <IxTabItem tabKey="tab-2">Example Setting 2</IxTabItem>
          </IxTabs>
          {activeTabKey === 'tab-1' ? (
            <section role="tabpanel" aria-label="Settings content">
              Example Setting 1 content
            </section>
          ) : null}
          {activeTabKey === 'tab-2' ? (
            <section role="tabpanel" aria-label="Settings content">
              Example Setting 2 content
            </section>
          ) : null}
        </IxMenuSettings>
      </IxMenu>
    </IxApplication>
  );
};
```

### Angular Examples

#### settings.ts
```ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './settings.html',
})
export default class Settings implements AfterViewInit {
  @ViewChild('menu', { read: ElementRef })
  menuRef!: ElementRef<HTMLIxMenuElement>;

  activeTabKey = 'tab-1';

  ngAfterViewInit() {
    const { nativeElement } = this.menuRef;
    nativeElement.toggleSettings(true);
  }
}
```

#### settings.html
```html
<ix-application>
  <ix-application-header>
    <div class="placeholder-logo" slot="logo"></div>
  </ix-application-header>
  <ix-menu #menu>
    <ix-menu-settings suppressLegacyTabs>
      <ix-tabs
        [activeTabKey]="activeTabKey"
        (tabChange)="activeTabKey = $event.detail ?? 'tab-1'"
      >
        <ix-tab-item tabKey="tab-1">Example Setting 1</ix-tab-item>
        <ix-tab-item tabKey="tab-2">Example Setting 2</ix-tab-item>
      </ix-tabs>
      @if (activeTabKey === 'tab-1') {
      <section role="tabpanel" aria-label="Settings content">
        Example Setting 1 content
      </section>
      } @else {
      <section role="tabpanel" aria-label="Settings content">
        Example Setting 2 content
      </section>
      }
    </ix-menu-settings>
  </ix-menu>
</ix-application>
```

### Angular Standalone Examples

#### settings.ts
```ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuSettings,
  IxTabItem,
  IxTabs,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxMenu,
    IxMenuSettings,
    IxTabs,
    IxTabItem,
  ],
  templateUrl: './settings.html',
})
export default class Settings implements AfterViewInit {
  @ViewChild('menu', { read: ElementRef })
  menuRef!: ElementRef<HTMLIxMenuElement>;

  activeTabKey = 'tab-1';

  ngAfterViewInit() {
    const { nativeElement } = this.menuRef;
    nativeElement.toggleSettings(true);
  }
}
```

#### settings.html
```html
<ix-application>
  <ix-application-header>
    <div class="placeholder-logo" slot="logo"></div>
  </ix-application-header>
  <ix-menu #menu>
    <ix-menu-settings suppressLegacyTabs>
      <ix-tabs
        [activeTabKey]="activeTabKey"
        (tabChange)="activeTabKey = $event.detail ?? 'tab-1'"
      >
        <ix-tab-item tabKey="tab-1">Example Setting 1</ix-tab-item>
        <ix-tab-item tabKey="tab-2">Example Setting 2</ix-tab-item>
      </ix-tabs>
      @if (activeTabKey === 'tab-1') {
      <section role="tabpanel" aria-label="Settings content">
        Example Setting 1 content
      </section>
      } @else {
      <section role="tabpanel" aria-label="Settings content">
        Example Setting 2 content
      </section>
      }
    </ix-menu-settings>
  </ix-menu>
</ix-application>
```

### Vue Examples

#### settings.vue
```vue
<script setup lang="ts">
import {
  HTMLRefElement,
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuSettings,
  IxTabItem,
  IxTabs,
} from '@siemens/ix-vue';
import { nextTick, onMounted, ref } from 'vue';

const menu = ref<HTMLRefElement<HTMLIxMenuElement>>();
const activeTabKey = ref('tab-1');

const setActiveTabKey = (event: CustomEvent<string | undefined>) => {
  activeTabKey.value = event.detail ?? 'tab-1';
};

onMounted(async () => {
  await nextTick();
  menu.value?.$el.toggleSettings(true);
});
</script>

<template>
  <IxApplication>
    <IxApplicationHeader>
      <div className="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>
    <IxMenu ref="menu">
      <IxMenuSettings>
        <IxTabs :activeTabKey="activeTabKey" @tabChange="setActiveTabKey">
          <IxTabItem tabKey="tab-1">Example Setting 1</IxTabItem>
          <IxTabItem tabKey="tab-2">Example Setting 2</IxTabItem>
        </IxTabs>
        <section
          v-if="activeTabKey === 'tab-1'"
          role="tabpanel"
          aria-label="Settings content"
        >
          Example Setting 1 content
        </section>
        <section
          v-if="activeTabKey === 'tab-2'"
          role="tabpanel"
          aria-label="Settings content"
        >
          Example Setting 2 content
        </section>
      </IxMenuSettings>
    </IxMenu>
  </IxApplication>
</template>
```

## API for ix-menu-settings

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| activeTabKey | { "Active tab used for legacy ix-menu-settings-item integrations" } | active-tab-key | string \| undefined |  |
| ariaLabelCloseButton | { "Aria label for close button" } | aria-label-close-button | string | 'Close Settings' |
| label | { "Label of first tab" } | label | string | 'Settings' |
| suppressLegacyTabs | { "Whether to suppress legacy tabs (ix-menu-settings-item) and use slotted\n\ntabs (ix-tab-item) instead" } | suppress-legacy-tabs | boolean | false |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| close | { "Popover closed" } | close | CustomCloseEvent |
| tabChange | { "Active tab changed" } | tabChange | string |
