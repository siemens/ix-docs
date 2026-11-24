import{s as a,h as e}from"./stencil-render-CqJWeRgr.js";import{m as b}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const u={title:"Example/Badge/Accessibility",tags:[],render:a(l=>e("ix-badge",{...l})),argTypes:b("ix-badge",{}),parameters:{a11y:{test:"error"}}},r={args:{label:"12",variant:"information"}},t={render:a(()=>e("ix-badge",{type:"dot",variant:"danger",role:"img","aria-label":"New items"}))},i={render:a(()=>e("ix-badge",{label:"!",role:"alert","aria-label":"Urgent update"}))},n={render:a(()=>e("ix-badge",{label:"3",variant:"danger"},e("ix-button",null,"Review changes")))},s={render:a(()=>e("ix-badge",{type:"dot",variant:"accent"},e("ix-icon-button",{icon:"info","aria-label":"Notifications"})))},o={render:a(()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e("ix-badge",{label:"5",variant:"warning"},e("button",{"aria-describedby":"inbox-desc"},"Inbox")),e("p",{id:"inbox-desc",style:{margin:"0"}},"Unread messages in your primary folder.")))},d={args:{label:"142",variant:"accent"}},c={render:a(()=>e("div",null,e("span",null,"Notifications: 3 unread"),e("ix-badge",{label:"3","aria-hidden":!0,variant:"danger"})))},x=["BasicUsage","DotWithAriaLabel","CustomAriaLabel","AttachedWithCount","AttachedDot","MergedAriaDescribedby","OverflowLabel","DecorativeBadge"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: '12',
    variant: 'information'
  }
}`,...r.parameters?.docs?.source},description:{story:`Standalone badge with a text label.
Visible label text is static chrome (pill-like); no default live region.`,...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: stencil(() => <ix-badge type="dot" variant="danger" role="img" aria-label="New items"></ix-badge>)
}`,...t.parameters?.docs?.source},description:{story:'Standalone dot badge: host accessible name requires a naming role\n(e.g. `role="img"`) because `aria-label` alone is not valid on a role-less host.',...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: stencil(() => <ix-badge label="!" role="alert" aria-label="Urgent update"></ix-badge>)
}`,...i.parameters?.docs?.source},description:{story:"Standalone badge with optional live region: author sets `role` / `aria-label` on the host.",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: stencil(() => <ix-badge label="3" variant="danger">
      <ix-button>Review changes</ix-button>
    </ix-badge>)
}`,...n.parameters?.docs?.source},description:{story:"Attached badge with a count: the anchor keeps its role; count text is exposed via `aria-describedby`.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: stencil(() => <ix-badge type="dot" variant="accent">
      <ix-icon-button icon="info" aria-label="Notifications"></ix-icon-button>
    </ix-badge>)
}`,...s.parameters?.docs?.source},description:{story:"Attached dot badge: the anchor must be named; the indicator is decorative (`aria-hidden`).",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Attached badge merges `aria-describedby` with existing ids on the anchor.",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: '142',
    variant: 'accent'
  }
}`,...d.parameters?.docs?.source},description:{story:"Standalone overflow label: numbers above 99 render as `99+`.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: stencil(() => <div>
      <span>Notifications: 3 unread</span>
      <ix-badge label="3" aria-hidden={true} variant="danger"></ix-badge>
    </div>)
}`,...c.parameters?.docs?.source},description:{story:"Standalone badge hidden from screen readers when the count is redundant with surrounding text.",...c.parameters?.docs?.description}}};export{s as AttachedDot,n as AttachedWithCount,r as BasicUsage,i as CustomAriaLabel,c as DecorativeBadge,t as DotWithAriaLabel,o as MergedAriaDescribedby,d as OverflowLabel,x as __namedExportsOrder,u as default};
