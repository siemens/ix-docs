```vue
<script setup lang="ts">
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import { IxIconToggleButton, IxLayoutGrid, IxRow } from '@siemens/ix-vue';
</script>

<style scoped src="./icon-toggle-button-secondary.css"></style>

<template>
  <IxLayoutGrid>
    <IxRow>
      <IxIconToggleButton :icon="iconCheckboxes"></IxIconToggleButton>
      <IxIconToggleButton pressed :icon="iconCheckboxes"></IxIconToggleButton>
      <IxIconToggleButton disabled :icon="iconCheckboxes"></IxIconToggleButton>
      <IxIconToggleButton
        disabled
        loading
        :icon="iconCheckboxes"
      ></IxIconToggleButton>
    </IxRow>
    <IxRow>
      <IxIconToggleButton :icon="iconCheckboxes" oval></IxIconToggleButton>
      <IxIconToggleButton
        pressed
        :icon="iconCheckboxes"
        oval
      ></IxIconToggleButton>
      <IxIconToggleButton
        disabled
        :icon="iconCheckboxes"
        oval
      ></IxIconToggleButton>
      <IxIconToggleButton
        disabled
        loading
        :icon="iconCheckboxes"
        oval
      ></IxIconToggleButton>
    </IxRow>
  </IxLayoutGrid>
</template>
```
