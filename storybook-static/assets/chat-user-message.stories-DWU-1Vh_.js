import{a as h,g as u,h as p}from"./iframe-BMfLh-i5.js";import{s as d,h as g}from"./stencil-render-DyFAD701.js";import{m as l}from"./generic-render-CVM81Yk_.js";import"./preload-helper-PPVm8Dsz.js";import"./sample-DahX5hiH.js";function m(e,s){return g("ix-icon-button",{"aria-label":e,icon:s,size:"16",slot:"actions",variant:"subtle-tertiary"})}function o(e,s=!1,i="attachments"){return g("ix-chat-attachment",{fileName:e,hideRemoveButton:!0,previewSupported:s,slot:i})}function c(e,s=[]){return g("ix-chat-user-message",{...e},s)}const M={title:"Example/Chat User Message",tags:[],render:d(e=>c(e)),argTypes:l("ix-chat-user-message"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11900-149729&m=dev"}}},t={args:{message:"Summarize the detailed discussion held with the customer"}},a={render:d(e=>c(e,[m("Copy message",h),m("Edit message",u),m("Show more actions",p)])),args:{message:"Summarize the detailed discussion held with the customer"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11900-151011&m=dev"}}},r={args:{message:"Summarize the detailed discussion held with the customer and highlight the most important next steps for the service team."},parameters:{design:{type:"figma",url:"https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11900-151262&m=dev"}}},n={render:d(e=>c(e,[o("file_01.pdf",!0),o("file_02.csv"),...Array.from({length:5}).map((s,i)=>o(`file_0${i+3}.jpg`))])),args:{message:"Summarize the detailed discussion held with the customer"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11900-151929&m=dev"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Summarize the detailed discussion held with the customer'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: stencil(args => renderChatUserMessage(args, [createAction('Copy message', iconCopy), createAction('Edit message', iconPen), createAction('Show more actions', iconMoreMenu)])),
  args: {
    message: 'Summarize the detailed discussion held with the customer'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11900-151011&m=dev'
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Summarize the detailed discussion held with the customer and highlight the most important next steps for the service team.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11900-151262&m=dev'
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: stencil(args => renderChatUserMessage(args, [createAttachment('file_01.pdf', true), createAttachment('file_02.csv'), ...Array.from({
    length: 5
  }).map((_, i) => createAttachment(\`file_0\${i + 3}.jpg\`))])),
  args: {
    message: 'Summarize the detailed discussion held with the customer'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11900-151929&m=dev'
    }
  }
}`,...n.parameters?.docs?.source}}};const x=["Default","WithActions","LongMessage","WithAttachments"];export{t as Default,r as LongMessage,a as WithActions,n as WithAttachments,x as __namedExportsOrder,M as default};
