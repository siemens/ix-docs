```vue
<script setup lang="ts">
import { iconBulb } from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxContent,
  IxContentHeader,
  IxMapNavigation,
  IxMapNavigationOverlay,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-vue';
</script>

<script lang="ts">
export default {
  data(): {
    overlay: boolean;
  } {
    return {
      overlay: false,
    };
  },
  methods: {
    showOverlay(show: boolean) {
      this.overlay = show;
    },
  },
};
</script>

<template>
  <IxMapNavigation
    applicationName="My Application"
    navigationTitle="Navigation title"
    :hideContextMenu="false"
  >
    <div className="placeholder-logo" slot="logo"></div>

    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
    </IxMenu>

    <IxContent slot="sidebar-content">Sidebar content</IxContent>

    <IxContent>
      <IxContentHeader slot="header" headerTitle="My Content Page">
      </IxContentHeader>

      <IxButton @click="() => showOverlay(true)">Open overlay</IxButton>
    </IxContent>

    <IxMapNavigationOverlay
      v-if="overlay"
      slot="overlay"
      name="Custom overlay"
      :icon="iconBulb"
      @close-click="() => showOverlay(false)"
    >
      <IxContent>Overlay content</IxContent>
    </IxMapNavigationOverlay>
  </IxMapNavigation>
</template>
```
