```vue
<script setup lang="ts">
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import { IxIconToggleButton, IxLayoutGrid, IxRow } from '@siemens/ix-vue';
</script>

<style scoped src="./icon-toggle-button-secondary-ghost.css"></style>

<template>
  <IxLayoutGrid>
    <IxRow>
      <IxIconToggleButton ghost :icon="iconCheckboxes"></IxIconToggleButton>
      <IxIconToggleButton
        ghost
        pressed
        :icon="iconCheckboxes"
      ></IxIconToggleButton>
      <IxIconToggleButton
        ghost
        disabled
        :icon="iconCheckboxes"
      ></IxIconToggleButton>
      <IxIconToggleButton
        ghost
        disabled
        loading
        :icon="iconCheckboxes"
      ></IxIconToggleButton>
    </IxRow>
    <IxRow>
      <IxIconToggleButton
        ghost
        :icon="iconCheckboxes"
        oval
      ></IxIconToggleButton>
      <IxIconToggleButton
        ghost
        pressed
        :icon="iconCheckboxes"
        oval
      ></IxIconToggleButton>
      <IxIconToggleButton
        ghost
        disabled
        :icon="iconCheckboxes"
        oval
      ></IxIconToggleButton>
      <IxIconToggleButton
        ghost
        disabled
        loading
        :icon="iconCheckboxes"
        oval
      ></IxIconToggleButton>
    </IxRow>
  </IxLayoutGrid>
</template>
```
