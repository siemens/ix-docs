```ts
import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-example',
  templateUrl: './aggrid.html',
})
export default class AGGrid {
  gridOptions = {
    columnDefs: [
      {
        field: 'type',
        headerName: 'Type',
        resizable: true,
        checkboxSelection: true,
      },
      {
        field: 'status',
        headerName: 'Status',
        resizable: true,
        sortable: true,
        filter: true,
      },
      { field: 'hwVersion', headerName: 'HW version', resizable: true },
    ],
    rowData: [
      {
        type: 'Equipment',
        status: 'Normal',
        hwVersion: '2.0',
        checked: false,
      },
      {
        type: 'Positioner',
        status: 'Maintenance',
        hwVersion: '1.0',
        checked: true,
      },
      {
        type: 'Pressure sensor',
        status: 'Unknown',
        hwVersion: 'N/A',
        checked: false,
      },
    ],
    rowSelection: 'multiple',
    suppressCellFocus: true,
    checkboxSelection: true,
  } as GridOptions;
}
```
