import{x as t}from"./iframe-XqzYRgP7.js";import{m as a}from"./generic-render-Dg1fV67N.js";import"./sample-CrjnuCO3.js";const d={title:"Example/Drawer",tags:[],render:e=>{const o=()=>{e.show=!e.show;const r=document.querySelector("ix-drawer");r&&(r.show=e.show)};return t` <ix-drawer
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
      <ix-button @click=${o}>Toggle</ix-button>`},argTypes:a("ix-drawer"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=8033-151366&m=dev"}}},s={args:{closeOnClickOutside:!0,show:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnClickOutside: true,
    show: true
  }
}`,...s.parameters?.docs?.source}}};const l=["Default"];export{s as Default,l as __namedExportsOrder,d as default};
