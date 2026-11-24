import{s as d,h as e}from"./stencil-render-CqJWeRgr.js";import{m as i}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const m={title:"Example/Dropdown",tags:[],render:d(o=>e("div",null,e("ix-button",{id:"dropdown-trigger"},"Open dropdown"),e("ix-dropdown",{...o},e("ix-dropdown-item",{label:"First item"}),e("ix-dropdown-item",{label:"Second item"})))),argTypes:i("ix-dropdown")},r={args:{show:!0,trigger:"dropdown-trigger"}},t={render:d(o=>e("div",null,e("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"20rem",border:"1px dashed var(--theme-color-soft-bdr)"},onContextMenu:n=>{n.preventDefault(),n.currentTarget.nextElementSibling.showAt(n.clientX,n.clientY)}},"Right-click in this area"),e("ix-dropdown",{...o,role:"menu"},e("ix-dropdown-item",{label:"Copy"}),e("ix-dropdown-item",{label:"Paste"}),e("ix-dropdown-item",{label:"Delete"})))),args:{}},c=["Default","ContextMenu"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    show: true,
    trigger: 'dropdown-trigger'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: stencil(args => <div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '20rem',
      border: '1px dashed var(--theme-color-soft-bdr)'
    }} onContextMenu={(event: MouseEvent) => {
      event.preventDefault();
      const dropdown = (event.currentTarget as HTMLElement).nextElementSibling as HTMLIxDropdownElement;
      dropdown.showAt(event.clientX, event.clientY);
    }}>
        Right-click in this area
      </div>
      <ix-dropdown {...args} role="menu">
        <ix-dropdown-item label="Copy"></ix-dropdown-item>
        <ix-dropdown-item label="Paste"></ix-dropdown-item>
        <ix-dropdown-item label="Delete"></ix-dropdown-item>
      </ix-dropdown>
    </div>),
  args: {}
}`,...t.parameters?.docs?.source}}};export{t as ContextMenu,r as Default,c as __namedExportsOrder,m as default};
