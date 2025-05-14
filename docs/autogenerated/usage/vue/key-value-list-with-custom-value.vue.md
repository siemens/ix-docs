```vue
<script setup lang="ts">
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-vue';
</script>

<style scoped src="./key-value-list-with-custom-value.css"></style>

<template>
  <IxKeyValueList>
    <IxKeyValue label="Label" labelPosition="left">
      <input
        class="ix-form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </IxKeyValue>
    <IxKeyValue label="Label" labelPosition="left">
      <input
        class="ix-form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </IxKeyValue>
    <IxKeyValue label="Label" labelPosition="left">
      <input
        class="ix-form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </IxKeyValue>
  </IxKeyValueList>
</template>
```
