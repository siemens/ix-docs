import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-BTgWS9s6.js";
import { G as iconChevronUpSmall, t as iconChevronDownSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { b as a11yHostAttributes, a as a11yBoolean, f as forceTabIndex } from "./a11y-C21npbUc-CU_Bg8RX.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { A as AriaActiveDescendantMixin } from "./aria-activedescendant.mixin-CM-NUHTW-CwKLvkpN.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { c as closestPassShadow } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const dropdownButtonCss = () => `:host{--ix-dropdown-button-border-radius:var(--theme-btn--border-radius);--ix-dropdown-button-focus-outline-color:var(--theme-color-focus-bdr);--ix-dropdown-button-focus-outline-offset:var(     --theme-btn--focus--outline-offset   );--ix-dropdown-button-primary-color:var(--theme-btn-primary--color);--ix-dropdown-button-primary-color-disabled:var(     --theme-btn-primary--color--disabled   );--ix-dropdown-button-primary-background-active:var(     --theme-btn-primary--background--active   );--ix-dropdown-button-primary-color-active:var(     --theme-btn-primary--color--active   );--ix-dropdown-button-primary-border-color-active:var(     --theme-btn-primary--border-color--active   );--ix-dropdown-button-secondary-color:var(--theme-btn-secondary--color);--ix-dropdown-button-secondary-color-disabled:var(     --theme-btn-secondary--color--disabled   );--ix-dropdown-button-secondary-background-active:var(     --theme-btn-secondary--background--active   );--ix-dropdown-button-secondary-color-active:var(     --theme-btn-secondary--color--active   );--ix-dropdown-button-secondary-border-color-active:var(     --theme-btn-secondary--border-color--active   );--ix-dropdown-button-tertiary-color:var(--theme-btn-tertiary--color);--ix-dropdown-button-tertiary-color-disabled:var(     --theme-btn-tertiary--color--disabled   );--ix-dropdown-button-tertiary-background-active:var(     --theme-btn-tertiary--background--active   );--ix-dropdown-button-tertiary-color-active:var(     --theme-btn-tertiary--color--active   );--ix-dropdown-button-tertiary-border-color-active:var(     --theme-btn-tertiary--border-color--active   );--ix-dropdown-button-subtle-primary-color:var(--theme-btn-subtle-primary--color);--ix-dropdown-button-subtle-primary-color-disabled:var(     --theme-btn-subtle-primary--color--disabled   );--ix-dropdown-button-subtle-primary-background-active:var(     --theme-btn-subtle-primary--background--active   );--ix-dropdown-button-subtle-primary-color-active:var(     --theme-btn-subtle-primary--color--active   );--ix-dropdown-button-subtle-primary-border-color-active:var(     --theme-btn-subtle-primary--border-color--active   );--ix-dropdown-button-subtle-secondary-color:var(--theme-btn-subtle-secondary--color);--ix-dropdown-button-subtle-secondary-color-disabled:var(     --theme-btn-subtle-secondary--color--disabled   );--ix-dropdown-button-subtle-secondary-background-active:var(     --theme-btn-subtle-secondary--background--active   );--ix-dropdown-button-subtle-secondary-color-active:var(     --theme-btn-subtle-secondary--color--active   );--ix-dropdown-button-subtle-secondary-border-color-active:var(     --theme-btn-subtle-secondary--border-color--active   );--ix-dropdown-button-subtle-tertiary-color:var(--theme-btn-subtle-tertiary--color);--ix-dropdown-button-subtle-tertiary-color-disabled:var(     --theme-btn-subtle-tertiary--color--disabled   );--ix-dropdown-button-subtle-tertiary-background-active:var(     --theme-btn-subtle-tertiary--background--active   );--ix-dropdown-button-subtle-tertiary-color-active:var(     --theme-btn-subtle-tertiary--color--active   );--ix-dropdown-button-subtle-tertiary-border-color-active:var(     --theme-btn-subtle-tertiary--border-color--active   );--ix-dropdown-button-danger-primary-color:var(--theme-btn-danger-primary--color);--ix-dropdown-button-danger-primary-color-disabled:var(     --theme-btn-danger-primary--color--disabled   );--ix-dropdown-button-danger-primary-background-active:var(     --theme-btn-danger-primary--background--active   );--ix-dropdown-button-danger-primary-color-active:var(     --theme-btn-danger-primary--color--active   );--ix-dropdown-button-danger-primary-border-color-active:var(     --theme-btn-danger-primary--border-color--active   );--ix-dropdown-button-danger-secondary-color:var(--theme-btn-danger-secondary--color);--ix-dropdown-button-danger-secondary-color-disabled:var(     --theme-btn-danger-secondary--color--disabled   );--ix-dropdown-button-danger-secondary-background-active:var(     --theme-btn-danger-secondary--background--active   );--ix-dropdown-button-danger-secondary-color-active:var(     --theme-btn-danger-secondary--color--active   );--ix-dropdown-button-danger-secondary-border-color-active:var(     --theme-btn-danger-secondary--border-color--active   );--ix-dropdown-button-danger-tertiary-color:var(--theme-btn-danger-tertiary--color);--ix-dropdown-button-danger-tertiary-color-disabled:var(     --theme-btn-danger-tertiary--color--disabled   );--ix-dropdown-button-danger-tertiary-background-active:var(     --theme-btn-danger-tertiary--background--active   );--ix-dropdown-button-danger-tertiary-color-active:var(     --theme-btn-danger-tertiary--color--active   );--ix-dropdown-button-danger-tertiary-border-color-active:var(     --theme-btn-danger-tertiary--border-color--active   )}:host{display:inline-block;position:relative;height:2rem;width:auto;--ix-dropdown-button-border-radius-left:var(     --ix-dropdown-button-border-radius   );--ix-dropdown-button-border-radius-right:var(     --ix-dropdown-button-border-radius   );border-top-left-radius:var(--ix-dropdown-button-border-radius-left);border-bottom-left-radius:var(--ix-dropdown-button-border-radius-left);border-top-right-radius:var(--ix-dropdown-button-border-radius-right);border-bottom-right-radius:var(--ix-dropdown-button-border-radius-right)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .hide{display:none}:host ix-button,:host ix-icon-button{--ix-button-border-radius-left:var(     --ix-dropdown-button-border-radius-left   );--ix-button-border-radius-right:var(     --ix-dropdown-button-border-radius-right   )}:host .dropdown-button{display:block;position:relative;width:100%;height:100%}:host .dropdown-button>ix-button{width:100%;height:100%}:host .dropdown-button .button-label{margin-right:auto;min-width:0px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .dropdown-button .dropdown-icon{margin-right:0.25rem}:host .triangle{position:absolute;margin-inline-start:1.5625rem;margin-block-start:-0.4375rem;border-right:0 solid transparent;border-left:4px solid transparent;border-top:0 solid transparent;border-bottom:4px solid;color:var(--ix-dropdown-button-primary-color)}:host .triangle.primary{color:var(--ix-dropdown-button-primary-color)}:host .triangle.secondary{color:var(--ix-dropdown-button-secondary-color)}:host .triangle.tertiary{color:var(--ix-dropdown-button-tertiary-color)}:host .triangle.primary.disabled{color:var(--ix-dropdown-button-primary-color-disabled)}:host .triangle.secondary.disabled{color:var(--ix-dropdown-button-secondary-color-disabled)}:host .triangle.tertiary.disabled{color:var(--ix-dropdown-button-tertiary-color-disabled)}:host .triangle.subtle-primary{color:var(--ix-dropdown-button-subtle-primary-color)}:host .triangle.subtle-secondary{color:var(--ix-dropdown-button-subtle-secondary-color)}:host .triangle.subtle-tertiary{color:var(--ix-dropdown-button-subtle-tertiary-color)}:host .triangle.subtle-primary.disabled{color:var(--ix-dropdown-button-subtle-primary-color-disabled)}:host .triangle.subtle-secondary.disabled{color:var(--ix-dropdown-button-subtle-secondary-color-disabled)}:host .triangle.subtle-tertiary.disabled{color:var(--ix-dropdown-button-subtle-tertiary-color-disabled)}:host .triangle.danger-primary{color:var(--ix-dropdown-button-danger-primary-color)}:host .triangle.danger-secondary{color:var(--ix-dropdown-button-danger-secondary-color)}:host .triangle.danger-tertiary{color:var(--ix-dropdown-button-danger-tertiary-color)}:host .triangle.danger-primary.disabled{color:var(--ix-dropdown-button-danger-primary-color-disabled)}:host .triangle.danger-secondary.disabled{color:var(--ix-dropdown-button-danger-secondary-color-disabled)}:host .triangle.danger-tertiary.disabled{color:var(--ix-dropdown-button-danger-tertiary-color-disabled)}:host .content{display:flex;align-items:center}:host .remove-button-min-width{min-width:0px}:host(.host-context-date-picker) .internal-button,:host(.host-context-breadcrumb) .internal-button{min-width:0px;padding:0}:host(.host-context-date-picker) ix-dropdown{max-height:15.625rem;overflow-y:scroll}:host(:focus-visible){outline:1px solid var(--ix-dropdown-button-focus-outline-color);outline-offset:var(--ix-dropdown-button-focus-outline-offset)}:host([aria-expanded=true]){--theme-btn-primary--background:var(     --ix-dropdown-button-primary-background-active   );--theme-btn-primary--background--hover:var(     --ix-dropdown-button-primary-background-active   );--theme-btn-primary--color:var(--ix-dropdown-button-primary-color-active);--theme-btn-primary--color--hover:var(     --ix-dropdown-button-primary-color-active   );--theme-btn-primary--border-color:var(     --ix-dropdown-button-primary-border-color-active   );--theme-btn-primary--border-color--hover:var(     --ix-dropdown-button-primary-border-color-active   );--theme-btn-secondary--background:var(     --ix-dropdown-button-secondary-background-active   );--theme-btn-secondary--background--hover:var(     --ix-dropdown-button-secondary-background-active   );--theme-btn-secondary--color:var(--ix-dropdown-button-secondary-color-active);--theme-btn-secondary--color--hover:var(     --ix-dropdown-button-secondary-color-active   );--theme-btn-secondary--border-color:var(     --ix-dropdown-button-secondary-border-color-active   );--theme-btn-secondary--border-color--hover:var(     --ix-dropdown-button-secondary-border-color-active   );--theme-btn-tertiary--background:var(     --ix-dropdown-button-tertiary-background-active   );--theme-btn-tertiary--background--hover:var(     --ix-dropdown-button-tertiary-background-active   );--theme-btn-tertiary--color:var(--ix-dropdown-button-tertiary-color-active);--theme-btn-tertiary--color--hover:var(     --ix-dropdown-button-tertiary-color-active   );--theme-btn-tertiary--border-color:var(     --ix-dropdown-button-tertiary-border-color-active   );--theme-btn-tertiary--border-color--hover:var(     --ix-dropdown-button-tertiary-border-color-active   );--theme-btn-subtle-primary--background:var(     --ix-dropdown-button-subtle-primary-background-active   );--theme-btn-subtle-primary--background--hover:var(     --ix-dropdown-button-subtle-primary-background-active   );--theme-btn-subtle-primary--color:var(--ix-dropdown-button-subtle-primary-color-active);--theme-btn-subtle-primary--color--hover:var(     --ix-dropdown-button-subtle-primary-color-active   );--theme-btn-subtle-primary--border-color:var(     --ix-dropdown-button-subtle-primary-border-color-active   );--theme-btn-subtle-primary--border-color--hover:var(     --ix-dropdown-button-subtle-primary-border-color-active   );--theme-btn-subtle-secondary--background:var(     --ix-dropdown-button-subtle-secondary-background-active   );--theme-btn-subtle-secondary--background--hover:var(     --ix-dropdown-button-subtle-secondary-background-active   );--theme-btn-subtle-secondary--color:var(--ix-dropdown-button-subtle-secondary-color-active);--theme-btn-subtle-secondary--color--hover:var(     --ix-dropdown-button-subtle-secondary-color-active   );--theme-btn-subtle-secondary--border-color:var(     --ix-dropdown-button-subtle-secondary-border-color-active   );--theme-btn-subtle-secondary--border-color--hover:var(     --ix-dropdown-button-subtle-secondary-border-color-active   );--theme-btn-subtle-tertiary--background:var(     --ix-dropdown-button-subtle-tertiary-background-active   );--theme-btn-subtle-tertiary--background--hover:var(     --ix-dropdown-button-subtle-tertiary-background-active   );--theme-btn-subtle-tertiary--color:var(--ix-dropdown-button-subtle-tertiary-color-active);--theme-btn-subtle-tertiary--color--hover:var(     --ix-dropdown-button-subtle-tertiary-color-active   );--theme-btn-subtle-tertiary--border-color:var(     --ix-dropdown-button-subtle-tertiary-border-color-active   );--theme-btn-subtle-tertiary--border-color--hover:var(     --ix-dropdown-button-subtle-tertiary-border-color-active   );--theme-btn-danger-primary--background:var(     --ix-dropdown-button-danger-primary-background-active   );--theme-btn-danger-primary--background--hover:var(     --ix-dropdown-button-danger-primary-background-active   );--theme-btn-danger-primary--color:var(--ix-dropdown-button-danger-primary-color-active);--theme-btn-danger-primary--color--hover:var(     --ix-dropdown-button-danger-primary-color-active   );--theme-btn-danger-primary--border-color:var(     --ix-dropdown-button-danger-primary-border-color-active   );--theme-btn-danger-primary--border-color--hover:var(     --ix-dropdown-button-danger-primary-border-color-active   );--theme-btn-danger-secondary--background:var(     --ix-dropdown-button-danger-secondary-background-active   );--theme-btn-danger-secondary--background--hover:var(     --ix-dropdown-button-danger-secondary-background-active   );--theme-btn-danger-secondary--color:var(--ix-dropdown-button-danger-secondary-color-active);--theme-btn-danger-secondary--color--hover:var(     --ix-dropdown-button-danger-secondary-color-active   );--theme-btn-danger-secondary--border-color:var(     --ix-dropdown-button-danger-secondary-border-color-active   );--theme-btn-danger-secondary--border-color--hover:var(     --ix-dropdown-button-danger-secondary-border-color-active   );--theme-btn-danger-tertiary--background:var(     --ix-dropdown-button-danger-tertiary-background-active   );--theme-btn-danger-tertiary--background--hover:var(     --ix-dropdown-button-danger-tertiary-background-active   );--theme-btn-danger-tertiary--color:var(--ix-dropdown-button-danger-tertiary-color-active);--theme-btn-danger-tertiary--color--hover:var(     --ix-dropdown-button-danger-tertiary-color-active   );--theme-btn-danger-tertiary--border-color:var(     --ix-dropdown-button-danger-tertiary-border-color-active   );--theme-btn-danger-tertiary--border-color--hover:var(     --ix-dropdown-button-danger-tertiary-border-color-active   )}:host([aria-expanded=true]:focus-visible){outline:none}:host(.disabled){pointer-events:none}`;
const DropdownButton = class extends Mixin(...DefaultMixins, ComponentIdMixin, AriaActiveDescendantMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.showChange = createEvent(this, "showChange", 7);
    this.showChanged = createEvent(this, "showChanged", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Button variant
   */
  variant = "primary";
  /**
   * Disable button
   */
  disabled = false;
  /**
   * Set label
   */
  label;
  /**
   * Button icon
   */
  icon;
  /**
   * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
   */
  closeBehavior = "both";
  /**
   * Placement of the dropdown
   */
  placement;
  /**
   * ARIA label for the dropdown button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelDropdownButton;
  /**
   * If true, the dropdown will try to focus checked items first when opened via keyboard, otherwise it will always focus the first focusable item.
   *
   * @since 5.0.0
   */
  focusCheckedItem = false;
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Suppress the use of the aria-activedescendant attribute and related focus proxy functionality.
   *
   * @internal
   * */
  suppressAriaActiveDescendant = false;
  /**
   * Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
   */
  showChange;
  /**
   * Fire event after visibility of dropdown has changed
   */
  showChanged;
  dropdownShow = false;
  inheritAriaAttributes = {};
  dropdownButtonId = this.getHostElementId();
  dropdownAnchor = makeRef();
  dropdownRef = makeRef();
  hostContext;
  getTriangle() {
    return h("div", { class: {
      triangle: true,
      [this.variant]: true,
      hide: !!this.label,
      disabled: this.disabled
    } });
  }
  onDropdownShowChanged = (event) => {
    if (this.disabled && event.detail) {
      return;
    }
    this.dropdownShow = event.detail;
  };
  componentDidLoad() {
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement, [
      "aria-label",
      "aria-activedescendant",
      "aria-haspopup",
      "aria-controls",
      "aria-disabled",
      "aria-expanded",
      "aria-current",
      "role"
    ]);
  }
  componentWillRender() {
    this.hostContext = {
      breadcrumb: !!closestPassShadow(this.hostElement, "ix-breadcrumb"),
      datePicker: !!closestPassShadow(this.hostElement, "ix-date-picker"),
      splitButton: !!closestPassShadow(this.hostElement, "ix-split-button"),
      tabs: !!closestPassShadow(this.hostElement, "ix-tabs")
    };
  }
  getControllingAriaElement() {
    return this.hostElement;
  }
  isAriaActiveDescendantActive() {
    return !this.suppressAriaActiveDescendant && this.dropdownShow;
  }
  getAriaActiveDescendantProxyItemId() {
    return false;
  }
  /**@internal */
  async getDropdownReference() {
    return this.dropdownRef.waitForCurrent();
  }
  render() {
    const ariaAttributes = {
      ...this.inheritAriaAttributes,
      "aria-haspopup": "true",
      "aria-disabled": a11yBoolean(this.disabled),
      "aria-expanded": a11yBoolean(this.dropdownShow),
      role: "button"
    };
    if (!this.inheritAriaAttributes["aria-controls"]) {
      ariaAttributes["aria-controls"] = `dropdown-button-menu-${this.dropdownButtonId}`;
    }
    const commonProperties = {
      id: `dropdown-button-${this.dropdownButtonId}`,
      disabled: this.disabled,
      variant: this.variant
    };
    const hideChevron = this.hostContext?.breadcrumb || this.hostContext?.datePicker || this.hostContext?.splitButton || this.hostContext?.tabs;
    return h(Host, { key: "ab9705c11ce957fc00a5dbe361e7e50fd8fab6c8", class: {
      disabled: this.disabled,
      "host-context-breadcrumb": !!this.hostContext?.breadcrumb,
      "host-context-date-picker": !!this.hostContext?.datePicker,
      "host-context-tabs": !!this.hostContext?.tabs
    }, ref: this.dropdownAnchor, tabIndex: this.disabled ? -1 : 0, ...ariaAttributes }, h("div", { key: "09be27cd7b565ebcc71c37983c6300afa1a95802", class: "dropdown-button" }, this.label || this.label === null ? h("ix-button", { ...commonProperties, class: "internal-button", alignment: "start", ref: (ref) => forceTabIndex(ref, -1), ariaLabelButton: this.ariaLabelDropdownButton ?? (this.dropdownShow ? "Close dropdown" : "Open dropdown") }, h("div", { class: "content" }, this.icon ? h("ix-icon", { name: this.icon, size: "24", class: "dropdown-icon" }) : null, h("div", { class: "button-label" }, this.label), h("slot", { name: "button-label" }), !hideChevron && h("ix-icon", { "aria-hidden": "true", name: this.dropdownShow ? iconChevronUpSmall : iconChevronDownSmall, size: "24" }))) : h("div", null, h("ix-icon-button", { ...commonProperties, icon: this.icon, ref: (ref) => forceTabIndex(ref, -1), "aria-label": this.ariaLabelDropdownButton ?? (this.dropdownShow ? "Close dropdown" : "Open dropdown") }), !hideChevron && this.getTriangle())), h("ix-dropdown", { key: "a71d02c22bd6d0f79d8f4dbfa0b7bfe77e339e8f", role: "menu", ref: this.dropdownRef, id: `dropdown-button-menu-${this.dropdownButtonId}`, "aria-labelledby": `dropdown-button-${this.dropdownButtonId}`, trigger: this.dropdownAnchor.waitForCurrent(), placement: this.placement, closeBehavior: this.closeBehavior, enableTopLayer: this.enableTopLayer, disableFocusTrap: true, focusCheckedItem: this.focusCheckedItem, onShowChanged: (event) => this.onDropdownShowChanged(event), onScroll: (event) => {
      const scrollEvent = new CustomEvent("scroll", {
        bubbles: event.bubbles,
        cancelable: event.cancelable,
        detail: event.detail
      });
      this.hostElement.dispatchEvent(scrollEvent);
    } }, h("slot", { key: "330b19b734d3ed649967f7360f5d1424fed3d665" })));
  }
};
DropdownButton.style = dropdownButtonCss();
export {
  DropdownButton as ix_dropdown_button
};
