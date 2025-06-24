import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from "./global-bbf431ac.js";
import { g as getSlottedElements } from "./shadow-dom-i60z1FJC-4795bd60.js";
import { w as iconContextMenu } from "./index-C0zeM1D4-b0cf2da8.js";
const groupContextMenuCss = ":host{display:block;position:relative;height:2rem;width:2rem;margin-block-start:0.3125rem;margin-inline-end:0.3125rem;margin-inline-start:auto}:host .hide{visibility:collapse}:host ::slotted(ix-dropdown){cursor:default}";
const GroupContextMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showContextMenu = false;
  }
  getTrigger() {
    return this.hostElement;
  }
  configureDropdown(dropdownElement, triggerElement) {
    dropdownElement.positioningStrategy = "fixed";
    dropdownElement.trigger = triggerElement;
  }
  onSlotChange() {
    const slot = this.hostElement.shadowRoot.querySelector("slot");
    if (!slot) {
      return;
    }
    const elements = getSlottedElements(slot);
    this.showContextMenu = elements.length !== 0;
    const dropdownElement = elements.find((elm) => elm.tagName === "IX-DROPDOWN");
    const triggerElement = this.getTrigger();
    if (!triggerElement) {
      return;
    }
    if (!dropdownElement) {
      return;
    }
    this.configureDropdown(dropdownElement, triggerElement);
  }
  render() {
    return h(Host, { key: "ee591580cc556de72449b01dc2996d44cbfeeff6" }, h("ix-icon-button", { key: "1ef7d92628c7b560ab08d8b5e0a7bd4218487035", class: { hide: !this.showContextMenu }, size: "24", ghost: true, icon: iconContextMenu }), h("slot", { key: "aff699f2be0f3432d1845a98dd3c759d74b3808f", onSlotchange: () => this.onSlotChange() }));
  }
  get hostElement() {
    return getElement(this);
  }
};
GroupContextMenu.style = groupContextMenuCss;
const groupItemCss = ":host{display:flex;min-height:2.25rem;height:2.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host>button{display:flex;height:100%;width:100%;align-items:center;justify-content:flex-start;position:relative;outline:none;background-color:var(--theme-group-item--background);border:1px solid transparent;color:var(--theme-color-std-text);cursor:pointer;padding-left:2.5rem}:host>button:focus-visible{border:1px solid var(--theme-color-focus-bdr)}:host ix-icon{margin-right:0.25rem;margin-top:-0.125rem}:host .group-entry-selection-indicator{position:absolute;left:-1px;height:calc(100% + 2px);width:0.25rem}:host .group-entry-text{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-entry-text-secondary{display:flex;justify-content:flex-end;flex-grow:1;white-space:nowrap;color:var(--theme-color-soft-text)}:host .group-entry-text-secondary,:host .group-entry-text-secondary span{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.selected){border-top-width:0.062rem !important;background-color:var(--theme-color-ghost--selected)}:host(.selected) .group-entry-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host(:hover){background-color:var(--theme-color-ghost--selected-hover);border-color:var(--theme-group-item--border-color--hover)}:host(.selected:hover){background-color:var(--theme-color-ghost--selected-hover)}:host(:active){background-color:var(--theme-color-ghost--selected-active);border-color:var(--theme-group-item--border-color--active)}:host(.selected:active){background-color:var(--theme-color-ghost--selected-active)}";
const GroupItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedChanged = createEvent(this, "selectedChanged", 7);
    this.suppressSelection = false;
    this.selected = false;
    this.focusable = true;
  }
  clickListen() {
    this.selectedChanged.emit(this.hostElement);
  }
  render() {
    return h(Host, { key: "0f2962acd9aaa5980215dae0c92dc621199fc0ee", class: {
      selected: this.selected && !this.suppressSelection
    } }, h("button", { key: "c6470f9d8611622f2bce555af1b830a47a606369", tabindex: this.focusable ? 0 : -1 }, h("div", { key: "cf94aaa1e8bec5962529897e1bdb3cf5b5814eb2", class: "group-entry-selection-indicator" }), this.icon ? h("ix-icon", { size: "16", name: this.icon }) : null, this.text ? h("span", { class: "group-entry-text" }, h("span", { title: this.text }, this.text)) : null, this.secondaryText ? h("span", { class: "group-entry-text-secondary" }, h("span", { title: this.secondaryText }, this.secondaryText)) : null, h("slot", { key: "f0550e017ef40360198b02f092ce532a81862c1b" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
GroupItem.style = groupItemCss;
export {
  GroupContextMenu as ix_group_context_menu,
  GroupItem as ix_group_item
};
