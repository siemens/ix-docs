import { r as registerInstance, h, H as Host } from "./global-C4tOo1JZ.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "dc1f6ceb8a80533b033c8a942ad226a827797f5e" }, h("ix-spinner", { key: "cba70b4acd7faac7076ccab3505ba3bf77b43294", variant: "primary" }), h("span", { key: "7e391743781992496039e4d71e2344c79bc134df", class: "loading-text" }, h("slot", { key: "5c08f0076249ca3d16b80e2d107cf2fb975e7e5b" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
