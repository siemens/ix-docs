import{s as a,h as e}from"./stencil-render-DyFAD701.js";import{m as p}from"./generic-render-CVM81Yk_.js";import"./sample-DahX5hiH.js";const u={title:"Example/Badge/Accessibility",tags:[],render:a(l=>e("ix-badge",{...l})),argTypes:p("ix-badge",{}),parameters:{a11y:{test:"error"}}},r={args:{label:"12",variant:"info"}},i={render:a(()=>e("ix-badge",{type:"dot",variant:"alarm",role:"img","aria-label":"New items"}))},t={render:a(()=>e("ix-badge",{label:"!",role:"alert","aria-label":"Urgent update"}))},s={render:a(()=>e("ix-badge",{label:"3",variant:"alarm"},e("ix-button",null,"Review changes")))},o={render:a(()=>e("ix-badge",{type:"dot",variant:"primary"},e("ix-icon-button",{icon:"info","aria-label":"Notifications"})))},n={render:a(()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e("ix-badge",{label:"5",variant:"warning"},e("button",{"aria-describedby":"inbox-desc"},"Inbox")),e("p",{id:"inbox-desc",style:{margin:"0"}},"Unread messages in your primary folder.")))},d={args:{label:"142",variant:"primary"}},c={render:a(()=>e("div",null,e("span",null,"Notifications: 3 unread"),e("ix-badge",{label:"3","aria-hidden":!0,variant:"alarm"})))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: '12',
    variant: 'info'
  }
}`,...r.parameters?.docs?.source},description:{story:`Standalone badge with a text label.
Visible label text is static chrome (pill-like); no default live region.`,...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: stencil(() => <ix-badge type="dot" variant="alarm" role="img" aria-label="New items"></ix-badge>)
}`,...i.parameters?.docs?.source},description:{story:'Standalone dot badge: host accessible name requires a naming role\n(e.g. `role="img"`) because `aria-label` alone is not valid on a role-less host.',...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: stencil(() => <ix-badge label="!" role="alert" aria-label="Urgent update"></ix-badge>)
}`,...t.parameters?.docs?.source},description:{story:"Standalone badge with optional live region: author sets `role` / `aria-label` on the host.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: stencil(() => <ix-badge label="3" variant="alarm">
      <ix-button>Review changes</ix-button>
    </ix-badge>)
}`,...s.parameters?.docs?.source},description:{story:"Attached badge with a count: the anchor keeps its role; count text is exposed via `aria-describedby`.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: stencil(() => <ix-badge type="dot" variant="primary">
      <ix-icon-button icon="info" aria-label="Notifications"></ix-icon-button>
    </ix-badge>)
}`,...o.parameters?.docs?.source},description:{story:"Attached dot badge: the anchor must be named; the indicator is decorative (`aria-hidden`).",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: stencil(() => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <ix-badge label="5" variant="warning">
        <button aria-describedby="inbox-desc">Inbox</button>
      </ix-badge>
      <p id="inbox-desc" style={{
      margin: '0'
    }}>
        Unread messages in your primary folder.
      </p>
    </div>)
}`,...n.parameters?.docs?.source},description:{story:"Attached badge merges `aria-describedby` with existing ids on the anchor.",...n.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: '142',
    variant: 'primary'
  }
}`,...d.parameters?.docs?.source},description:{story:"Standalone overflow label: numbers above 99 render as `99+`.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: stencil(() => <div>
      <span>Notifications: 3 unread</span>
      <ix-badge label="3" aria-hidden={true} variant="alarm"></ix-badge>
    </div>)
}`,...c.parameters?.docs?.source},description:{story:"Standalone badge hidden from screen readers when the count is redundant with surrounding text.",...c.parameters?.docs?.description}}};const x=["BasicUsage","DotWithAriaLabel","CustomAriaLabel","AttachedWithCount","AttachedDot","MergedAriaDescribedby","OverflowLabel","DecorativeBadge"];export{o as AttachedDot,s as AttachedWithCount,r as BasicUsage,t as CustomAriaLabel,c as DecorativeBadge,i as DotWithAriaLabel,n as MergedAriaDescribedby,d as OverflowLabel,x as __namedExportsOrder,u as default};
