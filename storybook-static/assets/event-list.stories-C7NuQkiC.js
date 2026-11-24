import{m,g as c}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const d={title:"Example/EventList",tags:[],render:n=>{const o=c("ix-event-list",n),i=o.querySelector("ix-event-list"),a=document.createElement("ix-event-list-item");return a.itemColor="--si-sys-color-background-danger",a.textContent="Event List Item 1",i.appendChild(a),o},argTypes:m("ix-event-list",{}),parameters:{}},e={args:{}},t={args:{itemHeight:"S"}},r={args:{itemHeight:"L"}},s={args:{itemHeight:400}},u=["Default","ItemHeightS","ItemHeightL","CustomItemHeight"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    itemHeight: 'S'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    itemHeight: 'L'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    itemHeight: 400
  }
}`,...s.parameters?.docs?.source}}};export{s as CustomItemHeight,e as Default,r as ItemHeightL,t as ItemHeightS,u as __namedExportsOrder,d as default};
