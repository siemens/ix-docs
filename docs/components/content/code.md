# Content - Code

> Code examples and API documentation for the ix-content

# Content - Code

The `ix-content` is usually used as layouting component on a single page.

## Basic

### React Examples

#### content.tsx
```tsx
import { IxContent, IxContentHeader } from '@siemens/ix-react';

export default () => {
  return (
    <IxContent>
      <IxContentHeader
        slot="header"
        headerTitle="My Content Page"
      ></IxContentHeader>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </IxContent>
  );
};
```

### Angular Examples

#### content.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './content.html',
})
export default class ContentExample {}
```

#### content.html
```html
<ix-content>
  <ix-content-header slot="header" header-title="My Content Page">
  </ix-content-header>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</ix-content>
```

### Angular Standalone Examples

#### content.ts
```ts
import { Component } from '@angular/core';
import { IxContent, IxContentHeader } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxContent, IxContentHeader],
  templateUrl: './content.html',
})
export default class ContentExample {}
```

#### content.html
```html
<ix-content>
  <ix-content-header slot="header" header-title="My Content Page">
  </ix-content-header>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</ix-content>
```

### Vue Examples

#### content.vue
```vue
<script setup lang="ts">
import { IxContent, IxContentHeader } from '@siemens/ix-vue';
</script>

<template>
  <IxContent>
    <IxContentHeader
      slot="header"
      headerTitle="My Content Page"
    ></IxContentHeader>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.
  </IxContent>
</template>
```

## API for ix-content

### Slot

| Name | Description |
| --- | --- |
| header | { `Display content at the top of the content page` } |
