import{x as c,B as O}from"./lit-element-f36cbe21.js";import{i as k}from"./icon-fda15462.js";import{e as D}from"./introduction-7f06bb29.js";import"./sample-cfb362e2.js";var m;(function(n){n.EQUAL="Equal",n.NOT_EQUAL="Not equal"})(m||(m={}));var f;(function(n){n.None="none",n.Info="info",n.Warning="warning",n.Alarm="alarm",n.Primary="primary"})(f||(f={}));var b;(function(n){n.SELECT_FILE="SELECT_FILE",n.LOADING="LOADING",n.UPLOAD_FAILED="UPLOAD_FAILED",n.UPLOAD_SUCCESSED="UPLOAD_SUCCESSED"})(b||(b={}));class l{constructor(){this.listeners=[],this.listenersOncer=[],this.on=e=>(this.listeners.push(e),{dispose:()=>this.off(e)}),this.once=e=>{this.listenersOncer.push(e)},this.off=e=>{const t=this.listeners.indexOf(e);t>-1&&this.listeners.splice(t,1)},this.emit=e=>{if(this.listeners.forEach(t=>t(e)),this.listenersOncer.length>0){const t=this.listenersOncer;this.listenersOncer=[],t.forEach(o=>o(e))}},this.pipe=e=>this.on(t=>e.emit(t))}}class T{async attachView(e,t){var o;return((o=t==null?void 0:t.parentElement)!==null&&o!==void 0?o:document.body).appendChild(e),e}async removeView(e){e.remove()}}const C=new T;let A=C;const _=()=>A,x=()=>C;function S(n,e){const t=e.ariaDescribedby,o=e.ariaLabelledby;delete e.ariaDescribedby,delete e.ariaLabelledby,t&&n.setAttribute("aria-describedby",t),o&&n.setAttribute("aria-labelledby",o)}function V(n){return n.closest("ix-modal")}function $(n,e){const t=V(n);if(t){t.dismissModal(e);return}}async function I(n){const e=_();let t;const o=new l,i=new l;if(typeof n.content=="string"){const s=document.createElement("ix-modal");s.innerText=n.content,t=await x().attachView(s)}if(n.content instanceof HTMLElement&&n.content.tagName!=="IX-MODAL"){const s=document.createElement("ix-modal");s.appendChild(n.content),t=await x().attachView(s)}return t||(t=await e.attachView(n.content)),S(t,n),Object.assign(t,n),await t.showModal(),t.addEventListener("dialogClose",async({detail:s})=>{o.emit(s),await e.removeView(t)}),t.addEventListener("dialogDismiss",async({detail:s})=>{i.emit(s),await e.removeView(t)}),requestAnimationFrame(()=>{const s=t.querySelector("[autofocus],[auto-focus]");s&&s.focus()}),{htmlElement:t,onClose:o,onDismiss:i}}class P{get themeChanged(){return this._themeChanged}hasVariantSuffix(e){return e.endsWith(this.suffixDark)||e.endsWith(this.suffixLight)}isThemeClass(e){return e.startsWith(this.prefixTheme)&&this.hasVariantSuffix(e)}setTheme(e,t=!1){if(!this.isThemeClass(e)&&t===!1)throw Error(`Provided theme name ${e} does not match our naming conventions. (theme-<name>-(dark,light))`);if(t){const o=p();this.replaceBodyThemeClass(e),this.setVariant(o);return}this.replaceBodyThemeClass(e)}replaceBodyThemeClass(e){const t=[];document.body.classList.forEach(o=>{this.isThemeClass(o)&&t.push(o)}),document.body.classList.remove(...t),document.body.classList.add(e)}toggleMode(){const e=[];if(document.body.classList.forEach(t=>{this.isThemeClass(t)&&e.push(t)}),e.length===0){document.body.classList.add(this.getOppositeMode(this.defaultTheme));return}e.forEach(t=>{document.body.classList.replace(t,this.getOppositeMode(t))})}getCurrentTheme(){var e;return(e=Array.from(document.body.classList).find(t=>this.isThemeClass(t)))!==null&&e!==void 0?e:`theme-${window.getComputedStyle(document.body).getPropertyValue("--ix-theme-name")}`}setVariant(e=p()){const t=this.getCurrentTheme();document.body.classList.remove(t),t.endsWith(this.suffixDark)&&document.body.classList.add(t.replace(/-dark$/g,`-${e}`)),t.endsWith(this.suffixLight)&&document.body.classList.add(t.replace(/-light$/g,`-${e}`))}getOppositeMode(e){return e.endsWith(this.suffixDark)?e.replace(/-dark$/g,this.suffixLight):e.endsWith(this.suffixLight)?e.replace(/-light$/g,this.suffixDark):""}handleMutations(e){return e.forEach(t=>{const{target:o}=t;o.classList.forEach(i=>{var s;this.isThemeClass(i)&&!(!((s=t.oldValue)===null||s===void 0)&&s.includes(i))&&this._themeChanged.emit(i)})})}registerMutationObserver(){if(!(typeof window>"u")){if(!("MutationObserver"in window)){console.warn("ThemeSwitcher not supported by your browser. Missing MutationObserver API");return}this.mutationObserver=new MutationObserver(e=>{this.handleMutations(e)}),this.mutationObserver.observe(document.body,{attributeFilter:["class"],attributeOldValue:!0})}}constructor(){this.prefixTheme="theme-",this.suffixLight="-light",this.suffixDark="-dark",this.defaultTheme="theme-classic-dark",this._themeChanged=new l,this.registerMutationObserver()}}const p=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";new P;var W=Object.defineProperty,q=(n,e)=>{for(var t in e)W(n,t,{get:e[t],enumerable:!0})},U={};q(U,{err:()=>M,map:()=>B,ok:()=>u,unwrap:()=>H,unwrapErr:()=>F});var u=n=>({isOk:!0,isErr:!1,value:n}),M=n=>({isOk:!1,isErr:!0,value:n});function B(n,e){if(n.isOk){const t=e(n.value);return t instanceof Promise?t.then(o=>u(o)):u(t)}if(n.isErr){const t=n.value;return M(t)}throw"should never get here"}var H=n=>{if(n.isOk)return n.value;throw n.value},F=n=>{if(n.isErr)return n.value;throw n.value};const J={title:"Example/Modal",tags:[],render:n=>c`
      <!-- class="visible" is only needed during storybook development  -->
      <ix-modal class="visible">
        <ix-modal-header icon=${n.icon}>Modal Header</ix-modal-header>
        <ix-modal-content>Content</ix-modal-content>
        <ix-modal-footer>
          <ix-button outline>Close</ix-button>
          <ix-button>Okay</ix-button>
        </ix-modal-footer>
      </ix-modal>
    `,argTypes:{icon:k("Header icon",!0)},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=605-9072&m=dev"}}},a={args:{}},r=new Map,d={beforeEach:n=>()=>{var e;r.has(n.id)&&((e=r.get(n.id))==null||e.remove(),r.delete(n.id))},render:(n,e)=>{const t=()=>{var s;const o=r.has(e.id),i=r.get(e.id)??document.createElement("ix-modal");O(c`
          <ix-modal-header icon=${n.icon}>Modal Header</ix-modal-header>
          <ix-modal-content>Content</ix-modal-content>
          <ix-modal-footer>
            <ix-button outline>Close</ix-button>
            <ix-button autofocus>Okay</ix-button>
          </ix-modal-footer>
        `,i),o||(I({content:i}).then(h=>{h.onClose.once(()=>r.delete(e.id)),h.onDismiss.once(()=>r.delete(e.id))}),(s=i.querySelector("ix-button[autofocus]"))==null||s.addEventListener("click",()=>$(i)),r.set(e.id,i))};return setTimeout(t,250),c`
      <div>
        <ix-button @click=${t}>Show Modal</ix-button>
        <br />
        <h2>Just some background noise, to see the backdrop:</h2>
        <img src=${D} style="width: 50vw" />
      </div>
    `}};var g,v,w;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(w=(v=a.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,E,L;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const R=["Primary","ShowFunction"];export{a as Primary,d as ShowFunction,R as __namedExportsOrder,J as default};
