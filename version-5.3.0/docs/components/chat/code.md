# Chat - Code

> Code examples and API documentation for chat.

# Chat - Code

## Basic

### React Examples

#### chat.tsx
```tsx
import {
  IxChat,
  IxChatAiMessage,
  IxChatInput,
  IxChatAttachment,
  IxChatUserMessage,
  IxChip,
  IxIconButton,
} from '@siemens/ix-react';
import {
  iconCopy,
  iconGlobe,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxChat className="chat-example__chat">
      <IxChatUserMessage message="Summarize the asset status and include the attached maintenance files.">
        <IxChatAttachment
          slot="attachments"
          fileName="equipment_status.pdf"
          icon={iconPdfDocument}
          hideRemoveButton
        ></IxChatAttachment>
        <IxChatAttachment
          slot="attachments"
          fileName="maintenance_notes.txt"
          icon={iconTxtDocument}
          hideRemoveButton
        ></IxChatAttachment>
        <IxIconButton
          slot="actions"
          aria-label="Copy message"
          icon={iconCopy}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="actions"
          aria-label="Edit message"
          icon={iconPen}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="actions"
          aria-label="Show more actions"
          icon={iconMoreMenu}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
      </IxChatUserMessage>

      <IxChatAiMessage>
        <h3>Asset performance summary</h3>
        <p>
          The compressor train is operating inside the expected range. Vibration
          increased slightly after the last shift change, but all values remain
          below the warning threshold.
        </p>
        <ul className="message-list">
          <li>Temperature trend is stable over the last 24 hours.</li>
          <li>Two alarms were acknowledged by the operator.</li>
          <li>Next service window is scheduled for Friday.</li>
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

      <IxChatUserMessage message="Compare the current report with additional customer feedback.">
        <IxChatAttachment
          slot="attachments"
          fileName="customer_feedback.pdf"
          icon={iconPdfDocument}
          hideRemoveButton
        ></IxChatAttachment>
      </IxChatUserMessage>

      <IxChatAiMessage>
        <p>
          Customer feedback confirms the same maintenance priorities. The next
          step is to validate spare-part availability and confirm the planned
          downtime window.
        </p>
      </IxChatAiMessage>

      <IxChatInput
        slot="prompt"
        value="Create a concise follow-up plan for the service team."
      ></IxChatInput>
    </IxChat>
  );
};
```

### Angular Examples

#### chat.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCopy,
  iconGlobe,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './chat.html',
})
export default class Chat {
  constructor() {
    addIcons({
      iconCopy,
      iconGlobe,
      iconMoreMenu,
      iconPdfDocument,
      iconPen,
      iconRefresh,
      iconThumbDown,
      iconThumbUp,
      iconTxtDocument,
    });
  }
}
```

#### chat.html
```html
<ix-chat class="chat-example__chat">
  <ix-chat-user-message
    message="Summarize the asset status and include the attached maintenance files."
  >
    <ix-chat-attachment
      slot="attachments"
      fileName="equipment_status.pdf"
      icon="pdf-document"
      hideRemoveButton
    ></ix-chat-attachment>
    <ix-chat-attachment
      slot="attachments"
      fileName="maintenance_notes.txt"
      icon="txt-document"
      hideRemoveButton
    ></ix-chat-attachment>
    <ix-icon-button
      slot="actions"
      aria-label="Copy message"
      icon="copy"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="actions"
      aria-label="Edit message"
      icon="pen"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="actions"
      aria-label="Show more actions"
      icon="more-menu"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
  </ix-chat-user-message>

  <ix-chat-ai-message>
    <h3>Asset performance summary</h3>
    <p>
      The compressor train is operating inside the expected range. Vibration
      increased slightly after the last shift change, but all values remain
      below the warning threshold.
    </p>
    <ul class="message-list">
      <li>Temperature trend is stable over the last 24 hours.</li>
      <li>Two alarms were acknowledged by the operator.</li>
      <li>Next service window is scheduled for Friday.</li>
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

  <ix-chat-user-message
    message="Compare the current report with additional customer feedback."
  >
    <ix-chat-attachment
      slot="attachments"
      fileName="customer_feedback.pdf"
      icon="pdf-document"
      hideRemoveButton
    ></ix-chat-attachment>
  </ix-chat-user-message>

  <ix-chat-ai-message>
    <p>
      Customer feedback confirms the same maintenance priorities. The next step
      is to validate spare-part availability and confirm the planned downtime
      window.
    </p>
  </ix-chat-ai-message>

  <ix-chat-input
    slot="prompt"
    value="Create a concise follow-up plan for the service team."
  ></ix-chat-input>
</ix-chat>
```

### Angular Standalone Examples

#### chat.ts
```ts
import { Component } from '@angular/core';
import {
  IxChat,
  IxChatAiMessage,
  IxChatInput,
  IxChatAttachment,
  IxChatUserMessage,
  IxChip,
  IxIconButton,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCopy,
  iconGlobe,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  templateUrl: './chat.html',
  imports: [
    IxChat,
    IxChatAiMessage,
    IxChatInput,
    IxChatAttachment,
    IxChatUserMessage,
    IxChip,
    IxIconButton,
  ],
})
export default class Chat {
  constructor() {
    addIcons({
      iconCopy,
      iconGlobe,
      iconMoreMenu,
      iconPdfDocument,
      iconPen,
      iconRefresh,
      iconThumbDown,
      iconThumbUp,
      iconTxtDocument,
    });
  }
}
```

#### chat.html
```html
<ix-chat class="chat-example__chat">
  <ix-chat-user-message
    message="Summarize the asset status and include the attached maintenance files."
  >
    <ix-chat-attachment
      slot="attachments"
      fileName="equipment_status.pdf"
      icon="pdf-document"
      hideRemoveButton
    ></ix-chat-attachment>
    <ix-chat-attachment
      slot="attachments"
      fileName="maintenance_notes.txt"
      icon="txt-document"
      hideRemoveButton
    ></ix-chat-attachment>
    <ix-icon-button
      slot="actions"
      aria-label="Copy message"
      icon="copy"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="actions"
      aria-label="Edit message"
      icon="pen"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="actions"
      aria-label="Show more actions"
      icon="more-menu"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
  </ix-chat-user-message>

  <ix-chat-ai-message>
    <h3>Asset performance summary</h3>
    <p>
      The compressor train is operating inside the expected range. Vibration
      increased slightly after the last shift change, but all values remain
      below the warning threshold.
    </p>
    <ul class="message-list">
      <li>Temperature trend is stable over the last 24 hours.</li>
      <li>Two alarms were acknowledged by the operator.</li>
      <li>Next service window is scheduled for Friday.</li>
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

  <ix-chat-user-message
    message="Compare the current report with additional customer feedback."
  >
    <ix-chat-attachment
      slot="attachments"
      fileName="customer_feedback.pdf"
      icon="pdf-document"
      hideRemoveButton
    ></ix-chat-attachment>
  </ix-chat-user-message>

  <ix-chat-ai-message>
    <p>
      Customer feedback confirms the same maintenance priorities. The next step
      is to validate spare-part availability and confirm the planned downtime
      window.
    </p>
  </ix-chat-ai-message>

  <ix-chat-input
    slot="prompt"
    value="Create a concise follow-up plan for the service team."
  ></ix-chat-input>
</ix-chat>
```

### Vue Examples

#### chat.vue
```vue
<script setup lang="ts">
import {
  IxChat,
  IxChatAiMessage,
  IxChatInput,
  IxChatAttachment,
  IxChatUserMessage,
  IxChip,
  IxIconButton,
} from '@siemens/ix-vue';
import {
  iconCopy,
  iconGlobe,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconRefresh,
  iconThumbDown,
  iconThumbUp,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';
</script>

<template>
  <IxChat class="chat-example__chat">
    <IxChatUserMessage
      message="Summarize the asset status and include the attached maintenance files."
    >
      <IxChatAttachment
        slot="attachments"
        file-name="equipment_status.pdf"
        :icon="iconPdfDocument"
        hide-remove-button
      ></IxChatAttachment>
      <IxChatAttachment
        slot="attachments"
        file-name="maintenance_notes.txt"
        :icon="iconTxtDocument"
        hide-remove-button
      ></IxChatAttachment>
      <IxIconButton
        slot="actions"
        aria-label="Copy message"
        :icon="iconCopy"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Edit message"
        :icon="iconPen"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="actions"
        aria-label="Show more actions"
        :icon="iconMoreMenu"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
    </IxChatUserMessage>

    <IxChatAiMessage>
      <h3>Asset performance summary</h3>
      <p>
        The compressor train is operating inside the expected range. Vibration
        increased slightly after the last shift change, but all values remain
        below the warning threshold.
      </p>
      <ul class="message-list">
        <li>Temperature trend is stable over the last 24 hours.</li>
        <li>Two alarms were acknowledged by the operator.</li>
        <li>Next service window is scheduled for Friday.</li>
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

    <IxChatUserMessage
      message="Compare the current report with additional customer feedback."
    >
      <IxChatAttachment
        slot="attachments"
        file-name="customer_feedback.pdf"
        :icon="iconPdfDocument"
        hide-remove-button
      ></IxChatAttachment>
    </IxChatUserMessage>

    <IxChatAiMessage>
      <p>
        Customer feedback confirms the same maintenance priorities. The next
        step is to validate spare-part availability and confirm the planned
        downtime window.
      </p>
    </IxChatAiMessage>

    <IxChatInput
      slot="prompt"
      value="Create a concise follow-up plan for the service team."
    ></IxChatInput>
  </IxChat>
</template>
```

## API for ix-chat

### Slot

| Name | Description |
| --- | --- |
|  | { "Chat messages, for example ix-chat-user-message and ix-chat-ai-message" } |
| prompt | { "Chat input displayed below the chat messages" } |
