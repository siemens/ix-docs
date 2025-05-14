```vue
<script setup lang="ts">
import {
  IxApplication,
  IxApplicationHeader,
  IxBasicNavigation,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
  IxMenuAboutNews,
} from '@siemens/ix-vue';
</script>

<template>
  <IxApplication>
    <IxApplicationHeader>
      <div className="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>
    <IxMenu>
      <IxMenuAbout>
        <IxMenuAboutItem label="Example"> </IxMenuAboutItem>
      </IxMenuAbout>
      <IxMenuAboutNews label="Test" show about-item-label="Example">
        Test
      </IxMenuAboutNews>
    </IxMenu>
  </IxApplication>
</template>
```
