import { r as registerInstance, h, H as Host } from "./global-bbf431ac.js";
const dropdownQuickActionsCss = ":host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}";
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "b755b630c13bac321946ee62dd89c83eb10cf89e" }, h("slot", { key: "a17186c5be6fbde2532d92dbc340872526b1846e" }));
  }
};
DropdownQuickActions.style = dropdownQuickActionsCss;
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
