```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-button variant="secondary"> Button </ix-button>
    <ix-button disabled variant="secondary"> Button </ix-button>
  `,
  styleUrls: ['./button-grey.css'],
})
export default class Buttons {}
```
