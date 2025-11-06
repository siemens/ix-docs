import{m as l,g as p}from"./generic-render-Dg1fV67N.js";import{x as d}from"./iframe-XqzYRgP7.js";import"./sample-CrjnuCO3.js";const u={title:"Example/Chip",tags:[],render:e=>p("ix-chip",e),argTypes:l("ix-chip",{previewWidth:{control:{type:"text"}}}),parameters:{}},n={args:{icon:"info",defaultSlot:"Example Text"}},t={args:{icon:"info"}},i={args:{defaultSlot:"Example Text"}},o={args:{icon:"info",defaultSlot:"Example Text"},render:e=>{const r=p("ix-chip",e),c=r.querySelector("ix-chip");return c.style.width="5rem",r}},a={args:{defaultSlot:"Example Text"},render:e=>{const r=p("ix-chip",e),c=r.querySelector("ix-chip");return c.style.width="5rem",r}},s={render:({icon:e})=>d`<ix-chip icon=${e}
      ><div style="display: flex;">
        <ix-icon name="${e}" size="16"></ix-icon></div
    ></ix-chip>`,args:{icon:"info"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    defaultSlot: 'Example Text'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'info'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Example Text'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    defaultSlot: 'Example Text'
  },
  render: args => {
    const container = genericRender('ix-chip', args);
    const ixChip = container.querySelector('ix-chip')!;
    ixChip.style.width = '5rem';
    return container;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Example Text'
  },
  render: args => {
    const container = genericRender('ix-chip', args);
    const ixChip = container.querySelector('ix-chip')!;
    ixChip.style.width = '5rem';
    return container;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: ({
    icon
  }) => {
    return html\`<ix-chip icon=\${icon}
      ><div style="display: flex;">
        <ix-icon name="\${icon}" size="16"></ix-icon></div
    ></ix-chip>\`;
  },
  args: {
    icon: 'info'
  }
}`,...s.parameters?.docs?.source}}};const _=["With_Icon_and_Text","With_Icon_only","With_Text_only","With_Icon_and_Text_Ellipsis","With_Text_only_Ellipsis","With_Icon_and_Element"];export{s as With_Icon_and_Element,n as With_Icon_and_Text,o as With_Icon_and_Text_Ellipsis,t as With_Icon_only,i as With_Text_only,a as With_Text_only_Ellipsis,_ as __namedExportsOrder,u as default};
