```vue
<script setup lang="ts">
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-vue';
</script>

<style scoped src="./basic-navigation-migration.css"></style>

<template>
  <IxApplication>
    
    <IxApplicationHeader name="My Application">
      <div className="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>

    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
    </IxMenu>
  </IxApplication>
</template>
```
