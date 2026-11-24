import{e as s}from"./introduction-Bi7mdMH0.js";import{g as a,m as c}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const g={title:"Example/Info Page",tags:[],render:n=>a("ix-info-page",n),argTypes:c("ix-info-page",{iconColor:{control:{type:"text"}}})},o={args:{iconColor:"--si-sys-color-background-warning",titleText:"Report could not be generated",description:"An error occurred while generating the report. Contact your administrator for more information."}},r={argTypes:{icon:{table:{disable:!0}},iconColor:{table:{disable:!0}}},args:{titleText:"Explore Industrial Experience",description:"Build consistent industrial applications with IX components. Choose a component to get started."},render:n=>a("ix-info-page",n,[],t=>{t.style.setProperty("--ix-info-page-image-width","616.18px"),t.style.setProperty("--ix-info-page-image-height","196px");const e=document.createElement("img");return e.slot="image",e.src=s,e.alt="Industrial Experience interface components",t.appendChild(e),t})},i={args:{iconColor:"--si-sys-color-background-warning",titleText:"Invitation received",description:"You were invited to join Sample Co. Accept the invitation to continue."},render:n=>a("ix-info-page",n,[],t=>{const e=document.createElement("ix-button");return e.slot="actions",e.textContent="Accept invitation",t.appendChild(e),t})},m=["Default","WithIllustration","WithAction"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    iconColor: '--si-sys-color-background-warning',
    titleText: 'Report could not be generated',
    description: 'An error occurred while generating the report. Contact your administrator for more information.'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  argTypes: {
    icon: {
      table: {
        disable: true
      }
    },
    iconColor: {
      table: {
        disable: true
      }
    }
  },
  args: {
    titleText: 'Explore Industrial Experience',
    description: 'Build consistent industrial applications with IX components. Choose a component to get started.'
  },
  render: args => genericRender('ix-info-page', args, [], element => {
    element.style.setProperty('--ix-info-page-image-width', '616.18px');
    element.style.setProperty('--ix-info-page-image-height', '196px');
    const image = document.createElement('img');
    image.slot = 'image';
    image.src = illustration;
    image.alt = 'Industrial Experience interface components';
    element.appendChild(image);
    return element;
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    iconColor: '--si-sys-color-background-warning',
    titleText: 'Invitation received',
    description: 'You were invited to join Sample Co. Accept the invitation to continue.'
  },
  render: args => genericRender('ix-info-page', args, [], element => {
    const button = document.createElement('ix-button');
    button.slot = 'actions';
    button.textContent = 'Accept invitation';
    element.appendChild(button);
    return element;
  })
}`,...i.parameters?.docs?.source}}};export{o as Default,i as WithAction,r as WithIllustration,m as __namedExportsOrder,g as default};
