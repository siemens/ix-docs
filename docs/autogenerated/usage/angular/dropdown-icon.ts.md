```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-button id="iconTriggerId">Open</ix-button>
    <ix-dropdown trigger="iconTriggerId">
      <ix-dropdown-item label="Item 1" icon="star"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2" icon="document"></ix-dropdown-item>
      <ix-dropdown-item label="Item 3" icon="bulb"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export default class DropdownIcon {}
```
