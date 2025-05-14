```vue
<script setup lang="ts">
import { IxButton, IxTooltip } from '@siemens/ix-vue';
</script>

<style scoped src="./tooltip.css"></style>

<template>
  <IxButton class="any-class" aria-describedby="tooltip-1"> Hover me </IxButton>
  <IxTooltip id="tooltip-1" for=".any-class">Simple selector</IxTooltip>

  <IxButton my-custom-special-selector="any-value" aria-describedby="tooltip-2"
    >Also hover me</IxButton
  >
  <IxTooltip id="tooltip-2" for="[my-custom-special-selector='any-value']">
    Custom selector
  </IxTooltip>
</template>
```
