```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-event-list [itemHeight]="itemHeight">
      <ng-container *ngFor="let item of items">
        <ix-event-list-item color="color-primary"
          >Text {{ item }}</ix-event-list-item
        >
      </ng-container>
    </ix-event-list>
  `,
})
export default class EventListCustomItemHeightInNumber {
  itemHeight = 60;
  items = [1, 2, 3];
}
```
