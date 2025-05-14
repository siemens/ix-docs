```vue
<script setup lang="ts">
import { iconLocation } from '@siemens/ix-icons/icons';
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-vue';
</script>

<template>
  <IxKeyValueList>
    <IxKeyValue
      :icon="iconLocation"
      label="Label"
      labelPosition="left"
      value="Value"
    ></IxKeyValue>
    <IxKeyValue
      :icon="iconLocation"
      label="Label"
      labelPosition="left"
      value="Value"
    ></IxKeyValue>
    <IxKeyValue
      :icon="iconLocation"
      label="Label"
      labelPosition="left"
      value="Value"
    ></IxKeyValue>
  </IxKeyValueList>
</template>
```
