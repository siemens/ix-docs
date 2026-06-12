import{Q as o}from"./iframe-CsjqMXiN.js";import"./preload-helper-PPVm8Dsz.js";const n={title:"Example/Modal/Accessibility",tags:[],parameters:{design:{type:"figma",url:"https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=605-9072&m=dev"},a11y:{test:"error"}}},a={render:()=>o`
    <ix-modal class="visible" aria-labelledby="modal-a11y-title">
      <ix-modal-header id="modal-a11y-title">Modal title</ix-modal-header>
      <ix-modal-content>Supporting description for this dialog.</ix-modal-content>
      <ix-modal-footer>
        <ix-button outline>Cancel</ix-button>
        <ix-button>Save</ix-button>
      </ix-modal-footer>
    </ix-modal>
  `},e={render:()=>o`
    <main>
      <p>Page content stays interactable while the panel is open.</p>
      <ix-modal
        class="visible"
        aria-labelledby="modal-nb-title"
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
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <ix-modal class="visible" aria-labelledby="modal-a11y-title">
      <ix-modal-header id="modal-a11y-title">Modal title</ix-modal-header>
      <ix-modal-content>Supporting description for this dialog.</ix-modal-content>
      <ix-modal-footer>
        <ix-button outline>Cancel</ix-button>
        <ix-button>Save</ix-button>
      </ix-modal-footer>
    </ix-modal>
  \`
}`,...a.parameters?.docs?.source},description:{story:'Modal dialog with an accessible name via `aria-labelledby` (blocking / `aria-modal="true"`).',...a.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <main>
      <p>Page content stays interactable while the panel is open.</p>
      <ix-modal
        class="visible"
        aria-labelledby="modal-nb-title"
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
  \`
}`,...e.parameters?.docs?.source},description:{story:'Non-modal panel: page remains operable, `aria-modal="false"`. Still needs an accessible name.',...e.parameters?.docs?.description}}};const l=["Default","NonBlocking"];export{a as Default,e as NonBlocking,l as __namedExportsOrder,n as default};
