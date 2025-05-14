```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-date-picker [from]="fromDate" [to]="toDate"></ix-date-picker>
  `,
})
export default class DatepickerRange {
  fromDate = '2022/12/15';
  toDate = '2022/12/24';
}
```
