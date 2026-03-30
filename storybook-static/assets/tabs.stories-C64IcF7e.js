import{x as a}from"./iframe-DJKWFKy9.js";import{m as x}from"./generic-render-QLLvfCCW.js";import"./preload-helper-PPVm8Dsz.js";import"./sample-4XlXCCij.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,p=()=>a`
  <ix-tab-item>Overview</ix-tab-item>
  <ix-tab-item>Analytics</ix-tab-item>
  <ix-tab-item>Events</ix-tab-item>
  <ix-tab-item disabled>Settings</ix-tab-item>
`,g=()=>a`
  <ix-tab-item>
    <ix-icon name="success"></ix-icon>
  </ix-tab-item>
  <ix-tab-item counter="12">
    <ix-icon name="tree"></ix-icon>
  </ix-tab-item>
  <ix-tab-item>
    <ix-icon name="maintenance"></ix-icon>
  </ix-tab-item>
  <ix-tab-item disabled counter="4">
    <ix-icon name="sound-loud"></ix-icon>
  </ix-tab-item>
`,$=()=>a`
  <ix-tab-item>Overview</ix-tab-item>
  <ix-tab-item>Analytics</ix-tab-item>
  <ix-tab-item>Events</ix-tab-item>
  <ix-tab-item>Automation</ix-tab-item>
  <ix-tab-item>Data Sources</ix-tab-item>
  <ix-tab-item>Notifications</ix-tab-item>
  <ix-tab-item>History</ix-tab-item>
  <ix-tab-item>Settings</ix-tab-item>
`,h={title:"Example/Tabs",tags:[],render:({small:m,rounded:t,selected:l,layout:d,placement:u})=>a`
    <ix-tabs
      ?small=${m}
      ?rounded=${t}
      .selected=${l}
      layout=${d}
      placement=${u}
      @selectedChange=${b("selectedChange")}
    >
      ${t?g():p()}
    </ix-tabs>
  `,argTypes:x("ix-tabs")},e={args:{selected:0,layout:"auto",placement:"bottom",rounded:!1,small:!1}},s={args:{...e.args,small:!0}},r={args:{...e.args,rounded:!0}},n={args:{...e.args,layout:"stretched"}},i={args:{...e.args,placement:"top"}},o={args:{...e.args,selected:3}},c={args:{...e.args},render:({small:m,rounded:t,selected:l,layout:d,placement:u})=>a`
    <div style="width: 340px;">
      <ix-tabs
        ?small=${m}
        ?rounded=${t}
        .selected=${l}
        layout=${d}
        placement=${u}
        @selectedChange=${b("selectedChange")}
      >
        ${$()}
      </ix-tabs>
    </div>
  `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    selected: 0,
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
    rounded: true
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: 'stretched'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    placement: 'top'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    selected: 3
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: ({
    small,
    rounded,
    selected,
    layout,
    placement
  }) => html\`
    <div style="width: 340px;">
      <ix-tabs
        ?small=\${small}
        ?rounded=\${rounded}
        .selected=\${selected}
        layout=\${layout}
        placement=\${placement}
        @selectedChange=\${action('selectedChange')}
      >
        \${overflowTabs()}
      </ix-tabs>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};const D=["Default","Small","Rounded","Stretched","TopPlacement","DisabledSelectedFallback","Overflow"];export{e as Default,o as DisabledSelectedFallback,c as Overflow,r as Rounded,s as Small,n as Stretched,i as TopPlacement,D as __namedExportsOrder,h as default};
