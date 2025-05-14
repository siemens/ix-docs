```vue
<script setup lang="ts">
import { IxToggleButton } from '@siemens/ix-vue';
</script>

<style scoped src="./toggle-button-secondary-outline.css"></style>

<template>
  <IxToggleButton outline>Normal</IxToggleButton>
  <IxToggleButton outline>Pressed</IxToggleButton>
  <IxToggleButton outline disabled>Disabled</IxToggleButton>
  <IxToggleButton outline disabled loading>Loading</IxToggleButton>
</template>
```
