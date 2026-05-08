# Dropdown - Code

> Code examples and API documentation for the ix-dropdown, ix-dropdown-item

# Dropdown - Code

## Basic

### React Examples

#### dropdown.tsx
```tsx
import {
  IxButton,
  IxDivider,
  IxDropdown,
  IxDropdownHeader,
  IxDropdownItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton id="triggerId">Open</IxButton>
      <IxDropdown trigger="triggerId">
        <IxDropdownHeader label="Category"></IxDropdownHeader>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
        <IxDropdownItem label="Item 3"></IxDropdownItem>
        <IxDropdownItem label="Item 4"></IxDropdownItem>
        <IxDivider></IxDivider>
        <IxDropdownItem label="Item 5"></IxDropdownItem>
      </IxDropdown>
    </>
  );
};
```

### Angular Examples

#### dropdown.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button #trigger>Open</ix-button>
    <ix-dropdown [ixDropdownTrigger]="trigger">
      <ix-dropdown-header label="Category"></ix-dropdown-header>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item label="Item 3"></ix-dropdown-item>
      <ix-dropdown-item label="Item 4"></ix-dropdown-item>
      <ix-divider></ix-divider>
      <ix-dropdown-item label="Item 5"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export default class Dropdown {}
```

### Angular Standalone Examples

#### dropdown.ts
```ts
import { Component } from '@angular/core';
import {
  IxButton,
  IxDropdown,
  IxDropdownHeader,
  IxDropdownItem,
  IxDivider,
  IxDropdownTriggerDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxButton,
    IxDropdown,
    IxDropdownHeader,
    IxDropdownItem,
    IxDivider,
    IxDropdownTriggerDirective,
  ],
  template: `
    <ix-button #trigger>Open</ix-button>
    <ix-dropdown [ixDropdownTrigger]="trigger">
      <ix-dropdown-header label="Category"></ix-dropdown-header>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item label="Item 3"></ix-dropdown-item>
      <ix-dropdown-item label="Item 4"></ix-dropdown-item>
      <ix-divider></ix-divider>
      <ix-dropdown-item label="Item 5"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export default class Dropdown {}
```

### Vue Examples

#### dropdown.vue
```vue
<script setup lang="ts">
import {
  IxButton,
  IxDivider,
  IxDropdown,
  IxDropdownHeader,
  IxDropdownItem,
} from '@siemens/ix-vue';
</script>

<template>
  <IxButton id="triggerId">Open</IxButton>
  <IxDropdown trigger="triggerId">
    <IxDropdownHeader label="Category"></IxDropdownHeader>
    <IxDropdownItem label="Item 2"></IxDropdownItem>
    <IxDropdownItem label="Item 3"></IxDropdownItem>
    <IxDropdownItem label="Item 4"></IxDropdownItem>
    <IxDivider></IxDivider>
    <IxDropdownItem label="Item 5"></IxDropdownItem>
  </IxDropdown>
</template>
```

## Dropdown with icon

### React Examples

#### dropdown-icon.tsx
```tsx
import { iconBulb, iconDocument, iconStar } from '@siemens/ix-icons/icons';
import { IxButton, IxDropdown, IxDropdownItem } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton id="triggerId">Open</IxButton>
      <IxDropdown trigger="triggerId">
        <IxDropdownItem label="Item 1" icon={iconStar}></IxDropdownItem>
        <IxDropdownItem label="Item 2" icon={iconDocument}></IxDropdownItem>
        <IxDropdownItem label="Item 3" icon={iconBulb}></IxDropdownItem>
      </IxDropdown>
    </>
  );
};
```

### Angular Examples

#### dropdown-icon.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button id="iconTriggerId">Open</ix-button>
    <ix-dropdown trigger="iconTriggerId">
      <ix-dropdown-item label="Item 1" icon="star"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2" icon="document"></ix-dropdown-item>
      <ix-dropdown-item label="Item 3" icon="bulb"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export default class DropdownIcon {}
```

### Angular Standalone Examples

#### dropdown-icon.ts
```ts
import { Component } from '@angular/core';
import {
  IxButton,
  IxDropdown,
  IxDropdownItem,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton, IxDropdown, IxDropdownItem],
  template: `
    <ix-button id="iconTriggerId">Open</ix-button>
    <ix-dropdown trigger="iconTriggerId">
      <ix-dropdown-item label="Item 1" icon="star"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2" icon="document"></ix-dropdown-item>
      <ix-dropdown-item label="Item 3" icon="bulb"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export default class DropdownIcon {}
```

### Vue Examples

#### dropdown-icon.vue
```vue
<script setup lang="ts">
import { iconBulb, iconDocument, iconStar } from '@siemens/ix-icons/icons';
import { IxButton, IxDropdown, IxDropdownItem } from '@siemens/ix-vue';
</script>

<template>
  <IxButton id="triggerId">Open</IxButton>
  <IxDropdown trigger="triggerId">
    <IxDropdownItem label="Item 1" :icon="iconStar"></IxDropdownItem>
    <IxDropdownItem label="Item 2" :icon="iconDocument"></IxDropdownItem>
    <IxDropdownItem label="Item 3" :icon="iconBulb"></IxDropdownItem>
  </IxDropdown>
</template>
```

## Dropdown with quick actions menu

### React Examples

#### dropdown-quick-actions.tsx
```tsx
import {
  iconBulb,
  iconCut,
  iconDocument,
  iconStar,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxDivider,
  IxDropdown,
  IxDropdownItem,
  IxDropdownQuickActions,
  IxIconButton,
} from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton id="iconTriggerId">Open</IxButton>
      <IxDropdown trigger="iconTriggerId">
        <IxDropdownQuickActions>
          <IxIconButton variant="tertiary" icon={iconCut}></IxIconButton>
          <IxIconButton variant="tertiary" icon={iconBulb}></IxIconButton>
          <IxIconButton variant="tertiary" icon={iconTrashcan}></IxIconButton>
        </IxDropdownQuickActions>

        <IxDivider></IxDivider>

        <IxDropdownItem icon={iconStar} label="Item 1"></IxDropdownItem>
        <IxDropdownItem icon={iconDocument} label="Item 2"></IxDropdownItem>
        <IxDropdownItem icon={iconBulb} label="Item 3"></IxDropdownItem>
      </IxDropdown>
    </>
  );
};
```

### Angular Examples

#### dropdown-quick-actions.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './dropdown-quick-actions.html',
})
export default class DropdownQuickActions {}
```

#### dropdown-quick-actions.html
```html
<ix-button #trigger>Open</ix-button>
<ix-dropdown [ixDropdownTrigger]="trigger">
  <ix-dropdown-quick-actions>
    <ix-icon-button variant="tertiary" icon="cut"></ix-icon-button>
    <ix-icon-button variant="tertiary" icon="bulb"></ix-icon-button>
    <ix-icon-button variant="tertiary" icon="trashcan"></ix-icon-button>
  </ix-dropdown-quick-actions>

  <ix-divider></ix-divider>

  <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
  <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
  <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>
</ix-dropdown>
```

### Angular Standalone Examples

#### dropdown-quick-actions.ts
```ts
import { Component } from '@angular/core';
import {
  IxButton,
  IxDropdown,
  IxDropdownQuickActions,
  IxIconButton,
  IxDivider,
  IxDropdownItem,
  IxDropdownTriggerDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxButton,
    IxDropdown,
    IxDropdownQuickActions,
    IxIconButton,
    IxDivider,
    IxDropdownItem,
    IxDropdownTriggerDirective,
  ],
  templateUrl: './dropdown-quick-actions.html',
})
export default class DropdownQuickActions {}
```

#### dropdown-quick-actions.html
```html
<ix-button #trigger>Open</ix-button>
<ix-dropdown [ixDropdownTrigger]="trigger">
  <ix-dropdown-quick-actions>
    <ix-icon-button variant="tertiary" icon="cut"></ix-icon-button>
    <ix-icon-button variant="tertiary" icon="bulb"></ix-icon-button>
    <ix-icon-button variant="tertiary" icon="trashcan"></ix-icon-button>
  </ix-dropdown-quick-actions>

  <ix-divider></ix-divider>

  <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
  <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
  <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>
</ix-dropdown>
```

### Vue Examples

#### dropdown-quick-actions.vue
```vue
<script setup lang="ts">
import {
  iconBulb,
  iconCut,
  iconDocument,
  iconStar,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxDivider,
  IxDropdown,
  IxDropdownItem,
  IxDropdownQuickActions,
  IxIconButton,
} from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxButton id="iconTriggerId">Open</IxButton>
    <IxDropdown trigger="iconTriggerId">
      <IxDropdownQuickActions>
        <IxIconButton variant="tertiary" :icon="iconCut"></IxIconButton>
        <IxIconButton variant="tertiary" :icon="iconBulb"></IxIconButton>
        <IxIconButton variant="tertiary" :icon="iconTrashcan"></IxIconButton>
      </IxDropdownQuickActions>

      <IxDivider></IxDivider>

      <IxDropdownItem :icon="iconStar" label="Item 1"></IxDropdownItem>
      <IxDropdownItem :icon="iconDocument" label="Item 2"></IxDropdownItem>
      <IxDropdownItem :icon="iconBulb" label="Item 3"></IxDropdownItem>
    </IxDropdown>
  </div>
</template>
```

## Dropdown with submenu

### React Examples

#### dropdown-submenu.tsx
```tsx
import { iconBulb, iconDocument, iconStar } from '@siemens/ix-icons/icons';
import { IxButton, IxDropdown, IxDropdownItem } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton id="iconTriggerId">Open</IxButton>
      <IxDropdown trigger="iconTriggerId">
        <IxDropdownItem id="submenuTrigger" label="Submenu"></IxDropdownItem>
        <IxDropdownItem icon={iconStar} label="Item 1"></IxDropdownItem>
        <IxDropdownItem icon={iconDocument} label="Item 2"></IxDropdownItem>
        <IxDropdownItem icon={iconBulb} label="Item 3"></IxDropdownItem>
      </IxDropdown>
      <IxDropdown trigger="submenuTrigger" placement="right-start">
        <IxDropdownItem icon={iconStar} label="Item 1"></IxDropdownItem>
        <IxDropdownItem icon={iconDocument} label="Item 2"></IxDropdownItem>
      </IxDropdown>
    </>
  );
};
```

### Angular Examples

#### dropdown-submenu.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button #trigger>Open</ix-button>
    <ix-dropdown [ixDropdownTrigger]="trigger">
      <ix-dropdown-item #submenu label="Submenu"></ix-dropdown-item>
      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>
    </ix-dropdown>
    <ix-dropdown [ixDropdownTrigger]="submenu" placement="right-start">
      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export default class DropdownSubmenu {}
```

### Angular Standalone Examples

#### dropdown-submenu.ts
```ts
import { Component } from '@angular/core';
import {
  IxButton,
  IxDropdown,
  IxDropdownItem,
  IxDropdownTriggerDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton, IxDropdown, IxDropdownItem, IxDropdownTriggerDirective],
  template: `
    <ix-button #trigger>Open</ix-button>
    <ix-dropdown [ixDropdownTrigger]="trigger">
      <ix-dropdown-item #submenu label="Submenu"></ix-dropdown-item>
      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>
    </ix-dropdown>
    <ix-dropdown [ixDropdownTrigger]="submenu" placement="right-start">
      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export default class DropdownSubmenu {}
```

### Vue Examples

#### dropdown-submenu.vue
```vue
<script setup lang="ts">
import { iconBulb, iconDocument, iconStar } from '@siemens/ix-icons/icons';
import { IxButton, IxDropdown, IxDropdownItem } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxButton id="iconTriggerId">Open</IxButton>
    <IxDropdown trigger="iconTriggerId">
      <IxDropdownItem id="submenuTrigger" label="Submenu"></IxDropdownItem>
      <IxDropdownItem :icon="iconStar" label="Item 1"></IxDropdownItem>
      <IxDropdownItem :icon="iconDocument" label="Item 2"></IxDropdownItem>
      <IxDropdownItem :icon="iconBulb" label="Item 3"></IxDropdownItem>
    </IxDropdown>
    <IxDropdown trigger="submenuTrigger" placement="right-start">
      <IxDropdownItem :icon="iconStar" label="Item 1"></IxDropdownItem>
      <IxDropdownItem :icon="iconDocument" label="Item 2"></IxDropdownItem>
    </IxDropdown>
  </div>
</template>
```

## API for ix-dropdown

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| anchor | Define an anchor element | anchor | HTMLElement \| Promise \| string \| undefined |  |
| closeBehavior | Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown. If the dropdown is a child of another one, it will be closed with the parent, regardless of its own close behavior. | close-behavior | "both" \| "inside" \| "outside" \| boolean | 'both' |
| enableTopLayer | Enable Popover API rendering for top-layer positioning. | enable-top-layer | boolean | false |
| header | An optional header shown at the top of the dropdown | header | string \| undefined |  |
| placement | Placement of the dropdown | placement | "bottom-end" \| "bottom-start" \| "left-end" \| "left-start" \| "right-end" \| "right-start" \| "top-end" \| "top-start" | 'bottom-start' |
| positioningStrategy | Position strategy | positioning-strategy | "absolute" \| "fixed" | 'fixed' |
| show | Show dropdown | show | boolean | false |
| suppressAutomaticPlacement | Suppress the automatic placement of the dropdown. | suppress-automatic-placement | boolean | false |
| trigger | Define an element that triggers the dropdown. A trigger can either be a string that will be interpreted as id attribute or a DOM element. | trigger | HTMLElement \| Promise \| string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| showChanged | Fire event after visibility of dropdown has changed | showChanged | boolean |

## API for ix-dropdown-item

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelButton | ARIA label for the item's button Will be set as aria-label for the nested HTML button element | aria-label-button | string \| undefined |  |
| ariaLabelIcon | ARIA label for the icon | aria-label-icon | string \| undefined |  |
| checked | Whether the item is checked or not. If true a checkmark will mark the item as checked. | checked | boolean | false |
| disabled | Disable item and remove event listeners | disabled | boolean | false |
| hover | Display hover state | hover | boolean | false |
| icon | Icon of dropdown item | icon | string \| undefined |  |
| label | Label of dropdown item | label | string \| undefined |  |
