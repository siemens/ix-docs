import{g as f,m as I}from"./generic-render-0222c656.js";import{x as $}from"./lit-element-f36cbe21.js";import"./sample-cfb362e2.js";const y={title:"Example/Select",tags:[],render:e=>f("ix-select",e),argTypes:I("ix-select"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=42365-175539&m=dev"}}},t={args:{}},l={render:({value:e,editable:r,allowClear:s,disabled:n})=>$` <ix-select
      value=${e}
      ?editable=${r}
      ?allow-clear=${s}
      disabled=${n}
    >
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>`,args:{value:"Administrator",editable:!0,allowClear:!0,disabled:!1}},a={render:({editable:e,disabled:r,dropdownWidth:s,dropdownMaxWidth:n})=>$` <ix-select
      editable=${e}
      disabled=${r}
      dropdown-width=${s}
      dropdown-max-width=${n}
    >
      <ix-select-item
        label="this is an example for a very long selection option. this is an example for a very long selection option."
        value="1"
      ></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>`,args:{editable:!0,disabled:!1,dropdownWidth:"35rem",dropdownMaxWidth:"25rem"}},i={args:{required:!0,label:"Required"}};var d,o,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var c,u,x;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    value,
    editable,
    allowClear,
    disabled
  }) => {
    return html\` <ix-select
      value=\${value}
      ?editable=\${editable}
      ?allow-clear=\${allowClear}
      disabled=\${disabled}
    >
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>\`;
  },
  args: {
    value: 'Administrator',
    editable: true,
    allowClear: true,
    disabled: false
  }
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var p,b,w;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    editable,
    disabled,
    dropdownWidth,
    dropdownMaxWidth
  }) => {
    return html\` <ix-select
      editable=\${editable}
      disabled=\${disabled}
      dropdown-width=\${dropdownWidth}
      dropdown-max-width=\${dropdownMaxWidth}
    >
      <ix-select-item
        label="this is an example for a very long selection option. this is an example for a very long selection option."
        value="1"
      ></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>\`;
  },
  args: {
    editable: true,
    disabled: false,
    dropdownWidth: '35rem',
    dropdownMaxWidth: '25rem'
  }
}`,...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,g,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'Required'
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const S=["Default","editableSelect","editable_with_dropdown_width","Required"];export{t as Default,i as Required,S as __namedExportsOrder,y as default,l as editableSelect,a as editable_with_dropdown_width};
