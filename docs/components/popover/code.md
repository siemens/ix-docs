# Popover - Code

> Code examples and API documentation for the ix-popover

# Popover - Code

## Basic

### React Examples

#### popover.tsx
```tsx
import {
  IxButton,
  IxPill,
  IxPopover,
  IxPopoverContent,
  IxPopoverFooter,
  IxPopoverHeader,
  IxPopoverImage,
} from '@siemens/ix-react';
import { iconInfo } from '@siemens/ix-icons/icons';
import { useRef } from 'react';

const POPOVER_IMAGE_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='160'%3E%3Crect fill='%232a2a4a' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' fill='%23e0e0e0' text-anchor='middle' dy='.3em' font-size='18'%3ERelease%20preview%3C/text%3E%3C/svg%3E";

export default function PopoverPreview() {
  const popoverRef = useRef<HTMLIxPopoverElement>(null);

  const onCancel = () => {
    popoverRef.current?.hidePopover();
  };

  return (
    <>
      <IxButton id="triggerId">Open</IxButton>
      <IxPopover
        ref={popoverRef}
        trigger="triggerId"
        placement="bottom"
        triggerMode="click"
        hasSpike
        closeOnClickOutside
        aria-label="Release highlights"
      >
        <IxPopoverHeader
          icon={iconInfo}
          iconColor="color-info"
          ariaLabelCloseIconButton="Close popover"
        >
          Release highlights
          <IxPill slot="additional-items" variant="info">
            New
          </IxPill>
        </IxPopoverHeader>
        <IxPopoverImage image={POPOVER_IMAGE_SRC} imageAlt="Release preview" />
        <IxPopoverContent>
          Check out the new dashboard and improved performance metrics.
        </IxPopoverContent>
        <IxPopoverFooter alignment="vertical">
          <span slot="start">v4.0.0</span>
          <IxButton variant="secondary" onClick={onCancel}>
            Cancel
          </IxButton>
          <IxButton>Save</IxButton>
        </IxPopoverFooter>
      </IxPopover>
    </>
  );
}
```

### Angular Examples

#### popover.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import { iconInfo } from '@siemens/ix-icons/icons';

addIcons({ iconInfo });

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './popover.html',
})
export default class Popover {}
```

#### popover.html
```html
<ix-button id="triggerId">Open</ix-button>
<ix-popover
  #popover
  trigger="triggerId"
  placement="bottom"
  trigger-mode="click"
  has-spike
  close-on-click-outside
  aria-label="Release highlights"
>
  <ix-popover-header
    icon="info"
    icon-color="color-info"
    aria-label-close-icon-button="Close popover"
  >
    Release highlights
    <ix-pill slot="additional-items" variant="info">New</ix-pill>
  </ix-popover-header>
  <ix-popover-image
    image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='160'%3E%3Crect fill='%232a2a4a' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' fill='%23e0e0e0' text-anchor='middle' dy='.3em' font-size='18'%3ERelease%20preview%3C/text%3E%3C/svg%3E"
    image-alt="Release preview"
  ></ix-popover-image>
  <ix-popover-content>
    Check out the new dashboard and improved performance metrics.
  </ix-popover-content>
  <ix-popover-footer alignment="vertical">
    <span slot="start">v4.0.0</span>
    <ix-button variant="secondary" (click)="popover.hidePopover()"
      >Cancel</ix-button
    >
    <ix-button>Save</ix-button>
  </ix-popover-footer>
</ix-popover>
```

### Angular Standalone Examples

#### popover.ts
```ts
import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import { iconInfo } from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxPill,
  IxPopover,
  IxPopoverContent,
  IxPopoverFooter,
  IxPopoverHeader,
  IxPopoverImage,
} from '@siemens/ix-angular/standalone';

addIcons({ iconInfo });

const POPOVER_IMAGE_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='160'%3E%3Crect fill='%232a2a4a' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' fill='%23e0e0e0' text-anchor='middle' dy='.3em' font-size='18'%3ERelease%20preview%3C/text%3E%3C/svg%3E";

@Component({
  selector: 'app-example',
  imports: [
    IxButton,
    IxPill,
    IxPopover,
    IxPopoverHeader,
    IxPopoverImage,
    IxPopoverContent,
    IxPopoverFooter,
  ],
  templateUrl: './popover.html',
})
export default class Popover {
  readonly popoverImageSrc = POPOVER_IMAGE_SRC;
}
```

#### popover.html
```html
<ix-button id="triggerId">Open</ix-button>
<ix-popover
  #popover
  trigger="triggerId"
  placement="bottom"
  trigger-mode="click"
  has-spike
  close-on-click-outside
  aria-label="Release highlights"
>
  <ix-popover-header
    icon="info"
    icon-color="color-info"
    aria-label-close-icon-button="Close popover"
  >
    Release highlights
    <ix-pill slot="additional-items" variant="info">New</ix-pill>
  </ix-popover-header>
  <ix-popover-image
    [image]="popoverImageSrc"
    image-alt="Release preview"
  ></ix-popover-image>
  <ix-popover-content>
    Check out the new dashboard and improved performance metrics.
  </ix-popover-content>
  <ix-popover-footer alignment="vertical">
    <span slot="start">v4.0.0</span>
    <ix-button variant="secondary" (click)="popover.hidePopover()"
      >Cancel</ix-button
    >
    <ix-button>Save</ix-button>
  </ix-popover-footer>
</ix-popover>
```

### Vue Examples

#### popover.vue
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { iconInfo } from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxPill,
  IxPopover,
  IxPopoverContent,
  IxPopoverFooter,
  IxPopoverHeader,
  IxPopoverImage,
} from '@siemens/ix-vue';

const POPOVER_IMAGE_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='160'%3E%3Crect fill='%232a2a4a' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' fill='%23e0e0e0' text-anchor='middle' dy='.3em' font-size='18'%3ERelease%20preview%3C/text%3E%3C/svg%3E";

const popoverRef = ref<InstanceType<typeof IxPopover>>();

const onCancel = () => {
  popoverRef.value?.$el.hidePopover();
};
</script>

<template>
  <IxButton id="triggerId">Open</IxButton>
  <IxPopover
    ref="popoverRef"
    trigger="triggerId"
    placement="bottom"
    trigger-mode="click"
    has-spike
    close-on-click-outside
    aria-label="Release highlights"
  >
    <IxPopoverHeader
      :icon="iconInfo"
      icon-color="color-info"
      aria-label-close-icon-button="Close popover"
    >
      Release highlights
      <IxPill slot="additional-items" variant="info">New</IxPill>
    </IxPopoverHeader>
    <IxPopoverImage :image="POPOVER_IMAGE_SRC" image-alt="Release preview" />
    <IxPopoverContent>
      Check out the new dashboard and improved performance metrics.
    </IxPopoverContent>
    <IxPopoverFooter alignment="vertical">
      <span slot="start">v4.0.0</span>
      <IxButton variant="secondary" @click="onCancel">Cancel</IxButton>
      <IxButton>Save</IxButton>
    </IxPopoverFooter>
  </IxPopover>
</template>
```

## API for ix-popover

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| closeOnClickOutside | { "Dismiss when clicking outside the popover and trigger" } | close-on-click-outside | boolean | false |
| hasSpike | { "Show the spike pointing at the trigger" } | has-spike | boolean | false |
| placement | { "Preferred placement relative to trigger" } | placement | "bottom" \| "left" \| "right" \| "top" | 'bottom' |
| show | { "Show/hide state" } | show | boolean | false |
| trigger | { "Element that toggles the popover.\n\nString values are resolved as the trigger element `id`, not as CSS selectors.\n\nAlso accepts a DOM element reference." } | trigger | HTMLElement \| Promise \| string \| undefined |  |
| triggerMode | { "Interaction that opens the popover" } | trigger-mode | "click" \| "hover" | 'click' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| showChange | { "Fires before visibility changes. Cancel to prevent." } | showChange | boolean |
| showChanged | { "Fires after visibility has changed" } | showChanged | boolean |

### Slot

| Description |
| --- |
| { "Child sections in order: `ix-popover-header`, `ix-popover-image`, `ix-popover-content`, and `ix-popover-footer`." } |

## API for ix-popover-header

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelCloseIconButton | { "ARIA label for the close icon button.\n\nWill be set as aria-label on the nested HTML button element." } | aria-label-close-icon-button | string \| undefined | 'Close' |
| hideClose | { "Hide the close (X) button" } | hide-close | boolean | false |
| icon | { "Icon name displayed before the title.\n\nThe icon is decorative; provide context in the default slot heading." } | icon | string \| undefined |  |
| iconColor | { "Icon color" } | icon-color | string \| undefined |  |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| closeClick | { "Fires when close button is clicked.\n\nCancel to prevent closing." } | closeClick | MouseEvent |

### Slot

| Name | Description |
| --- | --- |
|  | { "Popover title (rendered as heading text)." } |
| additional-items | { "Optional content beside the title (for example `ix-pill`)." } |

## API for ix-popover-content

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| noPadding | { "Remove default inner padding." } | no-padding | boolean | false |

### Slot

| Description |
| --- |
| { "Popover body content." } |

## API for ix-popover-footer

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| alignment | { "Button layout direction" } | alignment | "horizontal" \| "vertical" | 'horizontal' |

### Slot

| Name | Description |
| --- | --- |
|  | { "Footer actions (typically buttons), aligned to the end." } |
| start | { "Optional leading content (for example version text or step indicators)." } |

## API for ix-popover-image

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| image | { "Image source URL" } | image | string \| undefined |  |
| imageAlt | { "Alt text for the image.\n\nUse an empty string for decorative images; provide descriptive text for content images." } | image-alt | string | '' |
