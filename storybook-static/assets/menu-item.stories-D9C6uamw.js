import{m as i,g as u}from"./generic-render-Ck1ibjH2.js";import"./sample-CrjnuCO3.js";const g={title:"Example/Menu/MenuItem",tags:[],render:m=>{const c=u("ix-menu-item",m).querySelector("ix-menu-item"),s=document.createElement("ix-menu");return s.appendChild(c),s},argTypes:i("ix-menu-item",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev"},a11y:{test:"error"}}},e={args:{label:"Menu Item"}},r={args:{label:"Menu Item",icon:"home"}},t={args:{label:"Menu Item",icon:"home",notifications:5,href:"https://ix.siemens.com"}},o={args:{label:"Menu Item",icon:"home",tooltipText:"My custom tooltip text"}},a={args:{label:"Menu Item",icon:"home",active:!0}},n={args:{label:"Menu Item",icon:"home",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Item'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Item',
    icon: 'home'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Item',
    icon: 'home',
    notifications: 5,
    href: 'https://ix.siemens.com'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Item',
    icon: 'home',
    tooltipText: 'My custom tooltip text'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Item',
    icon: 'home',
    active: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Item',
    icon: 'home',
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};const I=["Default","Icon","Notification","CustomTooltip","Active","Disabled"];export{a as Active,o as CustomTooltip,e as Default,n as Disabled,r as Icon,t as Notification,I as __namedExportsOrder,g as default};
