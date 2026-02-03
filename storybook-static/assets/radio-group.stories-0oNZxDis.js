import{g as c}from"./generic-render-Ck1ibjH2.js";import"./sample-CrjnuCO3.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,p=e=>{const r=c("ix-radio",e);return r.querySelector("ix-radio").addEventListener("checkedChange",o("checkedChange")),r},u=e=>{const r=document.createElement("ix-radio-group");r.setAttribute("label",e.label||"Group");const a=document.createElement("ix-radio");a.setAttribute("label","Radio 1"),a.setAttribute("name","a-group"),a.addEventListener("checkedChange",o("radio1Change")),a.required=e.required;const t=document.createElement("ix-radio");t.setAttribute("label","Radio 2"),t.setAttribute("name","a-group"),t.required=!0,t.addEventListener("checkedChange",o("radio2Change"));const d=document.createElement("ix-radio");d.setAttribute("label","Radio 3"),d.setAttribute("name","a-group"),d.addEventListener("checkedChange",o("radio3Change")),d.disabled=!0;const n=document.createElement("ix-radio");return n.setAttribute("label","Radio 4"),n.setAttribute("name","a-group"),n.addEventListener("checkedChange",o("radio4Change")),r.appendChild(a),r.appendChild(t),r.appendChild(d),r.appendChild(n),r},m={title:"Example/Radio/Group",tags:[],render:e=>p(e),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=42365-150769&p=f&t=eGUQESg89t8bPyiB-0"}}},i={render:e=>u(e),args:{label:"Radio Group"},argTypes:{}},s={render:e=>u(e),args:{label:"Radio Group",required:!0},argTypes:{}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => radioGroupRender(args),
  args: {
    label: 'Radio Group'
  },
  argTypes: {}
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => radioGroupRender(args),
  args: {
    label: 'Radio Group',
    required: true
  },
  argTypes: {}
}`,...s.parameters?.docs?.source}}};const b=["Default","Required"];export{i as Default,s as Required,b as __namedExportsOrder,m as default};
