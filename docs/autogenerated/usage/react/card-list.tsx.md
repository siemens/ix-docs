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
