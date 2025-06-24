import { r as registerInstance, h, H as Host } from "./global-bbf431ac.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "38247af2d8cb71f82955803240f3e5310a9472d5" }, h("ix-spinner", { key: "9841cc2100264eddf7c9cfd025ed7d74f07f1a6b", variant: "primary" }), h("span", { key: "232266911722d5d29e7f71c50b151f6e803d8fbc", class: "loading-text" }, h("slot", { key: "131ad1e65c0fbe76037954310e6e5bf8006b1e89" })));
  }
};
ModalLoading.style = modalLoadingCss;
export {
  ModalLoading as ix_modal_loading
};
