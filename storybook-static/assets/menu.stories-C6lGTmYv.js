import{m as t}from"./generic-render-Ck1ibjH2.js";import{x as a}from"./iframe-D1EC8WSq.js";import"./sample-CrjnuCO3.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Example/Menu/Menu",tags:[],render:m=>a`<ix-menu expand="${m.expand}">
      <ix-menu-item home icon="home">Home</ix-menu-item>
      <ix-menu-item icon="globe">Item 1</ix-menu-item>
      <ix-menu-category label="Top level Category" icon="rocket">
        <ix-menu-item icon="globe">Item 2</ix-menu-item>
        <ix-menu-item icon="globe">Item 3</ix-menu-item>
      </ix-menu-category>
      <ix-menu-about></ix-menu-about>
      <ix-menu-settings></ix-menu-settings>
    </ix-menu>`,argTypes:t("ix-menu",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev"},a11y:{test:"error"}}},e={args:{expand:!0}},r={args:{expand:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    expand: true
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    expand: false
  }
}`,...r.parameters?.docs?.source}}};const p=["Default","Collapsed"];export{r as Collapsed,e as Default,p as __namedExportsOrder,u as default};
