# Flip - Code

> Code examples and API documentation for the ix-flip-tile

# Flip - Code

## Basic

### React Examples

#### flip-tile.tsx
```tsx
import './flip-tile.scoped.css';

import { IxFlipTile, IxFlipTileContent, IxIcon } from '@siemens/ix-react';
import { iconInfo } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <div className="flip-tile">
      <IxFlipTile>
        <div slot="header">Flip header</div>

        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="footer-date">
            <IxIcon name={iconInfo} size="16"></IxIcon>2021-06-22
          </div>
        </div>

        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>

      <IxFlipTile variant={'primary'}>
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="footer-date">
            <IxIcon name={iconInfo} size="16"></IxIcon>2021-06-22
          </div>
        </div>
        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>

      <IxFlipTile variant={'info'}>
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="footer-date">
            <IxIcon name={iconInfo} size="16"></IxIcon>2021-06-22
          </div>
        </div>
        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>

      <IxFlipTile variant={'warning'}>
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="footer-date">
            <IxIcon name={iconInfo} size="16"></IxIcon>2021-06-22
          </div>
        </div>
        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>

      <IxFlipTile variant={'alarm'}>
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div className="footer-date">
            <IxIcon name={iconInfo} size="16"></IxIcon>2021-06-22
          </div>
        </div>
        <IxFlipTileContent> Example 1 </IxFlipTileContent>
        <IxFlipTileContent> Example 2 </IxFlipTileContent>
      </IxFlipTile>
    </div>
  );
};
```

#### flip-tile.scoped.css
```css
.flip-tile {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-top: 2rem;
  max-width: 100%;
  flex-wrap: wrap;
}

.flip-tile > ix-flip-tile {
  margin: 0 0.5rem 0.5rem 0;
}

.footer-date {
  display: flex;
  align-items: center;
}
```

### Angular Examples

#### flip-tile.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="flip-tile">
      <ix-flip-tile>
        <div slot="header">Flip header</div>

        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>

        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>

      <ix-flip-tile variant="primary">
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>
        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>

      <ix-flip-tile variant="info">
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>
        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>

      <ix-flip-tile variant="warning">
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>
        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>

      <ix-flip-tile variant="alarm">
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>
        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>
    </div>
  `,
  styleUrls: ['./flip-tile.css'],
})
export default class FlipTile {}
```

#### flip-tile.css
```css
.flip-tile {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-top: 2rem;
  max-width: 100%;
  flex-wrap: wrap;
}

.flip-tile > ix-flip-tile {
  margin: 0 0.5rem 0.5rem 0;
}

.footer-date {
  display: flex;
  align-items: center;
}
```

### Angular Standalone Examples

#### flip-tile.ts
```ts
import { Component } from '@angular/core';
import {
  IxFlipTile,
  IxIcon,
  IxFlipTileContent,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxFlipTile, IxIcon, IxFlipTileContent],
  template: `
    <div class="flip-tile">
      <ix-flip-tile>
        <div slot="header">Flip header</div>

        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>

        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>

      <ix-flip-tile variant="primary">
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>
        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>

      <ix-flip-tile variant="info">
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>
        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>

      <ix-flip-tile variant="warning">
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>
        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>

      <ix-flip-tile variant="alarm">
        <div slot="header">Flip header</div>
        <div slot="footer">
          <div>Predicted maintenance date</div>
          <div class="footer-date">
            <ix-icon name="info" size="16"></ix-icon>2021-06-22
          </div>
        </div>
        <ix-flip-tile-content> Example 1 </ix-flip-tile-content>
        <ix-flip-tile-content> Example 2 </ix-flip-tile-content>
      </ix-flip-tile>
    </div>
  `,
  styleUrls: ['./flip-tile.css'],
})
export default class FlipTile {}
```

#### flip-tile.css
```css
.flip-tile {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-top: 2rem;
  max-width: 100%;
  flex-wrap: wrap;
}

.flip-tile > ix-flip-tile {
  margin: 0 0.5rem 0.5rem 0;
}

.footer-date {
  display: flex;
  align-items: center;
}
```

### Vue Examples

#### flip-tile.vue
```vue
<script setup lang="ts">
import { iconInfo } from '@siemens/ix-icons/icons';
import { IxFlipTile, IxFlipTileContent, IxIcon } from '@siemens/ix-vue';
</script>

<style scoped src="./flip-tile.css"></style>

<template>
  <div class="flip-tile">
    <IxFlipTile>
      <div slot="header">Flip header</div>

      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div className="footer-date">
          <IxIcon :name="iconInfo" size="16"></IxIcon>2021-06-22
        </div>
      </div>

      <IxFlipTileContent> Example 1 </IxFlipTileContent>
      <IxFlipTileContent> Example 2 </IxFlipTileContent>
    </IxFlipTile>

    <IxFlipTile variant="primary">
      <div slot="header">Flip header</div>
      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div className="footer-date">
          <IxIcon :name="iconInfo" size="16"></IxIcon>2021-06-22
        </div>
      </div>
      <IxFlipTileContent> Example 1 </IxFlipTileContent>
      <IxFlipTileContent> Example 2 </IxFlipTileContent>
    </IxFlipTile>

    <IxFlipTile variant="info">
      <div slot="header">Flip header</div>
      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div className="footer-date">
          <IxIcon :name="iconInfo" size="16"></IxIcon>2021-06-22
        </div>
      </div>
      <IxFlipTileContent> Example 1 </IxFlipTileContent>
      <IxFlipTileContent> Example 2 </IxFlipTileContent>
    </IxFlipTile>

    <IxFlipTile variant="warning">
      <div slot="header">Flip header</div>
      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div className="footer-date">
          <IxIcon :name="iconInfo" size="16"></IxIcon>2021-06-22
        </div>
      </div>
      <IxFlipTileContent> Example 1 </IxFlipTileContent>
      <IxFlipTileContent> Example 2 </IxFlipTileContent>
    </IxFlipTile>

    <IxFlipTile variant="alarm">
      <div slot="header">Flip header</div>
      <div slot="footer">
        <div>Predicted maintenance date</div>
        <div className="footer-date">
          <IxIcon :name="iconInfo" size="16"></IxIcon>2021-06-22
        </div>
      </div>
      <IxFlipTileContent> Example 1 </IxFlipTileContent>
      <IxFlipTileContent> Example 2 </IxFlipTileContent>
    </IxFlipTile>
  </div>
</template>
```

#### flip-tile.css
```css
.flip-tile {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-top: 2rem;
  max-width: 100%;
  flex-wrap: wrap;
}

.flip-tile > ix-flip-tile {
  margin: 0 0.5rem 0.5rem 0;
}

.footer-date {
  display: flex;
  align-items: center;
}
```

## API for ix-flip-tile

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelEyeIconButton | ARIA label for the eye icon button Will be set as aria-label on the nested HTML button element | aria-label-eye-icon-button | string \| undefined |  |
| height | Height interpreted as REM | height | "auto" \| number | 15.125 |
| index | Index of the currently visible content | index | number | 0 |
| variant | Variation of the Flip | variant | "alarm" \| "filled" \| "info" \| "outline" \| "primary" \| "warning" | 'filled' |
| width | Width interpreted as REM | width | "auto" \| number | 16 |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| toggle | Event emitted when the index changes | toggle | number |
