```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-toggle-button outline>Normal</ix-toggle-button>
    <ix-toggle-button outline pressed>Pressed</ix-toggle-button>
    <ix-toggle-button outline disabled>Disabled</ix-toggle-button>
    <ix-toggle-button outline disabled loading>Loading</ix-toggle-button>
  `,
  styleUrls: ['./toggle-button-secondary-outline.css'],
})
export default class Buttons {}
```
