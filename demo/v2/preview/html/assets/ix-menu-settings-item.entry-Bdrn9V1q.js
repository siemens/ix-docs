import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-BTgWS9s6.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-Cp9FoWnA.js";
const MenuSettingsItem = class extends Mixin(BaseTabMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.labelChange = createEvent(this, "labelChange", 7);
  }
  /**
   * Settings Item label
   */
  label;
  /**
   * @internal
   */
  labelChange;
  watchLabel(newValue, oldValue) {
    this.labelChange.emit({
      name: "ix-menu-settings-item",
      oldLabel: oldValue,
      newLabel: newValue
    });
  }
  render() {
    return h(Host, { key: "33f90f8f00fe5643ef89d4a9697a6f734ce94c96" }, h("ix-tab-panel", { key: "2e895bd3ca7c83a27a6c25039e2a0fa2be9b283b", tabKey: this.tabKey }, h("slot", { key: "f04938cdd7b5d06cb7e20027e4aade76d83a2a07" })));
  }
  static get watchers() {
    return {
      "label": [{
        "watchLabel": 0
      }]
    };
  }
};
export {
  MenuSettingsItem as ix_menu_settings_item
};
