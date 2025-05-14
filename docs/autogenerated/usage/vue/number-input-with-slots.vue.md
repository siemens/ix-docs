```vue
<script setup lang="ts">
import { iconBulb } from '@siemens/ix-icons/icons';
import { IxIcon, IxNumberInput, IxTypography } from '@siemens/ix-vue';
</script>

<template>
  <IxNumberInput>
    <IxIcon :name="iconBulb" slot="start" size="16"></IxIcon>
    <IxTypography slot="end">unit</IxTypography>
  </IxNumberInput>
</template>
```
