import{m as b,g as S}from"./generic-render-q9JIJh1N.js";import"./sample-CrjnuCO3.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Example/Button",tags:[],render:g=>S("ix-button",g),argTypes:b("ix-button",{styles:{control:{type:"object"}}}),args:{},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},r={args:{defaultSlot:"Button",variant:"primary"}},t={args:{defaultSlot:"Button",variant:"secondary"}},a={args:{defaultSlot:"Button",variant:"tertiary"}},e={args:{defaultSlot:"Button",variant:"subtle-primary"}},n={args:{defaultSlot:"Button",variant:"subtle-secondary"}},o={args:{defaultSlot:"Button",variant:"subtle-tertiary"}},s={args:{defaultSlot:"Button",variant:"danger-primary"}},u={args:{defaultSlot:"Button",variant:"danger-secondary"}},c={args:{defaultSlot:"Button",variant:"danger-tertiary"}},i={args:{defaultSlot:"Button",loading:!0}},d={args:{defaultSlot:"Button",disabled:!1,icon:"eye",loading:!1,variant:"secondary"}},m={args:{defaultSlot:"Button",iconRight:"eye",variant:"primary"}},l={args:{defaultSlot:"Button",iconRight:"eye",variant:"primary",styles:{width:"400px"}}},p={render:g=>{const f=S("ix-button",g),y=document.createElement("form");return y.appendChild(f),y.addEventListener("submit",B=>{B.preventDefault(),v("Form submitted")()}),y},args:{defaultSlot:"Button",type:"submit"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    variant: 'secondary'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    variant: 'tertiary'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    variant: 'subtle-primary'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    variant: 'subtle-secondary'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    variant: 'subtle-tertiary'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    variant: 'danger-primary'
  }
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    variant: 'danger-secondary'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    variant: 'danger-tertiary'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    loading: true
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    disabled: false,
    icon: 'eye',
    loading: false,
    variant: 'secondary'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    iconRight: 'eye',
    variant: 'primary'
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Button',
    iconRight: 'eye',
    variant: 'primary',
    styles: {
      width: '400px'
    }
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const x=["Primary","Secondary","Tertiary","SubtlePrimary","SubtleSecondary","SubtleTertiary","DangerPrimary","DangerSecondary","DangerTertiary","Loading","SecondaryWithIcon","ButtonIconRight","ButtonCustomWidth","TypeSubmit"];export{l as ButtonCustomWidth,m as ButtonIconRight,s as DangerPrimary,u as DangerSecondary,c as DangerTertiary,i as Loading,r as Primary,t as Secondary,d as SecondaryWithIcon,e as SubtlePrimary,n as SubtleSecondary,o as SubtleTertiary,a as Tertiary,p as TypeSubmit,x as __namedExportsOrder,D as default};
