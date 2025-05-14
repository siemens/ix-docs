```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export default class Card {
  onClick(event: Event) {
    console.log(event);
  }
}
```
