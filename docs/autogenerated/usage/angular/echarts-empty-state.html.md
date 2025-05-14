```html
<div class="echarts">
  <div
    *ngIf="this.data.value.length === 0"
    id="empty-state-container"
    class="empty-state-container"
  >
    <ix-empty-state
      class="empty-state"
      header="No elements available"
      sub-header="Failed to retrieve data"
      icon="info"
      action="Try again"
    ></ix-empty-state>
  </div>
  <div
    echarts
    class="echarts"
    [options]="options"
    [theme]="theme"
    id="main"
  ></div>
</div>
```
