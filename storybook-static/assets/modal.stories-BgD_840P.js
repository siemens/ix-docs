import{x as s,B as m,s as l,d as u}from"./iframe-BNkcxchC.js";import{i as x}from"./icon-C4UgCj5Y.js";import{e as h}from"./introduction-Bi7mdMH0.js";import"./sample-ST_d4yt9.js";const w={title:"Example/Modal",tags:[],render:o=>s`
      <!-- class="visible" is only needed during storybook development  -->
      <ix-modal class="visible">
        <ix-modal-header icon=${o.icon}>Modal Header</ix-modal-header>
        <ix-modal-content>Content</ix-modal-content>
        <ix-modal-footer>
          <ix-button outline>Close</ix-button>
          <ix-button>Okay</ix-button>
        </ix-modal-footer>
      </ix-modal>
    `,argTypes:{icon:x("Header icon",!0)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=605-9072&m=dev"}}},i={args:{}},e=new Map,r={beforeEach:o=>()=>{e.has(o.id)&&(e.get(o.id)?.remove(),e.delete(o.id))},render:(o,t)=>{const a=()=>{const c=e.has(t.id),n=e.get(t.id)??document.createElement("ix-modal");m(s`
          <ix-modal-header icon=${o.icon}>Modal Header</ix-modal-header>
          <ix-modal-content>Content</ix-modal-content>
          <ix-modal-footer>
            <ix-button outline>Close</ix-button>
            <ix-button autofocus>Okay</ix-button>
          </ix-modal-footer>
        `,n),c||(l({content:n}).then(d=>{d.onClose.once(()=>e.delete(t.id)),d.onDismiss.once(()=>e.delete(t.id))}),n.querySelector("ix-button[autofocus]")?.addEventListener("click",()=>u(n)),e.set(t.id,n))};return setTimeout(a,250),s`
      <div>
        <ix-button @click=${a}>Show Modal</ix-button>
        <br />
        <h2>Just some background noise, to see the backdrop:</h2>
        <img src=${h} style="width: 50vw" />
      </div>
    `}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const M=["Primary","ShowFunction"];export{i as Primary,r as ShowFunction,M as __namedExportsOrder,w as default};
