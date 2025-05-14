```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-event-list item-height="L">
      <ix-event-list-item color="color-primary">Test 1</ix-event-list-item>
      <ix-event-list-item color="color-primary">Test 2</ix-event-list-item>
    </ix-event-list>
  `,
})
export default class EventListCustomItemHeight {}
```
