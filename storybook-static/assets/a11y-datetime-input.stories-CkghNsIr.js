import{m as l,g as m}from"./generic-render-C55c-khh.js";import{x as p}from"./iframe-LoKmnSQH.js";import"./sample-4XlXCCij.js";import"./preload-helper-PPVm8Dsz.js";const D={title:"Example/DateTimeInput/Accessibility",tags:[],render:d=>m("ix-datetime-input",d),argTypes:l("ix-datetime-input",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"},a11y:{test:"error"}}},e={args:{label:"Date and time",value:"2026/02/08 00:00:00"}},a={args:{label:"Select date and time",value:"2026/02/08 12:30:00"}},t={args:{label:"Date and time",value:"2026/02/08 00:00:00",disabled:!0}},r={args:{label:"Date and time",value:"2026/02/08 00:00:00",readonly:!0}},s={args:{label:"Required field",value:"",required:!0}},i={args:{label:"Event date",value:"2026/02/08 00:00:00",helperText:"Select the date and time for the event"}},n={args:{label:"Date and time",value:"2026/06/15 10:00:00",minDate:"2026/01/01",maxDate:"2026/12/31"}},o={render:()=>p`<ix-datetime-input
      value="2026/02/08 00:00:00"
      label="Appointment"
      aria-label="Select appointment date and time"
    ></ix-datetime-input>`};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date and time',
    value: '2026/02/08 00:00:00'
  }
}`,...e.parameters?.docs?.source},description:{story:"Default datetime input with value",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select date and time',
    value: '2026/02/08 12:30:00'
  }
}`,...a.parameters?.docs?.source},description:{story:"Datetime input with label",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date and time',
    value: '2026/02/08 00:00:00',
    disabled: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Disabled datetime input",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date and time',
    value: '2026/02/08 00:00:00',
    readonly: true
  }
}`,...r.parameters?.docs?.source},description:{story:"Readonly datetime input",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    value: '',
    required: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Required datetime input",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event date',
    value: '2026/02/08 00:00:00',
    helperText: 'Select the date and time for the event'
  }
}`,...i.parameters?.docs?.source},description:{story:"Datetime input with helper text",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date and time',
    value: '2026/06/15 10:00:00',
    minDate: '2026/01/01',
    maxDate: '2026/12/31'
  }
}`,...n.parameters?.docs?.source},description:{story:"Datetime input with min/max date constraints",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-datetime-input
      value="2026/02/08 00:00:00"
      label="Appointment"
      aria-label="Select appointment date and time"
    ></ix-datetime-input>\`;
  }
}`,...o.parameters?.docs?.source},description:{story:"Datetime input with aria-label",...o.parameters?.docs?.description}}};const h=["Default","WithLabel","DisabledState","ReadonlyState","RequiredState","WithHelperText","WithMinMaxDate","WithAriaLabel"];export{e as Default,t as DisabledState,r as ReadonlyState,s as RequiredState,o as WithAriaLabel,i as WithHelperText,a as WithLabel,n as WithMinMaxDate,h as __namedExportsOrder,D as default};
