# List - Code

> Code examples and API documentation for the ix-list

# List - Code

## Variants

### React Examples

#### generic-list-variants.tsx
```tsx
import { IxList, IxListItem } from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import { iconProject } from '@siemens/ix-icons/icons';

addIcons({ iconProject });

export default function GenericListVariants() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <IxList divider itemGap="none" variant="ghost">
        <IxListItem icon="project" label="Item 1"></IxListItem>
        <IxListItem icon="project" label="Item 2"></IxListItem>
        <IxListItem icon="project" label="Item 3" divider={false}></IxListItem>
      </IxList>
      <IxList variant="outline" itemGap="sm">
        <IxListItem icon="project" label="Item 1"></IxListItem>
        <IxListItem icon="project" label="Item 2"></IxListItem>
        <IxListItem icon="project" label="Item 3"></IxListItem>
      </IxList>
      <IxList variant="filled">
        <IxListItem icon="project" label="Item 1"></IxListItem>
        <IxListItem icon="project" label="Item 2"></IxListItem>
        <IxListItem icon="project" label="Item 3"></IxListItem>
      </IxList>
    </div>
  );
}
```

### Angular Examples

#### generic-list-variants.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import { iconProject } from '@siemens/ix-icons/icons';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './generic-list-variants.html',
})
export default class GenericListVariants {
  constructor() {
    addIcons({ iconProject });
  }
}
```

#### generic-list-variants.html
```html
<div style="display: flex; flex-direction: column; gap: 24px">
  <ix-list divider item-gap="none" variant="ghost">
    <ix-list-item icon="project" label="Item 1"></ix-list-item>
    <ix-list-item icon="project" label="Item 2"></ix-list-item>
    <ix-list-item icon="project" label="Item 3" divider="false"></ix-list-item>
  </ix-list>
  <ix-list variant="outline" item-gap="sm">
    <ix-list-item icon="project" label="Item 1"></ix-list-item>
    <ix-list-item icon="project" label="Item 2"></ix-list-item>
    <ix-list-item icon="project" label="Item 3"></ix-list-item>
  </ix-list>
  <ix-list variant="filled">
    <ix-list-item icon="project" label="Item 1"></ix-list-item>
    <ix-list-item icon="project" label="Item 2"></ix-list-item>
    <ix-list-item icon="project" label="Item 3"></ix-list-item>
  </ix-list>
</div>
```

### Angular Standalone Examples

#### generic-list-variants.ts
```ts
import { Component } from '@angular/core';
import { IxList, IxListItem } from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import { iconProject } from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxList, IxListItem],
  templateUrl: './generic-list-variants.html',
})
export default class GenericListVariants {
  constructor() {
    addIcons({ iconProject });
  }
}
```

#### generic-list-variants.html
```html
<div style="display: flex; flex-direction: column; gap: 24px">
  <ix-list divider item-gap="none" variant="ghost">
    <ix-list-item icon="project" label="Item 1"></ix-list-item>
    <ix-list-item icon="project" label="Item 2"></ix-list-item>
    <ix-list-item icon="project" label="Item 3" divider="false"></ix-list-item>
  </ix-list>
  <ix-list variant="outline" item-gap="sm">
    <ix-list-item icon="project" label="Item 1"></ix-list-item>
    <ix-list-item icon="project" label="Item 2"></ix-list-item>
    <ix-list-item icon="project" label="Item 3"></ix-list-item>
  </ix-list>
  <ix-list variant="filled">
    <ix-list-item icon="project" label="Item 1"></ix-list-item>
    <ix-list-item icon="project" label="Item 2"></ix-list-item>
    <ix-list-item icon="project" label="Item 3"></ix-list-item>
  </ix-list>
</div>
```

### Vue Examples

#### generic-list-variants.vue
```vue
<script setup lang="ts">
import { IxList, IxListItem } from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import { iconProject } from '@siemens/ix-icons/icons';

addIcons({ iconProject });
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <IxList divider item-gap="none" variant="ghost">
      <IxListItem icon="project" label="Item 1"></IxListItem>
      <IxListItem icon="project" label="Item 2"></IxListItem>
      <IxListItem icon="project" label="Item 3" divider="false"></IxListItem>
    </IxList>
    <IxList variant="outline" item-gap="sm">
      <IxListItem icon="project" label="Item 1"></IxListItem>
      <IxListItem icon="project" label="Item 2"></IxListItem>
      <IxListItem icon="project" label="Item 3"></IxListItem>
    </IxList>
    <IxList variant="filled">
      <IxListItem icon="project" label="Item 1"></IxListItem>
      <IxListItem icon="project" label="Item 2"></IxListItem>
      <IxListItem icon="project" label="Item 3"></IxListItem>
    </IxList>
  </div>
</template>
```

## Additional options

### React Examples

#### generic-list-additional-options.tsx
```tsx
import {
  IxIconButton,
  IxList,
  IxListItem,
  IxListItemSeparator,
} from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import {
  iconEditDocument,
  iconProject,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import { useState } from 'react';

addIcons({ iconEditDocument, iconProject, iconTrashcan });

export default function GenericListAdditionalOptions() {
  const [selected, setSelected] = useState([false, false, false]);

  const setItemSelected = (index: number, value: boolean) =>
    setSelected((current) =>
      current.map((item, i) => (i === index ? value : item))
    );

  return (
    <IxList checkbox>
      <IxListItem
        icon="project"
        label="Item 1"
        description="Some description 1"
        selected={selected[0]}
        onSelectedChange={(event) => setItemSelected(0, event.detail)}
      >
        <div slot="action">
          <IxIconButton
            icon="edit-document"
            variant="subtle-tertiary"
            aria-label="Edit Item 1"
          ></IxIconButton>
          <IxIconButton
            icon="trashcan"
            variant="subtle-tertiary"
            aria-label="Delete Item 1"
          ></IxIconButton>
        </div>
      </IxListItem>
      <IxListItemSeparator></IxListItemSeparator>
      <IxListItem
        icon="project"
        label="Item 2"
        description="Some description 2"
        selected={selected[1]}
        onSelectedChange={(event) => setItemSelected(1, event.detail)}
      >
        <div slot="action">
          <IxIconButton
            icon="edit-document"
            variant="subtle-tertiary"
            aria-label="Edit Item 2"
          ></IxIconButton>
          <IxIconButton
            icon="trashcan"
            variant="subtle-tertiary"
            aria-label="Delete Item 2"
          ></IxIconButton>
        </div>
      </IxListItem>
      <IxListItem
        icon="project"
        label="Item 3"
        description="Some description 3"
        selected={selected[2]}
        onSelectedChange={(event) => setItemSelected(2, event.detail)}
      >
        <div slot="action">
          <IxIconButton
            icon="edit-document"
            variant="subtle-tertiary"
            aria-label="Edit Item 3"
          ></IxIconButton>
          <IxIconButton
            icon="trashcan"
            variant="subtle-tertiary"
            aria-label="Delete Item 3"
          ></IxIconButton>
        </div>
      </IxListItem>
    </IxList>
  );
}
```

### Angular Examples

#### generic-list-additional-options.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import {
  iconEditDocument,
  iconProject,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './generic-list-additional-options.html',
})
export default class GenericListAdditionalOptions {
  selected = [false, false, false];

  constructor() {
    addIcons({ iconEditDocument, iconProject, iconTrashcan });
  }
}
```

#### generic-list-additional-options.html
```html
<ix-list checkbox>
  <ix-list-item
    icon="project"
    label="Item 1"
    description="Some description 1"
    [selected]="selected[0]"
    (selectedChange)="selected[0] = $event.detail"
  >
    <div slot="action">
      <ix-icon-button
        icon="edit-document"
        variant="subtle-tertiary"
        aria-label="Edit Item 1"
      ></ix-icon-button>
      <ix-icon-button
        icon="trashcan"
        variant="subtle-tertiary"
        aria-label="Delete Item 1"
      ></ix-icon-button>
    </div>
  </ix-list-item>
  <ix-list-item-separator></ix-list-item-separator>
  <ix-list-item
    icon="project"
    label="Item 2"
    description="Some description 2"
    [selected]="selected[1]"
    (selectedChange)="selected[1] = $event.detail"
  >
    <div slot="action">
      <ix-icon-button
        icon="edit-document"
        variant="subtle-tertiary"
        aria-label="Edit Item 2"
      ></ix-icon-button>
      <ix-icon-button
        icon="trashcan"
        variant="subtle-tertiary"
        aria-label="Delete Item 2"
      ></ix-icon-button>
    </div>
  </ix-list-item>
  <ix-list-item
    icon="project"
    label="Item 3"
    description="Some description 3"
    [selected]="selected[2]"
    (selectedChange)="selected[2] = $event.detail"
  >
    <div slot="action">
      <ix-icon-button
        icon="edit-document"
        variant="subtle-tertiary"
        aria-label="Edit Item 3"
      ></ix-icon-button>
      <ix-icon-button
        icon="trashcan"
        variant="subtle-tertiary"
        aria-label="Delete Item 3"
      ></ix-icon-button>
    </div>
  </ix-list-item>
</ix-list>
```

### Angular Standalone Examples

#### generic-list-additional-options.ts
```ts
import { Component } from '@angular/core';
import {
  IxIconButton,
  IxList,
  IxListItem,
  IxListItemSeparator,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconEditDocument,
  iconProject,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxIconButton, IxList, IxListItem, IxListItemSeparator],
  templateUrl: './generic-list-additional-options.html',
})
export default class GenericListAdditionalOptions {
  selected = [false, false, false];

  constructor() {
    addIcons({ iconEditDocument, iconProject, iconTrashcan });
  }
}
```

#### generic-list-additional-options.html
```html
<ix-list checkbox>
  <ix-list-item
    icon="project"
    label="Item 1"
    description="Some description 1"
    [selected]="selected[0]"
    (selectedChange)="selected[0] = $event.detail"
  >
    <div slot="action">
      <ix-icon-button
        icon="edit-document"
        variant="subtle-tertiary"
        aria-label="Edit Item 1"
      ></ix-icon-button>
      <ix-icon-button
        icon="trashcan"
        variant="subtle-tertiary"
        aria-label="Delete Item 1"
      ></ix-icon-button>
    </div>
  </ix-list-item>
  <ix-list-item-separator></ix-list-item-separator>
  <ix-list-item
    icon="project"
    label="Item 2"
    description="Some description 2"
    [selected]="selected[1]"
    (selectedChange)="selected[1] = $event.detail"
  >
    <div slot="action">
      <ix-icon-button
        icon="edit-document"
        variant="subtle-tertiary"
        aria-label="Edit Item 2"
      ></ix-icon-button>
      <ix-icon-button
        icon="trashcan"
        variant="subtle-tertiary"
        aria-label="Delete Item 2"
      ></ix-icon-button>
    </div>
  </ix-list-item>
  <ix-list-item
    icon="project"
    label="Item 3"
    description="Some description 3"
    [selected]="selected[2]"
    (selectedChange)="selected[2] = $event.detail"
  >
    <div slot="action">
      <ix-icon-button
        icon="edit-document"
        variant="subtle-tertiary"
        aria-label="Edit Item 3"
      ></ix-icon-button>
      <ix-icon-button
        icon="trashcan"
        variant="subtle-tertiary"
        aria-label="Delete Item 3"
      ></ix-icon-button>
    </div>
  </ix-list-item>
</ix-list>
```

### Vue Examples

#### generic-list-additional-options.vue
```vue
<script setup lang="ts">
import {
  IxIconButton,
  IxList,
  IxListItem,
  IxListItemSeparator,
} from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import {
  iconEditDocument,
  iconProject,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import { ref } from 'vue';

addIcons({ iconEditDocument, iconProject, iconTrashcan });

const selected = ref([false, false, false]);
</script>

<template>
  <IxList checkbox>
    <IxListItem
      icon="project"
      label="Item 1"
      description="Some description 1"
      :selected="selected[0]"
      @selectedChange="selected[0] = $event.detail"
    >
      <div slot="action">
        <IxIconButton
          icon="edit-document"
          variant="subtle-tertiary"
          aria-label="Edit Item 1"
        ></IxIconButton>
        <IxIconButton
          icon="trashcan"
          variant="subtle-tertiary"
          aria-label="Delete Item 1"
        ></IxIconButton>
      </div>
    </IxListItem>
    <IxListItemSeparator></IxListItemSeparator>
    <IxListItem
      icon="project"
      label="Item 2"
      description="Some description 2"
      :selected="selected[1]"
      @selectedChange="selected[1] = $event.detail"
    >
      <div slot="action">
        <IxIconButton
          icon="edit-document"
          variant="subtle-tertiary"
          aria-label="Edit Item 2"
        ></IxIconButton>
        <IxIconButton
          icon="trashcan"
          variant="subtle-tertiary"
          aria-label="Delete Item 2"
        ></IxIconButton>
      </div>
    </IxListItem>
    <IxListItem
      icon="project"
      label="Item 3"
      description="Some description 3"
      :selected="selected[2]"
      @selectedChange="selected[2] = $event.detail"
    >
      <div slot="action">
        <IxIconButton
          icon="edit-document"
          variant="subtle-tertiary"
          aria-label="Edit Item 3"
        ></IxIconButton>
        <IxIconButton
          icon="trashcan"
          variant="subtle-tertiary"
          aria-label="Delete Item 3"
        ></IxIconButton>
      </div>
    </IxListItem>
  </IxList>
</template>
```

## Draggable

### React Examples

#### generic-list-draggable.tsx
```tsx
import { IxList, IxListItem } from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import { iconProject } from '@siemens/ix-icons/icons';

addIcons({ iconProject });

export default function GenericListDraggable() {
  return (
    <IxList draggable>
      <IxListItem icon="project" label="Item 1"></IxListItem>
      <IxListItem icon="project" label="Item 2"></IxListItem>
      <IxListItem icon="project" label="Item 3"></IxListItem>
    </IxList>
  );
}
```

### Angular Examples

#### generic-list-draggable.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import { iconProject } from '@siemens/ix-icons/icons';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './generic-list-draggable.html',
})
export default class GenericListDraggable {
  constructor() {
    addIcons({ iconProject });
  }
}
```

#### generic-list-draggable.html
```html
<ix-list draggable>
  <ix-list-item icon="project" label="Item 1"></ix-list-item>
  <ix-list-item icon="project" label="Item 2"></ix-list-item>
  <ix-list-item icon="project" label="Item 3"></ix-list-item>
</ix-list>
```

### Angular Standalone Examples

#### generic-list-draggable.ts
```ts
import { Component } from '@angular/core';
import { IxList, IxListItem } from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import { iconProject } from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxList, IxListItem],
  templateUrl: './generic-list-draggable.html',
})
export default class GenericListDraggable {
  constructor() {
    addIcons({ iconProject });
  }
}
```

#### generic-list-draggable.html
```html
<ix-list draggable>
  <ix-list-item icon="project" label="Item 1"></ix-list-item>
  <ix-list-item icon="project" label="Item 2"></ix-list-item>
  <ix-list-item icon="project" label="Item 3"></ix-list-item>
</ix-list>
```

### Vue Examples

#### generic-list-draggable.vue
```vue
<script setup lang="ts">
import { IxList, IxListItem } from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import { iconProject } from '@siemens/ix-icons/icons';

addIcons({ iconProject });
</script>

<template>
  <IxList draggable>
    <IxListItem icon="project" label="Item 1"></IxListItem>
    <IxListItem icon="project" label="Item 2"></IxListItem>
    <IxListItem icon="project" label="Item 3"></IxListItem>
  </IxList>
</template>
```

## Action on hover

### React Examples

#### generic-list-action-on-hover.tsx
```tsx
import { IxIconButton, IxList, IxListItem } from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import {
  iconEditDocument,
  iconProject,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

addIcons({ iconEditDocument, iconProject, iconTrashcan });

export default function GenericListActionOnHover() {
  return (
    <IxList actionOnHover>
      <IxListItem icon="project" label="Item 1">
        <div slot="action">
          <IxIconButton
            icon="edit-document"
            variant="subtle-tertiary"
            aria-label="Edit Item 1"
          ></IxIconButton>
          <IxIconButton
            icon="trashcan"
            variant="subtle-tertiary"
            aria-label="Delete Item 1"
          ></IxIconButton>
        </div>
      </IxListItem>
      <IxListItem icon="project" label="Item 2">
        <div slot="action">
          <IxIconButton
            icon="edit-document"
            variant="subtle-tertiary"
            aria-label="Edit Item 2"
          ></IxIconButton>
          <IxIconButton
            icon="trashcan"
            variant="subtle-tertiary"
            aria-label="Delete Item 2"
          ></IxIconButton>
        </div>
      </IxListItem>
      <IxListItem icon="project" label="Item 3">
        <div slot="action">
          <IxIconButton
            icon="edit-document"
            variant="subtle-tertiary"
            aria-label="Edit Item 3"
          ></IxIconButton>
          <IxIconButton
            icon="trashcan"
            variant="subtle-tertiary"
            aria-label="Delete Item 3"
          ></IxIconButton>
        </div>
      </IxListItem>
    </IxList>
  );
}
```

### Angular Examples

#### generic-list-action-on-hover.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import {
  iconEditDocument,
  iconProject,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './generic-list-action-on-hover.html',
})
export default class GenericListActionOnHover {
  constructor() {
    addIcons({ iconEditDocument, iconProject, iconTrashcan });
  }
}
```

#### generic-list-action-on-hover.html
```html
<ix-list action-on-hover>
  <ix-list-item icon="project" label="Item 1">
    <div slot="action">
      <ix-icon-button
        icon="edit-document"
        variant="subtle-tertiary"
        aria-label="Edit Item 1"
      ></ix-icon-button>
      <ix-icon-button
        icon="trashcan"
        variant="subtle-tertiary"
        aria-label="Delete Item 1"
      ></ix-icon-button>
    </div>
  </ix-list-item>
  <ix-list-item icon="project" label="Item 2">
    <div slot="action">
      <ix-icon-button
        icon="edit-document"
        variant="subtle-tertiary"
        aria-label="Edit Item 2"
      ></ix-icon-button>
      <ix-icon-button
        icon="trashcan"
        variant="subtle-tertiary"
        aria-label="Delete Item 2"
      ></ix-icon-button>
    </div>
  </ix-list-item>
  <ix-list-item icon="project" label="Item 3">
    <div slot="action">
      <ix-icon-button
        icon="edit-document"
        variant="subtle-tertiary"
        aria-label="Edit Item 3"
      ></ix-icon-button>
      <ix-icon-button
        icon="trashcan"
        variant="subtle-tertiary"
        aria-label="Delete Item 3"
      ></ix-icon-button>
    </div>
  </ix-list-item>
</ix-list>
```

### Angular Standalone Examples

#### generic-list-action-on-hover.ts
```ts
import { Component } from '@angular/core';
import {
  IxIconButton,
  IxList,
  IxListItem,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconEditDocument,
  iconProject,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxIconButton, IxList, IxListItem],
  templateUrl: './generic-list-action-on-hover.html',
})
export default class GenericListActionOnHover {
  constructor() {
    addIcons({ iconEditDocument, iconProject, iconTrashcan });
  }
}
```

#### generic-list-action-on-hover.html
```html
<ix-list action-on-hover>
  <ix-list-item icon="project" label="Item 1">
    <div slot="action">
      <ix-icon-button
        icon="edit-document"
        variant="subtle-tertiary"
        aria-label="Edit Item 1"
      ></ix-icon-button>
      <ix-icon-button
        icon="trashcan"
        variant="subtle-tertiary"
        aria-label="Delete Item 1"
      ></ix-icon-button>
    </div>
  </ix-list-item>
  <ix-list-item icon="project" label="Item 2">
    <div slot="action">
      <ix-icon-button
        icon="edit-document"
        variant="subtle-tertiary"
        aria-label="Edit Item 2"
      ></ix-icon-button>
      <ix-icon-button
        icon="trashcan"
        variant="subtle-tertiary"
        aria-label="Delete Item 2"
      ></ix-icon-button>
    </div>
  </ix-list-item>
  <ix-list-item icon="project" label="Item 3">
    <div slot="action">
      <ix-icon-button
        icon="edit-document"
        variant="subtle-tertiary"
        aria-label="Edit Item 3"
      ></ix-icon-button>
      <ix-icon-button
        icon="trashcan"
        variant="subtle-tertiary"
        aria-label="Delete Item 3"
      ></ix-icon-button>
    </div>
  </ix-list-item>
</ix-list>
```

### Vue Examples

#### generic-list-action-on-hover.vue
```vue
<script setup lang="ts">
import { IxIconButton, IxList, IxListItem } from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import {
  iconEditDocument,
  iconProject,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

addIcons({ iconEditDocument, iconProject, iconTrashcan });
</script>

<template>
  <IxList action-on-hover>
    <IxListItem icon="project" label="Item 1">
      <div slot="action">
        <IxIconButton
          icon="edit-document"
          variant="subtle-tertiary"
          aria-label="Edit Item 1"
        ></IxIconButton>
        <IxIconButton
          icon="trashcan"
          variant="subtle-tertiary"
          aria-label="Delete Item 1"
        ></IxIconButton>
      </div>
    </IxListItem>
    <IxListItem icon="project" label="Item 2">
      <div slot="action">
        <IxIconButton
          icon="edit-document"
          variant="subtle-tertiary"
          aria-label="Edit Item 2"
        ></IxIconButton>
        <IxIconButton
          icon="trashcan"
          variant="subtle-tertiary"
          aria-label="Delete Item 2"
        ></IxIconButton>
      </div>
    </IxListItem>
    <IxListItem icon="project" label="Item 3">
      <div slot="action">
        <IxIconButton
          icon="edit-document"
          variant="subtle-tertiary"
          aria-label="Edit Item 3"
        ></IxIconButton>
        <IxIconButton
          icon="trashcan"
          variant="subtle-tertiary"
          aria-label="Delete Item 3"
        ></IxIconButton>
      </div>
    </IxListItem>
  </IxList>
</template>
```

## Custom content

### React Examples

#### generic-list-custom-content.tsx
```tsx
import './generic-list-custom-content.scoped.css';

import {
  IxBadge,
  IxIcon,
  IxIconButton,
  IxList,
  IxListItem,
} from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import { iconAlarmBell, iconContextMenu } from '@siemens/ix-icons/icons';

addIcons({ iconAlarmBell, iconContextMenu });

export default function GenericListCustomContent() {
  return (
    <IxList actionSlotAlignment="start">
      <IxListItem aria-label="Alarm: High temperature">
        <div className="event-list-content">
          <div className="event-list-status">
            <IxBadge
              type="dot"
              variant="alarm"
              role="img"
              aria-label="Alarm"
            ></IxBadge>
            <IxIcon name="alarm-bell" aria-hidden="true"></IxIcon>
          </div>
          <div className="event-list-body">
            <div className="event-list-details">
              <div className="event-list-title">
                <IxBadge type="label" label="Alarm" variant="alarm"></IxBadge>
                <strong>High temperature</strong>
              </div>
              <strong>A1214-11241-101</strong>
              <span className="event-list-location">
                MyPlant - Cooling water circuit
              </span>
            </div>
            <time
              className="event-list-timestamp"
              dateTime="2026-05-13T08:50:21"
            >
              <span>2026-05-13</span>
              <span>08:50:21</span>
            </time>
          </div>
        </div>
        <IxIconButton
          slot="action"
          icon="context-menu"
          variant="subtle-tertiary"
          aria-label="Open menu for High temperature"
        ></IxIconButton>
      </IxListItem>

      <IxListItem aria-label="Warning: Low cooling water pressure">
        <div className="event-list-content">
          <div className="event-list-status">
            <IxBadge
              type="dot"
              variant="warning"
              role="img"
              aria-label="Warning"
            ></IxBadge>
            <IxIcon name="alarm-bell" aria-hidden="true"></IxIcon>
          </div>
          <div className="event-list-body">
            <div className="event-list-details">
              <div className="event-list-title">
                <IxBadge
                  type="label"
                  label="Warning"
                  variant="warning"
                ></IxBadge>
                <strong>Low cooling water pressure</strong>
              </div>
              <strong>P4711-23012-042</strong>
              <span className="event-list-location">
                MyPlant - Pump station 2
              </span>
            </div>
            <time
              className="event-list-timestamp"
              dateTime="2026-05-13T08:42:03"
            >
              <span>2026-05-13</span>
              <span>08:42:03</span>
            </time>
          </div>
        </div>
        <IxIconButton
          slot="action"
          icon="context-menu"
          variant="subtle-tertiary"
          aria-label="Open menu for Low cooling water pressure"
        ></IxIconButton>
      </IxListItem>

      <IxListItem aria-label="Critical: Drive overload">
        <div className="event-list-content">
          <div className="event-list-status">
            <IxBadge
              type="dot"
              variant="critical"
              role="img"
              aria-label="Critical"
            ></IxBadge>
            <IxIcon name="alarm-bell" aria-hidden="true"></IxIcon>
          </div>
          <div className="event-list-body">
            <div className="event-list-details">
              <div className="event-list-title">
                <IxBadge
                  type="label"
                  label="Critical"
                  variant="critical"
                ></IxBadge>
                <strong>Drive overload</strong>
              </div>
              <strong>M0815-55120-007</strong>
              <span className="event-list-location">
                MyPlant - Conveyor line 4
              </span>
            </div>
            <time
              className="event-list-timestamp"
              dateTime="2026-05-13T08:35:47"
            >
              <span>2026-05-13</span>
              <span>08:35:47</span>
            </time>
          </div>
        </div>
        <IxIconButton
          slot="action"
          icon="context-menu"
          variant="subtle-tertiary"
          aria-label="Open menu for Drive overload"
        ></IxIconButton>
      </IxListItem>
    </IxList>
  );
}
```

#### generic-list-custom-content.scoped.css
```css
.event-list-content {
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
  gap: 1rem;
  min-width: 0;
  padding-block: 0.25rem;
}

.event-list-status {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.25rem;
  padding-top: 0.25rem;
}

.event-list-status ix-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.event-list-body {
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
  gap: 0.5rem;
  min-width: 0;
}

.event-list-details {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.event-list-title {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-width: 0;
}

.event-list-title strong,
.event-list-location {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.event-list-location,
.event-list-timestamp {
  color: var(--theme-color-soft-text);
}

.event-list-timestamp {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;

  span:first-of-type {
    line-height: 1.25rem;
  }
}
```

### Angular Examples

#### generic-list-custom-content.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import { iconAlarmBell, iconContextMenu } from '@siemens/ix-icons/icons';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './generic-list-custom-content.html',
  styleUrls: ['./generic-list-custom-content.css'],
})
export default class GenericListCustomContent {
  constructor() {
    addIcons({ iconAlarmBell, iconContextMenu });
  }
}
```

#### generic-list-custom-content.html
```html
<ix-list action-slot-alignment="start">
  <ix-list-item aria-label="Alarm: High temperature">
    <div class="event-list-content">
      <div class="event-list-status">
        <ix-badge
          type="dot"
          variant="alarm"
          role="img"
          aria-label="Alarm"
        ></ix-badge>
        <ix-icon name="alarm-bell" aria-hidden="true"></ix-icon>
      </div>
      <div class="event-list-body">
        <div class="event-list-details">
          <div class="event-list-title">
            <ix-badge type="label" label="Alarm" variant="alarm"></ix-badge>
            <strong>High temperature</strong>
          </div>
          <strong>A1214-11241-101</strong>
          <span class="event-list-location">
            MyPlant - Cooling water circuit
          </span>
        </div>
        <time class="event-list-timestamp" datetime="2026-05-13T08:50:21">
          <span>2026-05-13</span>
          <span>08:50:21</span>
        </time>
      </div>
    </div>
    <ix-icon-button
      slot="action"
      icon="context-menu"
      variant="subtle-tertiary"
      aria-label="Open menu for High temperature"
    ></ix-icon-button>
  </ix-list-item>

  <ix-list-item aria-label="Warning: Low cooling water pressure">
    <div class="event-list-content">
      <div class="event-list-status">
        <ix-badge
          type="dot"
          variant="warning"
          role="img"
          aria-label="Warning"
        ></ix-badge>
        <ix-icon name="alarm-bell" aria-hidden="true"></ix-icon>
      </div>
      <div class="event-list-body">
        <div class="event-list-details">
          <div class="event-list-title">
            <ix-badge type="label" label="Warning" variant="warning"></ix-badge>
            <strong>Low cooling water pressure</strong>
          </div>
          <strong>P4711-23012-042</strong>
          <span class="event-list-location">MyPlant - Pump station 2</span>
        </div>
        <time class="event-list-timestamp" datetime="2026-05-13T08:42:03">
          <span>2026-05-13</span>
          <span>08:42:03</span>
        </time>
      </div>
    </div>
    <ix-icon-button
      slot="action"
      icon="context-menu"
      variant="subtle-tertiary"
      aria-label="Open menu for Low cooling water pressure"
    ></ix-icon-button>
  </ix-list-item>

  <ix-list-item aria-label="Critical: Drive overload">
    <div class="event-list-content">
      <div class="event-list-status">
        <ix-badge
          type="dot"
          variant="critical"
          role="img"
          aria-label="Critical"
        ></ix-badge>
        <ix-icon name="alarm-bell" aria-hidden="true"></ix-icon>
      </div>
      <div class="event-list-body">
        <div class="event-list-details">
          <div class="event-list-title">
            <ix-badge
              type="label"
              label="Critical"
              variant="critical"
            ></ix-badge>
            <strong>Drive overload</strong>
          </div>
          <strong>M0815-55120-007</strong>
          <span class="event-list-location">MyPlant - Conveyor line 4</span>
        </div>
        <time class="event-list-timestamp" datetime="2026-05-13T08:35:47">
          <span>2026-05-13</span>
          <span>08:35:47</span>
        </time>
      </div>
    </div>
    <ix-icon-button
      slot="action"
      icon="context-menu"
      variant="subtle-tertiary"
      aria-label="Open menu for Drive overload"
    ></ix-icon-button>
  </ix-list-item>
</ix-list>
```

#### generic-list-custom-content.css
```css
.event-list-content {
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
  gap: 1rem;
  min-width: 0;
  padding-block: 0.25rem;
}

.event-list-status {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.25rem;
  padding-top: 0.25rem;
}

.event-list-status ix-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.event-list-body {
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
  gap: 0.5rem;
  min-width: 0;
}

.event-list-details {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.event-list-title {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-width: 0;
}

.event-list-title strong,
.event-list-location {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.event-list-location,
.event-list-timestamp {
  color: var(--theme-color-soft-text);
}

.event-list-timestamp {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;

  span:first-of-type {
    line-height: 1.25rem;
  }
}
```

### Angular Standalone Examples

#### generic-list-custom-content.ts
```ts
import { Component } from '@angular/core';
import {
  IxBadge,
  IxIcon,
  IxIconButton,
  IxList,
  IxListItem,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import { iconAlarmBell, iconContextMenu } from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxBadge, IxIcon, IxIconButton, IxList, IxListItem],
  templateUrl: './generic-list-custom-content.html',
  styleUrls: ['./generic-list-custom-content.css'],
})
export default class GenericListCustomContent {
  constructor() {
    addIcons({ iconAlarmBell, iconContextMenu });
  }
}
```

#### generic-list-custom-content.html
```html
<ix-list action-slot-alignment="start">
  <ix-list-item aria-label="Alarm: High temperature">
    <div class="event-list-content">
      <div class="event-list-status">
        <ix-badge
          type="dot"
          variant="alarm"
          role="img"
          aria-label="Alarm"
        ></ix-badge>
        <ix-icon name="alarm-bell" aria-hidden="true"></ix-icon>
      </div>
      <div class="event-list-body">
        <div class="event-list-details">
          <div class="event-list-title">
            <ix-badge type="label" label="Alarm" variant="alarm"></ix-badge>
            <strong>High temperature</strong>
          </div>
          <strong>A1214-11241-101</strong>
          <span class="event-list-location">
            MyPlant - Cooling water circuit
          </span>
        </div>
        <time class="event-list-timestamp" datetime="2026-05-13T08:50:21">
          <span>2026-05-13</span>
          <span>08:50:21</span>
        </time>
      </div>
    </div>
    <ix-icon-button
      slot="action"
      icon="context-menu"
      variant="subtle-tertiary"
      aria-label="Open menu for High temperature"
    ></ix-icon-button>
  </ix-list-item>

  <ix-list-item aria-label="Warning: Low cooling water pressure">
    <div class="event-list-content">
      <div class="event-list-status">
        <ix-badge
          type="dot"
          variant="warning"
          role="img"
          aria-label="Warning"
        ></ix-badge>
        <ix-icon name="alarm-bell" aria-hidden="true"></ix-icon>
      </div>
      <div class="event-list-body">
        <div class="event-list-details">
          <div class="event-list-title">
            <ix-badge type="label" label="Warning" variant="warning"></ix-badge>
            <strong>Low cooling water pressure</strong>
          </div>
          <strong>P4711-23012-042</strong>
          <span class="event-list-location">MyPlant - Pump station 2</span>
        </div>
        <time class="event-list-timestamp" datetime="2026-05-13T08:42:03">
          <span>2026-05-13</span>
          <span>08:42:03</span>
        </time>
      </div>
    </div>
    <ix-icon-button
      slot="action"
      icon="context-menu"
      variant="subtle-tertiary"
      aria-label="Open menu for Low cooling water pressure"
    ></ix-icon-button>
  </ix-list-item>

  <ix-list-item aria-label="Critical: Drive overload">
    <div class="event-list-content">
      <div class="event-list-status">
        <ix-badge
          type="dot"
          variant="critical"
          role="img"
          aria-label="Critical"
        ></ix-badge>
        <ix-icon name="alarm-bell" aria-hidden="true"></ix-icon>
      </div>
      <div class="event-list-body">
        <div class="event-list-details">
          <div class="event-list-title">
            <ix-badge
              type="label"
              label="Critical"
              variant="critical"
            ></ix-badge>
            <strong>Drive overload</strong>
          </div>
          <strong>M0815-55120-007</strong>
          <span class="event-list-location">MyPlant - Conveyor line 4</span>
        </div>
        <time class="event-list-timestamp" datetime="2026-05-13T08:35:47">
          <span>2026-05-13</span>
          <span>08:35:47</span>
        </time>
      </div>
    </div>
    <ix-icon-button
      slot="action"
      icon="context-menu"
      variant="subtle-tertiary"
      aria-label="Open menu for Drive overload"
    ></ix-icon-button>
  </ix-list-item>
</ix-list>
```

#### generic-list-custom-content.css
```css
.event-list-content {
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
  gap: 1rem;
  min-width: 0;
  padding-block: 0.25rem;
}

.event-list-status {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.25rem;
  padding-top: 0.25rem;
}

.event-list-status ix-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.event-list-body {
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
  gap: 0.5rem;
  min-width: 0;
}

.event-list-details {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.event-list-title {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-width: 0;
}

.event-list-title strong,
.event-list-location {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.event-list-location,
.event-list-timestamp {
  color: var(--theme-color-soft-text);
}

.event-list-timestamp {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;

  span:first-of-type {
    line-height: 1.25rem;
  }
}
```

### Vue Examples

#### generic-list-custom-content.vue
```vue
<script setup lang="ts">
import {
  IxBadge,
  IxIcon,
  IxIconButton,
  IxList,
  IxListItem,
} from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import { iconAlarmBell, iconContextMenu } from '@siemens/ix-icons/icons';

addIcons({ iconAlarmBell, iconContextMenu });
</script>

<style scoped src="./generic-list-custom-content.css"></style>

<template>
  <IxList action-slot-alignment="start">
    <IxListItem aria-label="Alarm: High temperature">
      <div class="event-list-content">
        <div class="event-list-status">
          <IxBadge
            type="dot"
            variant="alarm"
            role="img"
            aria-label="Alarm"
          ></IxBadge>
          <IxIcon name="alarm-bell" aria-hidden="true"></IxIcon>
        </div>
        <div class="event-list-body">
          <div class="event-list-details">
            <div class="event-list-title">
              <IxBadge type="label" label="Alarm" variant="alarm"></IxBadge>
              <strong>High temperature</strong>
            </div>
            <strong>A1214-11241-101</strong>
            <span class="event-list-location">
              MyPlant - Cooling water circuit
            </span>
          </div>
          <time class="event-list-timestamp" datetime="2026-05-13T08:50:21">
            <span>2026-05-13</span>
            <span>08:50:21</span>
          </time>
        </div>
      </div>
      <IxIconButton
        slot="action"
        icon="context-menu"
        variant="subtle-tertiary"
        aria-label="Open menu for High temperature"
      ></IxIconButton>
    </IxListItem>

    <IxListItem aria-label="Warning: Low cooling water pressure">
      <div class="event-list-content">
        <div class="event-list-status">
          <IxBadge
            type="dot"
            variant="warning"
            role="img"
            aria-label="Warning"
          ></IxBadge>
          <IxIcon name="alarm-bell" aria-hidden="true"></IxIcon>
        </div>
        <div class="event-list-body">
          <div class="event-list-details">
            <div class="event-list-title">
              <IxBadge type="label" label="Warning" variant="warning"></IxBadge>
              <strong>Low cooling water pressure</strong>
            </div>
            <strong>P4711-23012-042</strong>
            <span class="event-list-location">MyPlant - Pump station 2</span>
          </div>
          <time class="event-list-timestamp" datetime="2026-05-13T08:42:03">
            <span>2026-05-13</span>
            <span>08:42:03</span>
          </time>
        </div>
      </div>
      <IxIconButton
        slot="action"
        icon="context-menu"
        variant="subtle-tertiary"
        aria-label="Open menu for Low cooling water pressure"
      ></IxIconButton>
    </IxListItem>

    <IxListItem aria-label="Critical: Drive overload">
      <div class="event-list-content">
        <div class="event-list-status">
          <IxBadge
            type="dot"
            variant="critical"
            role="img"
            aria-label="Critical"
          ></IxBadge>
          <IxIcon name="alarm-bell" aria-hidden="true"></IxIcon>
        </div>
        <div class="event-list-body">
          <div class="event-list-details">
            <div class="event-list-title">
              <IxBadge
                type="label"
                label="Critical"
                variant="critical"
              ></IxBadge>
              <strong>Drive overload</strong>
            </div>
            <strong>M0815-55120-007</strong>
            <span class="event-list-location">MyPlant - Conveyor line 4</span>
          </div>
          <time class="event-list-timestamp" datetime="2026-05-13T08:35:47">
            <span>2026-05-13</span>
            <span>08:35:47</span>
          </time>
        </div>
      </div>
      <IxIconButton
        slot="action"
        icon="context-menu"
        variant="subtle-tertiary"
        aria-label="Open menu for Drive overload"
      ></IxIconButton>
    </IxListItem>
  </IxList>
</template>
```

#### generic-list-custom-content.css
```css
.event-list-content {
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
  gap: 1rem;
  min-width: 0;
  padding-block: 0.25rem;
}

.event-list-status {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 0.25rem;
  padding-top: 0.25rem;
}

.event-list-status ix-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.event-list-body {
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
  gap: 0.5rem;
  min-width: 0;
}

.event-list-details {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
}

.event-list-title {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-width: 0;
}

.event-list-title strong,
.event-list-location {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.event-list-location,
.event-list-timestamp {
  color: var(--theme-color-soft-text);
}

.event-list-timestamp {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;

  span:first-of-type {
    line-height: 1.25rem;
  }
}
```

## User list
### React Examples

#### generic-list-users.tsx
```tsx
import './generic-list-users.scoped.css';

import {
  IxAvatar,
  IxIconButton,
  IxList,
  IxListItem,
  IxTypography,
} from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCheckbox,
  iconFolder,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

const notifications = [
  {
    label: 'first',
    time: 'Just now',
    title: 'This is the first title',
    description: 'This is a description of the first item',
  },
  {
    label: 'second',
    time: '5 minutes ago',
    title: 'This is the second title',
    description: 'This is a description of the second item',
  },
  {
    label: 'third',
    time: 'Yesterday',
    title: 'This is the third title',
    description: 'This is a description of the third item',
  },
];

export default function GenericListUsers() {
  addIcons({ iconCheckbox, iconFolder, iconTrashcan });

  return (
    <IxList className="notification-list">
      {notifications.map(({ label, time, title, description }) => (
        <IxListItem key={label} aria-label={`Notification: ${title}`}>
          <div slot="action" className="notification-item">
            <IxAvatar aria-hidden="true"></IxAvatar>
            <div className="notification-body">
              <div className="notification-text">
                <IxTypography format="body" textColor="soft">
                  <time>{time}</time>
                </IxTypography>
                <IxTypography format="body" bold>
                  {title}
                </IxTypography>
                <IxTypography format="body">{description}</IxTypography>
              </div>
              <div className="notification-actions">
                <IxIconButton
                  icon="checkbox"
                  size="16"
                  variant="subtle-tertiary"
                  aria-label={`Mark ${label} notification as read`}
                ></IxIconButton>
                <IxIconButton
                  icon="folder"
                  size="16"
                  variant="subtle-tertiary"
                  aria-label={`Archive ${label} notification`}
                ></IxIconButton>
                <IxIconButton
                  icon="trashcan"
                  size="16"
                  variant="subtle-tertiary"
                  aria-label={`Delete ${label} notification`}
                ></IxIconButton>
              </div>
            </div>
          </div>
        </IxListItem>
      ))}
    </IxList>
  );
}
```

#### generic-list-users.scoped.css
```css
.notification-list {
  display: block;
  width: 100%;
  max-width: 24.375rem;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 22.375rem;
  max-width: calc(100vw - 4rem);
  margin-left: -0.5rem;
  padding-block: 0.25rem;
  box-sizing: border-box;
}

.notification-item ix-avatar {
  flex: 0 0 2rem;
  padding-top: 0.25rem;
}

.notification-body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  min-width: 0;
  padding-right: 0.75rem;
}

.notification-text {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  min-width: 0;
}

.notification-text ix-typography {
  width: 100%;
  overflow-wrap: anywhere;
}

.notification-actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
```

### Angular Examples

#### generic-list-users.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCheckbox,
  iconFolder,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './generic-list-users.html',
  styleUrls: ['./generic-list-users.css'],
})
export default class GenericListUsers {
  constructor() {
    addIcons({ iconCheckbox, iconFolder, iconTrashcan });
  }
}
```

#### generic-list-users.html
```html
<ix-list class="notification-list">
  <ix-list-item aria-label="Notification: This is the first title">
    <div slot="action" class="notification-item">
      <ix-avatar aria-hidden="true"></ix-avatar>
      <div class="notification-body">
        <div class="notification-text">
          <ix-typography format="body" text-color="soft">
            <time>Just now</time>
          </ix-typography>
          <ix-typography format="body" bold>
            This is the first title
          </ix-typography>
          <ix-typography format="body">
            This is a description of the first item
          </ix-typography>
        </div>
        <div class="notification-actions">
          <ix-icon-button
            icon="checkbox"
            size="16"
            variant="subtle-tertiary"
            aria-label="Mark first notification as read"
          ></ix-icon-button>
          <ix-icon-button
            icon="folder"
            size="16"
            variant="subtle-tertiary"
            aria-label="Archive first notification"
          ></ix-icon-button>
          <ix-icon-button
            icon="trashcan"
            size="16"
            variant="subtle-tertiary"
            aria-label="Delete first notification"
          ></ix-icon-button>
        </div>
      </div>
    </div>
  </ix-list-item>

  <ix-list-item aria-label="Notification: This is the second title">
    <div slot="action" class="notification-item">
      <ix-avatar aria-hidden="true"></ix-avatar>
      <div class="notification-body">
        <div class="notification-text">
          <ix-typography format="body" text-color="soft">
            <time>5 minutes ago</time>
          </ix-typography>
          <ix-typography format="body" bold>
            This is the second title
          </ix-typography>
          <ix-typography format="body">
            This is a description of the second item
          </ix-typography>
        </div>
        <div class="notification-actions">
          <ix-icon-button
            icon="checkbox"
            size="16"
            variant="subtle-tertiary"
            aria-label="Mark second notification as read"
          ></ix-icon-button>
          <ix-icon-button
            icon="folder"
            size="16"
            variant="subtle-tertiary"
            aria-label="Archive second notification"
          ></ix-icon-button>
          <ix-icon-button
            icon="trashcan"
            size="16"
            variant="subtle-tertiary"
            aria-label="Delete second notification"
          ></ix-icon-button>
        </div>
      </div>
    </div>
  </ix-list-item>

  <ix-list-item aria-label="Notification: This is the third title">
    <div slot="action" class="notification-item">
      <ix-avatar aria-hidden="true"></ix-avatar>
      <div class="notification-body">
        <div class="notification-text">
          <ix-typography format="body" text-color="soft">
            <time>Yesterday</time>
          </ix-typography>
          <ix-typography format="body" bold>
            This is the third title
          </ix-typography>
          <ix-typography format="body">
            This is a description of the third item
          </ix-typography>
        </div>
        <div class="notification-actions">
          <ix-icon-button
            icon="checkbox"
            size="16"
            variant="subtle-tertiary"
            aria-label="Mark third notification as read"
          ></ix-icon-button>
          <ix-icon-button
            icon="folder"
            size="16"
            variant="subtle-tertiary"
            aria-label="Archive third notification"
          ></ix-icon-button>
          <ix-icon-button
            icon="trashcan"
            size="16"
            variant="subtle-tertiary"
            aria-label="Delete third notification"
          ></ix-icon-button>
        </div>
      </div>
    </div>
  </ix-list-item>
</ix-list>
```

#### generic-list-users.css
```css
.notification-list {
  display: block;
  width: 100%;
  max-width: 24.375rem;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 22.375rem;
  max-width: calc(100vw - 4rem);
  margin-left: -0.5rem;
  padding-block: 0.25rem;
  box-sizing: border-box;
}

.notification-item ix-avatar {
  flex: 0 0 2rem;
  padding-top: 0.25rem;
}

.notification-body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  min-width: 0;
  padding-right: 0.75rem;
}

.notification-text {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  min-width: 0;
}

.notification-text ix-typography {
  width: 100%;
  overflow-wrap: anywhere;
}

.notification-actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
```

### Angular Standalone Examples

#### generic-list-users.ts
```ts
import { Component } from '@angular/core';
import {
  IxAvatar,
  IxIconButton,
  IxList,
  IxListItem,
  IxTypography,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCheckbox,
  iconFolder,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  imports: [IxAvatar, IxIconButton, IxList, IxListItem, IxTypography],
  templateUrl: './generic-list-users.html',
  styleUrls: ['./generic-list-users.css'],
})
export default class GenericListUsers {
  constructor() {
    addIcons({ iconCheckbox, iconFolder, iconTrashcan });
  }
}
```

#### generic-list-users.html
```html
<ix-list class="notification-list">
  <ix-list-item aria-label="Notification: This is the first title">
    <div slot="action" class="notification-item">
      <ix-avatar aria-hidden="true"></ix-avatar>
      <div class="notification-body">
        <div class="notification-text">
          <ix-typography format="body" text-color="soft">
            <time>Just now</time>
          </ix-typography>
          <ix-typography format="body" bold>
            This is the first title
          </ix-typography>
          <ix-typography format="body">
            This is a description of the first item
          </ix-typography>
        </div>
        <div class="notification-actions">
          <ix-icon-button
            icon="checkbox"
            size="16"
            variant="subtle-tertiary"
            aria-label="Mark first notification as read"
          ></ix-icon-button>
          <ix-icon-button
            icon="folder"
            size="16"
            variant="subtle-tertiary"
            aria-label="Archive first notification"
          ></ix-icon-button>
          <ix-icon-button
            icon="trashcan"
            size="16"
            variant="subtle-tertiary"
            aria-label="Delete first notification"
          ></ix-icon-button>
        </div>
      </div>
    </div>
  </ix-list-item>

  <ix-list-item aria-label="Notification: This is the second title">
    <div slot="action" class="notification-item">
      <ix-avatar aria-hidden="true"></ix-avatar>
      <div class="notification-body">
        <div class="notification-text">
          <ix-typography format="body" text-color="soft">
            <time>5 minutes ago</time>
          </ix-typography>
          <ix-typography format="body" bold>
            This is the second title
          </ix-typography>
          <ix-typography format="body">
            This is a description of the second item
          </ix-typography>
        </div>
        <div class="notification-actions">
          <ix-icon-button
            icon="checkbox"
            size="16"
            variant="subtle-tertiary"
            aria-label="Mark second notification as read"
          ></ix-icon-button>
          <ix-icon-button
            icon="folder"
            size="16"
            variant="subtle-tertiary"
            aria-label="Archive second notification"
          ></ix-icon-button>
          <ix-icon-button
            icon="trashcan"
            size="16"
            variant="subtle-tertiary"
            aria-label="Delete second notification"
          ></ix-icon-button>
        </div>
      </div>
    </div>
  </ix-list-item>

  <ix-list-item aria-label="Notification: This is the third title">
    <div slot="action" class="notification-item">
      <ix-avatar aria-hidden="true"></ix-avatar>
      <div class="notification-body">
        <div class="notification-text">
          <ix-typography format="body" text-color="soft">
            <time>Yesterday</time>
          </ix-typography>
          <ix-typography format="body" bold>
            This is the third title
          </ix-typography>
          <ix-typography format="body">
            This is a description of the third item
          </ix-typography>
        </div>
        <div class="notification-actions">
          <ix-icon-button
            icon="checkbox"
            size="16"
            variant="subtle-tertiary"
            aria-label="Mark third notification as read"
          ></ix-icon-button>
          <ix-icon-button
            icon="folder"
            size="16"
            variant="subtle-tertiary"
            aria-label="Archive third notification"
          ></ix-icon-button>
          <ix-icon-button
            icon="trashcan"
            size="16"
            variant="subtle-tertiary"
            aria-label="Delete third notification"
          ></ix-icon-button>
        </div>
      </div>
    </div>
  </ix-list-item>
</ix-list>
```

#### generic-list-users.css
```css
.notification-list {
  display: block;
  width: 100%;
  max-width: 24.375rem;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 22.375rem;
  max-width: calc(100vw - 4rem);
  margin-left: -0.5rem;
  padding-block: 0.25rem;
  box-sizing: border-box;
}

.notification-item ix-avatar {
  flex: 0 0 2rem;
  padding-top: 0.25rem;
}

.notification-body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  min-width: 0;
  padding-right: 0.75rem;
}

.notification-text {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  min-width: 0;
}

.notification-text ix-typography {
  width: 100%;
  overflow-wrap: anywhere;
}

.notification-actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
```

### Vue Examples

#### generic-list-users.vue
```vue
<script setup lang="ts">
import {
  IxAvatar,
  IxIconButton,
  IxList,
  IxListItem,
  IxTypography,
} from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCheckbox,
  iconFolder,
  iconTrashcan,
} from '@siemens/ix-icons/icons';

addIcons({ iconCheckbox, iconFolder, iconTrashcan });
</script>

<style scoped src="./generic-list-users.css"></style>

<template>
  <IxList class="notification-list">
    <IxListItem aria-label="Notification: This is the first title">
      <div slot="action" class="notification-item">
        <IxAvatar aria-hidden="true"></IxAvatar>
        <div class="notification-body">
          <div class="notification-text">
            <IxTypography format="body" text-color="soft">
              <time>Just now</time>
            </IxTypography>
            <IxTypography format="body" bold>
              This is the first title
            </IxTypography>
            <IxTypography format="body">
              This is a description of the first item
            </IxTypography>
          </div>
          <div class="notification-actions">
            <IxIconButton
              icon="checkbox"
              size="16"
              variant="subtle-tertiary"
              aria-label="Mark first notification as read"
            ></IxIconButton>
            <IxIconButton
              icon="folder"
              size="16"
              variant="subtle-tertiary"
              aria-label="Archive first notification"
            ></IxIconButton>
            <IxIconButton
              icon="trashcan"
              size="16"
              variant="subtle-tertiary"
              aria-label="Delete first notification"
            ></IxIconButton>
          </div>
        </div>
      </div>
    </IxListItem>

    <IxListItem aria-label="Notification: This is the second title">
      <div slot="action" class="notification-item">
        <IxAvatar aria-hidden="true"></IxAvatar>
        <div class="notification-body">
          <div class="notification-text">
            <IxTypography format="body" text-color="soft">
              <time>5 minutes ago</time>
            </IxTypography>
            <IxTypography format="body" bold>
              This is the second title
            </IxTypography>
            <IxTypography format="body">
              This is a description of the second item
            </IxTypography>
          </div>
          <div class="notification-actions">
            <IxIconButton
              icon="checkbox"
              size="16"
              variant="subtle-tertiary"
              aria-label="Mark second notification as read"
            ></IxIconButton>
            <IxIconButton
              icon="folder"
              size="16"
              variant="subtle-tertiary"
              aria-label="Archive second notification"
            ></IxIconButton>
            <IxIconButton
              icon="trashcan"
              size="16"
              variant="subtle-tertiary"
              aria-label="Delete second notification"
            ></IxIconButton>
          </div>
        </div>
      </div>
    </IxListItem>

    <IxListItem aria-label="Notification: This is the third title">
      <div slot="action" class="notification-item">
        <IxAvatar aria-hidden="true"></IxAvatar>
        <div class="notification-body">
          <div class="notification-text">
            <IxTypography format="body" text-color="soft">
              <time>Yesterday</time>
            </IxTypography>
            <IxTypography format="body" bold>
              This is the third title
            </IxTypography>
            <IxTypography format="body">
              This is a description of the third item
            </IxTypography>
          </div>
          <div class="notification-actions">
            <IxIconButton
              icon="checkbox"
              size="16"
              variant="subtle-tertiary"
              aria-label="Mark third notification as read"
            ></IxIconButton>
            <IxIconButton
              icon="folder"
              size="16"
              variant="subtle-tertiary"
              aria-label="Archive third notification"
            ></IxIconButton>
            <IxIconButton
              icon="trashcan"
              size="16"
              variant="subtle-tertiary"
              aria-label="Delete third notification"
            ></IxIconButton>
          </div>
        </div>
      </div>
    </IxListItem>
  </IxList>
</template>
```

#### generic-list-users.css
```css
.notification-list {
  display: block;
  width: 100%;
  max-width: 24.375rem;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 22.375rem;
  max-width: calc(100vw - 4rem);
  margin-left: -0.5rem;
  padding-block: 0.25rem;
  box-sizing: border-box;
}

.notification-item ix-avatar {
  flex: 0 0 2rem;
  padding-top: 0.25rem;
}

.notification-body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  min-width: 0;
  padding-right: 0.75rem;
}

.notification-text {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  min-width: 0;
}

.notification-text ix-typography {
  width: 100%;
  overflow-wrap: anywhere;
}

.notification-actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
```

## Notification list
### React Examples

#### generic-list-notification-icon.tsx
```tsx
import './generic-list-notification-icon.scoped.css';

import { IxBadge, IxList, IxListItem, IxTypography } from '@siemens/ix-react';

const notifications = [
  {
    time: 'Just now',
    title: 'This is the first title',
    description: 'This is a description of the first item',
  },
  {
    time: '5 minutes ago',
    title: 'This is the second title',
    description: 'This is a description of the second item',
  },
  {
    time: 'Yesterday',
    title: 'This is the third title',
    description: 'This is a description of the third item',
  },
];

export default function GenericListNotificationIcon() {
  return (
    <IxList className="notification-icon-list">
      {notifications.map(({ time, title, description }) => (
        <IxListItem key={title} aria-label={`Notification: ${title}`}>
          <div className="notification-icon-item">
            <IxBadge
              type="status-icon"
              variant="info"
              role="img"
              aria-label="Information"
            ></IxBadge>
            <div className="notification-icon-text">
              <IxTypography format="body" textColor="soft">
                <time>{time}</time>
              </IxTypography>
              <IxTypography format="body" bold>
                {title}
              </IxTypography>
              <IxTypography format="body">{description}</IxTypography>
            </div>
          </div>
        </IxListItem>
      ))}
    </IxList>
  );
}
```

#### generic-list-notification-icon.scoped.css
```css
.notification-icon-list {
  display: block;
  width: 100%;
  max-width: 24.375rem;
}

.notification-icon-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 0 0 22.375rem;
  width: 22.375rem;
  max-width: calc(100vw - 4rem);
  margin-right: -0.5rem;
  padding-block: 0.25rem;
  box-sizing: border-box;
}

.notification-icon-item ix-badge {
  flex: 0 0 1.25rem;
}

.notification-icon-text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  min-width: 0;
  padding-right: 0.75rem;
}

.notification-icon-text ix-typography {
  width: 100%;
  overflow-wrap: anywhere;
}
```

### Angular Examples

#### generic-list-notification-icon.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './generic-list-notification-icon.html',
  styleUrls: ['./generic-list-notification-icon.css'],
})
export default class GenericListNotificationIcon {}
```

#### generic-list-notification-icon.html
```html
<ix-list class="notification-icon-list">
  <ix-list-item aria-label="Notification: This is the first title">
    <div class="notification-icon-item">
      <ix-badge
        type="status-icon"
        variant="info"
        role="img"
        aria-label="Information"
      ></ix-badge>
      <div class="notification-icon-text">
        <ix-typography format="body" text-color="soft">
          <time>Just now</time>
        </ix-typography>
        <ix-typography format="body" bold>
          This is the first title
        </ix-typography>
        <ix-typography format="body">
          This is a description of the first item
        </ix-typography>
      </div>
    </div>
  </ix-list-item>

  <ix-list-item aria-label="Notification: This is the second title">
    <div class="notification-icon-item">
      <ix-badge
        type="status-icon"
        variant="info"
        role="img"
        aria-label="Information"
      ></ix-badge>
      <div class="notification-icon-text">
        <ix-typography format="body" text-color="soft">
          <time>5 minutes ago</time>
        </ix-typography>
        <ix-typography format="body" bold>
          This is the second title
        </ix-typography>
        <ix-typography format="body">
          This is a description of the second item
        </ix-typography>
      </div>
    </div>
  </ix-list-item>

  <ix-list-item aria-label="Notification: This is the third title">
    <div class="notification-icon-item">
      <ix-badge
        type="status-icon"
        variant="info"
        role="img"
        aria-label="Information"
      ></ix-badge>
      <div class="notification-icon-text">
        <ix-typography format="body" text-color="soft">
          <time>Yesterday</time>
        </ix-typography>
        <ix-typography format="body" bold>
          This is the third title
        </ix-typography>
        <ix-typography format="body">
          This is a description of the third item
        </ix-typography>
      </div>
    </div>
  </ix-list-item>
</ix-list>
```

#### generic-list-notification-icon.css
```css
.notification-icon-list {
  display: block;
  width: 100%;
  max-width: 24.375rem;
}

.notification-icon-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 0 0 22.375rem;
  width: 22.375rem;
  max-width: calc(100vw - 4rem);
  margin-right: -0.5rem;
  padding-block: 0.25rem;
  box-sizing: border-box;
}

.notification-icon-item ix-badge {
  flex: 0 0 1.25rem;
}

.notification-icon-text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  min-width: 0;
  padding-right: 0.75rem;
}

.notification-icon-text ix-typography {
  width: 100%;
  overflow-wrap: anywhere;
}
```

### Angular Standalone Examples

#### generic-list-notification-icon.ts
```ts
import { Component } from '@angular/core';
import {
  IxBadge,
  IxList,
  IxListItem,
  IxTypography,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxBadge, IxList, IxListItem, IxTypography],
  templateUrl: './generic-list-notification-icon.html',
  styleUrls: ['./generic-list-notification-icon.css'],
})
export default class GenericListNotificationIcon {}
```

#### generic-list-notification-icon.html
```html
<ix-list class="notification-icon-list">
  <ix-list-item aria-label="Notification: This is the first title">
    <div class="notification-icon-item">
      <ix-badge
        type="status-icon"
        variant="info"
        role="img"
        aria-label="Information"
      ></ix-badge>
      <div class="notification-icon-text">
        <ix-typography format="body" text-color="soft">
          <time>Just now</time>
        </ix-typography>
        <ix-typography format="body" bold>
          This is the first title
        </ix-typography>
        <ix-typography format="body">
          This is a description of the first item
        </ix-typography>
      </div>
    </div>
  </ix-list-item>

  <ix-list-item aria-label="Notification: This is the second title">
    <div class="notification-icon-item">
      <ix-badge
        type="status-icon"
        variant="info"
        role="img"
        aria-label="Information"
      ></ix-badge>
      <div class="notification-icon-text">
        <ix-typography format="body" text-color="soft">
          <time>5 minutes ago</time>
        </ix-typography>
        <ix-typography format="body" bold>
          This is the second title
        </ix-typography>
        <ix-typography format="body">
          This is a description of the second item
        </ix-typography>
      </div>
    </div>
  </ix-list-item>

  <ix-list-item aria-label="Notification: This is the third title">
    <div class="notification-icon-item">
      <ix-badge
        type="status-icon"
        variant="info"
        role="img"
        aria-label="Information"
      ></ix-badge>
      <div class="notification-icon-text">
        <ix-typography format="body" text-color="soft">
          <time>Yesterday</time>
        </ix-typography>
        <ix-typography format="body" bold>
          This is the third title
        </ix-typography>
        <ix-typography format="body">
          This is a description of the third item
        </ix-typography>
      </div>
    </div>
  </ix-list-item>
</ix-list>
```

#### generic-list-notification-icon.css
```css
.notification-icon-list {
  display: block;
  width: 100%;
  max-width: 24.375rem;
}

.notification-icon-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 0 0 22.375rem;
  width: 22.375rem;
  max-width: calc(100vw - 4rem);
  margin-right: -0.5rem;
  padding-block: 0.25rem;
  box-sizing: border-box;
}

.notification-icon-item ix-badge {
  flex: 0 0 1.25rem;
}

.notification-icon-text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  min-width: 0;
  padding-right: 0.75rem;
}

.notification-icon-text ix-typography {
  width: 100%;
  overflow-wrap: anywhere;
}
```

### Vue Examples

#### generic-list-notification-icon.vue
```vue
<script setup lang="ts">
import { IxBadge, IxList, IxListItem, IxTypography } from '@siemens/ix-vue';
</script>

<style scoped src="./generic-list-notification-icon.css"></style>

<template>
  <IxList class="notification-icon-list">
    <IxListItem aria-label="Notification: This is the first title">
      <div class="notification-icon-item">
        <IxBadge
          type="status-icon"
          variant="info"
          role="img"
          aria-label="Information"
        ></IxBadge>
        <div class="notification-icon-text">
          <IxTypography format="body" text-color="soft">
            <time>Just now</time>
          </IxTypography>
          <IxTypography format="body" bold>
            This is the first title
          </IxTypography>
          <IxTypography format="body">
            This is a description of the first item
          </IxTypography>
        </div>
      </div>
    </IxListItem>

    <IxListItem aria-label="Notification: This is the second title">
      <div class="notification-icon-item">
        <IxBadge
          type="status-icon"
          variant="info"
          role="img"
          aria-label="Information"
        ></IxBadge>
        <div class="notification-icon-text">
          <IxTypography format="body" text-color="soft">
            <time>5 minutes ago</time>
          </IxTypography>
          <IxTypography format="body" bold>
            This is the second title
          </IxTypography>
          <IxTypography format="body">
            This is a description of the second item
          </IxTypography>
        </div>
      </div>
    </IxListItem>

    <IxListItem aria-label="Notification: This is the third title">
      <div class="notification-icon-item">
        <IxBadge
          type="status-icon"
          variant="info"
          role="img"
          aria-label="Information"
        ></IxBadge>
        <div class="notification-icon-text">
          <IxTypography format="body" text-color="soft">
            <time>Yesterday</time>
          </IxTypography>
          <IxTypography format="body" bold>
            This is the third title
          </IxTypography>
          <IxTypography format="body">
            This is a description of the third item
          </IxTypography>
        </div>
      </div>
    </IxListItem>
  </IxList>
</template>
```

#### generic-list-notification-icon.css
```css
.notification-icon-list {
  display: block;
  width: 100%;
  max-width: 24.375rem;
}

.notification-icon-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 0 0 22.375rem;
  width: 22.375rem;
  max-width: calc(100vw - 4rem);
  margin-right: -0.5rem;
  padding-block: 0.25rem;
  box-sizing: border-box;
}

.notification-icon-item ix-badge {
  flex: 0 0 1.25rem;
}

.notification-icon-text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  min-width: 0;
  padding-right: 0.75rem;
}

.notification-icon-text ix-typography {
  width: 100%;
  overflow-wrap: anywhere;
}
```

## API for ix-list

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| actionOnHover | { "Show action content on hover or focus for list items that do not define their own setting." } | action-on-hover | boolean \| undefined |  |
| actionSlotAlignment | { "Default action slot alignment for list items that do not define their own setting." } | action-slot-alignment | "center" \| "start" \| undefined |  |
| active | { "Enable activation for list items that do not define their own setting." } | active | boolean \| undefined |  |
| checkbox | { "Display selection checkboxes on list items that do not define their own setting." } | checkbox | boolean \| undefined |  |
| disabled | { "Default disabled state for list items that do not define their own state." } | disabled | boolean \| undefined |  |
| divider | { "Display dividers between direct list items with the `ghost` variant." } | divider | boolean | false |
| dragBehavior | { "Visual behavior used while dragging a list item." } | drag-behavior | "dynamic" \| "separator" | 'dynamic' |
| draggable | { "Enable drag-and-drop reordering of direct list items." } | draggable | boolean | false |
| i18nListItem | { "i18n fallback label for list items without a label." } | i18n-list-item | string | 'List item' |
| i18nReorderCancelled | { "i18n announcement when list item reordering is cancelled.\n\nUse `{item}` for the item label." } | i18n-reorder-cancelled | string | '{item} reorder cancelled.' |
| i18nReorderDropped | { "i18n announcement when a reordered list item is dropped.\n\nUse `{item}`, `{position}`, and `{total}` placeholders." } | i18n-reorder-dropped | string | '{item} dropped at position {position} of {total}.' |
| i18nReorderLifted | { "i18n announcement when a list item is lifted for reordering.\n\nUse `{item}` for the item label." } | i18n-reorder-lifted | string | '{item} lifted. Use arrow keys to move, Enter or Space to drop, and Escape to cancel.' |
| i18nReorderPosition | { "i18n announcement when a list item changes position.\n\nUse `{item}`, `{position}`, and `{total}` placeholders." } | i18n-reorder-position | string | '{item}, position {position} of {total}' |
| itemGap | { "Space between direct list items." } | item-gap | "lg" \| "md" \| "none" \| "sm" | 'sm' |
| variant | { "Default visual variant for list items that do not define their own variant." } | variant | "filled" \| "ghost" \| "outline" \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| itemOrderChange | { "Emitted after a list item has been reordered." } | itemOrderChange | { item: HTMLIxListItemElement; oldIndex: number; newIndex: number; } |

### Slot

| Name | Description |
| --- | --- |
| default | { "List items and optional group separators." } |

## API for ix-list-item

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| actionOnHover | { "Show action slot content only when the item is hovered or focused." } | action-on-hover | boolean | false |
| actionSlotAlignment | { "Vertical alignment of the action slot content." } | action-slot-alignment | "center" \| "start" | 'center' |
| active | { "Enable activation of the primary item surface." } | active | boolean | false |
| ariaLabelCheckbox | { "Accessible label for the selection checkbox." } | aria-label-checkbox | string | 'Select list item' |
| ariaLabelDragGripper | { "Accessible label for the drag gripper." } | aria-label-drag-gripper | string | 'Reorder list item' |
| ariaLabelIcon | { "Accessible label for the item icon." } | aria-label-icon | string \| undefined |  |
| checkbox | { "Display selection with checkbox semantics." } | checkbox | boolean | false |
| description | { "Supporting text displayed below the label." } | description | string \| undefined |  |
| disabled | { "Disable item activation and action controls." } | disabled | boolean | false |
| divider | { "Display a divider below this item when its variant is `ghost`." } | divider | boolean | false |
| icon | { "Icon displayed by the standard item layout." } | icon | string \| undefined |  |
| label | { "Label displayed by the standard item layout." } | label | string \| undefined |  |
| selected | { "Show the item as selected." } | selected | boolean | false |
| variant | { "Visual variant of the item." } | variant | "filled" \| "ghost" \| "outline" | 'filled' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| itemClick | { "Emitted when the primary item surface is activated." } | itemClick | HTMLIxListItemElement |
| selectedChange | { "Requests a controlled selection update when a checkbox item is activated." } | selectedChange | boolean |

### Slot

| Name | Description |
| --- | --- |
| default | { "Non-interactive custom content rendered after the standard icon, label, and description layout." } |
| action | { "Interactive trailing controls that do not activate the item." } |
