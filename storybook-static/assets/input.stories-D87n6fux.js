import{m as u,g as c}from"./generic-render-q9JIJh1N.js";import"./sample-CrjnuCO3.js";function d(e){const n=c("ix-input",e,["validation"]),r=n.querySelector("ix-input");return r.classList.remove("ix-info","ix-warning","ix-invalid","ix-valid"),e.validation!=="default"&&r.classList.add(`ix-${e.validation}`),n}const m={title:"Example/Input",tags:[],render:e=>d(e),argTypes:u("ix-input",{validation:{options:["default","info","warning","invalid","valid"],control:{type:"select"}}}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},t={args:{label:"Required",value:"",required:!0}},a={args:{label:"Required",value:"Test",required:!0},render:e=>{const n=c("ix-input",e),r=n.querySelector("ix-input"),s=document.createElement("ix-icon-button");return s.icon="search",s.slot="start",r.appendChild(s),n}},i={args:{label:"MinLength",minLength:3,maxLength:5,value:"1234567"}},o={args:{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    value: '',
    required: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'MinLength',
    minLength: 3,
    maxLength: 5,
    value: '1234567'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};const g=["Required","Slotted","MinLength","ValidationState"];export{i as MinLength,t as Required,a as Slotted,o as ValidationState,g as __namedExportsOrder,m as default};
