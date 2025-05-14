```vue
<script lang="ts">
import { IxTextarea } from '@siemens/ix-vue';

export default {
  name: 'TextareaDisabled',
  components: { IxTextarea },
};
</script>

<template>
  <IxTextarea
    value="Some text"
    disabled
  ></IxTextarea>
</template>
```
