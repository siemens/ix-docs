import{m,g as c}from"./generic-render-q9JIJh1N.js";import"./sample-CrjnuCO3.js";const l={title:"Example/MenuItem",tags:[],render:a=>{const s=c("ix-menu-item",a).querySelector("ix-menu-item"),r=document.createElement("ix-menu");return r.appendChild(s),r},argTypes:m("ix-menu-item"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev"}}},e={args:{label:"Menu Item"}},t={args:{label:"Menu Item",icon:"home"}},o={args:{label:"Menu Item",icon:"home",notifications:5,href:"https://ix.siemens.com"}},n={args:{label:"Menu Item",icon:"home",tooltipText:"My custom tooltip text"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Item'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Item',
    icon: 'home'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Item',
    icon: 'home',
    notifications: 5,
    href: 'https://ix.siemens.com'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Item',
    icon: 'home',
    tooltipText: 'My custom tooltip text'
  }
}`,...n.parameters?.docs?.source}}};const d=["Default","Icon","Notification","CustomTooltip"];export{n as CustomTooltip,e as Default,t as Icon,o as Notification,d as __namedExportsOrder,l as default};
