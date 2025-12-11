import { r as registerInstance, h, H as Host } from "./global-CJeEgyUn.js";
const modalLoadingCss = ":host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "404214a461e55c9ee78aad8dc277dab5be8a9b42" }, h("ix-spinner", { key: "96278c04d8c7798b411f6807e5c7a1ea26b03d45", variant: "primary" }), h("span", { key: "cad3eec78defa832ffc679f86941ffc301bc5b5c", class: "loading-text" }, h("slot", { key: "96cf92b74f62260ee97b7bdae73557a2ee5517ec" })));
  }
};
ModalLoading.style = modalLoadingCss;
export {
  ModalLoading as ix_modal_loading
};
