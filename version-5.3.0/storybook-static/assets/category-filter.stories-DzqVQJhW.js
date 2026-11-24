import{s,h as o}from"./stencil-render-DyFAD701.js";import{m as n}from"./generic-render-BOVad1nM.js";import"./sample-DahX5hiH.js";var a;(function(e){e.EQUAL="Equal",e.NOT_EQUAL="Not equal"})(a||(a={}));const i={ID_1:{label:"Vendor",options:["Apple","MS","Siemens"]},ID_2:{label:"Product",options:["iPhone X","Windows","APS"]},ID_3:{label:"Asset group",options:["Line 1","Bay 2"]}},g={title:"Example/Category Filter",tags:[],render:s(e=>o("ix-category-filter",{...e})),argTypes:n("ix-category-filter",{categories:{control:{type:"object"}},filterState:{control:{type:"object"}},suggestions:{control:{type:"object"}},nonSelectableCategories:{control:{type:"object"}}})},t={args:{placeholder:"Filter assets"}},r={name:"With categories",render:s(e=>o("div",{style:{minHeight:"280px"}},o("ix-category-filter",{...e}))),args:{placeholder:"Filter by",uniqueCategories:!1,categories:i,filterState:{tokens:["Custom filter text"],categories:[{id:"ID_1",value:"IBM",operator:a.NOT_EQUAL}]}},parameters:{docs:{description:{story:"Click the input and type a value that contains a space, e.g. `env 1`. The space must appear. Press Enter to commit a token. Click the input or press ArrowDown to open the category list (Vendor, Product, **Asset group**). Open Product to see a value with a space (`iPhone X`)."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Filter assets'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With categories',
  render: stencil(args => <div style={{
    minHeight: '280px'
  }}>
      <ix-category-filter {...args}></ix-category-filter>
    </div>),
  args: {
    placeholder: 'Filter by',
    uniqueCategories: false,
    categories,
    filterState: {
      tokens: ['Custom filter text'],
      categories: [{
        id: 'ID_1',
        value: 'IBM',
        operator: LogicalFilterOperator.NOT_EQUAL
      }]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the input and type a value that contains a space, e.g. \`env 1\`. The space must appear. Press Enter to commit a token. Click the input or press ArrowDown to open the category list (Vendor, Product, **Asset group**). Open Product to see a value with a space (\`iPhone X\`).'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const u=["Default","WithCategories"];export{t as Default,r as WithCategories,u as __namedExportsOrder,g as default};
