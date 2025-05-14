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

        <ix-button (click)="showOverlay = true">Show overlay</ix-button>
      </ix-content>

      <ix-map-navigation-overlay
        *ngIf="showOverlay"
        slot="overlay"
        name="Custom overlay"
        icon="bulb"
        (closeClick)="showOverlay = false"
      >
        <ix-content>Overlay content</ix-content>
      </ix-map-navigation-overlay>
    </ix-map-navigation>
  `,
})
export default class MapNavigationOverlay {
  showOverlay = true;
}
```
