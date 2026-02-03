import{m as c,b as u,g as d}from"./generic-render-Ck1ibjH2.js";import"./sample-CrjnuCO3.js";const m={title:"Example/Input",tags:[],render:a=>u("ix-input",a),argTypes:c("ix-input",{validation:{options:["default","info","warning","invalid","valid"],control:{type:"select"}}}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},e={args:{label:"Required",value:"",required:!0}},n={args:{label:"Required",value:"Test",required:!0},render:a=>{const s=d("ix-input",a),o=s.querySelector("ix-input"),i=document.createElement("ix-icon-button");return i.icon="search",i.slot="start",o.appendChild(i),s}},r={args:{label:"MinLength",minLength:3,maxLength:5,value:"1234567"}},t={args:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    value: '',
    required: true
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    value: 'Test',
    required: true
  },
  render: args => {
    const container = genericRender('ix-input', args);
    const input = container.querySelector('ix-input') as HTMLIxInputElement;
    const icon = document.createElement('ix-icon-button');
    icon.icon = 'search';
    icon.slot = 'start';
    input.appendChild(icon);
    return container;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'MinLength',
    minLength: 3,
    maxLength: 5,
    value: '1234567'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};const g=["Required","Slotted","MinLength","ValidationState"];export{r as MinLength,e as Required,n as Slotted,t as ValidationState,g as __namedExportsOrder,m as default};
