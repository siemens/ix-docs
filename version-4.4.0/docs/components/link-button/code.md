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
| disabled | Disable the link button | disabled | boolean | false |
| target | Specifies where to open the link https://www.w3schools.com/html/html_links.asp | target | "_blank" \| "_parent" \| "_self" \| "_top" | '_self' |
| url | Url for the link button | url | string \| undefined |  |
