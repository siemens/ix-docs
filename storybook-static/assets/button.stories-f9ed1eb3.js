import{g as S,m as v}from"./generic-render-0222c656.js";import{a as x}from"./chunk-D5ZWXAHU-ba67761f.js";import"./sample-cfb362e2.js";import"./v4-4a60fe23.js";const C={title:"Example/Button",tags:[],render:a=>S("ix-button",a),argTypes:v("ix-button",{variant:{options:["primary","secondary"],control:{type:"select"}}}),args:{},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},t={args:{defaultSlot:"Button"}},e={args:{defaultSlot:"Button",loading:!0,ghost:!1}},r={args:{defaultSlot:"Button",disabled:!1,ghost:!1,icon:"eye",loading:!1,outline:!0,variant:"primary"}},n={render:a=>{const B=S("ix-button",a),o=document.createElement("form");return o.appendChild(B),o.addEventListener("submit",h=>{h.preventDefault(),x("Form submitted")()}),o},args:{defaultSlot:"Button",type:"submit"}};var s,i,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button'
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,d,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    loading: true,
    ghost: false
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    disabled: false,
    ghost: false,
    icon: 'eye',
    loading: false,
    outline: true,
    variant: 'primary'
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,b,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const button = genericRender('ix-button', args);
    const form = document.createElement('form');
    form.appendChild(button);
    form.addEventListener('submit', e => {
      e.preventDefault();
      action('Form submitted')();
    });
    return form;
  },
  args: {
    defaultSlot: 'Button',
    type: 'submit'
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const D=["Primary","Loading","ButtonOutlineWithIcon","TypeSubmit"];export{r as ButtonOutlineWithIcon,e as Loading,t as Primary,n as TypeSubmit,D as __namedExportsOrder,C as default};
