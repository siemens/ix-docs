import{m as o,g as m}from"./generic-render-CsqnySBY.js";import{x as s}from"./iframe-C2tqSE8x.js";import"./sample-ST_d4yt9.js";const c={title:"Example/Avatar",tags:[],render:r=>m("ix-avatar",r),argTypes:o("ix-avatar"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=594-9899&m=dev"}}},a={args:{}},e={render:({extra:r,image:i,initials:n,username:t})=>s`<ix-application-header name="Application name">
      <ix-avatar
        extra=${r}
        image=${i}
        initials=${n}
        username=${t}
      >
        <ix-dropdown-item>Profile</ix-dropdown-item>
        <ix-dropdown-item>Settings</ix-dropdown-item>
        <ix-dropdown-item>Logout</ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>`,args:{extra:"Administrator",username:"John Doe",initials:"JD"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: ({
    extra,
    image,
    initials,
    username
  }) => {
    return html\`<ix-application-header name="Application name">
      <ix-avatar
        extra=\${extra}
        image=\${image}
        initials=\${initials}
        username=\${username}
      >
        <ix-dropdown-item>Profile</ix-dropdown-item>
        <ix-dropdown-item>Settings</ix-dropdown-item>
        <ix-dropdown-item>Logout</ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>\`;
  },
  args: {
    extra: 'Administrator',
    username: 'John Doe',
    initials: 'JD'
  }
}`,...e.parameters?.docs?.source}}};const l=["Default","withAvatar"];export{a as Default,l as __namedExportsOrder,c as default,e as withAvatar};
