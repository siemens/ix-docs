# Panes - Code

> Code examples and API documentation for the ix-pane, ix-pane-layout

# Panes - Code

## Basic

### React Examples

#### pane.tsx
```tsx
import { IxButton, IxPane } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <IxPane
        heading="Pane Popup"
        composition="right"
        size="50%"
        variant="floating"
        hideOnCollapse
        expanded={expanded}
        onExpandedChanged={(event: CustomEvent) => {
          setExpanded(event.detail.expanded);
        }}
        style={{
          position: 'absolute',
          right: '0',
          zIndex: '1',
        }}
      >
        <p>This is a popup pane.</p>
      </IxPane>

      <IxButton
        onClick={() => setExpanded(!expanded)}
        style={{ margin: '2.5rem' }}
      >
        Toggle Expanded
      </IxButton>
    </div>
  );
};
```

### Angular Examples

#### pane.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './pane.html',
})
export default class Pane {
  expanded: boolean = false;

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  expandedChanged(event: CustomEvent) {
    this.expanded = event.detail.expanded;
  }
}
```

#### pane.html
```html
<div style="position: relative; width: 100%; height: 100%">
  <ix-pane
    heading="Pane Popup"
    composition="right"
    size="50%"
    variant="floating"
    hide-on-collapse
    [expanded]="expanded"
    (expandedChanged)="expandedChanged($event)"
    style="position: absolute; right: 0; z-index: 1"
  >
    <p>This is a popup pane.</p>
  </ix-pane>

  <ix-button (click)="toggleExpanded()" style="margin: 2.5rem">
    Toggle Expanded
  </ix-button>
</div>
```

### Angular Standalone Examples

#### pane.ts
```ts
import { Component } from '@angular/core';
import { IxPane, IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxPane, IxButton],
  templateUrl: './pane.html',
})
export default class Pane {
  expanded: boolean = false;

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  expandedChanged(event: CustomEvent) {
    this.expanded = event.detail.expanded;
  }
}
```

#### pane.html
```html
<div style="position: relative; width: 100%; height: 100%">
  <ix-pane
    heading="Pane Popup"
    composition="right"
    size="50%"
    variant="floating"
    hide-on-collapse
    [expanded]="expanded"
    (expandedChanged)="expandedChanged($event)"
    style="position: absolute; right: 0; z-index: 1"
  >
    <p>This is a popup pane.</p>
  </ix-pane>

  <ix-button (click)="toggleExpanded()" style="margin: 2.5rem">
    Toggle Expanded
  </ix-button>
</div>
```

### Vue Examples

#### pane.vue
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

## Pane Layout

### React Examples

#### pane-layout.tsx
```tsx
import { IxButton, IxPane, IxPaneLayout } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [variant, setVariant] = useState<'inline' | 'floating'>('floating');
  const [layout, setLayout] = useState<'full-horizontal' | 'full-vertical'>(
    'full-horizontal'
  );

  return (
    <IxPaneLayout
      variant={variant}
      layout={layout}
      borderless={variant === 'floating'}
    >
      <IxPane heading="Pane Left" slot="left" size="33%">
        <p>This is the left pane.</p>
      </IxPane>
      <IxPane heading="Pane Top" slot="top" size="33%">
        <p>This is the top pane.</p>
      </IxPane>
      <IxPane heading="Pane Right" slot="right" size="33%">
        <p>This is the right pane.</p>
      </IxPane>
      <IxPane heading="Pane Bottom" slot="bottom" size="33%">
        <p>This is the bottom pane.</p>
      </IxPane>

      <div>
        <IxButton
          onClick={() =>
            setVariant(variant === 'inline' ? 'floating' : 'inline')
          }
          style={{ margin: '2.5rem' }}
        >
          Toggle Variant
        </IxButton>
        <IxButton
          onClick={() =>
            setLayout(
              layout === 'full-horizontal' ? 'full-vertical' : 'full-horizontal'
            )
          }
          style={{ margin: '2.5rem' }}
        >
          Toggle Layout
        </IxButton>
      </div>
    </IxPaneLayout>
  );
};
```

### Angular Examples

#### pane-layout.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './pane-layout.html',
})
export default class PaneLayout {
  variant: 'floating' | 'inline' = 'floating';
  layout: 'full-horizontal' | 'full-vertical' = 'full-horizontal';
  borderless: boolean = true;

  toggleVariant() {
    const isInline: boolean = this.variant === 'inline';

    this.variant = isInline ? 'floating' : 'inline';
    this.borderless = isInline;
  }

  toggleLayout() {
    this.layout =
      this.layout === 'full-horizontal' ? 'full-vertical' : 'full-horizontal';
  }
}
```

#### pane-layout.html
```html
<ix-pane-layout [variant]="variant" [layout]="layout" [borderless]="borderless">
  <ix-pane heading="Pane Left" slot="left" size="33%">
    <p>This is the left pane.</p>
  </ix-pane>
  <ix-pane heading="Pane Top" slot="top" size="33%">
    <p>This is the top pane.</p>
  </ix-pane>
  <ix-pane heading="Pane Right" slot="right" size="33%">
    <p>This is the right pane.</p>
  </ix-pane>
  <ix-pane heading="Pane Bottom" slot="bottom" size="33%">
    <p>This is the bottom pane.</p>
  </ix-pane>

  <div>
    <ix-button (click)="toggleVariant()" style="margin: 2.5rem"
      >Toggle Variant</ix-button
    >
    <ix-button (click)="toggleLayout()" style="margin: 2.5rem"
      >Toggle Layout</ix-button
    >
  </div>
</ix-pane-layout>
```

### Angular Standalone Examples

#### pane-layout.ts
```ts
import { Component } from '@angular/core';
import { IxPaneLayout, IxPane, IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxPaneLayout, IxPane, IxButton],
  templateUrl: './pane-layout.html',
})
export default class PaneLayout {
  variant: 'floating' | 'inline' = 'floating';
  layout: 'full-horizontal' | 'full-vertical' = 'full-horizontal';
  borderless: boolean = true;

  toggleVariant() {
    const isInline: boolean = this.variant === 'inline';

    this.variant = isInline ? 'floating' : 'inline';
    this.borderless = isInline;
  }

  toggleLayout() {
    this.layout =
      this.layout === 'full-horizontal' ? 'full-vertical' : 'full-horizontal';
  }
}
```

#### pane-layout.html
```html
<ix-pane-layout [variant]="variant" [layout]="layout" [borderless]="borderless">
  <ix-pane heading="Pane Left" slot="left" size="33%">
    <p>This is the left pane.</p>
  </ix-pane>
  <ix-pane heading="Pane Top" slot="top" size="33%">
    <p>This is the top pane.</p>
  </ix-pane>
  <ix-pane heading="Pane Right" slot="right" size="33%">
    <p>This is the right pane.</p>
  </ix-pane>
  <ix-pane heading="Pane Bottom" slot="bottom" size="33%">
    <p>This is the bottom pane.</p>
  </ix-pane>

  <div>
    <ix-button (click)="toggleVariant()" style="margin: 2.5rem"
      >Toggle Variant</ix-button
    >
    <ix-button (click)="toggleLayout()" style="margin: 2.5rem"
      >Toggle Layout</ix-button
    >
  </div>
</ix-pane-layout>
```

### Vue Examples

#### pane-layout.vue
```vue
<script setup lang="ts">
import { IxPaneLayout, IxPane, IxButton } from '@siemens/ix-vue';
import { ref } from 'vue';

const variant = ref<'floating' | 'inline'>('floating');
const layout = ref<'full-horizontal' | 'full-vertical'>('full-horizontal');
</script>

<template>
  <IxPaneLayout
    :variant="variant"
    :layout="layout"
    :borderless="variant === 'floating'"
  >
    <IxPane heading="Pane Left" slot="left" size="33%">
      <p>This is the left pane.</p>
    </IxPane>
    <IxPane heading="Pane Top" slot="top" size="33%">
      <p>This is the top pane.</p>
    </IxPane>
    <IxPane heading="Pane Right" slot="right" size="33%">
      <p>This is the right pane.</p>
    </IxPane>
    <IxPane heading="Pane Bottom" slot="bottom" size="33%">
      <p>This is the bottom pane.</p>
    </IxPane>

    <div>
      <IxButton
        @click="
          () => {
            variant = variant === 'inline' ? 'floating' : 'inline';
          }
        "
        style="margin: 2.5rem"
      >
        Toggle Variant
      </IxButton>
      <IxButton
        @click="
          () => {
            layout =
              layout === 'full-horizontal'
                ? 'full-vertical'
                : 'full-horizontal';
          }
        "
        style="margin: 2.5rem"
      >
        Toggle Layout
      </IxButton>
    </div>
  </IxPaneLayout>
</template>
```

## API for ix-pane

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelCollapseCloseButton | ARIA label close or collapse button | aria-label-collapse-close-button | string \| undefined |  |
| ariaLabelIcon | ARIA label for the icon | aria-label-icon | string \| undefined |  |
| borderless | Toggle the border of the pane. Defaults to the borderless attribute of the pane layout. If used standalone it defaults to false. | borderless | boolean | false |
| closeOnClickOutside | If true, the pane will close when clicking outside of it | close-on-click-outside | boolean | false |
| composition | Defines the position of the pane inside it's container. Inside a pane layout this property will automatically be set to the name of slot the pane is assigned to. | composition | "bottom" \| "left" \| "right" \| "top" | 'top' |
| expanded | State of the pane | expanded | boolean | false |
| heading | Title of the side panel | heading | string \| undefined |  |
| hideOnCollapse | Define if the pane should have a collapsed state | hide-on-collapse | boolean | false |
| icon | Name of the icon | icon | string \| undefined |  |
| size | The maximum size of the sidebar, when it is expanded | size | "240px" \| "320px" \| "33%" \| "360px" \| "480px" \| "50%" \| "600px" | '240px' |
| variant | Variant of the side pane. Defaults to the variant attribute of the pane layout. If used standalone it defaults to inline. | variant | "floating" \| "inline" | 'inline' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| borderlessChanged | This event is triggered when the variant of the pane is changed | borderlessChanged | { slot: string; borderless: boolean; } |
| expandedChanged | This event is triggered when the pane either expands or contracts | expandedChanged | { slot: string; expanded: boolean; } |
| variantChanged | This event is triggered when the variant of the pane is changed | variantChanged | { slot: string; variant: "floating" \| "inline"; } |

### Slot

| Name | Description |
| --- | --- |
| header | { `Additional slot for the header content` } |

## API for ix-pane-layout

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| borderless | Set the default border state for all panes in the layout | borderless | boolean | false |
| layout | Choose the layout of the panes. When set to 'full-vertical' the vertical panes (left, right) will get the full height. When set to 'full-horizontal' the horizontal panes (top, bottom) will get the full width. | layout | "full-horizontal" \| "full-vertical" | 'full-vertical' |
| variant | Set the default variant for all panes in the layout | variant | "floating" \| "inline" | 'inline' |
