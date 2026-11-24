import{m as u}from"./generic-render-D6eVCH02.js";import{x as m}from"./iframe-CLegjRT6.js";import"./sample-QwvD4foy.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Example/Menu/Menu",tags:[],render:n=>m`<ix-menu expand="${n.expand}">
      <ix-menu-item home icon="home">Home</ix-menu-item>
      <ix-menu-item icon="globe">Item 1</ix-menu-item>
      <ix-menu-category
        label="Top level Category"
        icon="rocket"
        disable-tooltip
      >
        <ix-menu-item icon="globe">Item 2</ix-menu-item>
        <ix-menu-item icon="globe">Item 3</ix-menu-item>
      </ix-menu-category>
      <ix-menu-about></ix-menu-about>
      <ix-menu-settings></ix-menu-settings>
    </ix-menu>`,argTypes:u("ix-menu",{}),parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=4533-132499&m=dev"},a11y:{test:"error"}}},o={args:{expand:!0}},i={args:{expand:!1}},a={parameters:{a11y:{config:{rules:[{id:"scrollable-region-focusable",enabled:!1}]}}},render:()=>m`
    <div style="height: 32rem; overflow: hidden; position: relative;">
      <ix-menu expand="true">
        <ix-menu-item home icon="home">Home</ix-menu-item>
        ${Array.from({length:18},(n,t)=>m`
            <ix-menu-item icon="star">Item ${t+1}</ix-menu-item>
          `)}
        <ix-menu-about></ix-menu-about>
        <ix-menu-settings></ix-menu-settings>
      </ix-menu>
    </div>
  `,play:async({canvasElement:n})=>{await customElements.whenDefined("ix-menu");const t=n.querySelector("ix-menu"),e=t?.shadowRoot?.querySelector(".tabs"),r=t?.shadowRoot?.querySelector(".menu-navigation");if(!e||!r)throw new Error("Unable to find the menu navigation containers");r.focus(),r.dispatchEvent(new KeyboardEvent("keydown",{bubbles:!0,composed:!0,key:"ArrowDown"})),await new Promise(s=>requestAnimationFrame(()=>s())),e.scrollTop=(e.scrollHeight-e.clientHeight)/2,e.dispatchEvent(new Event("scroll"))}},g=["Default","Collapsed","Overflow"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    expand: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    expand: false
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      config: {
        rules: [
        //TODO will be fixed with EIX-232
        {
          id: 'scrollable-region-focusable',
          enabled: false
        }]
      }
    }
  },
  render: () => html\`
    <div style="height: 32rem; overflow: hidden; position: relative;">
      <ix-menu expand="true">
        <ix-menu-item home icon="home">Home</ix-menu-item>
        \${Array.from({
    length: 18
  }, (_, index) => html\`
            <ix-menu-item icon="star">Item \${index + 1}</ix-menu-item>
          \`)}
        <ix-menu-about></ix-menu-about>
        <ix-menu-settings></ix-menu-settings>
      </ix-menu>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    await customElements.whenDefined('ix-menu');
    const menu = canvasElement.querySelector('ix-menu');
    const tabs = menu?.shadowRoot?.querySelector<HTMLElement>('.tabs');
    const menuNavigation = menu?.shadowRoot?.querySelector<HTMLElement>('.menu-navigation');
    if (!tabs || !menuNavigation) {
      throw new Error('Unable to find the menu navigation containers');
    }
    menuNavigation.focus();
    menuNavigation.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      key: 'ArrowDown'
    }));
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
    tabs.scrollTop = (tabs.scrollHeight - tabs.clientHeight) / 2;
    tabs.dispatchEvent(new Event('scroll'));
  }
}`,...a.parameters?.docs?.source}}};export{i as Collapsed,o as Default,a as Overflow,g as __namedExportsOrder,p as default};
