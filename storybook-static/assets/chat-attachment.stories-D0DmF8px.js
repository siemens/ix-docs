import{s as i,h as m}from"./stencil-render-DyFAD701.js";import{m as c}from"./generic-render-CVM81Yk_.js";import"./sample-DahX5hiH.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__;function p(n){return m("ix-chat-attachment",{...n,onAttachmentClick:()=>o("attachmentClick")(),onRemoveClick:()=>o("removeClick")()})}const g={title:"Example/Chat Attachment",tags:[],render:i(n=>p(n)),argTypes:c("ix-chat-attachment"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11806-125191&m=dev"}}},e={args:{fileName:"file_01.txt"}},a={args:{fileName:"file_01.pdf",previewSupported:!0}},r={args:{fileName:"file_01.pdf",status:"loading"}},t={args:{fileName:"file_01.pdf",status:"failed"}},s={args:{fileName:"meeting_notes_summary_02_with_a_very_long_name.txt"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'file_01.txt'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'file_01.pdf',
    previewSupported: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'file_01.pdf',
    status: 'loading'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'file_01.pdf',
    status: 'failed'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fileName: 'meeting_notes_summary_02_with_a_very_long_name.txt'
  }
}`,...s.parameters?.docs?.source}}};const u=["Default","PreviewSupported","Loading","Failed","LongFileName"];export{e as Default,t as Failed,r as Loading,s as LongFileName,a as PreviewSupported,u as __namedExportsOrder,g as default};
