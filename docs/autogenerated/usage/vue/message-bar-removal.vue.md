```vue
<script setup lang="ts">
import { ref } from 'vue';
import { IxMessageBar, IxButton } from '@siemens/ix-vue';

const messageBarVisible = ref(true);

const handleCloseAnimationCompleted = () => {
  messageBarVisible.value = false;
};

const handleShowMessage = () => {
  messageBarVisible.value = true;
};
</script>

<style scoped src="./message-bar.css"></style>

<template>
  <div class="message-bar">
    <IxButton
      v-if="!messageBarVisible"
      @click="handleShowMessage"
    >
      Show message bar
    </IxButton>
    <IxMessageBar
      v-if="messageBarVisible"
      @closeAnimationCompleted="handleCloseAnimationCompleted"
    >
      Message text
    </IxMessageBar>
  </div>
</template>
```
