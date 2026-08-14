import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-BTgWS9s6.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-Cp9FoWnA.js";
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
    return h(Host, { key: "acde06cac4ff13c7b9529d219b60e5460d01eb2b" }, h("ix-tab-panel", { key: "a7458d27e0b5f2cf93154a438f67386d6583fbe6", tabKey: this.tabKey }, h("slot", { key: "e47b54b6640d0e2a068deb648a22d5908b9ea380" })));
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
