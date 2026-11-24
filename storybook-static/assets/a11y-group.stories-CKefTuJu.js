import{m as o}from"./generic-render-D6eVCH02.js";import{x as d}from"./iframe-CLegjRT6.js";import"./sample-QwvD4foy.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Example/Group/Accessibility",tags:[],render:e=>d`
    <ix-group
      header=${e.header}
      sub-header=${e.subHeader}
      ?expanded=${e.expanded}
      ?selected=${e.selected}
      ?suppress-header-selection=${e.suppressHeaderSelection}
    >
      <ix-group-item text="Item 1"></ix-group-item>
      <ix-group-item text="Item 2"></ix-group-item>
      <ix-group-item text="Item 3"></ix-group-item>
    </ix-group>
  `,argTypes:o("ix-group",{}),args:{header:"Header text",subHeader:"Subheader text",expanded:!1,selected:!1,suppressHeaderSelection:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev"},a11y:{test:"error"}}},r={},s={args:{expanded:!0}},t={args:{selected:!0}},a={args:{suppressHeaderSelection:!0,expanded:!0}},u=["Collapsed","Expanded","Selected","SuppressHeaderSelection"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"Collapsed group with selectable header and expand control.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...s.parameters?.docs?.source},description:{story:"Expanded group shows slotted items for keyboard and screen reader traversal.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  }
}`,...t.parameters?.docs?.source},description:{story:"Selected header exposes `aria-pressed` on the header select control.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    suppressHeaderSelection: true,
    expanded: true
  }
}`,...a.parameters?.docs?.source},description:{story:"With header selection suppressed, only the expand control is a tab stop in the header.",...a.parameters?.docs?.description}}};export{r as Collapsed,s as Expanded,t as Selected,a as SuppressHeaderSelection,u as __namedExportsOrder,m as default};
