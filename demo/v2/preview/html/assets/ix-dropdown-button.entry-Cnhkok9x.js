import { r as registerInstance, h, H as Host, g as getElement } from "./global-CTsFSACc.js";
import { r as iconChevronUpSmall, h as iconChevronDownSmall } from "./index-8HpPmDK_-DinFJk0z.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
const dropdownButtonCss = ":host{display:inline-block;position:relative;height:2rem;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .hide{display:none}:host .dropdown-button{display:block;position:relative;width:100%;height:100%}:host .dropdown-button>ix-button{width:100%;height:100%}:host .dropdown-button .button-label{margin-right:auto;min-width:0px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .dropdown-button .dropdown-icon{margin-right:0.25rem}:host .triangle{position:absolute;margin-inline-start:1.5625rem;margin-block-start:-0.4375rem;border-right:0 solid transparent;border-left:4px solid transparent;border-top:0 solid transparent;border-bottom:4px solid;color:var(--theme-btn-primary--color)}:host .triangle.primary{color:var(--theme-btn-primary--color)}:host .triangle.secondary{color:var(--theme-btn-secondary--color)}:host .triangle.tertiary{color:var(--theme-btn-tertiary--color)}:host .triangle.primary.disabled{color:var(--theme-btn-primary--color--disabled)}:host .triangle.secondary.disabled{color:var(--theme-btn-secondary--color--disabled)}:host .triangle.tertiary.disabled{color:var(--theme-btn-tertiary--color--disabled)}:host .triangle.subtle-primary{color:var(--theme-btn-subtle-primary--color)}:host .triangle.subtle-secondary{color:var(--theme-btn-subtle-secondary--color)}:host .triangle.subtle-tertiary{color:var(--theme-btn-subtle-tertiary--color)}:host .triangle.subtle-primary.disabled{color:var(--theme-btn-subtle-primary--color--disabled)}:host .triangle.subtle-secondary.disabled{color:var(--theme-btn-subtle-secondary--color--disabled)}:host .triangle.subtle-tertiary.disabled{color:var(--theme-btn-subtle-tertiary--color--disabled)}:host .triangle.danger-primary{color:var(--theme-btn-danger-primary--color)}:host .triangle.danger-secondary{color:var(--theme-btn-danger-secondary--color)}:host .triangle.danger-tertiary{color:var(--theme-btn-danger-tertiary--color)}:host .triangle.danger-primary.disabled{color:var(--theme-btn-danger-primary--color--disabled)}:host .triangle.danger-secondary.disabled{color:var(--theme-btn-danger-secondary--color--disabled)}:host .triangle.danger-tertiary.disabled{color:var(--theme-btn-danger-tertiary--color--disabled)}:host .content{display:flex;align-items:center}:host(.disabled){pointer-events:none}";
const DropdownButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "primary";
    this.disabled = false;
    this.closeBehavior = "both";
    this.dropdownShow = false;
    this.dropdownAnchor = makeRef();
    this.onDropdownShowChanged = (event) => {
      this.dropdownShow = event.detail;
    };
  }
  getTriangle() {
    return h("div", { class: {
      triangle: true,
      [this.variant]: true,
      hide: !!this.label,
      disabled: this.disabled
    } });
  }
  render() {
    return h(Host, { key: "f30e5874fe837b3b6a9f2ef092f8b4d50cd37979", class: {
      disabled: this.disabled
    }, ref: this.dropdownAnchor }, h("div", { key: "d1407beed3397c7dc0c84a78d4833f22799b7400", class: "dropdown-button" }, this.label ? h("ix-button", { variant: this.variant, disabled: this.disabled, alignment: "start", ariaLabel: this.ariaLabelDropdownButton }, h("div", { class: "content" }, this.icon ? h("ix-icon", { name: this.icon, size: "24", class: "dropdown-icon" }) : null, h("div", { class: "button-label" }, this.label), h("ix-icon", { name: this.dropdownShow ? iconChevronUpSmall : iconChevronDownSmall, size: "24" }))) : h("div", null, h("ix-icon-button", { icon: this.icon, variant: this.variant, disabled: this.disabled }), this.getTriangle())), h("ix-dropdown", { key: "9489f1c35d3483103b30aea27cd595ec9da21d58", class: "dropdown", trigger: this.dropdownAnchor.waitForCurrent(), placement: this.placement, closeBehavior: this.closeBehavior, onShowChanged: this.onDropdownShowChanged }, h("slot", { key: "eccf0e7d86b7c4df9fe48b2873c0a05c7ec9a67f" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
DropdownButton.style = dropdownButtonCss;
export {
  DropdownButton as ix_dropdown_button
};
