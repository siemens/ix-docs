```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-button outline variant="secondary"> Button </ix-button>
    <ix-button disabled outline variant="secondary"> Button </ix-button>
  `,
  styleUrls: ['./button-grey-secondary.css'],
})
export default class Buttons {}
```
