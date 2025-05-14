```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './map-navigation-migration.html',
  styleUrls: ['./map-navigation-migration.css'],
})
export default class MapNavigationMigration {
  expanded = false;

  resetExpanded(event: Event) {
    requestAnimationFrame(() => {
      this.expanded = (event as CustomEvent).detail.expanded;
    });
  }

  toggleOverlay() {
    this.expanded = !this.expanded;
  }
}
```
