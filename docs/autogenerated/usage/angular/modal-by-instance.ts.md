```ts
import { Component } from '@angular/core';
import { ModalService } from '@siemens/ix-angular';
import ModalByInstanceExample from './modal-by-instance-content';

@Component({
  selector: 'app-example',
  template: '<ix-button (click)="openModal()">Show modal</ix-button>',
})
export default class ModalByInstance {
  constructor(private readonly modalService: ModalService) {}

  async openModal() {
    await this.modalService.open({
      content: ModalByInstanceExample,
      data: 'Some data',
    });
  }
}
```
