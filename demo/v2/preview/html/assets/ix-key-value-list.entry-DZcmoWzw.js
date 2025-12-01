import { r as registerInstance, h, H as Host } from "./global-BkHs9YbB.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = false;
  }
  render() {
    return h(Host, { key: "fcc3ec3470c25cac50b88a1006b30be059f778f8", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "05645a91f92d7db584bd8235f73979249870e734" }));
  }
};
KeyValueList.style = keyValueListCss;
export {
  KeyValueList as ix_key_value_list
};
