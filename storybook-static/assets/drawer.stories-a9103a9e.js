import{x as n}from"./lit-element-f36cbe21.js";import{m as c}from"./generic-render-60971499.js";import"./sample-cfb362e2.js";const m={title:"Example/Drawer",tags:[],render:e=>{const i=()=>{e.show=!e.show;const r=document.querySelector("ix-drawer");r&&(r.show=e.show)};return n` <ix-drawer
        .closeOnClickOutside=${e.closeOnClickOutside}
        ?fullHeight=${!0}
        .show=${e.show}
        @drawerClose=${()=>{e.show=!1;const r=document.querySelector("ix-drawer");r&&(r.show=!1)}}
      >
        <div>
          <div>
            <ix-icon
              slot="input-start"
              name="success"
              color="color-success"
              size="16"
            />
            <span>dasda</span>
          </div>
        </div>
      </ix-drawer>
      <ix-button @click=${i}>Toggle</ix-button>`},argTypes:c("ix-drawer"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=8033-151366&m=dev"}}},s={args:{closeOnClickOutside:!0,show:!0}};var o,t,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    closeOnClickOutside: true,
    show: true
  }
}`,...(a=(t=s.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const w=["Default"];export{s as Default,w as __namedExportsOrder,m as default};
