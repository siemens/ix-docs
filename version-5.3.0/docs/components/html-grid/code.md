# HTML table - Code

> Code examples and API documentation for the html-table

# HTML table - Code

## Basic

### React Examples

#### html-table.tsx
```tsx
export default () => {
  return (
    <table className="ix-table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Type</th>
          <th scope="col">Status</th>
          <th scope="col">HW Version</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Equipment</td>
          <td>Normal</td>
          <td>2.0</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Positioner</td>
          <td>Maintenance</td>
          <td>1.0</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Pressure sensor</td>
          <td>Unknown</td>
          <td>N/A</td>
        </tr>
      </tbody>
    </table>
  );
};
```

### Angular Examples

#### html-table.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './html-table.html',
})
export default class HtmlTable {}
```

#### html-table.html
```html
<table class="ix-table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Type</th>
      <th scope="col">Status</th>
      <th scope="col">HW Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Equipment</td>
      <td>Normal</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Positioner</td>
      <td>Maintenance</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Pressure sensor</td>
      <td>Unknown</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>
```

### Angular Standalone Examples

#### html-table.ts
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './html-table.html',
})
export default class HtmlTable {}
```

#### html-table.html
```html
<table class="ix-table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Type</th>
      <th scope="col">Status</th>
      <th scope="col">HW Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Equipment</td>
      <td>Normal</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Positioner</td>
      <td>Maintenance</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Pressure sensor</td>
      <td>Unknown</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>
```

### Vue Examples

#### html-table.vue
```vue
<template>
  <table class="ix-table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Type</th>
        <th scope="col">Status</th>
        <th scope="col">HW Version</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Equipment</td>
        <td>Normal</td>
        <td>2.0</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Positioner</td>
        <td>Maintenance</td>
        <td>1.0</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Pressure sensor</td>
        <td>Unknown</td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</template>
```

## Striped

### React Examples

#### html-table-striped.tsx
```tsx
export default () => {
  return (
    <table className="ix-table ix-table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Type</th>
          <th scope="col">Status</th>
          <th scope="col">HW Version</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Equipment</td>
          <td>Normal</td>
          <td>2.0</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Positioner</td>
          <td>Maintenance</td>
          <td>1.0</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Pressure sensor</td>
          <td>Unknown</td>
          <td>N/A</td>
        </tr>
      </tbody>
    </table>
  );
};
```

### Angular Examples

#### html-table-striped.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './html-table-striped.html',
})
export default class HtmlTableStriped {}
```

#### html-table-striped.html
```html
<table class="ix-table ix-table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Type</th>
      <th scope="col">Status</th>
      <th scope="col">HW Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Equipment</td>
      <td>Normal</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Positioner</td>
      <td>Maintenance</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Pressure sensor</td>
      <td>Unknown</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>
```

### Angular Standalone Examples

#### html-table-striped.ts
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './html-table-striped.html',
})
export default class HtmlTableStriped {}
```

#### html-table-striped.html
```html
<table class="ix-table ix-table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Type</th>
      <th scope="col">Status</th>
      <th scope="col">HW Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Equipment</td>
      <td>Normal</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Positioner</td>
      <td>Maintenance</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Pressure sensor</td>
      <td>Unknown</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>
```

### Vue Examples

#### html-table-striped.vue
```vue
<template>
  <table class="ix-table ix-table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Type</th>
        <th scope="col">Status</th>
        <th scope="col">HW Version</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Equipment</td>
        <td>Normal</td>
        <td>2.0</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Positioner</td>
        <td>Maintenance</td>
        <td>1.0</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Pressure sensor</td>
        <td>Unknown</td>
        <td>N/A</td>
      </tr>
    </tbody>
  </table>
</template>
```
