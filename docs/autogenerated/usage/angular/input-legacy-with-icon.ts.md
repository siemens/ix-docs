```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <form class="needs-validation">
      <ix-input-group>
        <input class="ix-form-control" type="text" />
        <span slot="input-end"><ix-icon name="about" size="16"></ix-icon></span>
      </ix-input-group>
    </form>
  `,
})
export default class InputLegacyWithIcon {}
```
