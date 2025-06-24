import { r as registerInstance, h, H as Host, g as getElement } from "./global-7dbfff85.js";
import { r as iconChevronDownSmall } from "./index-DLTnniMb-a143a692.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-1c3883ca.js";
const dropdownButtonCss = ":host{display:inline-block;position:relative;height:2rem;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .hide{display:none}:host .dropdown-button{display:block;position:relative;width:100%;height:100%}:host .dropdown-button>ix-button{width:100%;height:100%}:host .dropdown-button .button-label{margin-right:auto;min-width:0px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .dropdown-button .dropdown-icon{margin-right:0.25rem}:host .triangle{position:absolute;margin-inline-start:1.5625rem;margin-block-start:-0.4375rem;border-right:0 solid transparent;border-left:4px solid transparent;border-top:0 solid transparent;border-bottom:4px solid;color:var(--theme-btn-primary--color)}:host .triangle.primary.ghost{color:var(--theme-btn-invisible-primary--color)}:host .triangle.primary.outline{color:var(--theme-btn-outline-primary--color)}:host .triangle.primary.ghost.disabled{color:var(--theme-btn-invisible-primary--color--disabled)}:host .triangle.primary.outline.disabled{color:var(--theme-btn-outline-primary--color--disabled)}:host .triangle.primary.disabled{color:var(--theme-btn-primary--color--disabled)}:host .triangle.secondary.ghost{color:var(--theme-btn-invisible-secondary--color)}:host .triangle.secondary.outline{color:var(--theme-btn-outline-secondary--color)}:host .triangle.secondary.ghost.disabled{color:var(--theme-btn-invisible-secondary--color--disabled)}:host .triangle.secondary.outline.disabled{color:var(--theme-btn-outline-secondary--color--disabled)}:host .triangle.secondary.disabled{color:var(--theme-btn-secondary--color--disabled)}:host .content{display:flex;align-items:center}:host(.disabled){pointer-events:none}";
const DropdownButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "primary";
    this.outline = false;
    this.ghost = false;
    this.disabled = false;
    this.closeBehavior = "both";
    this.dropdownAnchor = makeRef();
  }
  getTriangle() {
    return h("div", { class: {
      triangle: true,
      hide: this.label !== "",
      primary: this.variant === "primary",
      secondary: this.variant === "secondary",
      ghost: this.ghost,
      outline: this.outline,
      disabled: this.disabled
    } });
  }
  render() {
    return h(Host, { key: "7fc099de5b3400a82f24c611ef88ccfcaddc1659", class: {
      disabled: this.disabled
    }, ref: this.dropdownAnchor }, h("div", { key: "550a288af069c414424961e0be92d7474f6ca7c5", class: "dropdown-button" }, this.label ? h("ix-button", { variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled, alignment: "start" }, h("div", { class: "content" }, this.icon ? h("ix-icon", { name: this.icon, size: "24", class: "dropdown-icon" }) : null, h("div", { class: "button-label" }, this.label), h("ix-icon", { name: iconChevronDownSmall, size: "24" }))) : h("div", null, h("ix-icon-button", { icon: this.icon, variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled }), this.getTriangle())), h("ix-dropdown", { key: "8e3ea75539be51abc11f0be86f6ec77778c654a8", class: "dropdown", trigger: this.dropdownAnchor.waitForCurrent(), placement: this.placement, closeBehavior: this.closeBehavior }, h("slot", { key: "27569fbe497b21095f72edcfea1c351610b78b03" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
DropdownButton.style = dropdownButtonCss;
export {
  DropdownButton as ix_dropdown_button
};
