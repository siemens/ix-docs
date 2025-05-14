```ts
import { Component } from '@angular/core';
import { ToastService } from '@siemens/ix-angular';

@Component({
  selector: 'app-example',
  template: `
    <ix-button (click)="showToastMessage()">Trigger toast</ix-button>
  `,
})
export default class ToastPosition {
  constructor(private readonly toastService: ToastService) {}

  async showToastMessage() {
    this.toastService.setPosition('top-right');
    this.toastService.show({
      message: 'My toast message!',
    });
  }
}
```
