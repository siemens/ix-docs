```vue
<script setup lang="ts">
import { iconBulb } from '@siemens/ix-icons/icons';
import { IxInput, IxIcon, IxTypography } from '@siemens/ix-vue';
</script>

<template>
  <IxInput>
    <IxIcon :name="iconBulb" slot="start" size="16"></IxIcon>
    <IxTypography slot="end">unit</IxTypography>
  </IxInput>
</template>
```
