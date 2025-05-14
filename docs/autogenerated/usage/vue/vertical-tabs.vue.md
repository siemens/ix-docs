```vue
<script setup lang="ts">
import { iconGlobe, iconHome, iconStar } from '@siemens/ix-icons/icons';
import { IxMenu, IxMenuItem } from '@siemens/ix-vue';
</script>

<style scoped src="./vertical-tabs.css"></style>

<template>
  <IxMenu>
    <IxMenuItem home-tab :tab-icon="iconHome"> Home </IxMenuItem>
    <IxMenuItem :tab-icon="iconGlobe"> Normal Tab </IxMenuItem>
    <IxMenuItem :tab-icon="iconStar" disabled> Disabled Tab </IxMenuItem>
    <IxMenuItem :tab-icon="iconStar"> With other Icon </IxMenuItem>
    <IxMenuItem :tab-icon="iconGlobe" style="display: none">
      Should not be visible
    </IxMenuItem>
  </IxMenu>
</template>
```
