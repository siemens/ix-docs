import{x as n}from"./iframe-C2tqSE8x.js";import{m as i}from"./generic-render-CsqnySBY.js";import"./sample-ST_d4yt9.js";const d={title:"Example/ApplicationHeader",tags:[],render:e=>n`<ix-application-header
      name="${e.name}"
      ?show-menu="${e.showMenu}"
    >
    </ix-application-header>`,argTypes:i("ix-application-header"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=8033-151366&m=dev"}}},a={args:{name:"Application Header"}},r={render:e=>n`<ix-application-header
      name="${e.name}"
      ?show-menu="${e.showMenu}"
    >
      <ix-avatar name="John Doe" aria-label="user-avatar">
        <ix-dropdown-item>Profile</ix-dropdown-item>
        <ix-dropdown-item>Settings</ix-dropdown-item>
        <ix-dropdown-item>Logout</ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>`,args:{name:"Application Header"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Application Header'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return html\`<ix-application-header
      name="\${args.name}"
      ?show-menu="\${args.showMenu}"
    >
      <ix-avatar name="John Doe" aria-label="user-avatar">
        <ix-dropdown-item>Profile</ix-dropdown-item>
        <ix-dropdown-item>Settings</ix-dropdown-item>
        <ix-dropdown-item>Logout</ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>\`;
  },
  args: {
    name: 'Application Header'
  }
}`,...r.parameters?.docs?.source}}};const m=["Default","withAvatar"];export{a as Default,m as __namedExportsOrder,d as default,r as withAvatar};
