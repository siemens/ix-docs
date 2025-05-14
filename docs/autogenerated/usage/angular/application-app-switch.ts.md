```ts
import { Component } from '@angular/core';
import { AppSwitchConfiguration } from '@siemens/ix';

@Component({
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
