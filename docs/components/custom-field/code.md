# Custom field - Code

> Code examples and API documentation for the ix-custom-field

# Custom field - Code

With the help of `ix-custom-field` you are able to create form fields that can host any component / markup, while still having access to all validation states as well as ascociated explanatory texts like `helper-text`, `valid-text`, `info-text`, `warning-text` or `invalid-text`.
The component will check if any of its children has one of these classes set:
`ix-valid, ix-info, ix-warning or ix-invalid`
If this is the case the custom field will display the corresponding text.

Custom fields can be used to migrate from the existing input validation (native inputs) to the new validation / froms concept.

## Basic

### React Examples

#### custom-field.tsx
```tsx
import { useRef } from 'react';
import { IxCustomField, IxIconButton, IxInput } from '@siemens/ix-react';

export default () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <IxCustomField helper-text="Choose file">
      <IxInput value="Enter text here" readonly></IxInput>
      <IxIconButton icon="open-file" variant="subtle-primary" onClick={() => {
          ref.current?.click();
        }}
      ></IxIconButton>
      <input
        ref={ref}
        id="file-upload"
        type="file"
        style={{ display: 'none' }}
        onInput={(e: any) => console.log(e.target.files)}
      />
    </IxCustomField>
  );
};
```

### Angular Examples

#### custom-field.ts
```ts
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  standalone: false,
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

#### custom-field.html
```html
<ix-custom-field helper-text="Choose file">
  <ix-input value="No file chosen" readonly></ix-input>
  <ix-icon-button icon="open-file" variant="subtle-primary" (click)="openFileBrowser()"></ix-icon-button>
  <input #fileUpload type="file" style="display: none" />
</ix-custom-field>
```

### Angular Standalone Examples

#### custom-field.ts
```ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  IxCustomField,
  IxInput,
  IxIconButton,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxCustomField, IxInput, IxIconButton, IxTextValueAccessorDirective],
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

#### custom-field.html
```html
<ix-custom-field helper-text="Choose file">
  <ix-input value="No file chosen" readonly></ix-input>
  <ix-icon-button icon="open-file" variant="subtle-primary" (click)="openFileBrowser()"></ix-icon-button>
  <input #fileUpload type="file" style="display: none" />
</ix-custom-field>
```

### Vue Examples

#### custom-field.vue
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { IxCustomField, IxInput, IxIconButton } from '@siemens/ix-vue';

const input = ref();
const openFileBrowser = () => {
  input.value.click();
};
</script>

<template>
  <IxCustomField helper-text="Choose file">
    <IxInput value="Enter text here" readonly></IxInput>
    <IxIconButton icon="open-file" variant="subtle-primary" @click="openFileBrowser()"></IxIconButton>
    <input
      ref="input"
      id="file-upload"
      type="file"
      style="display: none"
      @input="(e: any) => console.log(e.target.files)"
    />
  </IxCustomField>
</template>
```

## Validation

### React Examples

#### custom-field-validation.tsx
```tsx
import { IxCustomField } from '@siemens/ix-react';

const wrapperStyle = {
  marginBottom: '1rem',
};

export default () => {
  return (
    <>
      <div style={wrapperStyle}>
        <IxCustomField
          helper-text="Add your first name here"
          valid-text="Valid first name"
          label="First name"
        >
          <input
            id="first-name"
            className="ix-form-control ix-valid"
            value="Jane"
          />
        </IxCustomField>
      </div>

      <div style={wrapperStyle}>
        <IxCustomField info-text="Family name" label="Last name">
          <input
            id="last-name"
            className="ix-form-control ix-info"
            value="Doe"
          />
        </IxCustomField>
      </div>

      <div style={wrapperStyle}>
        <IxCustomField warning-text="Not a valid email address" label="Email">
          <input
            id="email"
            className="ix-form-control ix-warning"
            value="info@"
          />
        </IxCustomField>
      </div>

      <div style={wrapperStyle}>
        <IxCustomField invalid-text="Required" label="Address">
          <input id="address" className="ix-form-control ix-invalid" />
        </IxCustomField>
      </div>
    </>
  );
};
```

### Angular Examples

#### custom-field-validation.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './custom-field-validation.html',
})
export default class CustomFieldValidation {}
```

#### custom-field-validation.html
```html
<style>
  .custom-field-wrapper {
    margin-bottom: 1rem;
  }
</style>

<div class="custom-field-wrapper">
  <ix-custom-field
    helper-text="Add your first name here"
    valid-text="Valid first name"
    label="First name"
  >
    <input
      id="first-name"
      type="text"
      class="ix-form-control ix-valid"
      value="Jane"
    />
  </ix-custom-field>
</div>

<div class="custom-field-wrapper">
  <ix-custom-field info-text="Family name" label="Last name">
    <input
      id="last-name"
      type="text"
      class="ix-form-control ix-info"
      value="Doe"
    />
  </ix-custom-field>
</div>

<div class="custom-field-wrapper">
  <ix-custom-field warning-Text="Not a valid email address" label="Email">
    <input
      id="email"
      type="email"
      class="ix-form-control ix-warning"
      value="info@"
    />
  </ix-custom-field>
</div>

<div class="custom-field-wrapper">
  <ix-custom-field invalid-text="Required" label="Address">
    <input id="address" type="text" class="ix-form-control ix-invalid" />
  </ix-custom-field>
</div>
```

### Angular Standalone Examples

#### custom-field-validation.ts
```ts
import { Component } from '@angular/core';
import { IxCustomField } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxCustomField],
  templateUrl: './custom-field-validation.html',
})
export default class CustomFieldValidation {}
```

#### custom-field-validation.html
```html
<style>
  .custom-field-wrapper {
    margin-bottom: 1rem;
  }
</style>

<div class="custom-field-wrapper">
  <ix-custom-field
    helper-text="Add your first name here"
    valid-text="Valid first name"
    label="First name"
  >
    <input
      id="first-name"
      type="text"
      class="form-control ix-valid"
      value="Jane"
    />
  </ix-custom-field>
</div>

<div class="custom-field-wrapper">
  <ix-custom-field info-text="Family name" label="Last name">
    <input
      id="last-name"
      type="text"
      class="form-control ix-info"
      value="Doe"
    />
  </ix-custom-field>
</div>

<div class="custom-field-wrapper">
  <ix-custom-field warning-Text="Not a valid email address" label="Email">
    <input
      id="email"
      type="email"
      class="form-control ix-warning"
      value="info@"
    />
  </ix-custom-field>
</div>

<div class="custom-field-wrapper">
  <ix-custom-field invalid-text="Required" label="Address">
    <input id="address" type="text" class="form-control ix-invalid" />
  </ix-custom-field>
</div>
```

### Vue Examples

#### custom-field-validation.vue
```vue
<script setup lang="ts">
import { IxCustomField } from '@siemens/ix-vue';
</script>

<template>
  <div class="custom-field-wrapper">
    <IxCustomField
      helper-text="Add your first name here"
      valid-text="Valid first name"
      label="First name"
    >
      <input
        id="first-name"
        className="ix-form-control ix-valid"
        value="Jane"
      />
    </IxCustomField>
  </div>

  <div class="custom-field-wrapper">
    <IxCustomField info-text="Family name" label="Last name">
      <input id="last-name" className="ix-form-control ix-info" value="Doe" />
    </IxCustomField>
  </div>

  <div class="custom-field-wrapper">
    <IxCustomField warning-text="Not a valid email address" label="Email">
      <input id="email" className="ix-form-control ix-warning" value="info@" />
    </IxCustomField>
  </div>

  <div class="custom-field-wrapper">
    <IxCustomField invalid-text="Required" label="Address">
      <input id="address" className="ix-form-control ix-invalid" />
    </IxCustomField>
  </div>
</template>

<style scoped>
.custom-field-wrapper {
  margin-bottom: 1rem;
}
</style>
```

## API for ix-custom-field

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| helperText | Show text below the field component which show additional information | helper-text | string \| undefined |  |
| infoText | Info text for the field component | info-text | string \| undefined |  |
| invalidText | Error text for the field component | invalid-text | string \| undefined |  |
| label | Label for the field component | label | string \| undefined |  |
| required | A value is required or must be checked for the form to be submittable | required | boolean | false |
| showTextAsTooltip | Show helper, info, warning, error and valid text as tooltip | show-text-as-tooltip | boolean \| undefined |  |
| validText | Valid text for the field component | valid-text | string \| undefined |  |
| warningText | Warning text for the field component | warning-text | string \| undefined |  |
