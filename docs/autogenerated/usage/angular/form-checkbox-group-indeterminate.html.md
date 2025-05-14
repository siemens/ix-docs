```html
<ix-checkbox-group>
  <ix-checkbox
    indeterminate="{{this.parentCheckbox.indeterminate}}"
    [(ngModel)]="this.parentCheckbox.checked"
    label="{{this.parentCheckbox.label}}"
    (checkedChange)="parentCheckedChange()"
  ></ix-checkbox>
  <ix-checkbox
    *ngFor="let cb of this.childCheckboxes"
    label="{{cb.label}}"
    [(ngModel)]="cb.checked"
    class="cb-padding"
    (checkedChange)="checkedChange()"
  ></ix-checkbox>
</ix-checkbox-group>
```
