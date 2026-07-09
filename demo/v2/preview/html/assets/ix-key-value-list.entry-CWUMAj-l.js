import { r as registerInstance, h, H as Host } from "./global-C4tOo1JZ.js";
const keyValueListCss = () => `:host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}`;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Optional striped key value list style
   */
  striped = false;
  render() {
    return h(Host, { key: "ac64d25e8d4038e99145c4badd28981e4fd5aea2", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "6445bc39f3c0c00811a4fa75cd7b12afde9627a9" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
