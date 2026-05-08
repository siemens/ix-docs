# Avatar - Code

> Code examples and API documentation for the ix-avatar

# Avatar - Code

## Basic

### React Examples

#### avatar.tsx
```tsx
import { IxAvatar } from '@siemens/ix-react';

export default () => {
  return <IxAvatar></IxAvatar>;
};
```

### Angular Examples

#### avatar.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-avatar></ix-avatar> `,
})
export default class Avatar {}
```

### Angular Standalone Examples

#### avatar.ts
```ts
import { Component } from '@angular/core';
import { IxAvatar } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxAvatar],
  template: ` <ix-avatar></ix-avatar> `,
})
export default class Avatar {}
```

### Vue Examples

#### avatar.vue
```vue
<script setup lang="ts">
import { IxAvatar } from '@siemens/ix-vue';
</script>

<template>
  <IxAvatar></IxAvatar>
</template>
```

## Initials

### React Examples

#### avatar-initials.tsx
```tsx
import { IxAvatar } from '@siemens/ix-react';

export default () => {
  return <IxAvatar initials="JD"></IxAvatar>;
};
```

### Angular Examples

#### avatar-initials.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-avatar initials="JD"></ix-avatar> `,
})
export default class AvatarInitials {}
```

### Angular Standalone Examples

#### avatar-initials.ts
```ts
import { Component } from '@angular/core';
import { IxAvatar } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxAvatar],
  template: ` <ix-avatar initials="JD"></ix-avatar> `,
})
export default class AvatarInitials {}
```

### Vue Examples

#### avatar-initials.vue
```vue
<script setup lang="ts">
import { IxAvatar } from '@siemens/ix-vue';
</script>

<template>
  <IxAvatar initials="JD"></IxAvatar>
</template>
```

## Image

### React Examples

#### avatar-image.tsx
```tsx
import { IxAvatar } from '@siemens/ix-react';

export default () => {
  return (
    <IxAvatar image="https://www.gravatar.com/avatar/00000000000000000000000000000000"></IxAvatar>
  );
};
```

### Angular Examples

#### avatar-image.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-avatar
      image="https://www.gravatar.com/avatar/00000000000000000000000000000000"
    ></ix-avatar>
  `,
})
export default class AvatarImage {}
```

### Angular Standalone Examples

#### avatar-image.ts
```ts
import { Component } from '@angular/core';
import { IxAvatar } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxAvatar],
  template: `
    <ix-avatar
      image="https://www.gravatar.com/avatar/00000000000000000000000000000000"
    ></ix-avatar>
  `,
})
export default class AvatarImage {}
```

### Vue Examples

#### avatar-image.vue
```vue
<script setup lang="ts">
import { IxAvatar } from '@siemens/ix-vue';
</script>

<template>
  <IxAvatar
    image="https://www.gravatar.com/avatar/00000000000000000000000000000000"
  ></IxAvatar>
</template>
```

## Header

You can also add the avatar to the header, which will turn it into a clickable button.

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

## API for ix-avatar

### Properties

| Name | Description | Attribute | Type |
| --- | --- | --- | --- |
| a11yLabel | Accessibility label for the image Will be set as aria-label on the nested HTML img element | a11y-label | string \| undefined |
| ariaLabelTooltip | aria-label for the tooltip | aria-label-tooltip | string \| undefined |
| extra | Optional description text that will be displayed underneath the username. Note: Only working if avatar is part of the ix-application-header | extra | string \| undefined |
| image | Display an avatar image | image | string \| undefined |
| initials | Display the initials of the user. Will be overwritten by image | initials | string \| undefined |
| tooltipText | Text to display in a tooltip when hovering over the avatar | tooltip-text | string \| undefined |
| username | If set an info card displaying the username will be placed inside the dropdown. Note: Only working if avatar is part of the ix-application-header | username | string \| undefined |
