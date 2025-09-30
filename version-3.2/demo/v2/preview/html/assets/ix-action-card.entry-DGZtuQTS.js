import { r as registerInstance, h, H as Host } from "./global-DaepF4XF.js";
const actionCardCss = ":host{display:block;position:relative;min-width:13.375rem;width:13.375rem;height:7.5rem;min-height:7.5rem;cursor:pointer;margin:0.25rem 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-card{width:100%;height:100%}";
const IxActionCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "outline";
    this.icon = void 0;
    this.selected = false;
  }
  getSubheadingTextColor() {
    return this.variant === "outline" || this.variant === "filled" ? "soft" : void 0;
  }
  render() {
    return h(Host, { key: "5ef1f949ac921617584ec1ffdf0f9d69fc3d90fb" }, h("ix-card", { key: "4bec40f43c8d2cf254d082a44a11cee6c87af80f", selected: this.selected, variant: this.variant, class: "pointer", "aria-label": this.ariaLabelCard, "aria-labelledby": !this.ariaLabelCard ? "ix-action-card-heading" : void 0 }, h("ix-card-content", { key: "044de3397796dea492cde9b1765a8e77e617875a" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("div", { key: "49e079adc6623eff97bba2f37e53d05a46a1ea8b" }, this.heading ? h("ix-typography", { id: "ix-action-card-heading", "aria-hidden": "true", format: "h4" }, this.heading) : null, this.subheading ? h("ix-typography", { format: "h5", "text-color": this.getSubheadingTextColor() }, this.subheading) : null, h("slot", { key: "94383b6165d831231cb239cedfa1e7fe5bc96c50" })))));
  }
};
IxActionCard.style = actionCardCss;
export {
  IxActionCard as ix_action_card
};
