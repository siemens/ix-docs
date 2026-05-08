# Checkbox - Code

> Code examples and API documentation for the ix-checkbox, ix-checkbox-group

# Checkbox - Code

Enclosing related checkboxes within a single checkbox group container ensures correct selection behavior, grouping and accessibility.

## Basic

### React Examples

#### form-checkbox.tsx
```tsx
import { IxCheckbox } from '@siemens/ix-react';

export default () => {
  return (
    <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
  );
};
```

### Angular Examples

#### form-checkbox.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: `./form-checkbox.html`,
})
export default class FormCheckbox {}
```

#### form-checkbox.html
```html
<ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
```

### Angular Standalone Examples

#### form-checkbox.ts
```ts
import { Component } from '@angular/core';
import {
  IxCheckbox,
  IxBooleanValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxCheckbox, IxBooleanValueAccessorDirective],
  templateUrl: `./form-checkbox.html`,
})
export default class FormCheckbox {}
```

#### form-checkbox.html
```html
<ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
```

### Vue Examples

#### form-checkbox.vue
```vue
<script setup lang="ts">
import { IxCheckbox } from '@siemens/ix-vue';
</script>

<template>
  <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
</template>
```

## Disabled

### React Examples

#### form-checkbox-disabled.tsx
```tsx
import { IxCheckbox } from '@siemens/ix-react';

export default () => {
  return (
    <IxCheckbox label="I agree everything" name="agreed" disabled></IxCheckbox>
  );
};
```

### Angular Examples

#### form-checkbox-disabled.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: `./form-checkbox-disabled.html`,
})
export default class FormCheckboxDisabled {}
```

#### form-checkbox-disabled.html
```html
<ix-checkbox label="I agree everything" name="agreed" disabled></ix-checkbox>
```

### Angular Standalone Examples

#### form-checkbox-disabled.ts
```ts
import { Component } from '@angular/core';
import {
  IxCheckbox,
  IxBooleanValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxCheckbox, IxBooleanValueAccessorDirective],
  templateUrl: `./form-checkbox-disabled.html`,
})
export default class FormCheckboxDisabled {}
```

#### form-checkbox-disabled.html
```html
<ix-checkbox label="I agree everything" name="agreed" disabled></ix-checkbox>
```

### Vue Examples

#### form-checkbox-disabled.vue
```vue
<script setup lang='ts'>
import { IxCheckbox } from '@siemens/ix-vue';
</script>

<template>
  <IxCheckbox label="I agree everything" name="agreed" disabled></IxCheckbox>
</template>
```

## Group

### React Examples

#### form-checkbox-group.tsx
```tsx
import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-react';

export default () => {
  return (
    <IxCheckboxGroup label="Terms of something">
      <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
      <IxCheckbox label="I agree with most of it" name="most"></IxCheckbox>
    </IxCheckboxGroup>
  );
};
```

### Angular Examples

#### form-checkbox-group.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: `./form-checkbox-group.html`,
})
export default class FormCheckboxGroup {}
```

#### form-checkbox-group.html
```html
<ix-checkbox-group label="Terms of something">
  <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
  <ix-checkbox label="I agree with most of it" name="most"></ix-checkbox>
</ix-checkbox-group>
```

### Angular Standalone Examples

#### form-checkbox-group.ts
```ts
import { Component } from '@angular/core';
import {
  IxCheckboxGroup,
  IxCheckbox,
  IxBooleanValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxCheckboxGroup, IxCheckbox, IxBooleanValueAccessorDirective],
  templateUrl: `./form-checkbox-group.html`,
})
export default class FormCheckboxGroup {}
```

#### form-checkbox-group.html
```html
<ix-checkbox-group label="Terms of something">
  <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
  <ix-checkbox label="I agree with most of it" name="most"></ix-checkbox>
</ix-checkbox-group>
```

### Vue Examples

#### form-checkbox-group.vue
```vue
<script setup lang='ts'>
import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-vue';
</script>

<template>
  <IxCheckboxGroup label="Terms of something">
    <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
    <IxCheckbox label="I agree with most of it" name="most"></IxCheckbox>
  </IxCheckboxGroup>
</template>
```

## Indeterminate group

### React Examples

#### form-checkbox-group-indeterminate.tsx
```tsx
import { IxCheckboxCustomEvent } from '@siemens/ix';
import './form-checkbox-group-indeterminate.scoped.css';

import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-react';
import { useEffect, useState } from 'react';

export default () => {
  const [parentCheckboxState, setParentCheckboxState] = useState({
    indeterminate: false,
    checked: false,
    label: 'Option group',
  });
  const [childCheckboxesState, setChildCheckboxesState] = useState([
    { checked: true, label: 'Sub option one' },
    { checked: true, label: 'Another sub option' },
    { checked: false, label: 'Another sub option' },
  ]);

  useEffect(() => {
    if (childCheckboxesState.every((cb) => cb.checked)) {
      setParentCheckboxState({
        ...parentCheckboxState,
        indeterminate: false,
        checked: true,
      });
    } else if (childCheckboxesState.some((cb) => cb.checked)) {
      setParentCheckboxState({
        ...parentCheckboxState,
        indeterminate: true,
        checked: false,
      });
    } else {
      setParentCheckboxState({
        ...parentCheckboxState,
        indeterminate: false,
        checked: false,
      });
    }
  }, [childCheckboxesState]);

  function parentCheckedChange(e: IxCheckboxCustomEvent<boolean>) {
    setParentCheckboxState({
      ...parentCheckboxState,
      checked: e.target.checked,
    });
    setChildCheckboxesState(
      childCheckboxesState.map((cb) => {
        return { ...cb, checked: e.target.checked };
      })
    );
  }

  function checkedChange(e: IxCheckboxCustomEvent<boolean>, idx: number) {
    setChildCheckboxesState(
      childCheckboxesState.map((cb, index) => {
        if (idx === index) {
          return { ...cb, checked: e.target.checked };
        } else {
          return cb;
        }
      })
    );
  }

  return (
    <IxCheckboxGroup>
      <IxCheckbox
        indeterminate={parentCheckboxState.indeterminate}
        checked={parentCheckboxState.checked || false}
        onCheckedChange={parentCheckedChange}
        label="Option group"
      ></IxCheckbox>
      {childCheckboxesState.map((cb, index) => {
        return (
          <IxCheckbox
            checked={cb.checked || false}
            onCheckedChange={(e) => checkedChange(e, index)}
            label="Sub option one"
            className="cb-padding"
            key={cb.label}
          ></IxCheckbox>
        );
      })}
    </IxCheckboxGroup>
  );
};
```

#### form-checkbox-group-indeterminate.scoped.css
```css
.cb-padding {
  padding-left: 1rem;
}
```

### Angular Examples

#### form-checkbox-group-indeterminate.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './form-checkbox-group-indeterminate.html',
  styleUrls: ['./form-checkbox-group-indeterminate.css'],
})
export default class FormCheckboxGroupIndeterminate {
  parentCheckbox = {
    indeterminate: true,
    checked: false,
    label: 'Option group',
  };
  childCheckboxes = [
    { checked: true, label: 'Sub option one' },
    { checked: true, label: 'Another sub option' },
    { checked: false, label: 'Another sub option' },
  ];

  parentCheckedChange() {
    this.parentCheckbox.indeterminate = false;
    this.childCheckboxes.forEach((cb) => {
      cb.checked = this.parentCheckbox.checked;
    });
  }

  checkedChange() {
    const checkedCount = this.childCheckboxes.filter((cb) => cb.checked).length;
    const totalCount = this.childCheckboxes.length;
    this.parentCheckbox.checked = checkedCount === totalCount;
    this.parentCheckbox.indeterminate = checkedCount > 0 && checkedCount < totalCount;
  }
}
```

#### form-checkbox-group-indeterminate.html
```html
<ix-checkbox-group>
  <ix-checkbox
    [indeterminate]="parentCheckbox.indeterminate"
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

#### form-checkbox-group-indeterminate.css
```css
.cb-padding {
  padding-left: 1rem;
}
```

### Angular Standalone Examples

#### form-checkbox-group-indeterminate.ts
```ts
import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

import { FormsModule } from '@angular/forms';

import {
  IxCheckboxGroup,
  IxCheckbox,
  IxBooleanValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxCheckboxGroup,
    IxCheckbox,
    IxBooleanValueAccessorDirective,
    NgForOf,
    FormsModule,
  ],
  templateUrl: './form-checkbox-group-indeterminate.html',
  styleUrls: ['./form-checkbox-group-indeterminate.css'],
})
export default class FormCheckboxGroupIndeterminate {
  parentCheckbox = {
    indeterminate: true,
    checked: false,
    label: 'Option group',
  };
  childCheckboxes = [
    { checked: true, label: 'Sub option one' },
    { checked: true, label: 'Another sub option' },
    { checked: false, label: 'Another sub option' },
  ];

  parentCheckedChange() {
    this.parentCheckbox.indeterminate = false;
    this.childCheckboxes.forEach((cb) => {
      cb.checked = this.parentCheckbox.checked;
    });
  }

  checkedChange() {
    const checkedCount = this.childCheckboxes.filter((cb) => cb.checked).length;
    const totalCount = this.childCheckboxes.length;
    this.parentCheckbox.checked = checkedCount === totalCount;
    this.parentCheckbox.indeterminate = checkedCount > 0 && checkedCount < totalCount;
  }
}
```

#### form-checkbox-group-indeterminate.html
```html
<ix-checkbox-group>
  <ix-checkbox
    [indeterminate]="parentCheckbox.indeterminate"
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

#### form-checkbox-group-indeterminate.css
```css
.cb-padding {
  padding-left: 1rem;
}
```

### Vue Examples

#### form-checkbox-group-indeterminate.vue
```vue
<script setup lang="ts">
import { IxCheckboxCustomEvent } from '@siemens/ix';
import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-vue';
import { reactive, watch } from 'vue';

const parentCheckboxState = reactive({
  indeterminate: true,
  checked: false,
  label: 'Option group',
});

const childCheckboxesState = reactive([
  { checked: true, label: 'Sub option one' },
  { checked: true, label: 'Another sub option' },
  { checked: false, label: 'Another sub option' },
]);

const parentCheckedChange = (event: IxCheckboxCustomEvent<boolean>) => {
  parentCheckboxState.checked = event.target.checked;
  childCheckboxesState.forEach((cb) => {
    cb.checked = event.target.checked;
  });
};

const checkedChange = (event: IxCheckboxCustomEvent<boolean>, idx: number) => {
  childCheckboxesState.forEach((cb, index) => {
    if (idx === index) {
      cb.checked = event.target.checked;
    }
  });
};

watch(childCheckboxesState, () => {
  if (childCheckboxesState.every((cb) => cb.checked)) {
    parentCheckboxState.indeterminate = false;
    parentCheckboxState.checked = true;
  } else if (childCheckboxesState.some((cb) => cb.checked)) {
    parentCheckboxState.indeterminate = true;
    parentCheckboxState.checked = false;
  } else {
    parentCheckboxState.indeterminate = false;
    parentCheckboxState.checked = false;
  }
});
</script>

<style scoped src="./form-checkbox-group-indeterminate.css"></style>

<template>
  <ix-checkbox-group>
    <ix-checkbox
      :label="parentCheckboxState.label"
      :indeterminate="parentCheckboxState.indeterminate"
      v-model="parentCheckboxState.checked"
      @checkedChange="parentCheckedChange($event)"
    >
    </ix-checkbox>
    <ix-checkbox
      v-for="(cb, index) in childCheckboxesState"
      :label="cb.label"
      v-model="cb.checked"
      @checkedChange="checkedChange($event, index)"
      class="cb-padding"
    >
    </ix-checkbox>
  </ix-checkbox-group>
</template>
```

#### form-checkbox-group-indeterminate.css
```css
.cb-padding {
  padding-left: 1rem;
}
```

## Validation

### React Examples

#### form-checkbox-validation.tsx
```tsx
import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-react';

const wrapperStyle = {
  marginBottom: '1rem',
};

export default () => {
  return (
    <>
      <div style={wrapperStyle}>
        <IxCheckboxGroup label="Terms of something" infoText="Info text">
          <IxCheckbox
            label="I agree everything"
            name="agreed"
            className="ix-info"
          ></IxCheckbox>
        </IxCheckboxGroup>
      </div>

      <div style={wrapperStyle}>
        <IxCheckboxGroup label="Terms of something" warningText="Warning text">
          <IxCheckbox
            label="I agree everything"
            name="agreed"
            className="ix-warning"
          ></IxCheckbox>
          <IxCheckbox
            label="I disagree everything"
            name="agreed"
            className="ix-warning"
          ></IxCheckbox>
        </IxCheckboxGroup>
      </div>

      <div style={wrapperStyle}>
        <IxCheckboxGroup label="Terms of something" invalidText="Invalid text">
          <IxCheckbox
            label="I agree everything"
            name="agreed"
            className="ix-invalid"
          ></IxCheckbox>
          <IxCheckbox
            label="I disagree everything"
            name="agreed"
            className="ix-invalid"
          ></IxCheckbox>
        </IxCheckboxGroup>
      </div>

      <div style={wrapperStyle}>
        <IxCheckboxGroup label="Terms of something" validText="Valid text">
          <IxCheckbox
            label="I agree everything"
            name="agreed"
            className="ix-valid"
          ></IxCheckbox>
          <IxCheckbox
            label="I disagree everything"
            name="agreed"
            className="ix-valid"
          ></IxCheckbox>
        </IxCheckboxGroup>
      </div>
    </>
  );
};
```

### Angular Examples

#### form-checkbox-validation.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: `./form-checkbox-validation.html`,
})
export default class FormCheckboxValidation {}
```

#### form-checkbox-validation.html
```html
<style>
  .checkbox-group-wrapper {
    margin-bottom: 1rem;
  }
</style>

<div class="checkbox-group-wrapper">
  <ix-checkbox-group label="Terms of something" info-text="Info text">
    <ix-checkbox
      label="I agree everything"
      name="agreed"
      class="ix-info"
    ></ix-checkbox>
  </ix-checkbox-group>
</div>

<div class="checkbox-group-wrapper">
  <ix-checkbox-group label="Terms of something" warning-text="Warning text">
    <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
    <ix-checkbox
      label="I disagree everything"
      name="agreed"
      class="ix-warning"
    ></ix-checkbox>
  </ix-checkbox-group>
</div>

<div class="checkbox-group-wrapper">
  <ix-checkbox-group label="Terms of something" invalid-text="Invalid text">
    <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
    <ix-checkbox
      label="I disagree everything"
      name="agreed"
      class="ix-invalid"
    ></ix-checkbox>
  </ix-checkbox-group>
</div>

<div class="checkbox-group-wrapper">
  <ix-checkbox-group label="Terms of something" valid-text="Valid text">
    <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
    <ix-checkbox
      label="I disagree everything"
      name="agreed"
      class="ix-valid"
    ></ix-checkbox>
  </ix-checkbox-group>
</div>
```

### Angular Standalone Examples

#### form-checkbox-validation.ts
```ts
import { Component } from '@angular/core';
import {
  IxCheckboxGroup,
  IxCheckbox,
  IxBooleanValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxCheckboxGroup, IxCheckbox, IxBooleanValueAccessorDirective],
  templateUrl: `./form-checkbox-validation.html`,
})
export default class FormCheckboxValidation {}
```

#### form-checkbox-validation.html
```html
<style>
  .checkbox-group-wrapper {
    margin-bottom: 1rem;
  }
</style>

<div class="checkbox-group-wrapper">
  <ix-checkbox-group label="Terms of something" info-text="Info text">
    <ix-checkbox
      label="I agree everything"
      name="agreed"
      class="ix-info"
    ></ix-checkbox>
  </ix-checkbox-group>
</div>

<div class="checkbox-group-wrapper">
  <ix-checkbox-group label="Terms of something" warning-text="Warning text">
    <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
    <ix-checkbox
      label="I disagree everything"
      name="agreed"
      class="ix-warning"
    ></ix-checkbox>
  </ix-checkbox-group>
</div>

<div class="checkbox-group-wrapper">
  <ix-checkbox-group label="Terms of something" invalid-text="Invalid text">
    <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
    <ix-checkbox
      label="I disagree everything"
      name="agreed"
      class="ix-invalid"
    ></ix-checkbox>
  </ix-checkbox-group>
</div>

<div class="checkbox-group-wrapper">
  <ix-checkbox-group label="Terms of something" valid-text="Valid text">
    <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
    <ix-checkbox
      label="I disagree everything"
      name="agreed"
      class="ix-valid"
    ></ix-checkbox>
  </ix-checkbox-group>
</div>
```

### Vue Examples

#### form-checkbox-validation.vue
```vue
<script setup lang="ts">
import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-vue';
</script>

<template>
  <div class="checkbox-group-wrapper">
    <IxCheckboxGroup label="Terms of something" info-text="Info text">
      <IxCheckbox
        label="I agree everything"
        name="agreed"
        class="ix-info"
      ></IxCheckbox>
    </IxCheckboxGroup>
  </div>

  <div class="checkbox-group-wrapper">
    <IxCheckboxGroup label="Terms of something" warning-text="Warning text">
      <IxCheckbox
        label="I agree everything"
        name="agreed"
        class="ix-warning"
      ></IxCheckbox>
      <IxCheckbox
        label="I disagree everything"
        name="agreed"
        class="ix-warning"
      ></IxCheckbox>
    </IxCheckboxGroup>
  </div>

  <div class="checkbox-group-wrapper">
    <IxCheckboxGroup label="Terms of something" invalid-text="Invalid text">
      <IxCheckbox
        label="I agree everything"
        name="agreed"
        class="ix-invalid"
      ></IxCheckbox>
      <IxCheckbox
        label="I disagree everything"
        name="agreed"
        class="ix-invalid"
      ></IxCheckbox>
    </IxCheckboxGroup>
  </div>

  <div class="checkbox-group-wrapper">
    <IxCheckboxGroup label="Terms of something" valid-text="Valid text">
      <IxCheckbox
        label="I agree everything"
        name="agreed"
        class="ix-valid"
      ></IxCheckbox>
      <IxCheckbox
        label="I disagree everything"
        name="agreed"
        class="ix-valid"
      ></IxCheckbox>
    </IxCheckboxGroup>
  </div>
</template>

<style scoped>
.checkbox-group-wrapper {
  margin-bottom: 1rem;
}
</style>
```

## API for ix-checkbox

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| checked | Checked state of the checkbox component | checked | boolean | false |
| disabled | Disabled state of the checkbox component | disabled | boolean | false |
| indeterminate | Indeterminate state of the checkbox component | indeterminate | boolean | false |
| label | Label for the checkbox component | label | string \| undefined |  |
| name | Name of the checkbox component | name | string \| undefined |  |
| required | Required state of the checkbox component. If true, checkbox needs to be checked to be valid | required | boolean | false |
| value | Value of the checkbox component | value | string | 'on' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| checkedChange | Event emitted when the checked state of the checkbox changes | checkedChange | boolean |
| ixBlur | Event emitted when the checkbox is blurred | ixBlur | void |
| valueChange | Event emitted when the value of the checkbox changes | valueChange | string |

## API for ix-checkbox-group

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| direction | Alignment of the checkboxes in the group | direction | "column" \| "row" | 'column' |
| helperText | Optional helper text displayed below the checkbox group | helper-text | string \| undefined |  |
| infoText | Info text for the checkbox group | info-text | string \| undefined |  |
| invalidText | Error text for the checkbox group | invalid-text | string \| undefined |  |
| label | Label for the checkbox group | label | string \| undefined |  |
| showTextAsTooltip | Show helper, info, warning, error and valid text as tooltip | show-text-as-tooltip | boolean | false |
| validText | Valid text for the checkbox group | valid-text | string \| undefined |  |
| warningText | Warning text for the checkbox group | warning-text | string \| undefined |  |
