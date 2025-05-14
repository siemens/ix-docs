```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div class="tabs">
      <ix-tabs [selected]="selectedTab">
        <ix-tab-item (click)="changeTab(0)">Tab 1</ix-tab-item>
        <ix-tab-item (click)="changeTab(1)">Tab 2</ix-tab-item>
        <ix-tab-item (click)="changeTab(2)">Tab 3</ix-tab-item>
      </ix-tabs>
      <div *ngIf="selectedTab === 0">Content Tab 1</div>
      <div *ngIf="selectedTab === 1">Content Tab 2</div>
      <div *ngIf="selectedTab === 2">Content Tab 3</div>
    </div>
  `,
  styleUrls: ['./tabs.css'],
})
export default class Tabs {
  selectedTab = 1;

  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}
```
