import { r as registerInstance, h, H as Host } from "./global-7dbfff85.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "c464743230eac8e958ea537de3f106a87998d013" }, h("ix-spinner", { key: "75c7dc3ec65b50fdd24c2408edb6a719b31d8195", variant: "primary" }), h("span", { key: "5f95a8a338d2ab59faf040ebbf9fb4b79f3adc13", class: "loading-text" }, h("slot", { key: "faa67dcf4f19eb79e9dbf625d4f616e6a638929d" })));
  }
};
ModalLoading.style = modalLoadingCss;
export {
  ModalLoading as ix_modal_loading
};
