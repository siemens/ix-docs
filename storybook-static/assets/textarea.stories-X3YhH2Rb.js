import{m as s,g as o}from"./generic-render-Ck1ibjH2.js";import"./sample-CrjnuCO3.js";function d(e){const i=o("ix-textarea",e,["validation"]),n=i.querySelector("ix-textarea");return n.classList.remove("ix-info","ix-warning","ix-invalid","ix-valid"),e.validation!=="default"&&n.classList.add(`ix-${e.validation}`),i}const c={title:"Example/Textarea",tags:[],render:e=>d(e),argTypes:s("ix-textarea",{validation:{options:["default","info","warning","invalid","valid"],control:{type:"select"}}}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=6396-139860&m=dev"}}},a={args:{}},r={args:{label:"Required",value:"",required:!0}},t={args:{label:"Validation States",value:"Test",required:!0,validation:"invalid"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    value: '',
    required: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Validation States',
    value: 'Test',
    required: true,
    validation: 'invalid'
  }
}`,...t.parameters?.docs?.source}}};const m=["Default","Required","ValidationStates"];export{a as Default,r as Required,t as ValidationStates,m as __namedExportsOrder,c as default};
