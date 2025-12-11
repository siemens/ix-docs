import { r as registerInstance, h, H as Host } from "./global-CJeEgyUn.js";
import { g as getFallbackLabelFromIconName, a as a11yBoolean } from "./a11y-Bb7pDeaQ-DNI84lDX.js";
const actionCardCss = ":host{display:block;position:relative;min-width:13.375rem;width:13.375rem;height:7.5rem;min-height:7.5rem;cursor:pointer;margin:0.25rem 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-card{width:100%;height:100%}";
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
    const ariaLabelledBy = !this.ariaLabelCard && this.heading ? "ix-action-card-heading" : void 0;
    return h(Host, { key: "167db61afb0880052edd6e28ec9e907dbe98a186" }, h("ix-card", { key: "e8014c544dbadee66135b8def9b868488a07773b", selected: this.selected, variant: this.variant, class: "pointer", "aria-label": this.ariaLabelCard, "aria-labelledby": ariaLabelledBy, role: ariaLabelledBy ? "group" : void 0 }, h("ix-card-content", { key: "bcb177b0fbe2a709d3ab9d8479077eb64ef2496a" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon || getFallbackLabelFromIconName(this.icon) }) : null, h("div", { key: "65aa3882ad626df59598626bf7a67e1431fcf6e4" }, this.heading ? h("ix-typography", { id: "ix-action-card-heading", "aria-hidden": a11yBoolean(!ariaLabelledBy), format: "h4" }, this.heading) : null, this.subheading ? h("ix-typography", { format: "h5", "text-color": this.getSubheadingTextColor() }, this.subheading) : null, h("slot", { key: "9ffacb3ea7d9642a2adbad41d9e6fc36a8e5118b" })))));
  }
};
IxActionCard.style = actionCardCss;
export {
  IxActionCard as ix_action_card
};
