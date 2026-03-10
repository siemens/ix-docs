# Application header - Code

> Code examples and API documentation for the ix-application-header

# Application header - Code

The application-header can host custom content which will be displayed on the far right side of the header.

## Basic

### React Examples

#### application-header.tsx
```tsx
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import {
  IxApplicationHeader,
  IxAvatar,
  IxDropdownButton,
  IxDropdownItem,
  IxIconButton,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplicationHeader name="My Application">
      <div className="placeholder-logo" slot="logo"></div>

      <IxIconButton variant="tertiary" icon={iconCheckboxes}></IxIconButton>
      <IxIconButton variant="tertiary" icon={iconCheckboxes}></IxIconButton>
      <IxIconButton variant="tertiary" icon={iconCheckboxes}></IxIconButton>

      <IxDropdownButton variant="subtle-tertiary" label="Select config">
        <IxDropdownItem label="Config 1"></IxDropdownItem>
        <IxDropdownItem label="Config 2"></IxDropdownItem>
        <IxDropdownItem label="Config 3"></IxDropdownItem>
      </IxDropdownButton>

      <IxAvatar username="John Doe" extra="Administrator">
        <IxDropdownItem label="Action 1"></IxDropdownItem>
        <IxDropdownItem label="Action 2"></IxDropdownItem>
      </IxAvatar>
    </IxApplicationHeader>
  );
};
```

### Angular Examples

#### application-header.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './application-header.html',
})
export default class ApplicationHeaderExample {}
```

#### application-header.html
```html
<ix-application-header name="My Application">
  <div class="placeholder-logo" slot="logo"></div>

  <ix-icon-button variant="tertiary" icon="checkboxes"></ix-icon-button>
  <ix-icon-button variant="tertiary" icon="checkboxes"></ix-icon-button>
  <ix-icon-button variant="tertiary" icon="checkboxes"></ix-icon-button>

  <ix-dropdown-button variant="subtle-tertiary" label="Select config">
    <ix-dropdown-item label="Config 1"></ix-dropdown-item>
    <ix-dropdown-item label="Config 2"></ix-dropdown-item>
    <ix-dropdown-item label="Config 3"></ix-dropdown-item>
  </ix-dropdown-button>

  <ix-avatar username="John Doe" extra="Administrator">
    <ix-dropdown-item label="Action 1"></ix-dropdown-item>
    <ix-dropdown-item label="Action 2"></ix-dropdown-item>
  </ix-avatar>
</ix-application-header>
```

### Angular Standalone Examples

#### application-header.ts
```ts
import { Component } from '@angular/core';
import {
  IxApplicationHeader,
  IxIconButton,
  IxDropdownButton,
  IxDropdownItem,
  IxAvatar,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxApplicationHeader,
    IxIconButton,
    IxDropdownButton,
    IxDropdownItem,
    IxAvatar,
  ],
  templateUrl: './application-header.html',
})
export default class ApplicationHeaderExample {}
```

#### application-header.html
```html
<ix-application-header name="My Application">
  <div class="placeholder-logo" slot="logo"></div>

  <ix-icon-button variant="tertiary" icon="checkboxes"></ix-icon-button>
  <ix-icon-button variant="tertiary" icon="checkboxes"></ix-icon-button>
  <ix-icon-button variant="tertiary" icon="checkboxes"></ix-icon-button>

  <ix-dropdown-button variant="subtle-tertiary" label="Select config">
    <ix-dropdown-item label="Config 1"></ix-dropdown-item>
    <ix-dropdown-item label="Config 2"></ix-dropdown-item>
    <ix-dropdown-item label="Config 3"></ix-dropdown-item>
  </ix-dropdown-button>

  <ix-avatar username="John Doe" extra="Administrator">
    <ix-dropdown-item label="Action 1"></ix-dropdown-item>
    <ix-dropdown-item label="Action 2"></ix-dropdown-item>
  </ix-avatar>
</ix-application-header>
```

### Vue Examples

#### application-header.vue
```vue
<script setup lang="ts">
import {
  IxApplicationHeader,
  IxAvatar,
  IxDropdownButton,
  IxDropdownItem,
  IxIconButton,
} from '@siemens/ix-vue';

import { iconCheckboxes } from '@siemens/ix-icons/icons';
</script>

<template>
  <IxApplicationHeader name="My Application">
    <div className="placeholder-logo" slot="logo"></div>

    <IxIconButton variant="tertiary" :icon="iconCheckboxes"></IxIconButton>
    <IxIconButton variant="tertiary" :icon="iconCheckboxes"></IxIconButton>
    <IxIconButton variant="tertiary" :icon="iconCheckboxes"></IxIconButton>

    <IxDropdownButton variant="subtle-tertiary" label="Select config">
      <IxDropdownItem label="Config 1"></IxDropdownItem>
      <IxDropdownItem label="Config 2"></IxDropdownItem>
      <IxDropdownItem label="Config 3"></IxDropdownItem>
    </IxDropdownButton>

    <IxAvatar username="John Doe" extra="Administrator">
      <IxDropdownItem label="Action 1"></IxDropdownItem>
      <IxDropdownItem label="Action 2"></IxDropdownItem>
    </IxAvatar>
  </IxApplicationHeader>
</template>
```

## Avatar

Enhance the interactivity of your application-header by placing the avatar component as part of the content. This not only makes the avatar clickable, but also enables the addition of dropdown-item's directly within the avatar component.

## API for ix-application-header

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| appIcon | The app icon will be shown as the first element inside the header. It will be hidden on smaller screens. | app-icon | string \| undefined |  |
| appIconAlt | Alt text for the app icon | app-icon-alt | string \| undefined |  |
| appIconOutline | Render subtle outline around app icon to ensure proper contrast. | app-icon-outline | boolean | false |
| ariaLabelAppSwitchIconButton | ARIA label for the app switch icon button | aria-label-app-switch-icon-button | string \| undefined |  |
| ariaLabelMenuExpandIconButton | ARIA label for the menu expand icon button | aria-label-menu-expand-icon-button | string \| undefined |  |
| ariaLabelMoreMenuIconButton | ARIA label for the more menu icon button | aria-label-more-menu-icon-button | string \| undefined |  |
| companyLogo | Company logo will be show on the left side of the application name. It will be hidden on smaller screens. | company-logo | string \| undefined |  |
| companyLogoAlt | Alt text for the company logo | company-logo-alt | string \| undefined |  |
| enableTopLayer | Enable Popover API rendering for dropdown. | enable-top-layer | boolean | false |
| hideBottomBorder | Hides the bottom border of the header | hide-bottom-border | boolean | false |
| name | Application name | name | string \| undefined |  |
| nameSuffix | Define a suffix which will be displayed next to the application name | name-suffix | string \| undefined |  |
| showMenu | Controls the visibility of the menu toggle button based on the context of the application header. When the application header is utilized outside the application frame, the menu toggle button is displayed. Conversely, if the header is within the application frame, this property is ineffective. | show-menu | boolean \| undefined | false |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| menuToggle | Event emitted when the menu toggle button is clicked | menuToggle | boolean |
| openAppSwitch | Event emitted when the app switch button is clicked | openAppSwitch | void |

### Slot

| Name | Description |
| --- | --- |
| default | { `Place items on the right side of the header. If the screen size is small, the items will be shown inside a dropdown.` } |
| logo | { `Place a company logo inside the header. Alternatively the companyLogo property can be set.` } |
| overflow | { `Use this slot to display additional items that do not fit in the default or secondary slot.` } |
| secondary | { `Place additional items inside the header. They will appear after logo and name. If the screen size is small, the items will be shown inside a dropdown.` } |
