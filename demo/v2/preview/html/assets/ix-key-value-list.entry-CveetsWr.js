import { r as registerInstance, h, H as Host } from "./global-DsITLPyL.js";
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
    return h(Host, { key: "d1df02c5eb06aa46663312486c259df70dc1d5a1", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "1e6e8856d7a21e9f9689e2823c38f4892f33604e" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
