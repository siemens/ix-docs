import{m as t,g as o}from"./generic-render-Dg1fV67N.js";import"./sample-CrjnuCO3.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,i=r=>{const s=o("ix-radio",r);return s.querySelector("ix-radio").addEventListener("checkedChange",d("checkedChange")),s},m={title:"Example/Radio",tags:[],render:r=>i(r),argTypes:t("ix-radio",{validation:{control:{type:"select"}}}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=42365-150769&p=f&t=eGUQESg89t8bPyiB-0"}}},e={args:{disabled:!1,label:"Radio",required:!0}},a={args:{disabled:!0,label:"Radio"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Radio',
    required: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Radio'
  }
}`,...a.parameters?.docs?.source}}};const p=["Default","Disabled"];export{e as Default,a as Disabled,p as __namedExportsOrder,m as default};
