```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-split-button icon="document" splitIcon="chevron-down-small">
      <ix-dropdown-item icon="cut"></ix-dropdown-item>
      <ix-dropdown-item icon="bulb"></ix-dropdown-item>
    </ix-split-button>
  `,
})
export default class SplitButtonIcons {}
```
