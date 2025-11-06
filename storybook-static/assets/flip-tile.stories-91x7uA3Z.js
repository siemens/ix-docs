import{m as c,g as d}from"./generic-render-Dg1fV67N.js";import"./sample-CrjnuCO3.js";const f={title:"Example/FlipTile",tags:[],render:o=>{const a=d("ix-flip-tile",o,["footerSlot"]),e=a.querySelector("ix-flip-tile"),i=document.createElement("ix-flip-tile-content");i.textContent=" Page 1 ",e.appendChild(i);const l=document.createElement("ix-flip-tile-content");l.textContent=" Page 2 ",e.appendChild(l);const s=document.createElement("ix-flip-tile-content");if(s.textContent=" Page 3 ",e.appendChild(s),o.footerSlot){const r=document.createElement("div");r.slot="footer",r.textContent=o.footerSlot,e.appendChild(r)}return a},argTypes:c("ix-flip-tile",{index:{control:{type:"number",min:0,max:2}}},!0),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=602-8519&m=dev"}}},t={args:{index:1,variant:"filled"}},n={args:{index:1,variant:"filled",footerSlot:"Test"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'filled'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'filled',
    footerSlot: 'Test'
  }
}`,...n.parameters?.docs?.source}}};const u=["Default","Footer"];export{t as Default,n as Footer,u as __namedExportsOrder,f as default};
