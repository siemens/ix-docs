```vue
<script setup lang="ts">
import { IxPane, IxButton } from '@siemens/ix-vue';
import { onMounted, ref } from 'vue';

const expanded = ref<boolean>(false);

const expandedChanged = (event: CustomEvent) => {
  expanded.value = event.detail.expanded;
};

onMounted(() => {
  const pane = document.querySelector('ix-pane');
  pane?.addEventListener('expandedChanged', expandedChanged);
});
</script>

<template>
  <div style="position: relative; width: 100%; height: 100%">
    <IxPane
      heading="Pane Popup"
      composition="right"
      size="50%"
      variant="floating"
      hideOnCollapse
      :expanded="expanded"
      style="position: absolute; right: 0; z-index: 1"
    >
      <p>This is a popup pane.</p>
    </IxPane>

    <IxButton
      @click="
        () => {
          expanded = !expanded;
        }
      "
      style="margin: 2.5rem"
    >
      Toggle Expanded
    </IxButton>
  </div>
</template>
```
