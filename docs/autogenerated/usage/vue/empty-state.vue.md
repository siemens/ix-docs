```vue
<script setup lang="ts">
import { iconAdd } from '@siemens/ix-icons/icons';
import { IxEmptyState } from '@siemens/ix-vue';
</script>

<template>
  <IxEmptyState
    header="No elements available"
    subHeader="Create an element first"
    :icon="iconAdd"
    action="Create element"
  ></IxEmptyState>
</template>
```
