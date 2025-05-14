```vue
<script setup lang="ts">
import { IxRadio, IxRadioGroup } from '@siemens/ix-vue';
</script>

<template>
  <IxRadioGroup label="Storage options">
    <IxRadio
      label="256GB SSD storage"
      value="256"
      name="storage-256gb"
    ></IxRadio>
    <IxRadio
      label="512GB SSD storage"
      value="512"
      name="storage-512gb"
    ></IxRadio>
    <IxRadio
      label="1TB SSD storage"
      value="1024"
      name="storage-1tb"
    ></IxRadio>
    <IxRadio
      label="2TB SSD storage"
      value="2048"
      name="storage-2tb"
      disabled
    ></IxRadio>
  </IxRadioGroup>
</template>
```
