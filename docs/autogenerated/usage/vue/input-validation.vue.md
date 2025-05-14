```vue
<script setup lang="ts">
import { IxInput } from '@siemens/ix-vue';

</script>

<template>
  <div>
    <IxInput
      label="Username"
      placeholder="Enter your Username"
      info-text="Info text"
      class="ix-info"
    ></IxInput>
  </div>

  <div>
    <IxInput
      label="Username"
      placeholder="Enter your Username"
      warning-text="Warning text"
      class="ix-warning"
    ></IxInput>
  </div>

  <div>
    <IxInput
      label="Username"
      placeholder="Enter your Username"
      valid-text="Valid text"
      class="ix-valid"
    ></IxInput>
  </div>

  <div>
    <IxInput
      label="Username"
      placeholder="Enter your Username"
      invalid-text="Invalid text"
      class="ix-invalid"
    ></IxInput>
  </div>
</template>
```
