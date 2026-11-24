# Link button - Code

> Code examples and API documentation for the ix-link-button

# Link button - Code

## Basic

### React Examples

#### link-button.tsx
```tsx
import { IxLinkButton } from '@siemens/ix-react';

export default () => {
  return <IxLinkButton url="https://ix.siemens.io/">Link text</IxLinkButton>;
};
```

### Angular Examples

#### link-button.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-link-button url="https://ix.siemens.io/">Link text</ix-link-button>
  `,
})
export default class LinkButton {}
```

### Angular Standalone Examples

#### link-button.ts
```ts
import { Component } from '@angular/core';
import { IxLinkButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLinkButton],
  template: `
    <ix-link-button url="https://ix.siemens.io/">Link text</ix-link-button>
  `,
})
export default class LinkButton {}
```

### Vue Examples

#### link-button.vue
```vue
<script setup lang="ts">
import { IxLinkButton } from '@siemens/ix-vue';
</script>

<template>
  <IxLinkButton url="https://ix.siemens.io/">Link text</IxLinkButton>
</template>
```

## Internal link

### React Examples

#### link-button-internal.tsx
```tsx
import { IxLinkButton } from '@siemens/ix-react';

export default () => {
  return (
    <IxLinkButton url="https://ix.siemens.io/" icon="internal">
      Internal link
    </IxLinkButton>
  );
};
```

### Angular Examples

#### link-button-internal.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-link-button url="https://ix.siemens.io/" icon="internal"
      >Internal link</ix-link-button
    >
  `,
})
export default class LinkButtonInternal {}
```

### Angular Standalone Examples

#### link-button-internal.ts
```ts
import { Component } from '@angular/core';
import { IxLinkButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLinkButton],
  template: `
    <ix-link-button url="https://ix.siemens.io/" icon="internal"
      >Internal link</ix-link-button
    >
  `,
})
export default class LinkButtonInternal {}
```

### Vue Examples

#### link-button-internal.vue
```vue
<script setup lang="ts">
import { IxLinkButton } from '@siemens/ix-vue';
</script>

<template>
  <IxLinkButton url="https://ix.siemens.io/" icon="internal"
    >Internal link</IxLinkButton
  >
</template>
```

## Action

### React Examples

#### link-button-action.tsx
```tsx
import { IxLinkButton } from '@siemens/ix-react';

export default () => {
  return (
    <IxLinkButton url="https://ix.siemens.io/" icon="action">
      Action link
    </IxLinkButton>
  );
};
```

### Angular Examples

#### link-button-action.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-link-button url="https://ix.siemens.io/" icon="action"
      >Action link</ix-link-button
    >
  `,
})
export default class LinkButtonAction {}
```

### Angular Standalone Examples

#### link-button-action.ts
```ts
import { Component } from '@angular/core';
import { IxLinkButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLinkButton],
  template: `
    <ix-link-button url="https://ix.siemens.io/" icon="action"
      >Action link</ix-link-button
    >
  `,
})
export default class LinkButtonAction {}
```

### Vue Examples

#### link-button-action.vue
```vue
<script setup lang="ts">
import { IxLinkButton } from '@siemens/ix-vue';
</script>

<template>
  <IxLinkButton url="https://ix.siemens.io/" icon="action"
    >Action link</IxLinkButton
  >
</template>
```

## External link

### React Examples

#### link-button-external.tsx
```tsx
import { IxLinkButton } from '@siemens/ix-react';

export default () => {
  return (
    <IxLinkButton url="https://ix.siemens.io/" icon="external">
      External link
    </IxLinkButton>
  );
};
```

### Angular Examples

#### link-button-external.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-link-button url="https://ix.siemens.io/" icon="external"
      >External link</ix-link-button
    >
  `,
})
export default class LinkButtonExternal {}
```

### Angular Standalone Examples

#### link-button-external.ts
```ts
import { Component } from '@angular/core';
import { IxLinkButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLinkButton],
  template: `
    <ix-link-button url="https://ix.siemens.io/" icon="external"
      >External link</ix-link-button
    >
  `,
})
export default class LinkButtonExternal {}
```

### Vue Examples

#### link-button-external.vue
```vue
<script setup lang="ts">
import { IxLinkButton } from '@siemens/ix-vue';
</script>

<template>
  <IxLinkButton url="https://ix.siemens.io/" icon="external"
    >External link</IxLinkButton
  >
</template>
```

## File link

### React Examples

#### link-button-file.tsx
```tsx
import { IxLinkButton } from '@siemens/ix-react';

export default () => {
  return (
    <IxLinkButton url="https://ix.siemens.io/" icon="file">
      File link
    </IxLinkButton>
  );
};
```

### Angular Examples

#### link-button-file.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-link-button url="https://ix.siemens.io/" icon="file"
      >File link</ix-link-button
    >
  `,
})
export default class LinkButtonFile {}
```

### Angular Standalone Examples

#### link-button-file.ts
```ts
import { Component } from '@angular/core';
import { IxLinkButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLinkButton],
  template: `
    <ix-link-button url="https://ix.siemens.io/" icon="file"
      >File link</ix-link-button
    >
  `,
})
export default class LinkButtonFile {}
```

### Vue Examples

#### link-button-file.vue
```vue
<script setup lang="ts">
import { IxLinkButton } from '@siemens/ix-vue';
</script>

<template>
  <IxLinkButton url="https://ix.siemens.io/" icon="file"
    >File link</IxLinkButton
  >
</template>
```

## Disabled

### React Examples

#### link-button-disabled.tsx
```tsx
import { IxLinkButton } from '@siemens/ix-react';

export default () => {
  return (
    <IxLinkButton url="https://ix.siemens.io/" disabled>
      Link text
    </IxLinkButton>
  );
};
```

### Angular Examples

#### link-button-disabled.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-link-button url="https://ix.siemens.io/" disabled>
      Link text
    </ix-link-button>
  `,
})
export default class LinkButtonDisabled {}
```

### Angular Standalone Examples

#### link-button-disabled.ts
```ts
import { Component } from '@angular/core';
import { IxLinkButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLinkButton],
  template: `
    <ix-link-button url="https://ix.siemens.io/" disabled>
      Link text
    </ix-link-button>
  `,
})
export default class LinkButtonDisabled {}
```

### Vue Examples

#### link-button-disabled.vue
```vue
<script setup lang="ts">
import { IxLinkButton } from '@siemens/ix-vue';
</script>

<template>
  <IxLinkButton url="https://ix.siemens.io/" disabled>Link text</IxLinkButton>
</template>
```

## API for ix-link-button

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| disabled | { "Disable the link button" } | disabled | boolean | false |
| icon | { "Icon displayed alongside the link label. Defaults to `none`." } | icon | "action" \| "external" \| "file" \| "internal" \| "none" | 'none' |
| iconPosition | { "Position of the icon relative to the link label." } | icon-position | "end" \| "start" | 'start' |
| target | { "Specifies where to open the link\n\nhttps://www.w3schools.com/html/html_links.asp" } | target | "_blank" \| "_parent" \| "_self" \| "_top" | '_self' |
| url | { "Url for the link button\n\nThe value is forwarded unchanged to the `href` of the native anchor. URL schemes such as\n\n`javascript:` or `data:` are not rejected. Do not bind untrusted input; validate destinations\n\nagainst an allowlist (for example `https:` and relative URLs)." } | url | string \| undefined |  |

### Slot

| Name | Description |
| --- | --- |
| default | { "Link button label." } |
