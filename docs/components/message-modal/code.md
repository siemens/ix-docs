# Code

> Code examples and API documentation for the ix-modal

How to open a message modal is independent of the framework in use. Note that you need to import `showMessage` from the core package `@siemens/ix`.

`showMessage` provides multiple pre-configured messages:

- info
- warning
- error
- success
- question

### React Examples

#### message.tsx
```tsx
import { IxButton, showMessage } from '@siemens/ix-react';

export default () => {
  const triggerMessage = async () => {
    (
      await showMessage.success(
        'Example title',
        'message',
        'Save',
        'Cancel',
        'payload:save',
        'payload:cancel'
      )
    ).once(console.log);
  };
  return (
    <IxButton onClick={() => triggerMessage()}>Show 'success' message</IxButton>
  );
};
```

### Angular Examples

#### message.ts
```ts
import { Component, inject } from '@angular/core';
import { MessageService } from '@siemens/ix-angular';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button (click)="triggerMessage()">Show 'success' message</ix-button>
  `,
})
export default class Message {
  private readonly messageService = inject(MessageService);

  triggerMessage = async () => {
    (
      await this.messageService.success(
        'Example title',
        'message',
        'Save',
        'Cancel',
        'payload:save',
        'payload:cancel'
      )
    ).once(console.log);
  };
}
```

### Angular Standalone Examples

#### message.ts
```ts
import { Component, inject } from '@angular/core';
import { IxButton, MessageService } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button (click)="triggerMessage()">Show 'success' message</ix-button>
  `,
})
export default class Message {
  private readonly messageService = inject(MessageService);

  triggerMessage = async () => {
    (
      await this.messageService.success(
        'Example title',
        'message',
        'Save',
        'Cancel',
        'payload:save',
        'payload:cancel'
      )
    ).once(console.log);
  };
}
```

### Vue Examples

#### message.vue
```vue
<script setup lang="ts">
import { IxButton, showMessage } from '@siemens/ix-vue';

const triggerMessage = async () => {
  (
    await showMessage.success(
      'Example title',
      'message',
      'Save',
      'Cancel',
      'payload:save',
      'payload:cancel'
    )
  ).once(console.log);
};
</script>

<template>
  <IxButton @click="triggerMessage">Show 'success' message</IxButton>
</template>
```

The `showMessage` method returns a Listener with the following signature:

```ts
TypedEvent<{
  actionId: string;
  payload: T;
}>;
```

`actionId` represents the configured action button.

## API for message modal utils (JavaScript, React, Vue)

### Functions

#### createShowMessage

```ts
createShowMessage(dependencies: ShowMessageDependencies): ShowMessage;
```

{ "Create a message modal helper with custom element dependencies." }

#### showMessage&lt;T&gt;

```ts
showMessage&lt;T&gt;(config: MessageConfig&lt;T&gt;): ShowMessageResult&lt;T&gt;;
```

{ "Displays a message modal with configurable actions and returns an event emitter for action responses" }

## API for MessageService (Angular)

### Functions

#### caution

```ts
caution(args: unknown): ShowMessageResult&lt;unknown&gt;;
```

{ "Displays a caution message modal with a warning-rhomb icon" }

#### critical

```ts
critical(args: unknown): ShowMessageResult&lt;unknown&gt;;
```

{ "Displays a critical message modal with a warning-octagon icon" }

#### danger

```ts
danger(args: unknown): ShowMessageResult&lt;unknown&gt;;
```

{ "Displays a danger message modal with an alarm icon" }

#### error

```ts
error(args: unknown): ShowMessageResult&lt;unknown&gt;;
```

{ "Displays an error message modal with an error icon" }

#### information

```ts
information(args: unknown): ShowMessageResult&lt;unknown&gt;;
```

{ "Displays an information message modal with an info icon" }

#### question

```ts
question(args: unknown): ShowMessageResult&lt;unknown&gt;;
```

{ "Displays a question message modal with a question icon" }

#### showMessage&lt;T&gt;

```ts
showMessage&lt;T&gt;(config: MessageConfig&lt;T&gt;): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

{ "" }

#### success

```ts
success(args: unknown): ShowMessageResult&lt;unknown&gt;;
```

{ "Displays a success message modal with a success icon" }

#### warning

```ts
warning(args: unknown): ShowMessageResult&lt;unknown&gt;;
```

{ "Displays a warning message modal with a warning icon" }
