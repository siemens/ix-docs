import{r as g,x as p}from"./iframe-BNkcxchC.js";import{n as l,t as u}from"./property-jgRR700Q.js";import{i as x}from"./icon-C4UgCj5Y.js";import{m as f}from"./generic-render-CsqnySBY.js";import"./sample-ST_d4yt9.js";var d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,m=(a,i,o,t)=>{for(var e=t>1?void 0:t?h(i,o):i,s=a.length-1,c;s>=0;s--)(c=a[s])&&(e=(t?c(i,o,e):c(e))||e);return t&&e&&d(i,o,e),e};let n=class extends g{constructor(){super(...arguments),this.args={},this.overlay=!1}render(){return p`
      <ix-basic-navigation
        application-name=${this.args.applicationName}
        hide-header=${this.args.hideHeader}
        force-breakpoint=${this.args.forceBreakpoint}
      >
        <ix-icon slot="logo" name=${this.args.icon}></ix-icon>
        <ix-menu>
          <ix-menu-item>Item 1</ix-menu-item>
          <ix-menu-item>Item 2</ix-menu-item>
          <ix-menu-item>Item 3</ix-menu-item>
        </ix-menu>
        <ix-content style="height: fit-content"
          >${this.args.defaultSlot}</ix-content
        >
      </ix-basic-navigation>
    `}};m([l()],n.prototype,"args",2);m([l()],n.prototype,"overlay",2);n=m([u("story-basic-navigation")],n);const P={title:"Example/BasicNavigation",render:a=>p`<story-basic-navigation
      .args=${a}
    ></story-basic-navigation>`,argTypes:f("ix-basic-navigation",{icon:x("application icon",!1),defaultSlot:{control:{type:"text"}}},!0,["breakpoints","forceBreakpoint"])},r={args:{applicationName:"Application Name",hideHeader:!1,icon:"barchart",defaultSlot:"Main Content"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    applicationName: 'Application Name',
    hideHeader: false,
    icon: 'barchart',
    defaultSlot: 'Main Content'
  }
}`,...r.parameters?.docs?.source}}};const $=["ExampleBasicNavigation","Primary"];export{n as ExampleBasicNavigation,r as Primary,$ as __namedExportsOrder,P as default};
