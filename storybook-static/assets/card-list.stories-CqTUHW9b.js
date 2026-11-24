import{s as l,h as n}from"./stencil-render-CqJWeRgr.js";import{m as c}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const i=[{variant:"base",outline:!1},{variant:"warning"},{variant:"success"},{variant:"danger"},{variant:"information"}],u=Array.from({length:20},(s,a)=>({icon:a%2===0?"rocket":"bulb",notification:`${a%5+1}`,...i[a%i.length]})),y={title:"Example/Card List",tags:[],render:l(s=>n("ix-card-list",{...s},u.map((a,o)=>n("ix-push-card",{key:o,icon:a.icon,notification:a.notification,heading:`Heading content ${o+1}`,subheading:"Subheading",variant:a.variant,outline:a.outline})))),argTypes:c("ix-card-list"),args:{label:"Stack Layout",showAllCount:20,listStyle:"stack"}},t={},r={args:{label:"Stack Layout",listStyle:"stack"}},e={args:{label:"Flow Layout",listStyle:"scroll"}},d=["Default","StackLayout","FlowLayout"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Stack Layout',
    listStyle: 'stack'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Flow Layout',
    listStyle: 'scroll'
  }
}`,...e.parameters?.docs?.source}}};export{t as Default,e as FlowLayout,r as StackLayout,d as __namedExportsOrder,y as default};
