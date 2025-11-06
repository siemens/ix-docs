import { r as registerInstance, h, H as Host } from "./global-CTsFSACc.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "dac65dc36124b038728e843240d126432d85e987" }, h("ix-spinner", { key: "639371732304b733f79cf8498e46442ff6a442df", variant: "primary" }), h("span", { key: "a9bf046b8c00552a4135cc5046789027abd1803e", class: "loading-text" }, h("slot", { key: "362185ef3806ddb57c90f6fdf776cb3563baf903" })));
  }
};
ModalLoading.style = modalLoadingCss;
export {
  ModalLoading as ix_modal_loading
};
