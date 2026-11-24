import{s as t,h as e}from"./stencil-render-CqJWeRgr.js";import{m as r}from"./generic-render-D6eVCH02.js";import"./sample-QwvD4foy.js";const c={title:"Example/Application",tags:[],render:t(i=>e("ix-application",{...i,style:{height:"32rem"}},e("ix-application-header",{name:"Industrial Experience",slot:"application-header"}),e("ix-menu",{expand:!0,slot:"menu"},e("ix-menu-item",{home:!0,icon:"home",active:!0},"Home"),e("ix-menu-item",{icon:"alarm-bell"},"Alarms"),e("ix-menu-category",{label:"Analysis",icon:"piechart"},e("ix-menu-item",{icon:"plant"},"Plants"),e("ix-menu-item",{icon:"network-device"},"Networks")),e("ix-menu-about",null),e("ix-menu-settings",null)),e("ix-content",null,e("ix-content-header",{headerTitle:"Operations overview",slot:"header"}),e("p",null,"Monitor operations and manage your industrial applications.")))),argTypes:r("ix-application")},n={},a={args:{appSwitchConfig:{currentAppId:"operations",apps:[{id:"operations",name:"Operations",description:"Monitor and control your plants",iconSrc:"/images/example-app-icon.svg",url:"https://ix.siemens.io",target:"_self"},{id:"maintenance",name:"Maintenance",description:"Plan and track maintenance tasks",iconSrc:"/images/example-app-icon-2-3.svg",url:"https://ix.siemens.io",target:"_blank"},{id:"analytics",name:"Analytics",description:"Analyze production data",iconSrc:"/images/example-app-icon-3-2.svg",url:"https://ix.siemens.io",target:"_blank"}]}}},l=["Default","AppSwitch"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    appSwitchConfig: {
      currentAppId: 'operations',
      apps: [{
        id: 'operations',
        name: 'Operations',
        description: 'Monitor and control your plants',
        iconSrc: '/images/example-app-icon.svg',
        url: 'https://ix.siemens.io',
        target: '_self'
      }, {
        id: 'maintenance',
        name: 'Maintenance',
        description: 'Plan and track maintenance tasks',
        iconSrc: '/images/example-app-icon-2-3.svg',
        url: 'https://ix.siemens.io',
        target: '_blank'
      }, {
        id: 'analytics',
        name: 'Analytics',
        description: 'Analyze production data',
        iconSrc: '/images/example-app-icon-3-2.svg',
        url: 'https://ix.siemens.io',
        target: '_blank'
      }]
    }
  }
}`,...a.parameters?.docs?.source}}};export{a as AppSwitch,n as Default,l as __namedExportsOrder,c as default};
