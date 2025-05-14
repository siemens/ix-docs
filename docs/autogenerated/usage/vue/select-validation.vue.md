```vue
<script setup lang="ts">
import { IxSelect, IxSelectItem } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxSelect
      label='Framework options'
      name='framework-option'
      info-text='We will show examples based on your selection.'
      class='ix-info'
    >
      <IxSelectItem value='angular' label='Angular'></IxSelectItem>
      <IxSelectItem value='react' label='React'></IxSelectItem>
      <IxSelectItem value='vue' label='Vue'></IxSelectItem>
    </IxSelect>
  </div>
  <div>
    <IxSelect
      label='Framework options'
      name='framework-option'
      warning-text='Selected Framework is partly supported.'
      class='ix-warning'
      value='blazor'
    >
      <IxSelectItem value='blazor' label='Blazor'></IxSelectItem>
      <IxSelectItem value='nextjs' label='NextJS'></IxSelectItem>
    </IxSelect>
  </div>
  <div>
    <IxSelect
      label='Framework options'
      name='framework-option'
      valid-text='Selected Framework is fully supported.'
      class='ix-valid'
      value='angular'
    >
      <IxSelectItem value='angular' label='Angular'></IxSelectItem>
      <IxSelectItem value='react' label='React'></IxSelectItem>
      <IxSelectItem value='vue' label='Vue'></IxSelectItem>
    </IxSelect>
  </div>
  <div>
    <IxSelect
      label='Framework options'
      name='framework-option'
      invalid-text='Selected Framework is not supported.'
      class='ix-invalid'
      value='svelte'
    >
      <IxSelectItem value='svelte' label='Svelte'></IxSelectItem>
      <IxSelectItem value='solid' label='Solid'></IxSelectItem>
    </IxSelect>
  </div>
</template>
```
