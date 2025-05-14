```html
<ix-custom-field helper-text="Choose file">
  <ix-input value="No file chosen" readonly></ix-input>
  <ix-icon-button
    icon="open-file"
    variant="primary"
    outline
    (click)="openFileBrowser()"
  ></ix-icon-button>
  <input #fileUpload type="file" style="display: none" />
</ix-custom-field>
```
