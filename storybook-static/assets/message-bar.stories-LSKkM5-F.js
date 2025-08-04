import{x as m}from"./iframe-C2tqSE8x.js";const d={title:"Example/MessageBar",tags:[],render:o=>m`
      <div class="message-bar">
        <ix-message-bar type=${o.type} ?dismissible=${o.dismissible}>
          Message text
        </ix-message-bar>
      </div>
    `,argTypes:{type:{control:{type:"select"},options:["alarm","danger","warning","success","info","critical","neutral","primary"]},dismissible:{control:{type:"boolean"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=6396-139860&m=dev"}}},e={args:{type:"info",dismissible:!0}},s={args:{type:"warning",dismissible:!0}},r={args:{type:"danger",dismissible:!0}},a={args:{type:"success",dismissible:!0}},t={args:{type:"critical",dismissible:!0}},i={args:{type:"neutral",dismissible:!0}},n={args:{type:"success",dismissible:!0}},c={args:{type:"alarm",dismissible:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    dismissible: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    dismissible: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'danger',
    dismissible: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    dismissible: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'critical',
    dismissible: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'neutral',
    dismissible: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    dismissible: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'alarm',
    dismissible: true
  }
}`,...c.parameters?.docs?.source}}};const u=["Default","Warning","Danger","Success","Critical","Neutral","Primary","Alarm"];export{c as Alarm,t as Critical,r as Danger,e as Default,i as Neutral,n as Primary,a as Success,s as Warning,u as __namedExportsOrder,d as default};
