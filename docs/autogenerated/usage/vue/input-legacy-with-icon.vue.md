```vue
<script setup lang="ts">
import { iconAbout } from '@siemens/ix-icons/icons';
import { IxInputGroup } from '@siemens/ix-vue';
</script>

<template>
  <form className="needs-validation">
    <IxInputGroup>
      <input class="ix-form-control" type="text" />
      <span slot="input-end">
        <IxIcon :name="iconAbout" size="16"></IxIcon>
      </span>
    </IxInputGroup>
  </form>
</template>
```
