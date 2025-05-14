```vue
<script setup lang="ts">
import { IxActionCard } from '@siemens/ix-vue';
import { iconRefresh } from '@siemens/ix-icons/icons';

const onClick = (event: Event) => {
  console.log(event);
};
</script>

<template>
  <IxActionCard
    :icon="iconRefresh"
    heading="Scan for new devices"
    subheading="Secondary text"
    variant="outline"
    @click="onClick"
  ></IxActionCard>
</template>
```
