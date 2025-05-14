```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-toggle-button variant="primary">Normal</ix-toggle-button>
    <ix-toggle-button variant="primary" pressed> Pressed </ix-toggle-button>
    <ix-toggle-button variant="primary" disabled> Disabled </ix-toggle-button>
    <ix-toggle-button variant="primary" disabled loading>
      Loading
    </ix-toggle-button>
  `,
  styleUrls: ['./toggle-button-primary.css'],
})
export default class Buttons {}
```
