import{m as l,g as m}from"./generic-render-1d688787.js";import{a as p}from"./chunk-D5ZWXAHU-ba67761f.js";import"./sample-cfb362e2.js";import"./v4-4a60fe23.js";const u=r=>{const s=m("ix-radio",r);return s.querySelector("ix-radio").addEventListener("checkedChange",p("checkedChange")),s},y={title:"Example/Radio",tags:[],render:r=>u(r),argTypes:l("ix-radio",{validation:{control:{type:"select"}}}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=42365-150769&p=f&t=eGUQESg89t8bPyiB-0"}}},e={args:{disabled:!1,label:"Radio",required:!0}},a={args:{disabled:!0,label:"Radio"}};var o,t,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Radio',
    required: true
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var d,n,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Radio'
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const h=["Default","Disabled"];export{e as Default,a as Disabled,h as __namedExportsOrder,y as default};
