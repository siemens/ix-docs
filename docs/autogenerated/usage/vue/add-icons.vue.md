```vue
<script setup lang="ts">
import { IxIcon } from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import { iconStar, iconStarFilled } from '@siemens/ix-icons/icons';
addIcons({ iconStar, iconStarFilled });
</script>

<template>
  <IxIcon :name="iconStar"></IxIcon>
  <IxIcon :name="iconStar"></IxIcon>

  <IxIcon :name="iconStarFilled"></IxIcon>
  <IxIcon :name="iconStarFilled"></IxIcon>
  <IxIcon :name="iconStarFilled"></IxIcon>
</template>
```
