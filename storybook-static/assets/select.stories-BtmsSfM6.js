import{m as o,g as m}from"./generic-render-Dg1fV67N.js";import{x as d}from"./iframe-XqzYRgP7.js";import"./sample-CrjnuCO3.js";const p={title:"Example/Select",tags:[],render:e=>m("ix-select",e),argTypes:o("ix-select"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=42365-175539&m=dev"}}},t={args:{}},l={render:({value:e,editable:r,allowClear:s,disabled:n})=>d` <ix-select
      value=${e}
      ?editable=${r}
      ?allow-clear=${s}
      disabled=${n}
    >
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>`,args:{value:"Administrator",editable:!0,allowClear:!0,disabled:!1}},a={render:({editable:e,disabled:r,dropdownWidth:s,dropdownMaxWidth:n})=>d` <ix-select
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
    </ix-select>`,args:{editable:!0,disabled:!1,dropdownWidth:"35rem",dropdownMaxWidth:"25rem"}},i={args:{required:!0,label:"Required"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'Required'
  }
}`,...i.parameters?.docs?.source}}};const b=["Default","editableSelect","editable_with_dropdown_width","Required"];export{t as Default,i as Required,b as __namedExportsOrder,p as default,l as editableSelect,a as editable_with_dropdown_width};
