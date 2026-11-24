import{m as t,g as o}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const m={title:"Example/DateInput",tags:[],render:s=>o("ix-date-input",s),argTypes:t("ix-date-input",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},e={args:{label:"Required",value:"",required:!0}},r={args:{label:"Require confirmation",value:"2026/02/08",requireConfirmation:!0}},a={args:{label:"Display format",value:"2099/03/04",format:"yyyy/LL/dd",displayFormat:"dd.LL.yy"}},d=["Required","RequireConfirmation","DisplayFormat"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    value: '',
    required: true
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Require confirmation',
    value: '2026/02/08',
    requireConfirmation: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Display format',
    value: '2099/03/04',
    format: 'yyyy/LL/dd',
    displayFormat: 'dd.LL.yy'
  }
}`,...a.parameters?.docs?.source}}};export{a as DisplayFormat,r as RequireConfirmation,e as Required,d as __namedExportsOrder,m as default};
