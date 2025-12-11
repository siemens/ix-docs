import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-CJeEgyUn.js";
import { O as iconSingleCheck, w as iconChevronRightSmall } from "./index-8HpPmDK_-DinFJk0z.js";
import { a as a11yBoolean } from "./a11y-Bb7pDeaQ-DNI84lDX.js";
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
    return h(Host, { key: "89d6023460273b60bf52f129e456e0d92e51c09d", class: {
      hover: this.hover,
      "icon-only": this.isIconOnly(),
      disabled: this.disabled,
      submenu: this.isSubMenu
    }, role: "listitem" }, h("button", { key: "32feebb5d24eb19af7b5081c4f771a489913180f", type: "button", tabIndex: this.disabled ? -1 : 0, class: {
      "dropdown-item": true,
      "no-checked-field": this.suppressChecked,
      disabled: this.disabled
    }, onClick: () => {
      if (!this.disabled) {
        this.emitItemClick();
      }
    }, "aria-label": this.ariaLabelButton, "aria-disabled": a11yBoolean(this.disabled), disabled: this.disabled }, !this.suppressChecked ? h("div", { class: "dropdown-item-checked" }, this.checked ? h("ix-icon", { class: "checkmark", name: iconSingleCheck, size: "16" }) : null) : null, this.icon ? h("ix-icon", { class: "dropdown-item-icon", name: this.icon, "aria-label": this.ariaLabelIcon }) : null, h("div", { key: "dbc0b8352eb200eca806604da06e884bc398c5f0", class: "dropdown-item-text" }, this.label, h("slot", { key: "e9a0a489086d0990f613b9e44fbe16cd00a0794b" })), this.isSubMenu ? h("ix-icon", { name: iconChevronRightSmall, class: "submenu-icon" }) : null));
  }
  get hostElement() {
    return getElement(this);
  }
};
DropdownItem.style = dropdownItemCss;
export {
  DropdownItem as ix_dropdown_item
};
