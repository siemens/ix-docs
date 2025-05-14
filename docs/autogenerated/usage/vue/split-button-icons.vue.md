```vue
<script setup lang="ts">
import {
  iconBulb,
  iconChevronDownSmall,
  iconCut,
} from '@siemens/ix-icons/icons';
import { IxSplitButton, IxDropdownItem } from '@siemens/ix-vue';
</script>

<template>
  <IxSplitButton label="Action text" :splitIcon="iconChevronDownSmall">
    <IxDropdownItem label="Item 1" :icon="iconCut"></IxDropdownItem>
    <IxDropdownItem label="Item 2" :icon="iconBulb"></IxDropdownItem>
  </IxSplitButton>
</template>
```
