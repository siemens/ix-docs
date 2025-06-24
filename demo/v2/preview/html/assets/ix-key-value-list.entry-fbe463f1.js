import { r as registerInstance, h, H as Host } from "./global-bbf431ac.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = false;
  }
  render() {
    return h(Host, { key: "aaa2594a8d8d6b40daffd4a7ab6e12eeddb53cdb", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "abc70ec4596b6cbd7639dd6beb95b24eb315e58f" }));
  }
};
KeyValueList.style = keyValueListCss;
export {
  KeyValueList as ix_key_value_list
};
