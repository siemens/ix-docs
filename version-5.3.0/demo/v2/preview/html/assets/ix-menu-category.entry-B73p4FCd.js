import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-nUAVWB12.js";
import { t as iconChevronDownSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { c as closestIxMenu } from "./context-zqk3Dkv--Bgf_9ScM.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-DqJSHc3A-D5InBSMm.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-BmTKblYV-xVZ5emS8.js";
import { g as getComposedPath } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { d as dropdownController } from "./dropdown-controller-Jfg3ZWk6-Dkh7kLy3.js";
import { c as createSequentialId } from "./uuid-D3T7Lr4G-CKA8Zb0e.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./a11y-DD206pTM-BiwZPW5s.js";
import "./path-utils-CNLoALIl-DdIsPRiD.js";
const menuCategoryCss = () => `:host{display:flex;flex-direction:column;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-text{width:100%;padding-right:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .category-chevron{margin-left:auto;margin-right:0;transition:var(--theme-default-time) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .menu-items{overflow:hidden;max-height:0;transition:var(--theme-default-time) max-height ease-in-out}:host .menu-items--expanded{max-height:999999999px;padding:0.25rem 0 0.25rem 1.625rem}:host .menu-items--collapsed{display:none}:host .category-dropdown{display:flex;flex-direction:column;height:-moz-fit-content;height:fit-content;max-height:calc(50vh - 3rem)}:host .category-dropdown::before{content:"";position:absolute;top:0;bottom:0;width:4px;pointer-events:auto}:host .category-dropdown[data-ix-dropdown-placement^=right]::before{left:-4px}:host .category-dropdown[data-ix-dropdown-placement^=left]::before{right:-4px}:host .category-dropdown .category-dropdown-body{flex:0 1 auto;min-height:0;overflow-y:auto}:host .category-dropdown ix-divider{flex-shrink:0}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host .category-dropdown-header{flex:0 0 auto;pointer-events:none;min-width:256px}:host ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host(.expanded){background-color:var(--theme-color-ghost--active)}:host ::slotted(a[href]){text-decoration:none !important}`;
const DefaultIxMenuItemHeight = 40;
const DefaultAnimationTimeout = 150;
const HideDropdownGracePeriodMs = 250;
let categorySequenceId = 0;
const MenuCategory = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.closeOtherCategories = createEvent(this, "closeOtherCategories", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Display name of the category
   */
  label;
  /**
   * Icon of the category
   */
  icon;
  /**
   * Show notification count on the category
   */
  notifications;
  /**
   * Will be shown as tooltip text, if not provided menu text content will be used.
   *
   * @since 4.0.0
   */
  tooltipText;
  /**
   * Disable the tooltip for this menu category.
   *
   * @since 5.3.0
   */
  disableTooltip = false;
  /** @internal */
  closeOtherCategories;
  menuExpand = false;
  showItems = false;
  showDropdown = false;
  nestedItems = [];
  /** @internal */
  async setTabIndex(value) {
    await this.categoryParentRef.current?.setTabIndex(value);
  }
  observer;
  menuItemsContainer;
  ixMenu;
  dropdownRef = makeRef();
  categoryParentRef = makeRef();
  categoryId = createSequentialId("ix-menu-category-", categorySequenceId++);
  focusFirstItemOnDropdownOpen = false;
  hideDropdownTimeout;
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
  focusFirstItem() {
    const items = this.getNestedItems();
    const firstItem = items[0];
    if (firstItem) {
      requestAnimationFrameNoNgZone(() => firstItem.focus());
    }
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
    if (!this.menuItemsContainer) {
      return;
    }
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
    this.showItems = true;
    this.showDropdown = false;
    if (!this.menuItemsContainer) {
      return;
    }
    animate(this.menuItemsContainer, {
      duration: DefaultAnimationTimeout,
      easing: "easeInSine",
      opacity: [0, 1],
      maxHeight: [0, this.getNestedItemsHeight() + DefaultIxMenuItemHeight],
      onComplete: () => {
        this.clearMenuItemsContainerStyles();
      }
    });
  }
  isPointerMovingInsideCategory(relatedTarget) {
    if (!(relatedTarget instanceof Node)) {
      return false;
    }
    const dropdown = this.dropdownRef.current;
    return this.hostElement.contains(relatedTarget) || !!this.hostElement.shadowRoot?.contains(relatedTarget) || dropdown === relatedTarget || !!dropdown?.contains(relatedTarget) || !!dropdown?.shadowRoot?.contains(relatedTarget);
  }
  clearHideDropdownTimeout() {
    if (this.hideDropdownTimeout !== void 0) {
      window.clearTimeout(this.hideDropdownTimeout);
      this.hideDropdownTimeout = void 0;
    }
  }
  scheduleHideMenuItemDropdown() {
    this.clearHideDropdownTimeout();
    this.hideDropdownTimeout = window.setTimeout(() => {
      this.hideDropdownTimeout = void 0;
      this.hideMenuItemDropdown();
    }, HideDropdownGracePeriodMs);
  }
  showMenuItemDropdown() {
    this.clearHideDropdownTimeout();
    if (this.ixMenu?.expand) {
      return;
    }
    this.closeOtherCategories.emit(this.categoryId);
    const dropdownId = this.dropdownRef.current?.dataset.ixDropdown;
    if (dropdownId) {
      const ref = dropdownController.getDropdownById(dropdownId);
      if (ref) {
        dropdownController.present(ref);
      }
    }
  }
  hideMenuItemDropdown(event) {
    if (event?.detail === this.categoryId) {
      return;
    }
    this.clearHideDropdownTimeout();
    const dropdownId = this.dropdownRef.current?.dataset.ixDropdown;
    if (dropdownId) {
      const ref = dropdownController.getDropdownById(dropdownId);
      if (ref) {
        dropdownController.dismiss(ref);
      }
    }
  }
  handleCategoryVisibility() {
    if (this.ixMenu?.expand) {
      this.onExpandCategory(!this.showItems);
      return;
    }
    this.showMenuItemDropdown();
  }
  onDropdownShowChange(dropdownShow) {
    if (dropdownShow) {
      return;
    }
    const activeElement = document.activeElement;
    const isFocused = getComposedPath(activeElement).includes(this.hostElement);
    if (hasKeyboardMode() && isFocused) {
      requestAnimationFrameNoNgZone(() => requestAnimationFrameNoNgZone(() => this.hostElement.focus()));
    }
  }
  onDropdownShowChanged(dropdownShown) {
    this.showDropdown = dropdownShown;
    if (!dropdownShown) {
      this.focusFirstItemOnDropdownOpen = false;
      return;
    }
    if (this.focusFirstItemOnDropdownOpen) {
      this.focusFirstItemOnDropdownOpen = false;
      this.focusFirstItem();
    }
  }
  onDropdownFocusOut() {
    requestAnimationFrameNoNgZone(() => {
      const activeElement = document.activeElement;
      if (!activeElement) {
        return;
      }
      const activePath = getComposedPath(activeElement);
      const focusInsideCategory = activePath.includes(this.hostElement);
      const focusInsideDropdown = !!this.dropdownRef.current && activePath.includes(this.dropdownRef.current);
      if (!focusInsideCategory && !focusInsideDropdown) {
        this.showDropdown = false;
      }
    });
  }
  onNestedItemSelect() {
    if (!this.ixMenu?.expand) {
      this.showDropdown = false;
    }
  }
  onCategoryClick(event) {
    event.stopPropagation();
    this.handleCategoryVisibility();
  }
  onKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const isClosingPanel = this.ixMenu?.expand && this.showItems;
      const isCollapsedMenu = !this.ixMenu?.expand;
      this.handleCategoryVisibility();
      if (!isClosingPanel) {
        if (isCollapsedMenu) {
          this.focusFirstItemOnDropdownOpen = true;
          return;
        }
        this.focusFirstItem();
      }
      return;
    }
    if (event.key === "ArrowDown" && this.showItems) {
      event.preventDefault();
      this.focusFirstItem();
    }
  }
  onMenuItemsKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.categoryParentRef.current?.focus();
      this.handleCategoryVisibility();
      return;
    }
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "Tab") {
      return;
    }
    const items = this.getNestedItems();
    if (items.length === 0) {
      return;
    }
    const path = event.composedPath();
    const currentIndex = items.findIndex((item) => path.includes(item));
    if (currentIndex === -1) {
      return;
    }
    event.preventDefault();
    if (event.key === "ArrowDown" || event.key === "Tab" && !event.shiftKey) {
      items[(currentIndex + 1) % items.length].focus();
    } else {
      items[(currentIndex - 1 + items.length) % items.length].focus();
    }
  }
  suppressAnchorWrapperTabStops() {
    Array.from(this.hostElement.querySelectorAll(":scope > a")).filter((a) => a.querySelector("ix-menu-item")).forEach((a) => {
      if (a.getAttribute("tabindex") !== "-1") {
        a.setAttribute("tabindex", "-1");
      }
    });
  }
  onNestedItemsChanged(mutations) {
    this.suppressAnchorWrapperTabStops();
    const oldNestedItemsLength = this.nestedItems.length;
    this.nestedItems = this.getNestedItems();
    if (this.showItems && this.menuItemsContainer && oldNestedItemsLength !== this.nestedItems.length) {
      this.menuItemsContainer.style.maxHeight = `${this.getNestedItemsHeight() + DefaultIxMenuItemHeight}px`;
    }
    if (!this.menuExpand || this.showItems || !mutations) {
      return;
    }
    for (const mutation of mutations ?? []) {
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
    super.componentWillLoad();
    const closestMenu = closestIxMenu(this.hostElement);
    if (!closestMenu) {
      throw Error("ix-menu-category can only be used as a child of ix-menu");
    }
    this.ixMenu = closestMenu;
    this.menuExpand = this.ixMenu.expand;
    this.showItems = this.isCategoryItemListVisible();
  }
  componentDidLoad() {
    this.observer = createMutationObserver((mutations) => this.onNestedItemsChanged(mutations));
    this.observer.observe(this.hostElement, {
      attributes: true,
      attributeFilter: ["class"],
      childList: true,
      subtree: true
    });
    requestAnimationFrameNoNgZone(() => {
      this.onNestedItemsChanged();
      this.onShowItemsChange();
    });
    this.ixMenu?.addEventListener("expandChange", ({ detail: menuExpand }) => {
      this.menuExpand = menuExpand;
      if (!menuExpand) {
        this.clearMenuItemsContainerStyles();
      }
      this.showItems = this.isCategoryItemListVisible();
    });
  }
  clearMenuItemsContainerStyles() {
    this.menuItemsContainer?.style.removeProperty("max-height");
    this.menuItemsContainer?.style.removeProperty("opacity");
  }
  onShowItemsChange() {
    this.getNestedItems().forEach((item) => {
      item.hidden = !this.showItems && !this.showDropdown;
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.observer) {
      this.observer.disconnect();
    }
    this.clearHideDropdownTimeout();
  }
  render() {
    const inheritedA11yWithoutRole = {
      ...this.inheritAriaAttributes
    };
    delete inheritedA11yWithoutRole.role;
    return h(Host, { key: "4f335ff0ef17c277b4e96322df4533c761e71d79", class: {
      expanded: this.showItems
    }, onIxMenuCategoryItemSelect: () => this.onNestedItemSelect(), onPointerEnter: () => {
      this.showMenuItemDropdown();
    }, onPointerLeave: (event) => {
      if (event.pointerType === "touch") {
        return;
      }
      if (this.isPointerMovingInsideCategory(event.relatedTarget)) {
        return;
      }
      this.scheduleHideMenuItemDropdown();
    } }, h("ix-menu-item", { key: "1b7e8bc2152e6f4b2e35062665515f4c5955fbe8", ...inheritedA11yWithoutRole, "aria-haspopup": "menu", "aria-expanded": this.showItems || this.showDropdown ? "true" : "false", id: this.categoryId, ref: this.categoryParentRef, class: "category-parent", active: this.isNestedItemActive(), notifications: this.notifications, icon: this.icon, onClick: (e) => this.onCategoryClick(e), onKeyDown: (event) => this.onKeyDown(event), tooltipText: this.tooltipText, disableTooltip: this.disableTooltip, isCategory: true, menuCategoryLabel: this.label }, h("span", { key: "68385013e74271401dff4889d9009e1e84cc1a27", class: "category" }, h("span", { key: "ed94a4c75eb8348548ed738630265957b57f71c4", class: "category-text" }, this.label), h("ix-icon", { key: "6c0b893ba4f455777287b9f7943a8cd2e55240a6", name: iconChevronDownSmall, class: {
      "category-chevron": true,
      "category-chevron--open": this.showItems
    }, "aria-hidden": "true" }))), h("div", { key: "91c06f47e23bf084cf13140d73732846adc80d48", ref: (ref) => this.menuItemsContainer = ref, class: {
      "menu-items": true,
      "menu-items--expanded": this.showItems,
      "menu-items--collapsed": !this.showItems
    }, role: "menu", "aria-labelledby": this.categoryId, onKeyDown: (e) => this.onMenuItemsKeyDown(e) }, this.showItems ? h("slot", null) : null), h("ix-dropdown", { key: "3ef905d0d182b70942996b585e17832536c93ceb", ref: this.dropdownRef, hostRole: "menu", "aria-label": this.label, closeBehavior: "both", show: this.showDropdown, onShowChange: ({ detail }) => this.onDropdownShowChange(detail), onShowChanged: ({ detail }) => this.onDropdownShowChanged(detail), class: "category-dropdown", suppressOverflowBehavior: true, anchor: this.hostElement, placement: "right-start", offset: {
      mainAxis: 3
    }, focusHost: this.hostElement, onPointerEnter: () => {
      this.clearHideDropdownTimeout();
    }, onClick: (e) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.tagName === "IX-MENU-ITEM") {
          this.showDropdown = false;
        } else {
          e.preventDefault();
        }
      }
    }, onFocusout: () => this.onDropdownFocusOut() }, h("ix-dropdown-item", { key: "52e21c17bdf6c90cf209f3936b3470addb0525db", class: "category-dropdown-header", tabindex: -1, "aria-hidden": "true", suppressChecked: true }, h("ix-typography", { key: "9a88890234064df0b266e91922584b1aa382ea71", format: "label", bold: true, textColor: "std" }, this.label)), h("ix-divider", { key: "522f7e06eb4e093f8e5e315c0cd36e4992320a11" }), h("div", { key: "8dafa2e358d7dafda0303a451912c2e5296cd4d4", class: "category-dropdown-body" }, h("slot", { key: "818cec61ca2cabfdd8dc19ec5cd0fe6b51d68adb" }))));
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
      "showDropdown": [{
        "onShowItemsChange": 0
      }],
      "showItems": [{
        "onShowItemsChange": 0
      }]
    };
  }
};
MenuCategory.style = menuCategoryCss();
export {
  MenuCategory as ix_menu_category
};
