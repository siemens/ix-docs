import{g as l,m as d,b as u}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const g={title:"Example/Input",tags:[],render:n=>u("ix-input",n),argTypes:d("ix-input",{validation:{options:["default","info","warning","invalid","valid"],control:{type:"select"}}}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},a={args:{label:"Required",value:"",required:!0}},o={args:{label:"Required",value:"Test",required:!0},render:n=>{const r=l("ix-input",n),e=r.querySelector("ix-input"),t=document.createElement("ix-icon-button");return t.icon="search",t.slot="start",t.size="16",e.appendChild(t),r}},i={args:{label:"MinLength",minLength:3,maxLength:5,value:"1234567"}},c={args:{}},s={render:()=>{const n=document.createElement("div"),r=[document.createElement("ix-input"),document.createElement("ix-number-input"),document.createElement("ix-textarea")];for(const e of r){e.label=e.tagName.toLowerCase(),e.required=!0,e.setAttribute("value","42");const t=document.createElement("ix-button");t.type="button",t.textContent=`Clear ${e.label}`,t.addEventListener("click",()=>{e.clear()}),n.append(e,t)}return n}},x=["Required","Slotted","MinLength","ValidationState","ClearValidation"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    value: '',
    required: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required',
    value: 'Test',
    required: true
  },
  render: args => {
    const container = genericRender('ix-input', args);
    const input = container.querySelector('ix-input') as HTMLIxInputElement;
    const icon = document.createElement('ix-icon-button');
    icon.icon = 'search';
    icon.slot = 'start';
    icon.size = '16';
    input.appendChild(icon);
    return container;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'MinLength',
    minLength: 3,
    maxLength: 5,
    value: '1234567'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    const fields = [document.createElement('ix-input'), document.createElement('ix-number-input'), document.createElement('ix-textarea')];
    for (const field of fields) {
      field.label = field.tagName.toLowerCase();
      field.required = true;
      field.setAttribute('value', '42');
      const clearButton = document.createElement('ix-button');
      clearButton.type = 'button';
      clearButton.textContent = \`Clear \${field.label}\`;
      clearButton.addEventListener('click', () => void field.clear());
      container.append(field, clearButton);
    }
    return container;
  }
}`,...s.parameters?.docs?.source}}};export{s as ClearValidation,i as MinLength,a as Required,o as Slotted,c as ValidationState,x as __namedExportsOrder,g as default};
