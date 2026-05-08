# Card list - Code

> Code examples and API documentation for the ix-card-list

# Card list - Code

## Basic

### React Examples

#### card-list.tsx
```tsx
import { iconBulb, iconRocket } from '@siemens/ix-icons/icons';
import { IxCardList, IxPushCard } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxCardList label="Stack Layout" showAllCount={12} listStyle={'stack'}>
        <IxPushCard
          icon={iconBulb}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
        <IxPushCard
          icon={iconBulb}
          notification="1"
          heading="Heading content"
          subheading="Subheading"
          variant="warning"
        ></IxPushCard>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="success"
        ></IxPushCard>
      </IxCardList>

      <IxCardList label="Flow Layout" showAllCount={12} listStyle={'scroll'}>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
        <IxPushCard
          icon={iconBulb}
          notification="1"
          heading="Heading content"
          subheading="Subheading"
          variant="warning"
        ></IxPushCard>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
        <IxPushCard
          icon={iconRocket}
          notification="3"
          heading="Heading content"
          subheading="Subheading"
          variant="filled"
        ></IxPushCard>
      </IxCardList>
    </>
  );
};
```

### Angular Examples

#### card-list.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './card-list.html',
})
export default class CardList {}
```

#### card-list.html
```html
<ix-card-list label="Stack Layout" show-all-count="12" list-style="stack">
  <ix-push-card
    icon="rocket"
    notification="3"
    heading="Heading content"
    subheading="Subheading"
    variant="filled"
  ></ix-push-card>
  <ix-push-card
    icon="bulb"
    notification="1"
    heading="Heading content"
    subheading="Subheading"
    variant="warning"
  ></ix-push-card>
  <ix-push-card
    icon="rocket"
    notification="3"
    heading="Heading content"
    subheading="Subheading"
    variant="success"
  ></ix-push-card>
</ix-card-list>

<ix-card-list label="Flow Layout" show-all-count="12" list-style="scroll">
  <ix-push-card
    icon="rocket"
    notification="3"
    heading="Heading content"
    subheading="Subheading"
    variant="filled"
  ></ix-push-card>
  <ix-push-card
    icon="bulb"
    notification="1"
    heading="Heading content"
    subheading="Subheading"
    variant="warning"
  ></ix-push-card>
  <ix-push-card
    icon="rocket"
    notification="3"
    heading="Heading content"
    subheading="Subheading"
    variant="filled"
  ></ix-push-card>
  <ix-push-card
    icon="rocket"
    notification="3"
    heading="Heading content"
    subheading="Subheading"
    variant="filled"
  ></ix-push-card>
  <ix-push-card
    icon="rocket"
    notification="3"
    heading="Heading content"
    subheading="Subheading"
    variant="filled"
  ></ix-push-card>
</ix-card-list>
```

### Angular Standalone Examples

#### card-list.ts
```ts
import { Component } from '@angular/core';
import { IxCardList, IxPushCard } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxCardList, IxPushCard],
  templateUrl: './card-list.html',
})
export default class CardList {}
```

#### card-list.html
```html
<ix-card-list label="Stack Layout" show-all-count="12" list-style="stack">
  <ix-push-card
    icon="rocket"
    notification="3"
    heading="Heading content"
    subheading="Subheading"
    variant="filled"
  ></ix-push-card>
  <ix-push-card
    icon="bulb"
    notification="1"
    heading="Heading content"
    subheading="Subheading"
    variant="warning"
  ></ix-push-card>
  <ix-push-card
    icon="rocket"
    notification="3"
    heading="Heading content"
    subheading="Subheading"
    variant="success"
  ></ix-push-card>
</ix-card-list>

<ix-card-list label="Flow Layout" show-all-count="12" list-style="scroll">
  <ix-push-card
    icon="rocket"
    notification="3"
    heading="Heading content"
    subheading="Subheading"
    variant="filled"
  ></ix-push-card>
  <ix-push-card
    icon="bulb"
    notification="1"
    heading="Heading content"
    subheading="Subheading"
    variant="warning"
  ></ix-push-card>
  <ix-push-card
    icon="rocket"
    notification="3"
    heading="Heading content"
    subheading="Subheading"
    variant="filled"
  ></ix-push-card>
  <ix-push-card
    icon="rocket"
    notification="3"
    heading="Heading content"
    subheading="Subheading"
    variant="filled"
  ></ix-push-card>
  <ix-push-card
    icon="rocket"
    notification="3"
    heading="Heading content"
    subheading="Subheading"
    variant="filled"
  ></ix-push-card>
</ix-card-list>
```

### Vue Examples

#### card-list.vue
```vue
<script setup lang="ts">
import { iconBulb, iconRocket } from '@siemens/ix-icons/icons';
import { IxCardList, IxPushCard } from '@siemens/ix-vue';
</script>

<template>
  <IxCardList label="Stack Layout" :showAllCount="12" listStyle="stack">
    <IxPushCard
      :icon="iconRocket"
      notification="3"
      heading="Heading content"
      subheading="Subheading"
      variant="filled"
    ></IxPushCard>
    <IxPushCard
      :icon="iconBulb"
      notification="1"
      heading="Heading content"
      subheading="Subheading"
      variant="warning"
    ></IxPushCard>
    <IxPushCard
      :icon="iconRocket"
      notification="3"
      heading="Heading content"
      subheading="Subheading"
      variant="success"
    ></IxPushCard>
  </IxCardList>

  <IxCardList label="Flow Layout" :showAllCount="12" listStyle="scroll">
    <IxPushCard
      :icon="iconRocket"
      notification="3"
      heading="Heading content"
      subheading="Subheading"
      variant="filled"
    ></IxPushCard>
    <IxPushCard
      :icon="iconBulb"
      notification="1"
      heading="Heading content"
      subheading="Subheading"
      variant="filled"
    ></IxPushCard>
    <IxPushCard
      :icon="iconRocket"
      notification="3"
      heading="Heading content"
      subheading="Subheading"
      variant="filled"
    ></IxPushCard>
    <IxPushCard
      :icon="iconRocket"
      notification="3"
      heading="Heading content"
      subheading="Subheading"
      variant="filled"
    ></IxPushCard>
    <IxPushCard
      :icon="iconRocket"
      notification="3"
      heading="Heading content"
      subheading="Subheading"
      variant="filled"
    ></IxPushCard>
  </IxCardList>
</template>
```

## API for ix-card-list

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelExpandButton | ARIA label for the card's expand button. Will be set as aria-label on the nested HTML button element | aria-label-expand-button | string \| undefined |  |
| collapse | Collapse the list | collapse | boolean | false |
| hideShowAll | Hide the show all button | hide-show-all | boolean | false |
| i18nMoreCards | i18n More cards available | i18n-more-cards | string | 'There are more cards available' |
| i18nShowAll | i18n Show all button | i18n-show-all | string | 'Show all' |
| label | Name the card list | label | string \| undefined |  |
| listStyle | List style | list-style | "scroll" \| "stack" | 'stack' |
| showAllCount | Overwrite the default show all count. | show-all-count | number \| undefined |  |
| suppressOverflowHandling | Suppress the overflow handling of child elements | suppress-overflow-handling | boolean | false |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| collapseChanged | Fire event when the collapse state is changed by the user | collapseChanged | boolean |
| showAllClick | Fire event when the collapse state is changed by the user | showAllClick | { nativeEvent: MouseEvent; } |
| showMoreCardClick | Fire event when the show more card is clicked. | showMoreCardClick | { nativeEvent: MouseEvent; } |
