```vue
<script setup lang="ts">
import { iconGlobe, iconHome } from '@siemens/ix-icons/icons';
import { IxMenu, IxMenuItem } from '@siemens/ix-vue';
</script>

<template>
  <IxMenu>
    <IxMenuItem home-tab :tab-icon="iconHome"> Home </IxMenuItem>
    <IxMenuItem :tab-icon="iconGlobe" slot="bottom">
      &nbsp; Bottom Tab&nbsp;
    </IxMenuItem>
  </IxMenu>
</template>
```
