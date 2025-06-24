import { r as registerInstance, h, H as Host } from "./global-7dbfff85.js";
const cssGridItemCss = ":host{display:block;position:relative}:host ::slotted(*){height:100%;width:100%}";
const CssGridItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const style = {};
    style["grid-area"] = this.itemName;
    return h(Host, { key: "b51d8dffe6ab4876ee52328043eb949c9db10200", style }, h("slot", { key: "34aae403a952e99bebae1dbfa2c089a5d2fa73d5" }));
  }
};
CssGridItem.style = cssGridItemCss;
export {
  CssGridItem as ix_css_grid_item
};
