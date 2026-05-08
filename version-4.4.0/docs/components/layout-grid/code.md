# Layout grid - Code

> Code examples and API documentation for the ix-layout-grid, ix-col

# Layout grid - Code

## Basic

### React Examples

#### grid.tsx
```tsx
import './grid.scoped.css';

import { IxCol, IxLayoutGrid, IxRow, IxTypography } from '@siemens/ix-react';

export default () => {
  return (
    <div className="grid">
      <IxLayoutGrid>
        <IxRow>
          <IxCol>
            <IxTypography format="display">1</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">2</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">3</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">4</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">5</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">6</IxTypography>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>

      <IxLayoutGrid>
        <IxRow>
          <IxCol>
            <IxTypography format="display">1</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">2</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">3</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">4</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">5</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">6</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">7</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">8</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">9</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">10</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">11</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">12</IxTypography>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>
    </div>
  );
};
```

#### grid.scoped.css
```css
.grid {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-ghost);
}

.grid > ix-layout-grid {
  margin-bottom: 1rem;
}

.grid > ix-layout-grid > ix-row > ix-col ix-typography {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 3px;
}
```

### Angular Examples

#### grid.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './grid.html',
  styleUrls: ['./grid.css'],
})
export default class Grid {}
```

#### grid.html
```html
<div class="grid">
  <ix-layout-grid>
    <ix-row>
      <ix-col><ix-typography format="display">1</ix-typography></ix-col>
      <ix-col><ix-typography format="display">2</ix-typography></ix-col>
      <ix-col><ix-typography format="display">3</ix-typography></ix-col>
      <ix-col><ix-typography format="display">4</ix-typography></ix-col>
      <ix-col><ix-typography format="display">5</ix-typography></ix-col>
      <ix-col><ix-typography format="display">6</ix-typography></ix-col>
    </ix-row>
  </ix-layout-grid>

  <ix-layout-grid>
    <ix-row>
      <ix-col><ix-typography format="display">1</ix-typography></ix-col>
      <ix-col><ix-typography format="display">2</ix-typography></ix-col>
      <ix-col><ix-typography format="display">3</ix-typography></ix-col>
      <ix-col><ix-typography format="display">4</ix-typography></ix-col>
      <ix-col><ix-typography format="display">5</ix-typography></ix-col>
      <ix-col><ix-typography format="display">6</ix-typography></ix-col>
      <ix-col><ix-typography format="display">7</ix-typography></ix-col>
      <ix-col><ix-typography format="display">8</ix-typography></ix-col>
      <ix-col><ix-typography format="display">9</ix-typography></ix-col>
      <ix-col><ix-typography format="display">10</ix-typography></ix-col>
      <ix-col><ix-typography format="display">11</ix-typography></ix-col>
      <ix-col><ix-typography format="display">12</ix-typography></ix-col>
    </ix-row>
  </ix-layout-grid>
</div>
```

#### grid.css
```css
.grid {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-ghost);
}

.grid > ix-layout-grid {
  margin-bottom: 1rem;
}

.grid > ix-layout-grid > ix-row > ix-col ix-typography {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 3px;
}
```

### Angular Standalone Examples

#### grid.ts
```ts
import { Component } from '@angular/core';
import {
  IxLayoutGrid,
  IxRow,
  IxCol,
  IxTypography,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLayoutGrid, IxRow, IxCol, IxTypography],
  templateUrl: './grid.html',
  styleUrls: ['./grid.css'],
})
export default class Grid {}
```

#### grid.html
```html
<div class="grid">
  <ix-layout-grid>
    <ix-row>
      <ix-col><ix-typography format="display">1</ix-typography></ix-col>
      <ix-col><ix-typography format="display">2</ix-typography></ix-col>
      <ix-col><ix-typography format="display">3</ix-typography></ix-col>
      <ix-col><ix-typography format="display">4</ix-typography></ix-col>
      <ix-col><ix-typography format="display">5</ix-typography></ix-col>
      <ix-col><ix-typography format="display">6</ix-typography></ix-col>
    </ix-row>
  </ix-layout-grid>

  <ix-layout-grid>
    <ix-row>
      <ix-col><ix-typography format="display">1</ix-typography></ix-col>
      <ix-col><ix-typography format="display">2</ix-typography></ix-col>
      <ix-col><ix-typography format="display">3</ix-typography></ix-col>
      <ix-col><ix-typography format="display">4</ix-typography></ix-col>
      <ix-col><ix-typography format="display">5</ix-typography></ix-col>
      <ix-col><ix-typography format="display">6</ix-typography></ix-col>
      <ix-col><ix-typography format="display">7</ix-typography></ix-col>
      <ix-col><ix-typography format="display">8</ix-typography></ix-col>
      <ix-col><ix-typography format="display">9</ix-typography></ix-col>
      <ix-col><ix-typography format="display">10</ix-typography></ix-col>
      <ix-col><ix-typography format="display">11</ix-typography></ix-col>
      <ix-col><ix-typography format="display">12</ix-typography></ix-col>
    </ix-row>
  </ix-layout-grid>
</div>
```

#### grid.css
```css
.grid {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-ghost);
}

.grid > ix-layout-grid {
  margin-bottom: 1rem;
}

.grid > ix-layout-grid > ix-row > ix-col ix-typography {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 3px;
}
```

### Vue Examples

#### grid.vue
```vue
<script setup lang="ts">
import { IxCol, IxLayoutGrid, IxRow, IxTypography } from '@siemens/ix-vue';
</script>

<style scoped src="./grid.css"></style>

<template>
  <div class="grid">
    <IxLayoutGrid>
      <IxRow>
        <IxCol><IxTypography format="display">1</IxTypography></IxCol>
        <IxCol><IxTypography format="display">2</IxTypography></IxCol>
        <IxCol><IxTypography format="display">3</IxTypography></IxCol>
        <IxCol><IxTypography format="display">4</IxTypography></IxCol>
        <IxCol><IxTypography format="display">5</IxTypography></IxCol>
        <IxCol><IxTypography format="display">6</IxTypography></IxCol>
      </IxRow>
    </IxLayoutGrid>

    <IxLayoutGrid>
      <IxRow>
        <IxCol><IxTypography format="display">1</IxTypography></IxCol>
        <IxCol><IxTypography format="display">2</IxTypography></IxCol>
        <IxCol><IxTypography format="display">3</IxTypography></IxCol>
        <IxCol><IxTypography format="display">4</IxTypography></IxCol>
        <IxCol><IxTypography format="display">5</IxTypography></IxCol>
        <IxCol><IxTypography format="display">6</IxTypography></IxCol>
        <IxCol><IxTypography format="display">7</IxTypography></IxCol>
        <IxCol><IxTypography format="display">8</IxTypography></IxCol>
        <IxCol><IxTypography format="display">9</IxTypography></IxCol>
        <IxCol><IxTypography format="display">10</IxTypography></IxCol>
        <IxCol><IxTypography format="display">11</IxTypography></IxCol>
        <IxCol><IxTypography format="display">12</IxTypography></IxCol>
      </IxRow>
    </IxLayoutGrid>
  </div>
</template>
```

#### grid.css
```css
.grid {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-ghost);
}

.grid > ix-layout-grid {
  margin-bottom: 1rem;
}

.grid > ix-layout-grid > ix-row > ix-col ix-typography {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 3px;
}
```

## Size

### React Examples

#### grid-size.tsx
```tsx
import './grid-size.scoped.css';

import { IxCol, IxLayoutGrid, IxRow, IxTypography } from '@siemens/ix-react';

export default () => {
  return (
    <div className="grid">
      <h4>Column 6 takes up more space to a max of 12 columns total</h4>
      <IxLayoutGrid>
        <IxRow>
          <IxCol>
            <IxTypography format="display">1</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">2</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">3</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">4</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">5</IxTypography>
          </IxCol>
          <IxCol size="6">
            <IxTypography format="display">6</IxTypography>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>

      <h4>Stack columns on smaller screens</h4>
      <IxLayoutGrid>
        <IxRow>
          <IxCol size="12" size-md="3">
            <IxTypography format="display">1</IxTypography>
          </IxCol>
          <IxCol size="12" size-md="3">
            <IxTypography format="display">2</IxTypography>
          </IxCol>
          <IxCol size="12" size-md="3">
            <IxTypography format="display">3</IxTypography>
          </IxCol>
          <IxCol size="12" size-md="3">
            <IxTypography format="display">4</IxTypography>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>
    </div>
  );
};
```

#### grid-size.scoped.css
```css
.grid {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-ghost);
}

.grid > ix-layout-grid {
  margin-bottom: 1rem;
}

.grid > ix-layout-grid > ix-row > ix-col ix-typography {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 3px;
}
```

### Angular Examples

#### grid-size.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './grid-size.html',
  styleUrls: ['./grid-size.css'],
})
export default class GridSize {}
```

#### grid-size.html
```html
<div class="grid">
  <h4>Column 6 takes up more space to a max of 12 columns total</h4>
  <ix-layout-grid>
    <ix-row>
      <ix-col><ix-typography format="display">1</ix-typography></ix-col>
      <ix-col><ix-typography format="display">2</ix-typography></ix-col>
      <ix-col><ix-typography format="display">3</ix-typography></ix-col>
      <ix-col><ix-typography format="display">4</ix-typography></ix-col>
      <ix-col><ix-typography format="display">5</ix-typography></ix-col>
      <ix-col size="6"
        ><ix-typography format="display">6</ix-typography></ix-col
      >
    </ix-row>
  </ix-layout-grid>

  <h4>Stack columns on smaller screens</h4>
  <ix-layout-grid>
    <ix-row>
      <ix-col size="12" size-md="3"
        ><ix-typography format="display">1</ix-typography></ix-col
      >
      <ix-col size="12" size-md="3"
        ><ix-typography format="display">2</ix-typography></ix-col
      >
      <ix-col size="12" size-md="3"
        ><ix-typography format="display">3</ix-typography></ix-col
      >
      <ix-col size="12" size-md="3"
        ><ix-typography format="display">4</ix-typography></ix-col
      >
    </ix-row>
  </ix-layout-grid>
</div>
```

#### grid-size.css
```css
.grid {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-ghost);
}

.grid > ix-layout-grid {
  margin-bottom: 1rem;
}

.grid > ix-layout-grid > ix-row > ix-col ix-typography {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 3px;
}
```

### Angular Standalone Examples

#### grid-size.ts
```ts
import { Component } from '@angular/core';
import {
  IxLayoutGrid,
  IxRow,
  IxCol,
  IxTypography,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLayoutGrid, IxRow, IxCol, IxTypography],
  templateUrl: './grid-size.html',
  styleUrls: ['./grid-size.css'],
})
export default class GridSize {}
```

#### grid-size.html
```html
<div class="grid">
  <h4>Column 6 takes up more space to a max of 12 columns total</h4>
  <ix-layout-grid>
    <ix-row>
      <ix-col><ix-typography format="display">1</ix-typography></ix-col>
      <ix-col><ix-typography format="display">2</ix-typography></ix-col>
      <ix-col><ix-typography format="display">3</ix-typography></ix-col>
      <ix-col><ix-typography format="display">4</ix-typography></ix-col>
      <ix-col><ix-typography format="display">5</ix-typography></ix-col>
      <ix-col size="6"
        ><ix-typography format="display">6</ix-typography></ix-col
      >
    </ix-row>
  </ix-layout-grid>

  <h4>Stack columns on smaller screens</h4>
  <ix-layout-grid>
    <ix-row>
      <ix-col size="12" size-md="3"
        ><ix-typography format="display">1</ix-typography></ix-col
      >
      <ix-col size="12" size-md="3"
        ><ix-typography format="display">2</ix-typography></ix-col
      >
      <ix-col size="12" size-md="3"
        ><ix-typography format="display">3</ix-typography></ix-col
      >
      <ix-col size="12" size-md="3"
        ><ix-typography format="display">4</ix-typography></ix-col
      >
    </ix-row>
  </ix-layout-grid>
</div>
```

#### grid-size.css
```css
.grid {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-ghost);
}

.grid > ix-layout-grid {
  margin-bottom: 1rem;
}

.grid > ix-layout-grid > ix-row > ix-col ix-typography {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 3px;
}
```

### Vue Examples

#### grid-size.vue
```vue
<script setup lang="ts">
import { IxCol, IxLayoutGrid, IxRow, IxTypography } from '@siemens/ix-vue';
</script>

<style scoped src="./grid-size.css"></style>

<template>
  <div class="grid">
    <h4>Column 6 takes up more space to a max of 12 columns total</h4>
    <IxLayoutGrid>
      <IxRow>
        <IxCol><IxTypography format="display">1</IxTypography></IxCol>
        <IxCol><IxTypography format="display">2</IxTypography></IxCol>
        <IxCol><IxTypography format="display">3</IxTypography></IxCol>
        <IxCol><IxTypography format="display">4</IxTypography></IxCol>
        <IxCol><IxTypography format="display">5</IxTypography></IxCol>
        <IxCol size="6"><IxTypography format="display">6</IxTypography></IxCol>
      </IxRow>
    </IxLayoutGrid>

    <h4>Stack columns on smaller screens</h4>
    <IxLayoutGrid>
      <IxRow>
        <IxCol size="12" size-md="3">
          <IxTypography format="display">1</IxTypography>
        </IxCol>
        <IxCol size="12" size-md="3">
          <IxTypography format="display">2</IxTypography>
        </IxCol>
        <IxCol size="12" size-md="3">
          <IxTypography format="display">3</IxTypography>
        </IxCol>
        <IxCol size="12" size-md="3">
          <IxTypography format="display">4</IxTypography>
        </IxCol>
      </IxRow>
    </IxLayoutGrid>
  </div>
</template>
```

#### grid-size.css
```css
.grid {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-ghost);
}

.grid > ix-layout-grid {
  margin-bottom: 1rem;
}

.grid > ix-layout-grid > ix-row > ix-col ix-typography {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 3px;
}
```

## Padding

### React Examples

#### grid-padding.tsx
```tsx
import './grid-padding.scoped.css';

import { IxCol, IxLayoutGrid, IxRow, IxTypography } from '@siemens/ix-react';

export default () => {
  return (
    <div className="grid">
      <h4>Grid with margin</h4>
      <IxLayoutGrid>
        <IxRow>
          <IxCol>
            <IxTypography format="display">1</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">2</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">3</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">4</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">5</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">6</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">7</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">8</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">9</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">10</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">11</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">12</IxTypography>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>

      <h4>Grid without margin</h4>
      <IxLayoutGrid noMargin>
        <IxRow>
          <IxCol>
            <IxTypography format="display">1</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">2</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">3</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">4</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">5</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">6</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">7</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">8</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">9</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">10</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">11</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">12</IxTypography>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>
    </div>
  );
};
```

#### grid-padding.scoped.css
```css
.grid {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-ghost);
}

.grid > ix-layout-grid {
  margin-bottom: 1rem;
}

.grid > ix-layout-grid > ix-row > ix-col ix-typography {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 3px;
}
```

### Angular Examples

#### grid-padding.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './grid-padding.html',
  styleUrls: ['./grid-padding.css'],
})
export default class GridPadding {}
```

#### grid-padding.html
```html
<div class="grid">
  <h4>Grid with margin</h4>
  <ix-layout-grid>
    <ix-row>
      <ix-col><ix-typography format="display">1</ix-typography></ix-col>
      <ix-col><ix-typography format="display">2</ix-typography></ix-col>
      <ix-col><ix-typography format="display">3</ix-typography></ix-col>
      <ix-col><ix-typography format="display">4</ix-typography></ix-col>
      <ix-col><ix-typography format="display">5</ix-typography></ix-col>
      <ix-col><ix-typography format="display">6</ix-typography></ix-col>
      <ix-col><ix-typography format="display">7</ix-typography></ix-col>
      <ix-col><ix-typography format="display">8</ix-typography></ix-col>
      <ix-col><ix-typography format="display">9</ix-typography></ix-col>
      <ix-col><ix-typography format="display">10</ix-typography></ix-col>
      <ix-col><ix-typography format="display">11</ix-typography></ix-col>
      <ix-col><ix-typography format="display">12</ix-typography></ix-col>
    </ix-row>
  </ix-layout-grid>

  <h4>Grid without margin</h4>
  <ix-layout-grid no-margin>
    <ix-row>
      <ix-col><ix-typography format="display">1</ix-typography></ix-col>
      <ix-col><ix-typography format="display">2</ix-typography></ix-col>
      <ix-col><ix-typography format="display">3</ix-typography></ix-col>
      <ix-col><ix-typography format="display">4</ix-typography></ix-col>
      <ix-col><ix-typography format="display">5</ix-typography></ix-col>
      <ix-col><ix-typography format="display">6</ix-typography></ix-col>
      <ix-col><ix-typography format="display">7</ix-typography></ix-col>
      <ix-col><ix-typography format="display">8</ix-typography></ix-col>
      <ix-col><ix-typography format="display">9</ix-typography></ix-col>
      <ix-col><ix-typography format="display">10</ix-typography></ix-col>
      <ix-col><ix-typography format="display">11</ix-typography></ix-col>
      <ix-col><ix-typography format="display">12</ix-typography></ix-col>
    </ix-row>
  </ix-layout-grid>
</div>
```

#### grid-padding.css
```css
.grid {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-ghost);
}

.grid > ix-layout-grid {
  margin-bottom: 1rem;
}

.grid > ix-layout-grid > ix-row > ix-col ix-typography {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 3px;
}
```

### Angular Standalone Examples

#### grid-padding.ts
```ts
import { Component } from '@angular/core';
import {
  IxLayoutGrid,
  IxRow,
  IxCol,
  IxTypography,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxLayoutGrid, IxRow, IxCol, IxTypography],
  templateUrl: './grid-padding.html',
  styleUrls: ['./grid-padding.css'],
})
export default class GridPadding {}
```

#### grid-padding.html
```html
<div class="grid">
  <h4>Grid with margin</h4>
  <ix-layout-grid>
    <ix-row>
      <ix-col><ix-typography format="display">1</ix-typography></ix-col>
      <ix-col><ix-typography format="display">2</ix-typography></ix-col>
      <ix-col><ix-typography format="display">3</ix-typography></ix-col>
      <ix-col><ix-typography format="display">4</ix-typography></ix-col>
      <ix-col><ix-typography format="display">5</ix-typography></ix-col>
      <ix-col><ix-typography format="display">6</ix-typography></ix-col>
      <ix-col><ix-typography format="display">7</ix-typography></ix-col>
      <ix-col><ix-typography format="display">8</ix-typography></ix-col>
      <ix-col><ix-typography format="display">9</ix-typography></ix-col>
      <ix-col><ix-typography format="display">10</ix-typography></ix-col>
      <ix-col><ix-typography format="display">11</ix-typography></ix-col>
      <ix-col><ix-typography format="display">12</ix-typography></ix-col>
    </ix-row>
  </ix-layout-grid>

  <h4>Grid without margin</h4>
  <ix-layout-grid no-margin>
    <ix-row>
      <ix-col><ix-typography format="display">1</ix-typography></ix-col>
      <ix-col><ix-typography format="display">2</ix-typography></ix-col>
      <ix-col><ix-typography format="display">3</ix-typography></ix-col>
      <ix-col><ix-typography format="display">4</ix-typography></ix-col>
      <ix-col><ix-typography format="display">5</ix-typography></ix-col>
      <ix-col><ix-typography format="display">6</ix-typography></ix-col>
      <ix-col><ix-typography format="display">7</ix-typography></ix-col>
      <ix-col><ix-typography format="display">8</ix-typography></ix-col>
      <ix-col><ix-typography format="display">9</ix-typography></ix-col>
      <ix-col><ix-typography format="display">10</ix-typography></ix-col>
      <ix-col><ix-typography format="display">11</ix-typography></ix-col>
      <ix-col><ix-typography format="display">12</ix-typography></ix-col>
    </ix-row>
  </ix-layout-grid>
</div>
```

#### grid-padding.css
```css
.grid {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-ghost);
}

.grid > ix-layout-grid {
  margin-bottom: 1rem;
}

.grid > ix-layout-grid > ix-row > ix-col ix-typography {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 3px;
}
```

### Vue Examples

#### grid-padding.vue
```vue
<script setup lang="ts">
import { IxCol, IxLayoutGrid, IxRow, IxTypography } from '@siemens/ix-vue';
</script>

<style scoped src="./grid-padding.css"></style>

<template>
  <div class="grid">
    <h4>Grid with margin</h4>
    <IxLayoutGrid>
      <IxRow>
        <IxCol><IxTypography format="display">1</IxTypography></IxCol>
        <IxCol><IxTypography format="display">2</IxTypography></IxCol>
        <IxCol><IxTypography format="display">3</IxTypography></IxCol>
        <IxCol><IxTypography format="display">4</IxTypography></IxCol>
        <IxCol><IxTypography format="display">5</IxTypography></IxCol>
        <IxCol><IxTypography format="display">6</IxTypography></IxCol>
        <IxCol><IxTypography format="display">7</IxTypography></IxCol>
        <IxCol><IxTypography format="display">8</IxTypography></IxCol>
        <IxCol><IxTypography format="display">9</IxTypography></IxCol>
        <IxCol><IxTypography format="display">10</IxTypography></IxCol>
        <IxCol><IxTypography format="display">11</IxTypography></IxCol>
        <IxCol><IxTypography format="display">12</IxTypography></IxCol>
      </IxRow>
    </IxLayoutGrid>

    <h4>Grid without margin</h4>
    <IxLayoutGrid noMargin>
      <IxRow>
        <IxCol><IxTypography format="display">1</IxTypography></IxCol>
        <IxCol><IxTypography format="display">2</IxTypography></IxCol>
        <IxCol><IxTypography format="display">3</IxTypography></IxCol>
        <IxCol><IxTypography format="display">4</IxTypography></IxCol>
        <IxCol><IxTypography format="display">5</IxTypography></IxCol>
        <IxCol><IxTypography format="display">6</IxTypography></IxCol>
        <IxCol><IxTypography format="display">7</IxTypography></IxCol>
        <IxCol><IxTypography format="display">8</IxTypography></IxCol>
        <IxCol><IxTypography format="display">9</IxTypography></IxCol>
        <IxCol><IxTypography format="display">10</IxTypography></IxCol>
        <IxCol><IxTypography format="display">11</IxTypography></IxCol>
        <IxCol><IxTypography format="display">12</IxTypography></IxCol>
      </IxRow>
    </IxLayoutGrid>
  </div>
</template>
```

#### grid-padding.css
```css
.grid {
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  background-color: var(--theme-color-ghost);
}

.grid > ix-layout-grid {
  margin-bottom: 1rem;
}

.grid > ix-layout-grid > ix-row > ix-col ix-typography {
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border: 1px solid var(--theme-color-soft-bdr);
  background: var(--theme-color-ghost);
  border-radius: 3px;
}
```

## API for ix-layout-grid

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| columns | Overwrite the default number of columns. Choose between 2 and 12 columns. | columns | number | 12 |
| gap | Grid gap | gap | "12" \| "16" \| "24" \| "8" | '24' |
| noMargin | The grid will not have any horizontal padding | no-margin | boolean | false |

## API for ix-col

### Properties

| Name | Description | Attribute | Type |
| --- | --- | --- | --- |
| size | Size of the column | size | "1" \| "10" \| "11" \| "12" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9" \| "auto" \| undefined |
| sizeLg | Size of the column for lg screens | size-lg | "1" \| "10" \| "11" \| "12" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9" \| "auto" \| undefined |
| sizeMd | Size of the column for md screens | size-md | "1" \| "10" \| "11" \| "12" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9" \| "auto" \| undefined |
| sizeSm | Size of the column for sm screens | size-sm | "1" \| "10" \| "11" \| "12" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9" \| "auto" \| undefined |
