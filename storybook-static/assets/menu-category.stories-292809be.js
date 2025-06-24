import{x as i}from"./lit-element-f36cbe21.js";import{m as r}from"./generic-render-0222c656.js";import"./sample-cfb362e2.js";const c={title:"Example/Menu/MenuCategory",tags:[],render:m=>i`<ix-menu expand="${m.expand}">
      <ix-menu-item home icon="home">Home</ix-menu-item>
      <ix-menu-item icon="globe">Item 1</ix-menu-item>
      <ix-menu-category label="Top level Category" icon="rocket">
        <ix-menu-item icon="globe">Item 2</ix-menu-item>
        <ix-menu-item active="${m.active}" icon="globe">Item 3</ix-menu-item>
      </ix-menu-category>
    </ix-menu>`,argTypes:r("ix-menu"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev"}}},e={args:{expand:!0,active:!1}};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    expand: true,
    active: false
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,c as default};
