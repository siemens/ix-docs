```ts
import { Component } from '@angular/core';
import { IxActiveModal } from '@siemens/ix-angular';

@Component({
  selector: 'app-example-content',
  template: `
    <ix-modal-header> Message headline </ix-modal-header>
    <ix-modal-content>
      Message text lorem ipsum: {{ activeModal.data }}
    </ix-modal-content>
    <ix-modal-footer>
      <ix-button
        outline
        class="dismiss-modal"
        (click)="activeModal.dismiss('dismiss')"
      >
        Cancel
      </ix-button>
      <ix-button
        autofocus
        class="close-modal"
        (click)="activeModal.close('okay')"
      >
        OK
      </ix-button>
    </ix-modal-footer>
  `,
})
export default class ModalByInstanceContent {
  constructor(readonly activeModal: IxActiveModal) {}

  close() {
    this.activeModal.close('My close response');
  }
}
```
