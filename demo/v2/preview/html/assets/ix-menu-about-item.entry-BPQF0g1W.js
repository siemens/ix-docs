import { M as Mixin, a as registerInstance, c as createEvent, h, H as Host } from "./global-j8oXcCx7.js";
import { B as BaseTabMixin } from "./tab.mixin-2hU1i4Yk-CKUKKZ3J.js";
const MenuAboutItem = class extends Mixin(BaseTabMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.labelChange = createEvent(this, "labelChange", 7);
  }
  /**
   * About Item label
   */
  label;
  /**
   * Label changed
   */
  labelChange;
  watchLabel(newValue, oldValue) {
    this.labelChange.emit({
      name: "ix-menu-about-item",
      oldLabel: oldValue,
      newLabel: newValue
    });
  }
  render() {
    return h(Host, { key: "30ba62aac3a8dff2224f9a207ca9f7fd2223bea8" }, h("ix-tab-panel", { key: "524c2909d0a0bec44a1867e8ff1323c0944e49e8", tabKey: this.tabKey }, h("slot", { key: "aaa24a90ca22a0379437a2971b4dc1c52ee81110" })));
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
  MenuAboutItem as ix_menu_about_item
};
