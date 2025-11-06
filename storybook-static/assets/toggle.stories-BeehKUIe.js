import{m as g,g as m}from"./generic-render-Dg1fV67N.js";import"./sample-CrjnuCO3.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,l=e=>{const a=m("ix-toggle",e,["validation"]),r=a.querySelector("ix-toggle");return r.addEventListener("checkedChange",u("checkedChange")),r.classList.remove("ix-invalid","ix-valid","ix-warning","ix-info"),r.classList.add(e.validation),a},f={title:"Example/Toggle",tags:[],render:e=>l(e),argTypes:g("ix-toggle",{validation:{control:{type:"select"},options:["ix-invalid","ix-valid","ix-warning","ix-info"]}}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},s={args:{disabled:!1}},n={args:{checked:!0,disabled:!1,validation:"ix-valid"}},i={args:{checked:!0,disabled:!1,validation:"ix-invalid"}},t={args:{checked:!0,disabled:!1,validation:"ix-info"}},o={args:{checked:!0,disabled:!1,validation:"ix-warning"}},d={args:{disabled:!1,textOn:"Lorem ipsum dolor sit amet consectetur adipisicing elit",checked:!0},render:e=>{const a=l(e),r=a.querySelector("ix-toggle");return r.style.width="10rem",r.style.height="3rem",a}},c={args:{required:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    validation: 'ix-valid'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    validation: 'ix-invalid'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    validation: 'ix-info'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    validation: 'ix-warning'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    textOn: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    checked: true
  },
  render: args => {
    const container = toggleRender(args);
    const ixToggle = container.querySelector('ix-toggle')!;
    ixToggle.style.width = '10rem';
    ixToggle.style.height = '3rem';
    return container;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...c.parameters?.docs?.source}}};const v=["Default","Valid","Invalid","Info","Warning","Overflow","Required"];export{s as Default,t as Info,i as Invalid,d as Overflow,c as Required,n as Valid,o as Warning,v as __namedExportsOrder,f as default};
