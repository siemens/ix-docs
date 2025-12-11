import { r as registerInstance, h, H as Host } from "./global-CJeEgyUn.js";
import { w as iconChevronRightSmall } from "./index-8HpPmDK_-DinFJk0z.js";
const linkButtonCss = ":host{display:inline-flex;height:2rem;font-size:0.875rem;font-weight:400;min-width:2rem}:host .link-button{display:inline-flex;position:relative;width:100%;padding:0 0.25rem 0 0;align-items:center;justify-content:center;background-color:transparent;color:var(--theme-color-primary);cursor:pointer;text-decoration:none}:host .link-button .link{display:block;position:relative;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-decoration:underline;text-underline-offset:0.2rem}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):hover,:host .link-button:not(.disabled):not(:disabled).hover{color:var(--theme-color-dynamic--hover)}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):active,:host .link-button:not(.disabled):not(:disabled).active{color:var(--theme-color-dynamic--active)}:host .link-button.disabled{cursor:default;color:var(--theme-color-weak-text)}:host .link-button a{all:unset}:host :focus-visible{outline:1px solid var(--theme-color-focus-bdr)}";
const LinkButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = false;
    this.target = "_self";
  }
  render() {
    return h(Host, { key: "83b41ef8a3bef06a033a9a20c30a4ae1e83066e8" }, h("a", { key: "955dc6e492eec929e592947ec18009d744d1f973", title: this.url, tabindex: "0", class: {
      "link-button": true,
      disabled: this.disabled
    }, href: this.disabled ? void 0 : this.url, target: this.target }, h("ix-icon", { key: "b0589b7cedf757244950b1595916f8c838ae603d", class: "icon", name: iconChevronRightSmall, size: "16", "aria-hidden": "true" }), h("div", { key: "c3ceb43628b0a48d60bbcd6bb54a4ad493ae3de8", class: {
      link: true,
      disabled: this.disabled
    } }, h("slot", { key: "2bd6071e8aad57fb13226d8452b0649367c6b750" }))));
  }
};
LinkButton.style = linkButtonCss;
export {
  LinkButton as ix_link_button
};
