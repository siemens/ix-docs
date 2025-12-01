import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-BkHs9YbB.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-B6Ygv72Z.js";
import { c as closestIxMenu } from "./context-BniHpAE1-BXrc-Gwu.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { h as iconChevronDownSmall } from "./index-8HpPmDK_-DinFJk0z.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
function createEnterLeaveDebounce(enterCallback, leaveCallback, { debounceTimeEnter, debounceTimeLeave } = {
  debounceTimeEnter: 0,
  debounceTimeLeave: 500
}) {
  let enterTimeout;
  let leaveTimeout;
  return {
    onEnter: () => {
      clearTimeout(leaveTimeout);
      enterTimeout = setTimeout(() => {
        enterCallback();
      }, debounceTimeEnter);
    },
    onLeave: () => {
      clearTimeout(enterTimeout);
      leaveTimeout = setTimeout(() => {
        leaveCallback();
      }, debounceTimeLeave);
    }
  };
}
const menuCategoryCss = ":host{display:flex;flex-direction:column;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-text{width:100%;padding-right:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .category-chevron{margin-left:auto;margin-right:0;transition:var(--theme-default-time) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .menu-items{overflow:hidden;max-height:0;transition:var(--theme-default-time) max-height ease-in-out}:host .menu-items--expanded{max-height:999999999px;padding:0.25rem 0 0.25rem 1.625rem}:host .menu-items--collapsed{display:none}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host .category-dropdown-header{pointer-events:none;padding-left:0.125rem;min-width:256px}:host ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host(.expanded){background-color:var(--theme-color-ghost--active)}:host ::slotted(a[href]){text-decoration:none !important}";
const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
const MenuCategory = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeOtherCategories = createEvent(this, "closeOtherCategories", 7);
    this.menuExpand = false;
    this.showItems = false;
    this.showDropdown = false;
    this.nestedItems = [];
    this.enterLeaveDebounce = createEnterLeaveDebounce(() => {
      this.onPointerEnter();
    }, () => {
      this.onPointerLeave();
    });
  }
  isNestedItemActive() {
    return this.getNestedItems().some((item) => item.active);
  }
  getNestedItems() {
    return Array.from(this.hostElement.querySelectorAll(":scope ix-menu-item"));
  }
  getNestedItemsHeight() {
    const items = this.getNestedItems();
    return items.length * DefaultIxMenuItemHeight;
  }
  onExpandCategory(showItems) {
    if (showItems) {
      this.animateFadeIn();
    } else {
      this.animateFadeOut();
    }
  }
  animateFadeOut() {
    const slotHideThresholdMs = 25;
    animate(this.menuItemsContainer, {
      duration: DefaultAnimationTimeout,
      easing: "easeInSine",
      opacity: [1, 0],
      maxHeight: [this.getNestedItemsHeight() + DefaultIxMenuItemHeight, 0],
      onComplete: () => {
        setTimeout(() => {
          this.showItems = false;
          this.showDropdown = false;
        }, DefaultAnimationTimeout + slotHideThresholdMs);
      }
    });
  }
  animateFadeIn() {
    animate(this.menuItemsContainer, {
      duration: DefaultAnimationTimeout,
      easing: "easeInSine",
      opacity: [0, 1],
      maxHeight: [0, this.getNestedItemsHeight() + DefaultIxMenuItemHeight],
      onBegin: () => {
        this.showItems = true;
        this.showDropdown = false;
      }
    });
  }
  onPointerEnter() {
    var _a;
    if ((_a = this.ixMenu) === null || _a === void 0 ? void 0 : _a.expand) {
      return;
    }
    this.closeOtherCategories.emit();
    this.showDropdown = true;
  }
  onPointerLeave() {
    this.showDropdown = false;
  }
  onCategoryClick(e) {
    var _a;
    e.stopPropagation();
    if ((_a = this.ixMenu) === null || _a === void 0 ? void 0 : _a.expand) {
      this.onExpandCategory(!this.showItems);
      return;
    }
  }
  onNestedItemsChanged(mutations) {
    const oldNestedItemsLength = this.nestedItems.length;
    this.nestedItems = this.getNestedItems();
    if (this.showItems && this.menuItemsContainer && oldNestedItemsLength !== this.nestedItems.length) {
      this.menuItemsContainer.style.maxHeight = `${this.getNestedItemsHeight() + DefaultIxMenuItemHeight}px`;
    }
    if (!this.menuExpand || this.showItems || !mutations) {
      return;
    }
    for (const mutation of mutations !== null && mutations !== void 0 ? mutations : []) {
      if (mutation.attributeName === "class" && mutation.target instanceof HTMLElement && mutation.target.classList.contains("active")) {
        this.showItems = true;
        this.onExpandCategory(true);
        return;
      }
    }
  }
  isCategoryItemListVisible() {
    return this.menuExpand && (this.showItems || this.isNestedItemActive());
  }
  componentWillLoad() {
    const closestMenu = closestIxMenu(this.hostElement);
    if (!closestMenu) {
      throw Error("ix-menu-category can only be used as a child of ix-menu");
    }
    this.ixMenu = closestMenu;
    this.menuExpand = this.ixMenu.expand;
    this.showItems = this.isCategoryItemListVisible();
  }
  componentDidLoad() {
    var _a;
    this.observer = createMutationObserver((mutations) => this.onNestedItemsChanged(mutations));
    this.observer.observe(this.hostElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
    requestAnimationFrame(() => {
      this.onNestedItemsChanged();
    });
    (_a = this.ixMenu) === null || _a === void 0 ? void 0 : _a.addEventListener("expandChange", ({ detail: menuExpand }) => {
      this.menuExpand = menuExpand;
      if (!menuExpand) {
        this.clearMenuItemStyles();
      }
      this.showItems = this.isCategoryItemListVisible();
    });
  }
  clearMenuItemStyles() {
    var _a, _b;
    (_a = this.menuItemsContainer) === null || _a === void 0 ? void 0 : _a.style.removeProperty("max-height");
    (_b = this.menuItemsContainer) === null || _b === void 0 ? void 0 : _b.style.removeProperty("opacity");
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  render() {
    return h(Host, { key: "13ac63c3321e33e4781ab642577464fde79c6bf2", class: {
      expanded: this.showItems
    }, onPointerEnter: () => {
      this.enterLeaveDebounce.onEnter();
    }, onPointerLeave: (event) => {
      if (event.pointerType === "touch") {
        return;
      }
      this.enterLeaveDebounce.onLeave();
    } }, h("ix-menu-item", { key: "25e8a0a50ea1540e346e830045275e6a0c63327d", class: "category-parent", active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClick(e), onFocus: () => this.onPointerEnter(), tooltipText: this.tooltipText, isCategory: true }, h("div", { key: "5b0dcefb391bada721218f4d3ba690c1a2de966e", class: "category" }, h("div", { key: "f65e560cb7a6ab490220b814f9e66bbfd010bc44", class: "category-text" }, this.label), h("ix-icon", { key: "672a4f90f58ad0cdf023d050d4b3f75114a4ee52", name: iconChevronDownSmall, class: {
      "category-chevron": true,
      "category-chevron--open": this.showItems
    } }))), h("div", { key: "d7f0f085f33a09d7c57ca18818a90125b3c2e2bf", ref: (ref) => this.menuItemsContainer = ref, class: {
      "menu-items": true,
      "menu-items--expanded": this.showItems,
      "menu-items--collapsed": !this.showItems
    } }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: "e5b6be4ba14c97ef2e85abd01833bed929b1efa4", closeBehavior: "both", show: this.showDropdown, onShowChanged: ({ detail: dropdownShown }) => {
      this.showDropdown = dropdownShown;
    }, class: "category-dropdown", anchor: this.hostElement, placement: "right-start", offset: {
      mainAxis: 3
    }, onClick: (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.tagName === "IX-MENU-ITEM") {
          this.showDropdown = false;
        } else {
          e.preventDefault();
        }
      }
    } }, h("ix-dropdown-item", { key: "90e095e2d61e5d359c29c742e4e84457ef47426f", class: "category-dropdown-header" }, h("ix-typography", { key: "67efee1940b51e0457ccec7f0a271684ea6df881", format: "label", bold: true, textColor: "std" }, this.label)), h("ix-divider", { key: "2ec48cbab9dc6a223fcc636e59b497b1db315369" }), h("slot", { key: "e32fb89cf4045faae851af8d1ed1c4ab394e1709" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuCategory.style = menuCategoryCss;
export {
  MenuCategory as ix_menu_category
};
