import{m as v,g as T}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const h={title:"Example/FlipTile",tags:[],render:p=>{const g=T("ix-flip-tile",p,["footerSlot"]),e=g.querySelector("ix-flip-tile"),f=document.createElement("ix-flip-tile-content");f.textContent=" Page 1 ",e.appendChild(f);const x=document.createElement("ix-flip-tile-content");x.textContent=" Page 2 ",e.appendChild(x);const S=document.createElement("ix-flip-tile-content");if(S.textContent=" Page 3 ",e.appendChild(S),p.footerSlot){const u=document.createElement("div");u.slot="footer",u.textContent=p.footerSlot,e.appendChild(u)}return g},argTypes:v("ix-flip-tile",{index:{control:{type:"number",min:0,max:2}}},!0),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=602-8519&m=dev"}}},r={args:{index:1,variant:"filled"}},t={args:{index:1,variant:"filled",footerSlot:"Test"}},n={args:{index:1,variant:"outline",footerSlot:"Test"}},a={args:{index:1,variant:"accent",footerSlot:"Test"}},o={args:{index:1,variant:"neutral",footerSlot:"Test"}},s={args:{index:1,variant:"information",footerSlot:"Test"}},i={args:{index:1,variant:"success",footerSlot:"Test"}},c={args:{index:1,variant:"caution",footerSlot:"Test"}},l={args:{index:1,variant:"warning",footerSlot:"Test"}},d={args:{index:1,variant:"danger",footerSlot:"Test"}},m={args:{index:1,variant:"critical",footerSlot:"Test"}},w=["Default","Footer","Outline","Accent","Neutral","Information","Success","Caution","Warning","Danger","Critical"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'filled'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'filled',
    footerSlot: 'Test'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'outline',
    footerSlot: 'Test'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'accent',
    footerSlot: 'Test'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'neutral',
    footerSlot: 'Test'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'information',
    footerSlot: 'Test'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'success',
    footerSlot: 'Test'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'caution',
    footerSlot: 'Test'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'warning',
    footerSlot: 'Test'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'danger',
    footerSlot: 'Test'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    index: 1,
    variant: 'critical',
    footerSlot: 'Test'
  }
}`,...m.parameters?.docs?.source}}};export{a as Accent,c as Caution,m as Critical,d as Danger,r as Default,t as Footer,s as Information,o as Neutral,n as Outline,i as Success,l as Warning,w as __namedExportsOrder,h as default};
