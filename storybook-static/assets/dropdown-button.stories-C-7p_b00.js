import{x as P}from"./iframe-CLegjRT6.js";import{g as D,m as h}from"./generic-render-D6eVCH02.js";import"./preload-helper-PPVm8Dsz.js";import"./sample-QwvD4foy.js";const N={title:"Example/DropdownButton",tags:[],render:w=>D("ix-dropdown-button",w),argTypes:h("ix-dropdown-button"),args:{icon:"eye"}},r={args:{label:"Button",variant:"primary"}},e={render:()=>P`
    <ix-dropdown-button
      label="Roving tabindex"
      navigation-mode="roving-tabindex"
    >
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      <button data-ix-roving-item>Native button</button>
    </ix-dropdown-button>
  `},a={args:{label:"Button",variant:"primary"},render:w=>D("ix-dropdown-button",w,[],x=>(["Dropdown Item 1","Dropdown Item 2","Dropdown Item 3"].forEach(T=>{const B=document.createElement("ix-dropdown-item");B.label=T,x.appendChild(B)}),x))},n={args:{label:"Button",variant:"secondary"}},o={args:{label:"Button",variant:"tertiary"}},t={args:{label:"Button",variant:"subtle-primary"}},s={args:{label:"Button",variant:"subtle-secondary"}},c={args:{label:"Button",variant:"subtle-tertiary"}},i={args:{label:"Button",variant:"danger-primary"}},d={args:{label:"Button",variant:"danger-secondary"}},m={args:{label:"Button",variant:"danger-tertiary"}},p={args:{icon:"eye",variant:"primary"}},u={args:{icon:"eye",variant:"secondary"}},l={args:{icon:"eye",variant:"tertiary"}},g={args:{icon:"eye",variant:"subtle-primary"}},y={args:{icon:"eye",variant:"subtle-secondary"}},b={args:{icon:"eye",variant:"subtle-tertiary"}},v={args:{icon:"eye",variant:"danger-primary"}},S={args:{icon:"eye",variant:"danger-secondary"}},I={args:{icon:"eye",variant:"danger-tertiary"}},W=["Primary","RovingTabindex","WithDropdownItems","Secondary","Tertiary","SubtlePrimary","SubtleSecondary","SubtleTertiary","DangerPrimary","DangerSecondary","DangerTertiary","PrimaryIcon","SecondaryIcon","TertiaryIcon","SubtlePrimaryIcon","SubtleSecondaryIcon","SubtleTertiaryIcon","DangerPrimaryIcon","DangerSecondaryIcon","DangerTertiaryIcon"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ix-dropdown-button
      label="Roving tabindex"
      navigation-mode="roving-tabindex"
    >
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      <button data-ix-roving-item>Native button</button>
    </ix-dropdown-button>
  \`
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'primary'
  },
  render: args => genericRender('ix-dropdown-button', args, [], dropdownButton => {
    ['Dropdown Item 1', 'Dropdown Item 2', 'Dropdown Item 3'].forEach(label => {
      const dropdownItem = document.createElement('ix-dropdown-item');
      dropdownItem.label = label;
      dropdownButton.appendChild(dropdownItem);
    });
    return dropdownButton;
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'tertiary'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'subtle-primary'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'subtle-secondary'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'subtle-tertiary'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'danger-primary'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'danger-secondary'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    variant: 'danger-tertiary'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'eye',
    variant: 'primary'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'eye',
    variant: 'secondary'
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'eye',
    variant: 'tertiary'
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'eye',
    variant: 'subtle-primary'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'eye',
    variant: 'subtle-secondary'
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'eye',
    variant: 'subtle-tertiary'
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'eye',
    variant: 'danger-primary'
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'eye',
    variant: 'danger-secondary'
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'eye',
    variant: 'danger-tertiary'
  }
}`,...I.parameters?.docs?.source}}};export{i as DangerPrimary,v as DangerPrimaryIcon,d as DangerSecondary,S as DangerSecondaryIcon,m as DangerTertiary,I as DangerTertiaryIcon,r as Primary,p as PrimaryIcon,e as RovingTabindex,n as Secondary,u as SecondaryIcon,t as SubtlePrimary,g as SubtlePrimaryIcon,s as SubtleSecondary,y as SubtleSecondaryIcon,c as SubtleTertiary,b as SubtleTertiaryIcon,o as Tertiary,l as TertiaryIcon,a as WithDropdownItems,W as __namedExportsOrder,N as default};
