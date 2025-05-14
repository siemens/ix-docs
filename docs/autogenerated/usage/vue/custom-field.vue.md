```vue
<script setup lang="ts">
import { ref } from 'vue';
import { IxCustomField, IxInput, IxIconButton } from '@siemens/ix-vue';

const input = ref();
const openFileBrowser = () => {
  input.value.click();
};
</script>

<template>
  <IxCustomField helper-text="Choose file">
    <IxInput value="Enter text here" readonly></IxInput>
    <IxIconButton
      icon="open-file"
      variant="primary"
      outline
      @click="openFileBrowser()"
    ></IxIconButton>
    <input
      ref="input"
      id="file-upload"
      type="file"
      style="display: none"
      @input="(e: any) => console.log(e.target.files)"
    />
  </IxCustomField>
</template>
```
