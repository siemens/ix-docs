import { a as registerInstance, h, H as Host } from "./global-j8oXcCx7.js";
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
    return h(Host, { key: "b77626b4307e170ebcd609232d6b51e6352d77fc", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "5519febab149c0a10baf26a47fcb0cfecf14cfb2" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
