import{s as o,h as s}from"./stencil-render-CqJWeRgr.js";import{m as r}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const i={title:"Example/Workflow Steps",tags:[],render:o(t=>s("ix-workflow-steps",{...t})),argTypes:r("ix-workflow-steps"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/KbgPxj7qLgngXkJfnDM4Ty/SDL-AI-UX-Guidelines?node-id=11806-125191&m=dev"}}},e={args:{},render:o(t=>s("ix-workflow-steps",{...t},s("ix-workflow-step",{status:"done"},"Step 1"),s("ix-workflow-step",{status:"success"},"Step 2"),s("ix-workflow-step",{status:"open"},"Step 3"),s("ix-workflow-step",{status:"warning"},"Step 4"),s("ix-workflow-step",{status:"error"},"Step 5"),s("ix-workflow-step",{disabled:!0},"Step 6")))},l=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {},
  render: stencil(args => <ix-workflow-steps {...args}>
      <ix-workflow-step status="done">Step 1</ix-workflow-step>
      <ix-workflow-step status="success">Step 2</ix-workflow-step>
      <ix-workflow-step status="open">Step 3</ix-workflow-step>
      <ix-workflow-step status="warning">Step 4</ix-workflow-step>
      <ix-workflow-step status="error">Step 5</ix-workflow-step>
      <ix-workflow-step disabled>Step 6</ix-workflow-step>
    </ix-workflow-steps>)
}`,...e.parameters?.docs?.source}}};export{e as Default,l as __namedExportsOrder,i as default};
