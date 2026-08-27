import { r as registerInstance, h, H as Host } from "./global-DsITLPyL.js";
import { g as getFallbackLabelFromIconName, a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
const actionCardCss = () => `:host{display:block;position:relative;min-width:13.375rem;width:13.375rem;height:7.5rem;min-height:7.5rem;cursor:pointer;margin:0.25rem 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host button{width:100%;height:100%;display:block;background:transparent;text-align:start;padding:0;border:0;border-radius:var(--theme-btn--border-radius);box-shadow:initial}:host button:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host button[disabled]{cursor:default}:host ix-card{width:100%;height:100%}`;
const IxActionCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Card variant
   */
  variant = "outline";
  /**
   * Card icon
   */
  icon = void 0;
  /**
   * ARIA label for the icon
   *
   * @since 3.2.0
   */
  ariaLabelIcon;
  /**
   * Card heading
   */
  heading;
  /**
   * Card subheading
   */
  subheading;
  /**
   * Card selection
   */
  selected = false;
  /**
   * ARIA label for the card
   *
   * @since 3.2.0
   */
  ariaLabelCard;
  /**
   * If true, disables hover and active styles and changes cursor to default
   */
  passive = false;
  getSubheadingTextColor() {
    return this.variant === "outline" || this.variant === "filled" ? "soft" : void 0;
  }
  render() {
    const ariaLabelledBy = !this.ariaLabelCard && this.heading ? "ix-action-card-heading" : void 0;
    return h(Host, { key: "13c017461553dde76509473679c2c0942f0536ef" }, h("button", { key: "b0a154fff6809c67e595a90137ba46eaab2654ed", type: "button", disabled: this.passive, "aria-label": this.ariaLabelCard, "aria-labelledby": ariaLabelledBy }, h("ix-card", { key: "1718627fa2718bf42b19d8b967ea556fa0b7bc09", selected: this.selected, variant: this.variant, passive: this.passive, class: this.passive ? void 0 : "pointer" }, h("ix-card-content", { key: "fa854f2be562cd938122504d2f531f4f9bac52e9" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon || getFallbackLabelFromIconName(this.icon) }) : null, h("div", { key: "bcf7099102118877945d25a908b988e6bfccf00f" }, this.heading ? h("ix-typography", { id: "ix-action-card-heading", "aria-hidden": a11yBoolean(!ariaLabelledBy), format: "h4" }, this.heading) : null, this.subheading ? h("ix-typography", { format: "h5", "text-color": this.getSubheadingTextColor() }, this.subheading) : null, h("slot", { key: "d77220fa34088b62378d3c095c50f87e4442a002" }))))));
  }
};
IxActionCard.style = actionCardCss();
export {
  IxActionCard as ix_action_card
};
