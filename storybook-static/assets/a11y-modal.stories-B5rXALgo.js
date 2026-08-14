import{x as n}from"./iframe-BjJrMWKj.js";import"./preload-helper-PPVm8Dsz.js";const r={title:"Example/Modal/Accessibility",tags:[],parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=605-9072&m=dev"},a11y:{test:"error"}}},a=async({canvasElement:e})=>{const i=e.querySelector("ix-modal");await customElements.whenDefined("ix-modal"),await i?.showModal()},t={render:()=>n`
    <ix-button>background button1</ix-button>
    <ix-button>background button2</ix-button>
    <ix-modal
      aria-labelledby="modal-a11y-title"
      centered
      disable-animation
    >
      <ix-modal-header id="modal-a11y-title">Modal title</ix-modal-header>
      <ix-modal-content>Supporting description for this dialog.</ix-modal-content>
      <ix-modal-footer>
        <ix-button outline>Cancel</ix-button>
        <ix-button>Save</ix-button>
      </ix-modal-footer>
    </ix-modal>
  `,play:a},o={render:()=>n`
    <main>
      <p>Page content stays interactable while the panel is open.</p>
      <ix-button>background button1</ix-button>
      <ix-button>background button2</ix-button>
      <ix-modal
        aria-labelledby="modal-nb-title"
        centered
        disable-animation
        ?is-non-blocking=${!0}
      >
        <ix-modal-header id="modal-nb-title">Notification</ix-modal-header>
        <ix-modal-content>
          A non-modal panel does not use a modal focus trap.
        </ix-modal-content>
        <ix-modal-footer>
          <ix-button>Dismiss</ix-button>
        </ix-modal-footer>
      </ix-modal>
    </main>
  `,play:a};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ix-button>background button1</ix-button>
    <ix-button>background button2</ix-button>
    <ix-modal
      aria-labelledby="modal-a11y-title"
      centered
      disable-animation
    >
      <ix-modal-header id="modal-a11y-title">Modal title</ix-modal-header>
      <ix-modal-content>Supporting description for this dialog.</ix-modal-content>
      <ix-modal-footer>
        <ix-button outline>Cancel</ix-button>
        <ix-button>Save</ix-button>
      </ix-modal-footer>
    </ix-modal>
  \`,
  play: openModal
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <main>
      <p>Page content stays interactable while the panel is open.</p>
      <ix-button>background button1</ix-button>
      <ix-button>background button2</ix-button>
      <ix-modal
        aria-labelledby="modal-nb-title"
        centered
        disable-animation
        ?is-non-blocking=\${true}
      >
        <ix-modal-header id="modal-nb-title">Notification</ix-modal-header>
        <ix-modal-content>
          A non-modal panel does not use a modal focus trap.
        </ix-modal-content>
        <ix-modal-footer>
          <ix-button>Dismiss</ix-button>
        </ix-modal-footer>
      </ix-modal>
    </main>
  \`,
  play: openModal
}`,...o.parameters?.docs?.source},description:{story:'Non-modal panel: page remains operable, `aria-modal="false"`. Still needs an accessible name.',...o.parameters?.docs?.description}}};const m=["Default","NonBlocking"];export{t as Default,o as NonBlocking,m as __namedExportsOrder,r as default};
