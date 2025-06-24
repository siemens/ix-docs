import { r as registerInstance, c as createEvent, h, H as Host } from "./global-7dbfff85.js";
const menuAboutItemCss = ":host{display:block}";
const MenuAboutItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelChange = createEvent(this, "labelChange", 7);
  }
  watchLabel(newValue, oldValue) {
    this.labelChange.emit({
      name: "ix-menu-about-item",
      oldLabel: oldValue,
      newLabel: newValue
    });
  }
  render() {
    return h(Host, { key: "8ef680041a9466972e2f792909117c11a4ffcd83" }, h("slot", { key: "b7f62049ac40bd8563568b627c3b50993c30eb4a" }));
  }
  static get watchers() {
    return {
      "label": ["watchLabel"]
    };
  }
};
MenuAboutItem.style = menuAboutItemCss;
export {
  MenuAboutItem as ix_menu_about_item
};
