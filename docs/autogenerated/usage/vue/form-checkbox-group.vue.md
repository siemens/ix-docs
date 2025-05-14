```vue
<script setup lang='ts'>
import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-vue';
</script>

<template>
  <IxCheckboxGroup label="Terms of something">
    <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
    <IxCheckbox label="I agree with most of it" name="most"></IxCheckbox>
  </IxCheckboxGroup>
</template>
```
