# Developing with icons

> The integration of icons into the code varies by framework. To accommodate the diverse range of potential use cases, external icons can be integrated in addition to the existing icon set.

# Usage

The package @siemens/ix-icons offers a large set of icons. It also comes with the ix-icon component that displays them in your application. Additionally custom SVG icons (that are not part of the library) can be used.

Since V3.0.0, all available iX icons are no longer loaded automatically. Only the icons actually used in the application will be part of the bundle to significantly reduce the overall bundle size. As a result, explicitly import icons for correct rendering.

## Icon usage in supported frameworks

### Angular

Provide all iX icons as asset folder via `angular.json`.

```json
"assets": [
"src/favicon.ico",
"src/assets",
{
"glob": "**/*.svg",
"input": "node_modules/@siemens/ix-icons/svg",
"output": "./svg"
}
],
```

To avoid unwanted console warnings, we recommend you also configure the domain of the asset path using the `meta`-tag:

```html
<html>
  <head>
    <!-- Some other tags -->
    <meta name="ix-icons:path" content="/svg" />
  </head>
  <body></body>
</html>
```

Or using the `setAssetPath`-function:

```ts
import { setAssetPath } from '@siemens/ix-icons/components';

setAssetPath('/svg');
```

It is also possible to import individual icons without an asset folder via [addIcons](#reference-icons-by-name).

Then you can reference iX icons by name anywhere in your application.
Valid icon sizes are 12, 16, 20, 24, 32 and 48. The default size is 20.

```html
<ix-icon name="star"></ix-icon>
<ix-icon name="star" size="24"></ix-icon>
<ix-icon name="star" size="32"></ix-icon>
```

### Web components

```html
<ix-icon name="star"></ix-icon>
<ix-icon name="star" size="24"></ix-icon>
<ix-icon name="star" size="32"></ix-icon>
```

### React

```tsx
import { iconStar } from '@siemens/ix-icons/icons';

<IxIcon name={iconStar}></IxIcon>
<IxIcon name={iconStar} size="24"></IxIcon>
<IxIcon name={iconStar} size="32"></IxIcon>
```

### Vue

```tsx
import { iconStar } from '@siemens/ix-icons/icons';

<IxIcon :name="iconStar"></IxIcon>
<IxIcon :name="iconStar" size="24"></IxIcon>
<IxIcon :name="iconStar" size="32"></IxIcon>
```

## Reference icons by name

Although referencing icons by name (e.g. `<ix-icon name="star"><ix-icon>`) is still also possible, simply import all icons you want to display in your application via the `addIcons` method.

### React Examples

#### add-icons.tsx
```tsx
import { IxIcon } from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import { iconStar, iconStarFilled } from '@siemens/ix-icons/icons';

import './icon-toggle-button-secondary.scoped.css';

export default () => {
  addIcons({ iconStar, iconStarFilled });

  return (
    <>
      <IxIcon name={iconStar}></IxIcon>
      <IxIcon name="star"></IxIcon>

      <IxIcon name={iconStarFilled}></IxIcon>
      <IxIcon name="starFilled"></IxIcon>
      <IxIcon name="star-filled"></IxIcon>
    </>
  );
};
```

### Angular Examples

#### add-icons.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import { iconStar, iconStarFilled } from '@siemens/ix-icons/icons';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './add-icons.html',
  styleUrls: ['./add-icons.css'],
})
export default class AddIcons {
  readonly icons = { iconStar, iconStarFilled };

  constructor() {
    addIcons({ iconStar, iconStarFilled });
  }
}
```

#### add-icons.html
```html
<ix-icon [name]="icons.iconStar"></ix-icon>
<ix-icon name="star"></ix-icon>

<ix-icon [name]="icons.iconStarFilled"></ix-icon>
<ix-icon name="starFilled"></ix-icon>
<ix-icon name="star-filled"></ix-icon>
```

#### add-icons.css
```css
body {
  display: flex;
  flex-direction: column;
}

div,
ix-icon {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### add-icons.ts
```ts
import { Component } from '@angular/core';
import { IxIcon } from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import { iconStar, iconStarFilled } from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  templateUrl: './add-icons.html',
  styleUrls: ['./add-icons.css'],
  imports: [IxIcon],
})
export default class AddIcons {
  readonly icons = { iconStar, iconStarFilled };

  constructor() {
    addIcons({ iconStar, iconStarFilled });
  }
}
```

#### add-icons.html
```html
<ix-icon [name]="icons.iconStar"></ix-icon>
<ix-icon name="star"></ix-icon>

<ix-icon [name]="icons.iconStarFilled"></ix-icon>
<ix-icon name="starFilled"></ix-icon>
<ix-icon name="star-filled"></ix-icon>
```

#### add-icons.css
```css
body {
  display: flex;
  flex-direction: column;
}

div,
ix-icon {
  margin: 0.25rem;
}
```

### Vue Examples

#### add-icons.vue
```vue
<script setup lang="ts">
import { IxIcon } from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import { iconStar, iconStarFilled } from '@siemens/ix-icons/icons';
addIcons({ iconStar, iconStarFilled });
</script>

<template>
  <IxIcon :name="iconStar"></IxIcon>
  <IxIcon :name="iconStar"></IxIcon>

  <IxIcon :name="iconStarFilled"></IxIcon>
  <IxIcon :name="iconStarFilled"></IxIcon>
  <IxIcon :name="iconStarFilled"></IxIcon>
</template>
```

## Integrate external icons

### Technical requirements

- SVG is the supported icon format.
- Each icon must be a single SVG file. Sprites are not supported.
- Ensure that the SVG file has `width`, `height`, and `viewBox` attributes. The typical design size is 24x24.
- All color information within the SVG will be ignored.
- Remove any title elements (`<title> ... </title>`) to prevent unintentional tooltips from appearing on the icon.
- For visual and formal requirements, see the ["Designing new icons"](./design-new-icons.md) guidelines.

```tsx
<ix-icon name="./assets/my-icon.svg"></ix-icon>
<ix-icon name="https://my.example.cdn.address/assets/my-icon.svg"></ix-icon>
```

### SVG structure may change

The SVG icons are exported from design tools such as Figma, Sketch, and Adobe Illustrator. These tools may change the SVG markup when an icon is updated, even if its appearance remains unchanged. Do not rely on the internal SVG structure, element order, generated IDs, attributes, or path data; use the icon as a visual resource only.
