import{m,g as o}from"./generic-render-CsqnySBY.js";import"./sample-ST_d4yt9.js";const l={title:"Example/TimePicker",tags:[],render:s=>o("ix-time-picker",s),argTypes:m("ix-time-picker",{}),parameters:{}},e={args:{time:"09:30:00",format:"HH:mm:ss",textTime:"Select time",textSelectTime:"Confirm",corners:"rounded",standaloneAppearance:!0}},t={args:{time:"09:30:00 AM",format:"hh:mm:ss a",textTime:"Select time",textSelectTime:"Confirm",corners:"straight",standaloneAppearance:!0,minuteInterval:1}},r={args:{time:"09:30:00.100",format:"hh:mm:ss.SSS",textTime:"Select time",textSelectTime:"Confirm",corners:"straight",standaloneAppearance:!0,minuteInterval:1}},n={args:{time:"09:30:00.100",format:"hh:mm:ss.SSS",textTime:"Select time",textSelectTime:"Confirm",corners:"straight",standaloneAppearance:!0,minuteInterval:15,hourInterval:1,millisecondInterval:50,secondInterval:30}},a={args:{time:"09",format:"HH",textTime:"Select time",textSelectTime:"Confirm",corners:"rounded",standaloneAppearance:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    time: '09:30:00',
    format: 'HH:mm:ss',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'rounded',
    standaloneAppearance: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    time: '09:30:00 AM',
    format: 'hh:mm:ss a',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'straight',
    standaloneAppearance: true,
    minuteInterval: 1
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    time: '09:30:00.100',
    format: 'hh:mm:ss.SSS',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'straight',
    standaloneAppearance: true,
    minuteInterval: 1
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    time: '09:30:00.100',
    format: 'hh:mm:ss.SSS',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'straight',
    standaloneAppearance: true,
    minuteInterval: 15,
    hourInterval: 1,
    millisecondInterval: 50,
    secondInterval: 30
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    time: '09',
    format: 'HH',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'rounded',
    standaloneAppearance: true
  }
}`,...a.parameters?.docs?.source}}};const p=["Default","AMPM","Milliseconds","Intervals","HourOnly"];export{t as AMPM,e as Default,a as HourOnly,n as Intervals,r as Milliseconds,p as __namedExportsOrder,l as default};
