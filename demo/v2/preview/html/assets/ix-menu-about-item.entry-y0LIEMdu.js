import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-C4tOo1JZ.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-BUyLKq3R.js";
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
    return h(Host, { key: "f0d90c76679a6df3732abdadfdf89608a2873166" }, h("ix-tab-panel", { key: "7c702b375fb91714e5d0e9c8bd514705c5306bf2", tabKey: this.tabKey }, h("slot", { key: "281a2e494f1a7fe509a95d7288f56656b12a28e1" })));
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
