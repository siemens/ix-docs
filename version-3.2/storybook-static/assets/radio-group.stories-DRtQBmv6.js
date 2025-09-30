import{g as s}from"./generic-render-CsqnySBY.js";import"./sample-ST_d4yt9.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,c=e=>{const r=s("ix-radio",e);return r.querySelector("ix-radio").addEventListener("checkedChange",d("checkedChange")),r},i=e=>{const r=document.createElement("ix-radio-group");r.setAttribute("label",e.label||"Group");const a=document.createElement("ix-radio");a.setAttribute("label","Radio 1"),a.setAttribute("name","a-group"),a.addEventListener("checkedChange",d("radio1Change")),a.required=e.required;const t=document.createElement("ix-radio");return t.setAttribute("label","Radio 2"),t.setAttribute("name","a-group"),t.addEventListener("checkedChange",d("radio2Change")),r.appendChild(a),r.appendChild(t),r},l={title:"Example/Radio/Group",tags:[],render:e=>c(e),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=42365-150769&p=f&t=eGUQESg89t8bPyiB-0"}}},o={render:e=>i(e),args:{label:"Radio Group"},argTypes:{}},n={render:e=>i(e),args:{label:"Radio Group",required:!0},argTypes:{}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => radioGroupRender(args),
  args: {
    label: 'Radio Group'
  },
  argTypes: {}
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => radioGroupRender(args),
  args: {
    label: 'Radio Group',
    required: true
  },
  argTypes: {}
}`,...n.parameters?.docs?.source}}};const g=["Default","Required"];export{o as Default,n as Required,g as __namedExportsOrder,l as default};
