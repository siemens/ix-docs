```vue
<script setup lang="ts">
import {
  IxContent,
  IxContentHeader,
  IxMapNavigation,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-vue';
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
    </IxContent>
  </IxMapNavigation>
</template>
```
