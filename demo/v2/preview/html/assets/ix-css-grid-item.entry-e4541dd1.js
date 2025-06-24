import { r as registerInstance, h, H as Host } from "./global-bbf431ac.js";
const cssGridItemCss = ":host{display:block;position:relative}:host ::slotted(*){height:100%;width:100%}";
const CssGridItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const style = {};
    style["grid-area"] = this.itemName;
    return h(Host, { key: "a77b6551e13562541452eeeb510a26935a5a1400", style }, h("slot", { key: "53a097ba1bbc98c806a32aa8059440e6fb6487ae" }));
  }
};
CssGridItem.style = cssGridItemCss;
export {
  CssGridItem as ix_css_grid_item
};
