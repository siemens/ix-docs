```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: ` <ix-toggle [(ngModel)]="checked"></ix-toggle>`,
})
export default class Toggle {
  checked = false;
}
```
