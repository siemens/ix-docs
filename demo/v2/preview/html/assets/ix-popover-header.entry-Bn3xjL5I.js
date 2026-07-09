import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C4tOo1JZ.js";
import { y as iconClose } from "./index-DgUGsIlh-CLxQRaVd.js";
import { a as a11yBoolean } from "./a11y-C21npbUc-CU_Bg8RX.js";
import { b as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-IK9ialav-CffRa992.js";
import { c as closestPassShadow } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const popoverHeaderCss = () => `:host{display:flex;padding:0.75rem;align-items:center;gap:0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .popover-title{flex-grow:1}:host .additional-items{display:flex;align-items:center;gap:0.25rem}:host .popover-close{align-self:flex-start;border-radius:var(--theme-small-border-radius);--ix-icon-button-color:var(--theme-popover-close--color);--theme-btn-tertiary--color:var(--theme-popover-close--color);--theme-btn-tertiary--color--hover:var(--theme-popover-close--color);--theme-btn-tertiary--color--active:var(--theme-popover-close--color);--theme-btn-tertiary--background:var(     --theme-popover-close-btn--background   );--theme-btn-tertiary--background--hover:var(     --theme-popover-close-btn--background--hover   );--theme-btn-tertiary--background--active:var(     --theme-popover-close-btn--background--active   );--theme-btn-tertiary--border-color:transparent;--theme-btn-tertiary--border-color--hover:transparent;--theme-btn-tertiary--border-color--active:transparent}`;
const PopoverHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Icon name displayed before the title.
   * The icon is decorative; provide context in the default slot heading.
   *
   * @since 5.1.0
   */
  icon;
  /**
   * Icon color
   *
   * @since 5.1.0
   */
  iconColor;
  /**
   * Hide the close (X) button
   *
   * @since 5.1.0
   */
  hideClose = false;
  /**
   * ARIA label for the close icon button.
   * Will be set as aria-label on the nested HTML button element.
   *
   * @since 5.1.0
   */
  ariaLabelCloseIconButton = "Close";
  /**
   * Fires when close button is clicked.
   * Cancel to prevent closing.
   *
   * @since 5.1.0
   */
  closeClick;
  parentPopover;
  componentDidLoad() {
    this.parentPopover = closestPassShadow(this.hostElement, "ix-popover");
  }
  onCloseClick(event) {
    const ce = this.closeClick.emit(event);
    if (ce.defaultPrevented || event.defaultPrevented) {
      return;
    }
    this.parentPopover?.hidePopover();
  }
  render() {
    return h(Host, { key: "d75ad6fc30a8b3df9d1588fc18be610f19946a15", [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, this.icon ? h("ix-icon", { name: this.icon, color: this.iconColor, size: "24", "aria-hidden": a11yBoolean(true) }) : null, h("div", { key: "c5db5b3c4d9537f1b5ec2d53eda5d94aba0984d5", class: "popover-title" }, h("ix-typography", { key: "0c87f6cb01be5089a35f0eeb30e6aa7743865eef", format: "h5" }, h("slot", { key: "d5bcd06f9dd501f7f52861d0ed2c6dd967bd8196" }))), h("div", { key: "fa7365f8ddce2cd12f92165160fb780426a994ce", class: "additional-items" }, h("slot", { key: "b093c196c32eff075d65a5a9e570292174a1f943", name: "additional-items" })), this.hideClose ? null : h("ix-icon-button", { class: "popover-close", onClick: (event) => this.onCloseClick(event), variant: "tertiary", icon: iconClose, "aria-label": this.ariaLabelCloseIconButton }));
  }
  static get delegatesFocus() {
    return true;
  }
};
PopoverHeader.style = popoverHeaderCss();
export {
  PopoverHeader as ix_popover_header
};
