import{e as w,f as S,d as b}from"./iframe-BjJrMWKj.js";import{s as a,h as r}from"./stencil-render-DyFAD701.js";import{m as y}from"./generic-render-CVM81Yk_.js";import"./preload-helper-PPVm8Dsz.js";import"./sample-DahX5hiH.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__;function n(e,u=[]){return r("ix-chat-input",{...e,onPromptSubmit:t=>L("promptSubmit")(t.detail)},u)}const U={title:"Example/Chat Input",tags:[],render:a(e=>n(e)),argTypes:y("ix-chat-input"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=6316-45495&m=dev"}}},s={args:{}},i={args:{state:"processing",value:"Summarize the current alarm list"}},o={args:{value:"Summarize the current alarm list"}},m={args:{characterLimit:30,value:"Summarize all critical alarms"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11693-45416&m=dev"}}},c={args:{characterLimit:30,value:"Summarize all critical alarms now"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11693-45416&m=dev"}}};function f(e){return r("ix-chat-attachment",{fileName:`file_${String(e).padStart(2,"0")}.txt`,slot:"attachments"})}const l={render:a(e=>n(e,Array.from({length:3},(u,t)=>f(t+1)))),args:{},parameters:{design:{type:"figma",url:"https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=18263-77406&m=dev"}}},g={render:a(e=>n(e,Array.from({length:8},(u,t)=>f(t+1)))),parameters:{design:{type:"figma",url:"https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=18263-77406&m=dev"}}};function x(){return r("ix-icon-button",{"aria-label":"Refresh follow-up prompts",icon:b,slot:"follow-up",variant:"secondary"})}function h(e){return r("ix-button",{slot:"follow-up",variant:"secondary"},e)}const d={render:a(e=>n(e,[x(),h("What are the risks if this insight is ignored?"),h("Show related insights from similar customer events."),h("Summarize this insight in 2 bullet points for presentation.")])),args:{},parameters:{design:{type:"figma",url:"https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=225-51348&m=dev"}}},p={render:a(e=>n(e,[r("ix-icon-button",{"aria-label":"Attach file",icon:w,slot:"start",variant:"subtle-tertiary"}),r("ix-icon-button",{"aria-label":"Record voice input",icon:S,slot:"end",variant:"subtle-tertiary"})])),args:{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'processing',
    value: 'Summarize the current alarm list'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Summarize the current alarm list'
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    characterLimit: 30,
    value: 'Summarize all critical alarms'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11693-45416&m=dev'
    }
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    characterLimit: 30,
    value: 'Summarize all critical alarms now'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11693-45416&m=dev'
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: stencil(args => renderChatInput(args, Array.from({
    length: 3
  }, (_, index) => createAttachment(index + 1)))),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=18263-77406&m=dev'
    }
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: stencil(args => renderChatInput(args, Array.from({
    length: 8
  }, (_, index) => createAttachment(index + 1)))),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=18263-77406&m=dev'
    }
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: stencil(args => renderChatInput(args, [createFollowUpRefreshButton(), createFollowUpPrompt('What are the risks if this insight is ignored?'), createFollowUpPrompt('Show related insights from similar customer events.'), createFollowUpPrompt('Summarize this insight in 2 bullet points for presentation.')])),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=225-51348&m=dev'
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: stencil(args => renderChatInput(args, [<ix-icon-button aria-label="Attach file" icon={iconAttach} slot="start" variant="subtle-tertiary"></ix-icon-button>, <ix-icon-button aria-label="Record voice input" icon={iconMicrophone} slot="end" variant="subtle-tertiary"></ix-icon-button>])),
  args: {}
}`,...p.parameters?.docs?.source}}};const I=["Default","WithProcessing","WithValue","SoftCharacterLimit","HardCharacterLimit","WithAttachments","WithScrollableAttachments","WithFollowUpPrompts","CustomActions"];export{p as CustomActions,s as Default,c as HardCharacterLimit,m as SoftCharacterLimit,l as WithAttachments,d as WithFollowUpPrompts,i as WithProcessing,g as WithScrollableAttachments,o as WithValue,I as __namedExportsOrder,U as default};
