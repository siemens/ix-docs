# Textarea - Code

> Code examples and API documentation for the ix-textarea

# Textarea - Code

## Basic

### React Examples

#### textarea.tsx
```tsx
import { IxTextarea } from '@siemens/ix-react';

export default () => {
  return <IxTextarea></IxTextarea>;
};
```

### Angular Examples

#### textarea.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './textarea.html',
})
export default class Textarea {}
```

#### textarea.html
```html
<ix-textarea
  resize-behavior='dimensions'
  textarea-height='100px'
  textarea-width='300px'
></ix-textarea>
```

### Angular Standalone Examples

#### textarea.ts
```ts
import { Component } from '@angular/core';
import {
  IxTextarea,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTextarea, IxTextValueAccessorDirective],
  templateUrl: './textarea.html',
})
export default class Textarea {}
```

#### textarea.html
```html
<ix-textarea
  resize-behavior="dimensions"
  textarea-height="100px"
  textarea-width="300px"
></ix-textarea>
```

### Vue Examples

#### textarea.vue
```vue
<script lang="ts">
import { IxTextarea } from '@siemens/ix-vue';

export default {
  name: 'Textarea',
  components: { IxTextarea },
};
</script>

<template>
  <IxTextarea
  ></IxTextarea>
</template>
```

## Disabled

### React Examples

#### textarea-disabled.tsx
```tsx
import { IxTextarea } from '@siemens/ix-react';

export default () => {
  return <IxTextarea value="Some text" disabled></IxTextarea>;
};
```

### Angular Examples

#### textarea-disabled.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './textarea-disabled.html',
})
export default class TextareaDisabled {}
```

#### textarea-disabled.html
```html
<div>
  <ix-textarea
    resize-behavior='dimensions'
    textarea-height='100px'
    textarea-width='300px'
    value='Some text'
    disabled
  ></ix-textarea>
</div>
```

### Angular Standalone Examples

#### textarea-disabled.ts
```ts
import { Component } from '@angular/core';
import {
  IxTextarea,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTextarea, IxTextValueAccessorDirective],
  templateUrl: './textarea-disabled.html',
})
export default class TextareaDisabled {}
```

#### textarea-disabled.html
```html
<div>
  <ix-textarea
    resize-behavior="dimensions"
    textarea-height="100px"
    textarea-width="300px"
    value="Some text"
    disabled
  ></ix-textarea>
</div>
```

### Vue Examples

#### textarea-disabled.vue
```vue
<script lang="ts">
import { IxTextarea } from '@siemens/ix-vue';

export default {
  name: 'TextareaDisabled',
  components: { IxTextarea },
};
</script>

<template>
  <IxTextarea
    value="Some text"
    disabled
  ></IxTextarea>
</template>
```

## Readonly

### React Examples

#### textarea-readonly.tsx
```tsx
import { IxTextarea } from '@siemens/ix-react';

export default () => {
  return <IxTextarea readonly></IxTextarea>;
};
```

### Angular Examples

#### textarea-readonly.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './textarea-readonly.html',
})
export default class TextareaReadonly {}
```

#### textarea-readonly.html
```html
<ix-textarea
  resize-behavior='dimensions'
  textarea-height='100px'
  textarea-width='300px'
  readonly
></ix-textarea>
```

### Angular Standalone Examples

#### textarea-readonly.ts
```ts
import { Component } from '@angular/core';
import {
  IxTextarea,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTextarea, IxTextValueAccessorDirective],
  templateUrl: './textarea-readonly.html',
})
export default class TextareaReadonly {}
```

#### textarea-readonly.html
```html
<ix-textarea
  resize-behavior="dimensions"
  textarea-height="100px"
  textarea-width="300px"
  readonly
></ix-textarea>
```

### Vue Examples

#### textarea-readonly.vue
```vue
<script lang="ts">
import { IxTextarea } from '@siemens/ix-vue';

export default {
  name: 'TextareaReadonly',
  components: { IxTextarea },
};
</script>

<template>
  <IxTextarea
    disabled
  ></IxTextarea>
</template>
```

## Resize behavior

### React Examples

#### textarea-rows-cols.tsx
```tsx
import { IxTextarea } from '@siemens/ix-react';

export default () => {
  return (
    <IxTextarea
      maxLength={100}
      name="comment"
      label="Comment"
      textareaRows={15}
      textareaCols={20}
      helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
    ></IxTextarea>
  );
};
```

### Angular Examples

#### textarea-rows-cols.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './textarea-rows-cols.html',
})
export default class TextareaRowsCols {}
```

#### textarea-rows-cols.html
```html
<ix-textarea
    max-length='100'
    name="comment"
    label="Comment"
    resize-behavior="rowsCols"
    textarea-rows="15"
    textarea-cols="20"
    helper-text="Let us know if you have any special requests or comments. We will do our best to accommodate you."
></ix-textarea>
```

### Angular Standalone Examples

#### textarea-rows-cols.ts
```ts
import { Component } from '@angular/core';
import {
  IxTextarea,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTextarea, IxTextValueAccessorDirective],
  templateUrl: './textarea-rows-cols.html',
})
export default class TextareaRowsCols {}
```

#### textarea-rows-cols.html
```html
<ix-textarea
  max-length="100"
  name="comment"
  label="Comment"
  resize-behavior="rowsCols"
  textarea-rows="15"
  textarea-cols="20"
  helper-text="Let us know if you have any special requests or comments. We will do our best to accommodate you."
></ix-textarea>
```

### Vue Examples

#### textarea-rows-cols.vue
```vue
<script lang="ts">
import { IxTextarea } from '@siemens/ix-vue'

export default {
  name: 'TextareaRowsCols',
  components: { IxTextarea },
};
</script>

<template>
  <IxTextarea
    :maxLength="100"
    name="comment"
    label="Comment"
    :textarea-rows="15"
    :textarea-cols="20"
    helper-text="Let us know if you have any special requests or comments. We will do our best to accommodate you."
  ></IxTextarea>
</template>
```

## Validation

### React Examples

#### textarea-validation.tsx
```tsx
import { IxTextarea } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxTextarea
          maxLength={100}
          name="comment"
          label="Comment"
          infoText="Info text"
          class="ix-info"
        ></IxTextarea>
      </div>

      <div>
        <IxTextarea
          maxLength={100}
          name="comment"
          label="Comment"
          warningText="Warning text"
          class="ix-warning"
        ></IxTextarea>
      </div>

      <div>
        <IxTextarea
          maxLength={100}
          name="comment"
          label="Comment"
          validText="Valid text"
          className="valid"
        ></IxTextarea>
      </div>

      <div>
        <IxTextarea
          maxLength={100}
          name="comment"
          label="Comment"
          invalidText="Invalid text"
          class="ix-invalid"
        ></IxTextarea>
      </div>
    </>
  );
};
```

### Angular Examples

#### textarea-validation.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './textarea-validation.html',
})
export default class TextareaValidation {}
```

#### textarea-validation.html
```html
<div>
  <ix-textarea
    max-length='100'
    name='comment'
    label='Comment'
    resize-behavior='dimensions'
    textarea-height='50px'
    textarea-width='200px'
    info-text='Info text'
    class='ix-info'
  ></ix-textarea>
</div>

<div>
  <ix-textarea
    max-length='100'
    name='comment'
    label='Comment'
    resize-behavior='dimensions'
    textarea-height='50px'
    textarea-width='200px'
    warning-text='Warning text'
    class='ix-warning'
  ></ix-textarea>
</div>
<div>
  <ix-textarea
    max-length='100'
    name='comment'
    label='Comment'
    resize-behavior='dimensions'
    textarea-height='50px'
    textarea-width='200px'
    valid-text='Valid text'
    class='valid'
  ></ix-textarea>
</div>
<div>
  <ix-textarea
    max-length='100'
    name='comment'
    label='Comment'
    resize-behavior='dimensions'
    textarea-height='50px'
    textarea-width='200px'
    invalid-text='Invalid text'
    class='ix-invalid'
  ></ix-textarea>
</div>
```

### Angular Standalone Examples

#### textarea-validation.ts
```ts
import { Component } from '@angular/core';
import {
  IxTextarea,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxTextarea, IxTextValueAccessorDirective],
  templateUrl: './textarea-validation.html',
})
export default class TextareaValidation {}
```

#### textarea-validation.html
```html
<div>
  <ix-textarea
    max-length="100"
    name="comment"
    label="Comment"
    resize-behavior="dimensions"
    textarea-height="50px"
    textarea-width="200px"
    info-text="Info text"
    class="ix-info"
  ></ix-textarea>
</div>

<div>
  <ix-textarea
    max-length="100"
    name="comment"
    label="Comment"
    resize-behavior="dimensions"
    textarea-height="50px"
    textarea-width="200px"
    warning-text="Warning text"
    class="ix-warning"
  ></ix-textarea>
</div>
<div>
  <ix-textarea
    max-length="100"
    name="comment"
    label="Comment"
    resize-behavior="dimensions"
    textarea-height="50px"
    textarea-width="200px"
    valid-text="Valid text"
    class="valid"
  ></ix-textarea>
</div>
<div>
  <ix-textarea
    max-length="100"
    name="comment"
    label="Comment"
    resize-behavior="dimensions"
    textarea-height="50px"
    textarea-width="200px"
    invalid-text="Invalid text"
    class="ix-invalid"
  ></ix-textarea>
</div>
```

### Vue Examples

#### textarea-validation.vue
```vue
<script lang='ts'>
import { IxTextarea } from '@siemens/ix-vue';

export default {
  name: 'TextareaValidation',
  components: { IxTextarea },
};
</script>

<template>
  <div>
    <IxTextarea
      :max-length="100"
      name="comment"
      label="Comment"
      info-text="Info text"
      class="ix-info"
    ></IxTextarea>
  </div>

  <div>
    <IxTextarea
      :max-length="100"
      name="comment"
      label="Comment"
      warning-text="Warning text"
      class="ix-warning"
    ></IxTextarea>
  </div>

  <div>
    <IxTextarea
      :max-length="100"
      name="comment"
      label="Comment"
      valid-text="Valid text"
      class="valid"
    ></IxTextarea>
  </div>

  <div>
    <IxTextarea
      :max-length="100"
      name="comment"
      label="Comment"
      invalid-text="Invalid text"
      class="ix-invalid"
    ></IxTextarea>
  </div>
</template>
```

## API for ix-textarea

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| disabled | Determines if the textarea field is disabled. | disabled | boolean | false |
| helperText | The helper text for the textarea field. | helper-text | string \| undefined |  |
| infoText | The info text for the textarea field. | info-text | string \| undefined |  |
| invalidText | The error text for the textarea field. | invalid-text | string \| undefined |  |
| label | The label for the textarea field. | label | string \| undefined |  |
| maxLength | The maximum length of the textarea field. | max-length | number \| undefined |  |
| minLength | The minimum length of the textarea field. | min-length | number \| undefined |  |
| name | The name of the textarea field. | name | string \| undefined |  |
| placeholder | The placeholder text for the textarea field. | placeholder | string \| undefined |  |
| readonly | Determines if the textarea field is readonly. | readonly | boolean | false |
| required | Determines if the textarea field is required. | required | boolean | false |
| resizeBehavior | Determines the resize behavior of the textarea field. Resizing can be enabled in one direction, both directions or completely disabled. | resize-behavior | "both" \| "horizontal" \| "none" \| "vertical" | 'both' |
| showTextAsTooltip | Determines if the text should be displayed as a tooltip. | show-text-as-tooltip | boolean \| undefined |  |
| textareaCols | The width of the textarea specified by number of characters. Will be overridden by \`textareaWidth\` prop if both are set. | textarea-cols | number \| undefined |  |
| textareaHeight | The height of the textarea field (e.g. "52px"). Will take precedence over \`textareaRows\` prop if both are set. | textarea-height | string \| undefined |  |
| textareaRows | The height of the textarea specified by number of rows. Will be overridden by \`textareaHeight\` prop if both are set. | textarea-rows | number \| undefined |  |
| textareaWidth | The width of the textarea field (e.g. "200px"). Will take precedence over \`textareaCols\` prop if both are set. | textarea-width | string \| undefined |  |
| validText | The valid text for the textarea field. | valid-text | string \| undefined |  |
| value | The value of the textarea field. | value | string | '' |
| warningText | The warning text for the textarea field. | warning-text | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| ixBlur | Event emitted when the textarea field loses focus. | ixBlur | void |
| ixChange | Event emitted when the textarea field loses focus and the value has changed. | ixChange | string |
| validityStateChange | Event emitted when the validity state of the textarea field changes. | validityStateChange | ValidityState |
| valueChange | Event emitted when the value of the textarea field changes. | valueChange | string |
