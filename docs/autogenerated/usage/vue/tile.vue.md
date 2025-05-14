```vue
<script setup lang="ts">
import {
  iconChevronRightSmall,
  iconContextMenu,
} from '@siemens/ix-icons/icons';
import { IxButton, IxIcon, IxIconButton, IxTile } from '@siemens/ix-vue';
</script>

<style scoped src="./tile.css"></style>

<template>
  <div className="example">
    <IxTile size="small">92.8 °C</IxTile>

    <IxTile size="medium">
      <div slot="header">Tile header</div>
      <div className="text-l">92.8 °C</div>
    </IxTile>

    <IxTile size="big">
      <div className="tile-header" slot="header">
        Tile header
        <IxIconButton ghost :icon="iconContextMenu"></IxIconButton>
      </div>
      <div slot="subheader">Temperature</div>
      <div
        style="
          display: flex;
          flex-direction: column;
          height: 100%;
          align-items: flex-end;
          justify-content: space-between;
        "
      >
        <span>92.8 °C</span>
      </div>
      <div className="tile-footer" slot="footer">
        <IxButton ghost slot="footer">
          <IxIcon :name="iconChevronRightSmall"></IxIcon>Details
        </IxButton>
      </div>
    </IxTile>
  </div>
</template>
```
