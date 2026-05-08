# Settings - Code

> Code examples and API documentation for the ix-menu-settings, ix-menu-settings-item

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
  IxMenuSettingsItem,
} from '@siemens/ix-react';
import { useLayoutEffect, useRef } from 'react';

export default () => {
  const ref = useRef<HTMLIxMenuElement>(null);

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
        <IxMenuSettings>
          <IxMenuSettingsItem label="Example Setting 1"></IxMenuSettingsItem>
          <IxMenuSettingsItem label="Example Setting 2"></IxMenuSettingsItem>
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
    <ix-menu-settings>
      <ix-menu-settings-item label="Example Setting 1"></ix-menu-settings-item>
      <ix-menu-settings-item label="Example Setting 2"></ix-menu-settings-item>
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
  IxMenuSettingsItem,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxMenu,
    IxMenuSettings,
    IxMenuSettingsItem,
  ],
  templateUrl: './settings.html',
})
export default class Settings implements AfterViewInit {
  @ViewChild('menu', { read: ElementRef })
  menuRef!: ElementRef<HTMLIxMenuElement>;

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
    <ix-menu-settings>
      <ix-menu-settings-item label="Example Setting 1"></ix-menu-settings-item>
      <ix-menu-settings-item label="Example Setting 2"></ix-menu-settings-item>
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
  IxMenuSettingsItem,
} from '@siemens/ix-vue';
import { nextTick, onMounted, ref } from 'vue';

const menu = ref<HTMLRefElement<HTMLIxMenuElement>>();

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
        <IxMenuSettingsItem label="Example Setting 1"></IxMenuSettingsItem>
        <IxMenuSettingsItem label="Example Setting 2"></IxMenuSettingsItem>
      </IxMenuSettings>
    </IxMenu>
  </IxApplication>
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

## API for ix-menu-settings-item

### Properties

| Name | Description | Attribute | Type |
| --- | --- | --- | --- |
| label | Settings Item label | label | string \| undefined |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| labelChange | Label changed | labelChange | CustomLabelChangeEvent |
