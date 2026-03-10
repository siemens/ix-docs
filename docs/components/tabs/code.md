# Tabs - Code

> Code examples and API documentation for the ix-tabs, ix-tab-item

# Tabs - Code

## Basic

### React Examples

#### tabs.tsx
```tsx
import './tabs.scoped.css';

import { IxTabItem, IxTabs } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const changeTab = (tabId: number) => setSelectedTab(tabId);

  return (
    <div className="tabs">
      <IxTabs selected={selectedTab}>
        <IxTabItem onClick={() => changeTab(0)}>Tab 1</IxTabItem>
        <IxTabItem onClick={() => changeTab(1)}>Tab 2</IxTabItem>
        <IxTabItem onClick={() => changeTab(2)}>Tab 3</IxTabItem>
      </IxTabs>
      {selectedTab === 0 ? <div>Content 1</div> : null}
      {selectedTab === 1 ? <div>Content 2</div> : null}
      {selectedTab === 2 ? <div>Content 3</div> : null}
    </div>
  );
};
```

#### tabs.scoped.css
```css
.tabs {
  display: block;
  position: relative;
  width: 100%;
}

.tabs > div[data-tab-content] {
  display: none;
}

.tabs > div[data-tab-content].show {
  display: block;
}
```

### Angular Examples

#### tabs.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="tabs">
      <ix-tabs [selected]="selectedTab">
        <ix-tab-item (click)="changeTab(0)">Tab 1</ix-tab-item>
        <ix-tab-item (click)="changeTab(1)">Tab 2</ix-tab-item>
        <ix-tab-item (click)="changeTab(2)">Tab 3</ix-tab-item>
      </ix-tabs>
      <div *ngIf="selectedTab === 0">Content Tab 1</div>
      <div *ngIf="selectedTab === 1">Content Tab 2</div>
      <div *ngIf="selectedTab === 2">Content Tab 3</div>
    </div>
  `,
  styleUrls: ['./tabs.css'],
})
export default class Tabs {
  selectedTab = 1;

  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}
```

#### tabs.css
```css
.tabs {
  display: block;
  position: relative;
  width: 100%;
}

.tabs > div[data-tab-content] {
  display: none;
}

.tabs > div[data-tab-content].show {
  display: block;
}
```

### Angular Standalone Examples

#### tabs.ts
```ts
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { IxTabs, IxTabItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTabs, IxTabItem, NgIf],
  template: `
    <div class="tabs">
      <ix-tabs [selected]="selectedTab">
        <ix-tab-item (click)="changeTab(0)">Tab 1</ix-tab-item>
        <ix-tab-item (click)="changeTab(1)">Tab 2</ix-tab-item>
        <ix-tab-item (click)="changeTab(2)">Tab 3</ix-tab-item>
      </ix-tabs>
      <div *ngIf="selectedTab === 0">Content Tab 1</div>
      <div *ngIf="selectedTab === 1">Content Tab 2</div>
      <div *ngIf="selectedTab === 2">Content Tab 3</div>
    </div>
  `,
  styleUrls: ['./tabs.css'],
})
export default class Tabs {
  selectedTab = 1;

  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}
```

#### tabs.css
```css
.tabs {
  display: block;
  position: relative;
  width: 100%;
}

.tabs > div[data-tab-content] {
  display: none;
}

.tabs > div[data-tab-content].show {
  display: block;
}
```

### Vue Examples

#### tabs.vue
```vue
<script setup lang="ts">
import { IxTabItem, IxTabs } from '@siemens/ix-vue';
import { ref } from 'vue';

const selectedTab = ref(0);
const changeTab = (tabId: number) => (selectedTab.value = tabId);
</script>

<style scoped src="./tabs.css"></style>

<template>
  <div class="tabs">
    <IxTabs :selected="selectedTab">
      <IxTabItem @click="changeTab(0)">Tab 1</IxTabItem>
      <IxTabItem @click="changeTab(1)">Tab 2</IxTabItem>
      <IxTabItem @click="changeTab(2)">Tab 3</IxTabItem>
    </IxTabs>
    <div v-show="selectedTab === 0">Content 1</div>
    <div v-show="selectedTab === 1">Content 2</div>
    <div v-show="selectedTab === 2">Content 3</div>
  </div>
</template>
```

#### tabs.css
```css
.tabs {
  display: block;
  position: relative;
  width: 100%;
}

.tabs > div[data-tab-content] {
  display: none;
}

.tabs > div[data-tab-content].show {
  display: block;
}
```

## Tabs Rounded

### React Examples

#### tabs-rounded.tsx
```tsx
import { IxIcon, IxTabItem, IxTabs } from '@siemens/ix-react';
import {
  iconCalendarSettings,
  iconHierarchy,
  iconMaintenance,
  iconSoundLoud,
  iconSuccess,
  iconTree,
} from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxTabs rounded>
      <IxTabItem>
        <IxIcon name={iconSuccess}></IxIcon>
      </IxTabItem>
      <IxTabItem counter={200}>
        <IxIcon name={iconTree}></IxIcon>
      </IxTabItem>
      <IxTabItem>
        <IxIcon name={iconMaintenance}></IxIcon>
      </IxTabItem>
      <IxTabItem disabled counter={24}>
        <IxIcon name={iconSoundLoud}></IxIcon>
      </IxTabItem>
      <IxTabItem>
        <IxIcon name={iconHierarchy}></IxIcon>
      </IxTabItem>
      <IxTabItem disabled>
        <IxIcon name={iconCalendarSettings}></IxIcon>
      </IxTabItem>
    </IxTabs>
  );
};
```

### Angular Examples

#### tabs-rounded.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-tabs rounded>
      <ix-tab-item>
        <ix-icon name="success"></ix-icon>
      </ix-tab-item>
      <ix-tab-item counter="200">
        <ix-icon name="tree"></ix-icon>
      </ix-tab-item>
      <ix-tab-item>
        <ix-icon name="maintenance"></ix-icon>
      </ix-tab-item>
      <ix-tab-item disabled counter="24">
        <ix-icon name="sound-loud"></ix-icon>
      </ix-tab-item>
      <ix-tab-item>
        <ix-icon name="hierarchy"></ix-icon>
      </ix-tab-item>
      <ix-tab-item disabled>
        <ix-icon name="calendar-settings"></ix-icon>
      </ix-tab-item>
    </ix-tabs>
  `,
})
export default class TabsRounded {}
```

### Angular Standalone Examples

#### tabs-rounded.ts
```ts
import { Component } from '@angular/core';
import { IxTabs, IxTabItem, IxIcon } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTabs, IxTabItem, IxIcon],
  template: `
    <ix-tabs rounded>
      <ix-tab-item>
        <ix-icon name="success"></ix-icon>
      </ix-tab-item>
      <ix-tab-item counter="200">
        <ix-icon name="tree"></ix-icon>
      </ix-tab-item>
      <ix-tab-item>
        <ix-icon name="maintenance"></ix-icon>
      </ix-tab-item>
      <ix-tab-item disabled counter="24">
        <ix-icon name="sound-loud"></ix-icon>
      </ix-tab-item>
      <ix-tab-item>
        <ix-icon name="hierarchy"></ix-icon>
      </ix-tab-item>
      <ix-tab-item disabled>
        <ix-icon name="calendar-settings"></ix-icon>
      </ix-tab-item>
    </ix-tabs>
  `,
})
export default class TabsRounded {}
```

### Vue Examples

#### tabs-rounded.vue
```vue
<script setup lang="ts">
import {
  iconCalendarSettings,
  iconHierarchy,
  iconMaintenance,
  iconSoundLoud,
  iconSuccess,
  iconTree,
} from '@siemens/ix-icons/icons';
import { IxIcon, IxTabItem, IxTabs } from '@siemens/ix-vue';
</script>

<template>
  <IxTabs rounded>
    <IxTabItem>
      <IxIcon :name="iconSuccess"></IxIcon>
    </IxTabItem>
    <IxTabItem :counter="200">
      <IxIcon :name="iconTree"></IxIcon>
    </IxTabItem>
    <IxTabItem>
      <IxIcon :name="iconMaintenance"></IxIcon>
    </IxTabItem>
    <IxTabItem disabled :counter="24">
      <IxIcon :name="iconSoundLoud"></IxIcon>
    </IxTabItem>
    <IxTabItem>
      <IxIcon :name="iconHierarchy"></IxIcon>
    </IxTabItem>
    <IxTabItem disabled>
      <IxIcon :name="iconCalendarSettings"></IxIcon>
    </IxTabItem>
  </IxTabs>
</template>
```

## API for ix-tabs

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelChevronLeftIconButton | ARIA label for the chevron left icon button | aria-label-chevron-left-icon-button | string \| undefined |  |
| ariaLabelChevronRightIconButton | ARIA label for the chevron right icon button | aria-label-chevron-right-icon-button | string \| undefined |  |
| layout | Set layout width style | layout | "auto" \| "stretched" | 'auto' |
| placement | Set placement style | placement | "bottom" \| "top" | 'bottom' |
| rounded | Set rounded tabs | rounded | boolean | false |
| selected | Set default selected tab by index | selected | number | 0 |
| small | Set tab items to small size | small | boolean | false |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| selectedChange | \`selected\` property changed | selectedChange | number |

## API for ix-tab-item

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| counter | Set counter value | counter | number \| undefined |  |
| disabled | Set disabled tab | disabled | boolean | false |
| icon | Set icon only tab | icon | boolean | false |
| layout | Set layout width style | layout | "auto" \| "stretched" | 'auto' |
| placement | Set selected placement | placement | "bottom" \| "top" | 'bottom' |
| rounded | Set rounded tab | rounded | boolean | false |
| selected | Set selected tab | selected | boolean | false |
| small | Set small size tab | small | boolean | false |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| tabClick | Emitted when the tab is clicked. | tabClick | { nativeEvent: MouseEvent; } |
