```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-key-value-list>
      <ix-key-value
        icon="location"
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        icon="location"
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        icon="location"
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>
    </ix-key-value-list>
  `,
})
export default class KeyValueListWithCustomValue {}
```
