import{m as S,g as p}from"./generic-render-Ck1ibjH2.js";import"./sample-CrjnuCO3.js";const v={title:"Example/ToggleButton",tags:[],render:d=>p("ix-toggle-button",d),argTypes:S("ix-toggle-button",{styles:{control:{type:"object"}}}),args:{},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},t={args:{defaultSlot:"Toggle Button",variant:"primary"}},r={args:{defaultSlot:"Toggle Button",variant:"secondary",pressed:!0}},a={args:{defaultSlot:"Toggle Button",variant:"tertiary"}},o={args:{defaultSlot:"Toggle Button",variant:"subtle-primary"}},n={args:{defaultSlot:"Toggle Button",variant:"subtle-secondary"}},s={args:{defaultSlot:"Toggle Button",variant:"subtle-tertiary"}},l={args:{defaultSlot:"Toggle Button",variant:"primary",disabled:!0}},u={args:{defaultSlot:"Toggle Button",variant:"primary",loading:!0}},g={args:{defaultSlot:"Toggle Button",variant:"primary",disabled:!0,loading:!0}},i={args:{defaultSlot:"Toggle Me",variant:"primary",pressed:!0},render:d=>{const c=p("ix-toggle-button",d),m=c.querySelector("ix-toggle-button"),e=document.createElement("p");return e.textContent="Lorem ipsum text",e.style.textDecoration="underline",c.appendChild(e),m.addEventListener("pressedChange",y=>{m.pressed=y.detail,e.style.textDecoration=m.pressed?"underline":"none"}),c}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Toggle Button',
    variant: 'primary'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Toggle Button',
    variant: 'secondary',
    pressed: true
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Toggle Button',
    variant: 'tertiary'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Toggle Button',
    variant: 'subtle-primary'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Toggle Button',
    variant: 'subtle-secondary'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Toggle Button',
    variant: 'subtle-tertiary'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Toggle Button',
    variant: 'primary',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Toggle Button',
    variant: 'primary',
    loading: true
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Toggle Button',
    variant: 'primary',
    disabled: true,
    loading: true
  }
}`,...g.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Toggle Me',
    variant: 'primary',
    pressed: true
  },
  render: args => {
    const container = genericRender('ix-toggle-button', args);
    const toggleButton = container.querySelector('ix-toggle-button')!;
    const loremIpsumText = document.createElement('p');
    loremIpsumText.textContent = 'Lorem ipsum text';
    loremIpsumText.style.textDecoration = 'underline';
    container.appendChild(loremIpsumText);
    toggleButton.addEventListener('pressedChange', (event: CustomEvent<boolean>) => {
      toggleButton.pressed = event.detail;
      loremIpsumText.style.textDecoration = toggleButton.pressed ? 'underline' : 'none';
    });
    return container;
  }
}`,...i.parameters?.docs?.source}}};const B=["Primary","Secondary","Tertiary","SubtlePrimary","SubtleSecondary","SubtleTertiary","Disabled","Loading","DisabledLoading","ToggleBehavior"];export{l as Disabled,g as DisabledLoading,u as Loading,t as Primary,r as Secondary,o as SubtlePrimary,n as SubtleSecondary,s as SubtleTertiary,a as Tertiary,i as ToggleBehavior,B as __namedExportsOrder,v as default};
