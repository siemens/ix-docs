import { a as registerInstance, h, H as Host } from "./global-DjWMysHf.js";
const dropdownQuickActionsCss = () => `:host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}`;
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "74f8179be360cbd202653b2c2ffb90995585af2c" }, h("slot", { key: "6488ba330c7de30385c8c8aff4812e6e5a083727" }));
  }
};
DropdownQuickActions.style = dropdownQuickActionsCss();
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
