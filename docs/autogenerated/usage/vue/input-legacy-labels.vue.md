```vue
<script setup lang="ts">
import { IxInputGroup } from '@siemens/ix-vue';
</script>

<template>
  <form className="needs-validation">
    <IxInputGroup>
      <span slot="input-start">Label Start</span>
      <input class="ix-form-control" type="text" />
    </IxInputGroup>

    <IxInputGroup>
      <input class="ix-form-control" type="text" />
      <span slot="input-end">Label End</span>
    </IxInputGroup>
  </form>
</template>
```
