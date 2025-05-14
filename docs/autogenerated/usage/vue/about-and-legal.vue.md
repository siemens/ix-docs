```vue
<script setup lang="ts">
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
} from '@siemens/ix-vue';
import { ref, watch } from 'vue';

const menu = ref<HTMLIxMenuElement>();

watch(menu, () => menu.value?.toggleAbout(true));
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
