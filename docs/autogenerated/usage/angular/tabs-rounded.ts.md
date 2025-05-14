```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-tabs rounded>
      <ix-tab-item>
        <ix-icon name="success"></ix-icon>
      </ix-tab-item>
      <ix-tab-item counter="200">
        <ix-icon name="tree"></ix-icon>
      </ix-tab-item>
      <ix-tab-item>
        <ix-icon name="maintenance"></ix-icon>
      </ix-tab-item>
      <ix-tab-item disabled counter="24">
        <ix-icon name="sound-loud"></ix-icon>
      </ix-tab-item>
      <ix-tab-item>
        <ix-icon name="hierarchy"></ix-icon>
      </ix-tab-item>
      <ix-tab-item disabled>
        <ix-icon name="calendar-settings"></ix-icon>
      </ix-tab-item>
    </ix-tabs>
  `,
})
export default class TabsRounded {}
```
