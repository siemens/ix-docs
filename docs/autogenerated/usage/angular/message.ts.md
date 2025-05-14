```ts
import { Component } from '@angular/core';
import { showMessage } from '@siemens/ix';

@Component({
  selector: 'app-example',
  template: `
    <ix-button (click)="triggerMessage()">Show 'success' message</ix-button>
  `,
})
export default class Message {
  triggerMessage = async () => {
    (
      await showMessage.success(
        'Example title',
        'message',
        'Save',
        'Cancel',
        'payload:save',
        'payload:cancel'
      )
    ).once(console.log);
  };
}
```
