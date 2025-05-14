```vue
<script setup lang="ts">
import { iconBulb } from '@siemens/ix-icons/icons';
import { IxDateInput, IxIcon, IxTypography } from '@siemens/ix-vue';
</script>

<template>
  <IxDateInput value="1970/01/01">
    <IxIcon :name="iconBulb" slot="start" size="16"></IxIcon>
    <IxTypography slot="end">Slot</IxTypography>
  </IxDateInput>
</template>
```
