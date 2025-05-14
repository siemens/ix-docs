```ts
import { Component } from '@angular/core';
import { Breakpoint } from '@siemens/ix';

@Component({
  selector: 'app-example',
  templateUrl: './application-breakpoints.html',
})
export default class ApplicationBreakpointExample {
  breakpoints: Breakpoint[] = ['md'];

  onCheckedChange(breakpoint: Breakpoint) {
    this.breakpoints = [breakpoint];
  }
}
```
