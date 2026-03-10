# Tile - Code

> Code examples and API documentation for the ix-tile

# Tile - Code

## Basic

### React Examples

#### tile.tsx
```tsx
import './tile.scoped.css';

import { IxButton, IxIconButton, IxTile } from '@siemens/ix-react';
import {
  iconChevronRightSmall,
  iconContextMenu,
} from '@siemens/ix-icons/icons';

export default () => {
  return (
    <div className="example">
      <IxTile size="small">92.8 °C</IxTile>

      <IxTile size="medium">
        <div slot="header">Tile header</div>
        <div className="text-l">92.8 °C</div>
      </IxTile>

      <IxTile size="big">
        <div className="tile-header" slot="header">
          Tile header
          <IxIconButton variant="tertiary" icon={iconContextMenu}></IxIconButton>
        </div>
        <div slot="subheader">Temperature</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <span>92.8 °C</span>
        </div>
        <div className="tile-footer" slot="footer">
        <IxButton variant="tertiary" icon={iconChevronRightSmall} slot="footer">
            Details
        </IxButton>
        </div>
      </IxTile>
    </div>
  );
};
```

#### tile.scoped.css
```css
ix-tile {
  margin-bottom: 0.5rem;
}

.tile-header {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
}

.tile-footer {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
```

### Angular Examples

#### tile.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-tile size="small">92.8 °C</ix-tile>

    <ix-tile size="medium">
      <div slot="header">Tile header</div>
      <div class="text-l">92.8 °C</div>
    </ix-tile>

    <ix-tile size="big">
      <div class="tile-header" slot="header">
        Tile header
        <ix-icon-button variant="tertiary" icon="context-menu"></ix-icon-button>
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
      <div class="tile-footer" slot="footer">
        <ix-button variant="tertiary" icon="chevron-right-small" slot="footer">
          Details
        </ix-button>
      </div>
    </ix-tile>
  `,
  styleUrls: ['./tile.css'],
})
export default class Tile {}
```

#### tile.css
```css
ix-tile {
  margin-bottom: 0.5rem;
}

.tile-header {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
}

.tile-footer {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
```

### Angular Standalone Examples

#### tile.ts
```ts
import { Component } from '@angular/core';
import {
  IxTile,
  IxIconButton,
  IxButton,
  IxIcon,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTile, IxIconButton, IxButton, IxIcon],
  template: `
    <ix-tile size="small">92.8 °C</ix-tile>

    <ix-tile size="medium">
      <div slot="header">Tile header</div>
      <div class="text-l">92.8 °C</div>
    </ix-tile>

    <ix-tile size="big">
      <div class="tile-header" slot="header">
        Tile header
        <ix-icon-button variant="tertiary" icon="context-menu"></ix-icon-button>
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
      <div class="tile-footer" slot="footer">
        <ix-button variant="tertiary" slot="footer">
          <ix-icon name="chevron-right-small"></ix-icon>Details
        </ix-button>
      </div>
    </ix-tile>
  `,
  styleUrls: ['./tile.css'],
})
export default class Tile {}
```

#### tile.css
```css
ix-tile {
  margin-bottom: 0.5rem;
}

.tile-header {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
}

.tile-footer {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
```

### Vue Examples

#### tile.vue
```vue
<script setup lang="ts">
import {
  iconChevronRightSmall,
  iconContextMenu,
} from '@siemens/ix-icons/icons';
import { IxButton, IxIconButton, IxTile } from '@siemens/ix-vue';
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
        <IxIconButton variant="tertiary" :icon="iconContextMenu"></IxIconButton>
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
        <IxButton variant="tertiary" :icon="iconChevronRightSmall" slot="footer">
          Details
        </IxButton>
      </div>
    </IxTile>
  </div>
</template>
```

#### tile.css
```css
ix-tile {
  margin-bottom: 0.5rem;
}

.tile-header {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
}

.tile-footer {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
```

## API for ix-tile

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| size | Size of the tile - one of 'small', 'medium' or 'large' | size | "big" \| "medium" \| "small" | 'medium' |
