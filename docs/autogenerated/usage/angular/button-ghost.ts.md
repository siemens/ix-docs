```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-button ghost> Button </ix-button>
    <ix-button disabled ghost> Button </ix-button>
  `,
  styleUrls: ['./button-ghost.css'],
})
export default class Buttons {}
```
