```vue
<script setup lang="ts">
import { iconCapacity } from '@siemens/ix-icons/icons';
import { IxCard, IxCardContent, IxIcon, IxTypography } from '@siemens/ix-vue';

const onClick = (event: Event) => {
  console.log(event);
};
</script>

<style scoped src="./card.css"></style>

<template>
  <IxCard variant="outline" @click="onClick">
    <IxCardContent>
      <IxIcon :name="iconCapacity"></IxIcon>
      <IxTypography bold>Number of components</IxTypography>
      <IxTypography>
        Vanilla JavaScript<br />
        Angular<br />
        Blazor<br />
        React<br />
        Vue.js
      </IxTypography>
      <IxTypography format="h1">123</IxTypography>
    </IxCardContent>
  </IxCard>
</template>
```
