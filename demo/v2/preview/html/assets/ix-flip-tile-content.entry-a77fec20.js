import { r as registerInstance, h, H as Host } from "./global-bbf431ac.js";
const flipTileContentCss = ":host{display:block}";
const FlipTileContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contentVisible = false;
  }
  render() {
    return h(Host, { key: "5992f4aff07a3150055076817d22cb68eca86d8d" }, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = flipTileContentCss;
export {
  FlipTileContent as ix_flip_tile_content
};
