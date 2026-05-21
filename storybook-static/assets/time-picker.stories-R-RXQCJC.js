import{m as o,g as d}from"./generic-render-Dxw1XMhM.js";import"./sample-4XlXCCij.js";const l={title:"Example/TimePicker",tags:[],render:t=>d("ix-time-picker",t),argTypes:o("ix-time-picker",{}),parameters:{}},e={args:{time:"09:30:00",format:"HH:mm:ss",corners:"rounded",embedded:!1}},r={args:{time:"09:30:00 AM",format:"hh:mm:ss a",corners:"straight",embedded:!1,minuteInterval:1}},s={args:{time:"09:30:00.100",format:"hh:mm:ss.SSS",corners:"straight",embedded:!1,minuteInterval:1}},a={args:{time:"09:30:00.100",format:"hh:mm:ss.SSS",corners:"straight",embedded:!1,minuteInterval:15,hourInterval:1,millisecondInterval:50,secondInterval:30}},n={args:{time:"09",format:"HH",corners:"rounded",embedded:!1}},m={args:{time:"12:00:00",format:"HH:mm:ss",corners:"rounded",embedded:!1,minTime:"08:00:00",maxTime:"17:30:00"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    time: '12:00:00',
    format: 'HH:mm:ss',
    corners: 'rounded',
    embedded: false,
    minTime: '08:00:00',
    maxTime: '17:30:00'
  }
}`,...m.parameters?.docs?.source}}};const u=["Default","AMPM","Milliseconds","Intervals","HourOnly","MinMaxTime"];export{r as AMPM,e as Default,n as HourOnly,a as Intervals,s as Milliseconds,m as MinMaxTime,u as __namedExportsOrder,l as default};
