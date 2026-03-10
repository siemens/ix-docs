# Application - Code

> Code examples and API documentation for the ix-application

# Application - Code

## Basic

The code snippet below shows an example of a combination of different components, like `ix-application-header` or `ix-content`.

### React Examples

#### application.tsx
```tsx
import {
  IxApplication,
  IxApplicationHeader,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplication>
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>

      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>

      <IxContent>
        <IxContentHeader
          slot="header"
          headerTitle="My Content Page"
        ></IxContentHeader>
      </IxContent>
    </IxApplication>
  );
};
```

### Angular Examples

#### application.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './application.html',
})
export default class ApplicationExample {}
```

#### application.html
```html
<ix-application>
  <ix-application-header name="My Application">
    <div class="placeholder-logo" slot="logo"></div>
  </ix-application-header>

  <ix-menu>
    <ix-menu-item>Item 1</ix-menu-item>
    <ix-menu-item>Item 2</ix-menu-item>
  </ix-menu>

  <ix-content>
    <ix-content-header slot="header" header-title="My Content Page">
    </ix-content-header>
  </ix-content>
</ix-application>
```

### Angular Standalone Examples

#### application.ts
```ts
import { Component } from '@angular/core';
import {
  IxApplication,
  IxApplicationHeader,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxMenu,
    IxMenuItem,
    IxContent,
    IxContentHeader,
  ],
  templateUrl: './application.html',
})
export default class ApplicationExample {}
```

#### application.html
```html
<ix-application>
  <ix-application-header name="My Application">
    <div class="placeholder-logo" slot="logo"></div>
  </ix-application-header>

  <ix-menu>
    <ix-menu-item>Item 1</ix-menu-item>
    <ix-menu-item>Item 2</ix-menu-item>
  </ix-menu>

  <ix-content>
    <ix-content-header slot="header" header-title="My Content Page">
    </ix-content-header>
  </ix-content>
</ix-application>
```

### Vue Examples

#### application.vue
```vue
<script setup lang="ts">
import {
  IxApplication,
  IxApplicationHeader,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-vue';
</script>

<template>
  <IxApplication>
    <IxApplicationHeader name="My Application">
      <div className="placeholder-logo" slot="logo"></div>
    </IxApplicationHeader>

    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
    </IxMenu>

    <IxContent>
      <IxContentHeader
        slot="header"
        header-title="My Content Page"
      ></IxContentHeader>
    </IxContent>
  </IxApplication>
</template>
```

## Breakpoints

### React Examples

#### application-breakpoints.tsx
```tsx
import { Breakpoint } from '@siemens/ix';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
  IxRadio,
  IxRadioGroup,
} from '@siemens/ix-react';

import { useState } from 'react';

const validBreakpoints = new Set<Breakpoint>(['sm', 'md', 'lg']);

export default () => {
  const [breakpoints, setBreakpoints] = useState<Breakpoint[]>(['md']);

  const handleBreakpointChange = (event: CustomEvent<string>) => {
    const value = event.detail;

    if (validBreakpoints.has(value as Breakpoint)) {
      setBreakpoints([value as Breakpoint]);
    }
  };

  return (
    <IxApplication breakpoints={breakpoints}>
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>

        <IxDropdownButton variant="subtle-tertiary" label="Select config">
          <IxDropdownItem label="Config 1"></IxDropdownItem>
          <IxDropdownItem label="Config 2"></IxDropdownItem>
          <IxDropdownItem label="Config 3"></IxDropdownItem>
        </IxDropdownButton>

        <IxAvatar>
          <IxDropdownItem label="Action 1"></IxDropdownItem>
          <IxDropdownItem label="Action 2"></IxDropdownItem>
          <IxDropdownItem label="Action 3"></IxDropdownItem>
        </IxAvatar>
      </IxApplicationHeader>

      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>

      <IxContent>
        <IxContentHeader
          slot="header"
          headerTitle="Choose breakpoint"
        ></IxContentHeader>
        <IxRadioGroup
          value={breakpoints[0]}
          onValueChange={handleBreakpointChange}
        >
          <IxRadio value="sm" label="Small"></IxRadio>
          <IxRadio value="md" label="Medium"></IxRadio>
          <IxRadio value="lg" label="Large"></IxRadio>
        </IxRadioGroup>
      </IxContent>
    </IxApplication>
  );
};
```

### Angular Examples

#### application-breakpoints.ts
```ts
import { Component } from '@angular/core';
import { Breakpoint } from '@siemens/ix';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './application-breakpoints.html',
})
export default class ApplicationBreakpointExample {
  breakpoints: Breakpoint[] = ['md'];
  private readonly validBreakpoints = new Set<Breakpoint>(['sm', 'md', 'lg']);

  onCheckedChange(value: string) {
    const breakpoint = value as Breakpoint;
    if (this.validBreakpoints.has(breakpoint)) {
      this.breakpoints = [breakpoint];
    }
  }
}
```

#### application-breakpoints.html
```html
<ix-application application-name="Application name" [breakpoints]="breakpoints">
  <ix-application-header name="My Application">
    <div class="placeholder-logo" slot="logo"></div>

    <ix-dropdown-button variant="subtle-tertiary" label="Select config">
      <ix-dropdown-item label="Config 1"></ix-dropdown-item>
      <ix-dropdown-item label="Config 2"></ix-dropdown-item>
      <ix-dropdown-item label="Config 3"></ix-dropdown-item>
    </ix-dropdown-button>

    <ix-avatar>
      <ix-dropdown-item label="Action 1"></ix-dropdown-item>
      <ix-dropdown-item label="Action 2"></ix-dropdown-item>
      <ix-dropdown-item label="Action 3"></ix-dropdown-item>
    </ix-avatar>
  </ix-application-header>

  <ix-menu>
    <ix-menu-item>Item 1</ix-menu-item>
    <ix-menu-item>Item 2</ix-menu-item>
  </ix-menu>

  <ix-content>
    <ix-content-header slot="header" header-title="Choose breakpoint">
    </ix-content-header>

    <ix-radio-group
      [value]="breakpoints[0]"
      (valueChange)="onCheckedChange($event.detail)"
    >
      <ix-radio value="sm" label="Small"></ix-radio>
      <ix-radio value="md" label="Medium"></ix-radio>
      <ix-radio value="lg" label="Large"></ix-radio>
    </ix-radio-group>
  </ix-content>
</ix-application>
```

### Angular Standalone Examples

#### application-breakpoints.ts
```ts
import { Component } from '@angular/core';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
  IxRadio,
  IxRadioGroup,
} from '@siemens/ix-angular/standalone';

import { Breakpoint } from '@siemens/ix';

@Component({
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxDropdownButton,
    IxDropdownItem,
    IxAvatar,
    IxMenu,
    IxMenuItem,
    IxContent,
    IxContentHeader,
    IxRadioGroup,
    IxRadio,
  ],
  templateUrl: './application-breakpoints.html',
})
export default class ApplicationBreakpointExample {
  breakpoints: Breakpoint[] = ['md'];
  private readonly validBreakpoints = new Set<Breakpoint>(['sm', 'md', 'lg']);

  onCheckedChange(value: string) {
    const breakpoint = value as Breakpoint;
    if (this.validBreakpoints.has(breakpoint)) {
      this.breakpoints = [breakpoint];
    }
  }
}
```

#### application-breakpoints.html
```html
<ix-application application-name="Application name" [breakpoints]="breakpoints">
  <ix-application-header name="My Application">
    <div class="placeholder-logo" slot="logo"></div>

    <ix-dropdown-button variant="subtle-tertiary" label="Select config">
      <ix-dropdown-item label="Config 1"></ix-dropdown-item>
      <ix-dropdown-item label="Config 2"></ix-dropdown-item>
      <ix-dropdown-item label="Config 3"></ix-dropdown-item>
    </ix-dropdown-button>

    <ix-avatar>
      <ix-dropdown-item label="Action 1"></ix-dropdown-item>
      <ix-dropdown-item label="Action 2"></ix-dropdown-item>
      <ix-dropdown-item label="Action 3"></ix-dropdown-item>
    </ix-avatar>
  </ix-application-header>

  <ix-menu>
    <ix-menu-item>Item 1</ix-menu-item>
    <ix-menu-item>Item 2</ix-menu-item>
  </ix-menu>

  <ix-content>
    <ix-content-header slot="header" header-title="Choose breakpoint">
    </ix-content-header>

    <ix-radio-group
      [value]="breakpoints[0]"
      (valueChange)="onCheckedChange($event.detail)"
    >
      <ix-radio value="sm" label="Small"></ix-radio>
      <ix-radio value="md" label="Medium"></ix-radio>
      <ix-radio value="lg" label="Large"></ix-radio>
    </ix-radio-group>
  </ix-content>
</ix-application>
```

### Vue Examples

#### application-breakpoints.vue
```vue
<script setup lang="ts">
import type { Breakpoint } from '@siemens/ix';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
  IxRadio,
  IxRadioGroup,
} from '@siemens/ix-vue';
</script>

<script lang="ts">
const validBreakpoints = new Set<Breakpoint>(['sm', 'md', 'lg']);

export default {
  data(): {
    breakpoints: Breakpoint[];
  } {
    return {
      breakpoints: ['md'],
    };
  },
  methods: {
    setBreakpoint(event: CustomEvent<Breakpoint>) {
      const value = event?.detail;
      if (validBreakpoints.has(value)) {
        this.breakpoints = [value];
      }
    },
  },
};
</script>

<template>
  <IxApplication :breakpoints="breakpoints">
    <IxApplicationHeader name="My Application">
      <div className="placeholder-logo" slot="logo"></div>

      <IxDropdownButton variant="subtle-tertiary" label="Select config">
        <IxDropdownItem label="Config 1"></IxDropdownItem>
        <IxDropdownItem label="Config 2"></IxDropdownItem>
        <IxDropdownItem label="Config 3"></IxDropdownItem>
      </IxDropdownButton>

      <IxAvatar>
        <IxDropdownItem label="Action 1"></IxDropdownItem>
        <IxDropdownItem label="Action 2"></IxDropdownItem>
        <IxDropdownItem label="Action 3"></IxDropdownItem>
      </IxAvatar>
    </IxApplicationHeader>

    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
    </IxMenu>

    <IxContent>
      <IxContentHeader
        slot="header"
        header-title="Choose breakpoint"
      ></IxContentHeader>
      <IxRadioGroup :value="breakpoints[0]" @valueChange="setBreakpoint">
        <IxRadio value="sm" label="Small" aria-label="Small"></IxRadio>
        <IxRadio value="md" label="Medium" aria-label="Medium"></IxRadio>
        <IxRadio value="lg" label="Large" aria-label="Large"></IxRadio>
      </IxRadioGroup>
    </IxContent>
  </IxApplication>
</template>
```

## Application Switch

The navigation to another application is implemented via `window.open` (https://developer.mozilla.org/en-US/docs/Web/API/Window/open). Therefore you can control if the navigation should happen inside the current browser context `target: '_self'` or inside a new tab `target: '_blank'` (more information about target can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target))

```javascript
  {
  id: 'demo-app-2',
    name: 'Calculator App',
    description: 'Example description for Calculator App',
    iconSrc: '...url to some icon',

    url: '...target url',
    target: '_self', // Define the navigation context (e.g current browser context or new tab)
}
```

### React Examples

#### application-app-switch.tsx
```tsx
import { AppSwitchConfiguration } from '@siemens/ix';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';

const appSwitchConfig: AppSwitchConfiguration = {
  i18nAppSwitch: 'Switch to Application',
  currentAppId: 'demo-app-2',
  apps: [
    {
      id: 'demo-app-1',
      name: 'Floor App',
      iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
      url: 'https://ix.siemens.io/',
      description: 'Example description for Floor app',
      target: '_self',
    },
    {
      id: 'demo-app-2',
      name: 'Calculator App',
      iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
      url: 'https://ix.siemens.io/',
      description: 'Example description for Calculator app',
      target: '_self',
    },
  ],
};

export default () => {
  return (
    <IxApplication appSwitchConfig={appSwitchConfig}>
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>

        <IxDropdownButton variant="subtle-tertiary" label="Select config">
          <IxDropdownItem label="Config 1"></IxDropdownItem>
          <IxDropdownItem label="Config 2"></IxDropdownItem>
          <IxDropdownItem label="Config 3"></IxDropdownItem>
        </IxDropdownButton>

        <IxAvatar>
          <IxDropdownItem label="Action 1"></IxDropdownItem>
          <IxDropdownItem label="Action 2"></IxDropdownItem>
          <IxDropdownItem label="Action 3"></IxDropdownItem>
        </IxAvatar>
      </IxApplicationHeader>

      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>

      <IxContent>
        <IxContentHeader
          slot="header"
          headerTitle="My Content Page"
        ></IxContentHeader>
      </IxContent>
    </IxApplication>
  );
};
```

### Angular Examples

#### application-app-switch.ts
```ts
import { Component } from '@angular/core';
import { AppSwitchConfiguration } from '@siemens/ix';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './application-app-switch.html',
})
export default class ApplicationAppSwitchExample {
  appSwitchConfig: AppSwitchConfiguration = {
    i18nAppSwitch: 'Switch to Application',
    currentAppId: 'demo-app-2',
    apps: [
      {
        id: 'demo-app-1',
        name: 'Floor App',
        iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
        url: 'https://ix.siemens.io/',
        description: 'Example description for Floor app',
        target: '_self',
      },
      {
        id: 'demo-app-2',
        name: 'Calculator App',
        iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
        url: 'https://ix.siemens.io/',
        description: 'Example description for Calculator app',
        target: '_self',
      },
    ],
  };
}
```

#### application-app-switch.html
```html
<ix-application [appSwitchConfig]="appSwitchConfig">
  <ix-application-header name="My Application">
    <div class="placeholder-logo" slot="logo"></div>

    <ix-dropdown-button variant="subtle-tertiary" label="Select config">
      <ix-dropdown-item label="Config 1"></ix-dropdown-item>
      <ix-dropdown-item label="Config 2"></ix-dropdown-item>
      <ix-dropdown-item label="Config 3"></ix-dropdown-item>
    </ix-dropdown-button>

    <ix-avatar>
      <ix-dropdown-item label="Action 1"></ix-dropdown-item>
      <ix-dropdown-item label="Action 2"></ix-dropdown-item>
      <ix-dropdown-item label="Action 3"></ix-dropdown-item>
    </ix-avatar>
  </ix-application-header>

  <ix-menu>
    <ix-menu-item>Item 1</ix-menu-item>
    <ix-menu-item>Item 2</ix-menu-item>
  </ix-menu>

  <ix-content>
    <ix-content-header slot="header" header-title="My Content Page">
    </ix-content-header>
  </ix-content>
</ix-application>
```

### Angular Standalone Examples

#### application-app-switch.ts
```ts
import { Component } from '@angular/core';
import {
  IxApplication,
  IxApplicationHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxAvatar,
  IxMenu,
  IxMenuItem,
  IxContent,
  IxContentHeader,
} from '@siemens/ix-angular/standalone';

import { AppSwitchConfiguration } from '@siemens/ix';

@Component({
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxDropdownButton,
    IxDropdownItem,
    IxAvatar,
    IxMenu,
    IxMenuItem,
    IxContent,
    IxContentHeader,
  ],
  templateUrl: './application-app-switch.html',
})
export default class ApplicationAppSwitchExample {
  appSwitchConfig: AppSwitchConfiguration = {
    i18nAppSwitch: 'Switch to Application',
    currentAppId: 'demo-app-2',
    apps: [
      {
        id: 'demo-app-1',
        name: 'Floor App',
        iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
        url: 'https://ix.siemens.io/',
        description: 'Example description for Floor app',
        target: '_self',
      },
      {
        id: 'demo-app-2',
        name: 'Calculator App',
        iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
        url: 'https://ix.siemens.io/',
        description: 'Example description for Calculator app',
        target: '_self',
      },
    ],
  };
}
```

#### application-app-switch.html
```html
<ix-application [appSwitchConfig]="appSwitchConfig">
  <ix-application-header name="My Application">
    <div class="placeholder-logo" slot="logo"></div>

    <ix-dropdown-button variant="subtle-tertiary" label="Select config">
      <ix-dropdown-item label="Config 1"></ix-dropdown-item>
      <ix-dropdown-item label="Config 2"></ix-dropdown-item>
      <ix-dropdown-item label="Config 3"></ix-dropdown-item>
    </ix-dropdown-button>

    <ix-avatar>
      <ix-dropdown-item label="Action 1"></ix-dropdown-item>
      <ix-dropdown-item label="Action 2"></ix-dropdown-item>
      <ix-dropdown-item label="Action 3"></ix-dropdown-item>
    </ix-avatar>
  </ix-application-header>

  <ix-menu>
    <ix-menu-item>Item 1</ix-menu-item>
    <ix-menu-item>Item 2</ix-menu-item>
  </ix-menu>

  <ix-content>
    <ix-content-header slot="header" header-title="My Content Page">
    </ix-content-header>
  </ix-content>
</ix-application>
```

### Vue Examples

#### application-app-switch.vue
```vue
<script setup lang="ts">
import { AppSwitchConfiguration } from '@siemens/ix';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-vue';

const appSwitchConfig: AppSwitchConfiguration = {
  i18nAppSwitch: 'Switch to Application',
  currentAppId: 'demo-app-2',
  apps: [
    {
      id: 'demo-app-1',
      name: 'Floor App',
      iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
      url: 'https://ix.siemens.io/',
      description: 'Example description for Floor app',
      target: '_self',
    },
    {
      id: 'demo-app-2',
      name: 'Calculator App',
      iconSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
      url: 'https://ix.siemens.io/',
      description: 'Example description for Calculator app',
      target: '_self',
    },
  ],
};
</script>

<template>
  <IxApplication :appSwitchConfig="appSwitchConfig">
    <IxApplicationHeader name="My Application">
      <div className="placeholder-logo" slot="logo"></div>

      <IxDropdownButton variant="subtle-tertiary" label="Select config">
        <IxDropdownItem label="Config 1"></IxDropdownItem>
        <IxDropdownItem label="Config 2"></IxDropdownItem>
        <IxDropdownItem label="Config 3"></IxDropdownItem>
      </IxDropdownButton>

      <IxAvatar>
        <IxDropdownItem label="Action 1"></IxDropdownItem>
        <IxDropdownItem label="Action 2"></IxDropdownItem>
        <IxDropdownItem label="Action 3"></IxDropdownItem>
      </IxAvatar>
    </IxApplicationHeader>

    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
    </IxMenu>

    <IxContent>
      <IxContentHeader
        slot="header"
        header-title="My Content Page"
      ></IxContentHeader>
    </IxContent>
  </IxApplication>
</template>
```

## Application Advanced

### React Examples

#### application-advanced.tsx
```tsx
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuCategory,
  IxMenuItem,
  IxMenuSettings,
} from '@siemens/ix-react';
import {
  iconAlarmBell,
  iconHome,
  iconPiechart,
  iconPlant,
  iconNetworkDevice,
} from '@siemens/ix-icons/icons';
import { useState } from 'react';

export default function ApplicationAdvancedExample() {
  const [activeContent, setActiveContent] = useState('home');

  return (
    <IxApplication>
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>
        <IxAvatar username="Example User" extra="Additional info"></IxAvatar>
      </IxApplicationHeader>

      <IxMenu>
        <IxMenuItem
          home
          icon={iconHome}
          onClick={() => setActiveContent('home')}
          active={activeContent === 'home'}
        >
          Home
        </IxMenuItem>
        <IxMenuItem
          icon={iconAlarmBell}
          onClick={() => setActiveContent('alarm')}
          active={activeContent === 'alarm'}
        >
          Alarm
        </IxMenuItem>
        <IxMenuCategory icon={iconPiechart} label="Analysis">
          <IxMenuItem
            icon={iconPlant}
            onClick={() => setActiveContent('plant')}
            active={activeContent === 'plant'}
          >
            Plant
          </IxMenuItem>
          <IxMenuItem
            icon={iconNetworkDevice}
            onClick={() => setActiveContent('network')}
            active={activeContent === 'network'}
          >
            Network
          </IxMenuItem>
        </IxMenuCategory>
        <IxMenuSettings></IxMenuSettings>
        <IxMenuAbout></IxMenuAbout>
      </IxMenu>
      <IxContent>
        <IxContentHeader
          headerTitle={`Example ${activeContent} content`}
        ></IxContentHeader>
      </IxContent>
    </IxApplication>
  );
};
```

### Angular Examples

#### application-advanced.ts
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './application-advanced.html',
  standalone: false,
})
export default class ApplicationAdvancedExample {
  activeContent: string = 'home';

  updateContent(contentKey: string) {
    this.activeContent = contentKey;
  }
}
```

#### application-advanced.html
```html
<ix-application>
  <ix-application-header name="My Application">
    <div class="placeholder-logo" slot="logo"></div>
    <ix-avatar username="Example User" extra="Additional info"></ix-avatar>
  </ix-application-header>

  <ix-menu>
    <ix-menu-item
      home
      icon="home"
      (click)="updateContent('home')"
      [active]="activeContent === 'home'"
      >Home</ix-menu-item
    >
    <ix-menu-item
      icon="alarm-bell"
      (click)="updateContent('alarm')"
      [active]="activeContent === 'alarm'"
      >Alarm</ix-menu-item
    >
    <ix-menu-category icon="piechart" label="Analysis">
      <ix-menu-item
        icon="plant"
        (click)="updateContent('plant')"
        [active]="activeContent === 'plant'"
        >Plant</ix-menu-item
      >
      <ix-menu-item
        icon="network-device"
        (click)="updateContent('network')"
        [active]="activeContent === 'network'"
        >Network</ix-menu-item
      >
    </ix-menu-category>
    <ix-menu-settings></ix-menu-settings>
    <ix-menu-about></ix-menu-about>
  </ix-menu>

  <ix-content>
    <ix-content-header headerTitle="Example {{ activeContent }} content"></ix-content-header>
  </ix-content>
</ix-application>
```

### Angular Standalone Examples

#### application-advanced.ts
```ts
import { Component } from '@angular/core';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuCategory,
  IxMenuItem,
  IxMenuSettings,
} from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [
    IxApplication,
    IxApplicationHeader,
    IxAvatar,
    IxContent,
    IxContentHeader,
    IxMenu,
    IxMenuAbout,
    IxMenuCategory,
    IxMenuItem,
    IxMenuSettings,
  ],
  templateUrl: './application-advanced.html',
})
export default class ApplicationAdvancedExample {
  activeContent: string = 'home';

  updateContent(contentKey: string) {
    this.activeContent = contentKey;
  }
}
```

#### application-advanced.html
```html
<ix-application>
  <ix-application-header name="My Application">
    <div class="placeholder-logo" slot="logo"></div>
    <ix-avatar username="Example User" extra="Additional info"></ix-avatar>
  </ix-application-header>

  <ix-menu>
    <ix-menu-item
      home
      icon="home"
      (click)="updateContent('home')"
      [active]="activeContent === 'home'"
      >Home</ix-menu-item
    >
    <ix-menu-item
      icon="alarm-bell"
      (click)="updateContent('alarm')"
      [active]="activeContent === 'alarm'"
      >Alarm</ix-menu-item
    >
    <ix-menu-category icon="piechart" label="Analysis">
      <ix-menu-item
        icon="plant"
        (click)="updateContent('plant')"
        [active]="activeContent === 'plant'"
        >Plant</ix-menu-item
      >
      <ix-menu-item
        icon="network-device"
        (click)="updateContent('network')"
        [active]="activeContent === 'network'"
        >Network</ix-menu-item
      >
    </ix-menu-category>
    <ix-menu-settings></ix-menu-settings>
    <ix-menu-about></ix-menu-about>
  </ix-menu>

  <ix-content>
    <ix-content-header headerTitle="Example {{ activeContent }} content"></ix-content-header>
  </ix-content>
</ix-application>
```

### Vue Examples

#### application-advanced.vue
```vue
<script setup lang="ts">
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuCategory,
  IxMenuItem,
  IxMenuSettings,
} from '@siemens/ix-vue';
import {
  iconAlarmBell,
  iconHome,
  iconPiechart,
  iconPlant,
  iconNetworkDevice,
} from '@siemens/ix-icons/icons';
import { ref } from 'vue';

const activeContent = ref('home');
</script>

<template>
  <IxApplication>
    <IxApplicationHeader name="My Application">
      <div class="placeholder-logo" slot="logo"></div>
      <IxAvatar username="Example User" extra="Additional info"></IxAvatar>
    </IxApplicationHeader>

    <IxMenu>
      <IxMenuItem
        home
        :icon="iconHome"
        :active="activeContent === 'home'"
        @click="activeContent = 'home'"
        >Home</IxMenuItem
      >
      <IxMenuItem
        :icon="iconAlarmBell"
        :active="activeContent === 'alarm'"
        @click="activeContent = 'alarm'"
        >Alarm</IxMenuItem
      >
      <IxMenuCategory :icon="iconPiechart" label="Analysis">
        <IxMenuItem
          :icon="iconPlant"
          :active="activeContent === 'plant'"
          @click="activeContent = 'plant'"
          >Plant</IxMenuItem
        >
        <IxMenuItem
          :icon="iconNetworkDevice"
          :active="activeContent === 'network'"
          @click="activeContent = 'network'"
          >Network</IxMenuItem
        >
      </IxMenuCategory>
      <IxMenuSettings></IxMenuSettings>
      <IxMenuAbout></IxMenuAbout>
    </IxMenu>
    <IxContent>
      <IxContentHeader
        :header-title="`Example ${activeContent} content`"
      ></IxContentHeader>
    </IxContent>
  </IxApplication>
</template>
```

## API for ix-application

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| appSwitchConfig | Define application switch configuration | app-switch-config | undefined \| { currentAppId: string; apps: { id: string; name: string; description: string; url: string; target: AppSwitchConfigurationTarget; iconSrc: string; }[]; i18nAppSwitch?: string \| undefined; i18nLoadingApps?: string \| undefined; } |  |
| breakpoints | Supported layouts | breakpoints | ("sm" \| "md" \| "lg")[] | ['sm', 'md', 'lg'] |
| forceBreakpoint | Change the responsive layout of the menu structure | force-breakpoint | "lg" \| "md" \| "sm" \| undefined |  |
| theme | Application theme | theme | "classic" \| "classic-dark" \| "classic-light" \| string & Record \| undefined |  |
| themeSystemAppearance | Use the system appearance dark or light | theme-system-appearance | boolean | false |
