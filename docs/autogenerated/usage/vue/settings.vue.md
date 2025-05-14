```vue
<script setup lang="ts">
import {
  HTMLRefElement,
  IxApplication,
  IxApplicationHeader,
  IxBasicNavigation,
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
