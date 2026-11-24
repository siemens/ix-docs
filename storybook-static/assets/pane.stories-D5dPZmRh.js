import{s as h,h as e}from"./stencil-render-CqJWeRgr.js";import{m as d,g as m}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const g={margin:"0 0 0.75rem",padding:"0.75rem 1rem",borderLeft:"3px solid var(--theme-color-primary, #00feed)",background:"var(--theme-color-ghost--hover, rgba(255,255,255,0.04))",fontSize:"0.875rem",lineHeight:"1.45"};function f(n){return n.nestInApplication?n.forceBreakpoint==="none"?"Nested, no force: panes follow the browser width (same as standalone).":n.forceBreakpoint==="sm"?"forceBreakpoint=sm: panes stay in mobile layout even on a wide viewport.":`forceBreakpoint=${n.forceBreakpoint}: panes stay in desktop layout even when the viewport is narrow.`:"Standalone: panes follow the browser width. Narrow → mobile overlays; wide → side panes."}const y=n=>[e("ix-pane",{heading:"Navigation",slot:"left",size:"240px",expanded:!0},"Navigation pane"),e("div",{slot:"content"},e("div",{style:g},e("p",{style:{margin:"0 0 0.5rem",fontWeight:"600"}},"How to check"),e("ol",{style:{margin:"0 0 0.75rem",paddingLeft:"1.25rem"}},e("li",null,"Open the ",e("strong",null,"Controls")," panel at the bottom of Storybook (toolbar “Controls”, or press ",e("strong",null,"C"),")."),e("li",null,"Switch mode there:",e("ul",{style:{margin:"0.35rem 0 0",paddingLeft:"1.25rem"}},e("li",null,e("strong",null,"nestInApplication")," — checkbox (on = inside ix-application, off = standalone pane layout)."),e("li",null,e("strong",null,"forceBreakpoint")," — dropdown ",e("code",null,"none")," /"," ",e("code",null,"sm")," / ",e("code",null,"md")," / ",e("code",null,"lg")," (only applies when nested)."))),e("li",null,"Resize via the Storybook viewport toolbar or the browser window across the sm breakpoint (~48em / 768px)."),e("li",null,"Compare pane chrome: desktop = side panes beside content; mobile = top/bottom overlays. The ",e("strong",null,"Expected")," line below updates with your Controls.")),e("p",{style:{margin:"0"}},e("strong",null,"Expected: "),f(n)))),e("ix-pane",{heading:"Change log",slot:"right",size:"320px",expanded:!0},"Change log content")],b={title:"Example/Pane",tags:[],render:n=>m("ix-pane",n),argTypes:d("ix-pane",{})},i={args:{heading:"Headline text",icon:"alarm-bell-cancelled"}},s={args:{},render:n=>{const t=m("ix-pane",n),o=t.querySelector("ix-pane"),a=document.createElement("ix-button");return a.setAttribute("slot","header"),a.textContent="Demo",o.appendChild(a),t}},l={args:{heading:"Headline text",icon:"alarm-bell-cancelled",variant:"floating"}},r={parameters:{docs:{description:{story:"Shows how panes follow application layout versus the viewport. Open **Controls** (bottom panel): toggle **nestInApplication**, set **forceBreakpoint** (`none` / `sm` / `md` / `lg`), then resize the viewport. On-canvas guidance shows the expected behaviour for the current selection."}}},args:{nestInApplication:!0,forceBreakpoint:"lg",variant:"inline",layout:"full-vertical"},argTypes:{...d("ix-pane-layout"),nestInApplication:{control:{type:"boolean"},description:"Wrap panes in ix-application (nested layout context). Off = standalone."},forceBreakpoint:{control:{type:"select"},options:["none","sm","md","lg"],description:"ix-application forceBreakpoint. Ignored when nestInApplication is off."}},render:h(n=>{const{nestInApplication:t,forceBreakpoint:o,...a}=n,u={nestInApplication:t,forceBreakpoint:o},c=e("ix-pane-layout",{...a,style:{height:"20rem"}},y(u));if(!t)return e("div",{style:{height:"24rem"}},c);const p=o==="none"?void 0:o;return e("ix-application",{forceBreakpoint:p,style:{height:"32rem"}},e("ix-application-header",{name:"Pane layout breakpoint",slot:"application-header"}),e("ix-menu",{slot:"menu"},e("ix-menu-item",{home:!0,icon:"home",active:!0},"Home"),e("ix-menu-item",{icon:"alarm-bell"},"Alarms")),e("ix-content",null,e("ix-content-header",{headerTitle:p?`forceBreakpoint=${p}`:"Nested, viewport-driven",slot:"header"}),c))})},k=["Default","HeaderSlot","Floating","ApplicationLayout"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Headline text',
    icon: 'alarm-bell-cancelled'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const container = genericRender('ix-pane', args);
    const pane = container.querySelector('ix-pane')!;
    const button = document.createElement('ix-button');
    button.setAttribute('slot', 'header');
    button.textContent = 'Demo';
    pane.appendChild(button);
    return container;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Headline text',
    icon: 'alarm-bell-cancelled',
    variant: 'floating'
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Shows how panes follow application layout versus the viewport. Open **Controls** (bottom panel): toggle **nestInApplication**, set **forceBreakpoint** (\`none\` / \`sm\` / \`md\` / \`lg\`), then resize the viewport. On-canvas guidance shows the expected behaviour for the current selection.'
      }
    }
  },
  args: {
    nestInApplication: true,
    forceBreakpoint: 'lg',
    variant: 'inline',
    layout: 'full-vertical'
  },
  argTypes: {
    ...makeArgTypes<Partial<ArgTypes<PaneLayout>>>('ix-pane-layout'),
    nestInApplication: {
      control: {
        type: 'boolean'
      },
      description: 'Wrap panes in ix-application (nested layout context). Off = standalone.'
    },
    forceBreakpoint: {
      control: {
        type: 'select'
      },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'ix-application forceBreakpoint. Ignored when nestInApplication is off.'
    }
  },
  render: stencil((args: LayoutDemoArgs) => {
    const {
      nestInApplication,
      forceBreakpoint,
      ...paneLayoutArgs
    } = args;
    const demoArgs = {
      nestInApplication,
      forceBreakpoint
    };
    const paneLayout = <ix-pane-layout {...paneLayoutArgs} style={{
      height: '20rem'
    }}>
        {paneLayoutChildren(demoArgs)}
      </ix-pane-layout>;
    if (!nestInApplication) {
      return <div style={{
        height: '24rem'
      }}>{paneLayout}</div>;
    }
    const forced = forceBreakpoint === 'none' ? undefined : forceBreakpoint;
    return <ix-application forceBreakpoint={forced} style={{
      height: '32rem'
    }}>
        <ix-application-header name="Pane layout breakpoint" slot="application-header"></ix-application-header>
        <ix-menu slot="menu">
          <ix-menu-item home icon="home" active>
            Home
          </ix-menu-item>
          <ix-menu-item icon="alarm-bell">Alarms</ix-menu-item>
        </ix-menu>
        <ix-content>
          <ix-content-header headerTitle={forced ? \`forceBreakpoint=\${forced}\` : 'Nested, viewport-driven'} slot="header"></ix-content-header>
          {paneLayout}
        </ix-content>
      </ix-application>;
  })
}`,...r.parameters?.docs?.source},description:{story:`Demonstrates how panes follow application layout vs the viewport.
Use Controls to set nesting and forceBreakpoint, then resize the viewport.`,...r.parameters?.docs?.description}}};export{r as ApplicationLayout,i as Default,l as Floating,s as HeaderSlot,k as __namedExportsOrder,b as default};
