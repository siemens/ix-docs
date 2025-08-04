import{m as a,g as p}from"./generic-render-CsqnySBY.js";import{x as l}from"./iframe-C2tqSE8x.js";import"./sample-ST_d4yt9.js";const g={title:"Example/NumberInput",tags:[],render:i=>p("ix-number-input",i),argTypes:a("ix-number-input",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},n={args:{}},t={render:({value:i,showStepperButtons:u})=>{let e=!1;return l`
      <ix-button @click=${()=>{e=!e;const o=document.getElementById("number-input-container");o&&(o.style.display=e?"block":"none")}}>
        ${e?"Remove":"Add"} Toggle number-input
      </ix-button>
      <div id="number-input-container" style="display: none">
        <ix-number-input
          style="width: 300px"
          .value=${i}
          ?show-stepper-buttons=${u}
        ></ix-number-input>
      </div>
    `},args:{value:0,showStepperButtons:!0}},r={args:{required:!0,label:"Required"}},s={args:{label:"Stepper",showStepperButtons:!0,step:3,max:10}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const v=["Default","toggleNumberInput","Required","Step"];export{n as Default,r as Required,s as Step,v as __namedExportsOrder,g as default,t as toggleNumberInput};
