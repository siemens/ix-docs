```vue
<script setup lang="ts">
import {
  IxApplication,
  IxApplicationHeader,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-vue';
</script>

<template>
  <IxApplication>
    <IxApplicationHeader name="My Application">
      <div className="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>

    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
    </IxMenu>

    <IxContent>
      <IxContentHeader
        slot="header"
        header-title="My Content Page"
      ></IxContentHeader>
    </IxContent>
  </IxApplication>
</template>
```
