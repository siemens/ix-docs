import{x as i}from"./iframe-XqzYRgP7.js";const l={title:"Example/MessageBar",tags:[],render:p=>i`
      <div class="message-bar">
        <ix-message-bar type=${p.type} ?persistent=${p.persistent}>
          Message text
        </ix-message-bar>
      </div>
    `,argTypes:{type:{control:{type:"select"},options:["alarm","danger","warning","success","info","critical","neutral","primary"]},persistent:{control:{type:"boolean"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=6396-139860&m=dev"}}},e={args:{type:"info",persistent:!1}},s={args:{type:"warning",persistent:!1}},r={args:{type:"danger",persistent:!1}},a={args:{type:"success",persistent:!1}},t={args:{type:"critical",persistent:!1}},n={args:{type:"neutral",persistent:!1}},c={args:{type:"success",persistent:!1}},o={args:{type:"alarm",persistent:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    persistent: false
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    persistent: false
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'danger',
    persistent: false
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    persistent: false
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'critical',
    persistent: false
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'neutral',
    persistent: false
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    persistent: false
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'alarm',
    persistent: false
  }
}`,...o.parameters?.docs?.source}}};const g=["Default","Warning","Danger","Success","Critical","Neutral","Primary","Alarm"];export{o as Alarm,t as Critical,r as Danger,e as Default,n as Neutral,c as Primary,a as Success,s as Warning,g as __namedExportsOrder,l as default};
