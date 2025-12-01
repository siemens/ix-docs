import{m as p,g as m}from"./generic-render-B6oDlj6b.js";import"./sample-CrjnuCO3.js";const b={title:"Example/SplitButton",tags:[],render:i=>{const n=m("ix-split-button",i),s=document.createElement("ix-dropdown-item");s.label="Dropdown Item 1";const l=document.createElement("ix-dropdown-item");l.label="Dropdown Item 2";const d=document.createElement("ix-dropdown-item");d.label="Dropdown Item 3";const o=n.querySelector("ix-split-button");return o.appendChild(s),o.appendChild(l),o.appendChild(d),n},argTypes:p("ix-split-button",{variant:{options:["primary","secondary"],control:{type:"select"}},styles:{control:{type:"object"}}}),args:{},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},e={args:{label:"Button"}},t={args:{label:"Button",disabled:!0}},r={args:{label:"Button",disabled:!1,disableButton:!0}},a={args:{label:"Button",disabled:!1,disableButton:!1,disableDropdownButton:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    disabled: false,
    disableButton: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    disabled: false,
    disableButton: false,
    disableDropdownButton: true
  }
}`,...a.parameters?.docs?.source}}};const g=["Primary","Disable","DisableMainButton","DisableDropdownButton"];export{t as Disable,a as DisableDropdownButton,r as DisableMainButton,e as Primary,g as __namedExportsOrder,b as default};
