```html
<div class="message-bar">
  <ix-message-bar
    *ngIf="messageBarVisible"
    (closeAnimationCompleted)="handleCloseAnimationCompleted()"
  >
    Message text
  </ix-message-bar>

  <ix-button
    *ngIf="!messageBarVisible"
    (click)="handleShowMessage()"
  >
    Show message bar
  </ix-button>
</div>
```
