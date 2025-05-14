```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-menu>
      <ix-menu-item home-tab tab-icon="home"> Home </ix-menu-item>
      <ix-menu-item tab-icon="info" slot="bottom"> Bottom tab </ix-menu-item>
    </ix-menu>
  `,
})
export default class VerticalTabs {}
```
