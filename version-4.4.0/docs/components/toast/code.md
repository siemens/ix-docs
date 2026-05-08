# Toast - Code

> Code examples and API documentation for the ix-toast, ix-toast-container

# Toast - Code

## Basic

### React Examples

#### toast.tsx
```tsx
import { IxButton, showToast } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton
        onClick={() => {
          showToast({
            message: 'My toast message!',
          });
        }}
      >
        Trigger toast
      </IxButton>
    </>
  );
};
```

### Angular Examples

#### toast.ts
```ts
import { Component } from '@angular/core';
import { ToastService } from '@siemens/ix-angular';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button (click)="showToastMessage()">Trigger toast</ix-button>
  `,
})
export default class Toast {
  constructor(private readonly toastService: ToastService) {}

  async showToastMessage() {
    this.toastService.show({
      message: 'My toast message!',
    });
  }
}
```

### Angular Standalone Examples

#### toast.ts
```ts
import { Component } from '@angular/core';
import { IxButton, ToastService } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  providers: [ToastService],
  template: `
    <ix-button (click)="showToastMessage()">Trigger toast</ix-button>
  `,
})
export default class Toast {
  constructor(private readonly toastService: ToastService) {}

  async showToastMessage() {
    this.toastService.show({
      message: 'My toast message!',
    });
  }
}
```

### Vue Examples

#### toast.vue
```vue
<script setup lang="ts">
import { IxButton, showToast } from '@siemens/ix-vue';
</script>

<template>
  <IxButton @click="showToast({ message: 'My toast message!' })">
    Trigger toast
  </IxButton>
</template>
```

## Custom toast message

### React Examples

#### toast-custom.tsx
```tsx
import { IxButton, showToast } from '@siemens/ix-react';
import { iconUndo } from '@siemens/ix-icons/icons';

function CustomToastMessage() {
  return <div>This message is from template</div>;
}

function CustomToastAction() {
  return (
    <div>
      <IxButton variant="tertiary" icon={iconUndo}>
        Undo
      </IxButton>
    </div>
  );
}

export default () => {
  return (
    <>
      <IxButton
        onClick={() => {
          showToast({
            title: 'Toast headline',
            message: <CustomToastMessage></CustomToastMessage>,
            type: 'success',
          });
        }}
        style={{ marginRight: '0.5rem' }}
      >
        Trigger toast with custom message
      </IxButton>

      <IxButton
        onClick={() => {
          showToast({
            title: 'Toast headline',
            message: <CustomToastMessage></CustomToastMessage>,
            action: <CustomToastAction></CustomToastAction>,
          });
        }}
      >
        Trigger toast with action button
      </IxButton>
    </>
  );
};
```

### Angular Examples

#### toast-custom.ts
```ts
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ToastService } from '@siemens/ix-angular';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button (click)="showToastMessage()">
      Trigger toast with custom message
    </ix-button>

    <ix-button (click)="showToastMessageAction()">
      Trigger toast with action button
    </ix-button>

    <ng-template #customToastMessage let-toast>
      <div>This message is from template</div>
    </ng-template>

    <ng-template #customToastAction let-toast>
      <div>
        <ix-button variant="tertiary" icon="undo" (click)="toast.close('Action')">Undo</ix-button
        >
      </div>
    </ng-template>
  `,
  styles: [
    `
      ix-button {
        margin-right: 0.5rem;
      }
    `,
  ],
})
export default class ToastCustom {
  @ViewChild('customToastMessage', { read: TemplateRef })
  customToastRef!: TemplateRef<any>;

  @ViewChild('customToastAction', { read: TemplateRef })
  customToastActionRef!: TemplateRef<any>;

  constructor(private readonly toastService: ToastService) {}

  async showToastMessage() {
    this.toastService.show({
      title: 'Toast headline',
      message: this.customToastRef,
      type: 'success',
    });
  }

  async showToastMessageAction() {
    this.toastService.show({
      title: 'Toast headline',
      message: this.customToastRef,
      action: this.customToastActionRef,
    });
  }
}
```

### Angular Standalone Examples

#### toast-custom.ts
```ts
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { IxButton, ToastService } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  providers: [ToastService],
  template: `
    <ix-button (click)="showToastMessage()" style="margin-right: 0.5rem">
      Trigger toast with custom message
    </ix-button>

    <ix-button (click)="showToastMessageAction()">
      Trigger toast with action button
    </ix-button>

    <ng-template #customToastMessage let-toast>
      <div>This message is from template</div>
    </ng-template>

    <ng-template #customToastAction let-toast>
      <div>
        <ix-button variant="tertiary" icon="undo" (click)="toast.close('Action')">Undo</ix-button
        >
      </div>
    </ng-template>
  `,
})
export default class ToastCustom {
  @ViewChild('customToastMessage', { read: TemplateRef })
  customToastRef!: TemplateRef<any>;

  @ViewChild('customToastAction', { read: TemplateRef })
  customToastActionRef!: TemplateRef<any>;

  constructor(private readonly toastService: ToastService) {}

  async showToastMessage() {
    this.toastService.show({
      title: 'Toast headline',
      message: this.customToastRef,
      type: 'success',
    });
  }

  async showToastMessageAction() {
    this.toastService.show({
      title: 'Toast headline',
      message: this.customToastRef,
      action: this.customToastActionRef,
    });
  }
}
```

### Vue Examples

#### toast-custom.vue
```vue
<script setup lang="ts">
import { IxButton, showToast } from '@siemens/ix-vue';
import { iconUndo } from '@siemens/ix-icons/icons';
import { ref } from 'vue';

const customMessage = ref<HTMLElement | null>(null);
const customAction = ref<HTMLElement | null>(null);
</script>

<template>
  <IxButton
    @click="
      showToast({
        title: 'Toast headline',
        message: customMessage!,
        type: 'success',
      })
    "
    style="margin-right: 0.5rem"
  >
    Trigger toast with custom message
  </IxButton>

  <IxButton
    @click="
      showToast({
        title: 'Toast headline',
        message: customMessage!,
        action: customAction!,
      })
    "
  >
    Trigger toast with action button
  </IxButton>
  <template>
    <div ref="customMessage">This message is from template</div>
    <div ref="customAction">
      <IxButton variant="tertiary" :icon="iconUndo">Undo</IxButton>
    </div>
  </template>
</template>
```

## Position

Example is supported since version 1.5.0

### React Examples

#### toast-position.tsx
```tsx
import { setToastPosition, ToastPosition } from '@siemens/ix';
import { IxButton, showToast } from '@siemens/ix-react';
import { useEffect } from 'react';

function useToastPosition(position: ToastPosition) {
  useEffect(() => {
    setToastPosition(position);
  }, []);
}

export default () => {
  useToastPosition('top-right');

  return (
    <>
      <IxButton
        onClick={() => {
          showToast({
            message: 'My toast message!',
          });
        }}
      >
        Trigger toast
      </IxButton>
    </>
  );
};
```

### Angular Examples

#### toast-position.ts
```ts
import { Component } from '@angular/core';
import { ToastService } from '@siemens/ix-angular';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button (click)="showToastMessage()">Trigger toast</ix-button>
  `,
})
export default class ToastPosition {
  constructor(private readonly toastService: ToastService) {}

  async showToastMessage() {
    this.toastService.setPosition('top-right');
    this.toastService.show({
      message: 'My toast message!',
    });
  }
}
```

### Angular Standalone Examples

#### toast-position.ts
```ts
import { Component } from '@angular/core';
import { IxButton, ToastService } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  providers: [ToastService],
  template: `
    <ix-button (click)="showToastMessage()">Trigger toast</ix-button>
  `,
})
export default class ToastPosition {
  constructor(private readonly toastService: ToastService) {}

  async showToastMessage() {
    this.toastService.setPosition('top-right');
    this.toastService.show({
      message: 'My toast message!',
    });
  }
}
```

### Vue Examples

#### toast-position.vue
```vue
<script setup lang="ts">
import { IxButton, setToastPosition, showToast } from '@siemens/ix-vue';

setToastPosition('top-right');
</script>

<template>
  <IxButton @click="showToast({ message: 'My toast message!' })">
    Trigger toast
  </IxButton>
</template>
```

## API for ix-toast-config

### Properties

| Name | Description | Attribute | Type |
| --- | --- | --- | --- |
| action | Action element that is displayed below the toast message/title | action | HTMLElement |
| autoClose | Controls whether the toast closes automatically after a delay | autoClose | boolean |
| autoCloseDelay | Sets the delay for autoClose in milliseconds | autoCloseDelay | number |
| hideIcon | Allows to hide the icon in the toast | hideIcon | boolean |
| icon | Icon that is displayed with the toast | icon | string |
| iconColor | Color of the icon | iconColor | string |
| message | Message of the toast | message | string \| HTMLElement |
| title | Title of the toast | title | string |
| type | Type of the toast | type | ToastType |

## API for toast utils (JavaScript, React, Vue)

### Functions

#### getToastContainer

```ts
getToastContainer(): HTMLIxToastContainerElement;
```

Gets the toast container.

#### setToastPosition

```ts
setToastPosition(position: ToastPosition): void;
```

Sets the position of the toast container

#### toast

```ts
toast(config: ToastConfig): Promise&lt;ShowToastResult&gt;;
```

Display a toast based on the provided configuration

#### toast.error

```ts
toast.error(config: ToastConfig): Promise&lt;ShowToastResult&gt;;
```

Display an error toast based on the provided configuration

#### toast.info

```ts
toast.info(config: ToastConfig): Promise&lt;ShowToastResult&gt;;
```

Display an info toast based on the provided configuration

#### toast.success

```ts
toast.success(config: ToastConfig): Promise&lt;ShowToastResult&gt;;
```

Display a success toast based on the provided configuration

#### toast.warning

```ts
toast.warning(config: ToastConfig): Promise&lt;ShowToastResult&gt;;
```

Display a warning toast based on the provided configuration

## API for ToastService (Angular)

### Functions

#### getPosition

```ts
getPosition(): ToastPosition;
```

Gets the current toast position

#### setPosition

```ts
setPosition(position: ToastPosition): void;
```

Sets the current toast position

#### show

```ts
show(config: ToastConfig): Promise&lt;ShowToastResult&gt;;
```

Shows the toast
