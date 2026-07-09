import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-C4tOo1JZ.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-BUyLKq3R.js";
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
    return h(Host, { key: "48c4f2a2e07a0dc0006d6cac683869439b06faa0" }, h("ix-tab-panel", { key: "04e2fb1c063f897c6c3982645fc977eb1ce7ea82", tabKey: this.tabKey }, h("slot", { key: "34874508577ce1773af32ee09c73b2b9219a2d1e" })));
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
