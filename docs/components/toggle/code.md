# Toggle - Code

> Code examples and API documentation for the ix-toggle

# Toggle - Code

## Basic

### React Examples

#### toggle.tsx
```tsx
import { IxToggle } from '@siemens/ix-react';

export default () => {
  return <IxToggle />;
};
```

### Angular Examples

#### toggle.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-toggle></ix-toggle> `,
})
export default class Toggle {}
```

### Angular Standalone Examples

#### toggle.ts
```ts
import { Component } from '@angular/core';
import {
  IxToggle,
  IxBooleanValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxToggle, IxBooleanValueAccessorDirective],
  template: ` <ix-toggle></ix-toggle> `,
})
export default class Toggle {}
```

### Vue Examples

#### toggle.vue
```vue
<script setup lang="ts">
import { IxToggle } from '@siemens/ix-vue';
</script>

<template>
  <IxToggle />
</template>
```

## Custom label

### React Examples

#### toggle-custom-label.tsx
```tsx
import { IxToggle } from '@siemens/ix-react';

export default () => {
  return <IxToggle text-off="Offline" text-on="Online"></IxToggle>;
};
```

### Angular Examples

#### toggle-custom-label.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-toggle text-off="Offline" text-on="Online"></ix-toggle> `,
})
export default class ToggleCustomLabel {}
```

### Angular Standalone Examples

#### toggle-custom-label.ts
```ts
import { Component } from '@angular/core';
import {
  IxToggle,
  IxBooleanValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxToggle, IxBooleanValueAccessorDirective],
  template: ` <ix-toggle text-off="Offline" text-on="Online"></ix-toggle> `,
})
export default class ToggleCustomLabel {}
```

### Vue Examples

#### toggle-custom-label.vue
```vue
<script setup lang="ts">
import { IxToggle } from '@siemens/ix-vue';
</script>

<template>
  <IxToggle text-off="Offline" text-on="Online"></IxToggle>
</template>
```

## Disabled

### React Examples

#### toggle-disabled.tsx
```tsx
import { IxToggle } from '@siemens/ix-react';

export default () => {
  return <IxToggle disabled />;
};
```

### Angular Examples

#### toggle-disabled.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-toggle disabled></ix-toggle> `,
})
export default class ToggleCustomDisabled {}
```

### Angular Standalone Examples

#### toggle-disabled.ts
```ts
import { Component } from '@angular/core';
import {
  IxToggle,
  IxBooleanValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxToggle, IxBooleanValueAccessorDirective],
  template: ` <ix-toggle disabled></ix-toggle> `,
})
export default class ToggleCustomDisabled {}
```

### Vue Examples

#### toggle-disabled.vue
```vue
<script setup lang="ts">
import { IxToggle } from '@siemens/ix-vue';
</script>

<template>
  <IxToggle disabled />
</template>
```

## Checked

### React Examples

#### toggle-checked.tsx
```tsx
import { IxToggle } from '@siemens/ix-react';

export default () => {
  return <IxToggle checked />;
};
```

### Angular Examples

#### toggle-checked.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-toggle checked></ix-toggle> `,
})
export default class ToggleChecked {}
```

### Angular Standalone Examples

#### toggle-checked.ts
```ts
import { Component } from '@angular/core';
import {
  IxToggle,
  IxBooleanValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxToggle, IxBooleanValueAccessorDirective],
  template: ` <ix-toggle checked></ix-toggle> `,
})
export default class ToggleChecked {}
```

### Vue Examples

#### toggle-checked.vue
```vue
<script setup lang="ts">
import { IxToggle } from '@siemens/ix-vue';
</script>

<template>
  <IxToggle checked />
</template>
```

## Indeterminate

### React Examples

#### toggle-indeterminate.tsx
```tsx
import { IxToggle } from '@siemens/ix-react';

export default () => {
  return <IxToggle indeterminate />;
};
```

### Angular Examples

#### toggle-indeterminate.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-toggle indeterminate></ix-toggle> `,
})
export default class ToggleIndeterminate {}
```

### Angular Standalone Examples

#### toggle-indeterminate.ts
```ts
import { Component } from '@angular/core';
import {
  IxToggle,
  IxBooleanValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxToggle, IxBooleanValueAccessorDirective],
  template: ` <ix-toggle indeterminate></ix-toggle> `,
})
export default class ToggleIndeterminate {}
```

### Vue Examples

#### toggle-indeterminate.vue
```vue
<script setup lang="ts">
import { IxToggle } from '@siemens/ix-vue';
</script>

<template>
  <IxToggle indeterminate />
</template>
```

## API for ix-toggle

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| checked | Whether the slide-toggle element is checked or not. | checked | boolean | false |
| disabled | Whether the slide-toggle element is disabled or not. | disabled | boolean | false |
| hideText | Hide \`on\` and \`off\` text | hide-text | boolean | false |
| indeterminate | If true the control is in indeterminate state | indeterminate | boolean | false |
| name | Name of the checkbox component | name | string \| undefined |  |
| required | Required state of the checkbox component. If true, checkbox needs to be checked to be valid | required | boolean | false |
| textIndeterminate | Text for indeterminate state | text-indeterminate | string | 'Mixed' |
| textOff | Text for off state | text-off | string | 'Off' |
| textOn | Text for on state | text-on | string | 'On' |
| value | Value of the checkbox component | value | string | 'on' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| checkedChange | An event will be dispatched each time the slide-toggle changes its value. | checkedChange | boolean |
| ixBlur | An event will be dispatched each time the toggle is blurred. | ixBlur | void |
