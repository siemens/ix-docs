# Progress-Indicator - Code

> Code examples and API documentation for the ix-progress-indicator

# Progress-Indicator - Code

## Linear

### React Examples

#### progress-indicator.tsx
```tsx
import { IxProgressIndicator } from '@siemens/ix-react';
import './progress-indicator.scoped.css';

export default () => {
  return (
    <IxProgressIndicator
      label="Download"
      value={75}
      helperText="This is a help text for the progress indicator"
    >
      75%
    </IxProgressIndicator>
  );
};
```

#### progress-indicator.scoped.css
```css
.example-header {
  margin: 0.7rem 0;
}
```

### Angular Examples

#### progress-indicator.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './progress-indicator.html',
})
export default class ProgressIndicator {}
```

#### progress-indicator.html
```html
<ix-progress-indicator
  label="Download"
  value="75"
  helperText="This is a help text for the progress indicator"
>
  75%</ix-progress-indicator
>
```

#### progress-indicator.css
```css
.example-header {
  margin: 0.7rem 0;
}
```

### Angular Standalone Examples

#### progress-indicator.ts
```ts
import { Component } from '@angular/core';
import { IxProgressIndicator } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: './progress-indicator.html',
  styleUrl: './progress-indicator.css',
  imports: [IxProgressIndicator],
})
export default class ProgressIndicator {}
```

#### progress-indicator.html
```html
<ix-progress-indicator
  label="Download"
  value="75"
  helperText="This is a help text for the progress indicator"
>
  75%</ix-progress-indicator
>
```

#### progress-indicator.css
```css
.example-header {
  margin: 0.7rem 0;
}
```

### Vue Examples

#### progress-indicator.vue
```vue
<script setup lang="ts">
import { IxProgressIndicator } from '@siemens/ix-vue';
</script>

<style scoped src="./progress-indicator.css"></style>

<template>
  <IxProgressIndicator
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
  >
    75%
  </IxProgressIndicator>
</template>
```

#### progress-indicator.css
```css
.example-header {
  margin: 0.7rem 0;
}
```

## Circular

### React Examples

#### progress-indicator-circular.tsx
```tsx
import { IxProgressIndicator } from '@siemens/ix-react';
import './progress-indicator.scoped.css';

export default () => {
  return (
    <IxProgressIndicator
      type="circular"
      label="Download"
      value={75}
      helperText="This is a help text for the progress indicator"
    >
      75%
    </IxProgressIndicator>
  );
};
```

### Angular Examples

#### progress-indicator-circular.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './progress-indicator-circular.html',
})
export default class ProgressIndicatorCircular {}
```

#### progress-indicator-circular.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Popover news example</title>
    <link rel="stylesheet" href="./progress-indicator.css" />
  </head>
  <body>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
    >
      75%</ix-progress-indicator
    >
    <script type="module" src="./init.js"></script>
  </body>
</html>
```

### Angular Standalone Examples

#### progress-indicator-circular.ts
```ts
import { Component } from '@angular/core';
import { IxProgressIndicator } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: './progress-indicator-circular.html',
  styleUrl: './progress-indicator.css',
  imports: [IxProgressIndicator],
})
export default class ProgressIndicatorCircular {}
```

#### progress-indicator-circular.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Popover news example</title>
    <link rel="stylesheet" href="./progress-indicator.css" />
  </head>
  <body>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
    >
      75%</ix-progress-indicator
    >
    <script type="module" src="./init.js"></script>
  </body>
</html>
```

### Vue Examples

#### progress-indicator-circular.vue
```vue
<script setup lang="ts">
import { IxProgressIndicator } from '@siemens/ix-vue';
</script>

<style scoped src="./progress-indicator.css"></style>

<template>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
  >
    75%
  </IxProgressIndicator>
</template>
```

## Linear status

### React Examples

#### progress-indicator-linear-status.tsx
```tsx
import { IxProgressIndicator } from '@siemens/ix-react';
import './progress-indicator.scoped.css';

export default () => {
  return (
    <>
      <h2 className="example-header">Status - Base</h2>
      <IxProgressIndicator
        type="linear"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Success</h2>
      <IxProgressIndicator
        type="linear"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        status="success"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Error</h2>
      <IxProgressIndicator
        type="linear"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        status="error"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Information</h2>
      <IxProgressIndicator
        type="linear"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        status="information"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Warning</h2>
      <IxProgressIndicator
        type="linear"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        status="warning"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Paused</h2>
      <IxProgressIndicator
        type="linear"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        status="paused"
      >
        75%
      </IxProgressIndicator>
    </>
  );
};
```

### Angular Examples

#### progress-indicator-linear-status.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './progress-indicator-linear-status.html',
})
export default class ProgressIndicatorLinearStatus {}
```

#### progress-indicator-linear-status.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Popover news example</title>
    <link rel="stylesheet" href="./progress-indicator.css" />
  </head>
  <body>
    <h2 class="example-header">Status - Base</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Success</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="success"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Error</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="error"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Information</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="information"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Warning</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="warning"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Paused</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="paused"
    >
      75%</ix-progress-indicator
    >
    <script type="module" src="./init.js"></script>
  </body>
</html>
```

### Angular Standalone Examples

#### progress-indicator-linear-status.ts
```ts
import { Component } from '@angular/core';
import { IxProgressIndicator } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: './progress-indicator-linear-status.html',
  styleUrl: './progress-indicator.css',
  imports: [IxProgressIndicator],
})
export default class ProgressIndicatorLinearStatus {}
```

#### progress-indicator-linear-status.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Popover news example</title>
    <link rel="stylesheet" href="./progress-indicator.css" />
  </head>
  <body>
    <h2 class="example-header">Status - Base</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Success</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="success"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Error</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="error"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Information</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="information"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Warning</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="warning"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Paused</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="paused"
    >
      75%</ix-progress-indicator
    >
    <script type="module" src="./init.js"></script>
  </body>
</html>
```

### Vue Examples

#### progress-indicator-linear-status.vue
```vue
<script setup lang="ts">
import { IxProgressIndicator } from '@siemens/ix-vue';
</script>

<style scoped src="./progress-indicator.css"></style>

<template>
  <h2 class="example-header">Status - Base</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Success</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="success"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Error</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="error"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Information</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="information"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Warning</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="warning"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Paused</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="paused"
  >
    75%
  </IxProgressIndicator>
</template>
```

## Linear sizes

### React Examples

#### progress-indicator-linear-sizes.tsx
```tsx
import { IxProgressIndicator } from '@siemens/ix-react';
import './progress-indicator.scoped.css';

export default () => {
  return (
    <>
      <h2 className="example-header">Size - XS</h2>
      <IxProgressIndicator
        type="linear"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        size="xs"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Size - SM</h2>
      <IxProgressIndicator
        type="linear"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        size="sm"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Size - MD</h2>
      <IxProgressIndicator
        type="linear"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        size="md"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Size - LG</h2>
      <IxProgressIndicator
        type="linear"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        size="lg"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Size - XL</h2>
      <IxProgressIndicator
        type="linear"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        size="xl"
      >
        75%
      </IxProgressIndicator>
    </>
  );
};
```

### Angular Examples

#### progress-indicator-linear-sizes.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './progress-indicator-linear-sizes.html',
})
export default class ProgressIndicatorLinearSizes {}
```

#### progress-indicator-linear-sizes.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Popover news example</title>
    <link rel="stylesheet" href="./progress-indicator.css" />
  </head>
  <body>
    <h2 class="example-header">Size - XS</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="xs"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - SM</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="sm"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - MD</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="md"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - LG</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="lg"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - XL</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="xl"
    >
      75%</ix-progress-indicator
    >
    <script type="module" src="./init.js"></script>
  </body>
</html>
```

### Angular Standalone Examples

#### progress-indicator-linear-sizes.ts
```ts
import { Component } from '@angular/core';
import { IxProgressIndicator } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: './progress-indicator-linear-sizes.html',
  styleUrl: './progress-indicator.css',
  imports: [IxProgressIndicator],
})
export default class ProgressIndicatorLinearSizes {}
```

#### progress-indicator-linear-sizes.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Popover news example</title>
    <link rel="stylesheet" href="./progress-indicator.css" />
  </head>
  <body>
    <h2 class="example-header">Size - XS</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="xs"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - SM</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="sm"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - MD</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="md"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - LG</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="lg"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - XL</h2>
    <ix-progress-indicator
      type="linear"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="xl"
    >
      75%</ix-progress-indicator
    >
    <script type="module" src="./init.js"></script>
  </body>
</html>
```

### Vue Examples

#### progress-indicator-linear-sizes.vue
```vue
<script setup lang="ts">
import { IxProgressIndicator } from '@siemens/ix-vue';
</script>

<style scoped src="./progress-indicator.css"></style>

<template>
  <h2 class="example-header">Size - XS</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="xs"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Size - SM</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="sm"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Size - MD</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="md"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Size - LG</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="lg"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Size - XL</h2>
  <IxProgressIndicator
    type="linear"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="xl"
  >
    75%
  </IxProgressIndicator>
</template>
```

## Circular status

### React Examples

#### progress-indicator-circular-status.tsx
```tsx
import { IxProgressIndicator } from '@siemens/ix-react';
import './progress-indicator.scoped.css';

export default () => {
  return (
    <>
      <h2 className="example-header">Status - Base</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Success</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        status="success"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Error</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        status="error"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Information</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        status="information"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Warning</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        status="warning"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Status - Paused</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        status="paused"
      >
        75%
      </IxProgressIndicator>
    </>
  );
};
```

### Angular Examples

#### progress-indicator-circular-status.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './progress-indicator-circular-status.html',
})
export default class ProgressIndicatorCircularStatus {}
```

#### progress-indicator-circular-status.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Popover news example</title>
    <link rel="stylesheet" href="./progress-indicator.css" />
  </head>
  <body>
    <h2 class="example-header">Status - Base</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Success</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="success"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Error</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="error"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Information</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="information"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Warning</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="warning"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Paused</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="paused"
    >
      75%</ix-progress-indicator
    >
    <script type="module" src="./init.js"></script>
  </body>
</html>
```

### Angular Standalone Examples

#### progress-indicator-circular-status.ts
```ts
import { Component } from '@angular/core';
import { IxProgressIndicator } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: './progress-indicator-circular-status.html',
  styleUrl: './progress-indicator.css',
  imports: [IxProgressIndicator],
})
export default class ProgressIndicatorCircularStatus {}
```

#### progress-indicator-circular-status.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Popover news example</title>
    <link rel="stylesheet" href="./progress-indicator.css" />
  </head>
  <body>
    <h2 class="example-header">Status - Base</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Success</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="success"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Error</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="error"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Information</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="information"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Warning</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="warning"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Status - Paused</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      status="paused"
    >
      75%</ix-progress-indicator
    >
    <script type="module" src="./init.js"></script>
  </body>
</html>
```

### Vue Examples

#### progress-indicator-circular-status.vue
```vue
<script setup lang="ts">
import { IxProgressIndicator } from '@siemens/ix-vue';
</script>

<style scoped src="./progress-indicator.css"></style>

<template>
  <h2 class="example-header">Status - Base</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Success</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="success"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Error</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="error"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Information</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="information"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Warning</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="warning"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Status - Paused</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    status="paused"
  >
    75%
  </IxProgressIndicator>
</template>
```

## Circular sizes

### React Examples

#### progress-indicator-circular-sizes.tsx
```tsx
import { IxProgressIndicator } from '@siemens/ix-react';
import './progress-indicator.scoped.css';

export default () => {
  return (
    <>
      <h2 className="example-header">Size - XS</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        size="xs"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Size - SM</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        size="sm"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Size - MD</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        size="md"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Size - LG</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        size="lg"
      >
        75%
      </IxProgressIndicator>
      <h2 className="example-header">Size - XL</h2>
      <IxProgressIndicator
        type="circular"
        label="Download"
        value={75}
        helperText="This is a help text for the progress indicator"
        size="xl"
      >
        75%
      </IxProgressIndicator>
    </>
  );
};
```

### Angular Examples

#### progress-indicator-circular-sizes.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './progress-indicator-circular-sizes.html',
})
export default class ProgressIndicatorCircularSizes {}
```

#### progress-indicator-circular-sizes.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Popover news example</title>
    <link rel="stylesheet" href="./progress-indicator.css" />
  </head>
  <body>
    <h2 class="example-header">Size - XS</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="xs"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - SM</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="sm"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - MD</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="md"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - LG</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="lg"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - XL</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="xl"
    >
      75%</ix-progress-indicator
    >
    <script type="module" src="./init.js"></script>
  </body>
</html>
```

### Angular Standalone Examples

#### progress-indicator-circular-sizes.ts
```ts
import { Component } from '@angular/core';
import { IxProgressIndicator } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: './progress-indicator-circular-sizes.html',
  styleUrl: './progress-indicator.css',
  imports: [IxProgressIndicator],
})
export default class ProgressIndicatorCircularSizes {}
```

#### progress-indicator-circular-sizes.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Popover news example</title>
    <link rel="stylesheet" href="./progress-indicator.css" />
  </head>
  <body>
    <h2 class="example-header">Size - XS</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="xs"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - SM</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="sm"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - MD</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="md"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - LG</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="lg"
    >
      75%</ix-progress-indicator
    >
    <h2 class="example-header">Size - XL</h2>
    <ix-progress-indicator
      type="circular"
      label="Download"
      value="75"
      helperText="This is a help text for the progress indicator"
      size="xl"
    >
      75%</ix-progress-indicator
    >
    <script type="module" src="./init.js"></script>
  </body>
</html>
```

### Vue Examples

#### progress-indicator-circular-sizes.vue
```vue
<script setup lang="ts">
import { IxProgressIndicator } from '@siemens/ix-vue';
</script>

<style scoped src="./progress-indicator.css"></style>

<template>
  <h2 class="example-header">Size - XS</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="xs"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Size - SM</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="sm"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Size - MD</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="md"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Size - LG</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="lg"
  >
    75%
  </IxProgressIndicator>
  <h2 class="example-header">Size - XL</h2>
  <IxProgressIndicator
    type="circular"
    label="Download"
    :value="75"
    helper-text="This is a help text for the progress indicator"
    size="xl"
  >
    75%
  </IxProgressIndicator>
</template>
```

## API for ix-progress-indicator

Figma main component ID: `69677:5549` (node ID of the matching main component in the IX Figma library; use it to map Figma design specs to this component).

### Properties

| Name | Description | Attribute | Type | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| helperText | { "The helper text for the progress indicator." } | helper-text | string \| undefined |  |  |
| label | { "The label for the progress indicator." } | label | string \| undefined |  |  |
| max | { "The maximum value of the progress indicator." } | max | number | 100 |  |
| min | { "The minimum value of the progress indicator." } | min | number | 0 |  |
| showTextAsTooltip | { "Show the helper text as a tooltip" } | show-text-as-tooltip | boolean | false |  |
| size | { "Size of the progress indicator.\n\nFor **circular**, diameters are:\n\n- **xs**: 16px.\n\n- **sm**: 20px.\n\n- **md**: 32px (default).\n\n- **lg**: 48px.\n\n- **xl**: 64px." } | size | "lg" \| "md" \| "sm" \| "xl" \| "xs" | 'md' | Breaking change in v6.0.0: Size scale changed (sm is now 20px) |
| status | { "Status of the progress indicator.\n\nShared status subset plus `error` and `paused`. Default is `base`." } | status | "base" \| "error" \| "information" \| "paused" \| "success" \| "warning" | 'base' | Breaking change in v6.0.0: Status values renamed (default is now base) |
| textAlignment | { "The text alignment for the helper text.\n\nCan be 'left', 'center', or 'right'." } | text-alignment | "center" \| "left" \| "right" | 'left' |  |
| type | { "The type of progress indicator to use." } | type | "circular" \| "linear" | 'linear' |  |
| value | { "The value of the progress indicator." } | value | number | 0 |  |

### Slot

| Name | Description |
| --- | --- |
| default | { "Progress indicator label." } |
| helper-text | { "Helper text displayed below the progress indicator." } |
