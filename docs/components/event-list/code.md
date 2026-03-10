# Event list - Code

> Code examples and API documentation for the ix-event-list, ix-event-list-item

# Event list - Code

## Basic

### React Examples

#### event-list.tsx
```tsx
import { IxEventList, IxEventListItem } from '@siemens/ix-react';

export default function EventList() {
  return (
    <IxEventList>
      <IxEventListItem itemColor="color-primary">Text 1</IxEventListItem>
      <IxEventListItem itemColor="color-primary">Text 2</IxEventListItem>
      <IxEventListItem itemColor="color-alarm">Text 3</IxEventListItem>
      <IxEventListItem itemColor="color-success">Text 4</IxEventListItem>
    </IxEventList>
  );
}
```

### Angular Examples

#### event-list.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-event-list>
      <ix-event-list-item item-color="color-primary">Text 1</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 2</ix-event-list-item>
      <ix-event-list-item item-color="color-alarm">Text 3</ix-event-list-item>
      <ix-event-list-item item-color="color-success">Text 4</ix-event-list-item>
    </ix-event-list>
  `,
})
export default class EventList {}
```

### Angular Standalone Examples

#### event-list.ts
```ts
import { Component } from '@angular/core';
import { IxEventList, IxEventListItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxEventList, IxEventListItem],
  template: `
    <ix-event-list>
      <ix-event-list-item item-color="color-primary">Text 1</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 2</ix-event-list-item>
      <ix-event-list-item item-color="color-alarm">Text 3</ix-event-list-item>
      <ix-event-list-item item-color="color-success">Text 4</ix-event-list-item>
    </ix-event-list>
  `,
})
export default class EventList {}
```

### Vue Examples

#### event-list.vue
```vue
<script setup lang="ts">
import { IxEventList, IxEventListItem } from '@siemens/ix-vue';
</script>

<template>
  <IxEventList>
    <IxEventListItem itemColor="color-primary">Text 1</IxEventListItem>
    <IxEventListItem itemColor="color-primary">Text 2</IxEventListItem>
    <IxEventListItem itemColor="color-alarm">Text 3</IxEventListItem>
    <IxEventListItem itemColor="color-success">Text 4</IxEventListItem>
  </IxEventList>
</template>
```

## Filled

### React Examples

#### event-list-filled.tsx
```tsx
import { IxEventList, IxEventListItem } from '@siemens/ix-react';

const items = [
  { text: 'Text 1', color: 'color-primary' },
  { text: 'Text 2', color: 'color-primary' },
  { text: 'Text 3', color: 'color-alarm' },
  { text: 'Text 4', color: 'color-success' },
];

export default function EventListFilled() {
  return (
    <IxEventList>
      {items.map((item) => (
        <IxEventListItem
          key={item.text}
          variant="filled"
          itemColor={item.color}
        >
          {item.text}
        </IxEventListItem>
      ))}
    </IxEventList>
  );
}
```

### Angular Examples

#### event-list-filled.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-event-list>
      @for (item of items; track i; let i = $index) {
        <ix-event-list-item variant="filled" [itemColor]="item.color">
          {{ item.text }}
        </ix-event-list-item>
      }
    </ix-event-list>
  `,
})
export default class EventListFilled {
  items = [
    { text: 'Text 1', color: 'color-primary' },
    { text: 'Text 2', color: 'color-primary' },
    { text: 'Text 3', color: 'color-alarm' },
    { text: 'Text 4', color: 'color-success' },
  ];
}
```

### Angular Standalone Examples

#### event-list-filled.ts
```ts
import { Component } from '@angular/core';
import { IxEventList, IxEventListItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxEventList, IxEventListItem],
  template: `
    <ix-event-list>
      @for (item of items; track i; let i = $index) {
        <ix-event-list-item variant="filled" [itemColor]="item.color">
          {{ item.text }}
        </ix-event-list-item>
      }
    </ix-event-list>
  `,
})
export default class EventListFilled {
  items = [
    { text: 'Text 1', color: 'color-primary' },
    { text: 'Text 2', color: 'color-primary' },
    { text: 'Text 3', color: 'color-alarm' },
    { text: 'Text 4', color: 'color-success' },
  ];
}
```

### Vue Examples

#### event-list-filled.vue
```vue
<script setup lang="ts">
import { IxEventList, IxEventListItem } from '@siemens/ix-vue';

const items = [
  { text: 'Text 1', color: 'color-primary' },
  { text: 'Text 2', color: 'color-primary' },
  { text: 'Text 3', color: 'color-alarm' },
  { text: 'Text 4', color: 'color-success' },
];
</script>

<template>
  <IxEventList>
    <IxEventListItem
      v-for="item in items"
      :key="item.text"
      variant="filled"
      :itemColor="item.color"
    >
      {{ item.text }}
    </IxEventListItem>
  </IxEventList>
</template>
```

## Selected

### React Examples

#### event-list-selected.tsx
```tsx
import { IxEventList, IxEventListItem } from '@siemens/ix-react';
import { useState } from 'react';

const items = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];

export default function EventListSelected() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <IxEventList>
      {items.map((text, index) => (
        <IxEventListItem
          key={text}
          itemColor="color-primary"
          selected={selectedIndex === index}
          onClick={() => setSelectedIndex(index)}
        >
          {text}
        </IxEventListItem>
      ))}
    </IxEventList>
  );
}
```

### Angular Examples

#### event-list-selected.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-event-list>
      @for (item of items; track i; let i = $index) {
      <ix-event-list-item
        item-color="color-primary"
        [selected]="selectedIndex === i"
        (click)="selectedIndex = i"
      >
        {{ item }}
      </ix-event-list-item>
      }
    </ix-event-list>
  `,
})
export default class EventListSelected {
  selectedIndex = 1;
  items = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];
}
```

### Angular Standalone Examples

#### event-list-selected.ts
```ts
import { Component } from '@angular/core';
import { IxEventList, IxEventListItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxEventList, IxEventListItem],
  template: `
    <ix-event-list>
      @for (item of items; track item; let i = $index) {
        <ix-event-list-item
          item-color="color-primary"
          [selected]="selectedIndex === i"
          (click)="selectedIndex = i"
        >
          {{ item }}
        </ix-event-list-item>
      }
    </ix-event-list>
  `,
})
export default class EventListSelected {
  selectedIndex = 1;
  items = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];
}
```

### Vue Examples

#### event-list-selected.vue
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { IxEventList, IxEventListItem } from '@siemens/ix-vue';

const selectedIndex = ref(1);
const items = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];
</script>

<template>
  <IxEventList>
    <IxEventListItem
      v-for="(item, index) in items"
      :key="item"
      itemColor="color-primary"
      :selected="selectedIndex === index"
      @click="selectedIndex = index"
    >
      {{ item }}
    </IxEventListItem>
  </IxEventList>
</template>
```

## Predefined item height

### React Examples

#### event-list-custom-item-height.tsx
```tsx
import { IxEventList, IxEventListItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxEventList itemHeight={'L'}>
      <IxEventListItem itemColor="color-primary">Text 1</IxEventListItem>
      <IxEventListItem itemColor="color-primary">Text 2</IxEventListItem>
    </IxEventList>
  );
};
```

### Angular Examples

#### event-list-custom-item-height.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-event-list item-height="L">
      <ix-event-list-item item-color="color-primary">Test 1</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Test 2</ix-event-list-item>
    </ix-event-list>
  `,
})
export default class EventListCustomItemHeight {}
```

### Angular Standalone Examples

#### event-list-custom-item-height.ts
```ts
import { Component } from '@angular/core';
import { IxEventList, IxEventListItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxEventList, IxEventListItem],
  template: `
    <ix-event-list item-height="L">
      <ix-event-list-item item-color="color-primary">Test 1</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Test 2</ix-event-list-item>
    </ix-event-list>
  `,
})
export default class EventListCustomItemHeight {}
```

### Vue Examples

#### event-list-custom-item-height.vue
```vue
<script setup lang="ts">
import { IxEventList, IxEventListItem } from '@siemens/ix-vue';
</script>

<template>
  <IxEventList itemHeight="L">
    <IxEventListItem itemColor="color-primary">Text 1</IxEventListItem>
    <IxEventListItem itemColor="color-primary">Text 2</IxEventListItem>
  </IxEventList>
</template>
```

## Custom item height

### React Examples

#### event-list-custom-item-height-in-number.tsx
```tsx
import { IxEventList, IxEventListItem } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [items] = useState([1, 2, 3]);

  return (
    <IxEventList itemHeight={60}>
      {items.map((item) => (
        <div key={item}>
          <IxEventListItem itemColor="color-primary">
            Text {item}
          </IxEventListItem>
        </div>
      ))}
    </IxEventList>
  );
};
```

### Angular Examples

#### event-list-custom-item-height-in-number.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-event-list [itemHeight]="itemHeight">
      <ng-container *ngFor="let item of items">
        <ix-event-list-item item-color="color-primary"
          >Text {{ item }}</ix-event-list-item
        >
      </ng-container>
    </ix-event-list>
  `,
})
export default class EventListCustomItemHeightInNumber {
  itemHeight = 60;
  items = [1, 2, 3];
}
```

### Vue Examples

#### event-list-custom-item-height-in-number.vue
```vue
<script setup lang="ts">
import { IxEventList, IxEventListItem } from '@siemens/ix-vue';
</script>

<template>
  <IxEventList :itemHeight="60">
    <IxEventListItem itemColor="color-primary">Text 1</IxEventListItem>
    <IxEventListItem itemColor="color-primary">Text 2</IxEventListItem>
  </IxEventList>
</template>
```

## Compact

### React Examples

#### event-list-compact.tsx
```tsx
import { IxEventList, IxEventListItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxEventList compact>
      <IxEventListItem itemColor="color-primary">Text 1</IxEventListItem>
      <IxEventListItem itemColor="color-primary">Text 2</IxEventListItem>
      <IxEventListItem itemColor="color-primary">Text 3</IxEventListItem>
      <IxEventListItem itemColor="color-primary">Text 4</IxEventListItem>
    </IxEventList>
  );
};
```

### Angular Examples

#### event-list-compact.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-event-list compact>
      <ix-event-list-item item-color="color-primary">Text 1</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 2</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 3</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 4</ix-event-list-item>
    </ix-event-list>
  `,
})
export default class EventListCompact {}
```

### Angular Standalone Examples

#### event-list-compact.ts
```ts
import { Component } from '@angular/core';
import { IxEventList, IxEventListItem } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxEventList, IxEventListItem],
  template: `
    <ix-event-list compact>
      <ix-event-list-item item-color="color-primary">Text 1</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 2</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 3</ix-event-list-item>
      <ix-event-list-item item-color="color-primary">Text 4</ix-event-list-item>
    </ix-event-list>
  `,
})
export default class EventListCompact {}
```

### Vue Examples

#### event-list-compact.vue
```vue
<script setup lang="ts">
import { IxEventList, IxEventListItem } from '@siemens/ix-vue';
</script>

<template>
  <IxEventList compact>
    <IxEventListItem itemColor="color-primary">Text 1</IxEventListItem>
    <IxEventListItem itemColor="color-primary">Text 2</IxEventListItem>
    <IxEventListItem itemColor="color-primary">Text 3</IxEventListItem>
    <IxEventListItem itemColor="color-primary">Text 4</IxEventListItem>
  </IxEventList>
</template>
```

## API for ix-event-list

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| animated | Animate state change transitions. Defaults to 'false'. | animated | boolean | false |
| chevron | Display a chevron icon in list items. Defaults to 'false' | chevron | boolean | false |
| compact | Make event-list items more compact | compact | boolean | false |
| itemHeight | Determines the height of list items. This can either be one of two predefined sizes ('S' or 'L') or an absolute pixel value. In case a number is supplied it will get converted to rem internally. Defaults to 'S'. | item-height | "L" \| "S" \| number | 'S' |

## API for ix-event-list-item

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| chevron | Show chevron on right side of the event list item | chevron | boolean | false |
| disabled | Disable event list item | disabled | boolean | false |
| itemColor | Color of the status indicator. You can find a list of all available colors in our documentation. Example values are \`--theme-color-alarm\` or \`color-alarm\` [https://ix.siemens.io/docs/styles/colors](https://ix.siemens.io/docs/styles/colors) | item-color | string \| undefined |  |
| selected | Show event list item as selected | selected | boolean | false |
| variant | Variant of the event list item | variant | "filled" \| "outline" | 'outline' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| itemClick | Event list item click | itemClick | any |
