# Tree - Code

> Code examples and API documentation for the ix-tree, ix-tree-item

# Tree - Code

## Basic

### React Examples

#### tree.tsx
```tsx
import { TreeModel } from '@siemens/ix';
import { IxTree } from '@siemens/ix-react';
import { useState } from 'react';

type TreeData = {
  name: string;
};

export default () => {
  const [model] = useState<TreeModel<TreeData>>({
    root: {
      id: 'root',
      data: {
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
      },
      hasChildren: false,
      children: [],
    },
  });
  return (
    <div
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '40rem',
      }}
    >
      <IxTree root="root" model={model}></IxTree>
    </div>
  );
};
```

### Angular Examples

#### tree.ts
```ts
import { Component } from '@angular/core';
import { TreeModel } from '@siemens/ix';

@Component({
  standalone: false,
  selector: 'app-example',
  template: ` <div class="example">
    <ix-tree root="root" [model]="model"></ix-tree>
  </div>`,
  styles: [
    `
      .example {
        display: block;
        position: relative;
        height: 32rem;
        width: 100%;
      }
    `,
  ],
})
export default class Tree {
  model: TreeModel<{
    name: string;
  }> = {
    root: {
      id: 'root',
      data: {
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
      },
      hasChildren: false,
      children: [],
    },
  };
}
```

### Angular Standalone Examples

#### tree.ts
```ts
import { Component } from '@angular/core';
import { IxTree } from '@siemens/ix-angular/standalone';

import { TreeModel } from '@siemens/ix';

@Component({
  selector: 'app-example',
  imports: [IxTree],
  template: ` <div class="example">
    <ix-tree root="root" [model]="model"></ix-tree>
  </div>`,
  styles: [
    `
      .example {
        display: block;
        position: relative;
        height: 32rem;
        width: 100%;
      }
    `,
  ],
})
export default class Tree {
  model: TreeModel<{
    name: string;
  }> = {
    root: {
      id: 'root',
      data: {
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
      },
      hasChildren: false,
      children: [],
    },
  };
}
```

### Vue Examples

#### tree.vue
```vue
<script setup lang="ts">
import { TreeModel } from '@siemens/ix';
import { IxTree } from '@siemens/ix-vue';
import { onMounted, ref } from 'vue';

type TreeData = {
  name: string;
};

const model = ref<TreeModel<TreeData>>();

onMounted(() => {
  model.value = {
    root: {
      id: 'root',
      data: {
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
      },
      hasChildren: false,
      children: [],
    },
  };
});
</script>

<template>
  <div style="display: block; position: relative; width: 100%; height: 40rem">
    <IxTree root="root" :model="model"></IxTree>
  </div>
</template>
```

## Custom tree node

### React Examples

#### tree-custom.tsx
```tsx
import { TreeContext, TreeModel } from '@siemens/ix';
import { iconCut, iconPrint, iconStar } from '@siemens/ix-icons/icons';
import { IxButton, IxIcon, IxTree } from '@siemens/ix-react';
import { useState } from 'react';

type TreeData = {
  name: string;
  icon: string;
};

export default () => {
  const [context, setContext] = useState<TreeContext>();
  const [model] = useState<TreeModel<TreeData>>({
    root: {
      id: 'root',
      data: {
        icon: '',
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
        icon: iconStar,
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
        icon: iconCut,
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
        icon: iconPrint,
      },
      hasChildren: false,
      children: [],
    },
  });

  function expandAndSelect() {
    setContext({
      sample: {
        isExpanded: true,
        isSelected: false,
      },
      'sample-child-2': {
        isSelected: true,
        isExpanded: false,
      },
    });
  }

  return (
    <div
      style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '40rem',
      }}
    >
      <IxButton variant="tertiary" onClick={expandAndSelect} style={{ marginBottom: '2rem' }}>
        Expand Tree
      </IxButton>
      <IxTree
        root="root"
        model={model}
        context={context}
        onContextChange={({ detail }) => {
          setContext(detail);
        }}
        renderItem={(data: TreeData) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IxIcon
              name={data.icon}
              size="16"
              style={{
                marginInlineEnd: '0.5rem',
              }}
            />
            {data.name}
          </div>
        )}
      ></IxTree>
    </div>
  );
};
```

### Angular Examples

#### tree-custom.ts
```ts
import { Component } from '@angular/core';
import { TreeContext, TreeModel } from '@siemens/ix';

type TreeData = {
  name: string;
  icon: string;
};

@Component({
  standalone: false,
  selector: 'app-example',
  styles: [
    `
      .example {
        display: block;
        position: relative;
        height: 32rem;
        width: 100%;
      }
    `,
  ],
  template: `<div class="example">
    <ix-button variant="tertiary" id="expand" style="margin-bottom: 2rem" (click)="expandAndSelect()">Expand Tree</ix-button
    >
    <ix-tree
      root="root"
      [model]="model"
      [context]="context"
      [renderItem]="treeItem"
    ></ix-tree>
    <ng-template #treeItem let-item>
      <div style="display: flex; align-items: center">
        <ix-icon
          [name]="item.icon"
          size="16"
          style="margin-inline-end: 0.5rem"
        ></ix-icon>
        {{ item.name }}
      </div>
    </ng-template>
  </div>`,
})
export default class TreeCustom {
  context: TreeContext = {};
  model: TreeModel<TreeData> = {
    root: {
      id: 'root',
      data: {
        icon: '',
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
        icon: 'star',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
        icon: 'cut',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
        icon: 'print',
      },
      hasChildren: false,
      children: [],
    },
  };

  expandAndSelect() {
    this.context = {
      sample: {
        isExpanded: true,
        isSelected: false,
      },
      'sample-child-2': {
        isSelected: true,
        isExpanded: false,
      },
    };
  }
}
```

### Angular Standalone Examples

#### tree-custom.ts
```ts
import { Component } from '@angular/core';
import { IxButton, IxTree, IxIcon } from '@siemens/ix-angular/standalone';

import { TreeContext, TreeModel } from '@siemens/ix';

type TreeData = {
  name: string;
  icon: string;
};

@Component({
  selector: 'app-example',
  imports: [IxButton, IxTree, IxIcon],
  styles: [
    `
      .example {
        display: block;
        position: relative;
        height: 32rem;
        width: 100%;
      }
    `,
  ],
  template: `<div class="example">
    <ix-button variant="tertiary" id="expand" style="margin-bottom: 2rem" (click)="expandAndSelect()">Expand Tree</ix-button
    >
    <ix-tree
      root="root"
      [model]="model"
      [context]="context"
      [renderItem]="treeItem"
    ></ix-tree>
    <ng-template #treeItem let-item>
      <div style="display: flex; align-items: center">
        <ix-icon
          [name]="item.icon"
          size="16"
          style="margin-inline-end: 0.5rem;"
        ></ix-icon>
        {{ item.name }}
      </div>
    </ng-template>
  </div>`,
})
export default class TreeCustom {
  context: TreeContext = {};
  model: TreeModel<TreeData> = {
    root: {
      id: 'root',
      data: {
        icon: '',
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
        icon: 'star',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
        icon: 'cut',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
        icon: 'print',
      },
      hasChildren: false,
      children: [],
    },
  };

  expandAndSelect() {
    this.context = {
      sample: {
        isExpanded: true,
        isSelected: false,
      },
      'sample-child-2': {
        isSelected: true,
        isExpanded: false,
      },
    };
  }
}
```

### Vue Examples

#### tree-custom.vue
```vue
<script setup lang="ts">
import { TreeContext, TreeModel } from '@siemens/ix';
import { IxButton, IxTree } from '@siemens/ix-vue';
import { defineComponent, onMounted, ref } from 'vue';

type TreeData = {
  name: string;
  icon: string;
};

const context = ref<TreeContext>();
const model = ref<TreeModel<TreeData>>();

function renderItem(data: TreeData) {
  return defineComponent({
    setup: () => {
      data;
    },
    template: `
    <div style="display: flex; align-items: center">
      <IxIcon :name="data.icon" size="16" style="margin-inline-end: 0.5rem" />
      {{ data.name }}
    </div>`,
  });
}

function expandAndSelect() {
  context.value = {
    sample: {
      isExpanded: true,
      isSelected: false,
    },
    'sample-child-2': {
      isSelected: true,
      isExpanded: false,
    },
  };
}

onMounted(() => {
  model.value = {
    root: {
      id: 'root',
      data: {
        icon: '',
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
        icon: 'star',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
        icon: 'cut',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
        icon: 'print',
      },
      hasChildren: false,
      children: [],
    },
  };
});
</script>

<template>
  <div style="display: block; position: relative; width: 100%; height: 40rem">
    <IxButton variant="tertiary" @click="expandAndSelect" style="margin-bottom: 2rem">
      Expand Tree
    </IxButton>
    <IxTree
      root="root"
      :model="model"
      :context="context"
      @contextChange="({ detail }) => (context = detail)"
    >
    </IxTree>
  </div>
</template>
```

## API for ix-tree

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| context | Selection and collapsed state management | context | { [x: string]: TreeItemContext; } | {} |
| model | Tree model | model | { [x: string]: TreeItem ; } | {} |
| renderItem | Render function of tree items | render-item | ( (index: number, data: T, dataList: T[], context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement) \| undefined |  |
| root | Initial root element will not be rendered | root | string | 'root' |
| toggleOnItemClick | Enable to toggle items by click on the item | toggle-on-item-click | boolean \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| contextChange | Context changed | contextChange | { [x: string]: TreeItemContext; } |
| nodeClicked | Node clicked event | nodeClicked | string |
| nodeRemoved | Emits removed nodes | nodeRemoved | any |
| nodeToggled | Node toggled event | nodeToggled | { id: string; isExpanded: boolean; } |

## API for ix-tree-item

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelChevronIcon | ARIA label for the chevron icon | aria-label-chevron-icon | string \| undefined |  |
| context | Context | context | TreeItemContext \| undefined |  |
| hasChildren | Has tree item children | has-children | boolean | false |
| text | Text | text | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| itemClick | Click on item not on the expand/collapse icon | itemClick | void |
| toggle | Expand/Collapsed toggled | toggle | void |
