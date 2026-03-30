import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from "./global-7ZbTfMw3.js";
import { a as closestPassShadow } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
import { q as iconClose } from "./index-BBzEV-f4-ChQfUIyc.js";
const modalContentCss = () => `:host{display:block;position:relative;overflow:auto;padding:0 0.5rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}`;
const ModalContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "60b3a1c2a24a678788c823dde41f743d9bfa5aa7" }, h("slot", { key: "bba0935551ec0c9078c4ce867827bef053234cc2" }));
  }
};
ModalContent.style = modalContentCss();
const modalHeaderCss = () => `:host{display:flex;padding:0.5rem 0 0.5rem 0.5rem;align-items:center;gap:1rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .modal-title{flex-grow:1}:host .modal-close{align-self:flex-start}`;
const ModalHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
    this.hideClose = false;
    this.ariaLabelCloseIconButton = "Close modal";
  }
  onIconChange(icon) {
    if (this.parentDialog) {
      if (icon) {
        this.parentDialog.classList.add("with-icon");
      } else {
        this.parentDialog.classList.remove("with-icon");
      }
    }
  }
  componentDidLoad() {
    this.parentDialog = closestPassShadow(this.hostElement, "ix-modal");
    this.onIconChange(this.icon);
  }
  onCloseClick(event) {
    const ce = this.closeClick.emit(event);
    if (ce.defaultPrevented || event.defaultPrevented) {
      return;
    }
    this.parentDialog.dismissModal();
  }
  render() {
    return h(Host, { key: "fe31f33b0c3ce2cca9e5681978bd9200d894a526" }, this.icon ? h("ix-icon", { name: this.icon, color: this.iconColor, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("div", { key: "04284e4fb5bf5c1255a36ca5cf42cf0a3993bdbe", class: "modal-title" }, h("ix-typography", { key: "fe6b10d56e689087b4cc97e05908ef047a4cea2e", format: "h5" }, h("slot", { key: "65426838b385f9644ee48c7565ec0fe93b9c4764" }))), !this.hideClose ? h("ix-icon-button", { class: "modal-close", onClick: (event) => this.onCloseClick(event), variant: "tertiary", icon: iconClose, iconColor: "color-soft-text", "aria-label": this.ariaLabelCloseIconButton }) : null);
  }
  get hostElement() {
    return getElement(this);
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
