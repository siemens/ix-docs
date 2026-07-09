import { r as registerInstance, h, H as Host } from "./global-C4tOo1JZ.js";
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
    return h(Host, { key: "af7e2134d1e6a448e96a0a414c3766f51088fb54", style }, h("slot", { key: "a20d56f4601d818ff1d2e7cad497a0facd09c44e" }));
  }
};
CssGridItem.style = cssGridItemCss();
export {
  CssGridItem as ix_css_grid_item
};
