```vue
<script setup lang="ts">
import { IxKeyValue } from '@siemens/ix-vue';
</script>

<style scoped src="./key-value-with-custom-value.css"></style>

<template>
  <IxKeyValue label="Label">
    <input
      class="ix-form-control"
      placeholder="Enter text here"
      type="text"
      slot="custom-value"
    />
  </IxKeyValue>
</template>
```
