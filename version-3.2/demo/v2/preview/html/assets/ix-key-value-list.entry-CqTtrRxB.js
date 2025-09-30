import { r as registerInstance, h, H as Host } from "./global-DaepF4XF.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = false;
  }
  render() {
    return h(Host, { key: "27163734dfd54def57dd0186263161898c7b4dfe", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "0d28e89b4b194cd499653bd76132f205ab55d10b" }));
  }
};
KeyValueList.style = keyValueListCss;
export {
  KeyValueList as ix_key_value_list
};
