import{m as O,g as V}from"./generic-render-0222c656.js";import{a as W}from"./chunk-D5ZWXAHU-ba67761f.js";import"./sample-cfb362e2.js";import"./v4-4a60fe23.js";const E=e=>{const a=V("ix-toggle",e),r=a.querySelector("ix-toggle");return r.addEventListener("checkedChange",W("checkedChange")),r.classList.remove("ix-invalid","ix-valid","ix-warning","ix-info"),r.classList.add(e.validation),a},A={title:"Example/Toggle",tags:[],render:e=>E(e),argTypes:O("ix-toggle",{validation:{control:{type:"select"},options:["ix-invalid","ix-valid","ix-warning","ix-info"]}}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},s={args:{disabled:!1}},n={args:{checked:!0,disabled:!1,validation:"ix-valid"}},i={args:{checked:!0,disabled:!1,validation:"ix-invalid"}},t={args:{checked:!0,disabled:!1,validation:"ix-info"}},o={args:{checked:!0,disabled:!1,validation:"ix-warning"}},d={args:{disabled:!1,"text-on":"Lorem ipsum dolor sit amet consectetur adipisicing elit",checked:!0},render:e=>{const a=E(e),r=a.querySelector("ix-toggle");return r.style.width="10rem",r.style.height="3rem",a}},c={args:{required:!0}};var l,g,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    disabled: false
  }
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,p,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    validation: 'ix-valid'
  }
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var f,v,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    validation: 'ix-invalid'
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var k,b,w;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    validation: 'ix-info'
  }
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,S,q;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    validation: 'ix-warning'
  }
}`,...(q=(S=o.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var T,I,L;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: false,
    'text-on': 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    checked: true
  },
  render: args => {
    const container = toggleRender(args);
    const ixToggle = container.querySelector('ix-toggle')!;
    ixToggle.style.width = '10rem';
    ixToggle.style.height = '3rem';
    return container;
  }
}`,...(L=(I=d.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var R,C,D;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const B=["Default","Valid","Invalid","Info","Warning","Overflow","Required"];export{s as Default,t as Info,i as Invalid,d as Overflow,c as Required,n as Valid,o as Warning,B as __namedExportsOrder,A as default};
