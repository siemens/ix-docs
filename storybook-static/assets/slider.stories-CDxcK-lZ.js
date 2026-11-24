import{m as i,b as l}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const u={title:"Example/Slider",tags:[],render:s=>{const o=l("ix-slider",s),c=o.querySelector("ix-slider");return c.marker=s.marker,o},argTypes:i("ix-slider",{marker:{control:"object"},validation:{options:["default","info","warning","invalid","valid"],control:{type:"select"}}}),args:{label:"Label",helperText:"Helper text",invalidText:"Invalid text",warningText:"Warning text",infoText:"Info text",validText:"Valid text",min:0,max:100,step:1,value:50,trace:!0,traceReference:0,showTextAsTooltip:!1,disabled:!1,validation:"default"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=50042-20987&m=dev"}}},e={},r={args:{value:25,traceReference:50,trace:!0}},a={args:{marker:[0,25,50,75,100]}},t={args:{value:15,traceReference:50,trace:!0,marker:[0,25,50,75,100]}},n={args:{validation:"invalid",invalidText:"Some error message",value:10,traceReference:50,trace:!0,marker:[0,25,50,75,100]}},p=["Default","Reference","Marker","MarkerWithReference","Invalid"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 25,
    traceReference: 50,
    trace: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    marker: [0, 25, 50, 75, 100]
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 15,
    traceReference: 50,
    trace: true,
    marker: [0, 25, 50, 75, 100]
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    validation: 'invalid',
    invalidText: 'Some error message',
    value: 10,
    traceReference: 50,
    trace: true,
    marker: [0, 25, 50, 75, 100]
  }
}`,...n.parameters?.docs?.source}}};export{e as Default,n as Invalid,a as Marker,t as MarkerWithReference,r as Reference,p as __namedExportsOrder,u as default};
