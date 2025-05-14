```vue
<script setup lang="ts">
import { IxToggleButton } from '@siemens/ix-vue';
</script>

<style scoped src="./toggle-button-primary-outline.css"></style>

<template>
  <IxToggleButton variant="primary" outline>Normal</IxToggleButton>
  <IxToggleButton variant="primary" outline pressed>Pressed</IxToggleButton>
  <IxToggleButton variant="primary" outline disabled>Disabled</IxToggleButton>
  <IxToggleButton variant="primary" outline disabled loading>
    Loading
  </IxToggleButton>
</template>
```
