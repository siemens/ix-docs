# Pill - Code

> Code examples and API documentation for the ix-pill

# Pill - Code

## Basic

### React Examples

#### pill.tsx
```tsx
import { iconStar } from '@siemens/ix-icons/icons';
import './pill.scoped.css';

import { IxPill } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxPill variant="custom" color="white" background="purple">
        Label
      </IxPill>

      <IxPill tooltipText="Custom tooltip text">Label</IxPill>
      <IxPill variant="subtle-primary" tooltipText>
        Label
      </IxPill>
      <IxPill className="styled">Label</IxPill>

      <IxPill icon={iconStar}>Label</IxPill>
      <IxPill icon={iconStar}></IxPill>
      <IxPill icon={iconStar} className="styled">
        Label
      </IxPill>
      <IxPill variant="subtle-primary" alignLeft icon={iconStar} className="styled">
        Label
      </IxPill>

      <IxPill variant="alarm">Label</IxPill>
      <IxPill variant="alarm">
        Label
      </IxPill>
      <IxPill variant="alarm" className="styled">
        Label
      </IxPill>

      <IxPill variant="alarm" icon={iconStar}>
        Label
      </IxPill>
      <IxPill variant="alarm" icon={iconStar} className="styled">
        Label
      </IxPill>
      <IxPill variant="alarm" alignLeft icon={iconStar} className="styled">
        Label
      </IxPill>

      <IxPill icon={iconStar} className="styled-ellipsis-4">
        Label
      </IxPill>
      <IxPill variant="subtle-primary" icon={iconStar} className="styled-ellipsis-4">
        Label
      </IxPill>
      <IxPill className="styled-ellipsis-3">Label</IxPill>
      <IxPill variant="subtle-primary" className="styled-ellipsis-3">
        Label
      </IxPill>
    </>
  );
};
```

#### pill.scoped.css
```css
ix-pill {
  margin: 0 0.5rem 0.5rem 0;
}

.styled {
  width: 8rem;
}

.styled-ellipsis-3 {
  width: 3rem;
}

.styled-ellipsis-4 {
  width: 4rem;
}
```

### Angular Examples

#### pill.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  styleUrls: ['./pill.css'],
  templateUrl: './pill.html',
})
export default class Pill {}
```

#### pill.html
```html
<ix-pill variant="custom" color="white" background="purple">Label</ix-pill>

<ix-pill tooltip-text="Custom tooltip text">Label</ix-pill>
<ix-pill variant="subtle-primary" tooltip-text>Label</ix-pill>
<ix-pill class="styled">Label</ix-pill>

<ix-pill icon="star">Label</ix-pill>
<ix-pill icon="star"></ix-pill>
<ix-pill icon="star" class="styled">Label</ix-pill>
<ix-pill variant="subtle-primary" alignLeft icon="star" class="styled">Label</ix-pill>

<ix-pill variant="alarm">Label</ix-pill>
<ix-pill variant="alarm">Label</ix-pill>
<ix-pill variant="alarm" class="styled">Label</ix-pill>

<ix-pill variant="alarm" icon="star">Label</ix-pill>
<ix-pill variant="alarm" icon="star" class="styled">Label</ix-pill>
<ix-pill variant="alarm" alignLeft icon="star" class="styled">
  Label
</ix-pill>
<ix-pill icon="star" class="styled-ellipsis-4">Label</ix-pill>
<ix-pill variant="subtle-primary" icon="star" class="styled-ellipsis-4">Label</ix-pill>
<ix-pill class="styled-ellipsis-3">Label</ix-pill>
<ix-pill variant="subtle-primary" class="styled-ellipsis-3">Label</ix-pill>
```

#### pill.css
```css
ix-pill {
  margin: 0 0.5rem 0.5rem 0;
}

.styled {
  width: 8rem;
}

.styled-ellipsis-3 {
  width: 3rem;
}

.styled-ellipsis-4 {
  width: 4rem;
}
```

### Angular Standalone Examples

#### pill.ts
```ts
import { Component } from '@angular/core';
import { IxPill } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxPill],
  styleUrls: ['./pill.css'],
  template: `
    <ix-pill variant="custom" color="white" background="purple">
      Label
    </ix-pill>

    <ix-pill>Label</ix-pill>
    <ix-pill variant="subtle-primary">Label</ix-pill>
    <ix-pill class="styled">Label</ix-pill>

    <ix-pill icon="star">Label</ix-pill>
    <ix-pill icon="star" class="styled"> Label </ix-pill>
    <ix-pill variant="subtle-primary" alignLeft icon="star" class="styled"> Label </ix-pill>

    <ix-pill variant="alarm">Label</ix-pill>
    <ix-pill variant="alarm"> Label </ix-pill>
    <ix-pill variant="alarm" class="styled"> Label </ix-pill>

    <ix-pill variant="alarm" icon="star"> Label </ix-pill>
    <ix-pill variant="alarm" icon="star" class="styled"> Label </ix-pill>
    <ix-pill variant="alarm" alignLeft icon="star" class="styled">
      Label
    </ix-pill>
  `,
})
export default class Pill {}
```

#### pill.css
```css
ix-pill {
  margin: 0 0.5rem 0.5rem 0;
}

.styled {
  width: 8rem;
}

.styled-ellipsis-3 {
  width: 3rem;
}

.styled-ellipsis-4 {
  width: 4rem;
}
```

### Vue Examples

#### pill.vue
```vue
<script setup lang="ts">
import { iconStar } from '@siemens/ix-icons/icons';
import { IxPill } from '@siemens/ix-vue';
</script>

<style scoped src="./pill.css"></style>

<template>
  <IxPill variant="custom" color="white" background="purple">Label</IxPill>

  <IxPill tooltip-text="Custom tooltip text">Label</IxPill>
  <IxPill variant="subtle-primary" tooltip-text>Label</IxPill>
  <IxPill class="styled">Label</IxPill>

  <IxPill :icon="iconStar">Label</IxPill>
  <IxPill :icon="iconStar"></IxPill>
  <IxPill :icon="iconStar" class="styled">Label</IxPill>
  <IxPill variant="subtle-primary" alignLeft :icon="iconStar" class="styled">Label</IxPill>

  <IxPill variant="alarm">Label</IxPill>
  <IxPill variant="alarm">Label</IxPill>
  <IxPill variant="alarm" class="styled">Label</IxPill>

  <IxPill variant="alarm" :icon="iconStar">Label</IxPill>
  <IxPill variant="alarm" :icon="iconStar" class="styled">Label</IxPill>
  <IxPill variant="alarm" alignLeft :icon="iconStar" class="styled">
    Label
  </IxPill>
  <IxPill :icon="iconStar" class="styled-ellipsis-4">Label</IxPill>
  <IxPill variant="subtle-primary" :icon="iconStar" class="styled-ellipsis-4">Label</IxPill>
  <IxPill class="styled-ellipsis-3">Label</IxPill>
  <IxPill variant="subtle-primary" class="styled-ellipsis-3">Label</IxPill>
</template>
```

#### pill.css
```css
ix-pill {
  margin: 0 0.5rem 0.5rem 0;
}

.styled {
  width: 8rem;
}

.styled-ellipsis-3 {
  width: 3rem;
}

.styled-ellipsis-4 {
  width: 4rem;
}
```

## Variants

### React Examples

#### pill-variants.tsx
```tsx
import { iconInfo } from '@siemens/ix-icons/icons';
import './pill-variants.scoped.css';

import { IxCol, IxLayoutGrid, IxPill, IxRow } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxLayoutGrid>
        <IxRow>
          <IxCol>
            <IxPill icon={iconInfo}>Primary</IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="subtle-primary" icon={iconInfo}>
              Primary
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="alarm" icon={iconInfo}>
              Alarm
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="alarm" icon={iconInfo}>
              Alarm
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="critical" icon={iconInfo}>
              Critical
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="critical" icon={iconInfo}>
              Critical
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="warning" icon={iconInfo}>
              Warning
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="warning" icon={iconInfo}>
              Warning
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="success" icon={iconInfo}>
              Success
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="success" icon={iconInfo}>
              Success
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="info" icon={iconInfo}>
              Info
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="info" icon={iconInfo}>
              Info
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="neutral" icon={iconInfo}>
              Neutral
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="neutral" icon={iconInfo}>
              Neutral
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill
              variant="custom"
              color="color-soft-text"
              background="purple"
              icon={iconInfo}
            >
              Custom
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="custom" color="color-soft-text" background="purple" icon={iconInfo}>
              Custom
            </IxPill>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>
    </>
  );
};
```

#### pill-variants.scoped.css
```css
ix-pill {
  min-width: 7rem;
}
```

### Angular Examples

#### pill-variants.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  styleUrls: ['./pill-variants.css'],
  template: `
    <ix-layout-grid>
      <ix-row>
        <ix-col>
          <ix-pill icon="info"> Primary </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="subtle-primary" icon="info"> Primary </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="alarm" icon="info"> Alarm </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="alarm" icon="info"> Alarm </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="critical" icon="info"> Critical </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="critical" icon="info"> Critical </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="warning" icon="info"> Warning </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="warning" icon="info"> Warning </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="success" icon="info"> Success </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="success" icon="info"> Success </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="info" icon="info"> Info </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="info" icon="info"> Info </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="neutral" icon="info"> Neutral </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="neutral" icon="info"> Neutral </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill
            variant="custom"
            color="color-soft-text"
            background="purple"
            icon="info"
          >
            Custom
          </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="custom" color="color-soft-text" background="purple" icon="info">
            Custom
          </ix-pill>
        </ix-col>
      </ix-row>
    </ix-layout-grid>
  `,
})
export default class Pill {}
```

#### pill-variants.css
```css
ix-pill {
  min-width: 7rem;
}
```

### Angular Standalone Examples

#### pill-variants.ts
```ts
import { Component } from '@angular/core';
import {
  IxLayoutGrid,
  IxRow,
  IxCol,
  IxPill,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLayoutGrid, IxRow, IxCol, IxPill],
  styleUrls: ['./pill-variants.css'],
  template: `
    <ix-layout-grid>
      <ix-row>
        <ix-col>
          <ix-pill icon="info"> Primary </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="subtle-primary" icon="info"> Primary </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="alarm" icon="info"> Alarm </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="alarm" icon="info"> Alarm </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="critical" icon="info"> Critical </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="critical" icon="info"> Critical </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="warning" icon="info"> Warning </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="warning" icon="info"> Warning </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="success" icon="info"> Success </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="success" icon="info"> Success </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="info" icon="info"> Info </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="info" icon="info"> Info </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="neutral" icon="info"> Neutral </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="neutral" icon="info"> Neutral </ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill
            variant="custom"
            color="color-soft-text"
            background="purple"
            icon="info"
          >
            Custom
          </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="custom" color="color-soft-text" background="purple" icon="info">
            Custom
          </ix-pill>
        </ix-col>
      </ix-row>
    </ix-layout-grid>
  `,
})
export default class Pill {}
```

#### pill-variants.css
```css
ix-pill {
  min-width: 7rem;
}
```

### Vue Examples

#### pill-variants.vue
```vue
<script setup lang="ts">
import { iconInfo } from '@siemens/ix-icons/icons';
import { IxCol, IxLayoutGrid, IxPill, IxRow } from '@siemens/ix-vue';
</script>

<style scoped src="./pill-variants.css"></style>

<template>
  <IxLayoutGrid>
    <IxRow>
      <IxCol>
        <IxPill :icon="iconInfo"> Primary </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="subtle-primary" :icon="iconInfo"> Primary </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="alarm" :icon="iconInfo"> Alarm </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="alarm" :icon="iconInfo"> Alarm </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="critical" :icon="iconInfo"> Critical </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="critical" :icon="iconInfo"> Critical </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="warning" :icon="iconInfo"> Warning </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="warning" :icon="iconInfo"> Warning </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="success" :icon="iconInfo"> Success </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="success" :icon="iconInfo"> Success </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="info" :icon="iconInfo"> Info </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="info" :icon="iconInfo"> Info </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="neutral" :icon="iconInfo"> Neutral </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="neutral" :icon="iconInfo"> Neutral </IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill
          variant="custom"
          color="color-soft-text"
          background="purple"
          :icon="iconInfo"
        >
          Custom
        </IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="custom" color="color-soft-text" background="purple" :icon="iconInfo">
          Custom
        </IxPill>
      </IxCol>
    </IxRow>
  </IxLayoutGrid>
</template>
```

#### pill-variants.css
```css
ix-pill {
  min-width: 7rem;
}
```

## API for ix-pill

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| alignLeft | Align pill content left | align-left | boolean | false |
| ariaLabelIcon | ARIA label for the icon | aria-label-icon | string \| undefined |  |
| background | Custom color for pill. Only working for \`variant='custom'\` | background | string \| undefined |  |
| icon | Show icon | icon | string \| undefined |  |
| outline | Show pill as outline | outline | boolean | false |
| pillColor | Custom font color for pill. Only working for \`variant='custom'\` | pill-color | string \| undefined |  |
| tooltipText | Display a tooltip. By default, no tooltip will be displayed. Add the attribute to display the text content of the component as a tooltip or use a string to display a custom text. | tooltip-text | boolean \| string | false |
| variant | Pill variant | variant | "alarm" \| "critical" \| "custom" \| "info" \| "neutral" \| "primary" \| "success" \| "warning" | 'primary' |
