# Key value list - Code

> Code examples and API documentation for the ix-key-value-list

# Key value list - Code

## Basic

### React Examples

#### key-value-list.tsx
```tsx
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValueList>
      <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
      <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
      <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
    </IxKeyValueList>
  );
};
```

### Angular Examples

#### key-value-list.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-key-value-list>
      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>
    </ix-key-value-list>
  `,
})
export default class KeyValueList {}
```

### Angular Standalone Examples

#### key-value-list.ts
```ts
import { Component } from '@angular/core';
import { IxKeyValueList, IxKeyValue } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxKeyValueList, IxKeyValue],
  template: `
    <ix-key-value-list>
      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>
    </ix-key-value-list>
  `,
})
export default class KeyValueList {}
```

### Vue Examples

#### key-value-list.vue
```vue
<script setup lang="ts">
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-vue';
</script>

<template>
  <IxKeyValueList>
    <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
    <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
    <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
  </IxKeyValueList>
</template>
```

## With custom value

### React Examples

#### key-value-list-with-custom-value.tsx
```tsx
import './key-value-list-with-custom-value.scoped.css';
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValueList>
      <IxKeyValue label="Label" labelPosition="left">
        <input
          className="ix-form-control"
          placeholder="Enter text here"
          type="text"
          slot="custom-value"
        />
      </IxKeyValue>
      <IxKeyValue label="Label" labelPosition="left">
        <input
          className="ix-form-control"
          placeholder="Enter text here"
          type="text"
          slot="custom-value"
        />
      </IxKeyValue>
      <IxKeyValue label="Label" labelPosition="left">
        <input
          className="ix-form-control"
          placeholder="Enter text here"
          type="text"
          slot="custom-value"
        />
      </IxKeyValue>
    </IxKeyValueList>
  );
};
```

#### key-value-list-with-custom-value.scoped.css
```css
.ix-form-control {
  width: 100% !important;
}
```

### Angular Examples

#### key-value-list-with-custom-value.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-key-value-list>
      <ix-key-value label="Label" labelPosition="left">
        <input
          class="ix-form-control"
          placeholder="Enter text here"
          type="text"
          slot="custom-value"
        />
      </ix-key-value>

      <ix-key-value label="Label" labelPosition="left">
        <input
          class="ix-form-control"
          placeholder="Enter text here"
          type="text"
          slot="custom-value"
        />
      </ix-key-value>

      <ix-key-value label="Label" labelPosition="left">
        <input
          class="ix-form-control"
          placeholder="Enter text here"
          type="text"
          slot="custom-value"
        />
      </ix-key-value>
    </ix-key-value-list>
  `,
  styleUrls: ['./key-value-list-with-custom-value.css'],
})
export default class KeyValueListWithCustomValue {}
```

#### key-value-list-with-custom-value.css
```css
.ix-form-control {
  width: 100% !important;
}
```

### Angular Standalone Examples

#### key-value-list-with-custom-value.ts
```ts
import { Component } from '@angular/core';
import { IxKeyValueList, IxKeyValue } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxKeyValueList, IxKeyValue],
  template: `
    <ix-key-value-list>
      <ix-key-value label="Label" labelPosition="left">
        <input placeholder="Enter text here" type="text" slot="custom-value" />
      </ix-key-value>

      <ix-key-value label="Label" labelPosition="left">
        <input placeholder="Enter text here" type="text" slot="custom-value" />
      </ix-key-value>

      <ix-key-value label="Label" labelPosition="left">
        <input placeholder="Enter text here" type="text" slot="custom-value" />
      </ix-key-value>
    </ix-key-value-list>
  `,
  styleUrls: ['./key-value-list-with-custom-value.css'],
})
export default class KeyValueListWithCustomValue {}
```

#### key-value-list-with-custom-value.css
```css
.ix-form-control {
  width: 100% !important;
}
```

### Vue Examples

#### key-value-list-with-custom-value.vue
```vue
<script setup lang="ts">
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-vue';
</script>

<style scoped src="./key-value-list-with-custom-value.css"></style>

<template>
  <IxKeyValueList>
    <IxKeyValue label="Label" labelPosition="left">
      <input
        class="ix-form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </IxKeyValue>
    <IxKeyValue label="Label" labelPosition="left">
      <input
        class="ix-form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </IxKeyValue>
    <IxKeyValue label="Label" labelPosition="left">
      <input
        class="ix-form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </IxKeyValue>
  </IxKeyValueList>
</template>
```

#### key-value-list-with-custom-value.css
```css
.ix-form-control {
  width: 100% !important;
}
```

## With icon

### React Examples

#### key-value-list-with-icon.tsx
```tsx
import { iconLocation } from '@siemens/ix-icons/icons';
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValueList>
      <IxKeyValue
        icon={iconLocation}
        label="Label"
        labelPosition="left"
        value="Value"
      ></IxKeyValue>
      <IxKeyValue
        icon={iconLocation}
        label="Label"
        labelPosition="left"
        value="Value"
      ></IxKeyValue>
      <IxKeyValue
        icon={iconLocation}
        label="Label"
        labelPosition="left"
        value="Value"
      ></IxKeyValue>
    </IxKeyValueList>
  );
};
```

### Angular Examples

#### key-value-list-with-icon.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-key-value-list>
      <ix-key-value
        icon="location"
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        icon="location"
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        icon="location"
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>
    </ix-key-value-list>
  `,
})
export default class KeyValueListWithCustomValue {}
```

### Angular Standalone Examples

#### key-value-list-with-icon.ts
```ts
import { Component } from '@angular/core';
import { IxKeyValueList, IxKeyValue } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxKeyValueList, IxKeyValue],
  template: `
    <ix-key-value-list>
      <ix-key-value
        icon="location"
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        icon="location"
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        icon="location"
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>
    </ix-key-value-list>
  `,
})
export default class KeyValueListWithCustomValue {}
```

### Vue Examples

#### key-value-list-with-icon.vue
```vue
<script setup lang="ts">
import { iconLocation } from '@siemens/ix-icons/icons';
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-vue';
</script>

<template>
  <IxKeyValueList>
    <IxKeyValue
      :icon="iconLocation"
      label="Label"
      labelPosition="left"
      value="Value"
    ></IxKeyValue>
    <IxKeyValue
      :icon="iconLocation"
      label="Label"
      labelPosition="left"
      value="Value"
    ></IxKeyValue>
    <IxKeyValue
      :icon="iconLocation"
      label="Label"
      labelPosition="left"
      value="Value"
    ></IxKeyValue>
  </IxKeyValueList>
</template>
```

## Striped

### React Examples

#### key-value-list-striped.tsx
```tsx
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValueList striped={true}>
      <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
      <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
      <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
    </IxKeyValueList>
  );
};
```

### Angular Examples

#### key-value-list-striped.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-key-value-list striped="true">
      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>
    </ix-key-value-list>
  `,
})
export default class KeyValueListStriped {}
```

### Angular Standalone Examples

#### key-value-list-striped.ts
```ts
import { Component } from '@angular/core';
import { IxKeyValueList, IxKeyValue } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxKeyValueList, IxKeyValue],
  template: `
    <ix-key-value-list striped="true">
      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>

      <ix-key-value
        label="Label"
        labelPosition="left"
        value="Value"
      ></ix-key-value>
    </ix-key-value-list>
  `,
})
export default class KeyValueListStriped {}
```

### Vue Examples

#### key-value-list-striped.vue
```vue
<script setup lang="ts">
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-vue';
</script>

<template>
  <IxKeyValueList striped>
    <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
    <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
    <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
  </IxKeyValueList>
</template>
```

## API for ix-key-value-list

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| striped | Optional striped key value list style | striped | boolean | false |
