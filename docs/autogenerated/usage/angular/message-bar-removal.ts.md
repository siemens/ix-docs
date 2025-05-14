```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-message-bar-single-removal',
  templateUrl: './message-bar-removal.html',
  styleUrls: ['./message-bar.css']
})
export default class MessageBarRemoval {
  messageBarVisible = true;

  handleCloseAnimationCompleted() {
    this.messageBarVisible = false;
  }

  handleShowMessage() {
    this.messageBarVisible = true;
  }
}
```
