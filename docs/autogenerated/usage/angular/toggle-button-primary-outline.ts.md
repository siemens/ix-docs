```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-toggle-button outline variant="primary">Normal</ix-toggle-button>
    <ix-toggle-button outline pressed variant="primary">
      Pressed
    </ix-toggle-button>
    <ix-toggle-button outline disabled variant="primary">
      Disabled
    </ix-toggle-button>
    <ix-toggle-button outline disabled loading variant="primary">
      Loading
    </ix-toggle-button>
  `,
  styleUrls: ['./toggle-button-primary-outline.css'],
})
export default class Buttons {}
```
