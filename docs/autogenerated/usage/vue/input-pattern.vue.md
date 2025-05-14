```vue
<script setup lang="ts">
import { IxInput } from '@siemens/ix-vue';
</script>

<template>
  <IxInput
    helper-text="Only characters a-d are allowed"
    allowed-characters-pattern="[a-d]"
    :max-length="4"
  ></IxInput>
</template>
```
