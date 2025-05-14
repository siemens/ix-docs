```vue
<script setup lang="ts">
import { iconStar } from '@siemens/ix-icons/icons';
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-text-icon.css"></style>

<template>
  <IxButton :icon="iconStar"> Button </IxButton>
  <IxButton variant="secondary" :icon="iconStar"> Button </IxButton>
  <IxButton outline :icon="iconStar"> Button </IxButton>
  <IxButton ghost :icon="iconStar"> Button </IxButton>
</template>
```
