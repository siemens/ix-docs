import{Q as n}from"./iframe-CV9U59Xm.js";import{g as u,m as v}from"./generic-render-Dxw1XMhM.js";import"./preload-helper-PPVm8Dsz.js";import"./sample-4XlXCCij.js";const t="print",b=["primary","alarm","critical","warning","info","neutral","success","custom"];function _(e){return e==="custom"?"Custom":e.charAt(0).toUpperCase()+e.slice(1)}function f(e,i){const a="Default";return i?n`
      <ix-chip icon=${t} ?closable=${e}>${a}</ix-chip>
      <ix-chip icon=${t} outline ?closable=${e}
        >${a}</ix-chip
      >
    `:n`
    <ix-chip ?closable=${e}>${a}</ix-chip>
    <ix-chip outline ?closable=${e}>${a}</ix-chip>
  `}function g(e,i,a){const r=_(e);return e==="custom"?a?n`
        <ix-chip
          icon=${t}
          variant="custom"
          background="var(--theme-chart-11)"
          chip-color="var(--theme-color-inv-std-text)"
          ?closable=${i}
          >${r}</ix-chip
        >
        <ix-chip
          icon=${t}
          variant="custom"
          outline
          background="var(--theme-chart-11)"
          chip-color="var(--theme-chip-outline--color)"
          ?closable=${i}
          >${r}</ix-chip
        >
      `:n`
      <ix-chip
        variant="custom"
        background="var(--theme-chart-11)"
        chip-color="var(--theme-color-inv-std-text)"
        ?closable=${i}
        >${r}</ix-chip
      >
      <ix-chip
        variant="custom"
        outline
        background="var(--theme-chart-11)"
        chip-color="var(--theme-chip-outline--color)"
        ?closable=${i}
        >${r}</ix-chip
      >
    `:a?n`
      <ix-chip icon=${t} variant=${e} ?closable=${i}
        >${r}</ix-chip
      >
      <ix-chip
        icon=${t}
        variant=${e}
        outline
        ?closable=${i}
        >${r}</ix-chip
      >
    `:n`
    <ix-chip variant=${e} ?closable=${i}>${r}</ix-chip>
    <ix-chip variant=${e} outline ?closable=${i}>${r}</ix-chip>
  `}function $(){const e=n`
    <span class="chip-sb-matrix__colhead">Filled</span>
    <span class="chip-sb-matrix__colhead">Outline</span>
  `,i=(r,c)=>n`
    ${e}
    ${f(r,c)}
    ${b.map(d=>g(d,r,c))}
  `,a=(r,c,d)=>n`
    <section class="chip-sb-matrix__section">
      <h2 class="chip-sb-matrix__title">${r}</h2>
      <p class="chip-sb-matrix__desc">${c}</p>
      <div class="chip-sb-matrix__grid">${d}</div>
    </section>
  `;return n`
    <style>
      .chip-sb-matrix {
        box-sizing: border-box;
        max-width: 56rem;
        padding: 1rem 1.5rem 2.5rem;
        height: 100%;
        overflow: auto;
      }
      .chip-sb-matrix__page-title {
        margin: 0 0 0.5rem;
        font-size: 1.25rem;
        font-weight: 600;
      }
      .chip-sb-matrix__section {
        margin-bottom: 2.5rem;
      }
      .chip-sb-matrix__title {
        margin: 0 0 0.35rem;
        font-size: 1rem;
        font-weight: 600;
      }
      .chip-sb-matrix__desc {
        margin: 0 0 0.75rem;
        max-width: 48rem;
        font-size: 0.875rem;
        line-height: 1.45;
        color: var(--theme-color-std-text);
      }
      .chip-sb-matrix__grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 0.75rem 2rem;
        align-items: center;
      }
      .chip-sb-matrix__colhead {
        font-size: 0.8125rem;
        font-weight: 600;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid var(--theme-color-soft-bdr);
        margin-bottom: 0.25rem;
      }
      .chip-sb-matrix__narrow {
        min-width: 0;
        max-width: 20rem;
      }
    </style>
    <div class="chip-sb-matrix">
      <header>
        <h1 class="chip-sb-matrix__page-title">ix-chip · overview</h1>
      </header>
      ${a("All variants — default (no close)","Leading icon on every chip; closable is off.",i(!1,!0))}
      ${a("All variants — closable","Close affordance on the right; icon on all rows.",i(!0,!0))}
      ${a("All variants — no leading icon (no close)","Omit the icon attribute; same variants as above, label only.",i(!1,!1))}
      ${a("All variants — no leading icon (closable)","Label only with close control.",i(!0,!1))}
      ${a("Tooltips","tooltip-text as custom string; aria-label where the chip name should differ from visible text. Includes default styling (no `variant`).",n`
          ${e}
          <ix-chip
            icon=${t}
            tooltip-text="Full details: status, owner, and last update."
            aria-label="Filter: in review"
            >In review</ix-chip
          >
          <ix-chip
            icon=${t}
            outline
            tooltip-text="Full details: status, owner, and last update."
            aria-label="Filter: in review"
            >In review</ix-chip
          >
          <ix-chip
            icon=${t}
            variant="info"
            tooltip-text="Full details: status, owner, and last update."
            aria-label="Filter: in review"
            >In review</ix-chip
          >
          <ix-chip
            icon=${t}
            variant="info"
            outline
            tooltip-text="Full details: status, owner, and last update."
            aria-label="Filter: in review"
            >In review</ix-chip
          >
          <ix-chip
            icon=${t}
            variant="primary"
            ?tooltip-text=${!0}
            >Tooltip uses visible label</ix-chip
          >
          <ix-chip
            icon=${t}
            variant="primary"
            outline
            ?tooltip-text=${!0}
            >Tooltip uses visible label</ix-chip
          >
        `)}
      ${a("More states (representative)","Inactive, centered content, icon accessible name, custom close label, and long label.",n`
          ${e}
          <ix-chip icon=${t} variant="warning" inactive closable
            >Inactive (no close)</ix-chip
          >
          <ix-chip
            icon=${t}
            variant="warning"
            outline
            inactive
            closable
            >Inactive (no close)</ix-chip
          >
          <div class="chip-sb-matrix__narrow">
            <ix-chip icon=${t} variant="primary" center-content
              >Centered in wide chip</ix-chip
            >
          </div>
          <div class="chip-sb-matrix__narrow">
            <ix-chip
              icon=${t}
              variant="primary"
              outline
              center-content
              >Centered in wide chip</ix-chip
            >
          </div>
          <ix-chip
            variant="neutral"
            icon=${t}
            aria-label-icon="Print"
            >Icon with accessible name</ix-chip
          >
          <ix-chip
            variant="neutral"
            outline
            icon=${t}
            aria-label-icon="Print"
            >Icon with accessible name</ix-chip
          >
          <ix-chip
            variant="alarm"
            closable
            aria-label="Active filter: severity alarm"
            aria-label-close-button="Remove alarm filter"
            >Custom close label</ix-chip
          >
          <ix-chip
            variant="alarm"
            outline
            closable
            aria-label="Active filter: severity alarm"
            aria-label-close-button="Remove alarm filter"
            >Custom close label</ix-chip
          >
          <ix-chip icon=${t} variant="neutral" closable
            >Very long label that may truncate when space is tight in dense
            UIs</ix-chip
          >
          <ix-chip icon=${t} variant="neutral" outline closable
            >Very long label that may truncate when space is tight in dense
            UIs</ix-chip
          >
        `)}
    </div>
  `}const S={title:"Example/Chip",tags:[],render:e=>u("ix-chip",e),argTypes:v("ix-chip",{previewWidth:{control:{type:"text"}}}),parameters:{}},s={args:{icon:"info",defaultSlot:"Example Text"}},l={args:{icon:"info"}},p={args:{defaultSlot:"Example Text"}},h={args:{icon:"info",defaultSlot:"Example Text"},render:e=>{const i=u("ix-chip",e),a=i.querySelector("ix-chip");return a.style.width="5rem",i}},m={args:{defaultSlot:"Example Text"},render:e=>{const i=u("ix-chip",e),a=i.querySelector("ix-chip");return a.style.width="5rem",i}},x={render:({icon:e})=>n`<ix-chip icon=${e}
      ><div style="display: flex;">
        <ix-icon name="${e}" size="16"></ix-icon></div
    ></ix-chip>`,args:{icon:"info"}},o={name:"Overview · design reference (all variants)",parameters:{layout:"fullscreen",docs:{description:{story:"Default chip (no `variant`), all predefined variants (filled + outline), closable and icon combinations, tooltips, inactive, centered layout, accessible icon name, custom close label, and long label. Replaces the temporary chip-examples preview routes."}}},args:{icon:t,defaultSlot:" "},render:()=>$()};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    defaultSlot: 'Example Text'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'info'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Example Text'
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'info',
    defaultSlot: 'Example Text'
  },
  render: args => {
    const container = genericRender('ix-chip', args);
    const ixChip = container.querySelector('ix-chip')!;
    ixChip.style.width = '5rem';
    return container;
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSlot: 'Example Text'
  },
  render: args => {
    const container = genericRender('ix-chip', args);
    const ixChip = container.querySelector('ix-chip')!;
    ixChip.style.width = '5rem';
    return container;
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: ({
    icon
  }) => {
    return html\`<ix-chip icon=\${icon}
      ><div style="display: flex;">
        <ix-icon name="\${icon}" size="16"></ix-icon></div
    ></ix-chip>\`;
  },
  args: {
    icon: 'info'
  }
}`,...x.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Overview · design reference (all variants)',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default chip (no \`variant\`), all predefined variants (filled + outline), closable and icon combinations, tooltips, inactive, centered layout, accessible icon name, custom close label, and long label. Replaces the temporary chip-examples preview routes.'
      }
    }
  },
  args: {
    icon: CHIP_MATRIX_ICON,
    defaultSlot: ' '
  },
  render: () => chipMatrixOverview()
}`,...o.parameters?.docs?.source},description:{story:"Full variant matrix for UX / QA",...o.parameters?.docs?.description}}};const C=["With_Icon_and_Text","With_Icon_only","With_Text_only","With_Icon_and_Text_Ellipsis","With_Text_only_Ellipsis","With_Icon_and_Element","Overview_design_reference"];export{o as Overview_design_reference,x as With_Icon_and_Element,s as With_Icon_and_Text,h as With_Icon_and_Text_Ellipsis,l as With_Icon_only,p as With_Text_only,m as With_Text_only_Ellipsis,C as __namedExportsOrder,S as default};
