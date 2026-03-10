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
import { Component } from '@angular/core';
import { MessageService } from '@siemens/ix-angular';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button (click)="triggerMessage()">Show 'success' message</ix-button>
  `,
})
export default class Message {
  constructor(private readonly messageService: MessageService) {}

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
import { Component } from '@angular/core';
import { IxButton, MessageService } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button (click)="triggerMessage()">Show 'success' message</ix-button>
  `,
})
export default class Message {
  constructor(private readonly messageService: MessageService) {}

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

#### showMessage

```ts
showMessage(config: MessageConfig&lt;T&gt;): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

Displays a message modal with configurable actions and returns an event emitter for action responses

#### showMessage.error

```ts
showMessage.error(title: string, message: string, textOkay: string, textCancel: string, payloadOkay: any, payloadCancel: any): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

Displays an error message modal with an error icon

#### showMessage.info

```ts
showMessage.info(title: string, message: string, textOkay: string, textCancel: string, payloadOkay: any, payloadCancel: any): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

Displays an info message modal with an info icon

#### showMessage.question

```ts
showMessage.question(title: string, message: string, textOkay: string, textCancel: string, payloadOkay: any, payloadCancel: any): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

Displays a question message modal with a question icon

#### showMessage.success

```ts
showMessage.success(title: string, message: string, textOkay: string, textCancel: string, payloadOkay: any, payloadCancel: any): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

Displays a success message modal with a success icon

#### showMessage.warning

```ts
showMessage.warning(title: string, message: string, textOkay: string, textCancel: string, payloadOkay: any, payloadCancel: any): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

Displays a warning message modal with a warning icon

## API for MessageService (Angular)

### Functions

#### error

```ts
error(title: string, message: string, textOkay: string, textCancel: string, payloadOkay: any, payloadCancel: any): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

Displays an error message modal with an error icon

#### info

```ts
info(title: string, message: string, textOkay: string, textCancel: string, payloadOkay: any, payloadCancel: any): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

Displays an info message modal with an info icon

#### question

```ts
question(title: string, message: string, textOkay: string, textCancel: string, payloadOkay: any, payloadCancel: any): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

Displays a question message modal with a question icon

#### showMessage

```ts
showMessage(config: MessageConfig&lt;T&gt;): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

#### success

```ts
success(title: string, message: string, textOkay: string, textCancel: string, payloadOkay: any, payloadCancel: any): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

Displays a success message modal with a success icon

#### warning

```ts
warning(title: string, message: string, textOkay: string, textCancel: string, payloadOkay: any, payloadCancel: any): Promise&lt;TypedEvent&lt;unknown&gt;&gt;;
```

Displays a warning message modal with a warning icon
