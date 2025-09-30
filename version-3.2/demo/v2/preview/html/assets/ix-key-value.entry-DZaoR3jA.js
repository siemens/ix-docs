import { r as registerInstance, h, H as Host } from "./global-DaepF4XF.js";
const keyValueCss = ":host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:1rem}:host(.keyValue) .keyValue__icon{padding:0.25rem 0}:host(.keyValue) .keyValue__content{display:flex;flex-grow:1;align-items:flex-start}:host(.keyValue) .keyValue__content,:host(.keyValue) .keyValue__content .content__label,:host(.keyValue) .keyValue__content .content__value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}:host(.keyValue) .keyValue__content .content__label{color:var(--theme-color-soft-text)}:host(.keyValue) .keyValue__content .content__value{width:100%}:host(.keyValue.keyValue--column){padding:0.5rem 0;border-bottom:1px solid var(--theme-color-soft-bdr)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:2px 0}:host(.keyValue.keyValue--row){padding:0.25rem 0}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:1rem;align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:6px 0}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:8rem}";
const KeyValue = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelPosition = "top";
  }
  render() {
    return h(Host, { key: "e935470e068f2a55426c8ae8d662e87862b3163d", class: `keyValue keyValue--${this.labelPosition === "top" ? "column" : "row"}` }, this.icon && h("ix-icon", { key: "e64ed59cb417f83bb959f0be8f02aeec3eecaf9b", name: this.icon, size: "24", class: "keyValue__icon", "aria-label": this.ariaLabelIcon }), h("div", { key: "850e89a4a17cf00e740e8541fbbd8161daf7707b", class: "keyValue__content" }, h("div", { key: "71a01685512f9fa186a7c426226e2a9e2372662b", class: "content__label" }, this.label), h("div", { key: "5170c0809f118bde6ada98a8caf736792c21a0f6", class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = keyValueCss;
export {
  KeyValue as ix_key_value
};
