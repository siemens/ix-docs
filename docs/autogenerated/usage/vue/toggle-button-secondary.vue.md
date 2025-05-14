```vue
<script setup lang="ts">
import { IxToggleButton } from '@siemens/ix-vue';
</script>

<style scoped src="./toggle-button-secondary.css"></style>

<template>
  <IxToggleButton>Normal</IxToggleButton>
  <IxToggleButton pressed>Pressed</IxToggleButton>
  <IxToggleButton disabled>Disabled</IxToggleButton>
  <IxToggleButton disabled loading>Loading</IxToggleButton>
</template>
```
