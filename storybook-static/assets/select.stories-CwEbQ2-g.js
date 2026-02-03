import{m as b,g as c}from"./generic-render-Ck1ibjH2.js";import{x as u}from"./iframe-D1EC8WSq.js";import"./sample-CrjnuCO3.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Example/Select",tags:[],render:e=>c("ix-select",e),argTypes:b("ix-select"),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=42365-175539&m=dev"}}},n={args:{}},i={render:({value:e,editable:l,allowClear:t,disabled:a,mode:d})=>u` <ix-select
      value=${e}
      mode=${d}
      ?editable=${l}
      ?allow-clear=${t}
      disabled=${a}
    >
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>`,args:{value:"Administrator",editable:!0,allowClear:!0,disabled:!1,mode:"single"}},r={render:({editable:e,disabled:l,dropdownWidth:t,dropdownMaxWidth:a})=>u` <ix-select
      editable=${e}
      disabled=${l}
      dropdown-width=${t}
      dropdown-max-width=${a}
    >
      <ix-select-item
        label="this is an example for a very long selection option. this is an example for a very long selection option."
        value="1"
      ></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>`,args:{editable:!0,disabled:!1,dropdownWidth:"35rem",dropdownMaxWidth:"25rem"}},s={args:{required:!0,label:"Required"}},o={render:e=>{const l=c("ix-select",e,["value"]),t=l.querySelector("ix-select");return[{label:"Item 1",value:"1"},{label:"Item 2",value:"2"},{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"}].forEach(({label:d,value:p})=>{const m=document.createElement("ix-select-item");m.label=d,m.value=p,t.appendChild(m)}),t.value=e.value,l},argTypes:{value:{control:"object",description:"Selected values in multiple mode"}},args:{mode:"multiple",allowClear:!0,value:["1","2","3","4","5"]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ({
    value,
    editable,
    allowClear,
    disabled,
    mode
  }) => {
    return html\` <ix-select
      value=\${value}
      mode=\${mode}
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
    disabled: false,
    mode: 'single'
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'Required'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = genericRender('ix-select', args, ['value']);
    const select = container.querySelector('ix-select')!;
    const items = [{
      label: 'Item 1',
      value: '1'
    }, {
      label: 'Item 2',
      value: '2'
    }, {
      label: 'Item 3',
      value: '3'
    }, {
      label: 'Item 4',
      value: '4'
    }, {
      label: 'Item 5',
      value: '5'
    }];
    items.forEach(({
      label,
      value
    }) => {
      const item = document.createElement('ix-select-item');
      item.label = label;
      item.value = value;
      select.appendChild(item);
    });
    select.value = args.value;
    return container;
  },
  argTypes: {
    value: {
      control: 'object',
      description: 'Selected values in multiple mode'
    }
  },
  args: {
    mode: 'multiple',
    allowClear: true,
    value: ['1', '2', '3', '4', '5']
  }
}`,...o.parameters?.docs?.source}}};const I=["Default","editableSelect","editable_with_dropdown_width","Required","multiSelect"];export{n as Default,s as Required,I as __namedExportsOrder,h as default,i as editableSelect,r as editable_with_dropdown_width,o as multiSelect};
