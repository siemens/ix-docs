import { r as registerInstance, h, H as Host } from "./global-7dbfff85.js";
const dropdownQuickActionsCss = ":host{display:flex;justify-content:center;align-items:center;margin-inline-start:1.5rem;margin-inline-end:1.5rem;margin-block-end:0.25rem}:host slot::slotted(*){display:flex;margin-inline-end:0.625rem}";
const DropdownQuickActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "e6248545942e9142cbc511f83fe549aee81b1fe1" }, h("slot", { key: "e7034c4d45b5464b690836b9e2721c7f7e5c9de1" }));
  }
};
DropdownQuickActions.style = dropdownQuickActionsCss;
export {
  DropdownQuickActions as ix_dropdown_quick_actions
};
