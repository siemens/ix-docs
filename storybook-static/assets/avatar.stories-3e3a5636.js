import{g as c,m as l}from"./generic-render-1d688787.js";import{x as g}from"./lit-element-f36cbe21.js";import"./sample-cfb362e2.js";const v={title:"Example/Avatar",tags:[],render:r=>c("ix-avatar",r),argTypes:l("ix-avatar"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=594-9899&m=dev"}}},a={args:{}},e={render:({extra:r,image:d,initials:p,username:x})=>g`<ix-application-header name="Application name">
      <ix-avatar
        extra=${r}
        image=${d}
        initials=${p}
        username=${x}
      >
        <ix-dropdown-item>Profile</ix-dropdown-item>
        <ix-dropdown-item>Settings</ix-dropdown-item>
        <ix-dropdown-item>Logout</ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>`,args:{extra:"Administrator",username:"John Doe",initials:"JD"}};var i,n,t;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var o,m,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const f=["Default","withAvatar"];export{a as Default,f as __namedExportsOrder,v as default,e as withAvatar};
