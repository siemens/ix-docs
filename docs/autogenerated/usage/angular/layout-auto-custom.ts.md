```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './layout-auto-custom.html',
  styleUrls: ['./layout-auto.css'],
})
export default class LayoutAutoCustom {
  layout = [
    { minWidth: '0', columns: 1 },
    { minWidth: '35rem', columns: 2 },
    { minWidth: '50rem', columns: 4 },
  ];
}
```
