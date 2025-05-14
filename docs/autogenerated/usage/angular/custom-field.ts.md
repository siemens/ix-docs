```ts
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './custom-field.html',
})
export default class CustomField {
  @ViewChild('fileUpload') fileUpload!: ElementRef<HTMLElement>;

  openFileBrowser() {
    this.fileUpload.nativeElement.click();
    this.fileUpload.nativeElement.oninput = (event: any) => {
      console.log(event.target.files);
    };
  }
}
```
