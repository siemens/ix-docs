import{x as a}from"./iframe-LoKmnSQH.js";import{m as x}from"./generic-render-C55c-khh.js";import"./preload-helper-PPVm8Dsz.js";import"./sample-4XlXCCij.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,p=()=>a`
  <ix-tab-item tab-key="overview" label="Overview"></ix-tab-item>
  <ix-tab-item tab-key="analytics" label="Analytics"></ix-tab-item>
  <ix-tab-item tab-key="events" label="Events"></ix-tab-item>
  <ix-tab-item tab-key="settings" label="Settings" disabled></ix-tab-item>
`,g=()=>a`
  <ix-tab-item tab-key="success" label="Success">
    <ix-icon name="success"></ix-icon>
  </ix-tab-item>
  <ix-tab-item tab-key="tree" label="Tree" counter="12">
    <ix-icon name="tree"></ix-icon>
  </ix-tab-item>
  <ix-tab-item tab-key="maintenance" label="Maintenance">
    <ix-icon name="maintenance"></ix-icon>
  </ix-tab-item>
  <ix-tab-item tab-key="sound" label="Sound" disabled counter="4">
    <ix-icon name="sound-loud"></ix-icon>
  </ix-tab-item>
`,y=()=>a`
  <ix-tab-item tab-key="overview" label="Overview"></ix-tab-item>
  <ix-tab-item tab-key="analytics" label="Analytics"></ix-tab-item>
  <ix-tab-item tab-key="events" label="Events"></ix-tab-item>
  <ix-tab-item tab-key="automation" label="Automation"></ix-tab-item>
  <ix-tab-item tab-key="datasources" label="Data Sources"></ix-tab-item>
  <ix-tab-item tab-key="notifications" label="Notifications"></ix-tab-item>
  <ix-tab-item tab-key="history" label="History"></ix-tab-item>
  <ix-tab-item tab-key="settings" label="Settings"></ix-tab-item>
`,k={title:"Example/Tabs",tags:[],render:({small:l,rounded:t,activeTabKey:m,layout:b,placement:u})=>a`
    <ix-tabs
      ?small=${l}
      ?rounded=${t}
      active-tab-key=${m}
      layout=${b}
      placement=${u}
      @tabChange=${d("tabChange")}
    >
      ${t?g():p()}
    </ix-tabs>
  `,argTypes:x("ix-tabs")},e={args:{activeTabKey:"overview",layout:"auto",placement:"bottom",rounded:!1,small:!1}},s={args:{...e.args,small:!0}},r={args:{...e.args,activeTabKey:"success",rounded:!0}},i={args:{...e.args,layout:"stretched"}},n={args:{...e.args,placement:"top"}},o={args:{...e.args,activeTabKey:"settings"}},c={args:{...e.args},render:({small:l,rounded:t,activeTabKey:m,layout:b,placement:u})=>a`
    <div style="width: 340px;">
      <ix-tabs
        ?small=${l}
        ?rounded=${t}
        active-tab-key=${m}
        layout=${b}
        placement=${u}
        @tabChange=${d("tabChange")}
      >
        ${y()}
      </ix-tabs>
    </div>
  `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    activeTabKey: 'overview',
    layout: 'auto',
    placement: 'bottom',
    rounded: false,
    small: false
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    small: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    activeTabKey: 'success',
    rounded: true
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: 'stretched'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placement: 'top'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    activeTabKey: 'settings'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: ({
    small,
    rounded,
    activeTabKey,
    layout,
    placement
  }) => html\`
    <div style="width: 340px;">
      <ix-tabs
        ?small=\${small}
        ?rounded=\${rounded}
        active-tab-key=\${activeTabKey}
        layout=\${layout}
        placement=\${placement}
        @tabChange=\${action('tabChange')}
      >
        \${overflowTabs()}
      </ix-tabs>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};const S=["Default","Small","Rounded","Stretched","TopPlacement","DisabledTabActive","Overflow"];export{e as Default,o as DisabledTabActive,c as Overflow,r as Rounded,s as Small,i as Stretched,n as TopPlacement,S as __namedExportsOrder,k as default};
