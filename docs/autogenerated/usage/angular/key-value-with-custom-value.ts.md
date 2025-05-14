```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-key-value label="Label">
      <input
        class="ix-form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </ix-key-value>
  `,
  styleUrls: ['./key-value-with-custom-value.css'],
})
export default class KeyValueWithCustomValue {}
```
