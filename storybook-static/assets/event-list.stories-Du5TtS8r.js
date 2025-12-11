import{m as i,g as c}from"./generic-render-q9JIJh1N.js";import"./sample-CrjnuCO3.js";const d={title:"Example/EventList",tags:[],render:n=>{const o=c("ix-event-list",n),m=o.querySelector("ix-event-list"),a=document.createElement("ix-event-list-item");return a.itemColor="--theme-color-alarm",a.textContent="Event List Item 1",m.appendChild(a),o},argTypes:i("ix-event-list",{}),parameters:{}},e={args:{}},t={args:{itemHeight:"S"}},r={args:{itemHeight:"L"}},s={args:{itemHeight:400}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const u=["Default","ItemHeightS","ItemHeightL","CustomItemHeight"];export{s as CustomItemHeight,e as Default,r as ItemHeightL,t as ItemHeightS,u as __namedExportsOrder,d as default};
