import{s as i,h as t}from"./stencil-render-CqJWeRgr.js";import{m as c}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const m={title:"Example/Card",tags:[],render:i(o=>t("ix-card",{...o},t("ix-card-title",null,"Asset overview"),t("ix-card-content",null,"Current asset information"))),argTypes:c("ix-card"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=104612-25078&m=dev"}}},e={args:{variant:"base",outline:!0,clickable:!1}},a={args:{variant:"base",outline:!1}},r={args:{variant:"danger",outline:!0}},s={args:{variant:"danger",outline:!1}},n={args:{variant:"base",clickable:!0}},p=["Default","Filled","DangerOutline","DangerFilled","Clickable"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'base',
    outline: true,
    clickable: false
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'base',
    outline: false
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    outline: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    outline: false
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'base',
    clickable: true
  }
}`,...n.parameters?.docs?.source}}};export{n as Clickable,s as DangerFilled,r as DangerOutline,e as Default,a as Filled,p as __namedExportsOrder,m as default};
