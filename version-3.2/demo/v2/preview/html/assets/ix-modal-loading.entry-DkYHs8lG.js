import { r as registerInstance, h, H as Host } from "./global-DaepF4XF.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "dd1c49bcea29fc40509971b2ec9e9a37eb2e16f2" }, h("ix-spinner", { key: "b2cea2316d5cc1a8734b975476b754aacb9e3c8b", variant: "primary" }), h("span", { key: "e258e8ff2f1de504ec43b5d0fee42caba8dd4ed2", class: "loading-text" }, h("slot", { key: "8cfed784918cfac55a7a435d3ca19c5ff5da0170" })));
  }
};
ModalLoading.style = modalLoadingCss;
export {
  ModalLoading as ix_modal_loading
};
