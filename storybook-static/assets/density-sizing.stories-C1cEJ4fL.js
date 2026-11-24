import{s as o,h as e}from"./stencil-render-CqJWeRgr.js";const x=["--si-sys-sizing-size-80","--si-sys-sizing-spacing-x-40","--si-sys-sizing-icon-md"],g={display:"flex",flexDirection:"column",gap:"0.75rem",padding:"1rem",border:"1px dashed var(--si-sys-color-border-neutral)",borderRadius:"4px"};function h(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"0.25rem"}},x.map(t=>e("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},e("div",{class:"probe","data-token":t,style:{width:`var(${t})`,height:"0.5rem",background:"var(--si-sys-color-background-accent)"}}),e("ix-typography",{format:"code",class:"probe-label"},t))))}function n(){return e("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},e("ix-button",null,"Button"),e("ix-button",{variant:"secondary",icon:"plus"},"Add"),e("ix-icon-button",{icon:"cogwheel","aria-label":"Settings"}),e("ix-avatar",{initials:"IX"})),e("ix-input",{label:"Input",placeholder:"Placeholder"}),e("ix-checkbox",{label:"Checkbox"}),e(h,null))}function i(t,s){return e("div",{style:g,"data-ix-density":t.density,"data-ix-sizing":t.sizing},e("ix-typography",{format:"h5",bold:!0},t.title),s)}function c(t){return s=>{const p=t(s);return requestAnimationFrame(()=>{p.querySelectorAll(".probe").forEach(m=>{const y=m.nextElementSibling;if(y){const u=m.getBoundingClientRect().width;y.textContent=`${m.dataset.token}: ${u}px`}})}),p}}const f={title:"Example/Density and Sizing",tags:[]},a={render:c(o(()=>e("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"}},e(i,{title:'data-ix-density="default"',density:"default"},e(n,null)),e(i,{title:'data-ix-density="compact"',density:"compact"},e(n,null)))))},l={render:c(o(()=>e(i,{title:'data-ix-density="compact"',density:"compact"},e(n,null),e(i,{title:'data-ix-density="default" (nested)',density:"default"},e(n,null),e(i,{title:'data-ix-density="compact" (nested)',density:"compact"},e(n,null))))))},r={globals:{ixSizing:"px"},argTypes:{htmlDensity:{table:{disable:!0}},htmlSizing:{table:{disable:!0}}},render:c(t=>o(()=>e("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"}},e(i,{title:"px (default)"},e(n,null)),e(i,{title:'data-ix-sizing="rem"',sizing:"rem"},e(n,null)),e(i,{title:'data-ix-sizing="rem" + data-ix-density="compact"',sizing:"rem",density:"compact"},e(n,null))))(t))},d={args:{htmlDensity:"compact",htmlSizing:"rem"},argTypes:{htmlDensity:{name:"<html> data-ix-density",control:{type:"inline-radio"},options:["default","compact"]},htmlSizing:{name:"<html> data-ix-sizing",control:{type:"inline-radio"},options:["px","rem"]}},render:c(t=>{const s=document.documentElement;return s.setAttribute("data-ix-density",t.htmlDensity),t.htmlSizing==="rem"?s.setAttribute("data-ix-sizing","rem"):s.removeAttribute("data-ix-sizing"),o(()=>e("div",{style:g},e("ix-typography",{format:"h5",bold:!0},`<html data-ix-density="${t.htmlDensity}"${t.htmlSizing==="rem"?' data-ix-sizing="rem"':""}>`),e(n,null),e("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"}},e(i,{title:'data-ix-density="default" (nested)',density:"default"},e(n,null)),e(i,{title:'data-ix-density="compact" (nested)',density:"compact"},e(n,null)),e(i,{title:'data-ix-sizing="rem" (nested)',sizing:"rem"},e(n,null)))))(t)})},z=["ScopedDensity","NestedDensity","RemSizing","HtmlLevel"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: withMeasurements(stencil(() => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  }}>
        <Scope title='data-ix-density="default"' density="default">
          <Sample />
        </Scope>
        <Scope title='data-ix-density="compact"' density="compact">
          <Sample />
        </Scope>
      </div>))
}`,...a.parameters?.docs?.source},description:{story:"`data-ix-density` can be set on any element. All descendants use the\ndensity tokens of the closest `data-ix-density` ancestor.",...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: withMeasurements(stencil(() => <Scope title='data-ix-density="compact"' density="compact">
        <Sample />
        <Scope title='data-ix-density="default" (nested)' density="default">
          <Sample />
          <Scope title='data-ix-density="compact" (nested)' density="compact">
            <Sample />
          </Scope>
        </Scope>
      </Scope>))
}`,...l.parameters?.docs?.source},description:{story:"Density scopes can be nested. The closest `data-ix-density` wins.",...l.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  globals: {
    ixSizing: 'px'
  },
  argTypes: {
    htmlDensity: {
      table: {
        disable: true
      }
    },
    htmlSizing: {
      table: {
        disable: true
      }
    }
  },
  render: withMeasurements(args => {
    return stencil(() => <div style={{
      display: 'flex',
      gap: '1rem',
      alignItems: 'flex-start'
    }}>
        <Scope title="px (default)">
          <Sample />
        </Scope>
        <Scope title='data-ix-sizing="rem"' sizing="rem">
          <Sample />
        </Scope>
        <Scope title='data-ix-sizing="rem" + data-ix-density="compact"' sizing="rem" density="compact">
          <Sample />
        </Scope>
      </div>)(args);
  })
}`,...r.parameters?.docs?.source},description:{story:'Size and spacing tokens use `px` by default. `data-ix-sizing="rem"`\nswitches them to `rem`. Change the base font size in the toolbar to see\nthat only the `rem` scope scales with the root font size. Icon and avatar\ntokens always use `rem`. The root sizing is pinned to `px` so the first\nscope keeps showing the `px` baseline.',...r.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    htmlDensity: 'compact',
    htmlSizing: 'rem'
  },
  argTypes: {
    htmlDensity: {
      name: '<html> data-ix-density',
      control: {
        type: 'inline-radio'
      },
      options: ['default', 'compact']
    },
    htmlSizing: {
      name: '<html> data-ix-sizing',
      control: {
        type: 'inline-radio'
      },
      options: ['px', 'rem']
    }
  },
  render: withMeasurements(args => {
    const html = document.documentElement;
    html.setAttribute('data-ix-density', args.htmlDensity);
    if (args.htmlSizing === 'rem') {
      html.setAttribute('data-ix-sizing', 'rem');
    } else {
      html.removeAttribute('data-ix-sizing');
    }
    return stencil(() => <div style={scopeStyle}>
        <ix-typography format="h5" bold>
          {\`<html data-ix-density="\${args.htmlDensity}"\${args.htmlSizing === 'rem' ? ' data-ix-sizing="rem"' : ''}>\`}
        </ix-typography>
        <Sample />
        <div style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start'
      }}>
          <Scope title='data-ix-density="default" (nested)' density="default">
            <Sample />
          </Scope>
          <Scope title='data-ix-density="compact" (nested)' density="compact">
            <Sample />
          </Scope>
          <Scope title='data-ix-sizing="rem" (nested)' sizing="rem">
            <Sample />
          </Scope>
        </div>
      </div>)(args);
  })
}`,...d.parameters?.docs?.source},description:{story:'Density and sizing set on the `<html>` element apply to the whole page.\nNested elements can still override the density. A nested density inside\na `data-ix-sizing="rem"` scope keeps `rem` sizing.',...d.parameters?.docs?.description}}};export{d as HtmlLevel,l as NestedDensity,r as RemSizing,a as ScopedDensity,z as __namedExportsOrder,f as default};
