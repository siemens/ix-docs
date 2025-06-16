import{m as E,g as G}from"./generic-render-60971499.js";import{a as i}from"./chunk-D5ZWXAHU-ba67761f.js";import"./sample-cfb362e2.js";import"./v4-4a60fe23.js";const R=e=>{const r=G("ix-checkbox",e);return r.querySelector("ix-checkbox").addEventListener("checkedChange",i("checkedChange")),r},y=e=>{const r=G("ix-checkbox-group",e),a=r.querySelector("ix-checkbox-group");a.setAttribute("label",e.label||"Group");const o=document.createElement("ix-checkbox");o.setAttribute("label","Checkbox 1"),o.setAttribute("name","checkbox1"),o.addEventListener("checkedChange",i("checkbox1Change"));const c=document.createElement("ix-checkbox");return c.setAttribute("label","Checkbox 2"),c.setAttribute("name","checkbox2"),c.addEventListener("checkedChange",i("checkbox2Change")),a.appendChild(o),a.appendChild(c),r.appendChild(a),r},w={title:"Example/Checkbox",tags:[],render:e=>R(e),argTypes:E("ix-checkbox",{validation:{control:{type:"select"}}}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=42365-150769&p=f&t=eGUQESg89t8bPyiB-0"}}},t={args:{disabled:!1,label:"Checkbox"}},s={args:{disabled:!0,label:"Checkbox"}},n={render:e=>y(e),args:{label:"Checkbox Group"}},d={args:{label:"Required",required:!0}};var l,b,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Checkbox'
  }
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var p,h,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Checkbox'
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var m,k,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => CheckboxGroupRender(args),
  args: {
    label: 'Checkbox Group'
  }
}`,...(g=(k=n.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var C,f,q;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    required: true
  }
}`,...(q=(f=d.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};const L=["Default","Disabled","Group","Required"];export{t as Default,s as Disabled,n as Group,d as Required,L as __namedExportsOrder,w as default};
