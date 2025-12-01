import{m as p,g as c}from"./generic-render-B6oDlj6b.js";import{x as d}from"./iframe-Bi7vWXRH.js";import"./sample-CrjnuCO3.js";const _={title:"Example/Pill",tags:[],render:e=>c("ix-pill",e),argTypes:p("ix-pill",{}),parameters:{}},n={args:{icon:"info",defaultSlot:"Example Text"}},i={args:{icon:"info"}},t={args:{defaultSlot:"Example Text"}},o={args:{icon:"info",defaultSlot:"Example Text"},render:e=>{const r=c("ix-pill",e),l=r.querySelector("ix-pill");return l.style.width="5rem",r}},a={args:{defaultSlot:"Example Text"},render:e=>{const r=c("ix-pill",e),l=r.querySelector("ix-pill");return l.style.width="5rem",r}},s={render:({icon:e})=>d`<ix-pill icon=${e}
      ><div style="display: flex;">
        <ix-icon name="${e}" size="16"></ix-icon></div
    ></ix-pill>`,args:{icon:"info"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    defaultSlot: 'Example Text'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'info'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Example Text'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    defaultSlot: 'Example Text'
  },
  render: args => {
    const container = genericRender('ix-pill', args);
    const ixPill = container.querySelector('ix-pill')!;
    ixPill.style.width = '5rem';
    return container;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Example Text'
  },
  render: args => {
    const container = genericRender('ix-pill', args);
    const ixPill = container.querySelector('ix-pill')!;
    ixPill.style.width = '5rem';
    return container;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    icon
  }) => {
    return html\`<ix-pill icon=\${icon}
      ><div style="display: flex;">
        <ix-icon name="\${icon}" size="16"></ix-icon></div
    ></ix-pill>\`;
  },
  args: {
    icon: 'info'
  }
}`,...s.parameters?.docs?.source}}};const g=["With_Icon_and_Text","With_Icon_only","With_Text_only","With_Icon_and_Text_Ellipsis","With_Text_only_Ellipsis","With_Icon_and_Element"];export{s as With_Icon_and_Element,n as With_Icon_and_Text,o as With_Icon_and_Text_Ellipsis,i as With_Icon_only,t as With_Text_only,a as With_Text_only_Ellipsis,g as __namedExportsOrder,_ as default};
