```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: buttonGreyGhost(),
  styleUrls: ['./button-grey-ghost.css'],
})
export default class Buttons {}

function buttonGreyGhost(): string | undefined {
  return `
      <ix-button ghost variant="secondary">
        Button
      </ix-button>
      <ix-button disabled ghost variant="secondary">
        Button
      </ix-button>
  `;
}
```
