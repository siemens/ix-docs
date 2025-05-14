```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <form class="needs-validation">
      <input
        value="Some example text"
        placeholder="Enter text here"
        type="text"
        readonly
        class="ix-form-control"
      />
    </form>
  `,
})
export default class InputLegacyReadonly {}
```
