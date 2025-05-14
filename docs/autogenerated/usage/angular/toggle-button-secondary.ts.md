```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-toggle-button>Normal</ix-toggle-button>
    <ix-toggle-button pressed> Pressed</ix-toggle-button>
    <ix-toggle-button disabled> Disabled</ix-toggle-button>
    <ix-toggle-button disabled loading> Loading</ix-toggle-button>
  `,
  styleUrls: ['./toggle-button-secondary.css'],
})
export default class Buttons {}
```
