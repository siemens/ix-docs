import{r as g,x as m}from"./lit-element-f36cbe21.js";import{n as u,t as h}from"./property-1f955f5e.js";import{i as v}from"./icon-fda15462.js";import{m as d}from"./generic-render-e9559882.js";import"./sample-cfb362e2.js";var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,p=(e,a,r,o)=>{for(var t=o>1?void 0:o?b(a,r):a,l=e.length-1,s;l>=0;l--)(s=e[l])&&(t=(o?s(a,r,t):s(t))||t);return o&&t&&f(a,r,t),t};let i=class extends g{constructor(){super(...arguments),this.args={},this.overlay=!1}render(){return m`
      <ix-map-navigation
        application-name=${this.args.applicationName}
        hide-context-menu=${this.args.hideContextMenu}
        navigation-title=${this.args.navigationTitle}
      >
        <ix-menu>
          <ix-menu-item>Item 1</ix-menu-item>
          <ix-menu-item>Item 2</ix-menu-item>
          <ix-menu-item>Item 3</ix-menu-item>
        </ix-menu>
        <ix-icon slot="logo" name=${this.args.icon}></ix-icon>
        <ix-content
          slot="sidebar-content"
          style="width: 100%; box-sizing: border-box"
          >${this.args.sidebarContentSlot}
        </ix-content>

        <ix-content>
          ${this.args.defaultSlot}
          <br />
          <br />
          <ix-button @click=${()=>this.overlay=!this.overlay}
            >Open overlay</ix-button
          >
        </ix-content>

        ${this.overlay?m`
              <ix-map-navigation-overlay
                name=${this.args.overlayName}
                icon=${this.args.overlayIcon}
                @closeClick=${()=>{this.overlay=!1}}
                slot="overlay"
              >
                <ix-content> ${this.args.overlayDefaultSlot} </ix-content>
              </ix-map-navigation-overlay>
            `:""}
      </ix-map-navigation>
    `}};p([u()],i.prototype,"args",2);p([u()],i.prototype,"overlay",2);i=p([h("story-map-navigation")],i);const E={title:"Example/Map-Navigation",render:e=>m`<story-map-navigation
      .args=${e}
      .overlay=${e.showExampleOverlay}
    ></story-map-navigation>`,argTypes:d("ix-map-navigation",{icon:v("application icon",!1),defaultSlot:{control:{type:"text"}},sidebarContentSlot:{control:{type:"text"}},overlayIcon:v("overlay icon",!1),overlayName:{control:{type:"text"}},overlayDefaultSlot:{control:{type:"text"}},showExampleOverlay:{control:{type:"boolean"}}})},n={args:{applicationName:"Application Name",hideContextMenu:!1,navigationTitle:"Navigation Title",icon:"barchart",defaultSlot:"Main Content",sidebarContentSlot:"Sidebar Content",overlayName:"Custom Overlay",overlayIcon:"bulb",overlayDefaultSlot:"Overlay Content",showExampleOverlay:!0}};var c,y,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    applicationName: 'Application Name',
    hideContextMenu: false,
    navigationTitle: 'Navigation Title',
    icon: 'barchart',
    defaultSlot: 'Main Content',
    sidebarContentSlot: 'Sidebar Content',
    overlayName: 'Custom Overlay',
    overlayIcon: 'bulb',
    overlayDefaultSlot: 'Overlay Content',
    showExampleOverlay: true
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const M=["ExampleMapNavigation","Primary"];export{i as ExampleMapNavigation,n as Primary,M as __namedExportsOrder,E as default};
