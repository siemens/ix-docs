import{x as r}from"./iframe-Bi7vWXRH.js";import{m as s}from"./generic-render-B6oDlj6b.js";import"./sample-CrjnuCO3.js";const c={root:{id:"root",data:{name:""},hasChildren:!0,children:["sample"]},sample:{id:"sample",data:{name:"Sample"},hasChildren:!0,children:["sample-child-1","sample-child-2"]},"sample-child-1":{id:"sample-child-1",data:{name:"Sample Child 1"},hasChildren:!0,children:["sample-grandchild-1","sample-grandchild-2"]},"sample-grandchild-1":{id:"sample-grandchild-1",data:{name:"Sample Grandchild 1"},hasChildren:!0,children:["sample-greatgrandchild-1"]},"sample-greatgrandchild-1":{id:"sample-greatgrandchild-1",data:{name:"Sample Great Grandchild 1"},hasChildren:!1,children:[]},"sample-grandchild-2":{id:"sample-grandchild-2",data:{name:"Sample Grandchild 2"},hasChildren:!1,children:[]},"sample-child-2":{id:"sample-child-2",data:{name:"Sample Child 2"},hasChildren:!1,children:[]}},p={title:"Example/Tree",tags:[],render:e=>r`
    <ix-tree
      .model=${e.model}
      .root=${e.root}
      .context=${e.context}
      .toggleOnItemClick=${e.toggleOnItemClick}
    ></ix-tree>
  `,argTypes:s("ix-tree",{model:{control:!1},root:{control:!1},context:{control:!1},toggleOnItemClick:{control:"boolean",description:"Enable to toggle items by click on the item"}}),args:{root:"root",model:c},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=721-9472&m=dev"},controls:{expanded:!0}}},n={name:"Parent node expands only when chevron is clicked",args:{context:{sample:{isExpanded:!0,isSelected:!1}},toggleOnItemClick:!1}},a={name:"Parent node expands when the entire node is clicked",args:{context:{sample:{isExpanded:!0,isSelected:!1}},toggleOnItemClick:!0}},t={name:"Selectable parent nodes both expand and change to selected when entire node is clicked",args:{context:{sample:{isExpanded:!0,isSelected:!0}},toggleOnItemClick:!0}},d={name:"Intermediate node expands only when the chevron is clicked",args:{context:{sample:{isExpanded:!0,isSelected:!1},"sample-child-1":{isExpanded:!0,isSelected:!1}},toggleOnItemClick:!1}},l={name:"Intermediate node expands and change to selected only when the entire  intermediate node is clicked",args:{context:{sample:{isExpanded:!0,isSelected:!1},"sample-child-1":{isExpanded:!0,isSelected:!0}},toggleOnItemClick:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Parent node expands only when chevron is clicked',
  args: {
    context: {
      sample: {
        isExpanded: true,
        isSelected: false
      }
    },
    toggleOnItemClick: false
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Parent node expands when the entire node is clicked',
  args: {
    context: {
      sample: {
        isExpanded: true,
        isSelected: false
      }
    },
    toggleOnItemClick: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Selectable parent nodes both expand and change to selected when entire node is clicked',
  args: {
    context: {
      sample: {
        isExpanded: true,
        isSelected: true
      }
    },
    toggleOnItemClick: true
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Intermediate node expands only when the chevron is clicked',
  args: {
    context: {
      sample: {
        isExpanded: true,
        isSelected: false
      },
      'sample-child-1': {
        isExpanded: true,
        isSelected: false
      }
    },
    toggleOnItemClick: false
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Intermediate node expands and change to selected only when the entire  intermediate node is clicked',
  args: {
    context: {
      sample: {
        isExpanded: true,
        isSelected: false
      },
      'sample-child-1': {
        isExpanded: true,
        isSelected: true
      }
    },
    toggleOnItemClick: true
  }
}`,...l.parameters?.docs?.source}}};const h=["ExpandOnChevronClick","ExpandOnNodeClick","SelectableExpandOnNode","IntermediateNodeExpandOnClick","IntermediateNodeExpand"];export{n as ExpandOnChevronClick,a as ExpandOnNodeClick,l as IntermediateNodeExpand,d as IntermediateNodeExpandOnClick,t as SelectableExpandOnNode,h as __namedExportsOrder,p as default};
