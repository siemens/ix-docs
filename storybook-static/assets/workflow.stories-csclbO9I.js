import{m as o}from"./generic-render-CVM81Yk_.js";import{x as a}from"./iframe-BMfLh-i5.js";import"./sample-DahX5hiH.js";import"./preload-helper-PPVm8Dsz.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,f={title:"Example/Workflow",tags:[],render:({clickable:t,selectedIndex:s,vertical:r})=>a`
    <ix-workflow-steps
      ?clickable=${t}
      .selectedIndex=${s}
      ?vertical=${r}
      @stepSelected=${l("stepSelected")}
    >
      <ix-workflow-step status="done">Step 1</ix-workflow-step>
      <ix-workflow-step status="success">Step 2</ix-workflow-step>
      <ix-workflow-step status="open">Step 3</ix-workflow-step>
      <ix-workflow-step status="warning">Step 4</ix-workflow-step>
      <ix-workflow-step status="error">Step 5</ix-workflow-step>
      <ix-workflow-step disabled>Step 6</ix-workflow-step>
    </ix-workflow-steps>
  `,argTypes:o("ix-workflow-steps"),parameters:{a11y:{test:"error"}}},e={args:{clickable:!0,selectedIndex:0,vertical:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    clickable: true,
    selectedIndex: 0,
    vertical: false
  }
}`,...e.parameters?.docs?.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,f as default};
