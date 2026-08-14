import { r as registerInstance, h, H as Host } from "./global-BTgWS9s6.js";
const cssGridItemCss = () => `:host{display:block;position:relative}:host ::slotted(*){height:100%;width:100%}`;
const CssGridItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Grid item name
   */
  itemName;
  render() {
    const style = {};
    style["grid-area"] = this.itemName;
    return h(Host, { key: "4b9b2bded16014b694a78359c5591ad26098af76", style }, h("slot", { key: "1311fdee7e255ae712cea4ca5b94a4c27ab4b3cf" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
