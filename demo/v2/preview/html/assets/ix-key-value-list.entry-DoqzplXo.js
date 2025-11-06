import { r as registerInstance, h, H as Host } from "./global-CTsFSACc.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = false;
  }
  render() {
    return h(Host, { key: "8dba91174048942e97f5c3923693f9773498850e", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "008b5a305508353e90fbbdc664079942b5e72fb6" }));
  }
};
KeyValueList.style = keyValueListCss;
export {
  KeyValueList as ix_key_value_list
};
