```vue
<script setup lang="ts">
import { iconBulb, iconDocument, iconStar } from '@siemens/ix-icons/icons';
import { IxButton, IxDropdown, IxDropdownItem } from '@siemens/ix-vue';
</script>

<template>
  <IxButton id="triggerId">Open</IxButton>
  <IxDropdown trigger="triggerId">
    <IxDropdownItem label="Item 1" :icon="iconStar"></IxDropdownItem>
    <IxDropdownItem label="Item 2" :icon="iconDocument"></IxDropdownItem>
    <IxDropdownItem label="Item 3" :icon="iconBulb"></IxDropdownItem>
  </IxDropdown>
</template>
```
