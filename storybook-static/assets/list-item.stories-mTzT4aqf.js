import{m as d,g as l}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const m=n=>{const i=l("ix-list-item",n,[],s=>{const e=s,o=document.createElement("div");o.slot="action";const t=document.createElement("ix-icon-button");t.icon="edit-document",t.variant="subtle-tertiary",t.setAttribute("aria-label","Edit item");const r=document.createElement("ix-icon-button");return r.icon="trashcan",r.variant="subtle-tertiary",r.setAttribute("aria-label","Delete item"),o.append(t,r),e.append(o),e.addEventListener("selectedChange",c=>{e.selected=c.detail}),e});return i.setAttribute("role","list"),i.setAttribute("aria-label","Standalone list item"),i},b={title:"Example/ListItem",tags:[],render:n=>m(n),argTypes:d("ix-list-item",{}),parameters:{a11y:{test:"error"}}},a={args:{checkbox:!0,description:"Updated 5 minutes ago",icon:"project",label:"Factory overview",previewWidth:"32rem"}},g=["Standalone"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    checkbox: true,
    description: 'Updated 5 minutes ago',
    icon: 'project',
    label: 'Factory overview',
    previewWidth: '32rem'
  }
}`,...a.parameters?.docs?.source}}};export{a as Standalone,g as __namedExportsOrder,b as default};
