```vue
<script setup lang="ts">
import { IxToggleButton } from '@siemens/ix-vue';
</script>

<style scoped src="./toggle-button-primary.css"></style>

<template>
  <IxToggleButton variant="primary">Normal</IxToggleButton>
  <IxToggleButton variant="primary" pressed>Pressed</IxToggleButton>
  <IxToggleButton variant="primary" disabled>Disabled</IxToggleButton>
  <IxToggleButton variant="primary" disabled loading>Loading</IxToggleButton>
</template>
```
