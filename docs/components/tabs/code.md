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
  const [activeTabKey, setActiveTabKey] = useState('tab-1');

  return (
    <div className="tabs">
      <IxTabs
        activeTabKey={activeTabKey}
        onTabChange={({ detail }) => setActiveTabKey(detail ?? 'tab-1')}
      >
        <IxTabItem tabKey="tab-1">Tab 1</IxTabItem>
        <IxTabItem tabKey="tab-2">Tab 2</IxTabItem>
        <IxTabItem tabKey="tab-3">Tab 3</IxTabItem>
      </IxTabs>
      <section role="tabpanel" aria-label="Example content">
        {activeTabKey === 'tab-1' ? <>Content Tab 1</> : null}
        {activeTabKey === 'tab-2' ? <>Content Tab 2</> : null}
        {activeTabKey === 'tab-3' ? <>Content Tab 3</> : null}
      </section>
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

.tabs > div[data-tab-content].show,
.tabs [data-tab-content].show {
  display: block;
}

.tabs [data-tab-content] {
  display: none;
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
      <ix-tabs
        [activeTabKey]="activeTabKey"
        (tabChange)="activeTabKey = $event.detail ?? 'tab-1'"
      >
        <ix-tab-item tabKey="tab-1">Tab 1</ix-tab-item>
        <ix-tab-item tabKey="tab-2">Tab 2</ix-tab-item>
        <ix-tab-item tabKey="tab-3">Tab 3</ix-tab-item>
      </ix-tabs>
      <section role="tabpanel" aria-label="Example content">
        @if (activeTabKey === 'tab-1') { Content Tab 1 } @else if (activeTabKey
        === 'tab-2') { Content Tab 2 } @else if (activeTabKey === 'tab-3') {
        Content Tab 3 }
      </section>
    </div>
  `,
  styleUrls: ['./tabs.css'],
})
export default class Tabs {
  activeTabKey = 'tab-1';
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

.tabs > div[data-tab-content].show,
.tabs [data-tab-content].show {
  display: block;
}

.tabs [data-tab-content] {
  display: none;
}
```

### Angular Standalone Examples

#### tabs.ts
```ts
import { Component } from '@angular/core';
import { IxTabs, IxTabItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTabs, IxTabItem],
  template: `
    <div class="tabs">
      <ix-tabs
        [activeTabKey]="activeTabKey"
        (tabChange)="activeTabKey = $event.detail ?? 'tab-1'"
      >
        <ix-tab-item tabKey="tab-1">Tab 1</ix-tab-item>
        <ix-tab-item tabKey="tab-2">Tab 2</ix-tab-item>
        <ix-tab-item tabKey="tab-3">Tab 3</ix-tab-item>
      </ix-tabs>
      <section role="tabpanel" aria-label="Example content">
        @if (activeTabKey === 'tab-1') { Content Tab 1 } @else if (activeTabKey
        === 'tab-2') { Content Tab 2 } @else if (activeTabKey === 'tab-3') {
        Content Tab 3 }
      </section>
    </div>
  `,
  styleUrls: ['./tabs.css'],
})
export default class Tabs {
  activeTabKey = 'tab-1';
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

.tabs > div[data-tab-content].show,
.tabs [data-tab-content].show {
  display: block;
}

.tabs [data-tab-content] {
  display: none;
}
```

### Vue Examples

#### tabs.vue
```vue
<script setup lang="ts">
import { IxTabItem, IxTabs } from '@siemens/ix-vue';
import { ref } from 'vue';

const activeTabKey = ref('tab-1');

const setActiveTabKey = (event: CustomEvent<string | undefined>) => {
  activeTabKey.value = event.detail ?? 'tab-1';
};
</script>

<style scoped src="./tabs.css"></style>

<template>
  <div class="tabs">
    <IxTabs :activeTabKey="activeTabKey" @tabChange="setActiveTabKey">
      <IxTabItem tabKey="tab-1">Tab 1</IxTabItem>
      <IxTabItem tabKey="tab-2">Tab 2</IxTabItem>
      <IxTabItem tabKey="tab-3">Tab 3</IxTabItem>
    </IxTabs>
    <section
      role="tabpanel"
      aria-label="Example content"
      v-show="activeTabKey === 'tab-1'"
    >
      Content Tab 1
    </section>
    <section
      role="tabpanel"
      aria-label="Example content"
      v-show="activeTabKey === 'tab-2'"
    >
      Content Tab 2
    </section>
    <section
      role="tabpanel"
      aria-label="Example content"
      v-show="activeTabKey === 'tab-3'"
    >
      Content Tab 3
    </section>
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

.tabs > div[data-tab-content].show,
.tabs [data-tab-content].show {
  display: block;
}

.tabs [data-tab-content] {
  display: none;
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
      <IxTabItem tabKey="success" label="Success">
        <IxIcon name={iconSuccess} aria-label="Success"></IxIcon>
      </IxTabItem>
      <IxTabItem tabKey="tree" label="Tree" counter={200}>
        <IxIcon name={iconTree} aria-label="Tree"></IxIcon>
      </IxTabItem>
      <IxTabItem tabKey="maintenance" label="Maintenance">
        <IxIcon name={iconMaintenance} aria-label="Maintenance"></IxIcon>
      </IxTabItem>
      <IxTabItem tabKey="sound" label="Sound" disabled counter={24}>
        <IxIcon name={iconSoundLoud} aria-label="Sound"></IxIcon>
      </IxTabItem>
      <IxTabItem tabKey="hierarchy" label="Hierarchy">
        <IxIcon name={iconHierarchy} aria-label="Hierarchy"></IxIcon>
      </IxTabItem>
      <IxTabItem tabKey="calendar-settings" label="Calendar settings" disabled>
        <IxIcon
          name={iconCalendarSettings}
          aria-label="Calendar settings"
        ></IxIcon>
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
      <ix-tab-item tabKey="success" label="Success">
        <ix-icon name="success" aria-label="Success"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="tree" label="Tree" counter="200">
        <ix-icon name="tree" aria-label="Tree"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="maintenance" label="Maintenance">
        <ix-icon name="maintenance" aria-label="Maintenance"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="sound" label="Sound" disabled counter="24">
        <ix-icon name="sound-loud" aria-label="Sound"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="hierarchy" label="Hierarchy">
        <ix-icon name="hierarchy" aria-label="Hierarchy"></ix-icon>
      </ix-tab-item>
      <ix-tab-item
        tabKey="calendar-settings"
        label="Calendar settings"
        disabled
      >
        <ix-icon
          name="calendar-settings"
          aria-label="Calendar settings"
        ></ix-icon>
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
import { IxIcon, IxTabItem, IxTabs } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTabs, IxTabItem, IxIcon],
  template: `
    <ix-tabs rounded>
      <ix-tab-item tabKey="success" label="Success">
        <ix-icon name="success" aria-label="Success"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="tree" label="Tree" counter="200">
        <ix-icon name="tree" aria-label="Tree"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="maintenance" label="Maintenance">
        <ix-icon name="maintenance" aria-label="Maintenance"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="sound" label="Sound" disabled counter="24">
        <ix-icon name="sound-loud" aria-label="Sound"></ix-icon>
      </ix-tab-item>
      <ix-tab-item tabKey="hierarchy" label="Hierarchy">
        <ix-icon name="hierarchy" aria-label="Hierarchy"></ix-icon>
      </ix-tab-item>
      <ix-tab-item
        tabKey="calendar-settings"
        label="Calendar settings"
        disabled
      >
        <ix-icon
          name="calendar-settings"
          aria-label="Calendar settings"
        ></ix-icon>
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
    <IxTabItem tabKey="success" label="Success">
      <IxIcon :name="iconSuccess" aria-label="Success"></IxIcon>
    </IxTabItem>
    <IxTabItem tabKey="tree" label="Tree" :counter="200">
      <IxIcon :name="iconTree" aria-label="Tree"></IxIcon>
    </IxTabItem>
    <IxTabItem tabKey="maintenance" label="Maintenance">
      <IxIcon :name="iconMaintenance" aria-label="Maintenance"></IxIcon>
    </IxTabItem>
    <IxTabItem tabKey="sound" label="Sound" disabled :counter="24">
      <IxIcon :name="iconSoundLoud" aria-label="Sound"></IxIcon>
    </IxTabItem>
    <IxTabItem tabKey="hierarchy" label="Hierarchy">
      <IxIcon :name="iconHierarchy" aria-label="Hierarchy"></IxIcon>
    </IxTabItem>
    <IxTabItem tabKey="calendar-settings" label="Calendar settings" disabled>
      <IxIcon
        :name="iconCalendarSettings"
        aria-label="Calendar settings"
      ></IxIcon>
    </IxTabItem>
  </IxTabs>
</template>
```

## API for ix-tabs

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| activeTabKey | { "Active tab key." } | active-tab-key | string \| undefined |  |
| ariaLabelMoreTabs | { "Aria label for the overflow menu button." } | aria-label-more-tabs | string | 'Show all tabs' |
| keyboardNavigation | { "Keyboard interaction behavior:\n\nautomatic: A tabs widget where tabs are automatically activated and their panel is displayed when they receive focus.\n\nmanual: A tabs widget where users activate a tab and display its panel by pressing Space or Enter." } | keyboard-navigation | "automatic" \| "manual" | 'automatic' |
| layout | { "Set layout width style" } | layout | "auto" \| "stretched" | 'auto' |
| placement | { "Set placement style" } | placement | "bottom" \| "top" | 'bottom' |
| rounded | { "Set rounded tabs" } | rounded | boolean | false |
| small | { "Set tab items to small size" } | small | boolean | false |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| tabChange | { "Tab selection event. Event detail contains the new active tab key." } | tabChange | string \| undefined |
| tabClose | { "Tab close event. Event detail contains the closed tab key." } | tabClose | string \| undefined |

## API for ix-tab-item

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelCloseButton | { "Aria label for the close button, important for accessibility" } | aria-label-close-button | string | 'Close tab' |
| closable | { "If the tab can be closed" } | closable | boolean | false |
| counter | { "Set counter value" } | counter | number \| undefined |  |
| disabled | { "Set disabled tab" } | disabled | boolean | false |
| icon | { "Set icon of the tab" } | icon | string \| undefined |  |
| label | { "Tab label" } | label | string \| undefined |  |
| selected | { "Set selected tab" } | selected | boolean | false |
| tabKey | { "Key of the tab, used for identifying the tab in events" } | tab-key | string |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| tabClick | { "Emitted when the tab is clicked." } | tabClick | { tabKey?: string \| undefined; nativeEvent: Event; } |
| tabClose | { "Emitted when the tab's close button is clicked." } | tabClose | { tabKey?: string \| undefined; nativeEvent: Event; } |
