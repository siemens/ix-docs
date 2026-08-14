import { r as registerInstance, h, H as Host } from "./global-BTgWS9s6.js";
const dropdownQuickActionsCss = () => `:host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}`;
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "9fb0172d77959236b125fda6b464977c5302628e" }, h("slot", { key: "fb6e7aa33251230f6329a9895f51c8c1fd1cead4" }));
  }
};
DropdownQuickActions.style = dropdownQuickActionsCss();
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
