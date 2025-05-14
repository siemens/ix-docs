```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-basic-navigation applicationName="Application name">
      <div class="placeholder-logo" slot="logo"></div>
      <ix-menu>
        <ix-menu-item>Item 1</ix-menu-item>
        <ix-menu-item>Item 2</ix-menu-item>
      </ix-menu>
    </ix-basic-navigation>
  `,
  styleUrls: ['./basic-navigation.css'],
})
export default class BasicNavigation {}
```
