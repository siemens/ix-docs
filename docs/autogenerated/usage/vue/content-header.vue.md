```vue
<script setup lang="ts">
import { IxButton, IxContentHeader } from '@siemens/ix-vue';
</script>

<template>
  <IxContentHeader
    has-back-button
    header-title="Content title"
    header-subtitle="Subtitle"
  >
    <IxButton ghost>Button1</IxButton>
    <IxButton ghost>Button2</IxButton>
    <IxButton ghost>Button3</IxButton>
  </IxContentHeader>
</template>
```
