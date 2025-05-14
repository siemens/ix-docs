```vue
<script setup lang="ts">
import {
  IxButton,
  IxDivider,
  IxDropdown,
  IxDropdownHeader,
  IxDropdownItem,
} from '@siemens/ix-vue';
</script>

<template>
  <IxButton id="triggerId">Open</IxButton>
  <IxDropdown trigger="triggerId">
    <IxDropdownHeader label="Category"></IxDropdownHeader>
    <IxDropdownItem label="Item 2"></IxDropdownItem>
    <IxDropdownItem label="Item 3"></IxDropdownItem>
    <IxDropdownItem label="Item 4"></IxDropdownItem>
    <IxDivider></IxDivider>
    <IxDropdownItem label="Item 5"></IxDropdownItem>
  </IxDropdown>
</template>
```
