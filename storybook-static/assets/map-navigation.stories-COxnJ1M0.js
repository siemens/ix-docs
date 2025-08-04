import{r as y,x as m}from"./iframe-C2tqSE8x.js";import{n as c,t as x}from"./property-BdLFZzLd.js";import{i as v}from"./icon-C4UgCj5Y.js";import{m as u}from"./generic-render-CsqnySBY.js";import"./sample-ST_d4yt9.js";var g=Object.defineProperty,h=Object.getOwnPropertyDescriptor,p=(e,a,r,o)=>{for(var t=o>1?void 0:o?h(a,r):a,l=e.length-1,s;l>=0;l--)(s=e[l])&&(t=(o?s(a,r,t):s(t))||t);return o&&t&&g(a,r,t),t};let i=class extends y{constructor(){super(...arguments),this.args={},this.overlay=!1}render(){return m`
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
    `}};p([c()],i.prototype,"args",2);p([c()],i.prototype,"overlay",2);i=p([x("story-map-navigation")],i);const N={title:"Example/MapNavigation",render:e=>m`<story-map-navigation
      .args=${e}
      .overlay=${e.showExampleOverlay}
    ></story-map-navigation>`,argTypes:u("ix-map-navigation",{icon:v("application icon",!1),defaultSlot:{control:{type:"text"}},sidebarContentSlot:{control:{type:"text"}},overlayIcon:v("overlay icon",!1),overlayName:{control:{type:"text"}},overlayDefaultSlot:{control:{type:"text"}},showExampleOverlay:{control:{type:"boolean"}}})},n={args:{applicationName:"Application Name",hideContextMenu:!1,navigationTitle:"Navigation Title",icon:"barchart",defaultSlot:"Main Content",sidebarContentSlot:"Sidebar Content",overlayName:"Custom Overlay",overlayIcon:"bulb",overlayDefaultSlot:"Overlay Content",showExampleOverlay:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const O=["ExampleMapNavigation","Primary"];export{i as ExampleMapNavigation,n as Primary,O as __namedExportsOrder,N as default};
