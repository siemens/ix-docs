---
sidebar_position: 4
sidebar_label: Vue
title: Vue
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Vue is a progressive framework for building user interfaces, known for its simplicity and flexibility. This section  guides you through the steps to install and set up our design system within a Vue project, ensuring a smooth and efficient integration process.'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#

## Library installation

Install `@siemens/ix`, `@siemens/ix-vue` and `@siemens/ix-icons` using a package manager:

<Tabs>
  <TabItem value="npm" label="NPM" default>
    ```
    npm install @siemens/ix @siemens/ix-vue @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    ```
    yarn add @siemens/ix @siemens/ix-vue @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="pnpm" label="PNPM">
    ```
    pnpm add @siemens/ix @siemens/ix-vue @siemens/ix-icons
    ```
  </TabItem>
</Tabs>

## Usage

```ts
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

import { createApp } from 'vue';
import { ixPlugin } from '@siemens/ix-vue';
import Root from './App.vue';

const app = createApp(App);

app.use(ixPlugin);

app.mount('#root');
```

Set the `data-ix-theme` attribute of the `<html>` tag to the theme of choice (e.g. `classic`) and the corresponding `data-ix-color-schema` attribute to the value `light`, `dark` or `system` to set the color scheme. `system` will automatically apply the color scheme of users’ operating systems.

```html
<html data-ix-theme="classic" data-ix-color-schema="dark">
  <!-- Framework related imports -->
  <!--  -->
  <body></body>
</html>
```
