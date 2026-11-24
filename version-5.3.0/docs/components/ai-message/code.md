# AI message - Code

> Code examples and API documentation for AI message.

# AI message - Code

## Basic

### React Examples

#### chat-ai-message.tsx
```tsx
import {
  IxChat,
  IxChatAiMessage,
  IxChip,
  IxIconButton,
} from '@siemens/ix-react';
import {
  iconCopy,
  iconGlobe,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
} from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxChat className="chat-example__chat">
      <IxChatAiMessage>
        <h3>Recommended maintenance actions</h3>
        <p>
          The compressor is operating within the expected range. Schedule the
          next inspection during the Friday service window and keep monitoring
          the vibration trend.
        </p>
        <ul>
          <li>Review the acknowledged alarms from the last shift.</li>
          <li>
            Confirm that spare parts are available before the service window.
          </li>
          <li>Share the summary with the maintenance lead.</li>
        </ul>
        <IxIconButton
          slot="actions"
          aria-label="Copy response"
          icon={iconCopy}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="actions"
          aria-label="Helpful response"
          icon={iconThumbUp}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="actions"
          aria-label="Not helpful response"
          icon={iconThumbDown}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="actions"
          aria-label="Regenerate response"
          icon={iconRefresh}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxChip slot="sources" icon={iconGlobe} outline variant="neutral">
          Sources
        </IxChip>
      </IxChatAiMessage>
    </IxChat>
  );
};
```

### Angular Examples

#### chat-ai-message.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCopy,
  iconGlobe,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
} from '@siemens/ix-icons/icons';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './chat-ai-message.html',
})
export default class ChatAiMessage {
  constructor() {
    addIcons({
      iconCopy,
      iconGlobe,
      iconRefresh,
      iconThumbDown,
      iconThumbUp,
    });
  }
}
```

#### chat-ai-message.html
```html
<ix-chat class="chat-example__chat">
  <ix-chat-ai-message>
    <h3>Recommended maintenance actions</h3>
    <p>
      The compressor is operating within the expected range. Schedule the next
      inspection during the Friday service window and keep monitoring the
      vibration trend.
    </p>
    <ul>
      <li>Review the acknowledged alarms from the last shift.</li>
      <li>Confirm that spare parts are available before the service window.</li>
      <li>Share the summary with the maintenance lead.</li>
    </ul>
    <ix-icon-button
      slot="actions"
      aria-label="Copy response"
      icon="copy"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="actions"
      aria-label="Helpful response"
      icon="thumb-up"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="actions"
      aria-label="Not helpful response"
      icon="thumb-down"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="actions"
      aria-label="Regenerate response"
      icon="refresh"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-chip slot="sources" icon="globe" outline variant="neutral">
      Sources
    </ix-chip>
  </ix-chat-ai-message>
</ix-chat>
```

### Angular Standalone Examples

#### chat-ai-message.ts
```ts
import { Component } from '@angular/core';
import {
  IxChat,
  IxChatAiMessage,
  IxChip,
  IxIconButton,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCopy,
  iconGlobe,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  templateUrl: './chat-ai-message.html',
  imports: [IxChat, IxChatAiMessage, IxChip, IxIconButton],
})
export default class ChatAiMessage {
  constructor() {
    addIcons({
      iconCopy,
      iconGlobe,
      iconRefresh,
      iconThumbDown,
      iconThumbUp,
    });
  }
}
```

#### chat-ai-message.html
```html
<ix-chat class="chat-example__chat">
  <ix-chat-ai-message>
    <h3>Recommended maintenance actions</h3>
    <p>
      The compressor is operating within the expected range. Schedule the next
      inspection during the Friday service window and keep monitoring the
      vibration trend.
    </p>
    <ul>
      <li>Review the acknowledged alarms from the last shift.</li>
      <li>Confirm that spare parts are available before the service window.</li>
      <li>Share the summary with the maintenance lead.</li>
    </ul>
    <ix-icon-button
      slot="actions"
      aria-label="Copy response"
      icon="copy"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="actions"
      aria-label="Helpful response"
      icon="thumb-up"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="actions"
      aria-label="Not helpful response"
      icon="thumb-down"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="actions"
      aria-label="Regenerate response"
      icon="refresh"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-chip slot="sources" icon="globe" outline variant="neutral">
      Sources
    </ix-chip>
  </ix-chat-ai-message>
</ix-chat>
```

### Vue Examples

#### chat-ai-message.vue
```vue
<script setup lang="ts">
import { IxChat, IxChatAiMessage, IxChip, IxIconButton } from '@siemens/ix-vue';
import {
  iconCopy,
  iconGlobe,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
} from '@siemens/ix-icons/icons';
</script>

<template>
  <IxChat class="chat-example__chat">
    <IxChatAiMessage>
      <h3>Recommended maintenance actions</h3>
      <p>
        The compressor is operating within the expected range. Schedule the next
        inspection during the Friday service window and keep monitoring the
        vibration trend.
      </p>
      <ul>
        <li>Review the acknowledged alarms from the last shift.</li>
        <li>
          Confirm that spare parts are available before the service window.
        </li>
        <li>Share the summary with the maintenance lead.</li>
      </ul>
      <IxIconButton
        slot="actions"
        aria-label="Copy response"
        :icon="iconCopy"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Helpful response"
        :icon="iconThumbUp"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Not helpful response"
        :icon="iconThumbDown"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Regenerate response"
        :icon="iconRefresh"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxChip slot="sources" :icon="iconGlobe" outline variant="neutral">
        Sources
      </IxChip>
    </IxChatAiMessage>
  </IxChat>
</template>
```

## API for ix-chat-ai-message

### Slot

| Name | Description |
| --- | --- |
|  | { "AI-generated message content" } |
| actions | { "Optional actions displayed below the AI message" } |
| sources | { "Optional sources displayed next to the AI message actions" } |
