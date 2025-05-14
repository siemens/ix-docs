```vue
1

<script setup lang="ts">
import { showModalLoading } from '@siemens/ix';
import { IxButton } from '@siemens/ix-vue';

const startLoading = () => {
  let count = 0;
  const progress = showModalLoading('Loading 0/2');
  const interval = setInterval(() => {
    count++;
    progress.update(`Loading ${count}/2`);

    if (count === 2) {
      progress.finish('Done');
      clearInterval(interval);
    }
  }, 1000);
};
</script>

<template>
  <IxButton @click="startLoading">Start loading</IxButton>
</template>
```
