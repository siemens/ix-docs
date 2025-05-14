```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './action-card.html',
})
export default class ActionCard {
  onClick(event: Event) {
    console.log(event);
  }
}
```
