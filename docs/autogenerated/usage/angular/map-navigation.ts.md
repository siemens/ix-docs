```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-map-navigation
      application-name="My Application"
      navigation-title="Navigation title"
      hide-context-menu="false"
    >
      <div class="placeholder-logo" slot="logo"></div>

      <ix-menu>
        <ix-menu-item>Item 1</ix-menu-item>
        <ix-menu-item>Item 2</ix-menu-item>
      </ix-menu>

      <ix-content slot="sidebar-content">Sidebar content</ix-content>

      <ix-content>
        <ix-content-header
          slot="header"
          header-title="My Content Page"
        ></ix-content-header>
      </ix-content>
    </ix-map-navigation>
  `,
})
export default class MapNavigation {}
```
