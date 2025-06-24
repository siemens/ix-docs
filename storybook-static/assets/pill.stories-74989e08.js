import{g as c,m as w}from"./generic-render-0222c656.js";import{x as $}from"./lit-element-f36cbe21.js";import"./sample-cfb362e2.js";const A={title:"Example/Pill",tags:[],render:e=>c("ix-pill",e),argTypes:w("ix-pill",{}),parameters:{}},n={args:{icon:"info",defaultSlot:"Example Text"}},i={args:{icon:"info"}},t={args:{defaultSlot:"Example Text"}},o={args:{icon:"info",defaultSlot:"Example Text"},render:e=>{const r=c("ix-pill",e),l=r.querySelector("ix-pill");return l.style.width="5rem",r}},a={args:{defaultSlot:"Example Text"},render:e=>{const r=c("ix-pill",e),l=r.querySelector("ix-pill");return l.style.width="5rem",r}},s={render:({icon:e})=>$`<ix-pill icon=${e}
      ><div style="display: flex;">
        <ix-icon name="${e}" size="16"></ix-icon></div
    ></ix-pill>`,args:{icon:"info"}};var p,d,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    defaultSlot: 'Example Text'
  }
}`,...(x=(d=n.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var m,u,_;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: 'info'
  }
}`,...(_=(u=i.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var g,f,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Example Text'
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,T,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    defaultSlot: 'Example Text'
  },
  render: args => {
    const container = genericRender('ix-pill', args);
    const ixPill = container.querySelector('ix-pill')!;
    ixPill.style.width = '5rem';
    return container;
  }
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var E,W,I;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Example Text'
  },
  render: args => {
    const container = genericRender('ix-pill', args);
    const ixPill = container.querySelector('ix-pill')!;
    ixPill.style.width = '5rem';
    return container;
  }
}`,...(I=(W=a.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var P,q,v;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: ({
    icon
  }) => {
    return html\`<ix-pill icon=\${icon}
      ><div style="display: flex;">
        <ix-icon name="\${icon}" size="16"></ix-icon></div
    ></ix-pill>\`;
  },
  args: {
    icon: 'info'
  }
}`,...(v=(q=s.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};const O=["With_Icon_and_Text","With_Icon_only","With_Text_only","With_Icon_and_Text_Ellipsis","With_Text_only_Ellipsis","With_Icon_and_Element"];export{s as With_Icon_and_Element,n as With_Icon_and_Text,o as With_Icon_and_Text_Ellipsis,i as With_Icon_only,t as With_Text_only,a as With_Text_only_Ellipsis,O as __namedExportsOrder,A as default};
