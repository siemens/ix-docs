```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-basic-navigation hideHeader>
      <ix-menu>
        <ix-menu-item>Item 1</ix-menu-item>
        <ix-menu-item>Item 2</ix-menu-item>
      </ix-menu>
    </ix-basic-navigation>
  `,
})
export default class BasicNavigationWithOutHeader {}
```
