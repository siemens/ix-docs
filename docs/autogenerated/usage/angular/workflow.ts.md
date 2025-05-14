```ts
import { Component } from '@angular/core';

@Component({
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
