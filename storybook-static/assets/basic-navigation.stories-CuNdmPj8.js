import{r as f,x as u}from"./lit-element-CjWaU8-K.js";import{n as x,t as d}from"./property-kM0Q79nG.js";import{i as h}from"./icon-C2LkRjGM.js";import{m as v}from"./generic-render-DetJ-R3y.js";import"./sample-BmNXNfc9.js";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,m=(a,i,o,t)=>{for(var e=t>1?void 0:t?b(i,o):i,s=a.length-1,c;s>=0;s--)(c=a[s])&&(e=(t?c(i,o,e):c(e))||e);return t&&e&&y(i,o,e),e};let n=class extends f{constructor(){super(...arguments),this.args={},this.overlay=!1}render(){return u`
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
    `}};m([x()],n.prototype,"args",2);m([x()],n.prototype,"overlay",2);n=m([d("story-basic-navigation")],n);const O={title:"Example/Basic-Navigation",render:a=>u`<story-basic-navigation
      .args=${a}
    ></story-basic-navigation>`,argTypes:v("ix-basic-navigation",{icon:h("application icon",!1),defaultSlot:{control:{type:"text"}}},!0,["breakpoints","forceBreakpoint"])},r={args:{applicationName:"Application Name",hideHeader:!1,icon:"barchart",defaultSlot:"Main Content"}};var p,l,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    applicationName: 'Application Name',
    hideHeader: false,
    icon: 'barchart',
    defaultSlot: 'Main Content'
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const S=["ExampleBasicNavigation","Primary"];export{n as ExampleBasicNavigation,r as Primary,S as __namedExportsOrder,O as default};
