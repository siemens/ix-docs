import{s,h as l}from"./stencil-render-CqJWeRgr.js";import{x as r}from"./iframe-CLegjRT6.js";import{m as d}from"./generic-render-D6eVCH02.js";import"./preload-helper-PPVm8Dsz.js";import"./sample-QwvD4foy.js";const v={title:"Example/Content Header",render:s(o=>l("ix-content-header",{...o})),argTypes:d("ix-content-header"),parameters:{a11y:{test:"error"},docs:{description:{component:'`textOverflow="wrap"` is the default. Use `textOverflow="ellipsis"` to opt into visual single-line truncation. Ellipsis does not add a tooltip; use wrapping when the complete text must remain visible. Place `ix-button` or `ix-icon-button` in `slot="secondary-actions"` to collapse them into a vertical menu on small screens or when the actions exceed the header width. Default-slot actions remain visible and wrap if necessary. Use `ariaLabelMoreActions` to localize the menu trigger, and give icon-only actions an accessible name.'}}}},e={args:{headerSubtitle:"Updated moments ago",headerTitle:"Asset overview"}},i="Content title that demonstrates behavior when horizontal space is limited",a="Supporting context that demonstrates behavior when horizontal space is limited",t={render:()=>r`
    <div
      style="display: flex; flex-direction: column; gap: 2rem; max-width: 28rem;"
    >
      <section>
        <h3>Wrap (default)</h3>
        <ix-content-header
          header-title=${i}
          header-subtitle=${a}
        ></ix-content-header>
      </section>

      <section>
        <h3>Ellipsis</h3>
        <ix-content-header
          header-title=${i}
          header-subtitle=${a}
          text-overflow="ellipsis"
        ></ix-content-header>
      </section>
    </div>
  `},n={parameters:{docs:{description:{story:"Resize the browser or drag the container edge. Secondary actions collapse based on available space, including on large viewports; the primary action stays visible. Secondary actions hidden by CSS media queries are excluded from the overflow menu, and their visibility updates when the browser is resized. Long titles retain the selected text-overflow behavior, and the following content stays below the header."}}},render:()=>r`
    <div style="resize: horizontal; overflow: auto; max-width: 100%;">
      <ix-content-header
        has-back-button
        header-title="Production line overview"
        header-subtitle="Review the current configuration and production reports"
      >
        ${["Discard changes","Refresh data","Export production report","Import configuration","Manage permissions","View change history","Open settings"].map(o=>r`
            <ix-button slot="secondary-actions" variant="tertiary">
              ${o}
            </ix-button>
          `)}
        <ix-button variant="primary">Save changes</ix-button>
      </ix-content-header>
      <p>Page content follows the header without overlap.</p>
    </div>
  `},b=["Default","TextOverflow","ResponsiveActions"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    headerSubtitle: 'Updated moments ago',
    headerTitle: 'Asset overview'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div
      style="display: flex; flex-direction: column; gap: 2rem; max-width: 28rem;"
    >
      <section>
        <h3>Wrap (default)</h3>
        <ix-content-header
          header-title=\${title}
          header-subtitle=\${subtitle}
        ></ix-content-header>
      </section>

      <section>
        <h3>Ellipsis</h3>
        <ix-content-header
          header-title=\${title}
          header-subtitle=\${subtitle}
          text-overflow="ellipsis"
        ></ix-content-header>
      </section>
    </div>
  \`
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Resize the browser or drag the container edge. Secondary actions collapse based on available space, including on large viewports; the primary action stays visible. Secondary actions hidden by CSS media queries are excluded from the overflow menu, and their visibility updates when the browser is resized. Long titles retain the selected text-overflow behavior, and the following content stays below the header.'
      }
    }
  },
  render: () => html\`
    <div style="resize: horizontal; overflow: auto; max-width: 100%;">
      <ix-content-header
        has-back-button
        header-title="Production line overview"
        header-subtitle="Review the current configuration and production reports"
      >
        \${['Discard changes', 'Refresh data', 'Export production report', 'Import configuration', 'Manage permissions', 'View change history', 'Open settings'].map(label => html\`
            <ix-button slot="secondary-actions" variant="tertiary">
              \${label}
            </ix-button>
          \`)}
        <ix-button variant="primary">Save changes</ix-button>
      </ix-content-header>
      <p>Page content follows the header without overlap.</p>
    </div>
  \`
}`,...n.parameters?.docs?.source}}};export{e as Default,n as ResponsiveActions,t as TextOverflow,b as __namedExportsOrder,v as default};
