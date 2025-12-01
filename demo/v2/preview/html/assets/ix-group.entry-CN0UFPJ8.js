import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-BkHs9YbB.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
import { r as iconChevronUpSmall, h as iconChevronDownSmall } from "./index-8HpPmDK_-DinFJk0z.js";
const groupCss = ":host{display:flex;flex-direction:column;position:relative;width:19.75rem;min-width:12rem;border-color:var(--theme-group-item--border-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header{height:4rem;min-height:4rem;max-height:4rem;border-radius:var(--theme-group--border-radius) var(--theme-group--border-radius) 0 0;display:flex;background-color:var(--theme-group-item--background);color:var(--theme-group-header--color);cursor:pointer}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):hover,:host .group-header:not(.disabled):not(:disabled).hover{background-color:var(--theme-group-item--background--hover)}:host .group-header:not(.disabled):not(:disabled):hover.selected,:host .group-header:not(.disabled):not(:disabled).hover.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):active,:host .group-header:not(.disabled):not(:disabled).active{background-color:var(--theme-group-item--background--active)}:host .group-header:not(.disabled):not(:disabled):active.selected,:host .group-header:not(.disabled):not(:disabled).active.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled):focus-visible{height:calc(4rem - 2px);min-height:calc(4rem - 2px);border:1px solid var(--theme-color-focus-bdr);border-radius:var(--theme-default-border-radius) var(--theme-default-border-radius) 0px 0px;outline:none}:host .group-header:not(.disabled):not(:disabled):focus-visible .group-header-selection-indicator{width:calc(0.25rem - 1px)}:host .group-header:not(.disabled):not(:disabled):focus-visible .group-header-content{padding:calc(0.5rem - 1px) calc(0.5rem - 1px) calc(0.5rem - 1px) 0}:host .group-header:not(.disabled):not(:disabled):focus-visible .btn-expand-header{margin-top:calc(0.5rem - 1px);margin-bottom:calc(0.5rem - 1px)}:host .group-header.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header.selected .group-header-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header .group-header-selection-indicator{background-color:var(--theme-color-input--focus)}:host .group-header .group-header-selection-indicator.group-header-selection-indicator-item-selected{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header-clickable{display:flex;width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-selection-indicator{width:0.25rem;border-top-left-radius:var(--theme-group--border-radius)}:host .group-header-content{display:flex;flex-direction:row;justify-content:space-between;min-width:0;flex-grow:1;flex-basis:0;padding:0.5rem;padding-left:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-content .group-header-props-container{width:100%}:host .group-header-content .group-header-title{display:flex;align-items:center;font-size:1rem;font-weight:700;height:1.5rem}:host .group-header-content .group-header-title>*{min-width:0;padding-right:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-content .group-subheader{height:1.25rem;font-size:0.875rem;color:var(--theme-group-subheader--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .expand-icon{padding:0.125rem 0.437rem;color:var(--theme-color-std-text)}:host .btn-expand-header{margin:0.5rem;margin-inline-end:0.25rem;min-width:1.5rem}:host .group-content{display:flex;flex-direction:column;gap:1px;margin-top:1px}:host .footer{visibility:collapse;height:auto;min-height:0}:host .footer-visible{visibility:visible}:host .hidden{display:none}";
const Group = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectGroup = createEvent(this, "selectGroup", 7);
    this.selectItem = createEvent(this, "selectItem", 7);
    this.expandedChanged = createEvent(this, "expandedChanged", 7);
    this.suppressHeaderSelection = false;
    this.expanded = false;
    this.selected = false;
    this.expandOnHeaderClick = false;
    this.itemSelected = false;
    this.slotSize = this.groupItems.length;
    this.footerVisible = false;
    this.showExpandCollapsedIcon = false;
    this.hasDropdown = false;
    this.observer = null;
  }
  selectedChanged(newSelected) {
    if (newSelected === false) {
      this.changeItemIndex();
    }
  }
  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-group-dropdown-item"));
  }
  get groupItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-group-item:not(.footer)"));
  }
  get groupContent() {
    var _a;
    return (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".group-content");
  }
  onExpandClick(event) {
    const oldExpanded = this.expanded;
    this.expanded = !this.expanded;
    const { defaultPrevented } = this.expandedChanged.emit(this.expanded);
    event.stopPropagation();
    if (defaultPrevented) {
      this.expanded = oldExpanded;
    }
  }
  onHeaderClick(event) {
    if (this.suppressHeaderSelection) {
      this.onExpandClick(event);
      return;
    }
    this.changeHeaderSelection(!this.selected);
    this.changeItemIndex();
  }
  changeHeaderSelection(newSelection) {
    const oldIsHeaderSelected = this.selected;
    const newIsHeaderSelected = newSelection;
    this.selected = newIsHeaderSelected;
    const { defaultPrevented } = this.selectGroup.emit(newIsHeaderSelected);
    if (defaultPrevented) {
      this.selected = oldIsHeaderSelected;
      return;
    }
  }
  changeItemIndex(index) {
    const oldIndex = this.index;
    const newIndex = index === this.index ? void 0 : index;
    if (this.index === newIndex) {
      return;
    }
    this.index = newIndex;
    const { defaultPrevented } = this.selectItem.emit(newIndex);
    if (defaultPrevented) {
      this.index = oldIndex;
      return;
    }
    const items = this.groupItems;
    items.forEach((item, i) => {
      item.selected = i === this.index;
    });
    this.itemSelected = items.some((item) => item.selected);
  }
  onSlotChange() {
    var _a;
    const slot = (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="footer"]');
    if (slot) {
      this.footerVisible = hasSlottedElements(slot);
    }
  }
  checkDropdownSlot() {
    this.hasDropdown = !!this.hostElement.querySelector('[slot="dropdown"]');
  }
  componentWillRender() {
    this.groupItems.forEach((item, index) => {
      item.selected = index === this.index;
      item.index = index;
    });
    this.checkDropdownSlot();
  }
  componentDidLoad() {
    this.observer = createMutationObserver(() => {
      this.slotSize = this.groupItems.length;
    });
    if (!this.groupContent) {
      return;
    }
    this.observer.observe(this.groupContent, {
      childList: true
    });
    this.checkDropdownSlot();
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  onItemClicked(event) {
    if (event.target instanceof HTMLElement) {
      const item = event.target;
      const index = this.groupItems.indexOf(item);
      this.changeItemIndex(index);
    }
  }
  render() {
    return h(Host, { key: "b93d2c8f1290baa2983945ce349b90e95bf18696" }, h("div", { key: "3e9ce7ce3402f48bb17612a97bf9bee85767c6aa", class: {
      "group-header": true,
      expand: this.expanded,
      selected: this.selected
    }, tabindex: "0" }, h("div", { key: "daeb1087643b9f0267b3e2ba13a3973486730888", class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { key: "9771b2df1e5b68339aa9c4689de4b2d24bc09341", class: {
      "group-header-selection-indicator": true,
      "group-header-selection-indicator-item-selected": this.itemSelected
    } }), h("div", { key: "e0e1454e780614a31955720bd7b62d7bfec1b7e0", class: "btn-expand-header" }, h("ix-icon", { key: "0742c7515bbac3d3ba0221a5c3b0860d6a1792a2", "data-testid": "expand-collapsed-icon", class: {
      hidden: !this.showExpandCollapsedIcon
    }, name: this.expanded ? iconChevronUpSmall : iconChevronDownSmall, onClick: (event) => this.onExpandClick(event) })), h("div", { key: "4aa355b5a3a7f70977275139779000b2474a4a91", class: "group-header-content" }, this.header ? h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader)) : null, h("slot", { key: "c782251ecc1044aa3f7923d8f58b7f9c28700b4f", name: "header" }))), this.hasDropdown && h("ix-group-context-menu", { key: "0899d27a51f412aea136b00fcae9ab32859670f4" }, h("slot", { key: "76f9b3b94312879ac5e349546172e3d95aefce78", name: "dropdown" }))), h("div", { key: "f6a6aac17d8685244c28b8c6ecd24c966985ba1b", class: {
      "group-content": true
    } }, h("div", { key: "f805cc015b7bf9c919ea9129500e4af8773b7f63", style: {
      display: this.expanded ? "contents" : "none"
    } }, h("slot", { key: "703791e124429a91a5798429443c3494d18b262d", onSlotchange: () => {
      var _a;
      const slot = (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot:not([name])");
      this.showExpandCollapsedIcon = hasSlottedElements(slot);
    } }), h("ix-group-item", { key: "5e471c137730667bd459ac80943369b59f81c544", class: {
      footer: true,
      "footer-visible": this.footerVisible
    }, groupFooter: true, suppressSelection: true }, h("slot", { key: "84526685ab81de426a70ecfb52db3211b4a3219b", name: "footer", onSlotchange: () => this.onSlotChange() })))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "selected": ["selectedChanged"]
    };
  }
};
Group.style = groupCss;
export {
  Group as ix_group
};
