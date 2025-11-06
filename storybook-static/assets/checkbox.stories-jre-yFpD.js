import{m as b,g as l}from"./generic-render-Dg1fV67N.js";import"./sample-CrjnuCO3.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,u=e=>{const r=l("ix-checkbox",e);return r.querySelector("ix-checkbox").addEventListener("checkedChange",i("checkedChange")),r},p=e=>{const r=l("ix-checkbox-group",e),a=r.querySelector("ix-checkbox-group");a.setAttribute("label",e.label||"Group");const c=document.createElement("ix-checkbox");c.setAttribute("label","Checkbox 1"),c.setAttribute("name","checkbox1"),c.addEventListener("checkedChange",i("checkbox1Change"));const o=document.createElement("ix-checkbox");return o.setAttribute("label","Checkbox 2"),o.setAttribute("name","checkbox2"),o.addEventListener("checkedChange",i("checkbox2Change")),a.appendChild(c),a.appendChild(o),r.appendChild(a),r},m={title:"Example/Checkbox",tags:[],render:e=>u(e),argTypes:b("ix-checkbox",{validation:{control:{type:"select"}}}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=42365-150769&p=f&t=eGUQESg89t8bPyiB-0"}}},t={args:{disabled:!1,label:"Checkbox"}},s={args:{disabled:!0,label:"Checkbox"}},n={render:e=>p(e),args:{label:"Checkbox Group"}},d={args:{label:"Required",required:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Checkbox'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Checkbox'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => CheckboxGroupRender(args),
  args: {
    label: 'Checkbox Group'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    required: true
  }
}`,...d.parameters?.docs?.source}}};const k=["Default","Disabled","Group","Required"];export{t as Default,s as Disabled,n as Group,d as Required,k as __namedExportsOrder,m as default};
