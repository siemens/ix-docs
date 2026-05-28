import{m as x,g as h}from"./generic-render-Dxw1XMhM.js";import{Q as e}from"./iframe-CV9U59Xm.js";import"./sample-4XlXCCij.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Example/Pill/Accessibility",tags:[],render:m=>h("ix-pill",m),argTypes:x("ix-pill",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"},a11y:{test:"error"}}},r={args:{defaultSlot:"Active",variant:"primary"}},a={render:()=>e`<ix-pill icon="star" aria-label="Featured item"></ix-pill>`},i={render:()=>e`<ix-pill aria-label="Priority: Critical" variant="critical"
      >P0</ix-pill
    >`},t={render:()=>e`
      <div>
        <span>Status: Online</span>
        <ix-pill aria-hidden="true" variant="success">•</ix-pill>
      </div>
    `},n={render:()=>e`<ix-pill role="status" variant="success"
      >System Online</ix-pill
    >`},s={render:()=>e`<ix-pill role="status" aria-live="polite" variant="success"
      >Connected</ix-pill
    >`},o={args:{defaultSlot:"Featured",icon:"star",variant:"primary"}},l={render:()=>e`<ix-pill
      icon="warning"
      aria-label-icon="Warning"
      variant="warning"
      >Check Required</ix-pill
    >`,parameters:{a11y:{config:{rules:[{id:"aria-valid-attr",enabled:!1}]}}}},c={render:()=>e`<ix-pill
      icon="star"
      aria-label="Featured item"
      tooltip-text="This item is featured in search results"
    ></ix-pill>`,parameters:{a11y:{config:{rules:[{id:"aria-tooltip-name",enabled:!1}]}}}},d={render:()=>e`
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <ix-pill
          aria-label="System status"
          aria-describedby="status-desc"
          role="status"
          variant="success"
          >Online</ix-pill
        >
        <p id="status-desc" style="margin: 0;">
          System has been operational for 48 hours without interruption.
        </p>
      </div>
    `},p={render:()=>e`<ix-pill
      role="status"
      aria-label="Connection status: Active"
      aria-live="polite"
      variant="success"
      >Connected</ix-pill
    >`},u={render:()=>e`<ix-pill icon="circle" role="status" variant="success"
      >Online</ix-pill
    >`};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Active',
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source},description:{story:`Basic pill with text content.
Screen readers announce the text content by default.`,...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-pill icon="star" aria-label="Featured item"></ix-pill>\`;
  }
}`,...a.parameters?.docs?.source},description:{story:`Icon-only pill with aria-label (REQUIRED for accessibility).
Without aria-label, icon-only pills have no accessible name.`,...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-pill aria-label="Priority: Critical" variant="critical"
      >P0</ix-pill
    >\`;
  }
}`,...i.parameters?.docs?.source},description:{story:`Pill with custom aria-label to provide context.
Use when visual content needs clarification for screen readers.`,...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div>
        <span>Status: Online</span>
        <ix-pill aria-hidden="true" variant="success">•</ix-pill>
      </div>
    \`;
  }
}`,...t.parameters?.docs?.source},description:{story:`Decorative pill hidden from screen readers.
Use when pill information is redundant with surrounding text.`,...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-pill role="status" variant="success"
      >System Online</ix-pill
    >\`;
  }
}`,...n.parameters?.docs?.source},description:{story:`Pill with role="status" for live status indicators.
Use for dynamic content that updates to inform users of status changes.`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-pill role="status" aria-live="polite" variant="success"
      >Connected</ix-pill
    >\`;
  }
}`,...s.parameters?.docs?.source},description:{story:`Pill with role="status" and aria-live for dynamic updates.
Screen readers announce when content changes.`,...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Featured',
    icon: 'star',
    variant: 'primary'
  }
}`,...o.parameters?.docs?.source},description:{story:`Pill with decorative icon.
Icon is automatically hidden from screen readers (aria-hidden="true").`,...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-pill
      icon="warning"
      aria-label-icon="Warning"
      variant="warning"
      >Check Required</ix-pill
    >\`;
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'aria-valid-attr',
          enabled: false
        }]
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`Pill with informational icon.
Icon has aria-label-icon to describe its meaning to screen readers.
Note: aria-label-icon is a custom IX prop, not a standard ARIA attribute.`,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-pill
      icon="star"
      aria-label="Featured item"
      tooltip-text="This item is featured in search results"
    ></ix-pill>\`;
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'aria-tooltip-name',
          enabled: false
        }]
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`Icon-only pill with tooltip.
Both aria-label (for screen readers) and tooltip (for visual users) are provided.
Note: Tooltip text is visual-only, not announced by screen readers (by design).`,...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <ix-pill
          aria-label="System status"
          aria-describedby="status-desc"
          role="status"
          variant="success"
          >Online</ix-pill
        >
        <p id="status-desc" style="margin: 0;">
          System has been operational for 48 hours without interruption.
        </p>
      </div>
    \`;
  }
}`,...d.parameters?.docs?.source},description:{story:`Pill with aria-describedby referencing external description.
Use for complex descriptions that need to be read by screen readers.`,...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-pill
      role="status"
      aria-label="Connection status: Active"
      aria-live="polite"
      variant="success"
      >Connected</ix-pill
    >\`;
  }
}`,...p.parameters?.docs?.source},description:{story:`Pill with multiple ARIA attributes working together.
Demonstrates combining role, aria-label, and aria-live.`,...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<ix-pill icon="circle" role="status" variant="success"
      >Online</ix-pill
    >\`;
  }
}`,...u.parameters?.docs?.source},description:{story:`State-indicating icon with status role.
Icon visualizes state (online/offline), but state is conveyed via text and role.`,...u.parameters?.docs?.description}}};const S=["BasicUsage","IconOnlyWithLabel","CustomAriaLabel","DecorativePill","StatusRole","LiveStatusUpdates","DecorativeIcon","InformationalIcon","IconOnlyWithTooltip","WithDescription","MultipleAriaAttributes","StateIndicatingIcon"];export{r as BasicUsage,i as CustomAriaLabel,o as DecorativeIcon,t as DecorativePill,a as IconOnlyWithLabel,c as IconOnlyWithTooltip,l as InformationalIcon,s as LiveStatusUpdates,p as MultipleAriaAttributes,u as StateIndicatingIcon,n as StatusRole,d as WithDescription,S as __namedExportsOrder,f as default};
