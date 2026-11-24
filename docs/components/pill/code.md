# Pill - Code

> Code examples and API documentation for the ix-pill

# Pill - Code

:::info
Pills are deprecated and removed in V7.0.0. We recommend using [badges](../badge/index.mdx) with type `label` instead, which support the same compact status and category use cases.
:::

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
      <IxPill
        variant="custom"
        pillColor="var(--si-sys-color-text-inverse)"
        background="var(--si-sys-color-background-accent-hover)"
      >
        Label
      </IxPill>

      <IxPill tooltipText="Custom tooltip text">Label</IxPill>
      <IxPill className="styled">Label</IxPill>

      <IxPill icon={iconStar}>Label</IxPill>
      <IxPill icon={iconStar} aria-label="Featured"></IxPill>
      <IxPill icon={iconStar} className="styled">
        Label
      </IxPill>
      <IxPill
        variant="accent"
        outline
        alignLeft
        icon={iconStar}
        className="styled"
      >
        Label
      </IxPill>

      <IxPill variant="danger">Label</IxPill>
      <IxPill variant="danger" className="styled">
        Label
      </IxPill>

      <IxPill variant="danger" icon={iconStar}>
        Label
      </IxPill>
      <IxPill variant="danger" icon={iconStar} className="styled">
        Label
      </IxPill>
      <IxPill variant="danger" alignLeft icon={iconStar} className="styled">
        Label
      </IxPill>

      <IxPill icon={iconStar} className="styled-ellipsis-4">
        Label
      </IxPill>
      <IxPill
        variant="accent"
        outline
        icon={iconStar}
        className="styled-ellipsis-4"
      >
        Label
      </IxPill>
      <IxPill className="styled-ellipsis-3">Label</IxPill>
      <IxPill variant="accent" outline className="styled-ellipsis-3">
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
<ix-pill
  variant="custom"
  pillColor="var(--si-sys-color-text-inverse)"
  background="var(--si-sys-color-background-accent-hover)"
  >Label</ix-pill
>

<ix-pill tooltipText="Custom tooltip text">Label</ix-pill>
<ix-pill class="styled">Label</ix-pill>

<ix-pill icon="star">Label</ix-pill>
<ix-pill icon="star" aria-label="Featured"></ix-pill>
<ix-pill icon="star" class="styled">Label</ix-pill>
<ix-pill variant="accent" outline alignLeft icon="star" class="styled"
  >Label</ix-pill
>

<ix-pill variant="danger">Label</ix-pill>
<ix-pill variant="danger" class="styled">Label</ix-pill>

<ix-pill variant="danger" icon="star">Label</ix-pill>
<ix-pill variant="danger" icon="star" class="styled">Label</ix-pill>
<ix-pill variant="danger" alignLeft icon="star" class="styled"> Label </ix-pill>
<ix-pill icon="star" class="styled-ellipsis-4">Label</ix-pill>
<ix-pill variant="accent" outline icon="star" class="styled-ellipsis-4"
  >Label</ix-pill
>
<ix-pill class="styled-ellipsis-3">Label</ix-pill>
<ix-pill variant="accent" outline class="styled-ellipsis-3">Label</ix-pill>
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
    <ix-pill
      variant="custom"
      pillColor="var(--si-sys-color-text-inverse)"
      background="var(--si-sys-color-background-accent-hover)"
      >Label</ix-pill
    >

    <ix-pill tooltipText="Custom tooltip text">Label</ix-pill>
    <ix-pill class="styled">Label</ix-pill>

    <ix-pill icon="star">Label</ix-pill>
    <ix-pill icon="star" aria-label="Featured"></ix-pill>
    <ix-pill icon="star" class="styled">Label</ix-pill>
    <ix-pill variant="accent" outline alignLeft icon="star" class="styled"
      >Label</ix-pill
    >

    <ix-pill variant="danger">Label</ix-pill>
    <ix-pill variant="danger" class="styled">Label</ix-pill>

    <ix-pill variant="danger" icon="star">Label</ix-pill>
    <ix-pill variant="danger" icon="star" class="styled">Label</ix-pill>
    <ix-pill variant="danger" alignLeft icon="star" class="styled">
      Label
    </ix-pill>
    <ix-pill icon="star" class="styled-ellipsis-4">Label</ix-pill>
    <ix-pill variant="accent" outline icon="star" class="styled-ellipsis-4"
      >Label</ix-pill
    >
    <ix-pill class="styled-ellipsis-3">Label</ix-pill>
    <ix-pill variant="accent" outline class="styled-ellipsis-3">Label</ix-pill>
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
  <IxPill
    variant="custom"
    pill-color="var(--si-sys-color-text-inverse)"
    background="var(--si-sys-color-background-accent-hover)"
    >Label</IxPill
  >

  <IxPill tooltip-text="Custom tooltip text">Label</IxPill>
  <IxPill class="styled">Label</IxPill>

  <IxPill :icon="iconStar">Label</IxPill>
  <IxPill :icon="iconStar" aria-label="Featured"></IxPill>
  <IxPill :icon="iconStar" class="styled">Label</IxPill>
  <IxPill variant="accent" outline align-left :icon="iconStar" class="styled"
    >Label</IxPill
  >

  <IxPill variant="danger">Label</IxPill>
  <IxPill variant="danger" class="styled">Label</IxPill>

  <IxPill variant="danger" :icon="iconStar">Label</IxPill>
  <IxPill variant="danger" :icon="iconStar" class="styled">Label</IxPill>
  <IxPill variant="danger" align-left :icon="iconStar" class="styled">
    Label
  </IxPill>
  <IxPill :icon="iconStar" class="styled-ellipsis-4">Label</IxPill>
  <IxPill variant="accent" outline :icon="iconStar" class="styled-ellipsis-4"
    >Label</IxPill
  >
  <IxPill class="styled-ellipsis-3">Label</IxPill>
  <IxPill variant="accent" outline class="styled-ellipsis-3">Label</IxPill>
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
            <IxPill variant="danger" icon={iconInfo}>
              Danger
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="danger" outline icon={iconInfo}>
              Danger
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
            <IxPill variant="warning" outline icon={iconInfo}>
              Warning
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="caution" icon={iconInfo}>
              Caution
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="caution" outline icon={iconInfo}>
              Caution
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="information" icon={iconInfo}>
              Information
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="information" outline icon={iconInfo}>
              Information
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill variant="accent" icon={iconInfo}>
              Accent
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill variant="accent" outline icon={iconInfo}>
              Accent
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
            <IxPill variant="critical" outline icon={iconInfo}>
              Critical
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
            <IxPill variant="success" outline icon={iconInfo}>
              Success
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
            <IxPill variant="neutral" outline icon={iconInfo}>
              Neutral
            </IxPill>
          </IxCol>
        </IxRow>

        <IxRow>
          <IxCol>
            <IxPill
              variant="custom"
              pillColor="var(--si-sys-color-text-inverse)"
              background="var(--si-sys-color-background-accent-hover)"
              icon={iconInfo}
            >
              Custom
            </IxPill>
          </IxCol>
          <IxCol>
            <IxPill
              variant="custom"
              outline
              pillColor="var(--si-sys-color-text-accent-hover)"
              background="var(--si-sys-color-background-accent-hover)"
              icon={iconInfo}
            >
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
          <ix-pill variant="danger" icon="info">Danger</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="danger" outline icon="info">Danger</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="warning" icon="info">Warning</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="warning" outline icon="info">Warning</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="caution" icon="info">Caution</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="caution" outline icon="info">Caution</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="information" icon="info">Information</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="information" outline icon="info"
            >Information</ix-pill
          >
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="accent" icon="info">Accent</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="accent" outline icon="info">Accent</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="critical" icon="info">Critical</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="critical" outline icon="info">Critical</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="success" icon="info">Success</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="success" outline icon="info">Success</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="neutral" icon="info">Neutral</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="neutral" outline icon="info">Neutral</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill
            variant="custom"
            pillColor="var(--si-sys-color-text-inverse)"
            background="var(--si-sys-color-background-accent-hover)"
            icon="info"
          >
            Custom
          </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill
            variant="custom"
            outline
            pillColor="var(--si-sys-color-text-accent-hover)"
            background="var(--si-sys-color-background-accent-hover)"
            icon="info"
          >
            Custom
          </ix-pill>
        </ix-col>
      </ix-row>
    </ix-layout-grid>
  `,
})
export default class PillVariants {}
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
          <ix-pill variant="danger" icon="info">Danger</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="danger" outline icon="info">Danger</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="warning" icon="info">Warning</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="warning" outline icon="info">Warning</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="caution" icon="info">Caution</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="caution" outline icon="info">Caution</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="information" icon="info">Information</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="information" outline icon="info"
            >Information</ix-pill
          >
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="accent" icon="info">Accent</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="accent" outline icon="info">Accent</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="critical" icon="info">Critical</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="critical" outline icon="info">Critical</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="success" icon="info">Success</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="success" outline icon="info">Success</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill variant="neutral" icon="info">Neutral</ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill variant="neutral" outline icon="info">Neutral</ix-pill>
        </ix-col>
      </ix-row>

      <ix-row>
        <ix-col>
          <ix-pill
            variant="custom"
            pillColor="var(--si-sys-color-text-inverse)"
            background="var(--si-sys-color-background-accent-hover)"
            icon="info"
          >
            Custom
          </ix-pill>
        </ix-col>
        <ix-col>
          <ix-pill
            variant="custom"
            outline
            pillColor="var(--si-sys-color-text-accent-hover)"
            background="var(--si-sys-color-background-accent-hover)"
            icon="info"
          >
            Custom
          </ix-pill>
        </ix-col>
      </ix-row>
    </ix-layout-grid>
  `,
})
export default class PillVariants {}
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
        <IxPill variant="danger" :icon="iconInfo">Danger</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="danger" outline :icon="iconInfo">Danger</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="warning" :icon="iconInfo">Warning</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="warning" outline :icon="iconInfo">Warning</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="caution" :icon="iconInfo">Caution</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="caution" outline :icon="iconInfo">Caution</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="information" :icon="iconInfo">Information</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="information" outline :icon="iconInfo">Information</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="accent" :icon="iconInfo">Accent</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="accent" outline :icon="iconInfo">Accent</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="critical" :icon="iconInfo">Critical</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="critical" outline :icon="iconInfo">Critical</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="success" :icon="iconInfo">Success</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="success" outline :icon="iconInfo">Success</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill variant="neutral" :icon="iconInfo">Neutral</IxPill>
      </IxCol>
      <IxCol>
        <IxPill variant="neutral" outline :icon="iconInfo">Neutral</IxPill>
      </IxCol>
    </IxRow>

    <IxRow>
      <IxCol>
        <IxPill
          variant="custom"
          pill-color="var(--si-sys-color-text-inverse)"
          background="var(--si-sys-color-background-accent-hover)"
          :icon="iconInfo"
        >
          Custom
        </IxPill>
      </IxCol>
      <IxCol>
        <IxPill
          variant="custom"
          outline
          pill-color="var(--si-sys-color-text-accent-hover)"
          background="var(--si-sys-color-background-accent-hover)"
          :icon="iconInfo"
        >
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

| Name | Description | Attribute | Type | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| alignLeft | { "Align pill content left" } | align-left | boolean | false |  |
| ariaLabelIcon | { "ARIA label for the icon" } | aria-label-icon | string \| undefined |  |  |
| background | { "Custom color for pill. Only working for `variant='custom'`" } | background | string \| undefined |  |  |
| icon | { "Show icon" } | icon | string \| undefined |  |  |
| outline | { "Show pill as outline" } | outline | boolean | false |  |
| pillColor | { "Custom font color for pill. Only working for `variant='custom'`" } | pill-color | string \| undefined |  |  |
| tooltipText | { "Display a tooltip. By default, no tooltip will be displayed.\n\nAdd the attribute to display the text content of the component as a tooltip or use a string to display a custom text." } | tooltip-text | boolean \| string | false |  |
| variant | { "Pill variant.\n\nDefaults to `accent`. When unset or set to an unknown value the pill falls back to `accent` styling." } | variant | "accent" \| "caution" \| "critical" \| "custom" \| "danger" \| "information" \| "neutral" \| "success" \| "warning" | 'accent' | Breaking change in v6.0.0: Status variant values renamed and default changed from primary to accent |

### Slot

| Name | Description |
| --- | --- |
| default | { "Pill content." } |
