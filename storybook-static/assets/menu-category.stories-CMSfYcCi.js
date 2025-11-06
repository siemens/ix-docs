import{m as o,g as s}from"./generic-render-Dg1fV67N.js";import"./sample-CrjnuCO3.js";const l={title:"Example/MenuCategory",tags:[],render:n=>{const r=s("ix-menu-category",n,["items"]).querySelector("ix-menu-category");r.ariaLabel="my-category-menu";const m=document.createElement("ix-menu");m.appendChild(r);for(let e=0;e<n.items;e++){const a=document.createElement("ix-menu-item");a.label=`Item ${e+1}`,a.tooltipText=`Tooltip for Item ${e+1}`,r.appendChild(a)}return m},argTypes:o("ix-menu",{items:{control:"number",name:"items*"}}),args:{items:3},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev"}}},t={args:{label:"Menu Category"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu Category'
  }
}`,...t.parameters?.docs?.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,l as default};
