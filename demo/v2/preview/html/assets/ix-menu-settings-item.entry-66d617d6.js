import { r as registerInstance, c as createEvent, h, H as Host } from "./global-7dbfff85.js";
const menuSettingsItemCss = ":host{display:block}";
const MenuSettingsItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelChange = createEvent(this, "labelChange", 7);
  }
  watchLabel(newValue, oldValue) {
    this.labelChange.emit({
      name: "ix-menu-settings-item",
      oldLabel: oldValue,
      newLabel: newValue
    });
  }
  render() {
    return h(Host, { key: "0b3eefcc50ced96c2d024f44ca3a9ba1e48cd1c2" }, h("slot", { key: "86e2570bf9670b222d8bb883af0002100ea78279" }));
  }
  static get watchers() {
    return {
      "label": ["watchLabel"]
    };
  }
};
MenuSettingsItem.style = menuSettingsItemCss;
export {
  MenuSettingsItem as ix_menu_settings_item
};
