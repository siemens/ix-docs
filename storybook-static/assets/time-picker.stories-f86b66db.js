import{g as v,m as I}from"./generic-render-1d688787.js";import"./sample-cfb362e2.js";const M={title:"Example/Time Picker",tags:[],render:A=>v("ix-time-picker",A),argTypes:I("ix-time-picker",{}),parameters:{}},e={args:{time:"09:30:00",format:"HH:mm:ss",textTime:"Select time",textSelectTime:"Confirm",corners:"rounded",standaloneAppearance:!0}},t={args:{time:"09:30:00 AM",format:"hh:mm:ss a",textTime:"Select time",textSelectTime:"Confirm",corners:"straight",standaloneAppearance:!0,minuteInterval:1}},r={args:{time:"09:30:00.100",format:"hh:mm:ss.SSS",textTime:"Select time",textSelectTime:"Confirm",corners:"straight",standaloneAppearance:!0,minuteInterval:1}},n={args:{time:"09:30:00.100",format:"hh:mm:ss.SSS",textTime:"Select time",textSelectTime:"Confirm",corners:"straight",standaloneAppearance:!0,minuteInterval:15,hourInterval:1,millisecondInterval:50,secondInterval:30}},a={args:{time:"09",format:"HH",textTime:"Select time",textSelectTime:"Confirm",corners:"rounded",standaloneAppearance:!0}};var s,m,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    time: '09:30:00',
    format: 'HH:mm:ss',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'rounded',
    standaloneAppearance: true
  }
}`,...(o=(m=e.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    time: '09:30:00 AM',
    format: 'hh:mm:ss a',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'straight',
    standaloneAppearance: true,
    minuteInterval: 1
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    time: '09:30:00.100',
    format: 'hh:mm:ss.SSS',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'straight',
    standaloneAppearance: true,
    minuteInterval: 1
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var S,g,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,T,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    time: '09',
    format: 'HH',
    textTime: 'Select time',
    textSelectTime: 'Confirm',
    corners: 'rounded',
    standaloneAppearance: true
  }
}`,...(h=(T=a.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const k=["Default","AMPM","Milliseconds","Intervals","HourOnly"];export{t as AMPM,e as Default,a as HourOnly,n as Intervals,r as Milliseconds,k as __namedExportsOrder,M as default};
