# Dropdown button - Code

> Code examples and API documentation for the ix-dropdown-button

# Dropdown button - Code

## Basic

### React Examples

#### dropdown-button.tsx
```tsx
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import './dropdown-button.scoped.css';

import { IxDropdownButton, IxDropdownItem } from '@siemens/ix-react';

export default () => {
  return (
    <div className="dropdown-button">
      <IxDropdownButton label="Dropdown" icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton variant="subtle-primary" label="Dropdown" icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton variant="tertiary" label="Dropdown" icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label="Dropdown"
        disabled
        icon={iconCheckboxes}
      ></IxDropdownButton>
    </div>
  );
};
```

#### dropdown-button.scoped.css
```css
.dropdown-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.dropdown-button > ix-dropdown-button {
  margin-bottom: 0.5rem;
}
```

### Angular Examples

#### dropdown-button.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="example">
      <ix-dropdown-button label="Dropdown" icon="checkboxes">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button variant="subtle-primary" label="Dropdown" icon="checkboxes">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button variant="tertiary" label="Dropdown" icon="checkboxes">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button label="Dropdown" disabled icon="checkboxes">
      </ix-dropdown-button>
    </div>
  `,
  styleUrls: ['./dropdown-button.css'],
})
export default class Dropdown {}
```

#### dropdown-button.css
```css
.dropdown-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.dropdown-button > ix-dropdown-button {
  margin-bottom: 0.5rem;
}
```

### Angular Standalone Examples

#### dropdown-button.ts
```ts
import { Component } from '@angular/core';
import {
  IxDropdownButton,
  IxDropdownItem,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDropdownButton, IxDropdownItem],
  template: `
    <div class="example">
      <ix-dropdown-button label="Dropdown" icon="checkboxes">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button variant="subtle-primary" label="Dropdown" icon="checkboxes">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button variant="tertiary" label="Dropdown" icon="checkboxes">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button label="Dropdown" disabled icon="checkboxes">
      </ix-dropdown-button>
    </div>
  `,
  styleUrls: ['./dropdown-button.css'],
})
export default class Dropdown {}
```

#### dropdown-button.css
```css
.dropdown-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.dropdown-button > ix-dropdown-button {
  margin-bottom: 0.5rem;
}
```

### Vue Examples

#### dropdown-button.vue
```vue
<script setup lang="ts">
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import { IxDropdownButton } from '@siemens/ix-vue';
</script>

<style scoped src="./dropdown-button.css"></style>

<template>
  <div class="dropdown-button">
    <IxDropdownButton label="Dropdown" :icon="iconCheckboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton variant="subtle-primary" label="Dropdown" :icon="iconCheckboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton variant="tertiary" label="Dropdown" :icon="iconCheckboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton label="Dropdown" disabled :icon="iconCheckboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
  </div>
</template>
```

#### dropdown-button.css
```css
.dropdown-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.dropdown-button > ix-dropdown-button {
  margin-bottom: 0.5rem;
}
```

## Icon

### React Examples

#### dropdown-button-icon.tsx
```tsx
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import './dropdown-button-icon.scoped.css';

import { IxDropdownButton, IxDropdownItem } from '@siemens/ix-react';

export default () => {
  return (
    <div className="dropdown-button">
      <IxDropdownButton label="" icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton variant="subtle-primary" label="" icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton variant="tertiary" label="" icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label=""
        disabled
        icon={iconCheckboxes}
      ></IxDropdownButton>
    </div>
  );
};
```

#### dropdown-button-icon.scoped.css
```css
.dropdown-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.dropdown-button > ix-dropdown-button {
  margin-bottom: 0.5rem;
}
```

### Angular Examples

#### dropdown-button-icon.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  styleUrls: ['./dropdown-button-icon.css'],
  template: `
    <div class="dropdown-button">
      <ix-dropdown-button label="" icon="checkboxes">
        <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button variant="subtle-primary" label="" icon="checkboxes">
        <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button variant="tertiary" label="" icon="checkboxes">
        <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button label="" disabled icon="checkboxes">
      </ix-dropdown-button>
    </div>
  `,
})
export default class Dropdown {}
```

#### dropdown-button-icon.css
```css
.dropdown-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.dropdown-button > ix-dropdown-button {
  margin-bottom: 0.5rem;
}
```

### Angular Standalone Examples

#### dropdown-button-icon.ts
```ts
import { Component } from '@angular/core';
import {
  IxDropdownButton,
  IxDropdownItem,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxDropdownButton, IxDropdownItem],
  styleUrls: ['./dropdown-button-icon.css'],
  template: `
    <div class="dropdown-button">
      <ix-dropdown-button label="" icon="checkboxes">
        <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button variant="subtle-primary" label="" icon="checkboxes">
        <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button variant="tertiary" label="" icon="checkboxes">
        <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button label="" disabled icon="checkboxes">
      </ix-dropdown-button>
    </div>
  `,
})
export default class Dropdown {}
```

#### dropdown-button-icon.css
```css
.dropdown-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.dropdown-button > ix-dropdown-button {
  margin-bottom: 0.5rem;
}
```

### Vue Examples

#### dropdown-button-icon.vue
```vue
<script setup lang="ts">
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import { IxDropdownButton } from '@siemens/ix-vue';
</script>

<style scoped src="./dropdown-button-icon.css"></style>

<template>
  <div class="dropdown-button">
    <IxDropdownButton label="" :icon="iconCheckboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton variant="subtle-primary" label="" :icon="iconCheckboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton variant="tertiary" label="" :icon="iconCheckboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
    <IxDropdownButton label="" disabled :icon="iconCheckboxes">
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxDropdownButton>
  </div>
</template>
```

#### dropdown-button-icon.css
```css
.dropdown-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 20rem;
}

.dropdown-button > ix-dropdown-button {
  margin-bottom: 0.5rem;
}
```

## API for ix-dropdown-button

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelDropdownButton | ARIA label for the dropdown button Will be set as aria-label on the nested HTML button element | aria-label-dropdown-button | string \| undefined |  |
| closeBehavior | Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown. | close-behavior | "both" \| "inside" \| "outside" \| boolean | 'both' |
| disabled | Disable button | disabled | boolean | false |
| enableTopLayer | Enable Popover API rendering for dropdown. | enable-top-layer | boolean | false |
| icon | Button icon | icon | string \| undefined |  |
| label | Set label | label | string \| undefined |  |
| placement | Placement of the dropdown | placement | "bottom-end" \| "bottom-start" \| "left-end" \| "left-start" \| "right-end" \| "right-start" \| "top-end" \| "top-start" \| undefined |  |
| variant | Button variant | variant | "danger-primary" \| "danger-secondary" \| "danger-tertiary" \| "primary" \| "secondary" \| "subtle-primary" \| "subtle-secondary" \| "subtle-tertiary" \| "tertiary" | 'primary' |
