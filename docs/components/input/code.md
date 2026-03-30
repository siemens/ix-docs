# Input - Code

> Code examples and API documentation for the ix-input

# Input - Code

## Basic

### React Examples

#### input.tsx
```tsx
import {
  IxInput,
  IxButton,
  IxDateInput,
  IxTimeInput,
  IxNumberInput,
} from '@siemens/ix-react';

export default () => {
  const handleSubmit = (e: React.FormEvent, formType: string) => {
    e.preventDefault();
    console.log(`${formType} form submitted`);
  };

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
        id="login-form"
      >
        <IxInput type="email" name="email" id="email" />
        <IxButton
          form="login-form"
          type="submit"
          onClick={(evt) => console.log('Clicked Submit!')}
        >
          Login
        </IxButton>
      </form>
      {}
      <form
        onSubmit={(e) => handleSubmit(e, 'IxInput')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '250px',
        }}
      >
        <h3>IxInput Form</h3>
        <IxInput type="email" name="email" placeholder="Email" />
        <IxInput type="password" name="password" placeholder="Password" />
        <IxNumberInput name="age" placeholder="Age" />
        <IxDateInput name="dob" placeholder="Date of Birth" />
        <IxTimeInput name="appointment" placeholder="Appointment Time" />
        <IxButton type="submit">Submit</IxButton>
      </form>

      {}
      <form
        onSubmit={(e) => handleSubmit(e, 'Native')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '250px',
        }}
      >
        <h3>Native Input Form</h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '8px',
            backgroundColor: '#007acc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Submit
        </button>
        <input type="submit" value="Native Submit Input" />
      </form>
    </div>
  );
};
```

### Angular Examples

#### input.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './input.html',
})
export default class Input {}
```

#### input.html
```html
<ix-input
  placeholder='Enter your Username'
></ix-input>
```

### Angular Standalone Examples

#### input.ts
```ts
import { Component } from '@angular/core';
import {
  IxInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxInput, IxTextValueAccessorDirective],
  templateUrl: './input.html',
})
export default class Input {}
```

#### input.html
```html
<ix-input placeholder="Enter your Username"></ix-input>
```

### Vue Examples

#### input.vue
```vue
<script setup lang="ts">
import { IxInput } from '@siemens/ix-vue';
</script>

<template>
  <IxInput placeholder="Enter your Username"></IxInput>
</template>
```

## Disabled

### React Examples

#### input-disabled.tsx
```tsx
import { IxInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxInput
      placeholder="Some placeholder"
      value="Some example text"
      disabled
    ></IxInput>
  );
};
```

### Angular Examples

#### input-disabled.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './input-disabled.html',
})
export default class InputDisabled {}
```

#### input-disabled.html
```html
<ix-input
  placeholder='Some placeholder'
  value='Some example text'
  disabled
></ix-input>
```

### Angular Standalone Examples

#### input-disabled.ts
```ts
import { Component } from '@angular/core';
import {
  IxInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxInput, IxTextValueAccessorDirective],
  templateUrl: './input-disabled.html',
})
export default class InputDisabled {}
```

#### input-disabled.html
```html
<ix-input
  placeholder="Some placeholder"
  value="Some example text"
  disabled
></ix-input>
```

### Vue Examples

#### input-disabled.vue
```vue
<script setup lang="ts">
import { IxInput } from '@siemens/ix-vue';
</script>

<template>
  <IxInput
    placeholder="Some placeholder"
    value="Some example text"
    disabled
  ></IxInput>
</template>
```

## Label

### React Examples

#### input-label.tsx
```tsx
import { IxInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxInput
      label="Some label"
      placeholder="Some placeholder"
      value="Some example text"
      helperText="Some helper text"
    ></IxInput>
  );
};
```

### Angular Examples

#### input-label.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './input-label.html',
})
export default class InputLabel {}
```

#### input-label.html
```html
<ix-input
  label='Some label'
  placeholder='Some placeholder'
  value='Some example text'
  helper-text='Some helper text'
></ix-input>
```

### Angular Standalone Examples

#### input-label.ts
```ts
import { Component } from '@angular/core';
import {
  IxInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxInput, IxTextValueAccessorDirective],
  templateUrl: './input-label.html',
})
export default class InputLabel {}
```

#### input-label.html
```html
<ix-input
  label="Some label"
  placeholder="Some placeholder"
  value="Some example text"
  helper-text="Some helper text"
></ix-input>
```

### Vue Examples

#### input-label.vue
```vue
<script setup lang="ts">
import { IxInput } from '@siemens/ix-vue';
</script>

<template>
  <IxInput
    label="Some label"
    placeholder="Some placeholder"
    value="Some example text"
    helper-text="Some helper text"
  ></IxInput>
</template>
```

## Pattern

### React Examples

#### input-pattern.tsx
```tsx
import { IxInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxInput
      helperText="Only characters a-d are allowed"
      allowedCharactersPattern="[a-d]"
      maxLength={4}
    ></IxInput>
  );
};
```

### Angular Examples

#### input-pattern.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './input-pattern.html',
})
export default class InputPattern {}
```

#### input-pattern.html
```html
<ix-input
  helper-text='Only characters a-d are allowed'
  allowed-characters-pattern='[a-d]'
  maxLength='4'
></ix-input>
```

### Angular Standalone Examples

#### input-pattern.ts
```ts
import { Component } from '@angular/core';
import {
  IxInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxInput, IxTextValueAccessorDirective],
  templateUrl: './input-pattern.html',
})
export default class InputPattern {}
```

#### input-pattern.html
```html
<ix-input
  helper-text="Only characters a-d are allowed"
  allowed-characters-pattern="[a-d]"
  maxLength="4"
></ix-input>
```

### Vue Examples

#### input-pattern.vue
```vue
<script setup lang="ts">
import { IxInput } from '@siemens/ix-vue';
</script>

<template>
  <IxInput
    helper-text="Only characters a-d are allowed"
    allowed-characters-pattern="[a-d]"
    :max-length="4"
  ></IxInput>
</template>
```

## Readonly

### React Examples

#### input-readonly.tsx
```tsx
import { IxInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxInput
      readonly
      label="Readonly"
      placeholder="Placeholder text..."
      value="Some text"
    ></IxInput>
  );
};
```

### Angular Examples

#### input-readonly.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './input-readonly.html',
})
export default class InputReadonly {}
```

#### input-readonly.html
```html
<ix-input
  placeholder='Some placeholder'
  value='Some example text'
  readonly
></ix-input>
```

### Angular Standalone Examples

#### input-readonly.ts
```ts
import { Component } from '@angular/core';
import {
  IxInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxInput, IxTextValueAccessorDirective],
  templateUrl: './input-readonly.html',
})
export default class InputReadonly {}
```

#### input-readonly.html
```html
<ix-input
  placeholder="Some placeholder"
  value="Some example text"
  readonly
></ix-input>
```

### Vue Examples

#### input-readonly.vue
```vue
<script setup lang="ts">
import { IxInput } from '@siemens/ix-vue';
</script>

<template>
  <IxInput
    readonly
    label="Readonly"
    placeholder="Placeholder text..."
    value="Some text"
  ></IxInput>
</template>
```

## Types

### React Examples

#### input-types.tsx
```tsx
import './input-types.scoped.css';

import { IxInput } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxInput type="text" label="Username" value="MaxMuster1"></IxInput>
      </div>

      <div>
        <IxInput
          type="email"
          label="Email"
          value="example@example.com"
        ></IxInput>
      </div>

      <div>
        <IxInput
          type="password"
          label="Password"
          placeholder="Enter your password"
          value="1234"
        ></IxInput>
      </div>

      <div>
        <IxInput
          type="tel"
          label="Telephone"
          placeholder="Enter your phone number"
          value="+49 123 456789"
        ></IxInput>
      </div>

      <div>
        <IxInput
          type="url"
          label="URL"
          placeholder="Enter your URL"
          value="https://ix.siemens.io"
        ></IxInput>
      </div>
    </>
  );
};
```

#### input-types.scoped.css
```css
ix-input {
  margin-bottom: 1rem;
  width: 11rem;
}
```

### Angular Examples

#### input-types.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './input-types.html',
  styleUrls: ['./input-types.css'],
})
export default class InputTypes {}
```

#### input-types.html
```html
<div>
  <ix-input
    type='text'
    label='Username'
    value='MaxMuster1'
  ></ix-input>
</div>

<div>
  <ix-input
    type='email'
    label='Email'
    value='example@example.com'
  ></ix-input>
</div>

<div>
  <ix-input
    type='password'
    label='Password'
    placeholder='Enter your password'
    value='1234'
  ></ix-input>
</div>

<div>
  <ix-input
    type='tel'
    label='Telephone'
    value='+49 123 456789'
  ></ix-input>
</div>

<div>
  <ix-input
    type='url'
    label='URL'
    placeholder='Enter your URL'
    value='https://ix.siemens.io'
  ></ix-input>
</div>
```

#### input-types.css
```css
ix-input {
  margin-bottom: 1rem;
  width: 11rem;
}
```

### Angular Standalone Examples

#### input-types.ts
```ts
import { Component } from '@angular/core';
import {
  IxInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxInput, IxTextValueAccessorDirective],
  templateUrl: './input-types.html',
  styleUrls: ['./input-types.css'],
})
export default class InputTypes {}
```

#### input-types.html
```html
<div>
  <ix-input type="text" label="Username" value="MaxMuster1"></ix-input>
</div>

<div>
  <ix-input type="email" label="Email" value="example@example.com"></ix-input>
</div>

<div>
  <ix-input
    type="password"
    label="Password"
    placeholder="Enter your password"
    value="1234"
  ></ix-input>
</div>

<div>
  <ix-input type="tel" label="Telephone" value="+49 123 456789"></ix-input>
</div>

<div>
  <ix-input
    type="url"
    label="URL"
    placeholder="Enter your URL"
    value="https://ix.siemens.io"
  ></ix-input>
</div>
```

#### input-types.css
```css
ix-input {
  margin-bottom: 1rem;
  width: 11rem;
}
```

### Vue Examples

#### input-types.vue
```vue
<script setup lang="ts">
import { IxInput } from '@siemens/ix-vue';
</script>

<style scoped src="./input-types.css"></style>

<template>
  <div>
    <IxInput type="text" label="Username" value="MaxMuster1"></IxInput>
  </div>

  <div>
    <IxInput type="email" label="Email" value="example@example.com"></IxInput>
  </div>

  <div>
    <IxInput
      type="password"
      label="Password"
      placeholder="Enter your password"
      value="1234"
    ></IxInput>
  </div>

  <div>
    <IxInput type="tel" label="Telephone" value="+49 123 456 789"></IxInput>
  </div>

  <div>
    <IxInput
      type="url"
      label="URL"
      placeholder="Enter your URL"
      value="http://ix.siemens.io"
    ></IxInput>
  </div>
</template>
```

#### input-types.css
```css
ix-input {
  margin-bottom: 1rem;
  width: 11rem;
}
```

## Validation

### React Examples

#### input-validation.tsx
```tsx
import { IxInput } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxInput
          label="Username"
          placeholder="Enter your Username"
          infoText="Info text"
          className="ix-info"
        ></IxInput>
      </div>

      <div>
        <IxInput
          label="Username"
          placeholder="Enter your Username"
          warningText="Warning text"
          className="ix-warning"
        ></IxInput>
      </div>

      <div>
        <IxInput
          label="Username"
          placeholder="Enter your Username"
          validText="Valid text"
          className="ix-valid"
        ></IxInput>
      </div>

      <div>
        <IxInput
          label="Username"
          placeholder="Enter your Username"
          invalidText="Invalid text"
          className="ix-invalid"
        ></IxInput>
      </div>
    </>
  );
};
```

### Angular Examples

#### input-validation.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './input-validation.html',
})
export default class InputValidation {}
```

#### input-validation.html
```html
<div>
  <ix-input
    label='Username'
    placeholder='Enter your Username'
    info-text='Info text'
    class='ix-info'
  ></ix-input>
</div>

<div>
  <ix-input
    label='Username'
    placeholder='Enter your Username'
    warning-text='Warning text'
    class='ix-warning'
  ></ix-input>
</div>

<div>
  <ix-input
    label='Username'
    placeholder='Enter your Username'
    valid-text='Valid text'
    class='ix-valid'
  ></ix-input>
</div>

<div>
  <ix-input
    label='Username'
    placeholder='Enter your Username'
    invalid-text='Invalid text'
    class='ix-invalid'
  ></ix-input>
</div>
```

### Angular Standalone Examples

#### input-validation.ts
```ts
import { Component } from '@angular/core';
import {
  IxInput,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxInput, IxTextValueAccessorDirective],
  templateUrl: './input-validation.html',
})
export default class InputValidation {}
```

#### input-validation.html
```html
<div>
  <ix-input
    label="Username"
    placeholder="Enter your Username"
    info-text="Info text"
    class="ix-info"
  ></ix-input>
</div>

<div>
  <ix-input
    label="Username"
    placeholder="Enter your Username"
    warning-text="Warning text"
    class="ix-warning"
  ></ix-input>
</div>

<div>
  <ix-input
    label="Username"
    placeholder="Enter your Username"
    valid-text="Valid text"
    class="ix-valid"
  ></ix-input>
</div>

<div>
  <ix-input
    label="Username"
    placeholder="Enter your Username"
    invalid-text="Invalid text"
    class="ix-invalid"
  ></ix-input>
</div>
```

### Vue Examples

#### input-validation.vue
```vue
<script setup lang="ts">
import { IxInput } from '@siemens/ix-vue';

</script>

<template>
  <div>
    <IxInput
      label="Username"
      placeholder="Enter your Username"
      info-text="Info text"
      class="ix-info"
    ></IxInput>
  </div>

  <div>
    <IxInput
      label="Username"
      placeholder="Enter your Username"
      warning-text="Warning text"
      class="ix-warning"
    ></IxInput>
  </div>

  <div>
    <IxInput
      label="Username"
      placeholder="Enter your Username"
      valid-text="Valid text"
      class="ix-valid"
    ></IxInput>
  </div>

  <div>
    <IxInput
      label="Username"
      placeholder="Enter your Username"
      invalid-text="Invalid text"
      class="ix-invalid"
    ></IxInput>
  </div>
</template>
```

## Slots

### React Examples

#### input-with-slots.tsx
```tsx
import { IxIcon, IxInput, IxTypography } from '@siemens/ix-react';
import { iconBulb } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxInput>
      <IxIcon name={iconBulb} slot="start" size="16"></IxIcon>
      <IxTypography slot="end">unit</IxTypography>
    </IxInput>
  );
};
```

### Angular Examples

#### input-with-slots.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './input-with-slots.html',
})
export default class InputWithSlots {}
```

#### input-with-slots.html
```html
<ix-input>
  <ix-icon name="bulb" slot="start" size="16"></ix-icon>
  <ix-typography slot="end">unit</ix-typography>
</ix-input>
```

### Angular Standalone Examples

#### input-with-slots.ts
```ts
import { Component } from '@angular/core';
import {
  IxInput,
  IxIcon,
  IxTypography,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxInput, IxIcon, IxTypography, IxTextValueAccessorDirective],
  templateUrl: './input-with-slots.html',
})
export default class InputWithSlots {}
```

#### input-with-slots.html
```html
<ix-input>
  <ix-icon name="bulb" slot="start" size="16"></ix-icon>
  <ix-typography slot="end">unit</ix-typography>
</ix-input>
```

### Vue Examples

#### input-with-slots.vue
```vue
<script setup lang="ts">
import { iconBulb } from '@siemens/ix-icons/icons';
import { IxInput, IxIcon, IxTypography } from '@siemens/ix-vue';
</script>

<template>
  <IxInput>
    <IxIcon :name="iconBulb" slot="start" size="16"></IxIcon>
    <IxTypography slot="end">unit</IxTypography>
  </IxInput>
</template>
```

## API for ix-input

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| allowedCharactersPattern | The allowed characters pattern for the text field. | allowed-characters-pattern | string \| undefined |  |
| disabled | Specifies whether the text field is disabled. | disabled | boolean | false |
| helperText | The helper text for the text field. | helper-text | string \| undefined |  |
| infoText | The info text for the text field. | info-text | string \| undefined |  |
| invalidText | The error text for the text field. | invalid-text | string \| undefined |  |
| label | The label for the text field. | label | string \| undefined |  |
| maxLength | The maximum length of the text field. | max-length | number \| undefined |  |
| minLength | The minimum length of the text field. | min-length | number \| undefined |  |
| name | The name of the text field. | name | string \| undefined |  |
| pattern | The pattern for the text field. | pattern | string \| undefined |  |
| placeholder | The placeholder text for the text field. | placeholder | string \| undefined |  |
| readonly | Specifies whether the text field is readonly. | readonly | boolean | false |
| required | Specifies whether the text field is required. | required | boolean | false |
| showTextAsTooltip | Specifies whether to show the text as a tooltip. | show-text-as-tooltip | boolean \| undefined |  |
| suppressSubmitOnEnter | If false, pressing Enter will submit the form (if inside a form). Set to true to suppress submit on Enter. | suppress-submit-on-enter | boolean | false |
| textAlignment | Text alignment within the input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input. | text-alignment | "end" \| "start" | 'start' |
| type | The type of the text field. Possible values are 'text', 'email', or 'password'. | type | "email" \| "password" \| "tel" \| "text" \| "url" | 'text' |
| validText | The valid text for the text field. | valid-text | string \| undefined |  |
| value | The value of the text field. | value | string | '' |
| warningText | The warning text for the text field. | warning-text | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| ixBlur | Event emitted when the text field loses focus. | ixBlur | void |
| ixChange | Event emitted when the text field loses focus and the value has changed. | ixChange | string |
| validityStateChange | Event emitted when the validity state of the text field changes. | validityStateChange | ValidityState |
| valueChange | Event emitted when the value of the text field changes. | valueChange | string |

### Slot

| Name | Description |
| --- | --- |
| end | { `Element will be displayed at the end of the input` } |
| start | { `Element will be displayed at the start of the input` } |
