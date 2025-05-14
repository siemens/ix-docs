```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div class="ix-button-group">
      <ix-button outline> Left </ix-button>
      <ix-button>Middle</ix-button>
      <ix-button outline> Right </ix-button>
    </div>
  `,
})
export default class ButtonGroup {}
```
