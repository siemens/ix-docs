```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const input = ref<HTMLInputElement>();

onMounted(() => {
  const element = input.value;
  if (element) element.indeterminate = true;
});
</script>

<template>
  <input class="ix-form-control" type="checkbox" id="checkbox_01" ref="input" />
  <label class="ix-form-label" htmlFor="checkbox_01">Simple checkbox</label>
</template>
```
