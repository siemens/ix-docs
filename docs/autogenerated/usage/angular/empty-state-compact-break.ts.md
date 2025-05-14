```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: ` <ix-empty-state
    layout="compactBreak"
    header="No elements available"
    subHeader="Create an element first"
    icon="add"
    action="Create element"
    (actionClick)="onActionClick($event)"
  ></ix-empty-state>`,
})
export default class EmptyStateCompactBreak {
  onActionClick(event: Event) {
    console.log(event);
  }
}
```
