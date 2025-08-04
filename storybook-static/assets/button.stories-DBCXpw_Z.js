import{m as d,g as s}from"./generic-render-CsqnySBY.js";import"./sample-ST_d4yt9.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,p={title:"Example/Button",tags:[],render:a=>s("ix-button",a),argTypes:d("ix-button",{variant:{options:["primary","secondary"],control:{type:"select"}}}),args:{},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},t={args:{defaultSlot:"Button"}},e={args:{defaultSlot:"Button",loading:!0,ghost:!1}},r={args:{defaultSlot:"Button",disabled:!1,ghost:!1,icon:"eye",loading:!1,outline:!0,variant:"primary"}},n={render:a=>{const u=s("ix-button",a),o=document.createElement("form");return o.appendChild(u),o.addEventListener("submit",i=>{i.preventDefault(),m("Form submitted")()}),o},args:{defaultSlot:"Button",type:"submit"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    loading: true,
    ghost: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    disabled: false,
    ghost: false,
    icon: 'eye',
    loading: false,
    outline: true,
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const g=["Primary","Loading","ButtonOutlineWithIcon","TypeSubmit"];export{r as ButtonOutlineWithIcon,e as Loading,t as Primary,n as TypeSubmit,g as __namedExportsOrder,p as default};
