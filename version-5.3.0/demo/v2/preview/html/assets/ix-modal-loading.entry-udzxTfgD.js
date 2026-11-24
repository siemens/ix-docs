import { r as registerInstance, h, H as Host } from "./global-nUAVWB12.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "48fbb0015ea60af15ded31047f919e1184804e46" }, h("ix-spinner", { key: "41be128637efade3919e3bd7cb4338bbbae5bbaa", variant: "primary" }), h("span", { key: "c0b4d15ef1cd2437fe69c793eb74aff5d6eae679", class: "loading-text" }, h("slot", { key: "f30235bffd1281d08ac1c099443e21b6e7f662ea" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};
