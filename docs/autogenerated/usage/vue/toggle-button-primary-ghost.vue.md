```vue
<script setup lang="ts">
import { IxToggleButton } from '@siemens/ix-vue';
</script>

<style scoped src="./toggle-button-primary-ghost.css"></style>

<template>
  <IxToggleButton variant="primary" ghost>Normal</IxToggleButton>
  <IxToggleButton variant="primary" ghost pressed>Pressed</IxToggleButton>
  <IxToggleButton variant="primary" ghost disabled>Disabled</IxToggleButton>
  <IxToggleButton variant="primary" ghost disabled loading>
    Loading
  </IxToggleButton>
</template>
```
