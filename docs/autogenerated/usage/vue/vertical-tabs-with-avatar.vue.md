```vue
<script setup lang="ts">
import {
  iconGlobe,
  iconHome,
  iconStar,
  iconUserProfile,
} from '@siemens/ix-icons/icons';
import {
  IxMenu,
  IxMenuAvatar,
  IxMenuAvatarItem,
  IxMenuItem,
} from '@siemens/ix-vue';
</script>

<style scoped src="./vertical-tabs-with-avatar.css"></style>

<template>
  <IxMenu>
    <IxMenuAvatar top="john.doe@company.com" bottom="Administrator">
      <IxMenuAvatarItem
        :icon="iconUserProfile"
        label="User profile..."
      ></IxMenuAvatarItem>
    </IxMenuAvatar>
    <IxMenuItem home-tab :tab-icon="iconHome"> &nbsp; Home&nbsp; </IxMenuItem>
    <IxMenuItem :tab-icon="iconGlobe"> Normal Tab </IxMenuItem>
    <IxMenuItem :tab-icon="iconStar" disabled>
      &nbsp; Disabled Tab&nbsp;
    </IxMenuItem>
    <IxMenuItem :tab-icon="iconStar"> With other Icon </IxMenuItem>
  </IxMenu>
</template>
```
