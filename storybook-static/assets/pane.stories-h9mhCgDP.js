import{m as l,g as s}from"./generic-render-q9JIJh1N.js";import"./sample-CrjnuCO3.js";const p={title:"Example/Pane",tags:[],render:t=>s("ix-pane",t),argTypes:l("ix-pane",{})},e={args:{heading:"Headline text",icon:"alarm-bell-cancelled"}},n={args:{},render:t=>{const o=s("ix-pane",t),c=o.querySelector("ix-pane"),r=document.createElement("ix-button");return r.setAttribute("slot","header"),r.textContent="Demo",c.appendChild(r),o}},a={args:{heading:"Headline text",icon:"alarm-bell-cancelled",variant:"floating"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Headline text',
    icon: 'alarm-bell-cancelled'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const container = genericRender('ix-pane', args);
    const pane = container.querySelector('ix-pane')!;
    const button = document.createElement('ix-button');
    button.setAttribute('slot', 'header');
    button.textContent = 'Demo';
    pane.appendChild(button);
    return container;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Headline text',
    icon: 'alarm-bell-cancelled',
    variant: 'floating'
  }
}`,...a.parameters?.docs?.source}}};const m=["Default","HeaderSlot","Floating"];export{e as Default,a as Floating,n as HeaderSlot,m as __namedExportsOrder,p as default};
