import{a as d}from"./chunk-D5ZWXAHU-ba67761f.js";import{g}from"./generic-render-60971499.js";import"./v4-4a60fe23.js";import"./sample-cfb362e2.js";const b=e=>{const r=g("ix-radio",e);return r.querySelector("ix-radio").addEventListener("checkedChange",d("checkedChange")),r},m=e=>{const r=document.createElement("ix-radio-group");r.setAttribute("label",e.label||"Group");const a=document.createElement("ix-radio");a.setAttribute("label","Radio 1"),a.setAttribute("name","a-group"),a.addEventListener("checkedChange",d("radio1Change")),a.required=e.required;const t=document.createElement("ix-radio");return t.setAttribute("label","Radio 2"),t.setAttribute("name","a-group"),t.addEventListener("checkedChange",d("radio2Change")),r.appendChild(a),r.appendChild(t),r},C={title:"Example/Radio/Group",tags:[],render:e=>b(e),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=42365-150769&p=f&t=eGUQESg89t8bPyiB-0"}}},o={render:e=>m(e),args:{label:"Radio Group"},argTypes:{}},n={render:e=>m(e),args:{label:"Radio Group",required:!0},argTypes:{}};var i,s,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => radioGroupRender(args),
  args: {
    label: 'Radio Group'
  },
  argTypes: {}
}`,...(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var c,p,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => radioGroupRender(args),
  args: {
    label: 'Radio Group',
    required: true
  },
  argTypes: {}
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const E=["Default","Required"];export{o as Default,n as Required,E as __namedExportsOrder,C as default};
