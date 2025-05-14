```vue
<script setup lang="ts">
import { showMessage } from '@siemens/ix';
import { IxButton } from '@siemens/ix-vue';

const triggerMessage = async () => {
  (
    await showMessage.success(
      'Example title',
      'message',
      'Save',
      'Cancel',
      'payload:save',
      'payload:cancel'
    )
  ).once(console.log);
};
</script>

<template>
  <IxButton @click="triggerMessage">Show 'success' message</IxButton>
</template>
```
