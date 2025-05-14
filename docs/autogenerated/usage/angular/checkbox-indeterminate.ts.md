```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div>
      <input
        class="ix-form-control"
        type="checkbox"
        id="checkbox_01"
        [indeterminate]="true"
      />
      <label class="ix-form-label" for="checkbox_01">Simple checkbox</label>
    </div>
  `,
})
export default class CheckboxIndeterminate {}
```
