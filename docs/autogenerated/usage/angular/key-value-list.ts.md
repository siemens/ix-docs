```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-key-value-list>
      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>
    </ix-key-value-list>
  `,
})
export default class KeyValueList {}
```
