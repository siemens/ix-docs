# Split button - Code

> Code examples and API documentation for the ix-split-button

# Split button - Code

## Basic

### React Examples

#### split-button.tsx
```tsx
import { iconChevronDownSmall } from '@siemens/ix-icons/icons';
import { IxDropdownItem, IxSplitButton } from '@siemens/ix-react';
import './split-button.scoped.css'

export default () => {
  return (
    <div>
      <IxSplitButton label="Action text" splitIcon={iconChevronDownSmall}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxSplitButton>
      <IxSplitButton label="Action text" splitIcon={iconChevronDownSmall} disabled>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxSplitButton>
      <IxSplitButton label="Action text" splitIcon={iconChevronDownSmall} disableButton>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxSplitButton>
      <IxSplitButton label="Action text" splitIcon={iconChevronDownSmall} disableDropdownButton>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxSplitButton>
    </div>
  );
};
```

#### split-button.scoped.css
```css
body {
  display: flex;
}

ix-split-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### split-button.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  styleUrls: ['./split-button.css'],
  template: `
  <div>
    <ix-split-button label="Action text" splitIcon="chevron-down-small">
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
    <ix-split-button label="Action text" splitIcon="chevron-down-small" disabled>
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
    <ix-split-button label="Action text" splitIcon="chevron-down-small" disableButton>
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
    <ix-split-button label="Action text" splitIcon="chevron-down-small" disableDropdownButton>
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
  </div>
  `,
})
export default class SplitButton {}
```

#### split-button.css
```css
body {
  display: flex;
}

ix-split-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### split-button.ts
```ts
import { Component } from '@angular/core';
import { IxSplitButton, IxDropdownItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxSplitButton, IxDropdownItem],
  styleUrls: ['./split-button.css'],
  template: `
    <ix-split-button label="Action text" splitIcon="chevron-down-small">
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
    <ix-split-button
      label="Action text"
      splitIcon="chevron-down-small"
      disabled
    >
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
    <ix-split-button
      label="Action text"
      splitIcon="chevron-down-small"
      disableButton
    >
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
    <ix-split-button
      label="Action text"
      splitIcon="chevron-down-small"
      disableDropdownButton
    >
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
  `,
})
export default class SplitButton {}
```

#### split-button.css
```css
body {
  display: flex;
}

ix-split-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### split-button.vue
```vue
<script setup lang="ts">
import { iconChevronDownSmall } from '@siemens/ix-icons/icons';
import { IxSplitButton, IxDropdownItem } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxSplitButton label="Action text" :splitIcon="iconChevronDownSmall">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxSplitButton>
    <IxSplitButton label="Action text" :splitIcon="iconChevronDownSmall" disabled>
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxSplitButton>
    <IxSplitButton label="Action text" :splitIcon="iconChevronDownSmall" disableButton>
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxSplitButton>
    <IxSplitButton label="Action text" :splitIcon="iconChevronDownSmall" disableDropdownButton>
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxSplitButton>
</div>
</template>

<style scoped src="./split-button.css"></style>
```

#### split-button.css
```css
body {
  display: flex;
}

ix-split-button {
  margin: 0.25rem;
}
```

## With icon only

### React Examples

#### split-button-icons.tsx
```tsx
import {
  iconBulb,
  iconChevronDownSmall,
  iconCut,
} from '@siemens/ix-icons/icons';
import { IxDropdownItem, IxSplitButton } from '@siemens/ix-react';

export default () => {
  return (
    <IxSplitButton label="Action text" splitIcon={iconChevronDownSmall}>
      <IxDropdownItem label="Item 1" icon={iconCut}></IxDropdownItem>
      <IxDropdownItem label="Item 2" icon={iconBulb}></IxDropdownItem>
    </IxSplitButton>
  );
};
```

### Angular Examples

#### split-button-icons.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-split-button icon="document" splitIcon="chevron-down-small">
      <ix-dropdown-item icon="cut"></ix-dropdown-item>
      <ix-dropdown-item icon="bulb"></ix-dropdown-item>
    </ix-split-button>
  `,
})
export default class SplitButtonIcons {}
```

### Angular Standalone Examples

#### split-button-icons.ts
```ts
import { Component } from '@angular/core';
import { IxSplitButton, IxDropdownItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxSplitButton, IxDropdownItem],
  template: `
    <ix-split-button icon="document" splitIcon="chevron-down-small">
      <ix-dropdown-item icon="cut"></ix-dropdown-item>
      <ix-dropdown-item icon="bulb"></ix-dropdown-item>
    </ix-split-button>
  `,
})
export default class SplitButtonIcons {}
```

### Vue Examples

#### split-button-icons.vue
```vue
<script setup lang="ts">
import {
  iconBulb,
  iconChevronDownSmall,
  iconCut,
} from '@siemens/ix-icons/icons';
import { IxSplitButton, IxDropdownItem } from '@siemens/ix-vue';
</script>

<template>
  <IxSplitButton label="Action text" :splitIcon="iconChevronDownSmall">
    <IxDropdownItem label="Item 1" :icon="iconCut"></IxDropdownItem>
    <IxDropdownItem label="Item 2" :icon="iconBulb"></IxDropdownItem>
  </IxSplitButton>
</template>
```

## API for ix-split-button

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelButton | ARIA label for the button (use if no label and icon button) | aria-label-button | string \| undefined |  |
| ariaLabelSplitIconButton | ARIA label for the split icon button | aria-label-split-icon-button | string \| undefined |  |
| closeBehavior | Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown. | close-behavior | "both" \| "inside" \| "outside" \| boolean | 'both' |
| disableButton | Disables only the main button while keeping the dropdown trigger enabled | disable-button | boolean | false |
| disableDropdownButton | Disables only the dropdown trigger while keeping the main button enabled | disable-dropdown-button | boolean | false |
| disabled | Disabled | disabled | boolean | false |
| enableTopLayer | Enable Popover API rendering for dropdown. | enable-top-layer | boolean | false |
| icon | Button icon | icon | string \| undefined |  |
| label | Button label | label | string \| undefined |  |
| placement | Placement of the dropdown | placement | "bottom-end" \| "bottom-start" \| "left-end" \| "left-start" \| "right-end" \| "right-start" \| "top-end" \| "top-start" | 'bottom-start' |
| splitIcon | Icon of the button on the right | split-icon | string \| undefined |  |
| variant | Color variant of button | variant | "danger-primary" \| "danger-secondary" \| "danger-tertiary" \| "primary" \| "secondary" \| "subtle-primary" \| "subtle-secondary" \| "subtle-tertiary" \| "tertiary" | 'primary' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| buttonClick | Button clicked | buttonClick | MouseEvent |
