# Select - Code

> Code examples and API documentation for the ix-select, ix-select-item

# Select - Code

## Basic

### React Examples

#### select.tsx
```tsx
import { IxSelect, IxSelectItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxSelect value="1">
      <IxSelectItem label="Item 1" value="1"></IxSelectItem>
      <IxSelectItem label="Item 2" value="2"></IxSelectItem>
      <IxSelectItem label="Item 3" value="3"></IxSelectItem>
      <IxSelectItem label="Item 4" value="4"></IxSelectItem>
    </IxSelect>
  );
};
```

### Angular Examples

#### select.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-select [value]="value">
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>
  `,
})
export default class Select {
  value = '1';
}
```

### Angular Standalone Examples

#### select.ts
```ts
import { Component } from '@angular/core';
import {
  IxSelect,
  IxSelectItem,
  IxSelectValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxSelect, IxSelectItem, IxSelectValueAccessorDirective],
  template: `
    <ix-select [value]="value">
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>
  `,
})
export default class Select {
  value = '1';
}
```

### Vue Examples

#### select.vue
```vue
<script setup lang="ts">
import { IxSelect, IxSelectItem } from '@siemens/ix-vue';
</script>

<template>
  <IxSelect value="1">
    <IxSelectItem label="Item 1" value="1"></IxSelectItem>
    <IxSelectItem label="Item 2" value="2"></IxSelectItem>
    <IxSelectItem label="Item 3" value="3"></IxSelectItem>
    <IxSelectItem label="Item 4" value="4"></IxSelectItem>
  </IxSelect>
</template>
```

## Editable

### React Examples

#### select-editable.tsx
```tsx
import { IxSelect, IxSelectItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxSelect value={'1'} editable>
      <IxSelectItem label="Item 1" value="1"></IxSelectItem>
      <IxSelectItem label="Item 2" value="2"></IxSelectItem>
      <IxSelectItem label="Item 3" value="3"></IxSelectItem>
      <IxSelectItem label="Item 4" value="4"></IxSelectItem>
    </IxSelect>
  );
};
```

### Angular Examples

#### select-editable.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-select editable [value]="value">
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>
  `,
})
export default class SelectEditable {
  value = '1';
}
```

### Angular Standalone Examples

#### select-editable.ts
```ts
import { Component } from '@angular/core';
import {
  IxSelect,
  IxSelectItem,
  IxSelectValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxSelect, IxSelectItem, IxSelectValueAccessorDirective],
  template: `
    <ix-select editable [value]="value">
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>
  `,
})
export default class SelectEditable {
  value = '1';
}
```

### Vue Examples

#### select-editable.vue
```vue
<script setup lang="ts">
import { IxSelect, IxSelectItem } from '@siemens/ix-vue';
</script>

<template>
  <IxSelect value="1" editable>
    <IxSelectItem label="Item 1" value="1"></IxSelectItem>
    <IxSelectItem label="Item 2" value="2"></IxSelectItem>
    <IxSelectItem label="Item 3" value="3"></IxSelectItem>
    <IxSelectItem label="Item 4" value="4"></IxSelectItem>
  </IxSelect>
</template>
```

## Multiselect

### React Examples

#### select-multiple.tsx
```tsx
import { IxSelect, IxSelectItem } from '@siemens/ix-react';
import { useLayoutEffect, useState } from 'react';

export default () => {
  const [selection, setSelection] = useState<string[]>([]);

  useLayoutEffect(() => {
    setSelection(['1', '3']);
  }, [setSelection]);

  return (
    <IxSelect mode="multiple" value={selection}>
      <IxSelectItem label="Item 1" value="1"></IxSelectItem>
      <IxSelectItem label="Item 2" value="2"></IxSelectItem>
      <IxSelectItem label="Item 3" value="3"></IxSelectItem>
      <IxSelectItem label="Item 4" value="4"></IxSelectItem>
    </IxSelect>
  );
};
```

### Angular Examples

#### select-multiple.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-select mode="multiple" [value]="value">
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>
  `,
})
export default class SelectMultiple {
  value = ['1', '3'];
}
```

### Angular Standalone Examples

#### select-multiple.ts
```ts
import { Component } from '@angular/core';
import {
  IxSelect,
  IxSelectItem,
  IxSelectValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxSelect, IxSelectItem, IxSelectValueAccessorDirective],
  template: `
    <ix-select mode="multiple" [value]="value">
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>
  `,
})
export default class SelectMultiple {
  value = ['1', '3'];
}
```

### Vue Examples

#### select-multiple.vue
```vue
<script setup lang="ts">
import { IxSelect, IxSelectItem } from '@siemens/ix-vue';
import { nextTick, onMounted, ref } from 'vue';

const selection = ref<string[]>([]);

onMounted(() => nextTick(() => (selection.value = ['1', '3'])));
</script>

<template>
  <IxSelect mode="multiple" :value="selection">
    <IxSelectItem label="Item 1" value="1"></IxSelectItem>
    <IxSelectItem label="Item 2" value="2"></IxSelectItem>
    <IxSelectItem label="Item 3" value="3"></IxSelectItem>
    <IxSelectItem label="Item 4" value="4"></IxSelectItem>
  </IxSelect>
</template>
```

## Validation

Example is supported since version 2.6.0

### React Examples

#### select-validation.tsx
```tsx
import { IxSelect, IxSelectItem } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxSelect
          label="Framework options"
          name="framework-option"
          infoText="We will show examples based on your selection."
          className="ix-info"
        >
          <IxSelectItem value="angular" label="Angular"></IxSelectItem>
          <IxSelectItem value="react" label="React"></IxSelectItem>
          <IxSelectItem value="vue" label="Vue"></IxSelectItem>
        </IxSelect>
      </div>
      <div>
        <IxSelect
          label="Framework options"
          name="framework-option"
          warningText="Selected Framework is partly supported."
          className="ix-warning"
          value="blazor"
        >
          <IxSelectItem value="blazor" label="Blazor"></IxSelectItem>
          <IxSelectItem value="nextjs" label="NextJS"></IxSelectItem>
        </IxSelect>
      </div>
      <div>
        <IxSelect
          label="Framework options"
          name="framework-option"
          validText="Selected Framework is fully supported."
          className="ix-valid"
          value="angular"
        >
          <IxSelectItem value="angular" label="Angular"></IxSelectItem>
          <IxSelectItem value="react" label="React"></IxSelectItem>
          <IxSelectItem value="vue" label="Vue"></IxSelectItem>
        </IxSelect>
      </div>
      <div>
        <IxSelect
          label="Framework options"
          name="framework-option"
          invalidText="Selected Framework is not supported."
          className="ix-invalid"
          value="svelte"
        >
          <IxSelectItem value="svelte" label="Svelte"></IxSelectItem>
          <IxSelectItem value="solid" label="Solid"></IxSelectItem>
        </IxSelect>
      </div>
    </>
  );
};
```

### Angular Examples

#### select-validation.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './select-validation.html',
})
export default class SelectValidation {}
```

#### select-validation.html
```html
<div>
  <ix-select
    label='Framework options'
    name='framework-option'
    info-text='We will show examples based on your selection.'
    class='ix-info'
  >
    <ix-select-item value='angular' label='Angular'></ix-select-item>
    <ix-select-item value='react' label='React'></ix-select-item>
    <ix-select-item value='vue' label='Vue'></ix-select-item>
  </ix-select>
</div>
<div>
  <ix-select
    label='Framework options'
    name='framework-option'
    warning-text='Selected Framework is partly supported.'
    class='ix-warning'
    value='blazor'
  >
    <ix-select-item value='blazor' label='Blazor'></ix-select-item>
    <ix-select-item value='nextjs' label='NextJS'></ix-select-item>
  </ix-select>
</div>
<div>
  <ix-select
    label='Framework options'
    name='framework-option'
    valid-text='Selected Framework is fully supported.'
    class='ix-valid'
    value='angular'
  >
    <ix-select-item value='angular' label='Angular'></ix-select-item>
    <ix-select-item value='react' label='React'></ix-select-item>
    <ix-select-item value='vue' label='Vue'></ix-select-item>
  </ix-select>
</div>
<div>
  <ix-select
    label='Framework options'
    name='framework-option'
    invalid-text='Selected Framework is not supported.'
    class='ix-invalid'
    value='svelte'
  >
    <ix-select-item value='svelte' label='Svelte'></ix-select-item>
    <ix-select-item value='solid' label='Solid'></ix-select-item>
  </ix-select>
</div>
```

### Angular Standalone Examples

#### select-validation.ts
```ts
import { Component } from '@angular/core';
import {
  IxSelect,
  IxSelectItem,
  IxSelectValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxSelect, IxSelectItem, IxSelectValueAccessorDirective],
  templateUrl: './select-validation.html',
})
export default class SelectValidation {}
```

#### select-validation.html
```html
<div>
  <ix-select
    label="Framework options"
    name="framework-option"
    info-text="We will show examples based on your selection."
    class="ix-info"
  >
    <ix-select-item value="angular" label="Angular"></ix-select-item>
    <ix-select-item value="react" label="React"></ix-select-item>
    <ix-select-item value="vue" label="Vue"></ix-select-item>
  </ix-select>
</div>
<div>
  <ix-select
    label="Framework options"
    name="framework-option"
    warning-text="Selected Framework is partly supported."
    class="ix-warning"
    value="blazor"
  >
    <ix-select-item value="blazor" label="Blazor"></ix-select-item>
    <ix-select-item value="nextjs" label="NextJS"></ix-select-item>
  </ix-select>
</div>
<div>
  <ix-select
    label="Framework options"
    name="framework-option"
    valid-text="Selected Framework is fully supported."
    class="ix-valid"
    value="angular"
  >
    <ix-select-item value="angular" label="Angular"></ix-select-item>
    <ix-select-item value="react" label="React"></ix-select-item>
    <ix-select-item value="vue" label="Vue"></ix-select-item>
  </ix-select>
</div>
<div>
  <ix-select
    label="Framework options"
    name="framework-option"
    invalid-text="Selected Framework is not supported."
    class="ix-invalid"
    value="svelte"
  >
    <ix-select-item value="svelte" label="Svelte"></ix-select-item>
    <ix-select-item value="solid" label="Solid"></ix-select-item>
  </ix-select>
</div>
```

### Vue Examples

#### select-validation.vue
```vue
<script setup lang="ts">
import { IxSelect, IxSelectItem } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxSelect
      label='Framework options'
      name='framework-option'
      info-text='We will show examples based on your selection.'
      class='ix-info'
    >
      <IxSelectItem value='angular' label='Angular'></IxSelectItem>
      <IxSelectItem value='react' label='React'></IxSelectItem>
      <IxSelectItem value='vue' label='Vue'></IxSelectItem>
    </IxSelect>
  </div>
  <div>
    <IxSelect
      label='Framework options'
      name='framework-option'
      warning-text='Selected Framework is partly supported.'
      class='ix-warning'
      value='blazor'
    >
      <IxSelectItem value='blazor' label='Blazor'></IxSelectItem>
      <IxSelectItem value='nextjs' label='NextJS'></IxSelectItem>
    </IxSelect>
  </div>
  <div>
    <IxSelect
      label='Framework options'
      name='framework-option'
      valid-text='Selected Framework is fully supported.'
      class='ix-valid'
      value='angular'
    >
      <IxSelectItem value='angular' label='Angular'></IxSelectItem>
      <IxSelectItem value='react' label='React'></IxSelectItem>
      <IxSelectItem value='vue' label='Vue'></IxSelectItem>
    </IxSelect>
  </div>
  <div>
    <IxSelect
      label='Framework options'
      name='framework-option'
      invalid-text='Selected Framework is not supported.'
      class='ix-invalid'
      value='svelte'
    >
      <IxSelectItem value='svelte' label='Svelte'></IxSelectItem>
      <IxSelectItem value='solid' label='Solid'></IxSelectItem>
    </IxSelect>
  </div>
</template>
```

## API for ix-select

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| allowClear | Show clear button | allow-clear | boolean | false |
| ariaLabelChevronDownIconButton | ARIA label for the chevron down icon button Will be set as aria-label on the nested HTML button element | aria-label-chevron-down-icon-button | string \| undefined | 'Open select dropdown' |
| ariaLabelClearIconButton | ARIA label for the clear icon button Will be set as aria-label on the nested HTML button element | aria-label-clear-icon-button | string \| undefined |  |
| collapseMultipleSelection | Show "all" chip when all items are selected in multiple mode | collapse-multiple-selection | boolean | false |
| disabled | If true the select will be in disabled state | disabled | boolean | false |
| dropdownMaxWidth | The maximum width of the dropdown element with value and unit (e.g. "200px" or "12.5rem"). By default the maximum width of the dropdown element is set to 100%. | dropdown-max-width | string \| undefined |  |
| dropdownWidth | The width of the dropdown element with value and unit (e.g. "200px" or "12.5rem"). | dropdown-width | string \| undefined |  |
| editable | Select is extendable | editable | boolean | false |
| enableTopLayer | Enable Popover API rendering for dropdown. | enable-top-layer | boolean | false |
| helperText | Helper text for the select component | helper-text | string \| undefined |  |
| hideListHeader | Hide list header | hide-list-header | boolean | false |
| i18nAllSelected | Chip label for all selected items in multiple mode. | i18n-all-selected | string | 'All' |
| i18nNoMatches | Information inside of dropdown if no items where found with current filter text | i18n-no-matches | string | 'No matches' |
| i18nPlaceholder | Input field placeholder | i18n-placeholder | string | 'Select an option' |
| i18nPlaceholderEditable | Input field placeholder for editable select | i18n-placeholder-editable | string | 'Type of select option' |
| i18nSelectListHeader | Select list header | i18n-select-list-header | string | 'Select an option' |
| infoText | Info text for the select component | info-text | string \| undefined |  |
| invalidText | Error text for the select component | invalid-text | string \| undefined |  |
| label | Label for the select component | label | string \| undefined |  |
| mode | Selection mode | mode | "multiple" \| "single" | 'single' |
| name | A string that represents the element's name attribute, containing a name that identifies the element when submitting the form. | name | string \| undefined |  |
| readonly | If true the select will be in readonly mode | readonly | boolean | false |
| required | A Boolean attribute indicating that an option with a non-empty string value must be selected | required | boolean | false |
| showTextAsTooltip | Show helper, error, info, warning text as tooltip | show-text-as-tooltip | boolean \| undefined |  |
| validText | Valid text for the select component | valid-text | string \| undefined |  |
| value | Current selected value. This corresponds to the value property of ix-select-items | value | string \| string[] | '' |
| warningText | Warning text for the select component | warning-text | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| addItem | Item added to selection | addItem | string |
| inputChange | Event dispatched whenever the text input changes. | inputChange | string |
| ixBlur | Blur input | ixBlur | void |
| valueChange | Value changed | valueChange | string \| string[] |

## API for ix-select-item

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| label | Displayed name of the item | label | string \| undefined |  |
| selected | Flag indicating whether the item is selected | selected | boolean | false |
| value | The value of the item. Important: The select component uses string values to handle selection and will call toString() on this value. Therefor a string should be passed to value to prevent unexpected behavior. | value | string |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| itemClick | Item clicked | itemClick | string |
