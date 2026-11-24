import{x as l}from"./iframe-CLegjRT6.js";import"./preload-helper-PPVm8Dsz.js";const g=["error","danger","warning","caution","success","information","neutral","accent","critical"],f={title:"Example/MessageBar",tags:[],render:m=>l`
      <div class="message-bar">
        <ix-message-bar type=${m.type} ?persistent=${m.persistent}>
          Message text
        </ix-message-bar>
      </div>
    `,argTypes:{type:{control:{type:"select"},options:g},persistent:{control:{type:"boolean"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=103814-17692&m=dev"},a11y:{test:"error"}}},e={args:{type:"information",persistent:!1}},r={args:{type:"error",persistent:!1}},s={args:{type:"danger",persistent:!1}},a={args:{type:"warning",persistent:!1}},t={args:{type:"caution",persistent:!1}},n={args:{type:"success",persistent:!1}},o={args:{type:"information",persistent:!1}},c={args:{type:"neutral",persistent:!1}},p={args:{type:"accent",persistent:!1}},i={args:{type:"critical",persistent:!1}},y=["Default","Error","Danger","Warning","Caution","Success","Information","Neutral","Accent","Critical"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'information',
    persistent: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    persistent: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'danger',
    persistent: false
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    persistent: false
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'caution',
    persistent: false
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    persistent: false
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'information',
    persistent: false
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'neutral',
    persistent: false
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'accent',
    persistent: false
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'critical',
    persistent: false
  }
}`,...i.parameters?.docs?.source}}};export{p as Accent,t as Caution,i as Critical,s as Danger,e as Default,r as Error,o as Information,c as Neutral,n as Success,a as Warning,y as __namedExportsOrder,f as default};
