```vue
<script setup lang="ts">
import { iconChevronDownSmall } from '@siemens/ix-icons/icons';
import { IxSplitButton, IxDropdownItem } from '@siemens/ix-vue';
</script>

<template>
  <IxSplitButton label="Action text" :splitIcon="iconChevronDownSmall">
    <IxDropdownItem label="Item 1"></IxDropdownItem>
    <IxDropdownItem label="Item 2"></IxDropdownItem>
  </IxSplitButton>
</template>
```
