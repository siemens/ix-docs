# Workflow - Code

> Code examples and API documentation for the ix-workflow-step, ix-workflow-steps

# Workflow - Code

## Basic

### React Examples

#### workflow.tsx
```tsx
import './workflow.scoped.css';

import { IxWorkflowStep, IxWorkflowSteps } from '@siemens/ix-react';

export default () => {
  return (
    <IxWorkflowSteps>
      <IxWorkflowStep status="done">Step 1</IxWorkflowStep>
      <IxWorkflowStep status="success">Step 2</IxWorkflowStep>
      <IxWorkflowStep status="open">Step 3</IxWorkflowStep>
      <IxWorkflowStep status="warning">Step 4</IxWorkflowStep>
      <IxWorkflowStep status="error">Step 5</IxWorkflowStep>
      <IxWorkflowStep disabled>Step 6</IxWorkflowStep>
    </IxWorkflowSteps>
  );
};
```

#### workflow.scoped.css
```css
body {
  overflow-x: scroll;
}
```

### Angular Examples

#### workflow.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-workflow-steps>
      <ix-workflow-step status="done">Step 1</ix-workflow-step>
      <ix-workflow-step status="success">Step 2</ix-workflow-step>
      <ix-workflow-step status="open">Step 3</ix-workflow-step>
      <ix-workflow-step status="warning">Step 4</ix-workflow-step>
      <ix-workflow-step status="error">Step 5</ix-workflow-step>
      <ix-workflow-step disabled>Step 6</ix-workflow-step>
    </ix-workflow-steps>
  `,
  styleUrls: ['./workflow.css'],
})
export default class Workflow {}
```

#### workflow.css
```css
body {
  overflow-x: scroll;
}
```

### Angular Standalone Examples

#### workflow.ts
```ts
import { Component } from '@angular/core';
import {
  IxWorkflowSteps,
  IxWorkflowStep,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxWorkflowSteps, IxWorkflowStep],
  template: `
    <ix-workflow-steps>
      <ix-workflow-step status="done">Step 1</ix-workflow-step>
      <ix-workflow-step status="success">Step 2</ix-workflow-step>
      <ix-workflow-step status="open">Step 3</ix-workflow-step>
      <ix-workflow-step status="warning">Step 4</ix-workflow-step>
      <ix-workflow-step status="error">Step 5</ix-workflow-step>
      <ix-workflow-step disabled>Step 6</ix-workflow-step>
    </ix-workflow-steps>
  `,
  styleUrls: ['./workflow.css'],
})
export default class Workflow {}
```

#### workflow.css
```css
body {
  overflow-x: scroll;
}
```

### Vue Examples

#### workflow.vue
```vue
<script setup lang="ts">
import { IxWorkflowStep, IxWorkflowSteps } from '@siemens/ix-vue';
</script>

<style scoped src="./workflow.css"></style>

<template>
  <IxWorkflowSteps>
    <IxWorkflowStep status="done">Step 1</IxWorkflowStep>
    <IxWorkflowStep status="success">Step 2</IxWorkflowStep>
    <IxWorkflowStep status="open">Step 3</IxWorkflowStep>
    <IxWorkflowStep status="warning">Step 4</IxWorkflowStep>
    <IxWorkflowStep status="error">Step 5</IxWorkflowStep>
    <IxWorkflowStep disabled>Step 6</IxWorkflowStep>
  </IxWorkflowSteps>
</template>
```

#### workflow.css
```css
body {
  overflow-x: scroll;
}
```

## Vertical

### React Examples

#### workflow-vertical.tsx
```tsx
import { IxWorkflowStep, IxWorkflowSteps } from '@siemens/ix-react';

export default () => {
  return (
    <IxWorkflowSteps vertical>
      <IxWorkflowStep status="done">Step 1</IxWorkflowStep>
      <IxWorkflowStep status="success">Step 2</IxWorkflowStep>
      <IxWorkflowStep status="open">Step 3</IxWorkflowStep>
      <IxWorkflowStep status="warning">Step 4</IxWorkflowStep>
      <IxWorkflowStep status="error">Step 5</IxWorkflowStep>
      <IxWorkflowStep disabled>Step 6</IxWorkflowStep>
    </IxWorkflowSteps>
  );
};
```

### Angular Examples

#### workflow-vertical.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-workflow-steps vertical>
      <ix-workflow-step status="done">Step 1</ix-workflow-step>
      <ix-workflow-step status="success">Step 2</ix-workflow-step>
      <ix-workflow-step status="open">Step 3</ix-workflow-step>
      <ix-workflow-step status="warning">Step 4</ix-workflow-step>
      <ix-workflow-step status="error">Step 5</ix-workflow-step>
      <ix-workflow-step disabled>Step 6</ix-workflow-step>
    </ix-workflow-steps>
  `,
})
export default class WorkflowVertical {}
```

### Angular Standalone Examples

#### workflow-vertical.ts
```ts
import { Component } from '@angular/core';
import {
  IxWorkflowSteps,
  IxWorkflowStep,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxWorkflowSteps, IxWorkflowStep],
  template: `
    <ix-workflow-steps vertical>
      <ix-workflow-step status="done">Step 1</ix-workflow-step>
      <ix-workflow-step status="success">Step 2</ix-workflow-step>
      <ix-workflow-step status="open">Step 3</ix-workflow-step>
      <ix-workflow-step status="warning">Step 4</ix-workflow-step>
      <ix-workflow-step status="error">Step 5</ix-workflow-step>
      <ix-workflow-step disabled>Step 6</ix-workflow-step>
    </ix-workflow-steps>
  `,
})
export default class WorkflowVertical {}
```

### Vue Examples

#### workflow-vertical.vue
```vue
<script setup lang="ts">
import { IxWorkflowStep, IxWorkflowSteps } from '@siemens/ix-vue';
</script>

<template>
  <IxWorkflowSteps vertical>
    <IxWorkflowStep status="done">Step 1</IxWorkflowStep>
    <IxWorkflowStep status="success">Step 2</IxWorkflowStep>
    <IxWorkflowStep status="open">Step 3</IxWorkflowStep>
    <IxWorkflowStep status="warning">Step 4</IxWorkflowStep>
    <IxWorkflowStep status="error">Step 5</IxWorkflowStep>
    <IxWorkflowStep disabled>Step 6</IxWorkflowStep>
  </IxWorkflowSteps>
</template>
```

## API for ix-workflow-step

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| clickable | Activate navigation click | clickable | boolean | false |
| disabled | Set disabled | disabled | boolean | false |
| selected | Set selected | selected | boolean | false |
| status | Set status | status | "done" \| "error" \| "open" \| "success" \| "warning" | 'open' |
| vertical | Select orientation | vertical | boolean | false |

## API for ix-workflow-steps

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| clickable | Activate navigation click | clickable | boolean | false |
| selectedIndex | Activate navigation click | selected-index | number | 0 |
| vertical | Select orientation | vertical | boolean | false |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| stepSelected | On step selected event | stepSelected | number |
