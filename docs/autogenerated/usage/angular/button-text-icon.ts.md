```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-button icon="star"> Button </ix-button>
    <ix-button variant="secondary" icon="star"> Button </ix-button>
    <ix-button outline icon="star"> Button </ix-button>
    <ix-button ghost icon="star"> Button </ix-button>
  `,
  styleUrls: ['./button-text-icon.css'],
})
export default class Buttons {}
```
