import{m as i,g as c}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const d={title:"Example/LinkButton",tags:[],render:s=>c("ix-link-button",s),argTypes:i("ix-link-button",{styles:{control:{type:"object"}}}),args:{},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},n={args:{defaultSlot:"My link"}},e={args:{defaultSlot:"Link without icon",icon:"none",url:"/"}},o={args:{defaultSlot:"Go to overview",icon:"internal",iconPosition:"start",url:"/overview"}},t={args:{defaultSlot:"Open external link",icon:"external",iconPosition:"end",url:"https://ix.siemens.io/"}},r={args:{defaultSlot:"Download document",icon:"file",iconPosition:"start",url:"/document.pdf"}},a={args:{defaultSlot:"Continue to next step",icon:"action",iconPosition:"end",url:"/next"}},m=["Default","NoIcon","InternalLink","ExternalLink","FileLink","ActionLink"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'My link'
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Link without icon',
    icon: 'none',
    url: '/'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Go to overview',
    icon: 'internal',
    iconPosition: 'start',
    url: '/overview'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Open external link',
    icon: 'external',
    iconPosition: 'end',
    url: 'https://ix.siemens.io/'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Download document',
    icon: 'file',
    iconPosition: 'start',
    url: '/document.pdf'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Continue to next step',
    icon: 'action',
    iconPosition: 'end',
    url: '/next'
  }
}`,...a.parameters?.docs?.source}}};export{a as ActionLink,n as Default,t as ExternalLink,r as FileLink,o as InternalLink,e as NoIcon,m as __namedExportsOrder,d as default};
