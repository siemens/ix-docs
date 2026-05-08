# Upload - Code

> Code examples and API documentation for the ix-upload

# Upload - Code

## Basic

### React Examples

#### upload.tsx
```tsx
import { IxUpload } from '@siemens/ix-react';

export default () => {
  return <IxUpload />;
};
```

### Angular Examples

#### upload.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <ix-upload></ix-upload> `,
})
export default class Upload {}
```

### Angular Standalone Examples

#### upload.ts
```ts
import { Component } from '@angular/core';
import { IxUpload } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxUpload],
  template: ` <ix-upload></ix-upload> `,
})
export default class Upload {}
```

### Vue Examples

#### upload.vue
```vue
<script setup lang="ts">
import { IxUpload } from '@siemens/ix-vue';
</script>

<template>
  <IxUpload />
</template>
```

## API for ix-upload

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| accept | The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload). See [https://www.w3schools.com/tags/att_input_accept.asp](https://www.w3schools.com/tags/att_input_accept.asp) | accept | string \| undefined |  |
| disabled | Disable all input events | disabled | boolean | false |
| i18nUploadDisabled | Text for disabled state | i18n-upload-disabled | string | 'File upload currently not possible.' |
| i18nUploadFile | Label for upload file button | i18n-upload-file | string | 'Upload file…' |
| loadingText | Will be used by state = UploadFileState.LOADING | loading-text | string | 'Checking files…' |
| multiline | Whether the text should wrap to more than one line | multiline | boolean | false |
| multiple | If multiple is true the user can drop or select multiple files | multiple | boolean | false |
| selectFileText | Will be used by state = UploadFileState.SELECT_FILE | select-file-text | string | '+ Drag files here or…' |
| state | After a file is uploaded you can set the upload component to a defined state | state | UploadFileState.LOADING \| UploadFileState.SELECT_FILE \| UploadFileState.UPLOAD_FAILED \| UploadFileState.UPLOAD_SUCCESSED | UploadFileState.SELECT_FILE |
| uploadFailedText | Will be used by state = UploadFileState.UPLOAD_FAILED | upload-failed-text | string | 'Upload failed. Please try again.' |
| uploadSuccessText | Will be used by state = UploadFileState.UPLOAD_SUCCESSED | upload-success-text | string | 'Upload successful' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| filesChanged | You get an array of Files after drop-action or browse action is finished | filesChanged | File[] |
