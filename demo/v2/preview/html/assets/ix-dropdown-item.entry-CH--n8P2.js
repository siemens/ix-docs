import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-CTsFSACc.js";
import { O as iconSingleCheck, w as iconChevronRightSmall } from "./index-8HpPmDK_-DinFJk0z.js";
const dropdownItemCss = ":host{--ix-dropdown-item-checked-color:var(--theme-color-primary);display:flex;flex-direction:row;position:relative;height:2.5rem;width:auto;overflow:hidden;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-item{all:unset;display:flex;flex-direction:row;align-items:center;position:relative;height:calc(100% - 2px);border:0.0625rem solid transparent;white-space:nowrap;width:calc(100% - 0.5rem - 1.5rem);padding:0 0.5rem;padding-right:1.5rem}:host .dropdown-item.no-checked-field{width:calc(100% - 1rem - 1.5rem);padding:0 1rem;padding-right:1.5rem}:host .dropdown-item:focus-visible{border-color:var(--theme-color-focus-bdr)}:host .dropdown-item-checked{display:flex;align-items:center;justify-content:center;position:relative;height:100%;width:1rem;min-width:1rem;margin-right:0.5rem;color:var(--ix-dropdown-item-checked-color)}:host .dropdown-item-icon{margin-right:0.5rem;color:var(--theme-color-std-text)}:host .dropdown-item-text{display:block;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:pre}:host .submenu-icon{margin-left:auto}:host(.icon-only) .dropdown-item-icon{margin-right:0px}:host(.icon-only) .dropdown-item-checked{display:none}:host(.icon-only) .dropdown-item{width:calc(100% - 0.5rem - 0.5rem);padding:0 0.5rem;padding-right:0.5rem}:host(.submenu) .dropdown-item{width:calc(100% - 0.5rem - 0.5rem);padding:0 0.5rem;padding-right:0.5rem}:host(:not(.disabled):not(:disabled).hover),:host(:not(.disabled):not(:disabled):hover){background-color:var(--theme-ghost--background--hover)}:host(:not(.disabled):not(:disabled).active),:host(:not(.disabled):not(:disabled):active){background-color:var(--theme-ghost--background--active)}:host(.disabled){pointer-events:none;color:var(--theme-color-weak-text) !important}:host(.disabled) .dropdown-item-icon{color:var(--theme-color-weak-text) !important}";
const DropdownItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.hover = false;
    this.disabled = false;
    this.checked = false;
    this.isSubMenu = false;
    this.suppressChecked = false;
  }
  /** @internal */
  async emitItemClick() {
    this.itemClick.emit(this.hostElement);
  }
  /** @internal */
  async getDropdownItemElement() {
    return this.hostElement;
  }
  isIconOnly() {
    return this.label === void 0 && this.hostElement.innerText === "" && this.icon !== void 0;
  }
  render() {
    return h(Host, { key: "cd6bfb531ae38e3016ec9ebca8d02ec359c3ea7c", class: {
      hover: this.hover,
      "icon-only": this.isIconOnly(),
      disabled: this.disabled,
      submenu: this.isSubMenu
    }, role: "listitem" }, h("button", { key: "0c21ba9811bd0943835d206b2ef520a442817c53", type: "button", tabIndex: 0, class: {
      "dropdown-item": true,
      "no-checked-field": this.suppressChecked
    }, onClick: () => this.emitItemClick(), "aria-label": this.ariaLabelButton }, !this.suppressChecked ? h("div", { class: "dropdown-item-checked" }, this.checked ? h("ix-icon", { class: "checkmark", name: iconSingleCheck, size: "16" }) : null) : null, this.icon ? h("ix-icon", { class: "dropdown-item-icon", name: this.icon, "aria-label": this.ariaLabelIcon }) : null, h("div", { key: "28895721674306daf8293096800e7a2296be2fbf", class: "dropdown-item-text" }, this.label, h("slot", { key: "b71da89943666f609c8428aa62e91655766f2cb1" })), this.isSubMenu ? h("ix-icon", { name: iconChevronRightSmall, class: "submenu-icon" }) : null));
  }
  get hostElement() {
    return getElement(this);
  }
};
DropdownItem.style = dropdownItemCss;
export {
  DropdownItem as ix_dropdown_item
};
