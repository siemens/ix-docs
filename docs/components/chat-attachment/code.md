# Chat attachment - Code

> Code examples and API documentation for chat attachment.

# Chat attachment - Code

## Basic

### React Examples

#### chat-user-message.tsx
```tsx
import {
  IxChat,
  IxChatAttachment,
  IxChatUserMessage,
  IxIconButton,
} from '@siemens/ix-react';
import {
  iconCopy,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxChat className="chat-example__chat">
      <IxChatUserMessage message="Summarize the attached shift report.">
        <IxChatAttachment
          slot="attachments"
          fileName="shift_report.pdf"
          icon={iconPdfDocument}
          hideRemoveButton
        ></IxChatAttachment>
        <IxChatAttachment
          slot="attachments"
          fileName="operator_notes.txt"
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
    </IxChat>
  );
};
```

### Angular Examples

#### chat-user-message.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCopy,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './chat-user-message.html',
})
export default class ChatUserMessage {
  constructor() {
    addIcons({
      iconCopy,
      iconMoreMenu,
      iconPdfDocument,
      iconPen,
      iconTxtDocument,
    });
  }
}
```

#### chat-user-message.html
```html
<ix-chat class="chat-example__chat">
  <ix-chat-user-message message="Summarize the attached shift report.">
    <ix-chat-attachment
      slot="attachments"
      fileName="shift_report.pdf"
      icon="pdf-document"
      hideRemoveButton
    ></ix-chat-attachment>
    <ix-chat-attachment
      slot="attachments"
      fileName="operator_notes.txt"
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
</ix-chat>
```

### Angular Standalone Examples

#### chat-user-message.ts
```ts
import { Component } from '@angular/core';
import {
  IxChat,
  IxChatAttachment,
  IxChatUserMessage,
  IxIconButton,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconCopy,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  templateUrl: './chat-user-message.html',
  imports: [IxChat, IxChatAttachment, IxChatUserMessage, IxIconButton],
})
export default class ChatUserMessage {
  constructor() {
    addIcons({
      iconCopy,
      iconMoreMenu,
      iconPdfDocument,
      iconPen,
      iconTxtDocument,
    });
  }
}
```

#### chat-user-message.html
```html
<ix-chat class="chat-example__chat">
  <ix-chat-user-message message="Summarize the attached shift report.">
    <ix-chat-attachment
      slot="attachments"
      fileName="shift_report.pdf"
      icon="pdf-document"
      hideRemoveButton
    ></ix-chat-attachment>
    <ix-chat-attachment
      slot="attachments"
      fileName="operator_notes.txt"
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
</ix-chat>
```

### Vue Examples

#### chat-user-message.vue
```vue
<script setup lang="ts">
import {
  IxChat,
  IxChatAttachment,
  IxChatUserMessage,
  IxIconButton,
} from '@siemens/ix-vue';
import {
  iconCopy,
  iconMoreMenu,
  iconPdfDocument,
  iconPen,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';
</script>

<template>
  <IxChat class="chat-example__chat">
    <IxChatUserMessage message="Summarize the attached shift report.">
      <IxChatAttachment
        slot="attachments"
        file-name="shift_report.pdf"
        :icon="iconPdfDocument"
        hide-remove-button
      ></IxChatAttachment>
      <IxChatAttachment
        slot="attachments"
        file-name="operator_notes.txt"
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
  </IxChat>
</template>
```

## API for ix-chat-attachment

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| fileName | { "Name of the attached file." } | file-name | string | '' |
| hideRemoveButton | { "Hide the remove action." } | hide-remove-button | boolean | false |
| icon | { "Icon displayed before the file name." } | icon | string | iconTxtDocument |
| previewSupported | { "Enable preview interaction for default attachments." } | preview-supported | boolean | false |
| removeAriaLabel | { "Accessible label for the remove action." } | remove-aria-label | string | 'Remove attachment' |
| status | { "Upload status of the attachment." } | status | "default" \| "failed" \| "loading" | 'default' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| attachmentClick | { "Event emitted when the attachment is clicked." } | attachmentClick | void |
| removeClick | { "Event emitted when the remove action is clicked." } | removeClick | void |
