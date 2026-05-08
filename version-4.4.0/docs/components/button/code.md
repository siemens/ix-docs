# Button - Code

> Code examples and API documentation for the ix-button

# Button - Code

## Primary

### React Examples

#### buttons.tsx
```tsx
import './buttons.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton>Button</IxButton>
      <IxButton disabled>
        Button
      </IxButton>
    </>
  );
};
```

#### buttons.scoped.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### buttons.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button>Button</ix-button>
    <ix-button disabled>Button</ix-button>
  `,
  styleUrls: ['./buttons.css'],
})
export default class Buttons {}
```

#### buttons.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### buttons.ts
```ts
import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button>Button</ix-button>
    <ix-button disabled>Button</ix-button>
  `,
  styleUrls: ['./buttons.css'],
})
export default class Buttons {}
```

#### buttons.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### buttons.vue
```vue
<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./buttons.css"></style>

<template>
  <IxButton> Button </IxButton>
  <IxButton disabled> Button </IxButton>
</template>
```

#### buttons.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Secondary

### React Examples

#### button-secondary.tsx
```tsx
import './button-secondary.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton variant="secondary">
        Button
      </IxButton>
      <IxButton variant="secondary" disabled>
        Button
      </IxButton>
    </>
  );
};
```

#### button-secondary.scoped.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### button-secondary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-button variant="secondary"> Button </ix-button>
    <ix-button variant="secondary" disabled> Button </ix-button>`,
  styleUrls: ['./button-secondary.css'],
})
export default class Buttons {}
```

#### button-secondary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### button-secondary.ts
```ts
import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: ` <ix-button variant="secondary"> Button </ix-button>
    <ix-button variant="secondary" disabled> Button </ix-button>`,
  styleUrls: ['./button-secondary.css'],
})
export default class Buttons {}
```

#### button-secondary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### button-secondary.vue
```vue
<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-secondary.css"></style>

<template>
  <IxButton variant="secondary"> Button </IxButton>
  <IxButton variant="secondary" disabled> Button </IxButton>
</template>
```

#### button-secondary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Tertiary

### React Examples

#### button-tertiary.tsx
```tsx
import './button-tertiary.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton variant="tertiary">
        Button
      </IxButton>
      <IxButton variant="tertiary" disabled>
        Button
      </IxButton>
    </>
  );
};
```

#### button-tertiary.scoped.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### button-tertiary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button variant="tertiary"> Button </ix-button>
    <ix-button variant="tertiary" disabled> Button </ix-button>
  `,
  styleUrls: ['./button-tertiary.css'],
})
export default class Buttons {}
```

#### button-tertiary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### button-tertiary.ts
```ts
import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button variant="tertiary"> Button </ix-button>
    <ix-button variant="tertiary" disabled> Button </ix-button>
  `,
  styleUrls: ['./button-tertiary.css'],
})
export default class Buttons {}
```

#### button-tertiary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### button-tertiary.vue
```vue
<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-tertiary.css"></style>

<template>
  <IxButton variant="tertiary"> Button </IxButton>
  <IxButton variant="tertiary" disabled> Button </IxButton>
</template>
```

#### button-tertiary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

## Subtle

### React Examples

#### button-subtle-primary.tsx
```tsx
import './button-subtle-primary.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton variant="subtle-primary">Button</IxButton>
      <IxButton disabled variant="subtle-primary">
        Button
      </IxButton>
    </>
  );
};
```

#### button-subtle-primary.scoped.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### button-subtle-primary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button variant="subtle-primary"> Button </ix-button>
    <ix-button disabled variant="subtle-primary"> Button </ix-button>
  `,
  styleUrls: ['./button-subtle-primary.css'],
})
export default class Buttons {}
```

#### button-subtle-primary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### button-subtle-primary.ts
```ts
import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button variant="subtle-primary"> Button </ix-button>
    <ix-button disabled variant="subtle-primary"> Button </ix-button>
  `,
  styleUrls: ['./button-subtle-primary.css'],
})
export default class Buttons {}
```

#### button-subtle-primary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### button-subtle-primary.vue
```vue
<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-subtle-primary.css"></style>

<template>
  <IxButton variant="subtle-primary"> Button </IxButton>
  <IxButton disabled variant="subtle-primary"> Button </IxButton>
</template>
```

#### button-subtle-primary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Subtle secondary

### React Examples

#### button-subtle-secondary.tsx
```tsx
import './button-subtle-secondary.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton variant="subtle-secondary">
        Button
      </IxButton>
      <IxButton disabled variant="subtle-secondary">
        Button
      </IxButton>
    </>
  );
};
```

#### button-subtle-secondary.scoped.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### button-subtle-secondary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button variant="subtle-secondary"> Button </ix-button>
    <ix-button disabled variant="subtle-secondary"> Button </ix-button>
  `,
  styleUrls: ['./button-subtle-secondary.css'],
})
export default class Buttons {}
```

#### button-subtle-secondary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### button-subtle-secondary.ts
```ts
import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button variant="subtle-secondary"> Button </ix-button>
    <ix-button disabled variant="subtle-secondary"> Button </ix-button>
  `,
  styleUrls: ['./button-subtle-secondary.css'],
})
export default class Buttons {}
```

#### button-subtle-secondary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### button-subtle-secondary.vue
```vue
<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-subtle-secondary.css"></style>

<template>
  <IxButton variant="subtle-secondary"> Button </IxButton>
  <IxButton disabled variant="subtle-secondary"> Button </IxButton>
</template>
```

#### button-subtle-secondary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Subtle tertiary

### React Examples

#### button-subtle-tertiary.tsx
```tsx
import './button-subtle-tertiary.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton variant="subtle-tertiary">
        Button
      </IxButton>
      <IxButton disabled variant="subtle-tertiary">
        Button
      </IxButton>
    </>
  );
};
```

#### button-subtle-tertiary.scoped.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### button-subtle-tertiary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: buttonSubtleTertiary(),
  styleUrls: ['./button-subtle-tertiary.css'],
})
export default class Buttons {}

function buttonSubtleTertiary(): string | undefined {
  return `
      <ix-button variant="subtle-tertiary">
        Button
      </ix-button>
      <ix-button disabled variant="subtle-tertiary">
        Button
      </ix-button>
  `;
}
```

#### button-subtle-tertiary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### button-subtle-tertiary.ts
```ts
import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: buttonSubtleTertiary(),
  styleUrls: ['./button-subtle-tertiary.css'],
})
export default class Buttons {}

function buttonSubtleTertiary(): string | undefined {
  return `
      <ix-button variant="subtle-tertiary">
        Button
      </ix-button>
      <ix-button disabled variant="subtle-tertiary">
        Button
      </ix-button>
  `;
}
```

#### button-subtle-tertiary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### button-subtle-tertiary.vue
```vue
<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-subtle-tertiary.css"></style>

<template>
  <IxButton variant="subtle-tertiary"> Button </IxButton>
  <IxButton disabled variant="subtle-tertiary"> Button </IxButton>
</template>
```

#### button-subtle-tertiary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

## Danger

Example is supported since version 2.3.0

### React Examples

#### button-danger-primary.tsx
```tsx
import './button-danger-primary.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton variant="danger-primary">Button</IxButton>
      <IxButton disabled variant="danger-primary">
        Button
      </IxButton>
    </>
  );
};
```

#### button-danger-primary.scoped.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### button-danger-primary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './button-danger-primary.html',
  styleUrls: ['./button-danger-primary.css'],
})
export default class Buttons {}
```

#### button-danger-primary.html
```html
<ix-button variant="danger-primary"> Button </ix-button>
<ix-button disabled variant="danger-primary"> Button </ix-button>
```

#### button-danger-primary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### button-danger-primary.ts
```ts
import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  templateUrl: './button-danger-primary.html',
  styleUrls: ['./button-danger-primary.css'],
})
export default class Buttons {}
```

#### button-danger-primary.html
```html
<ix-button variant="danger-primary"> Button </ix-button>
<ix-button disabled variant="danger-primary"> Button </ix-button>
```

#### button-danger-primary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### button-danger-primary.vue
```vue
<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-danger-primary.css"></style>

<template>
  <IxButton variant="danger-primary"> Button </IxButton>
  <IxButton disabled variant="danger-primary"> Button </IxButton>
</template>
```

#### button-danger-primary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Danger secondary

Example is supported since version 2.3.0

### React Examples

#### button-danger-secondary.tsx
```tsx
import './button-danger-secondary.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton variant="danger-secondary">
        Button
      </IxButton>
      <IxButton disabled variant="danger-secondary">
        Button
      </IxButton>
    </>
  );
};
```

#### button-danger-secondary.scoped.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### button-danger-secondary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './button-danger-secondary.html',
  styleUrls: ['./button-danger-secondary.css'],
})
export default class Buttons {}
```

#### button-danger-secondary.html
```html
<ix-button variant="danger-secondary"> Button </ix-button>
<ix-button disabled variant="danger-secondary"> Button </ix-button>
```

#### button-danger-secondary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### button-danger-secondary.ts
```ts
import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  templateUrl: './button-danger-secondary.html',
  styleUrls: ['./button-danger-secondary.css'],
})
export default class Buttons {}
```

#### button-danger-secondary.html
```html
<ix-button variant="danger-secondary"> Button </ix-button>
<ix-button disabled variant="danger-secondary"> Button </ix-button>
```

#### button-danger-secondary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### button-danger-secondary.vue
```vue
<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-danger-secondary.css"></style>

<template>
  <IxButton variant="danger-secondary"> Button </IxButton>
  <IxButton disabled variant="danger-secondary"> Button </IxButton>
</template>
```

#### button-danger-secondary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Danger tertiary

Example is supported since version 2.3.0

### React Examples

#### button-danger-tertiary.tsx
```tsx
import './button-danger-tertiary.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton variant="danger-tertiary">
        Button
      </IxButton>
      <IxButton disabled variant="danger-tertiary">
        Button
      </IxButton>
    </>
  );
};
```

#### button-danger-tertiary.scoped.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### button-danger-tertiary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './button-danger-tertiary.html',
})
export default class Buttons {}
```

#### button-danger-tertiary.html
```html
<ix-button variant="danger-tertiary"> Button </ix-button>
<ix-button disabled variant="danger-tertiary"> Button </ix-button>
```

#### button-danger-tertiary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### button-danger-tertiary.ts
```ts
import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  templateUrl: './button-danger-tertiary.html',
})
export default class Buttons {}
```

#### button-danger-tertiary.html
```html
<ix-button variant="danger-tertiary"> Button </ix-button>
<ix-button disabled variant="danger-tertiary"> Button </ix-button>
```

#### button-danger-tertiary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### button-danger-tertiary.vue
```vue
<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-danger-tertiary.css"></style>

<template>
  <IxButton variant="danger-tertiary"> Button </IxButton>
  <IxButton disabled variant="danger-tertiary"> Button </IxButton>
</template>
```

#### button-danger-tertiary.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

## Button group

### React Examples

#### button-group.tsx
```tsx
import { IxButton } from '@siemens/ix-react';

export default () => (
  <div className="ix-button-group">
    <IxButton variant="subtle-secondary">Button 1</IxButton>
    <IxButton> Button 2 </IxButton>
    <IxButton variant="subtle-secondary">Button 3</IxButton>
    <IxButton variant="subtle-secondary">Button 4</IxButton>
  </div>
);
```

### Angular Examples

#### button-group.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="ix-button-group">
      <ix-button variant="subtle-secondary"> Button 1 </ix-button>
      <ix-button> Button 2 </ix-button>
      <ix-button variant="subtle-secondary"> Button 3 </ix-button>
      <ix-button variant="subtle-secondary"> Button 4 </ix-button>
    </div>
  `,
})
export default class ButtonGroup {}
```

### Angular Standalone Examples

#### button-group.ts
```ts
import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <div class="ix-button-group">
      <ix-button variant="subtle-secondary"> Button 1 </ix-button>
      <ix-button> Button 2 </ix-button>
      <ix-button variant="subtle-secondary"> Button 3 </ix-button>
      <ix-button variant="subtle-secondary"> Button 4 </ix-button>
    </div>
  `,
})
export default class ButtonGroup {}
```

### Vue Examples

#### button-group.vue
```vue
<script setup lang="ts">
import { IxButton } from '@siemens/ix-vue';
</script>

<template>
  <div class="ix-button-group">
    <IxButton variant="subtle-secondary"> Button 1 </IxButton>
    <IxButton> Button 2 </IxButton>
    <IxButton variant="subtle-secondary"> Button 3 </IxButton>
    <IxButton variant="subtle-secondary"> Button 4 </IxButton>
  </div>
</template>
```

## Button with text and icon

### React Examples

#### button-text-icon.tsx
```tsx
import { iconBulb, iconStar } from '@siemens/ix-icons/icons';
import './button-text-icon.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton icon={iconStar}>Button</IxButton>
      <IxButton icon={iconStar} iconRight={iconBulb}>
        Button
      </IxButton>
      <IxButton iconRight={iconBulb}>Button</IxButton>
      <IxButton variant="subtle-primary" icon={iconStar}>
        Button
      </IxButton>
      <IxButton variant="subtle-primary" icon={iconStar}>
        Button
      </IxButton>
      <IxButton variant="tertiary" icon={iconStar}>
        Button
      </IxButton>
    </>
  );
};
```

#### button-text-icon.scoped.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### button-text-icon.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button icon="star">Button</ix-button>
    <ix-button icon="star" icon-right="bulb">Button</ix-button>
    <ix-button icon-right="bulb">Button</ix-button>
    <ix-button variant="subtle-primary" icon="star">Button</ix-button>
    <ix-button variant="subtle-primary" icon="star">Button</ix-button>
    <ix-button variant="tertiary" icon="star">Button</ix-button>
  `,
  styleUrls: ['./button-text-icon.css'],
})
export default class Buttons {}
```

#### button-text-icon.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### button-text-icon.ts
```ts
import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button icon="star"> Button </ix-button>
    <ix-button variant="subtle-primary" icon="star"> Button </ix-button>
    <ix-button variant="subtle-primary" icon="star"> Button </ix-button>
    <ix-button variant="tertiary" icon="star"> Button </ix-button>
  `,
  styleUrls: ['./button-text-icon.css'],
})
export default class Buttons {}
```

#### button-text-icon.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### button-text-icon.vue
```vue
<script setup lang="ts">
import { iconBulb, iconStar } from '@siemens/ix-icons/icons';
import { IxButton } from '@siemens/ix-vue';
</script>

<style scoped src="./button-text-icon.css"></style>

<template>
  <IxButton :icon="iconStar">Button</IxButton>
  <IxButton :icon="iconStar" :iconRight="iconBulb">Button</IxButton>
  <IxButton :iconRight="iconBulb">Button</IxButton>
  <IxButton variant="subtle-primary" :icon="iconStar">Button</IxButton>
  <IxButton variant="subtle-primary" :icon="iconStar">Button</IxButton>
  <IxButton variant="tertiary" :icon="iconStar">Button</IxButton>
</template>
```

#### button-text-icon.css
```css
body {
  display: flex;
}

ix-button {
  margin: 0.25rem;
}
```

## Loading button

### React Examples

#### button-loading.tsx
```tsx
import { iconStar } from '@siemens/ix-icons/icons';
import './button-loading.scoped.css';

import { IxButton, IxIconButton } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  return (
    <>
      <IxButton
        onClick={() => {
          setToggle(true);
          setTimeout(() => {
            setToggle(false);
          }, 2500);
        }}
        loading={toggle}
        outline
      >
        Button
      </IxButton>

      <IxButton
        onClick={() => {
          setToggle2(true);
          setTimeout(() => {
            setToggle2(false);
          }, 2500);
        }}
        loading={toggle2}
        outline
        icon={iconStar}
      >
        Button
      </IxButton>

      <IxButton
        onClick={() => {
          setToggle3(true);
          setTimeout(() => {
            setToggle3(false);
          }, 2500);
        }}
        loading={toggle3}
        outline
        icon={iconStar}
      ></IxButton>

      <IxIconButton
        onClick={() => {
          setToggle(true);
          setTimeout(() => {
            setToggle(false);
          }, 2500);
        }}
        loading={toggle}
        outline
        icon={iconStar}
      ></IxIconButton>
      <IxButton variant="subtle-primary" loading>
        Button
      </IxButton>
      <IxIconButton variant="subtle-primary" loading></IxIconButton>
    </>
  );
};
```

#### button-loading.scoped.css
```css
body {
  display: flex;
}

ix-button,
ix-icon-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### button-loading.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: './button-loading.html',
  styleUrls: ['./button-loading.css'],
})
export default class ButtonLoading {
  loading = false;
  loading2 = false;
  loading3 = false;

  toggle() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }

  toggle2() {
    this.loading2 = true;
    setTimeout(() => {
      this.loading2 = false;
    }, 2500);
  }

  toggle3() {
    this.loading3 = true;
    setTimeout(() => {
      this.loading3 = false;
    }, 2500);
  }
}
```

#### button-loading.html
```html
<ix-button variant="subtle-primary" (click)="toggle()" [loading]="loading">
  Button
</ix-button>

<ix-button variant="subtle-primary" (click)="toggle2()" [loading]="loading2" icon="star">
  Button
</ix-button>

<ix-icon-button variant="subtle-primary" (click)="toggle3()" [loading]="loading3" icon="star">
</ix-icon-button>

<ix-button variant="subtle-primary" loading> Button </ix-button>

<ix-icon-button variant="subtle-primary" loading icon="star"></ix-icon-button>
```

#### button-loading.css
```css
body {
  display: flex;
}

ix-button,
ix-icon-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### button-loading.ts
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: './button-loading.html',
  styleUrls: ['./button-loading.css'],
})
export default class ButtonLoading {
  loading = false;
  loading2 = false;
  loading3 = false;

  toggle() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }

  toggle2() {
    this.loading2 = true;
    setTimeout(() => {
      this.loading2 = false;
    }, 2500);
  }

  toggle3() {
    this.loading3 = true;
    setTimeout(() => {
      this.loading3 = false;
    }, 2500);
  }
}
```

#### button-loading.html
```html
<ix-button variant="subtle-primary" (click)="toggle()" [loading]="loading"> Button </ix-button>

<ix-button variant="subtle-primary" (click)="toggle2()" [loading]="loading2" icon="star">
  Button
</ix-button>

<ix-icon-button variant="subtle-primary" (click)="toggle3()" [loading]="loading3" icon="star">
</ix-icon-button>

<ix-button variant="subtle-primary" loading> Button </ix-button>

<ix-icon-button variant="subtle-primary" loading icon="star"></ix-icon-button>
```

#### button-loading.css
```css
body {
  display: flex;
}

ix-button,
ix-icon-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### button-loading.vue
```vue
<script setup lang="ts">
import { iconStar } from '@siemens/ix-icons/icons';
import { IxButton, IxIconButton } from '@siemens/ix-vue';
import { ref } from 'vue';

let toggle1 = ref(false);
let toggle2 = ref(false);
let toggle3 = ref(false);

function load(value: string) {
  if (value === '1') toggle1.value = true;
  if (value === '2') toggle2.value = true;
  if (value === '3') toggle3.value = true;

  setTimeout(() => {
    if (value === '1') toggle1.value = false;
    if (value === '2') toggle2.value = false;
    if (value === '3') toggle3.value = false;
  }, 2500);
}
</script>

<style scoped src="./button-loading.css"></style>

<template>
  <div>
    <IxButton variant="subtle-primary" :loading="toggle1" @click="load('1')"> Button </IxButton>
    <IxButton variant="subtle-primary" :loading="toggle2" @click="load('2')" :icon="iconStar">
      Button
    </IxButton>
    <IxIconButton variant="subtle-primary" :loading="toggle3" @click="load('3')" :icon="iconStar"></IxIconButton>
    <IxButton variant="subtle-primary" loading> Button </IxButton>
    <IxIconButton variant="subtle-primary" loading></IxIconButton>
  </div>
</template>
```

#### button-loading.css
```css
body {
  display: flex;
}

ix-button,
ix-icon-button {
  margin: 0.25rem;
}
```

## API for ix-button

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelButton | ARIA label for the button Will be set as aria-label on the nested HTML button element | aria-label-button | string \| undefined |  |
| disabled | Disable the button | disabled | boolean | false |
| form | Provide a form element ID to automatically submit the from if the button is pressed. Only works in combination with type="submit". | form | string \| undefined |  |
| href | URL for the button link. When provided, the button will render as an anchor tag. | href | string \| undefined |  |
| icon | Icon name | icon | string \| undefined |  |
| iconRight | Icon name for the right side of the button | icon-right | string \| undefined |  |
| loading | Loading button | loading | boolean | false |
| rel | Specifies the relationship between the current document and the linked document when href is provided. | rel | string \| undefined |  |
| target | Specifies where to open the linked document when href is provided. | target | "_blank" \| "_parent" \| "_self" \| "_top" \| undefined | '_self' |
| type | Type of the button | type | "button" \| "submit" | 'button' |
| variant | Button variant | variant | "danger-primary" \| "danger-secondary" \| "danger-tertiary" \| "primary" \| "secondary" \| "subtle-primary" \| "subtle-secondary" \| "subtle-tertiary" \| "tertiary" | 'primary' |
