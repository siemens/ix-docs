```vue
<script setup lang="ts">
import { TreeModel } from '@siemens/ix';
import { IxTree } from '@siemens/ix-vue';
import { onMounted, ref } from 'vue';

type TreeData = {
  name: string;
};

const model = ref<TreeModel<TreeData>>();

onMounted(() => {
  model.value = {
    root: {
      id: 'root',
      data: {
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
      },
      hasChildren: false,
      children: [],
    },
  };
});
</script>

<template>
  <div style="display: block; position: relative; width: 100%; height: 40rem">
    <IxTree root="root" :model="model"></IxTree>
  </div>
</template>
```
