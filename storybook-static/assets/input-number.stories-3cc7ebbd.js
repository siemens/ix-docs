import{g as w,m as h}from"./generic-render-1d688787.js";import{x as f}from"./lit-element-f36cbe21.js";import"./sample-cfb362e2.js";const R={title:"Example/Input/Number",tags:[],render:i=>w("ix-number-input",i),argTypes:h("ix-number-input",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=225-5535&m=dev"}}},n={args:{}},t={render:({value:i,showStepperButtons:S})=>{let e=!1;return f`
      <ix-button @click=${()=>{e=!e;const o=document.getElementById("number-input-container");o&&(o.style.display=e?"block":"none")}}>
        ${e?"Remove":"Add"} Toggle number-input
      </ix-button>
      <div id="number-input-container" style="display: none">
        <ix-number-input
          style="width: 300px"
          .value=${i}
          ?show-stepper-buttons=${S}
        ></ix-number-input>
      </div>
    `},args:{value:0,showStepperButtons:!0}},r={args:{required:!0,label:"Required"}},s={args:{label:"Stepper",showStepperButtons:!0,step:3,max:10}};var u,a,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var l,m,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,b,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'Required'
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,y,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Stepper',
    showStepperButtons: true,
    step: 3,
    max: 10
  }
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const k=["Default","toggleNumberInput","Required","Step"];export{n as Default,r as Required,s as Step,k as __namedExportsOrder,R as default,t as toggleNumberInput};
