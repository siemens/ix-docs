```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './pane.html',
})
export default class Pane {
  expanded: boolean = false;

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  expandedChanged(event: CustomEvent) {
    this.expanded = event.detail.expanded;
  }
}
```
