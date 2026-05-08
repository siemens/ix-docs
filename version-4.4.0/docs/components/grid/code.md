# Angular data grid - Code

> Code examples and API documentation for the ix-aggrid

# Angular data grid - Code

:::info
AG Grid is a third party library that provides a feature rich data grid implementation.

Its basic functionality is free and open source (distributed under the [MIT license](https://www.ag-grid.com/eula/AG-Grid-Community-License.html)).

Please note that more advanced features like e.g. Row Grouping are only available with AG Grid Enterprise which is a commercial product.

More information can be found on the [AG Grid licenses page](https://www.ag-grid.com/license-pricing).
:::

## Installation

- **React**: Follow the official AG Grid [installation instructions](https://www.ag-grid.com/react-data-grid/getting-started/) for React.
- **Angular**: Follow the official AG Grid [installation instructions](https://www.ag-grid.com/angular-data-grid/getting-started/) for Angular.
- **Vue**: Follow the official AG Grid [installation instructions](https://www.ag-grid.com/vue-data-grid/getting-started/) for Vue.
- **Javascript**: Follow the official AG Grid [installation instruction](https://www.ag-grid.com/javascript-data-grid/getting-started/) for JavaScript.

:::note
AG Grid version 33 or higher is required.
:::

## Siemens Industrial Experience theme for AG Grid

Install the `@siemens/ix-aggrid` package.

```shell
npm install @siemens/ix-aggrid
```

Import and configure the IX theme:

```javascript
import { getIxTheme, getIxThemeAsync } from '@siemens/ix-aggrid';

// Get iX theme based on your AG Grid module
const ixTheme = getIxTheme(agGrid);
// Alternative: Use async import
const ixTheme = await getIxThemeAsync(() => import('ag-grid-community'));

// Option 1: Set the theme per grid instance
const gridOptions = {
  theme: ixTheme,
  // ... other options
};

// Option 2: Set the theme globally for all grids
// Note: Must be called before initializing any grid instance
agGrid.provideGlobalGridOptions({
  theme: ixTheme,
});
```

## Basic

### React Examples

#### aggrid.tsx
```tsx
import { useEffect, useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { getIxTheme } from '@siemens/ix-aggrid';
import {
  ModuleRegistry,
  AllCommunityModule,
  GridOptions,
} from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

export default () => {
  const [gridOptions, setGridOptions] = useState<GridOptions | null>(null);

  useEffect(() => {
    const initializeGrid = () => {
      const ixTheme = getIxTheme(agGrid);

      setGridOptions({
        theme: ixTheme,
        rowDragManaged: true,
        tooltipShowDelay: 500,
        rowSelection: {
          mode: 'multiRow',
          checkboxes: true,
          headerCheckbox: true,
          selectAll: 'filtered',
        },
        columnDefs: [
          {
            field: 'type',
            headerName: 'Type',
            resizable: true,
            rowDrag: true,
            tooltipField: 'type',
          },
          {
            field: 'status',
            headerName: 'Status',
            resizable: true,
            sortable: true,
            filter: true,
            tooltipValueGetter: (params) => {
              return `Status: ${params.value} - Type: ${params.data.type}`;
            },
          },
          {
            field: 'hwVersion',
            headerName: 'HW version',
            resizable: true,
            tooltipValueGetter: (params) => {
              if (params.value === 'N/A') {
                return 'Hardware version not available';
              }
              return `Hardware Version ${params.value}`;
            },
          },
        ],
        rowData: [
          {
            type: 'Equipment',
            status: 'Normal',
            hwVersion: '2.0',
          },
          {
            type: 'Positioner',
            status: 'Maintenance',
            hwVersion: '1.0',
          },
          {
            type: 'Pressure sensor',
            status: 'Unknown',
            hwVersion: 'N/A',
          },
        ],
        suppressCellFocus: true,
      });
    };

    initializeGrid();
  }, []);

  if (!gridOptions) {
    return null;
  }

  return (
    <div style={{ height: '12rem', width: '100%' }}>
      <AgGridReact gridOptions={gridOptions}></AgGridReact>
    </div>
  );
};
```

### Angular Examples

#### aggrid.ts
```ts
import { Component, OnInit } from '@angular/core';
import { getIxTheme } from '@siemens/ix-aggrid';
import {
  GridOptions,
  AllCommunityModule,
  ModuleRegistry,
} from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './aggrid.html',
})
export default class AGGrid implements OnInit {
  gridOptions: GridOptions | null = null;

  ngOnInit() {
    const ixTheme = getIxTheme(agGrid);

    this.gridOptions = {
      theme: ixTheme,
      rowDragManaged: true,
      tooltipShowDelay: 500,
      rowSelection: {
        mode: 'multiRow',
        checkboxes: true,
        headerCheckbox: true,
        selectAll: 'filtered',
      },
      columnDefs: [
        {
          field: 'type',
          headerName: 'Type',
          resizable: true,
          rowDrag: true,
          tooltipField: 'type',
        },
        {
          field: 'status',
          headerName: 'Status',
          resizable: true,
          sortable: true,
          filter: true,
          tooltipValueGetter: (params) => {
            return `Status: ${params.value} - Type: ${params.data.type}`;
          },
        },
        {
          field: 'hwVersion',
          headerName: 'HW version',
          resizable: true,
          tooltipValueGetter: (params) => {
            if (params.value === 'N/A') {
              return 'Hardware version not available';
            }
            return `Hardware Version ${params.value}`;
          },
        },
      ],
      rowData: [
        {
          type: 'Equipment',
          status: 'Normal',
          hwVersion: '2.0',
        },
        {
          type: 'Positioner',
          status: 'Maintenance',
          hwVersion: '1.0',
        },
        {
          type: 'Pressure sensor',
          status: 'Unknown',
          hwVersion: 'N/A',
        },
      ],
      suppressCellFocus: true,
    };
  }
}
```

#### aggrid.html
```html
@if (gridOptions) {
<ag-grid-angular style="height: 12rem; width: 100%" [gridOptions]="gridOptions">
</ag-grid-angular>
}
```

### Angular Standalone Examples

#### aggrid.ts
```ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getIxTheme } from '@siemens/ix-aggrid';
import { AgGridAngular } from 'ag-grid-angular';
import {
  GridOptions,
  AllCommunityModule,
  ModuleRegistry,
} from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-example',
  imports: [AgGridAngular, CommonModule],
  templateUrl: './aggrid.html',
})
export default class AGGrid implements OnInit {
  gridOptions: GridOptions | null = null;

  ngOnInit() {
    const ixTheme = getIxTheme(agGrid);

    this.gridOptions = {
      theme: ixTheme,
      rowDragManaged: true,
      tooltipShowDelay: 500,
      rowSelection: {
        mode: 'multiRow',
        checkboxes: true,
        headerCheckbox: true,
        selectAll: 'filtered',
      },
      columnDefs: [
        {
          field: 'type',
          headerName: 'Type',
          resizable: true,
          rowDrag: true,
          tooltipField: 'type',
        },
        {
          field: 'status',
          headerName: 'Status',
          resizable: true,
          sortable: true,
          filter: true,
          tooltipValueGetter: (params) => {
            return `Status: ${params.value} - Type: ${params.data.type}`;
          },
        },
        {
          field: 'hwVersion',
          headerName: 'HW version',
          resizable: true,
          tooltipValueGetter: (params) => {
            if (params.value === 'N/A') {
              return 'Hardware version not available';
            }
            return `Hardware Version ${params.value}`;
          },
        },
      ],
      rowData: [
        {
          type: 'Equipment',
          status: 'Normal',
          hwVersion: '2.0',
        },
        {
          type: 'Positioner',
          status: 'Maintenance',
          hwVersion: '1.0',
        },
        {
          type: 'Pressure sensor',
          status: 'Unknown',
          hwVersion: 'N/A',
        },
      ],
      suppressCellFocus: true,
    };
  }
}
```

#### aggrid.html
```html
@if (gridOptions) {
<ag-grid-angular style="height: 12rem; width: 100%" [gridOptions]="gridOptions">
</ag-grid-angular>
}
```

### Vue Examples

#### aggrid.vue
```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';
import { getIxTheme } from '@siemens/ix-aggrid';
import {
  ModuleRegistry,
  AllCommunityModule,
  GridOptions,
} from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

const gridOptions = ref<GridOptions | null>(null);

onMounted(() => {
  const ixTheme = getIxTheme(agGrid);

  gridOptions.value = {
    theme: ixTheme,
    rowDragManaged: true,
    tooltipShowDelay: 500,
    rowSelection: {
      mode: 'multiRow',
      checkboxes: true,
      headerCheckbox: true,
      selectAll: 'filtered',
    },
    columnDefs: [
      {
        field: 'type',
        headerName: 'Type',
        resizable: true,
        rowDrag: true,
        tooltipField: 'type',
      },
      {
        field: 'status',
        headerName: 'Status',
        resizable: true,
        sortable: true,
        filter: true,
        tooltipValueGetter: (params) => {
          return `Status: ${params.value} - Type: ${params.data.type}`;
        },
      },
      {
        field: 'hwVersion',
        headerName: 'HW version',
        resizable: true,
        tooltipValueGetter: (params) => {
          if (params.value === 'N/A') {
            return 'Hardware version not available';
          }
          return `Hardware Version ${params.value}`;
        },
      },
    ],
    rowData: [
      {
        type: 'Equipment',
        status: 'Normal',
        hwVersion: '2.0',
      },
      {
        type: 'Positioner',
        status: 'Maintenance',
        hwVersion: '1.0',
      },
      {
        type: 'Pressure sensor',
        status: 'Unknown',
        hwVersion: 'N/A',
      },
    ],
    suppressCellFocus: true,
  };
});
</script>

<template>
  <AgGridVue
    v-if="gridOptions"
    style="height: 12rem; width: 100%"
    :gridOptions="gridOptions"
  >
  </AgGridVue>
</template>
```
