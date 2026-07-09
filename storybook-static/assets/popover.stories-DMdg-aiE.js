import{g as l,m as u}from"./generic-render-C55c-khh.js";import"./sample-4XlXCCij.js";const x="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='160'%3E%3Crect fill='%232a2a4a' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' fill='%23e0e0e0' text-anchor='middle' dy='.3em' font-size='18'%3ERelease%20preview%3C/text%3E%3C/svg%3E",n="popover-story-trigger",c="popover-dismiss",d={a11y:{test:"error"}};function g(e){e.querySelector(`#${c}`)?.addEventListener("click",()=>{e.hidePopover()})}function m(e){const t=document.createElement("div");t.style.padding="8rem 4rem";const o=document.createElement("ix-button");return o.id=n,o.textContent="Open",t.appendChild(o),t.appendChild(e),e instanceof HTMLElement&&e.tagName==="IX-POPOVER"&&g(e),t}const f={title:"Example/Popover",tags:[],render:e=>{const o=l("ix-popover",e,[],r=>(r.setAttribute("trigger",n),r.innerHTML=`
        <ix-popover-header>Popover title</ix-popover-header>
        <ix-popover-content>Popover body content</ix-popover-content>
        <ix-popover-footer>
          <ix-button id="${c}" variant="secondary">Cancel</ix-button>
          <ix-button>Save</ix-button>
        </ix-popover-footer>
      `,r)).querySelector("ix-popover");return m(o)},argTypes:u("ix-popover"),args:{placement:"bottom",hasSpike:!0,closeOnClickOutside:!0},parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=115095-99218"},...d}},i={name:"Default (interactive)"},p={parameters:d,args:{placement:"bottom",hasSpike:!1,closeOnClickOutside:!0},render:e=>{const o=l("ix-popover",e,[],r=>{r.setAttribute("trigger",n);const v=document.createElement("ix-popover-content");return v.textContent="This action cannot be undone.",r.appendChild(v),r}).querySelector("ix-popover");return m(o)}},a={parameters:d,render:()=>{const e=document.createElement("ix-popover");return e.setAttribute("trigger",n),e.setAttribute("placement","bottom"),e.setAttribute("has-spike",""),e.setAttribute("close-on-click-outside",""),e.setAttribute("aria-label","What's new popover"),e.innerHTML=`
      <ix-popover-header icon="info" icon-color="color-info">
        Release highlights
        <ix-pill slot="additional-items" variant="info">New</ix-pill>
      </ix-popover-header>
      <ix-popover-image image="${x}" image-alt="Release preview"></ix-popover-image>
      <ix-popover-content>
        Check out the new dashboard and improved performance metrics.
      </ix-popover-content>
      <ix-popover-footer>
        <span slot="start">v4.0.0</span>
        <ix-button id="${c}" variant="secondary">Dismiss</ix-button>
        <ix-button>Read more</ix-button>
      </ix-popover-footer>
    `,m(e)}},s={name:"Stepper footer",parameters:d,render:()=>{const e=document.createElement("ix-popover");return e.setAttribute("trigger",n),e.setAttribute("placement","bottom"),e.setAttribute("has-spike",""),e.innerHTML=`
      <ix-popover-header hide-close>Step 1 of 3</ix-popover-header>
      <ix-popover-content no-padding>
        Click the sidebar to navigate between pages.
      </ix-popover-content>
      <ix-popover-footer alignment="vertical">
        <span slot="start">1 / 3</span>
        <ix-button id="${c}" variant="secondary">Cancel</ix-button>
        <ix-button>Next</ix-button>
      </ix-popover-footer>
    `,m(e)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Default (interactive)'
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: storyA11y,
  args: {
    placement: 'bottom',
    hasSpike: false,
    closeOnClickOutside: true
  },
  render: args => {
    const container = genericRender('ix-popover', args, [], element => {
      element.setAttribute('trigger', TRIGGER_ID);
      const content = document.createElement('ix-popover-content');
      content.textContent = 'This action cannot be undone.';
      element.appendChild(content);
      return element;
    });
    const popover = container.querySelector('ix-popover')!;
    return popoverStoryContainer(popover);
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: storyA11y,
  render: () => {
    const popover = document.createElement('ix-popover');
    popover.setAttribute('trigger', TRIGGER_ID);
    popover.setAttribute('placement', 'bottom');
    popover.setAttribute('has-spike', '');
    popover.setAttribute('close-on-click-outside', '');
    popover.setAttribute('aria-label', "What's new popover");
    popover.innerHTML = \`
      <ix-popover-header icon="info" icon-color="color-info">
        Release highlights
        <ix-pill slot="additional-items" variant="info">New</ix-pill>
      </ix-popover-header>
      <ix-popover-image image="\${POPOVER_IMAGE_SRC}" image-alt="Release preview"></ix-popover-image>
      <ix-popover-content>
        Check out the new dashboard and improved performance metrics.
      </ix-popover-content>
      <ix-popover-footer>
        <span slot="start">v4.0.0</span>
        <ix-button id="\${DISMISS_BUTTON_ID}" variant="secondary">Dismiss</ix-button>
        <ix-button>Read more</ix-button>
      </ix-popover-footer>
    \`;
    return popoverStoryContainer(popover);
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Stepper footer',
  parameters: storyA11y,
  render: () => {
    const popover = document.createElement('ix-popover');
    popover.setAttribute('trigger', TRIGGER_ID);
    popover.setAttribute('placement', 'bottom');
    popover.setAttribute('has-spike', '');
    popover.innerHTML = \`
      <ix-popover-header hide-close>Step 1 of 3</ix-popover-header>
      <ix-popover-content no-padding>
        Click the sidebar to navigate between pages.
      </ix-popover-content>
      <ix-popover-footer alignment="vertical">
        <span slot="start">1 / 3</span>
        <ix-button id="\${DISMISS_BUTTON_ID}" variant="secondary">Cancel</ix-button>
        <ix-button>Next</ix-button>
      </ix-popover-footer>
    \`;
    return popoverStoryContainer(popover);
  }
}`,...s.parameters?.docs?.source}}};const S=["Default","Informational","With_Image","Stepper_Footer"];export{i as Default,p as Informational,s as Stepper_Footer,a as With_Image,S as __namedExportsOrder,f as default};
