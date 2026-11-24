import{x as n}from"./iframe-CLegjRT6.js";import{m as o,g as i}from"./generic-render-D6eVCH02.js";import"./preload-helper-PPVm8Dsz.js";import"./sample-QwvD4foy.js";const m={title:"Example/ProgressIndicator",tags:[],render:e=>i("ix-progress-indicator",e),argTypes:o("ix-progress-indicator",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=69677-5548&m=dev"},a11y:{test:"error"}}},r={args:{label:"Progress Indicator",helperText:"This is a progress indicator",value:50,defaultSlot:"100%"}},s={args:{label:"Progress Indicator",helperText:"This is a progress indicator",value:50,defaultSlot:"1/2",type:"circular",size:"xl"}},a={render:()=>n`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 20rem;">
      ${["base","success","error","information","warning","paused"].map(e=>n`
          <ix-progress-indicator
            label=${e}
            value="75"
            status=${e}
            helper-text="Helper text"
          >
            75%
          </ix-progress-indicator>
        `)}
    </div>
  `},t={args:{label:"Progress Indicator",helperText:"This is a progress indicator",value:50,status:"warning",size:"md",showTextAsTooltip:!0,defaultSlot:"100%"},parameters:{a11y:{config:{rules:[{id:"aria-tooltip-name",enabled:!1}]}}}},u=["Linear","Circular","Status","TooltipPlacement"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Progress Indicator',
    helperText: 'This is a progress indicator',
    value: 50,
    defaultSlot: '100%'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Progress Indicator',
    helperText: 'This is a progress indicator',
    value: 50,
    defaultSlot: '1/2',
    type: 'circular',
    size: 'xl'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 20rem;">
      \${(['base', 'success', 'error', 'information', 'warning', 'paused'] as const).map(status => html\`
          <ix-progress-indicator
            label=\${status}
            value="75"
            status=\${status}
            helper-text="Helper text"
          >
            75%
          </ix-progress-indicator>
        \`)}
    </div>
  \`
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Progress Indicator',
    helperText: 'This is a progress indicator',
    value: 50,
    status: 'warning',
    size: 'md',
    showTextAsTooltip: true,
    defaultSlot: '100%'
  },
  parameters: {
    a11y: {
      config: {
        // ix-tooltip host has role="tooltip"; content is inert/hidden until shown.
        rules: [{
          id: 'aria-tooltip-name',
          enabled: false
        }]
      }
    }
  }
}`,...t.parameters?.docs?.source}}};export{s as Circular,r as Linear,a as Status,t as TooltipPlacement,u as __namedExportsOrder,m as default};
