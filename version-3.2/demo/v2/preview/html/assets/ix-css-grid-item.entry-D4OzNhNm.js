import { r as registerInstance, h, H as Host } from "./global-DaepF4XF.js";
const cssGridItemCss = ":host{display:block;position:relative}:host ::slotted(*){height:100%;width:100%}";
const CssGridItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const style = {};
    style["grid-area"] = this.itemName;
    return h(Host, { key: "a6516c0d4de0a1dddd6860e69930262064b91f2a", style }, h("slot", { key: "4f536059b653610e8a04fffd43aebf63e9554fc2" }));
  }
};
CssGridItem.style = cssGridItemCss;
export {
  CssGridItem as ix_css_grid_item
};
