import{x as a,B as m,s as l,d as u}from"./iframe-XqzYRgP7.js";import{i as x}from"./sample-CrjnuCO3.js";import{e as h}from"./introduction-Bi7mdMH0.js";function f(e,t=!1){let n=x;return t&&(n=["",...n]),{name:`${e}*`,control:{type:"select"},options:n}}const w={title:"Example/Modal",tags:[],render:e=>a`
      <!-- class="visible" is only needed during storybook development  -->
      <ix-modal class="visible">
        <ix-modal-header icon=${e.icon}>Modal Header</ix-modal-header>
        <ix-modal-content>Content</ix-modal-content>
        <ix-modal-footer>
          <ix-button outline>Close</ix-button>
          <ix-button>Okay</ix-button>
        </ix-modal-footer>
      </ix-modal>
    `,argTypes:{icon:f("Header icon",!0)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=605-9072&m=dev"}}},s={args:{}},o=new Map,r={beforeEach:e=>()=>{o.has(e.id)&&(o.get(e.id)?.remove(),o.delete(e.id))},render:(e,t)=>{const n=()=>{const c=o.has(t.id),i=o.get(t.id)??document.createElement("ix-modal");m(a`
          <ix-modal-header icon=${e.icon}>Modal Header</ix-modal-header>
          <ix-modal-content>Content</ix-modal-content>
          <ix-modal-footer>
            <ix-button outline>Close</ix-button>
            <ix-button autofocus>Okay</ix-button>
          </ix-modal-footer>
        `,i),c||(l({content:i}).then(d=>{d.onClose.once(()=>o.delete(t.id)),d.onDismiss.once(()=>o.delete(t.id))}),i.querySelector("ix-button[autofocus]")?.addEventListener("click",()=>u(i)),o.set(t.id,i))};return setTimeout(n,250),a`
      <div>
        <ix-button @click=${n}>Show Modal</ix-button>
        <br />
        <h2>Just some background noise, to see the backdrop:</h2>
        <img src=${h} style="width: 50vw" />
      </div>
    `}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  beforeEach: ctx => {
    return () => {
      if (refs.has(ctx.id)) {
        refs.get(ctx.id)?.remove();
        refs.delete(ctx.id);
      }
    };
  },
  render: (args, ctx) => {
    const show = () => {
      const isMounted = refs.has(ctx.id);
      const mount = refs.get(ctx.id) ?? document.createElement('ix-modal');
      render(html\`
          <ix-modal-header icon=\${args.icon}>Modal Header</ix-modal-header>
          <ix-modal-content>Content</ix-modal-content>
          <ix-modal-footer>
            <ix-button outline>Close</ix-button>
            <ix-button autofocus>Okay</ix-button>
          </ix-modal-footer>
        \`, mount);
      if (!isMounted) {
        showModal({
          content: mount
        }).then(p => {
          p.onClose.once(() => refs.delete(ctx.id));
          p.onDismiss.once(() => refs.delete(ctx.id));
        });
        mount.querySelector('ix-button[autofocus]')?.addEventListener('click', () => dismissModal(mount));
        refs.set(ctx.id, mount);
      }
    };
    setTimeout(show, 250);
    return html\`
      <div>
        <ix-button @click=\${show}>Show Modal</ix-button>
        <br />
        <h2>Just some background noise, to see the backdrop:</h2>
        <img src=\${exampleImage} style="width: 50vw" />
      </div>
    \`;
  }
}`,...r.parameters?.docs?.source}}};const M=["Primary","ShowFunction"];export{s as Primary,r as ShowFunction,M as __namedExportsOrder,w as default};
