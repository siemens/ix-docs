import{m as c,g as l}from"./generic-render-C55c-khh.js";import{x as s}from"./iframe-LoKmnSQH.js";import"./sample-4XlXCCij.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Example/Button/Accessibility",tags:[],render:d=>l("ix-button",d),argTypes:c("ix-button",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"},a11y:{test:"error"}}},e={args:{defaultSlot:"Add Device",icon:"add-circle",variant:"primary"}},r={render:()=>s`<ix-button
      icon="trash"
      aria-label="Delete item"
      variant="danger-primary"
    ></ix-button>`},t={args:{defaultSlot:"Disabled Button",disabled:!0,variant:"primary"}},a={args:{defaultSlot:"Loading...",loading:!0,variant:"primary"}},n={args:{defaultSlot:"External Link",href:"https://ix.siemens.io",target:"_blank",rel:"noopener noreferrer",icon:"open-external",variant:"secondary"}},o={render:()=>s`
      <div>
        <ix-button aria-describedby="delete-desc" variant="danger-primary">
          Delete Account
        </ix-button>
        <span id="delete-desc" hidden>
          This will permanently delete your account and all associated data.
          This action cannot be undone.
        </span>
      </div>
    `},i={args:{defaultSlot:"Navigate",icon:"chevron-left",iconRight:"chevron-right",variant:"secondary"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Add Device',
    icon: 'add-circle',
    variant: 'primary'
  }
}`,...e.parameters?.docs?.source},description:{story:"Button with icon and text",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-button
      icon="trash"
      aria-label="Delete item"
      variant="danger-primary"
    ></ix-button>\`;
  }
}`,...r.parameters?.docs?.source},description:{story:"Icon-only button with aria-label",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Disabled Button',
    disabled: true,
    variant: 'primary'
  }
}`,...t.parameters?.docs?.source},description:{story:"Disabled button",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Loading...',
    loading: true,
    variant: 'primary'
  }
}`,...a.parameters?.docs?.source},description:{story:"Loading button",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'External Link',
    href: 'https://ix.siemens.io',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: 'open-external',
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source},description:{story:"Button as link with security attributes",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div>
        <ix-button aria-describedby="delete-desc" variant="danger-primary">
          Delete Account
        </ix-button>
        <span id="delete-desc" hidden>
          This will permanently delete your account and all associated data.
          This action cannot be undone.
        </span>
      </div>
    \`;
  }
}`,...o.parameters?.docs?.source},description:{story:"Button with aria-describedby",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Navigate',
    icon: 'chevron-left',
    iconRight: 'chevron-right',
    variant: 'secondary'
  }
}`,...i.parameters?.docs?.source},description:{story:"Button with icons on left and right",...i.parameters?.docs?.description}}};const y=["IconAndText","IconOnlyWithLabel","DisabledState","LoadingState","LinkButton","WithDescription","MultipleIconPositions"];export{t as DisabledState,e as IconAndText,r as IconOnlyWithLabel,n as LinkButton,a as LoadingState,i as MultipleIconPositions,o as WithDescription,y as __namedExportsOrder,b as default};
