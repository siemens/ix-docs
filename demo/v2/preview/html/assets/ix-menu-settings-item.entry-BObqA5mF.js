import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-nUAVWB12.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-Dkmkvs__.js";
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
    return h(Host, { key: "618abb1dae9e392c2285dd9f59c8319efaee80c0" }, h("ix-tab-panel", { key: "4807915ca562550c4fbb1940f8fb972c5319afd5", tabKey: this.tabKey }, h("slot", { key: "6b54ee5e7489d79976004001f92860d1f38a0610" })));
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
