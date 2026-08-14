import { r as registerInstance, h, H as Host } from "./global-BTgWS9s6.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "80ca2b65f89cf55d1084594e06639391e2320c0a" }, h("ix-spinner", { key: "9aca415c30e8450db9c17458f3486e1f4abcbf5f", variant: "primary" }), h("span", { key: "5579c6694b9b3b7eb4e7188cb67ac99d14658ffb", class: "loading-text" }, h("slot", { key: "be9b2fdd084a96f88db388bd7a0b7a98d6088ac6" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
