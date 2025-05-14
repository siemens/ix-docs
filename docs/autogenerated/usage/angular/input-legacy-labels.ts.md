```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <form class="needs-validation">
      <ix-input-group style="margin-bottom: 0.5rem;">
        <span slot="input-start">Label Start</span>
        <input class="ix-form-control" type="text" />
      </ix-input-group>

      <ix-input-group>
        <input class="ix-form-control" type="text" />
        <span slot="input-end">Label End</span>
      </ix-input-group>
    </form>
  `,
})
export default class InputLegacyLabels {}
```
