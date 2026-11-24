# Chat input - Code

> Code examples and API documentation for chat input.

# Chat input - Code

## Basic

### React Examples

#### chat-input.tsx
```tsx
import {
  IxChat,
  IxChatInput,
  IxChatAttachment,
  IxIconButton,
} from '@siemens/ix-react';
import {
  iconImage,
  iconMicrophone,
  iconPdfDocument,
  iconPlus,
} from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxChat className="chat-example__chat">
      <IxChatInput
        slot="prompt"
        value="Check open alarms and suggest the next maintenance step."
        placeholder="Ask about asset status..."
        textareaLabel="Service assistant prompt"
        maxLength={180}
        characterLimit={180}
      >
        <IxChatAttachment
          slot="attachments"
          fileName="shift_report.pdf"
          icon={iconPdfDocument}
        ></IxChatAttachment>
        <IxIconButton
          slot="start"
          aria-label="Attach file"
          icon={iconPlus}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="end"
          aria-label="Add image"
          icon={iconImage}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
        <IxIconButton
          slot="end"
          aria-label="Record voice input"
          icon={iconMicrophone}
          size="24"
          variant="subtle-tertiary"
        ></IxIconButton>
      </IxChatInput>
    </IxChat>
  );
};
```

### Angular Examples

#### chat-input.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import {
  iconImage,
  iconMicrophone,
  iconPdfDocument,
  iconPlus,
} from '@siemens/ix-icons/icons';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './chat-input.html',
})
export default class ChatInput {
  constructor() {
    addIcons({
      iconImage,
      iconMicrophone,
      iconPdfDocument,
      iconPlus,
    });
  }
}
```

#### chat-input.html
```html
<ix-chat class="chat-example__chat">
  <ix-chat-input
    slot="prompt"
    value="Check open alarms and suggest the next maintenance step."
    placeholder="Ask about asset status..."
    textareaLabel="Service assistant prompt"
    maxLength="180"
    characterLimit="180"
  >
    <ix-chat-attachment
      slot="attachments"
      fileName="shift_report.pdf"
      icon="pdf-document"
    ></ix-chat-attachment>
    <ix-icon-button
      slot="start"
      aria-label="Attach file"
      icon="plus"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="end"
      aria-label="Add image"
      icon="image"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="end"
      aria-label="Record voice input"
      icon="microphone"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
  </ix-chat-input>
</ix-chat>
```

### Angular Standalone Examples

#### chat-input.ts
```ts
import { Component } from '@angular/core';
import {
  IxChat,
  IxChatInput,
  IxChatAttachment,
  IxIconButton,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconAttach,
  iconImage,
  iconMicrophone,
  iconPdfDocument,
} from '@siemens/ix-icons/icons';

@Component({
  selector: 'app-example',
  templateUrl: './chat-input.html',
  imports: [IxChat, IxChatAttachment, IxChatInput, IxIconButton],
})
export default class ChatInput {
  constructor() {
    addIcons({
      iconAttach,
      iconImage,
      iconMicrophone,
      iconPdfDocument,
    });
  }
}
```

#### chat-input.html
```html
<ix-chat class="chat-example__chat">
  <ix-chat-input
    slot="prompt"
    value="Check open alarms and suggest the next maintenance step."
    placeholder="Ask about asset status..."
    textareaLabel="Service assistant prompt"
    maxLength="180"
    characterLimit="180"
  >
    <ix-chat-attachment
      slot="attachments"
      fileName="shift_report.pdf"
      icon="pdf-document"
    ></ix-chat-attachment>
    <ix-icon-button
      slot="start"
      aria-label="Attach file"
      icon="plus"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="end"
      aria-label="Add image"
      icon="image"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
    <ix-icon-button
      slot="end"
      aria-label="Record voice input"
      icon="microphone"
      size="24"
      variant="subtle-tertiary"
    ></ix-icon-button>
  </ix-chat-input>
</ix-chat>
```

### Vue Examples

#### chat-input.vue
```vue
<script setup lang="ts">
import {
  IxChat,
  IxChatInput,
  IxChatAttachment,
  IxIconButton,
} from '@siemens/ix-vue';
import {
  iconImage,
  iconMicrophone,
  iconPdfDocument,
  iconPlus,
} from '@siemens/ix-icons/icons';
</script>

<template>
  <IxChat class="chat-example__chat">
    <IxChatInput
      slot="prompt"
      value="Check open alarms and suggest the next maintenance step."
      placeholder="Ask about asset status..."
      textarea-label="Service assistant prompt"
      :max-length="180"
      :character-limit="180"
    >
      <IxChatAttachment
        slot="attachments"
        file-name="shift_report.pdf"
        :icon="iconPdfDocument"
      ></IxChatAttachment>
      <IxIconButton
        slot="start"
        aria-label="Attach file"
        :icon="iconPlus"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="end"
        aria-label="Add image"
        :icon="iconImage"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
      <IxIconButton
        slot="end"
        aria-label="Record voice input"
        :icon="iconMicrophone"
        size="24"
        variant="subtle-tertiary"
      ></IxIconButton>
    </IxChatInput>
  </IxChat>
</template>
```

## API for ix-chat-input

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| characterLimit | { "Character limit used for the optional inline character limit message.\n\nFalls back to `maxLength` when not set." } | character-limit | number \| undefined |  |
| characterLimitWarningThreshold | { "Percentage of the character limit that triggers the soft warning. Define a number between 0 and 1 (e.g. 0.8 for 80%)." } | character-limit-warning-threshold | number | 0.9 |
| disabled | { "Specifies whether the chat input is disabled." } | disabled | boolean | false |
| disclaimer | { "Disclaimer text displayed below the chat input." } | disclaimer | string | 'This content is AI-generated. Always verify the information for accuracy.' |
| i18nCharacterLimitReached | { "i18n label for the hard character limit message.\n\nUse `{current}` and `{limit}` placeholders to place the values in any order." } | i18n-character-limit-reached | string | 'Character limit reached ({current} / {limit} characters)' |
| i18nCharacterLimitWarning | { "i18n label for the soft character limit warning.\n\nUse `{current}` and `{limit}` placeholders to place the values in any order." } | i18n-character-limit-warning | string | "You're nearing the limit ({current} / {limit} characters)" |
| insertLineBreakOnEnter | { "If true, pressing Enter inserts a line break instead of submitting the prompt." } | insert-line-break-on-enter | boolean | false |
| maxLength | { "The maximum length of the chat input." } | max-length | number \| undefined |  |
| maxRows | { "Maximum number of visible text rows before the input becomes scrollable." } | max-rows | number | 6 |
| minRows | { "Minimum number of visible text rows." } | min-rows | number | 1 |
| name | { "The name of the chat input." } | name | string \| undefined |  |
| placeholder | { "The placeholder text for the chat input." } | placeholder | string | 'Enter a command, question or topic...' |
| readonly | { "Specifies whether the chat input is readonly." } | readonly | boolean | false |
| state | { "The state of the chat input, which can be either 'input' or 'processing'." } | state | "input" \| "processing" \| undefined | 'input' |
| textareaLabel | { "Accessible label for the native textarea." } | textarea-label | string | 'Chat input' |
| value | { "The value of the chat input." } | value | string | '' |

### Methods

#### focusInput

```ts
focusInput(): Promise&lt;void&gt;;
```

{ "Focuses the chat input." }

#### getNativeInputElement

```ts
getNativeInputElement(): Promise&lt;HTMLTextAreaElement&gt;;
```

{ "Returns the native textarea element used by the chat input." }

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| ixBlur | { "Event emitted when the chat input loses focus." } | ixBlur | void |
| ixChange | { "Event emitted when the chat input loses focus and the value has changed." } | ixChange | string |
| promptSubmit | { "Event emitted when the prompt is submitted by the send button or Enter key." } | promptSubmit | string |
| valueChange | { "Event emitted when the value of the chat input changes." } | valueChange | string |

### Slot

| Name | Description |
| --- | --- |
| attachments | { "Attachments displayed above the prompt text area" } |
| end | { "Element will be displayed in the right action area before the submit button" } |
| follow-up | { "Optional refresh action and follow-up prompt buttons displayed above the chat input" } |
| start | { "Element will be displayed in the left action area" } |
