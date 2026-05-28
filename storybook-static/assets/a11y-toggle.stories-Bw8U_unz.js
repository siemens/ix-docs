import{m as c,g}from"./generic-render-Dxw1XMhM.js";import{Q as t}from"./iframe-CV9U59Xm.js";import"./sample-4XlXCCij.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Example/Toggle/Accessibility",tags:[],render:e=>g("ix-toggle",e,["validation"]),argTypes:c("ix-toggle",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"},a11y:{test:"error"}}},a={render:e=>t`<ix-toggle
      aria-label="Notifications"
      text-on=${e.textOn}
      text-off=${e.textOff}
      ?checked=${e.checked}
      ?disabled=${e.disabled}
    ></ix-toggle>`,args:{checked:!1,disabled:!1,textOn:"On",textOff:"Off"}},r={render:()=>t`<ix-toggle aria-label="Enable dark mode" hide-text="true"></ix-toggle>`,parameters:{a11y:{test:"error"}}},s={render:()=>t`
      <div>
        <ix-toggle
          aria-label="Enable analytics"
          aria-describedby="toggle-analytics-desc"
        ></ix-toggle>
        <span id="toggle-analytics-desc" hidden>
          Collects anonymous usage data to improve the product.
        </span>
      </div>
    `,parameters:{a11y:{test:"error"}}},n={render:e=>t`<ix-toggle
      aria-label="Notifications"
      text-on=${e.textOn}
      text-off=${e.textOff}
      ?checked=${e.checked}
      ?disabled=${e.disabled}
    ></ix-toggle>`,args:{checked:!1,disabled:!0,textOn:"On",textOff:"Off"}},i={render:e=>t`<ix-toggle
      aria-label="Notifications"
      text-on=${e.textOn}
      text-off=${e.textOff}
      ?checked=${e.checked}
      ?disabled=${e.disabled}
    ></ix-toggle>`,args:{checked:!0,disabled:!1,textOn:"On",textOff:"Off"}},d={render:e=>t`<ix-toggle
      aria-label="Select all rows"
      text-on=${e.textOn}
      text-off=${e.textOff}
      text-indeterminate=${e.textIndeterminate}
      ?checked=${e.checked}
      ?disabled=${e.disabled}
      ?indeterminate=${e.indeterminate}
    ></ix-toggle>`,args:{checked:!1,disabled:!1,indeterminate:!0,textOn:"On",textOff:"Off",textIndeterminate:"Mixed"}},o={render:e=>t`<ix-toggle
      aria-label="Newsletter subscription"
      text-on=${e.textOn}
      text-off=${e.textOff}
      ?checked=${e.checked}
      ?disabled=${e.disabled}
    ></ix-toggle>`,args:{checked:!1,disabled:!1,textOn:"Yes",textOff:"No"}},l={render:e=>t`<ix-toggle
      aria-label="Enable dark mode"
      ?hide-text=${e.hideText}
      ?checked=${e.checked}
      ?disabled=${e.disabled}
    ></ix-toggle>`,args:{checked:!1,disabled:!1,hideText:!0},parameters:{docs:{description:{story:"When `hideText` is true, there is no visible on/off copy; set a stable `aria-label` (or `aria-labelledby`) on the host so the switch has an accessible name."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ix-toggle
      aria-label="Notifications"
      text-on=\${args.textOn}
      text-off=\${args.textOff}
      ?checked=\${args.checked}
      ?disabled=\${args.disabled}
    ></ix-toggle>\`,
  args: {
    checked: false,
    disabled: false,
    textOn: 'On',
    textOff: 'Off'
  }
}`,...a.parameters?.docs?.source},description:{story:"Basic toggle: visible On/Off is decorative; stable name via host `aria-label`.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<ix-toggle aria-label="Enable dark mode" hide-text="true"></ix-toggle>\`,
  parameters: {
    a11y: {
      test: 'error'
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Toggle without visible label – use aria-label on the host for an accessible name.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
      <div>
        <ix-toggle
          aria-label="Enable analytics"
          aria-describedby="toggle-analytics-desc"
        ></ix-toggle>
        <span id="toggle-analytics-desc" hidden>
          Collects anonymous usage data to improve the product.
        </span>
      </div>
    \`,
  parameters: {
    a11y: {
      test: 'error'
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Toggle with a longer description via aria-describedby.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ix-toggle
      aria-label="Notifications"
      text-on=\${args.textOn}
      text-off=\${args.textOff}
      ?checked=\${args.checked}
      ?disabled=\${args.disabled}
    ></ix-toggle>\`,
  args: {
    checked: false,
    disabled: true,
    textOn: 'On',
    textOff: 'Off'
  }
}`,...n.parameters?.docs?.source},description:{story:"Disabled toggle – not focusable, reduced opacity.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ix-toggle
      aria-label="Notifications"
      text-on=\${args.textOn}
      text-off=\${args.textOff}
      ?checked=\${args.checked}
      ?disabled=\${args.disabled}
    ></ix-toggle>\`,
  args: {
    checked: true,
    disabled: false,
    textOn: 'On',
    textOff: 'Off'
  }
}`,...i.parameters?.docs?.source},description:{story:"Checked (on) state.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ix-toggle
      aria-label="Select all rows"
      text-on=\${args.textOn}
      text-off=\${args.textOff}
      text-indeterminate=\${args.textIndeterminate}
      ?checked=\${args.checked}
      ?disabled=\${args.disabled}
      ?indeterminate=\${args.indeterminate}
    ></ix-toggle>\`,
  args: {
    checked: false,
    disabled: false,
    indeterminate: true,
    textOn: 'On',
    textOff: 'Off',
    textIndeterminate: 'Mixed'
  }
}`,...d.parameters?.docs?.source},description:{story:'Indeterminate (mixed) state – e.g. for "select all" scenarios.',...d.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ix-toggle
      aria-label="Newsletter subscription"
      text-on=\${args.textOn}
      text-off=\${args.textOff}
      ?checked=\${args.checked}
      ?disabled=\${args.disabled}
    ></ix-toggle>\`,
  args: {
    checked: false,
    disabled: false,
    textOn: 'Yes',
    textOff: 'No'
  }
}`,...o.parameters?.docs?.source},description:{story:"Custom on/off labels.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => html\`<ix-toggle
      aria-label="Enable dark mode"
      ?hide-text=\${args.hideText}
      ?checked=\${args.checked}
      ?disabled=\${args.disabled}
    ></ix-toggle>\`,
  args: {
    checked: false,
    disabled: false,
    hideText: true
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`hideText\` is true, there is no visible on/off copy; set a stable \`aria-label\` (or \`aria-labelledby\`) on the host so the switch has an accessible name.'
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"Toggle with no visible text (`hideText`) — a stable host `aria-label` is required (e.g. for axe).",...l.parameters?.docs?.description}}};const h=["BasicUsage","WithAriaLabel","WithDescription","DisabledState","CheckedState","IndeterminateState","CustomLabels","NoVisibleLabel"];export{a as BasicUsage,i as CheckedState,o as CustomLabels,n as DisabledState,d as IndeterminateState,l as NoVisibleLabel,r as WithAriaLabel,s as WithDescription,h as __namedExportsOrder,p as default};
