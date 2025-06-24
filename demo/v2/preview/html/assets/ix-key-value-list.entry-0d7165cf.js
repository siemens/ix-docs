import { r as registerInstance, h, H as Host } from "./global-7dbfff85.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = false;
  }
  render() {
    return h(Host, { key: "a0383621779021bfaa04dfa24c0d64f843caef46", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "f42227578514bbc39d2c03fa5938487d3ba04cf0" }));
  }
};
KeyValueList.style = keyValueListCss;
export {
  KeyValueList as ix_key_value_list
};
