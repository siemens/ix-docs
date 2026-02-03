import{m as i,g as m}from"./generic-render-Ck1ibjH2.js";import"./sample-CrjnuCO3.js";const p={title:"Example/Menu/MenuCategory",tags:[],render:n=>{const s=m("ix-menu-category",n,["items"]).querySelector("ix-menu-category"),c=document.createElement("ix-menu");c.appendChild(s);for(let e=0;e<n.items;e++){const a=document.createElement("ix-menu-item");a.label=`Item ${e+1}`,a.tooltipText=`Tooltip for Item ${e+1}`,s.appendChild(a)}return c},argTypes:i("ix-menu-category",{items:{control:"number",name:"items*"}}),args:{items:3},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev"},a11y:{test:"error"}}},t={args:{label:"Menu Category"}},r={args:{label:"Menu Category",icon:"rocket"}},o={args:{label:"Menu Category",icon:"rocket",notifications:3}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Category'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Category',
    icon: 'rocket'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Category',
    icon: 'rocket',
    notifications: 3
  }
}`,...o.parameters?.docs?.source}}};const d=["Default","WithIcon","WithNotifications"];export{t as Default,r as WithIcon,o as WithNotifications,d as __namedExportsOrder,p as default};
