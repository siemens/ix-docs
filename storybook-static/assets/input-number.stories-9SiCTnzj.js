import{m as l,g as c}from"./generic-render-B6oDlj6b.js";import{x as m}from"./iframe-Bi7vWXRH.js";import"./sample-CrjnuCO3.js";const v={title:"Example/NumberInput",tags:[],render:a=>c("ix-number-input",a),argTypes:l("ix-number-input",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},t={args:{}},n={render:({value:a,showStepperButtons:u})=>{let e=!1;return m`
      <ix-button @click=${()=>{e=!e;const p=document.getElementById("number-input-container");p&&(p.style.display=e?"block":"none")}}>
        ${e?"Remove":"Add"} Toggle number-input
      </ix-button>
      <div id="number-input-container" style="display: none">
        <ix-number-input
          style="width: 300px"
          .value=${a}
          ?show-stepper-buttons=${u}
        ></ix-number-input>
      </div>
    `},args:{value:0,showStepperButtons:!0}},r={args:{required:!0,label:"Required"}},s={args:{label:"Stepper",showStepperButtons:!0,step:3,max:10}},o={args:{label:"Stepper",showStepperButtons:!0,step:"1",value:1e3}},i={args:{label:"Stepper",showStepperButtons:!0,step:"1",value:.001}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: ({
    value,
    showStepperButtons
  }) => {
    let visible = false;
    const toggleVisibility = () => {
      visible = !visible;
      const numberInputContainer = document.getElementById('number-input-container');
      if (numberInputContainer) {
        numberInputContainer.style.display = visible ? 'block' : 'none';
      }
    };
    return html\`
      <ix-button @click=\${toggleVisibility}>
        \${visible ? 'Remove' : 'Add'} Toggle number-input
      </ix-button>
      <div id="number-input-container" style="display: none">
        <ix-number-input
          style="width: 300px"
          .value=\${value}
          ?show-stepper-buttons=\${showStepperButtons}
        ></ix-number-input>
      </div>
    \`;
  },
  args: {
    value: 0,
    showStepperButtons: true
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'Required'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Stepper',
    showStepperButtons: true,
    step: 3,
    max: 10
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Stepper',
    showStepperButtons: true,
    step: '1',
    value: 1e3
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Stepper',
    showStepperButtons: true,
    step: '1',
    value: 1e-3
  }
}`,...i.parameters?.docs?.source}}};const x=["Default","toggleNumberInput","Required","Step","ScientificNotationPositiveExponent","ScientificNotationNegativeExponent"];export{t as Default,r as Required,i as ScientificNotationNegativeExponent,o as ScientificNotationPositiveExponent,s as Step,x as __namedExportsOrder,v as default,n as toggleNumberInput};
