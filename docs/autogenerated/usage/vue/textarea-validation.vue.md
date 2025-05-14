```vue
<script lang='ts'>
import { IxTextarea } from '@siemens/ix-vue';

export default {
  name: 'TextareaValidation',
  components: { IxTextarea },
};
</script>

<template>
  <div>
    <IxTextarea
      :max-length="100"
      name="comment"
      label="Comment"
      info-text="Info text"
      class="ix-info"
    ></IxTextarea>
  </div>

  <div>
    <IxTextarea
      :max-length="100"
      name="comment"
      label="Comment"
      warning-text="Warning text"
      class="ix-warning"
    ></IxTextarea>
  </div>

  <div>
    <IxTextarea
      :max-length="100"
      name="comment"
      label="Comment"
      valid-text="Valid text"
      class="valid"
    ></IxTextarea>
  </div>

  <div>
    <IxTextarea
      :max-length="100"
      name="comment"
      label="Comment"
      invalid-text="Invalid text"
      class="ix-invalid"
    ></IxTextarea>
  </div>
</template>
```
