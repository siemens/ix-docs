import{i as w,j as b,k as y,l as U,a as x,b as _,c as W,d as M,g as F,h as I,e as z,f as k}from"./iframe-BjJrMWKj.js";import{s as i,h as r}from"./stencil-render-DyFAD701.js";import{m as P}from"./generic-render-CVM81Yk_.js";import"./preload-helper-PPVm8Dsz.js";import"./sample-DahX5hiH.js";function a(e,t,o,c="24"){return r("ix-icon-button",{"aria-label":e,icon:t,size:c,slot:o,variant:"subtle-tertiary"})}function D(e=!0){return[r("h3",null,"Text block example"),r("p",null,"Effective asset performance management improves uptime, reduces maintenance costs, and ensures long-term equipment health."),e?r("p",null,"Summary"):null]}function s({actions:e=!1,sources:t=!1}={}){return r("ix-chat-ai-message",null,D(),e?[a("Copy message",x,"actions"),a("Helpful response",_,"actions"),a("Not helpful response",W,"actions"),a("Regenerate response",M,"actions")]:null,t?T():null)}function T(){return r("ix-chip",{"aria-label":"Show sources",icon:w,outline:!0,slot:"sources",variant:"neutral"},"Sources")}function n(e,{actions:t=!1,attachments:o=!1,overflow:c=!1}={}){return r("ix-chat-user-message",{attachmentCount:c?5:void 0,message:e},t?[a("Copy message",x,"actions"),a("Edit message",F,"actions"),a("Show more actions",I,"actions")]:null,o?[v("equipment_status.pdf",!0),v("maintenance_notes.csv")]:null,c?["File_01.jpg","File_02.jpg","File_03.txt","File_04.pdf","File_05.pdf"].map(C=>L(C)):null)}function v(e,t=!1){return r("ix-chat-attachment",{fileName:e,hideRemoveButton:!0,previewSupported:t,slot:"attachments"})}function m(e,t){return r("ix-chat-attachment",{fileName:e,slot:"attachments",status:t})}function E(e){return e.endsWith(".pdf")?b:e.endsWith(".txt")?y:U}function L(e,t="attachment-overflow"){return r("ix-dropdown-item",{icon:E(e),label:e,slot:t})}function u({attachments:e=!1,customActions:t=!1,characterLimit:o=!1,followUp:c=!1,scrollableAttachments:C=!1}={}){return r("ix-chat-input",{attachmentLayout:C?"scroll":void 0,characterLimit:o?120:void 0,placeholder:"Enter a command, question or topic...",slot:"prompt",value:o?"Summarize the uploaded maintenance reports":void 0},c?[a("Refresh follow-up prompts",M,"follow-up","24"),S("What are the risks if this insight is ignored?"),S("Show related insights from similar customer events."),S("Summarize this insight in 2 bullet points for presentation.")]:null,e?[m("equipment_status.pdf"),m("alarm_export.txt"),m("uploading_report.pdf","loading"),m("failed_upload.csv","failed")]:null,t?[a("Attach file",z,"start"),a("Record voice input",k,"end","24")]:null)}function S(e){return r("ix-button",{slot:"follow-up",variant:"secondary"},e)}function l(e,t){return r("ix-chat",{...e,style:{height:"40rem"}},t)}function R(e){return l(e,[n("Summarize the detailed discussion held with the customer"),s(),u()])}const O={title:"Example/Chat",tags:[],render:i(e=>R(e)),argTypes:P("ix-chat")},h={},p={render:i(e=>l(e,[n("Summarize the current asset performance status"),s({actions:!0,sources:!0}),u()]))},d={render:i(e=>l(e,[n("Analyze these files and highlight the key risks",{actions:!0,attachments:!0,overflow:!0}),s({actions:!0}),u()]))},f={render:i(e=>l(e,[n("Compare the uploaded reports"),s({sources:!0}),u({attachments:!0,characterLimit:!0,customActions:!0,followUp:!0})]))},g={render:i(e=>l(e,[n("Create a summary from all uploaded files"),s(),u({attachments:!0,customActions:!0,scrollableAttachments:!0})]))},A={render:i(e=>l(e,[n("Summarize the detailed discussion held with the customer",{actions:!0}),s({actions:!0,sources:!0}),n("Use the attached service reports as additional context",{attachments:!0,overflow:!0}),s({actions:!0,sources:!0}),u({attachments:!0,characterLimit:!0,customActions:!0})]))};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: stencil(args => createChat(args, [createUserMessage('Summarize the current asset performance status'), createAiMessage({
    actions: true,
    sources: true
  }), createChatInput()]))
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: stencil(args => createChat(args, [createUserMessage('Analyze these files and highlight the key risks', {
    actions: true,
    attachments: true,
    overflow: true
  }), createAiMessage({
    actions: true
  }), createChatInput()]))
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: stencil(args => createChat(args, [createUserMessage('Compare the uploaded reports'), createAiMessage({
    sources: true
  }), createChatInput({
    attachments: true,
    characterLimit: true,
    customActions: true,
    followUp: true
  })]))
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: stencil(args => createChat(args, [createUserMessage('Create a summary from all uploaded files'), createAiMessage(), createChatInput({
    attachments: true,
    customActions: true,
    scrollableAttachments: true
  })]))
}`,...g.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: stencil(args => createChat(args, [createUserMessage('Summarize the detailed discussion held with the customer', {
    actions: true
  }), createAiMessage({
    actions: true,
    sources: true
  }), createUserMessage('Use the attached service reports as additional context', {
    attachments: true,
    overflow: true
  }), createAiMessage({
    actions: true,
    sources: true
  }), createChatInput({
    attachments: true,
    characterLimit: true,
    customActions: true
  })]))
}`,...A.parameters?.docs?.source}}};const J=["Default","WithAiActionsAndSources","WithUserMessageAttachments","WithPromptAttachments","WithScrollablePromptAttachments","FullFeaturedConversation"];export{h as Default,A as FullFeaturedConversation,p as WithAiActionsAndSources,f as WithPromptAttachments,g as WithScrollablePromptAttachments,d as WithUserMessageAttachments,J as __namedExportsOrder,O as default};
