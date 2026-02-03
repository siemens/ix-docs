import{m,g as p}from"./generic-render-Ck1ibjH2.js";import"./sample-CrjnuCO3.js";const x={title:"Example/Avatar",tags:[],render:r=>p("ix-avatar",r),argTypes:m("ix-avatar"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=594-9899&m=dev"}}},t={args:{}},n={args:{initials:"JD",username:"John Doe"}},a={render:r=>{const e=p("ix-avatar",r).querySelector("ix-avatar"),o=document.createElement("ix-dropdown-item");o.textContent="Profile";const d=document.createElement("ix-dropdown-item");d.textContent="Settings";const i=document.createElement("ix-dropdown-item");i.textContent="Logout",e.appendChild(o),e.appendChild(d),e.appendChild(i);const s=document.createElement("ix-application-header");return s.appendChild(e),s},args:{extra:"Administrator",username:"John Doe",initials:"JD"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    initials: 'JD',
    username: 'John Doe'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = genericRender('ix-avatar', args);
    const avatar = container.querySelector('ix-avatar') as HTMLIxAvatarElement;
    const dropdownItem1 = document.createElement('ix-dropdown-item');
    dropdownItem1.textContent = 'Profile';
    const dropdownItem2 = document.createElement('ix-dropdown-item');
    dropdownItem2.textContent = 'Settings';
    const dropdownItem3 = document.createElement('ix-dropdown-item');
    dropdownItem3.textContent = 'Logout';
    avatar.appendChild(dropdownItem1);
    avatar.appendChild(dropdownItem2);
    avatar.appendChild(dropdownItem3);
    const applicationHeader = document.createElement('ix-application-header');
    applicationHeader.appendChild(avatar);
    return applicationHeader;
  },
  args: {
    extra: 'Administrator',
    username: 'John Doe',
    initials: 'JD'
  }
}`,...a.parameters?.docs?.source}}};const g=["Default","Initials","withAvatar"];export{t as Default,n as Initials,g as __namedExportsOrder,x as default,a as withAvatar};
