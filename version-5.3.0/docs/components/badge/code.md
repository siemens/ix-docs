# Badge - Code

> Code examples and API documentation for the ix-badge

# Badge - Code

## Basic

### React Examples

#### badge.tsx
```tsx
import { iconInfo, iconStar } from '@siemens/ix-icons/icons';
import './badge.scoped.css';

import { IxBadge, IxButton, IxIconButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div className="row">
        <IxBadge type="counter" label="3" variant="alarm">
          <IxButton aria-label="Review, 3 unread">Review</IxButton>
        </IxBadge>

        <IxBadge type="counter" label="1" variant="alarm" enableAnimation>
          <IxIconButton
            icon={iconInfo}
            aria-label="What's new, 1 notification"
          ></IxIconButton>
        </IxBadge>

        <IxBadge
          type="counter"
          label="9"
          variant="success"
          position="bottom-after"
        >
          <IxButton aria-label="Bottom after, 9 items">Bottom after</IxButton>
        </IxBadge>

        <IxBadge type="dot" variant="alarm">
          <IxButton aria-label="Messages, unread">Messages</IxButton>
        </IxBadge>

        <IxBadge type="status-icon" variant="warning">
          <IxButton aria-label="Device, warning">Device</IxButton>
        </IxBadge>
      </div>

      <div className="row">
        <IxBadge type="counter" label="12" variant="info"></IxBadge>
        <IxBadge type="counter" label="99" variant="warning"></IxBadge>
        <IxBadge type="counter" label="142" variant="primary"></IxBadge>
        <IxBadge type="counter" label="100" variant="alarm"></IxBadge>
        <IxBadge type="counter" label="8" variant="primary" outline></IxBadge>
        <IxBadge type="counter" label="8" variant="primary" border></IxBadge>

        <IxBadge
          type="dot"
          variant="alarm"
          role="img"
          aria-label="Unread"
        ></IxBadge>
        <IxBadge
          type="dot"
          variant="success"
          outline
          role="img"
          aria-label="Online"
        ></IxBadge>

        <IxBadge
          type="status-icon"
          variant="alarm"
          role="img"
          aria-label="Alarm"
        ></IxBadge>
        <IxBadge
          type="status-icon"
          variant="success"
          outline
          role="img"
          aria-label="Success"
        ></IxBadge>
      </div>

      <div className="row">
        <IxBadge
          type="label"
          label="Label"
          variant="alarm"
          alignLeft
          icon={iconStar}
          className="styled"
          tooltipText
        ></IxBadge>
        <IxBadge
          type="label"
          label="Label"
          icon={iconStar}
          className="styled-ellipsis-4"
          tooltipText
        ></IxBadge>
        <IxBadge type="counter" label="12" variant="info" tooltipText></IxBadge>
        <IxBadge
          type="counter"
          label="12"
          variant="info"
          tooltipText="Twelve notifications"
        ></IxBadge>
        <IxBadge
          type="dot"
          variant="alarm"
          role="img"
          aria-label="Unread"
          tooltipText
        ></IxBadge>
        <IxBadge
          type="dot"
          variant="alarm"
          role="img"
          aria-label="Unread"
          tooltipText="Custom tooltip text"
        ></IxBadge>
        <IxBadge
          type="status-icon"
          variant="warning"
          role="img"
          aria-label="Warning"
          tooltipText
        ></IxBadge>
        <IxBadge
          type="status-icon"
          variant="warning"
          role="img"
          aria-label="Warning"
          tooltipText="Custom tooltip text"
        ></IxBadge>
      </div>
    </>
  );
};
```

#### badge.scoped.css
```css
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  
  padding-top: 1.5rem;
}

.styled {
  width: 7rem;
  --ix-badge-max-width: 7rem;
}

.styled-ellipsis-4 {
  width: 4rem;
  --ix-badge-max-width: 4rem;
}
```

### Angular Examples

#### badge.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import { iconInfo, iconStar } from '@siemens/ix-icons/icons';

addIcons({ iconInfo, iconStar });

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './badge.html',
  styleUrls: ['./badge.css'],
})
export default class Badge {}
```

#### badge.html
```html
<div class="row">
  <ix-badge type="counter" label="3" variant="alarm"><ix-button aria-label="Review, 3 unread">Review</ix-button></ix-badge>
  <ix-badge type="counter" label="1" variant="alarm" enable-animation><ix-icon-button icon="info" aria-label="What's new, 1 notification"></ix-icon-button></ix-badge>
  <ix-badge type="counter" label="9" variant="success" position="bottom-after"><ix-button aria-label="Bottom after, 9 items">Bottom after</ix-button></ix-badge>
  <ix-badge type="dot" variant="alarm"><ix-button aria-label="Messages, unread">Messages</ix-button></ix-badge>
  <ix-badge type="status-icon" variant="warning"><ix-button aria-label="Device, warning">Device</ix-button></ix-badge>
</div>

<div class="row">
  <ix-badge type="counter" label="12" variant="info"></ix-badge>
  <ix-badge type="counter" label="99" variant="warning"></ix-badge>
  <ix-badge type="counter" label="142" variant="primary"></ix-badge>
  <ix-badge type="counter" label="100" variant="alarm"></ix-badge>
  <ix-badge type="counter" label="8" variant="primary" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="primary" border></ix-badge>
  <ix-badge type="dot" variant="alarm" role="img" aria-label="Unread"></ix-badge>
  <ix-badge type="dot" variant="success" outline role="img" aria-label="Online"></ix-badge>
  <ix-badge type="status-icon" variant="alarm" role="img" aria-label="Alarm"></ix-badge>
  <ix-badge type="status-icon" variant="success" outline role="img" aria-label="Success"></ix-badge>
</div>

<div class="row">
  <ix-badge type="label" label="Label" variant="alarm" align-left icon="star" class="styled" tooltip-text></ix-badge>
  <ix-badge type="label" label="Label" icon="star" class="styled-ellipsis-4" tooltip-text></ix-badge>
  <ix-badge type="counter" label="12" variant="info" tooltip-text></ix-badge>
  <ix-badge type="counter" label="12" variant="info" tooltip-text="Twelve notifications"></ix-badge>
  <ix-badge type="dot" variant="alarm" role="img" aria-label="Unread" tooltip-text></ix-badge>
  <ix-badge type="dot" variant="alarm" role="img" aria-label="Unread" tooltip-text="Custom tooltip text"></ix-badge>
  <ix-badge type="status-icon" variant="warning" role="img" aria-label="Warning" tooltip-text></ix-badge>
  <ix-badge type="status-icon" variant="warning" role="img" aria-label="Warning" tooltip-text="Custom tooltip text"></ix-badge>
</div>
```

#### badge.css
```css
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  
  padding-top: 1.5rem;
}

.styled {
  width: 7rem;
  --ix-badge-max-width: 7rem;
}

.styled-ellipsis-4 {
  width: 4rem;
  --ix-badge-max-width: 4rem;
}
```

### Angular Standalone Examples

#### badge.ts
```ts
import { Component } from '@angular/core';
import { IxBadge, IxButton, IxIconButton } from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import { iconInfo, iconStar } from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxBadge, IxButton, IxIconButton],
  templateUrl: './badge.html',
  styleUrls: ['./badge.css'],
})
export default class Badge {
  constructor() {
    addIcons({ iconInfo, iconStar });
  }
}
```

#### badge.html
```html
<div class="row">
  <ix-badge type="counter" label="3" variant="alarm"><ix-button aria-label="Review, 3 unread">Review</ix-button></ix-badge>
  <ix-badge type="counter" label="1" variant="alarm" enable-animation><ix-icon-button icon="info" aria-label="What's new, 1 notification"></ix-icon-button></ix-badge>
  <ix-badge type="counter" label="9" variant="success" position="bottom-after"><ix-button aria-label="Bottom after, 9 items">Bottom after</ix-button></ix-badge>
  <ix-badge type="dot" variant="alarm"><ix-button aria-label="Messages, unread">Messages</ix-button></ix-badge>
  <ix-badge type="status-icon" variant="warning"><ix-button aria-label="Device, warning">Device</ix-button></ix-badge>
</div>

<div class="row">
  <ix-badge type="counter" label="12" variant="info"></ix-badge>
  <ix-badge type="counter" label="99" variant="warning"></ix-badge>
  <ix-badge type="counter" label="142" variant="primary"></ix-badge>
  <ix-badge type="counter" label="100" variant="alarm"></ix-badge>
  <ix-badge type="counter" label="8" variant="primary" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="primary" border></ix-badge>
  <ix-badge type="dot" variant="alarm" role="img" aria-label="Unread"></ix-badge>
  <ix-badge type="dot" variant="success" outline role="img" aria-label="Online"></ix-badge>
  <ix-badge type="status-icon" variant="alarm" role="img" aria-label="Alarm"></ix-badge>
  <ix-badge type="status-icon" variant="success" outline role="img" aria-label="Success"></ix-badge>
</div>

<div class="row">
  <ix-badge type="label" label="Label" variant="alarm" align-left icon="star" class="styled" tooltip-text></ix-badge>
  <ix-badge type="label" label="Label" icon="star" class="styled-ellipsis-4" tooltip-text></ix-badge>
  <ix-badge type="counter" label="12" variant="info" tooltip-text></ix-badge>
  <ix-badge type="counter" label="12" variant="info" tooltip-text="Twelve notifications"></ix-badge>
  <ix-badge type="dot" variant="alarm" role="img" aria-label="Unread" tooltip-text></ix-badge>
  <ix-badge type="dot" variant="alarm" role="img" aria-label="Unread" tooltip-text="Custom tooltip text"></ix-badge>
  <ix-badge type="status-icon" variant="warning" role="img" aria-label="Warning" tooltip-text></ix-badge>
  <ix-badge type="status-icon" variant="warning" role="img" aria-label="Warning" tooltip-text="Custom tooltip text"></ix-badge>
</div>
```

#### badge.css
```css
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  
  padding-top: 1.5rem;
}

.styled {
  width: 7rem;
  --ix-badge-max-width: 7rem;
}

.styled-ellipsis-4 {
  width: 4rem;
  --ix-badge-max-width: 4rem;
}
```

### Vue Examples

#### badge.vue
```vue
<script setup lang="ts">
import { iconInfo, iconStar } from '@siemens/ix-icons/icons';
import { IxBadge, IxButton, IxIconButton } from '@siemens/ix-vue';
</script>

<style scoped src="./badge.css"></style>

<template>
  <div class="row">
    <IxBadge type="counter" label="3" variant="alarm"><IxButton aria-label="Review, 3 unread">Review</IxButton></IxBadge>
    <IxBadge type="counter" label="1" variant="alarm" enable-animation><IxIconButton :icon="iconInfo" aria-label="What's new, 1 notification"></IxIconButton></IxBadge>
    <IxBadge type="counter" label="9" variant="success" position="bottom-after"><IxButton aria-label="Bottom after, 9 items">Bottom after</IxButton></IxBadge>
    <IxBadge type="dot" variant="alarm"><IxButton aria-label="Messages, unread">Messages</IxButton></IxBadge>
    <IxBadge type="status-icon" variant="warning"><IxButton aria-label="Device, warning">Device</IxButton></IxBadge>
  </div>

  <div class="row">
    <IxBadge type="counter" label="12" variant="info"></IxBadge>
    <IxBadge type="counter" label="99" variant="warning"></IxBadge>
    <IxBadge type="counter" label="142" variant="primary"></IxBadge>
    <IxBadge type="counter" label="100" variant="alarm"></IxBadge>
    <IxBadge type="counter" label="8" variant="primary" outline></IxBadge>
    <IxBadge type="counter" label="8" variant="primary" border></IxBadge>
    <IxBadge type="dot" variant="alarm" role="img" aria-label="Unread"></IxBadge>
    <IxBadge type="dot" variant="success" outline role="img" aria-label="Online"></IxBadge>
    <IxBadge type="status-icon" variant="alarm" role="img" aria-label="Alarm"></IxBadge>
    <IxBadge type="status-icon" variant="success" outline role="img" aria-label="Success"></IxBadge>
  </div>

  <div class="row">
    <IxBadge type="label" label="Label" variant="alarm" align-left :icon="iconStar" class="styled" tooltip-text></IxBadge>
    <IxBadge type="label" label="Label" :icon="iconStar" class="styled-ellipsis-4" tooltip-text></IxBadge>
    <IxBadge type="counter" label="12" variant="info" tooltip-text></IxBadge>
    <IxBadge type="counter" label="12" variant="info" tooltip-text="Twelve notifications"></IxBadge>
    <IxBadge type="dot" variant="alarm" role="img" aria-label="Unread" tooltip-text></IxBadge>
    <IxBadge type="dot" variant="alarm" role="img" aria-label="Unread" tooltip-text="Custom tooltip text"></IxBadge>
    <IxBadge type="status-icon" variant="warning" role="img" aria-label="Warning" tooltip-text></IxBadge>
    <IxBadge type="status-icon" variant="warning" role="img" aria-label="Warning" tooltip-text="Custom tooltip text"></IxBadge>
  </div>
</template>
```

#### badge.css
```css
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  
  padding-top: 1.5rem;
}

.styled {
  width: 7rem;
  --ix-badge-max-width: 7rem;
}

.styled-ellipsis-4 {
  width: 4rem;
  --ix-badge-max-width: 4rem;
}
```

## Counter

### React Examples

#### badge-counter.tsx
```tsx
import './badge-counter.scoped.css';

import { IxBadge } from '@siemens/ix-react';

const CUSTOM_BACKGROUND = 'var(--theme-chart-11)';
const CUSTOM_COLOR = 'var(--theme-color-inv-std-text)';
const CUSTOM_OUTLINE_COLOR = 'var(--theme-chip-outline--color)';

export default () => {
  return (
    <div className="container">
      <IxBadge type="counter" label="8" variant="primary"></IxBadge>
      <IxBadge type="counter" label="8" variant="primary" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="primary"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="primary"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge type="counter" label="8" variant="alarm"></IxBadge>
      <IxBadge type="counter" label="8" variant="alarm" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="alarm"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="alarm"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge type="counter" label="8" variant="critical"></IxBadge>
      <IxBadge type="counter" label="8" variant="critical" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="critical"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="critical"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge type="counter" label="8" variant="warning"></IxBadge>
      <IxBadge type="counter" label="8" variant="warning" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="warning"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="warning"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge type="counter" label="8" variant="info"></IxBadge>
      <IxBadge type="counter" label="8" variant="info" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="info"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="info"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge type="counter" label="8" variant="neutral"></IxBadge>
      <IxBadge type="counter" label="8" variant="neutral" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="neutral"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="neutral"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge type="counter" label="8" variant="success"></IxBadge>
      <IxBadge type="counter" label="8" variant="success" outline></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="success"
        enableAnimation
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="success"
        outline
        enableAnimation
      ></IxBadge>

      <IxBadge
        type="counter"
        label="8"
        variant="custom"
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_COLOR}
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="custom"
        outline
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_OUTLINE_COLOR}
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="custom"
        enableAnimation
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_COLOR}
      ></IxBadge>
      <IxBadge
        type="counter"
        label="8"
        variant="custom"
        outline
        enableAnimation
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_OUTLINE_COLOR}
      ></IxBadge>
    </div>
  );
};
```

#### badge-counter.scoped.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

### Angular Examples

#### badge-counter.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './badge-counter.html',
  styleUrls: ['./badge-counter.css'],
})
export default class BadgeCounter {}
```

#### badge-counter.html
```html
<div class="container">
  <ix-badge type="counter" label="8" variant="primary"></ix-badge>
  <ix-badge type="counter" label="8" variant="primary" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="primary" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="primary" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="alarm"></ix-badge>
  <ix-badge type="counter" label="8" variant="alarm" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="alarm" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="alarm" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="critical"></ix-badge>
  <ix-badge type="counter" label="8" variant="critical" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="critical" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="critical" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="warning"></ix-badge>
  <ix-badge type="counter" label="8" variant="warning" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="warning" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="warning" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="info"></ix-badge>
  <ix-badge type="counter" label="8" variant="info" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="info" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="info" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="neutral"></ix-badge>
  <ix-badge type="counter" label="8" variant="neutral" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="neutral" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="neutral" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="success"></ix-badge>
  <ix-badge type="counter" label="8" variant="success" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="success" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="success" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="custom" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
  <ix-badge type="counter" label="8" variant="custom" outline background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></ix-badge>
  <ix-badge type="counter" label="8" variant="custom" enable-animation background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
  <ix-badge type="counter" label="8" variant="custom" outline enable-animation background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></ix-badge>

</div>
```

#### badge-counter.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### badge-counter.ts
```ts
import { Component } from '@angular/core';
import { IxBadge } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBadge],
  templateUrl: './badge-counter.html',
  styleUrls: ['./badge-counter.css'],
})
export default class BadgeCounter {}
```

#### badge-counter.html
```html
<div class="container">
  <ix-badge type="counter" label="8" variant="primary"></ix-badge>
  <ix-badge type="counter" label="8" variant="primary" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="primary" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="primary" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="alarm"></ix-badge>
  <ix-badge type="counter" label="8" variant="alarm" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="alarm" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="alarm" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="critical"></ix-badge>
  <ix-badge type="counter" label="8" variant="critical" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="critical" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="critical" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="warning"></ix-badge>
  <ix-badge type="counter" label="8" variant="warning" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="warning" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="warning" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="info"></ix-badge>
  <ix-badge type="counter" label="8" variant="info" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="info" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="info" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="neutral"></ix-badge>
  <ix-badge type="counter" label="8" variant="neutral" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="neutral" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="neutral" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="success"></ix-badge>
  <ix-badge type="counter" label="8" variant="success" outline></ix-badge>
  <ix-badge type="counter" label="8" variant="success" enable-animation></ix-badge>
  <ix-badge type="counter" label="8" variant="success" outline enable-animation></ix-badge>

  <ix-badge type="counter" label="8" variant="custom" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
  <ix-badge type="counter" label="8" variant="custom" outline background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></ix-badge>
  <ix-badge type="counter" label="8" variant="custom" enable-animation background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
  <ix-badge type="counter" label="8" variant="custom" outline enable-animation background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></ix-badge>

</div>
```

#### badge-counter.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

### Vue Examples

#### badge-counter.vue
```vue
<script setup lang="ts">
import { IxBadge } from '@siemens/ix-vue';
</script>

<style scoped src="./badge-counter.css"></style>

<template>
  <div class="container">
    <IxBadge type="counter" label="8" variant="primary"></IxBadge>
    <IxBadge type="counter" label="8" variant="primary" outline></IxBadge>
    <IxBadge type="counter" label="8" variant="primary" enable-animation></IxBadge>
    <IxBadge type="counter" label="8" variant="primary" outline enable-animation></IxBadge>

    <IxBadge type="counter" label="8" variant="alarm"></IxBadge>
    <IxBadge type="counter" label="8" variant="alarm" outline></IxBadge>
    <IxBadge type="counter" label="8" variant="alarm" enable-animation></IxBadge>
    <IxBadge type="counter" label="8" variant="alarm" outline enable-animation></IxBadge>

    <IxBadge type="counter" label="8" variant="critical"></IxBadge>
    <IxBadge type="counter" label="8" variant="critical" outline></IxBadge>
    <IxBadge type="counter" label="8" variant="critical" enable-animation></IxBadge>
    <IxBadge type="counter" label="8" variant="critical" outline enable-animation></IxBadge>

    <IxBadge type="counter" label="8" variant="warning"></IxBadge>
    <IxBadge type="counter" label="8" variant="warning" outline></IxBadge>
    <IxBadge type="counter" label="8" variant="warning" enable-animation></IxBadge>
    <IxBadge type="counter" label="8" variant="warning" outline enable-animation></IxBadge>

    <IxBadge type="counter" label="8" variant="info"></IxBadge>
    <IxBadge type="counter" label="8" variant="info" outline></IxBadge>
    <IxBadge type="counter" label="8" variant="info" enable-animation></IxBadge>
    <IxBadge type="counter" label="8" variant="info" outline enable-animation></IxBadge>

    <IxBadge type="counter" label="8" variant="neutral"></IxBadge>
    <IxBadge type="counter" label="8" variant="neutral" outline></IxBadge>
    <IxBadge type="counter" label="8" variant="neutral" enable-animation></IxBadge>
    <IxBadge type="counter" label="8" variant="neutral" outline enable-animation></IxBadge>

    <IxBadge type="counter" label="8" variant="success"></IxBadge>
    <IxBadge type="counter" label="8" variant="success" outline></IxBadge>
    <IxBadge type="counter" label="8" variant="success" enable-animation></IxBadge>
    <IxBadge type="counter" label="8" variant="success" outline enable-animation></IxBadge>

    <IxBadge type="counter" label="8" variant="custom" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></IxBadge>
    <IxBadge type="counter" label="8" variant="custom" outline background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></IxBadge>
    <IxBadge type="counter" label="8" variant="custom" enable-animation background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></IxBadge>
    <IxBadge type="counter" label="8" variant="custom" outline enable-animation background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></IxBadge>

  </div>
</template>
```

#### badge-counter.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```
## Label

### React Examples

#### badge-label.tsx
```tsx
import { iconInfo } from '@siemens/ix-icons/icons';
import './badge-label.scoped.css';

import { IxBadge } from '@siemens/ix-react';

const CUSTOM_BACKGROUND = 'var(--theme-chart-11)';
const CUSTOM_COLOR = 'var(--theme-color-inv-std-text)';
const CUSTOM_OUTLINE_COLOR = 'var(--theme-chip-outline--color)';

export default () => {
  return (
    <div className="container">
      <IxBadge
        type="label"
        label="Primary"
        variant="primary"
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Primary"
        variant="primary"
        outline
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Primary"
        variant="primary"
        enableAnimation
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Primary"
        variant="primary"
        outline
        enableAnimation
        icon={iconInfo}
      ></IxBadge>

      <IxBadge
        type="label"
        label="Alarm"
        variant="alarm"
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Alarm"
        variant="alarm"
        outline
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Alarm"
        variant="alarm"
        enableAnimation
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Alarm"
        variant="alarm"
        outline
        enableAnimation
        icon={iconInfo}
      ></IxBadge>

      <IxBadge
        type="label"
        label="Critical"
        variant="critical"
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Critical"
        variant="critical"
        outline
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Critical"
        variant="critical"
        enableAnimation
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Critical"
        variant="critical"
        outline
        enableAnimation
        icon={iconInfo}
      ></IxBadge>

      <IxBadge
        type="label"
        label="Warning"
        variant="warning"
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Warning"
        variant="warning"
        outline
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Warning"
        variant="warning"
        enableAnimation
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Warning"
        variant="warning"
        outline
        enableAnimation
        icon={iconInfo}
      ></IxBadge>

      <IxBadge
        type="label"
        label="Info"
        variant="info"
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Info"
        variant="info"
        outline
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Info"
        variant="info"
        enableAnimation
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Info"
        variant="info"
        outline
        enableAnimation
        icon={iconInfo}
      ></IxBadge>

      <IxBadge
        type="label"
        label="Neutral"
        variant="neutral"
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Neutral"
        variant="neutral"
        outline
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Neutral"
        variant="neutral"
        enableAnimation
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Neutral"
        variant="neutral"
        outline
        enableAnimation
        icon={iconInfo}
      ></IxBadge>

      <IxBadge
        type="label"
        label="Success"
        variant="success"
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Success"
        variant="success"
        outline
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Success"
        variant="success"
        enableAnimation
        icon={iconInfo}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Success"
        variant="success"
        outline
        enableAnimation
        icon={iconInfo}
      ></IxBadge>

      <IxBadge
        type="label"
        label="Custom"
        variant="custom"
        icon={iconInfo}
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_COLOR}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Custom"
        variant="custom"
        outline
        icon={iconInfo}
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_OUTLINE_COLOR}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Custom"
        variant="custom"
        enableAnimation
        icon={iconInfo}
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_COLOR}
      ></IxBadge>
      <IxBadge
        type="label"
        label="Custom"
        variant="custom"
        outline
        enableAnimation
        icon={iconInfo}
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_OUTLINE_COLOR}
      ></IxBadge>
    </div>
  );
};
```

#### badge-label.scoped.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

### Angular Examples

#### badge-label.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import { iconInfo } from '@siemens/ix-icons/icons';

addIcons({ iconInfo });

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './badge-label.html',
  styleUrls: ['./badge-label.css'],
})
export default class BadgeLabel {}
```

#### badge-label.html
```html
<div class="container">
  <ix-badge type="label" label="Primary" variant="primary" icon="info"></ix-badge>
  <ix-badge type="label" label="Primary" variant="primary" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Primary" variant="primary" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Primary" variant="primary" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Alarm" variant="alarm" icon="info"></ix-badge>
  <ix-badge type="label" label="Alarm" variant="alarm" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Alarm" variant="alarm" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Alarm" variant="alarm" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Critical" variant="critical" icon="info"></ix-badge>
  <ix-badge type="label" label="Critical" variant="critical" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Critical" variant="critical" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Critical" variant="critical" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Warning" variant="warning" icon="info"></ix-badge>
  <ix-badge type="label" label="Warning" variant="warning" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Warning" variant="warning" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Warning" variant="warning" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Info" variant="info" icon="info"></ix-badge>
  <ix-badge type="label" label="Info" variant="info" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Info" variant="info" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Info" variant="info" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Neutral" variant="neutral" icon="info"></ix-badge>
  <ix-badge type="label" label="Neutral" variant="neutral" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Neutral" variant="neutral" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Neutral" variant="neutral" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Success" variant="success" icon="info"></ix-badge>
  <ix-badge type="label" label="Success" variant="success" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Success" variant="success" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Success" variant="success" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Custom" variant="custom" icon="info" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
  <ix-badge type="label" label="Custom" variant="custom" icon="info" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)" outline></ix-badge>
  <ix-badge type="label" label="Custom" variant="custom" icon="info" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)" enable-animation></ix-badge>
  <ix-badge type="label" label="Custom" variant="custom" icon="info" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)" outline enable-animation></ix-badge>
</div>
```

#### badge-label.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### badge-label.ts
```ts
import { Component } from '@angular/core';
import { IxBadge } from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import { iconInfo } from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxBadge],
  templateUrl: './badge-label.html',
  styleUrls: ['./badge-label.css'],
})
export default class BadgeLabel {
  constructor() {
    addIcons({ iconInfo });
  }
}
```

#### badge-label.html
```html
<div class="container">
  <ix-badge type="label" label="Primary" variant="primary" icon="info"></ix-badge>
  <ix-badge type="label" label="Primary" variant="primary" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Primary" variant="primary" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Primary" variant="primary" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Alarm" variant="alarm" icon="info"></ix-badge>
  <ix-badge type="label" label="Alarm" variant="alarm" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Alarm" variant="alarm" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Alarm" variant="alarm" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Critical" variant="critical" icon="info"></ix-badge>
  <ix-badge type="label" label="Critical" variant="critical" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Critical" variant="critical" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Critical" variant="critical" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Warning" variant="warning" icon="info"></ix-badge>
  <ix-badge type="label" label="Warning" variant="warning" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Warning" variant="warning" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Warning" variant="warning" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Info" variant="info" icon="info"></ix-badge>
  <ix-badge type="label" label="Info" variant="info" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Info" variant="info" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Info" variant="info" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Neutral" variant="neutral" icon="info"></ix-badge>
  <ix-badge type="label" label="Neutral" variant="neutral" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Neutral" variant="neutral" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Neutral" variant="neutral" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Success" variant="success" icon="info"></ix-badge>
  <ix-badge type="label" label="Success" variant="success" icon="info" outline></ix-badge>
  <ix-badge type="label" label="Success" variant="success" icon="info" enable-animation></ix-badge>
  <ix-badge type="label" label="Success" variant="success" icon="info" outline enable-animation></ix-badge>
  <ix-badge type="label" label="Custom" variant="custom" icon="info" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
  <ix-badge type="label" label="Custom" variant="custom" icon="info" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)" outline></ix-badge>
  <ix-badge type="label" label="Custom" variant="custom" icon="info" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)" enable-animation></ix-badge>
  <ix-badge type="label" label="Custom" variant="custom" icon="info" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)" outline enable-animation></ix-badge>
</div>
```

#### badge-label.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

### Vue Examples

#### badge-label.vue
```vue
<script setup lang="ts">
import { iconInfo } from '@siemens/ix-icons/icons';
import { IxBadge } from '@siemens/ix-vue';
</script>

<style scoped src="./badge-label.css"></style>

<template>
  <div class="container">
    <IxBadge type="label" label="Primary" variant="primary" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Primary" variant="primary" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Primary" variant="primary" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Primary" variant="primary" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Alarm" variant="alarm" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Alarm" variant="alarm" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Alarm" variant="alarm" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Alarm" variant="alarm" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Critical" variant="critical" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Critical" variant="critical" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Critical" variant="critical" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Critical" variant="critical" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Warning" variant="warning" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Warning" variant="warning" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Warning" variant="warning" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Warning" variant="warning" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Info" variant="info" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Info" variant="info" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Info" variant="info" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Info" variant="info" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Neutral" variant="neutral" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Neutral" variant="neutral" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Neutral" variant="neutral" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Neutral" variant="neutral" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Success" variant="success" :icon="iconInfo"></IxBadge>
    <IxBadge type="label" label="Success" variant="success" :icon="iconInfo" outline></IxBadge>
    <IxBadge type="label" label="Success" variant="success" :icon="iconInfo" enable-animation></IxBadge>
    <IxBadge type="label" label="Success" variant="success" :icon="iconInfo" outline enable-animation></IxBadge>
    <IxBadge type="label" label="Custom" variant="custom" :icon="iconInfo" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></IxBadge>
    <IxBadge type="label" label="Custom" variant="custom" :icon="iconInfo" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)" outline></IxBadge>
    <IxBadge type="label" label="Custom" variant="custom" :icon="iconInfo" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)" enable-animation></IxBadge>
    <IxBadge type="label" label="Custom" variant="custom" :icon="iconInfo" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)" outline enable-animation></IxBadge>
  </div>
</template>
```

#### badge-label.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

## Dot

### React Examples

#### badge-dot.tsx
```tsx
import './badge-dot.scoped.css';

import { IxBadge } from '@siemens/ix-react';

const CUSTOM_BACKGROUND = 'var(--theme-chart-11)';
const CUSTOM_COLOR = 'var(--theme-color-inv-std-text)';
const CUSTOM_OUTLINE_COLOR = 'var(--theme-chip-outline--color)';

export default () => {
  return (
    <div className="container">
      <IxBadge
        type="dot"
        variant="primary"
        role="img"
        aria-label="Primary"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="primary"
        outline
        role="img"
        aria-label="Primary outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="primary"
        enableAnimation
        role="img"
        aria-label="Primary pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="primary"
        outline
        enableAnimation
        role="img"
        aria-label="Primary pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="alarm"
        role="img"
        aria-label="Alarm"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="alarm"
        outline
        role="img"
        aria-label="Alarm outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="alarm"
        enableAnimation
        role="img"
        aria-label="Alarm pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="alarm"
        outline
        enableAnimation
        role="img"
        aria-label="Alarm pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="critical"
        role="img"
        aria-label="Critical"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="critical"
        outline
        role="img"
        aria-label="Critical outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="critical"
        enableAnimation
        role="img"
        aria-label="Critical pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="critical"
        outline
        enableAnimation
        role="img"
        aria-label="Critical pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="warning"
        role="img"
        aria-label="Warning"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="warning"
        outline
        role="img"
        aria-label="Warning outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="warning"
        enableAnimation
        role="img"
        aria-label="Warning pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="warning"
        outline
        enableAnimation
        role="img"
        aria-label="Warning pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="info"
        role="img"
        aria-label="Info"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="info"
        outline
        role="img"
        aria-label="Info outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="info"
        enableAnimation
        role="img"
        aria-label="Info pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="info"
        outline
        enableAnimation
        role="img"
        aria-label="Info pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="neutral"
        role="img"
        aria-label="Neutral"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="neutral"
        outline
        role="img"
        aria-label="Neutral outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="neutral"
        enableAnimation
        role="img"
        aria-label="Neutral pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="neutral"
        outline
        enableAnimation
        role="img"
        aria-label="Neutral pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="success"
        role="img"
        aria-label="Success"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="success"
        outline
        role="img"
        aria-label="Success outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="success"
        enableAnimation
        role="img"
        aria-label="Success pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="success"
        outline
        enableAnimation
        role="img"
        aria-label="Success pulse outline"
      ></IxBadge>

      <IxBadge
        type="dot"
        variant="custom"
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_COLOR}
        role="img"
        aria-label="Custom"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="custom"
        outline
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_OUTLINE_COLOR}
        role="img"
        aria-label="Custom outline"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="custom"
        enableAnimation
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_COLOR}
        role="img"
        aria-label="Custom pulse"
      ></IxBadge>
      <IxBadge
        type="dot"
        variant="custom"
        outline
        enableAnimation
        background={CUSTOM_BACKGROUND}
        badgeColor={CUSTOM_OUTLINE_COLOR}
        role="img"
        aria-label="Custom pulse outline"
      ></IxBadge>
    </div>
  );
};
```

#### badge-dot.scoped.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

### Angular Examples

#### badge-dot.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './badge-dot.html',
  styleUrls: ['./badge-dot.css'],
})
export default class BadgeDot {}
```

#### badge-dot.html
```html
<div class="container">
  <ix-badge type="dot" variant="primary" role="img" aria-label="Primary"></ix-badge>
  <ix-badge type="dot" variant="primary" outline role="img" aria-label="Primary outline"></ix-badge>
  <ix-badge type="dot" variant="primary" enable-animation role="img" aria-label="Primary pulse"></ix-badge>
  <ix-badge type="dot" variant="primary" outline enable-animation role="img" aria-label="Primary pulse outline"></ix-badge>

  <ix-badge type="dot" variant="alarm" role="img" aria-label="Alarm"></ix-badge>
  <ix-badge type="dot" variant="alarm" outline role="img" aria-label="Alarm outline"></ix-badge>
  <ix-badge type="dot" variant="alarm" enable-animation role="img" aria-label="Alarm pulse"></ix-badge>
  <ix-badge type="dot" variant="alarm" outline enable-animation role="img" aria-label="Alarm pulse outline"></ix-badge>

  <ix-badge type="dot" variant="critical" role="img" aria-label="Critical"></ix-badge>
  <ix-badge type="dot" variant="critical" outline role="img" aria-label="Critical outline"></ix-badge>
  <ix-badge type="dot" variant="critical" enable-animation role="img" aria-label="Critical pulse"></ix-badge>
  <ix-badge type="dot" variant="critical" outline enable-animation role="img" aria-label="Critical pulse outline"></ix-badge>

  <ix-badge type="dot" variant="warning" role="img" aria-label="Warning"></ix-badge>
  <ix-badge type="dot" variant="warning" outline role="img" aria-label="Warning outline"></ix-badge>
  <ix-badge type="dot" variant="warning" enable-animation role="img" aria-label="Warning pulse"></ix-badge>
  <ix-badge type="dot" variant="warning" outline enable-animation role="img" aria-label="Warning pulse outline"></ix-badge>

  <ix-badge type="dot" variant="info" role="img" aria-label="Info"></ix-badge>
  <ix-badge type="dot" variant="info" outline role="img" aria-label="Info outline"></ix-badge>
  <ix-badge type="dot" variant="info" enable-animation role="img" aria-label="Info pulse"></ix-badge>
  <ix-badge type="dot" variant="info" outline enable-animation role="img" aria-label="Info pulse outline"></ix-badge>

  <ix-badge type="dot" variant="neutral" role="img" aria-label="Neutral"></ix-badge>
  <ix-badge type="dot" variant="neutral" outline role="img" aria-label="Neutral outline"></ix-badge>
  <ix-badge type="dot" variant="neutral" enable-animation role="img" aria-label="Neutral pulse"></ix-badge>
  <ix-badge type="dot" variant="neutral" outline enable-animation role="img" aria-label="Neutral pulse outline"></ix-badge>

  <ix-badge type="dot" variant="success" role="img" aria-label="Success"></ix-badge>
  <ix-badge type="dot" variant="success" outline role="img" aria-label="Success outline"></ix-badge>
  <ix-badge type="dot" variant="success" enable-animation role="img" aria-label="Success pulse"></ix-badge>
  <ix-badge type="dot" variant="success" outline enable-animation role="img" aria-label="Success pulse outline"></ix-badge>

  <ix-badge type="dot" variant="custom" role="img" aria-label="Custom" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
  <ix-badge type="dot" variant="custom" outline role="img" aria-label="Custom outline" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></ix-badge>
  <ix-badge type="dot" variant="custom" enable-animation role="img" aria-label="Custom pulse" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
  <ix-badge type="dot" variant="custom" outline enable-animation role="img" aria-label="Custom pulse outline" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></ix-badge>

</div>
```

#### badge-dot.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### badge-dot.ts
```ts
import { Component } from '@angular/core';
import { IxBadge } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBadge],
  templateUrl: './badge-dot.html',
  styleUrls: ['./badge-dot.css'],
})
export default class BadgeDot {}
```

#### badge-dot.html
```html
<div class="container">
  <ix-badge type="dot" variant="primary" role="img" aria-label="Primary"></ix-badge>
  <ix-badge type="dot" variant="primary" outline role="img" aria-label="Primary outline"></ix-badge>
  <ix-badge type="dot" variant="primary" enable-animation role="img" aria-label="Primary pulse"></ix-badge>
  <ix-badge type="dot" variant="primary" outline enable-animation role="img" aria-label="Primary pulse outline"></ix-badge>

  <ix-badge type="dot" variant="alarm" role="img" aria-label="Alarm"></ix-badge>
  <ix-badge type="dot" variant="alarm" outline role="img" aria-label="Alarm outline"></ix-badge>
  <ix-badge type="dot" variant="alarm" enable-animation role="img" aria-label="Alarm pulse"></ix-badge>
  <ix-badge type="dot" variant="alarm" outline enable-animation role="img" aria-label="Alarm pulse outline"></ix-badge>

  <ix-badge type="dot" variant="critical" role="img" aria-label="Critical"></ix-badge>
  <ix-badge type="dot" variant="critical" outline role="img" aria-label="Critical outline"></ix-badge>
  <ix-badge type="dot" variant="critical" enable-animation role="img" aria-label="Critical pulse"></ix-badge>
  <ix-badge type="dot" variant="critical" outline enable-animation role="img" aria-label="Critical pulse outline"></ix-badge>

  <ix-badge type="dot" variant="warning" role="img" aria-label="Warning"></ix-badge>
  <ix-badge type="dot" variant="warning" outline role="img" aria-label="Warning outline"></ix-badge>
  <ix-badge type="dot" variant="warning" enable-animation role="img" aria-label="Warning pulse"></ix-badge>
  <ix-badge type="dot" variant="warning" outline enable-animation role="img" aria-label="Warning pulse outline"></ix-badge>

  <ix-badge type="dot" variant="info" role="img" aria-label="Info"></ix-badge>
  <ix-badge type="dot" variant="info" outline role="img" aria-label="Info outline"></ix-badge>
  <ix-badge type="dot" variant="info" enable-animation role="img" aria-label="Info pulse"></ix-badge>
  <ix-badge type="dot" variant="info" outline enable-animation role="img" aria-label="Info pulse outline"></ix-badge>

  <ix-badge type="dot" variant="neutral" role="img" aria-label="Neutral"></ix-badge>
  <ix-badge type="dot" variant="neutral" outline role="img" aria-label="Neutral outline"></ix-badge>
  <ix-badge type="dot" variant="neutral" enable-animation role="img" aria-label="Neutral pulse"></ix-badge>
  <ix-badge type="dot" variant="neutral" outline enable-animation role="img" aria-label="Neutral pulse outline"></ix-badge>

  <ix-badge type="dot" variant="success" role="img" aria-label="Success"></ix-badge>
  <ix-badge type="dot" variant="success" outline role="img" aria-label="Success outline"></ix-badge>
  <ix-badge type="dot" variant="success" enable-animation role="img" aria-label="Success pulse"></ix-badge>
  <ix-badge type="dot" variant="success" outline enable-animation role="img" aria-label="Success pulse outline"></ix-badge>

  <ix-badge type="dot" variant="custom" role="img" aria-label="Custom" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
  <ix-badge type="dot" variant="custom" outline role="img" aria-label="Custom outline" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></ix-badge>
  <ix-badge type="dot" variant="custom" enable-animation role="img" aria-label="Custom pulse" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></ix-badge>
  <ix-badge type="dot" variant="custom" outline enable-animation role="img" aria-label="Custom pulse outline" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></ix-badge>

</div>
```

#### badge-dot.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

### Vue Examples

#### badge-dot.vue
```vue
<script setup lang="ts">
import { IxBadge } from '@siemens/ix-vue';
</script>

<style scoped src="./badge-dot.css"></style>

<template>
  <div class="container">
    <IxBadge type="dot" variant="primary" role="img" aria-label="Primary"></IxBadge>
    <IxBadge type="dot" variant="primary" outline role="img" aria-label="Primary outline"></IxBadge>
    <IxBadge type="dot" variant="primary" enable-animation role="img" aria-label="Primary pulse"></IxBadge>
    <IxBadge type="dot" variant="primary" outline enable-animation role="img" aria-label="Primary pulse outline"></IxBadge>

    <IxBadge type="dot" variant="alarm" role="img" aria-label="Alarm"></IxBadge>
    <IxBadge type="dot" variant="alarm" outline role="img" aria-label="Alarm outline"></IxBadge>
    <IxBadge type="dot" variant="alarm" enable-animation role="img" aria-label="Alarm pulse"></IxBadge>
    <IxBadge type="dot" variant="alarm" outline enable-animation role="img" aria-label="Alarm pulse outline"></IxBadge>

    <IxBadge type="dot" variant="critical" role="img" aria-label="Critical"></IxBadge>
    <IxBadge type="dot" variant="critical" outline role="img" aria-label="Critical outline"></IxBadge>
    <IxBadge type="dot" variant="critical" enable-animation role="img" aria-label="Critical pulse"></IxBadge>
    <IxBadge type="dot" variant="critical" outline enable-animation role="img" aria-label="Critical pulse outline"></IxBadge>

    <IxBadge type="dot" variant="warning" role="img" aria-label="Warning"></IxBadge>
    <IxBadge type="dot" variant="warning" outline role="img" aria-label="Warning outline"></IxBadge>
    <IxBadge type="dot" variant="warning" enable-animation role="img" aria-label="Warning pulse"></IxBadge>
    <IxBadge type="dot" variant="warning" outline enable-animation role="img" aria-label="Warning pulse outline"></IxBadge>

    <IxBadge type="dot" variant="info" role="img" aria-label="Info"></IxBadge>
    <IxBadge type="dot" variant="info" outline role="img" aria-label="Info outline"></IxBadge>
    <IxBadge type="dot" variant="info" enable-animation role="img" aria-label="Info pulse"></IxBadge>
    <IxBadge type="dot" variant="info" outline enable-animation role="img" aria-label="Info pulse outline"></IxBadge>

    <IxBadge type="dot" variant="neutral" role="img" aria-label="Neutral"></IxBadge>
    <IxBadge type="dot" variant="neutral" outline role="img" aria-label="Neutral outline"></IxBadge>
    <IxBadge type="dot" variant="neutral" enable-animation role="img" aria-label="Neutral pulse"></IxBadge>
    <IxBadge type="dot" variant="neutral" outline enable-animation role="img" aria-label="Neutral pulse outline"></IxBadge>

    <IxBadge type="dot" variant="success" role="img" aria-label="Success"></IxBadge>
    <IxBadge type="dot" variant="success" outline role="img" aria-label="Success outline"></IxBadge>
    <IxBadge type="dot" variant="success" enable-animation role="img" aria-label="Success pulse"></IxBadge>
    <IxBadge type="dot" variant="success" outline enable-animation role="img" aria-label="Success pulse outline"></IxBadge>

    <IxBadge type="dot" variant="custom" role="img" aria-label="Custom" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></IxBadge>
    <IxBadge type="dot" variant="custom" outline role="img" aria-label="Custom outline" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></IxBadge>
    <IxBadge type="dot" variant="custom" enable-animation role="img" aria-label="Custom pulse" background="var(--theme-chart-11)" badge-color="var(--theme-color-inv-std-text)"></IxBadge>
    <IxBadge type="dot" variant="custom" outline enable-animation role="img" aria-label="Custom pulse outline" background="var(--theme-chart-11)" badge-color="var(--theme-chip-outline--color)"></IxBadge>

  </div>
</template>
```

#### badge-dot.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

## Status icon

### React Examples

#### badge-status-icon.tsx
```tsx
import './badge-status-icon.scoped.css';

import { IxBadge } from '@siemens/ix-react';

export default () => {
  return (
    <div className="container">
      <IxBadge
        type="status-icon"
        variant="alarm"
        role="img"
        aria-label="Alarm"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="alarm"
        outline
        role="img"
        aria-label="Alarm outline"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="alarm"
        enableAnimation
        role="img"
        aria-label="Alarm pulse"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="alarm"
        outline
        enableAnimation
        role="img"
        aria-label="Alarm pulse outline"
      ></IxBadge>

      <IxBadge
        type="status-icon"
        variant="error"
        role="img"
        aria-label="Error"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="error"
        outline
        role="img"
        aria-label="Error outline"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="error"
        enableAnimation
        role="img"
        aria-label="Error pulse"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="error"
        outline
        enableAnimation
        role="img"
        aria-label="Error pulse outline"
      ></IxBadge>

      <IxBadge
        type="status-icon"
        variant="critical"
        role="img"
        aria-label="Critical"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="critical"
        outline
        role="img"
        aria-label="Critical outline"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="critical"
        enableAnimation
        role="img"
        aria-label="Critical pulse"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="critical"
        outline
        enableAnimation
        role="img"
        aria-label="Critical pulse outline"
      ></IxBadge>

      <IxBadge
        type="status-icon"
        variant="warning"
        role="img"
        aria-label="Warning"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="warning"
        outline
        role="img"
        aria-label="Warning outline"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="warning"
        enableAnimation
        role="img"
        aria-label="Warning pulse"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="warning"
        outline
        enableAnimation
        role="img"
        aria-label="Warning pulse outline"
      ></IxBadge>

      <IxBadge
        type="status-icon"
        variant="success"
        role="img"
        aria-label="Success"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="success"
        outline
        role="img"
        aria-label="Success outline"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="success"
        enableAnimation
        role="img"
        aria-label="Success pulse"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="success"
        outline
        enableAnimation
        role="img"
        aria-label="Success pulse outline"
      ></IxBadge>

      <IxBadge
        type="status-icon"
        variant="info"
        role="img"
        aria-label="Info"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="info"
        outline
        role="img"
        aria-label="Info outline"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="info"
        enableAnimation
        role="img"
        aria-label="Info pulse"
      ></IxBadge>
      <IxBadge
        type="status-icon"
        variant="info"
        outline
        enableAnimation
        role="img"
        aria-label="Info pulse outline"
      ></IxBadge>
    </div>
  );
};
```

#### badge-status-icon.scoped.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

### Angular Examples

#### badge-status-icon.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './badge-status-icon.html',
  styleUrls: ['./badge-status-icon.css'],
})
export default class BadgeStatusIcon {}
```

#### badge-status-icon.html
```html
<div class="container">
  <ix-badge type="status-icon" variant="alarm" role="img" aria-label="Alarm"></ix-badge>
  <ix-badge type="status-icon" variant="alarm" outline role="img" aria-label="Alarm outline"></ix-badge>
  <ix-badge type="status-icon" variant="alarm" enable-animation role="img" aria-label="Alarm pulse"></ix-badge>
  <ix-badge type="status-icon" variant="alarm" outline enable-animation role="img" aria-label="Alarm pulse outline"></ix-badge>

  <ix-badge type="status-icon" variant="error" role="img" aria-label="Error"></ix-badge>
  <ix-badge type="status-icon" variant="error" outline role="img" aria-label="Error outline"></ix-badge>
  <ix-badge type="status-icon" variant="error" enable-animation role="img" aria-label="Error pulse"></ix-badge>
  <ix-badge type="status-icon" variant="error" outline enable-animation role="img" aria-label="Error pulse outline"></ix-badge>

  <ix-badge type="status-icon" variant="critical" role="img" aria-label="Critical"></ix-badge>
  <ix-badge type="status-icon" variant="critical" outline role="img" aria-label="Critical outline"></ix-badge>
  <ix-badge type="status-icon" variant="critical" enable-animation role="img" aria-label="Critical pulse"></ix-badge>
  <ix-badge type="status-icon" variant="critical" outline enable-animation role="img" aria-label="Critical pulse outline"></ix-badge>

  <ix-badge type="status-icon" variant="warning" role="img" aria-label="Warning"></ix-badge>
  <ix-badge type="status-icon" variant="warning" outline role="img" aria-label="Warning outline"></ix-badge>
  <ix-badge type="status-icon" variant="warning" enable-animation role="img" aria-label="Warning pulse"></ix-badge>
  <ix-badge type="status-icon" variant="warning" outline enable-animation role="img" aria-label="Warning pulse outline"></ix-badge>

  <ix-badge type="status-icon" variant="success" role="img" aria-label="Success"></ix-badge>
  <ix-badge type="status-icon" variant="success" outline role="img" aria-label="Success outline"></ix-badge>
  <ix-badge type="status-icon" variant="success" enable-animation role="img" aria-label="Success pulse"></ix-badge>
  <ix-badge type="status-icon" variant="success" outline enable-animation role="img" aria-label="Success pulse outline"></ix-badge>

  <ix-badge type="status-icon" variant="info" role="img" aria-label="Info"></ix-badge>
  <ix-badge type="status-icon" variant="info" outline role="img" aria-label="Info outline"></ix-badge>
  <ix-badge type="status-icon" variant="info" enable-animation role="img" aria-label="Info pulse"></ix-badge>
  <ix-badge type="status-icon" variant="info" outline enable-animation role="img" aria-label="Info pulse outline"></ix-badge>

</div>
```

#### badge-status-icon.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### badge-status-icon.ts
```ts
import { Component } from '@angular/core';
import { IxBadge } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBadge],
  templateUrl: './badge-status-icon.html',
  styleUrls: ['./badge-status-icon.css'],
})
export default class BadgeStatusIcon {}
```

#### badge-status-icon.html
```html
<div class="container">
  <ix-badge type="status-icon" variant="alarm" role="img" aria-label="Alarm"></ix-badge>
  <ix-badge type="status-icon" variant="alarm" outline role="img" aria-label="Alarm outline"></ix-badge>
  <ix-badge type="status-icon" variant="alarm" enable-animation role="img" aria-label="Alarm pulse"></ix-badge>
  <ix-badge type="status-icon" variant="alarm" outline enable-animation role="img" aria-label="Alarm pulse outline"></ix-badge>

  <ix-badge type="status-icon" variant="error" role="img" aria-label="Error"></ix-badge>
  <ix-badge type="status-icon" variant="error" outline role="img" aria-label="Error outline"></ix-badge>
  <ix-badge type="status-icon" variant="error" enable-animation role="img" aria-label="Error pulse"></ix-badge>
  <ix-badge type="status-icon" variant="error" outline enable-animation role="img" aria-label="Error pulse outline"></ix-badge>

  <ix-badge type="status-icon" variant="critical" role="img" aria-label="Critical"></ix-badge>
  <ix-badge type="status-icon" variant="critical" outline role="img" aria-label="Critical outline"></ix-badge>
  <ix-badge type="status-icon" variant="critical" enable-animation role="img" aria-label="Critical pulse"></ix-badge>
  <ix-badge type="status-icon" variant="critical" outline enable-animation role="img" aria-label="Critical pulse outline"></ix-badge>

  <ix-badge type="status-icon" variant="warning" role="img" aria-label="Warning"></ix-badge>
  <ix-badge type="status-icon" variant="warning" outline role="img" aria-label="Warning outline"></ix-badge>
  <ix-badge type="status-icon" variant="warning" enable-animation role="img" aria-label="Warning pulse"></ix-badge>
  <ix-badge type="status-icon" variant="warning" outline enable-animation role="img" aria-label="Warning pulse outline"></ix-badge>

  <ix-badge type="status-icon" variant="success" role="img" aria-label="Success"></ix-badge>
  <ix-badge type="status-icon" variant="success" outline role="img" aria-label="Success outline"></ix-badge>
  <ix-badge type="status-icon" variant="success" enable-animation role="img" aria-label="Success pulse"></ix-badge>
  <ix-badge type="status-icon" variant="success" outline enable-animation role="img" aria-label="Success pulse outline"></ix-badge>

  <ix-badge type="status-icon" variant="info" role="img" aria-label="Info"></ix-badge>
  <ix-badge type="status-icon" variant="info" outline role="img" aria-label="Info outline"></ix-badge>
  <ix-badge type="status-icon" variant="info" enable-animation role="img" aria-label="Info pulse"></ix-badge>
  <ix-badge type="status-icon" variant="info" outline enable-animation role="img" aria-label="Info pulse outline"></ix-badge>

</div>
```

#### badge-status-icon.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

### Vue Examples

#### badge-status-icon.vue
```vue
<script setup lang="ts">
import { IxBadge } from '@siemens/ix-vue';
</script>

<style scoped src="./badge-status-icon.css"></style>

<template>
  <div class="container">
    <IxBadge type="status-icon" variant="alarm" role="img" aria-label="Alarm"></IxBadge>
    <IxBadge type="status-icon" variant="alarm" outline role="img" aria-label="Alarm outline"></IxBadge>
    <IxBadge type="status-icon" variant="alarm" enable-animation role="img" aria-label="Alarm pulse"></IxBadge>
    <IxBadge type="status-icon" variant="alarm" outline enable-animation role="img" aria-label="Alarm pulse outline"></IxBadge>

    <IxBadge type="status-icon" variant="error" role="img" aria-label="Error"></IxBadge>
    <IxBadge type="status-icon" variant="error" outline role="img" aria-label="Error outline"></IxBadge>
    <IxBadge type="status-icon" variant="error" enable-animation role="img" aria-label="Error pulse"></IxBadge>
    <IxBadge type="status-icon" variant="error" outline enable-animation role="img" aria-label="Error pulse outline"></IxBadge>

    <IxBadge type="status-icon" variant="critical" role="img" aria-label="Critical"></IxBadge>
    <IxBadge type="status-icon" variant="critical" outline role="img" aria-label="Critical outline"></IxBadge>
    <IxBadge type="status-icon" variant="critical" enable-animation role="img" aria-label="Critical pulse"></IxBadge>
    <IxBadge type="status-icon" variant="critical" outline enable-animation role="img" aria-label="Critical pulse outline"></IxBadge>

    <IxBadge type="status-icon" variant="warning" role="img" aria-label="Warning"></IxBadge>
    <IxBadge type="status-icon" variant="warning" outline role="img" aria-label="Warning outline"></IxBadge>
    <IxBadge type="status-icon" variant="warning" enable-animation role="img" aria-label="Warning pulse"></IxBadge>
    <IxBadge type="status-icon" variant="warning" outline enable-animation role="img" aria-label="Warning pulse outline"></IxBadge>

    <IxBadge type="status-icon" variant="success" role="img" aria-label="Success"></IxBadge>
    <IxBadge type="status-icon" variant="success" outline role="img" aria-label="Success outline"></IxBadge>
    <IxBadge type="status-icon" variant="success" enable-animation role="img" aria-label="Success pulse"></IxBadge>
    <IxBadge type="status-icon" variant="success" outline enable-animation role="img" aria-label="Success pulse outline"></IxBadge>

    <IxBadge type="status-icon" variant="info" role="img" aria-label="Info"></IxBadge>
    <IxBadge type="status-icon" variant="info" outline role="img" aria-label="Info outline"></IxBadge>
    <IxBadge type="status-icon" variant="info" enable-animation role="img" aria-label="Info pulse"></IxBadge>
    <IxBadge type="status-icon" variant="info" outline enable-animation role="img" aria-label="Info pulse outline"></IxBadge>

  </div>
</template>
```

#### badge-status-icon.css
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
  align-items: center;
  
  padding-top: 1rem;
}
```

## API for ix-badge

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| alignLeft | { "Left-align label content.\n\nOnly has an effect when **type** is `label`." } | align-left | boolean | false |
| ariaLabelIcon | { "Accessible name for the leading icon.\n\nWhen unset, the icon is decorative if **label** provides visible text.\n\nOnly has an effect when **type** is `label`." } | aria-label-icon | string \| undefined |  |
| background | { "Custom background or border color.\n\nOnly has an effect when **variant** is `custom`." } | background | string \| undefined |  |
| badgeColor | { "Custom text color.\n\nOnly has an effect when **variant** is `custom`." } | badge-color | string \| undefined |  |
| border | { "Add a high-contrast border on filled badges.\n\nIgnored when **outline** is `true` or **type** is `status-icon`." } | border | boolean | false |
| enableAnimation | { "Play the attention pulse animation.\n\nOverride duration with `--ix-badge-animation-duration` (default `2s`)." } | enable-animation | boolean | false |
| icon | { "Leading icon name.\n\nOnly has an effect when **type** is `label`." } | icon | string \| undefined |  |
| label | { "Visible text or count.\n\nRequired for `label` and `counter`. Omit for `dot` and `status-icon`.\n\nCounters accept integers only (decimals truncated); values above 99 render as `99+`." } | label | string \| undefined |  |
| offsetX | { "Extra horizontal offset in pixels.\n\nOnly has an effect when attached.\n\nAdded to the type default." } | offset-x | number | 0 |
| offsetY | { "Extra vertical offset in pixels.\n\nOnly has an effect when attached.\n\nAdded to the type default." } | offset-y | number | 0 |
| outline | { "Show the badge in outline style." } | outline | boolean | false |
| position | { "Position relative to the slotted anchor.\n\nOnly has an effect when attached." } | position | "bottom-after" \| "top-after" | 'top-after' |
| tooltipText | { "Display a tooltip when the badge is standalone.\n\nBy default, no tooltip is displayed.\n\nAdd the attribute to use the badge label (or host `aria-label`) as the tooltip, or pass a string for custom text.\n\nIgnored when the badge is attached to an anchor." } | tooltip-text | boolean \| string | false |
| type | { "Badge type (`counter`, `label`, `dot`, or `status-icon`)." } | type | "counter" \| "dot" \| "label" \| "status-icon" | 'counter' |
| variant | { "Color variant.\n\nFor `status-icon`, unsupported values fall back to `info`.\n\nUse `error` only with `status-icon` (other types map it to `alarm`)." } | variant | "alarm" \| "critical" \| "custom" \| "error" \| "info" \| "neutral" \| "primary" \| "success" \| "warning" | 'primary' |
