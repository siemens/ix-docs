```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import { iconStar, iconStarFilled } from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  templateUrl: './add-icons.html',
  styleUrls: ['./add-icons.css'],
})
export default class AddIcons {
  readonly icons = { iconStar, iconStarFilled };

  constructor() {
    addIcons({ iconStar, iconStarFilled });
  }
}
```
