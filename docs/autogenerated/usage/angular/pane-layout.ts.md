```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './pane-layout.html',
})
export default class PaneLayout {
  variant: 'floating' | 'inline' = 'floating';
  layout: 'full-horizontal' | 'full-vertical' = 'full-horizontal';
  borderless: boolean = true;

  toggleVariant() {
    const isInline: boolean = this.variant === 'inline';

    this.variant = isInline ? 'floating' : 'inline';
    this.borderless = isInline;
  }

  toggleLayout() {
    this.layout =
      this.layout === 'full-horizontal' ? 'full-vertical' : 'full-horizontal';
  }
}
```
