import{x as t}from"./iframe-C2tqSE8x.js";import{m as i}from"./generic-render-CsqnySBY.js";import"./sample-ST_d4yt9.js";const o={title:"Example/ApplicationMenu",tags:[],render:m=>t`<ix-menu expand="${m.expand}">
      <ix-menu-item home icon="home">Home</ix-menu-item>
      <ix-menu-item icon="globe">Item 1</ix-menu-item>
      <ix-menu-category label="Top level Category" icon="rocket">
        <ix-menu-item icon="globe">Item 2</ix-menu-item>
        <ix-menu-item active="${m.active}" icon="globe">Item 3</ix-menu-item>
      </ix-menu-category>
    </ix-menu>`,argTypes:i("ix-menu"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev"}}},e={args:{expand:!0,active:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    expand: true,
    active: false
  }
}`,...e.parameters?.docs?.source}}};const s=["Default"];export{e as Default,s as __namedExportsOrder,o as default};
