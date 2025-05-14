```vue
<script lang="ts">
import { IxTextarea } from '@siemens/ix-vue'

export default {
  name: 'TextareaRowsCols',
  components: { IxTextarea },
};
</script>

<template>
  <IxTextarea
    :maxLength="100"
    name="comment"
    label="Comment"
    :textarea-rows="15"
    :textarea-cols="20"
    helper-text="Let us know if you have any special requests or comments. We will do our best to accommodate you."
  ></IxTextarea>
</template>
```
