import{m as i,g as u}from"./generic-render-Dg1fV67N.js";import"./sample-CrjnuCO3.js";const l={title:"Example/Group",tags:[],render:t=>{const p=u("ix-group",t,["itemCount","hasFooter","hasDropdown"]),s=p.querySelector("ix-group");for(let e=0;e<t.itemCount;e++){const o=document.createElement("ix-group-item");o.text=`Group Item ${e+1}`,o.secondaryText=`Secondary text for item ${e+1}`,e===0&&(o.icon="star"),s.appendChild(o)}if(t.hasFooter){const e=document.createElement("div");e.slot="footer",e.innerHTML="<ix-button>Footer content</ix-button>",e.style.padding="8px 16px",e.style.color="var(--theme-color-soft-text)",e.style.fontSize="12px",s.appendChild(e)}if(t.hasDropdown){const e=document.createElement("ix-dropdown");e.slot="dropdown";const o=document.createElement("ix-dropdown-item");o.label="Edit",o.icon="pen",e.appendChild(o);const d=document.createElement("ix-dropdown-item");d.label="Delete",d.icon="trashcan",e.appendChild(d),s.appendChild(e)}return p},argTypes:i("ix-group",{itemCount:{control:{type:"number",min:0,max:10},name:"Item count*",description:"Number of group items to display"},hasFooter:{control:"boolean",name:"Has footer*",description:"Whether to show footer content"},hasDropdown:{control:"boolean",name:"Has dropdown*",description:"Whether to show context menu dropdown"}}),args:{itemCount:3,hasFooter:!1,hasDropdown:!1,suppressHeaderSelection:!1,expanded:!1,selected:!1,expandOnHeaderClick:!1,defaultSlot:"",styles:{},previewWidth:""},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev"}}},r={args:{header:"Default Group",subHeader:"This is a subtitle"}},n={args:{header:"Group with Footer",subHeader:"This group has footer content",expanded:!0,hasFooter:!0}},a={args:{header:"Group with Context Menu",subHeader:"This group has a context menu dropdown",expanded:!0,hasDropdown:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Default Group',
    subHeader: 'This is a subtitle'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Group with Footer',
    subHeader: 'This group has footer content',
    expanded: true,
    hasFooter: true
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    header: 'Group with Context Menu',
    subHeader: 'This group has a context menu dropdown',
    expanded: true,
    hasDropdown: true
  }
}`,...a.parameters?.docs?.source}}};const h=["Default","WithFooter","WithDropdown"];export{r as Default,a as WithDropdown,n as WithFooter,h as __namedExportsOrder,l as default};
