```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-drawer [closeOnClickOutside]="true" [show]="show">
      <span>Some content of drawer</span>
    </ix-drawer>

    <ix-button (click)="show = !show">Toggle drawer</ix-button>
  `,
})
export default class Drawer {
  show = false;
}
```
