import{m,g as o}from"./generic-render-B6oDlj6b.js";import"./sample-CrjnuCO3.js";const i={title:"Example/TimePicker",tags:[],render:t=>o("ix-time-picker",t),argTypes:m("ix-time-picker",{}),parameters:{}},e={args:{time:"09:30:00",format:"HH:mm:ss",corners:"rounded",embedded:!1}},r={args:{time:"09:30:00 AM",format:"hh:mm:ss a",corners:"straight",embedded:!1,minuteInterval:1}},s={args:{time:"09:30:00.100",format:"hh:mm:ss.SSS",corners:"straight",embedded:!1,minuteInterval:1}},a={args:{time:"09:30:00.100",format:"hh:mm:ss.SSS",corners:"straight",embedded:!1,minuteInterval:15,hourInterval:1,millisecondInterval:50,secondInterval:30}},n={args:{time:"09",format:"HH",corners:"rounded",embedded:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    time: '09:30:00',
    format: 'HH:mm:ss',
    corners: 'rounded',
    embedded: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    time: '09:30:00 AM',
    format: 'hh:mm:ss a',
    corners: 'straight',
    embedded: false,
    minuteInterval: 1
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    time: '09:30:00.100',
    format: 'hh:mm:ss.SSS',
    corners: 'straight',
    embedded: false,
    minuteInterval: 1
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    time: '09:30:00.100',
    format: 'hh:mm:ss.SSS',
    corners: 'straight',
    embedded: false,
    minuteInterval: 15,
    hourInterval: 1,
    millisecondInterval: 50,
    secondInterval: 30
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    time: '09',
    format: 'HH',
    corners: 'rounded',
    embedded: false
  }
}`,...n.parameters?.docs?.source}}};const l=["Default","AMPM","Milliseconds","Intervals","HourOnly"];export{r as AMPM,e as Default,n as HourOnly,a as Intervals,s as Milliseconds,l as __namedExportsOrder,i as default};
