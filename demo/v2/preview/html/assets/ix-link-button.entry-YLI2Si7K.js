import { r as registerInstance, h, H as Host } from "./global-CTsFSACc.js";
import { w as iconChevronRightSmall } from "./index-8HpPmDK_-DinFJk0z.js";
const linkButtonCss = ":host{display:inline-flex;height:2rem;font-size:0.875rem;font-weight:400;min-width:2rem}:host .link-button{display:inline-flex;position:relative;width:100%;padding:0 0.25rem 0 0;align-items:center;justify-content:center;background-color:transparent;color:var(--theme-color-primary);cursor:pointer;text-decoration:none}:host .link-button .link{display:block;position:relative;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):hover,:host .link-button:not(.disabled):not(:disabled).hover{color:var(--theme-color-dynamic--hover)}:host .link-button:not(.disabled):not(:disabled):hover .link,:host .link-button:not(.disabled):not(:disabled).hover .link{text-decoration:underline;text-underline-offset:0.2rem}:host .link-button:not(.disabled):not(:disabled){cursor:pointer}:host .link-button:not(.disabled):not(:disabled):active,:host .link-button:not(.disabled):not(:disabled).active{color:var(--theme-color-dynamic--active)}:host .link-button:not(.disabled):not(:disabled):active .link,:host .link-button:not(.disabled):not(:disabled).active .link{text-decoration:underline;text-underline-offset:0.2rem}:host .link-button.disabled{cursor:default;color:var(--theme-color-weak-text)}:host .link-button a{all:unset}:host :focus-visible{outline:1px solid var(--theme-color-focus-bdr)}";
const LinkButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = false;
    this.target = "_self";
  }
  render() {
    return h(Host, { key: "5d6862720cb7254c81ae048532345670b2725cf6" }, h("a", { key: "ad09a301c88af52fe06626e71785af1a69f78690", title: this.url, tabindex: "0", class: {
      "link-button": true,
      disabled: this.disabled
    }, href: this.disabled ? void 0 : this.url, target: this.target }, h("ix-icon", { key: "06f8da3d0dfe027915222ba0525bb6551ebf7472", class: "icon", name: iconChevronRightSmall, size: "16", "aria-hidden": "true" }), h("div", { key: "c5759a97f5599d15618cd1e83f32a35e656c3ea7", class: {
      link: true,
      disabled: this.disabled
    } }, h("slot", { key: "0429c8a4ac40936697d6e22d6061135e638c4557" }))));
  }
};
LinkButton.style = linkButtonCss;
export {
  LinkButton as ix_link_button
};
