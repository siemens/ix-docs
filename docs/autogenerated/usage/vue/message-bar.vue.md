```vue
<script setup lang="ts">
import { IxButton, IxMessageBar } from '@siemens/ix-vue';
</script>

<style scoped src="./message-bar.css"></style>

<template>
  <div class="message-bar">
    <IxMessageBar :dismissible="false">Message text</IxMessageBar>
    <IxMessageBar :dismissible="false" type="warning">Message text</IxMessageBar>
    <IxMessageBar :dismissible="false" type="danger">
      <div className="message-bar-danger">
        Message text
        <ix-button>Action</ix-button>
      </div>
    </IxMessageBar>
  </div>
</template>
```
