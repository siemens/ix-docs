import{m,g as h}from"./generic-render-Dxw1XMhM.js";import{Q as e}from"./iframe-CsjqMXiN.js";import"./sample-4XlXCCij.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Example/Chip/Accessibility",tags:[],render:d=>h("ix-chip",d),argTypes:m("ix-chip",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"},a11y:{test:"error"}}},i={args:{icon:"info",defaultSlot:"Example Text",variant:"primary"}},a={args:{icon:"filter",defaultSlot:"Status",variant:"info",closable:!0}},r={render:()=>e`
    <ix-chip closable aria-label="Project Alpha" icon="bulb">PA</ix-chip>
  `},n={render:()=>e`
    <ix-chip icon="print" aria-label="Print document"></ix-chip>
  `},t={render:()=>e`
    <ix-chip
      icon="warning"
      aria-label-icon="Warning"
      variant="warning"
      closable
    >
      Check required
    </ix-chip>
  `,parameters:{a11y:{config:{rules:[{id:"aria-valid-attr",enabled:!1}]}}}},o={render:()=>e`
    <ix-chip
      icon="info"
      variant="info"
      tooltip-text="Open details for this status"
    >
      Info
    </ix-chip>
  `,parameters:{a11y:{config:{rules:[{id:"aria-tooltip-name",enabled:!1}]}}}},s={render:()=>e`
    <ix-chip
      icon="info"
      variant="info"
      outline
      tooltip-text="Click to edit"
      aria-label="In review"
    >
      Info
    </ix-chip>
  `,parameters:{a11y:{config:{rules:[{id:"aria-tooltip-name",enabled:!1}]}}}},c={args:{icon:"info",defaultSlot:"Read only",inactive:!0,variant:"neutral"}},l={render:()=>e`
    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
      <span
        id="a11y-chip-section-label"
        style="font: var(--theme-font-label-lg)"
        >Filter</span
      >
      <ix-chip
        icon="filter"
        variant="neutral"
        closable
        aria-labelledby="a11y-chip-section-label"
      >
        Active (3)
      </ix-chip>
    </div>
  `},p={render:()=>e`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <ix-chip
        icon="filter"
        closable
        aria-label="Active filters"
        aria-describedby="chip-filter-desc"
      >
        3 filters
      </ix-chip>
      <p id="chip-filter-desc" style="margin: 0;">
        Results are narrowed by status, owner, and date range.
      </p>
    </div>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    defaultSlot: 'Example Text',
    variant: 'primary'
  }
}`,...i.parameters?.docs?.source},description:{story:"Default chip: visible label from the default slot; leading icon is decorative when text is present.",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'filter',
    defaultSlot: 'Status',
    variant: 'info',
    closable: true
  }
}`,...a.parameters?.docs?.source},description:{story:"Closable chip: main action keeps the slot name; close control has a dedicated accessible name.",...a.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ix-chip closable aria-label="Project Alpha" icon="bulb">PA</ix-chip>
  \`
}`,...r.parameters?.docs?.source},description:{story:'Host `aria-label` names the main control; the host gets `role="group"` when supporting controls (e.g. close, tooltip) are present.\nUse when the visible abbreviation needs a clearer spoken name.',...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ix-chip icon="print" aria-label="Print document"></ix-chip>
  \`
}`,...n.parameters?.docs?.source},description:{story:"Icon-only chip: a host accessible name is required (there is no slot text).",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ix-chip
      icon="warning"
      aria-label-icon="Warning"
      variant="warning"
      closable
    >
      Check required
    </ix-chip>
  \`,
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
}`,...t.parameters?.docs?.source},description:{story:"Leading icon is meaningful: describe it with `aria-label-icon` (IX prop) while the chip label comes from the slot.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ix-chip
      icon="info"
      variant="info"
      tooltip-text="Open details for this status"
    >
      Info
    </ix-chip>
  \`,
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
}`,...o.parameters?.docs?.source},description:{story:"Tooltip supplements the visible label; the main button remains the named control.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ix-chip
      icon="info"
      variant="info"
      outline
      tooltip-text="Click to edit"
      aria-label="In review"
    >
      Info
    </ix-chip>
  \`,
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
}`,...s.parameters?.docs?.source},description:{story:"Custom accessible name on the host with tooltip — common filter/status pattern.",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    defaultSlot: 'Read only',
    inactive: true,
    variant: 'neutral'
  }
}`,...c.parameters?.docs?.source},description:{story:"Inactive chip: not interactive; no separate close control.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 0.25rem;">
      <span
        id="a11y-chip-section-label"
        style="font: var(--theme-font-label-lg)"
        >Filter</span
      >
      <ix-chip
        icon="filter"
        variant="neutral"
        closable
        aria-labelledby="a11y-chip-section-label"
      >
        Active (3)
      </ix-chip>
    </div>
  \`
}`,...l.parameters?.docs?.source},description:{story:"Accessible name from `aria-labelledby` (with visible slot text) still establishes a composite `group` on the host when needed.",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <ix-chip
        icon="filter"
        closable
        aria-label="Active filters"
        aria-describedby="chip-filter-desc"
      >
        3 filters
      </ix-chip>
      <p id="chip-filter-desc" style="margin: 0;">
        Results are narrowed by status, owner, and date range.
      </p>
    </div>
  \`
}`,...p.parameters?.docs?.source},description:{story:"Description referenced by `aria-describedby` on the host (forwarded to the main control).",...p.parameters?.docs?.description}}};const x=["BasicUsage","ClosableChip","HostAriaLabelWithGroup","IconOnlyWithAriaLabel","InformationalIcon","WithTooltip","AriaLabelWithTooltip","InactiveChip","WithAriaLabelledby","WithDescription"];export{s as AriaLabelWithTooltip,i as BasicUsage,a as ClosableChip,r as HostAriaLabelWithGroup,n as IconOnlyWithAriaLabel,c as InactiveChip,t as InformationalIcon,l as WithAriaLabelledby,p as WithDescription,o as WithTooltip,x as __namedExportsOrder,y as default};
