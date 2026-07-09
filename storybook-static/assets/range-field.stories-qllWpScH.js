import{m as x,g as y}from"./generic-render-C55c-khh.js";import"./sample-4XlXCCij.js";function r(e,g){const{startLabel:p,endLabel:u,startValue:m,endValue:c,...V}=e,d=y("ix-range-field",V),i=d.querySelector("ix-range-field");if(!i)return d;const o=document.createElement(g);o.label=p,o.value=m;const l=document.createElement(g);return l.label=u,l.value=c,i.appendChild(o),i.appendChild(l),d}const F={title:"Example/RangeField",tags:[],render:e=>r(e,"ix-time-input"),argTypes:x("ix-range-field",{startLabel:{control:{type:"text"}},endLabel:{control:{type:"text"}},startValue:{control:{type:"text"}},endValue:{control:{type:"text"}},type:{control:{type:"select"},options:["time-range","date-range","datetime-range"]}}),parameters:{}},a={render:e=>r(e,"ix-time-input"),args:{type:"time-range",startLabel:"From",endLabel:"To",startValue:"09:00:00",endValue:"17:00:00"}},t={render:e=>r(e,"ix-date-input"),args:{type:"date-range",startValue:"2026/03/16",endValue:"2026/03/23"}},n={render:e=>r(e,"ix-datetime-input"),args:{type:"datetime-range",startValue:"2026/03/16 09:00:00",endValue:"2026/03/23 16:00:00"}},s={render:e=>r(e,"ix-datetime-input"),args:{type:"datetime-range",startValue:"2026/03/16 09:00:00",endValue:"2026/03/23 16:00:00",hideArrow:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => rangeFieldRender(args, 'ix-time-input'),
  args: {
    type: 'time-range',
    startLabel: 'From',
    endLabel: 'To',
    startValue: '09:00:00',
    endValue: '17:00:00'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => rangeFieldRender(args, 'ix-date-input'),
  args: {
    type: 'date-range',
    startValue: '2026/03/16',
    endValue: '2026/03/23'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => rangeFieldRender(args, 'ix-datetime-input'),
  args: {
    type: 'datetime-range',
    startValue: '2026/03/16 09:00:00',
    endValue: '2026/03/23 16:00:00'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => rangeFieldRender(args, 'ix-datetime-input'),
  args: {
    type: 'datetime-range',
    startValue: '2026/03/16 09:00:00',
    endValue: '2026/03/23 16:00:00',
    hideArrow: true
  }
}`,...s.parameters?.docs?.source}}};const L=["TimeRange","DateRange","DateTimeRange","HideArrow"];export{t as DateRange,n as DateTimeRange,s as HideArrow,a as TimeRange,L as __namedExportsOrder,F as default};
