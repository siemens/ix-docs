import{g as p,m as q}from"./generic-render-1d688787.js";import{x as $}from"./lit-element-f36cbe21.js";import"./sample-cfb362e2.js";const A={title:"Example/Chip",tags:[],render:e=>p("ix-chip",e),argTypes:q("ix-chip",{previewWidth:{control:{type:"text"}}}),parameters:{}},n={args:{icon:"info",defaultSlot:"Example Text"}},t={args:{icon:"info"}},i={args:{defaultSlot:"Example Text"}},o={args:{icon:"info",defaultSlot:"Example Text"},render:e=>{const r=p("ix-chip",e),c=r.querySelector("ix-chip");return c.style.width="5rem",r}},a={args:{defaultSlot:"Example Text"},render:e=>{const r=p("ix-chip",e),c=r.querySelector("ix-chip");return c.style.width="5rem",r}},s={render:({icon:e})=>$`<ix-chip icon=${e}
      ><div style="display: flex;">
        <ix-icon name="${e}" size="16"></ix-icon></div
    ></ix-chip>`,args:{icon:"info"}};var l,d,x;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    defaultSlot: 'Example Text'
  }
}`,...(x=(d=n.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var m,h,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: 'info'
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var _,g,f;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Example Text'
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,S,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    defaultSlot: 'Example Text'
  },
  render: args => {
    const container = genericRender('ix-chip', args);
    const ixChip = container.querySelector('ix-chip')!;
    ixChip.style.width = '5rem';
    return container;
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var E,W,I;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Example Text'
  },
  render: args => {
    const container = genericRender('ix-chip', args);
    const ixChip = container.querySelector('ix-chip')!;
    ixChip.style.width = '5rem';
    return container;
  }
}`,...(I=(W=a.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var C,v,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: ({
    icon
  }) => {
    return html\`<ix-chip icon=\${icon}
      ><div style="display: flex;">
        <ix-icon name="\${icon}" size="16"></ix-icon></div
    ></ix-chip>\`;
  },
  args: {
    icon: 'info'
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const O=["With_Icon_and_Text","With_Icon_only","With_Text_only","With_Icon_and_Text_Ellipsis","With_Text_only_Ellipsis","With_Icon_and_Element"];export{s as With_Icon_and_Element,n as With_Icon_and_Text,o as With_Icon_and_Text_Ellipsis,t as With_Icon_only,i as With_Text_only,a as With_Text_only_Ellipsis,O as __namedExportsOrder,A as default};
