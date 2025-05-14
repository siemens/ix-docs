```vue
<script setup lang="ts">
import { IxToggleButton } from '@siemens/ix-vue';
</script>

<style scoped src="./toggle-button-secondary-ghost.css"></style>

<template>
  <IxToggleButton ghost>Normal</IxToggleButton>
  <IxToggleButton ghost pressed>Pressed</IxToggleButton>
  <IxToggleButton ghost disabled>Disabled</IxToggleButton>
  <IxToggleButton ghost disabled loading>Loading</IxToggleButton>
</template>
```
