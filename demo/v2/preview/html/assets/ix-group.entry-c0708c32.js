import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-7dbfff85.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-3234a874.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC-4795bd60.js";
import { g as iconChevronRightSmall, r as iconChevronDownSmall } from "./index-DLTnniMb-a143a692.js";
const groupCss = ":host{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;position:relative;width:19.75rem;min-width:12rem;border-color:var(--theme-group-item--border-color)}:host .group-header{height:4rem;min-height:4rem;max-height:4rem;border-radius:var(--theme-group--border-radius) var(--theme-group--border-radius) 0 0;display:flex;background-color:var(--theme-group-item--background);color:var(--theme-group-header--color);cursor:pointer}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):hover,:host .group-header:not(.disabled):not(:disabled).hover{background-color:var(--theme-group-item--background--hover)}:host .group-header:not(.disabled):not(:disabled):hover.selected,:host .group-header:not(.disabled):not(:disabled).hover.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):active,:host .group-header:not(.disabled):not(:disabled).active{background-color:var(--theme-group-item--background--active)}:host .group-header:not(.disabled):not(:disabled):active.selected,:host .group-header:not(.disabled):not(:disabled).active.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled):focus-visible{border:1px solid var(--theme-color-focus-bdr);border-radius:var(--theme-default-border-radius) var(--theme-default-border-radius) 0px 0px;outline:none}:host .group-header.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header.selected .group-header-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header .group-header-selection-indicator{background-color:var(--theme-color-input--focus)}:host .group-header .group-header-selection-indicator.group-header-selection-indicator-item-selected{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header-clickable{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;width:100%;min-width:0}:host .group-header-selection-indicator{width:0.25rem;border-top-left-radius:var(--theme-group--border-radius)}:host .group-header-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:row;justify-content:space-between;min-width:0;flex-grow:1;flex-basis:0;padding:0.5rem;padding-left:0}:host .group-header-content .group-header-props-container{width:100%}:host .group-header-content .group-header-title{display:flex;align-items:center;font-size:1rem;font-weight:700;height:1.5rem}:host .group-header-content .group-header-title>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;padding-right:0}:host .group-header-content .group-subheader{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:1.25rem;font-size:0.875rem;color:var(--theme-group-subheader--color)}:host .expand-icon{padding:0.125rem 0.437rem;color:var(--theme-color-std-text)}:host .btn-expand-header{margin:0.5rem;margin-inline-end:0.25rem;min-width:1.5rem}:host .group-content{display:flex;flex-direction:column;gap:1px;margin-top:1px}:host .footer{visibility:collapse;height:auto;min-height:0}:host .footer-visible{visibility:visible}:host .hidden{display:none}";
const Group = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectGroup = createEvent(this, "selectGroup", 7);
    this.selectItem = createEvent(this, "selectItem", 7);
    this.collapsedChanged = createEvent(this, "collapsedChanged", 7);
    this.suppressHeaderSelection = false;
    this.collapsed = true;
    this.selected = false;
    this.expandOnHeaderClick = false;
    this.itemSelected = false;
    this.slotSize = this.groupItems.length;
    this.footerVisible = false;
    this.showExpandCollapsedIcon = false;
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
    const oldCollapsed = this.collapsed;
    this.collapsed = !this.collapsed;
    const { defaultPrevented } = this.collapsedChanged.emit(this.collapsed);
    event.stopPropagation();
    if (defaultPrevented) {
      this.collapsed = oldCollapsed;
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
  componentWillRender() {
    this.groupItems.forEach((item, index) => {
      item.selected = index === this.index;
      item.index = index;
    });
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
    return h(Host, { key: "2f270bc182ce854e2e49eda40be90a800cbb61c0" }, h("div", { key: "41004207b4f7ab107e1ee010d08183150a65a756", class: {
      "group-header": true,
      expand: !this.collapsed,
      selected: this.selected
    }, tabindex: "0" }, h("div", { key: "cd96be48f37bb43b39011f09d1885132e1d27425", class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { key: "9935de32138b750f3547f154e6cc8f204dd11b13", class: {
      "group-header-selection-indicator": true,
      "group-header-selection-indicator-item-selected": this.itemSelected
    } }), h("div", { key: "ab4d87361a52f02c5877c6f845111f8b2b1b20a9", class: "btn-expand-header" }, h("ix-icon", { key: "cfd77caf8a3b43f1557480c12372dcd13ffcc993", "data-testid": "expand-collapsed-icon", class: {
      hidden: !this.showExpandCollapsedIcon
    }, name: this.collapsed ? iconChevronRightSmall : iconChevronDownSmall, onClick: (event) => this.onExpandClick(event) })), h("div", { key: "995c2d4289fb97b2366f2007cfc0aa524500aeaf", class: "group-header-content" }, this.header ? h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader)) : null, h("slot", { key: "67978547dd51688b7af6e286da1f13951c2ade3f", name: "header" }))), h("ix-group-context-menu", { key: "ee14b7c33dfbd3b9d58ebc39a44d01888e305568" }, h("slot", { key: "055f50ffe8d1b8baad69db653b06e8288cc8bb93", name: "dropdown" }))), h("div", { key: "ce9b89c11ac7add9d9b3be3f86ec1e6d4effc854", class: {
      "group-content": true
    } }, h("div", { key: "dce5ed7109490a40d173f94116062a031f4a13c8", style: {
      display: this.collapsed ? "none" : "contents"
    } }, h("slot", { key: "5176b79b64f86a2c7bc827b253b604e7fb52ea99", onSlotchange: () => {
      var _a;
      const slot = (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot:not([name])");
      this.showExpandCollapsedIcon = hasSlottedElements(slot);
    } }), h("ix-group-item", { key: "e7ee362982df386a70c5ea95ace68d1d76b52874", suppressSelection: true, focusable: false, class: {
      footer: true,
      "footer-visible": this.footerVisible
    } }, h("slot", { key: "4fbe48e35502d6ccb600295f86ed5e479af621bf", name: "footer", onSlotchange: () => this.onSlotChange() })))));
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
