import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from "./global-DsITLPyL.js";
import { c as closestPassShadow } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import { K as iconClose } from "./index-BeX6RWvV-CXzUIwMU.js";
const modalContentCss = () => `:host{display:block;position:relative;overflow:auto;padding:0 0.5rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}`;
const ModalContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "b9b13e4b94006023e1c4cb72f8750a0d3115fe83" }, h("slot", { key: "ab56f72939eeb96ebf29990d00894c14be058f9a" }));
  }
};
ModalContent.style = modalContentCss();
const modalHeaderCss = () => `:host{display:flex;padding:0.5rem 0 0.5rem 0.5rem;align-items:center;gap:1rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .modal-title{flex-grow:1;overflow-wrap:anywhere}:host .modal-close{align-self:flex-start}`;
const ModalHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Hide the close button
   */
  hideClose = false;
  /**
   * Icon of the header
   */
  icon;
  /**
   * ARIA label for the icon
   */
  ariaLabelIcon;
  /**
   * ARIA label for the close icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelCloseIconButton = "Close modal";
  onIconChange(icon) {
    if (this.parentDialog) {
      if (icon) {
        this.parentDialog.classList.add("with-icon");
      } else {
        this.parentDialog.classList.remove("with-icon");
      }
    }
  }
  /**
   * Icon color
   */
  iconColor;
  /**
   * Emits when the close icon is clicked and closes the modal
   * Can be prevented, in which case only the event is triggered, and the modal remains open
   */
  closeClick;
  parentDialog;
  componentDidLoad() {
    this.parentDialog = closestPassShadow(this.hostElement, "ix-modal");
    this.onIconChange(this.icon);
  }
  onCloseClick(event) {
    const ce = this.closeClick.emit(event);
    if (ce.defaultPrevented || event.defaultPrevented) {
      return;
    }
    this.parentDialog?.dismissModal();
  }
  render() {
    return h(Host, { key: "9f03264844ac63ce55494f2177d1ea38179e736a" }, this.icon ? h("ix-icon", { name: this.icon, color: this.iconColor, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("div", { key: "62cd301023d42678376d6c064f280970185f29d3", class: "modal-title" }, h("ix-typography", { key: "7d816462cfca738fca02746590548256bd0d529f", format: "h5" }, h("slot", { key: "946ddbbb1dfc674038d618a68e7c4a204d69d6e1" }))), !this.hideClose ? h("ix-icon-button", { class: "modal-close", onClick: (event) => this.onCloseClick(event), variant: "tertiary", icon: iconClose, iconColor: "color-soft-text", "aria-label": this.ariaLabelCloseIconButton }) : null);
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
      "icon": [{
        "onIconChange": 0
      }]
    };
  }
};
ModalHeader.style = modalHeaderCss();
export {
  ModalContent as ix_modal_content,
  ModalHeader as ix_modal_header
};
