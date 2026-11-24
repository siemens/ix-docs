# Message bar - Code

> Code examples and API documentation for the ix-message-bar

# Message bar - Code

The message bar Web Component only provides the visual appearance of the message bar.
To fully utilize the message bar, you need to implement a mechanism to remove it from the DOM when it is no longer needed.
This typically involves handling the close event and updating the state of your application to reflect the removal of the message bar.

## Basics

### React Examples

#### message-bar.tsx
```tsx
import './message-bar.scoped.css';

import { IxButton, IxMessageBar } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div className="message-bar">
        <IxMessageBar persistent type="error">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="danger">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="warning">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="caution">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="success">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="information">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="neutral">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="accent">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="critical">
          Message text
        </IxMessageBar>
        <IxMessageBar persistent type="danger">
          <div className="message-bar-with-action">
            Message text <IxButton>Action</IxButton>
          </div>
        </IxMessageBar>
      </div>
    </>
  );
};
```

#### message-bar.scoped.css
```css
.message-bar {
  margin: 0.5rem;
}

.message-bar > ix-message-bar {
  margin-bottom: 0.5rem;
  display: block;
}

.message-bar-with-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### Angular Examples

#### message-bar.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './message-bar.html',
  styleUrls: ['./message-bar.css'],
})
export default class MessageBar {}
```

#### message-bar.html
```html
<div class="message-bar">
  <ix-message-bar persistent type="error">Message text</ix-message-bar>
  <ix-message-bar persistent type="danger">Message text</ix-message-bar>
  <ix-message-bar persistent type="warning">Message text</ix-message-bar>
  <ix-message-bar persistent type="caution">Message text</ix-message-bar>
  <ix-message-bar persistent type="success">Message text</ix-message-bar>
  <ix-message-bar persistent type="information">Message text</ix-message-bar>
  <ix-message-bar persistent type="neutral">Message text</ix-message-bar>
  <ix-message-bar persistent type="accent">Message text</ix-message-bar>
  <ix-message-bar persistent type="critical">Message text</ix-message-bar>
  <ix-message-bar persistent type="danger">
    <div class="message-bar-with-action">
      Message text
      <ix-button>Action</ix-button>
    </div>
  </ix-message-bar>
</div>
```

#### message-bar.css
```css
.message-bar {
  margin: 0.5rem;
}

.message-bar > ix-message-bar {
  margin-bottom: 0.5rem;
  display: block;
}

.message-bar-with-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### Angular Standalone Examples

#### message-bar.ts
```ts
import { Component } from '@angular/core';
import { IxButton, IxMessageBar } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxMessageBar, IxButton],
  template: `
    <div class="message-bar">
      <ix-message-bar persistent type="error">Message text</ix-message-bar>
      <ix-message-bar persistent type="danger">Message text</ix-message-bar>
      <ix-message-bar persistent type="warning">Message text</ix-message-bar>
      <ix-message-bar persistent type="caution">Message text</ix-message-bar>
      <ix-message-bar persistent type="success">Message text</ix-message-bar>
      <ix-message-bar persistent type="information"
        >Message text</ix-message-bar
      >
      <ix-message-bar persistent type="neutral">Message text</ix-message-bar>
      <ix-message-bar persistent type="accent">Message text</ix-message-bar>
      <ix-message-bar persistent type="critical">Message text</ix-message-bar>
      <ix-message-bar persistent type="danger">
        <div class="message-bar-with-action">
          Message text
          <ix-button>Action</ix-button>
        </div>
      </ix-message-bar>
    </div>
  `,
  styleUrls: ['./message-bar.css'],
})
export default class MessageBar {}
```

#### message-bar.css
```css
.message-bar {
  margin: 0.5rem;
}

.message-bar > ix-message-bar {
  margin-bottom: 0.5rem;
  display: block;
}

.message-bar-with-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### Vue Examples

#### message-bar.vue
```vue
<script setup lang="ts">
import { IxButton, IxMessageBar } from '@siemens/ix-vue';
</script>

<style scoped src="./message-bar.css"></style>

<template>
  <div class="message-bar">
    <IxMessageBar persistent type="error">Message text</IxMessageBar>
    <IxMessageBar persistent type="danger">Message text</IxMessageBar>
    <IxMessageBar persistent type="warning">Message text</IxMessageBar>
    <IxMessageBar persistent type="caution">Message text</IxMessageBar>
    <IxMessageBar persistent type="success">Message text</IxMessageBar>
    <IxMessageBar persistent type="information">Message text</IxMessageBar>
    <IxMessageBar persistent type="neutral">Message text</IxMessageBar>
    <IxMessageBar persistent type="accent">Message text</IxMessageBar>
    <IxMessageBar persistent type="critical">Message text</IxMessageBar>
    <IxMessageBar persistent type="danger">
      <div class="message-bar-with-action">
        Message text
        <IxButton>Action</IxButton>
      </div>
    </IxMessageBar>
  </div>
</template>
```

#### message-bar.css
```css
.message-bar {
  margin: 0.5rem;
}

.message-bar > ix-message-bar {
  margin-bottom: 0.5rem;
  display: block;
}

.message-bar-with-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

## Dismissible

### React Examples

#### message-bar-removal.tsx
```tsx
import './message-bar.scoped.css';

import { IxMessageBar, IxButton } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [messageBarVisible, setMessageBarVisible] = useState(true);

  const handleCloseAnimationCompleted = () => {
    setMessageBarVisible(false);
  };

  const handleShowMessage = () => {
    setMessageBarVisible(true);
  };

  return (
    <div className="message-bar">
      {messageBarVisible && (
        <IxMessageBar
          onCloseAnimationCompleted={handleCloseAnimationCompleted}
        >
          Message text
        </IxMessageBar>
      )}
      {!messageBarVisible && (
        <IxButton onClick={handleShowMessage}>
          Show message bar
        </IxButton>
      )}
    </div>
  );
};
```

### Angular Examples

#### message-bar-removal.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-message-bar-single-removal',
  templateUrl: './message-bar-removal.html',
  styleUrls: ['./message-bar.css'],
})
export default class MessageBarRemoval {
  messageBarVisible = true;

  handleCloseAnimationCompleted() {
    this.messageBarVisible = false;
  }

  handleShowMessage() {
    this.messageBarVisible = true;
  }
}
```

#### message-bar-removal.html
```html
<div class="message-bar">
  <ix-message-bar
    *ngIf="messageBarVisible"
    (closeAnimationCompleted)="handleCloseAnimationCompleted()"
  >
    Message text
  </ix-message-bar>

  <ix-button
    *ngIf="!messageBarVisible"
    (click)="handleShowMessage()"
  >
    Show message bar
  </ix-button>
</div>
```

### Angular Standalone Examples

#### message-bar-removal.ts
```ts
import { Component } from '@angular/core';
import { IxButton, IxMessageBar } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxMessageBar, IxButton],
  template: `
    <div class="message-bar">
      @if (messageBarVisible) {
        <ix-message-bar
          (closeAnimationCompleted)="handleCloseAnimationCompleted()"
        >
          Message text
        </ix-message-bar>
      } @else {
        <ix-button (click)="handleShowMessage()">Show message bar</ix-button>
      }
    </div>
  `,
  styleUrls: ['./message-bar.css'],
})
export default class MessageBarRemoval {
  messageBarVisible = true;

  handleCloseAnimationCompleted() {
    this.messageBarVisible = false;
  }

  handleShowMessage() {
    this.messageBarVisible = true;
  }
}
```

### Vue Examples

#### message-bar-removal.vue
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { IxMessageBar, IxButton } from '@siemens/ix-vue';

const messageBarVisible = ref(true);

const handleCloseAnimationCompleted = () => {
  messageBarVisible.value = false;
};

const handleShowMessage = () => {
  messageBarVisible.value = true;
};
</script>

<style scoped src="./message-bar.css"></style>

<template>
  <div class="message-bar">
    <IxButton
      v-if="!messageBarVisible"
      @click="handleShowMessage"
    >
      Show message bar
    </IxButton>
    <IxMessageBar
      v-if="messageBarVisible"
      @closeAnimationCompleted="handleCloseAnimationCompleted"
    >
      Message text
    </IxMessageBar>
  </div>
</template>
```

## API for ix-message-bar

### Properties

| Name | Description | Attribute | Type | Default | Notes |
| --- | --- | --- | --- | --- | --- |
| persistent | { "If true, close button is disabled and alert cannot be dismissed by the user" } | persistent | boolean | false |  |
| type | { "Specifies the type of the alert." } | type | "accent" \| "caution" \| "critical" \| "danger" \| "error" \| "information" \| "neutral" \| "success" \| "warning" | 'information' | Breaking change in v6.0.0: Type values renamed (info is now information) |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| closeAnimationCompleted | { "An event emitted when the close animation is completed" } | closeAnimationCompleted | any |
| closedChange | { "An event emitted when the close button is clicked" } | closedChange | any |

### Slot

| Name | Description |
| --- | --- |
| default | { "Message content." } |
