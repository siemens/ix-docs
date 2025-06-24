import{x as m}from"./lit-element-f36cbe21.js";import{m as s}from"./generic-render-1d688787.js";import"./sample-cfb362e2.js";const u={title:"Example/ApplicationHeader",tags:[],render:e=>m`<ix-application-header
      name="${e.name}"
      ?show-menu="${e.showMenu}"
    >
    </ix-application-header>`,argTypes:s("ix-application-header"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=8033-151366&m=dev"}}},a={args:{name:"Application Header"}},r={render:e=>m`<ix-application-header
      name="${e.name}"
      ?show-menu="${e.showMenu}"
    >
      <ix-avatar name="John Doe" aria-label="user-avatar">
        <ix-dropdown-item>Profile</ix-dropdown-item>
        <ix-dropdown-item>Settings</ix-dropdown-item>
        <ix-dropdown-item>Logout</ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>`,args:{name:"Application Header"}};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: 'Application Header'
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var t,p,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const w=["Default","withAvatar"];export{a as Default,w as __namedExportsOrder,u as default,r as withAvatar};
