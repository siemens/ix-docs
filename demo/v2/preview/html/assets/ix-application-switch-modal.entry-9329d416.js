import { r as registerInstance, h, H as Host, g as getElement } from "./global-bbf431ac.js";
import "./animation-Dp15M30K-84b87f65.js";
import { d as dismissModal } from "./modal-WcMUMcY_-9f632f6e.js";
import { e as iconApps, f as iconOpenExternal } from "./index-C0zeM1D4-b0cf2da8.js";
import "./typed-event-BdCnOrqW-8705fd69.js";
const applicationSwitchModalCss = ":host{display:block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content{padding:2rem;padding-right:0}:host .content-apps{display:flex;position:relative;flex-wrap:wrap;justify-content:space-evenly;max-height:50vh;margin-right:0.25rem;gap:1.5rem}:host .loading{display:flex;flex-direction:row;align-items:center}:host .loading ix-spinner{margin-right:1rem}:host .AppEntry{all:unset;display:flex;flex-direction:row;align-items:center;gap:1rem;padding:0.5rem;flex:1 1 45%;cursor:pointer;border:0.0625rem solid transparent}:host .AppEntry.Selected{background-color:var(--theme-color-ghost--selected);border:var(--theme-dynamic-bdr-1)}:host .AppEntry:not(.disabled):not(:disabled).hover,:host .AppEntry:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host .AppEntry:not(.disabled):not(:disabled).active,:host .AppEntry:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host .AppEntry:focus-visible{border:1px solid var(--theme-color-focus-bdr)}:host .AppName{display:flex;flex-direction:column}:host .AppName ix-icon{margin-left:1rem}:host .AppIcon{width:3rem;height:3rem;border-radius:0.25rem}";
function ApplicationItem(props) {
  function isExternal(target) {
    if (target !== "_blank" && target !== "_parent" && target !== "_self" && target !== "_top") {
      return true;
    }
    if (target === "_blank") {
      return true;
    }
    return false;
  }
  return h("button", { class: {
    AppEntry: true,
    Selected: props.selected
  }, onClick: () => {
    dismissModal(props.host);
    window.open(props.url, props.target);
  } }, h("div", null, h("img", { class: "AppIcon", src: props.iconSrc })), h("div", { class: "AppName" }, h("ix-typography", { format: "h4" }, props.name, isExternal(props.target) && h("ix-icon", { size: "12", name: iconOpenExternal, color: "color-soft-text" })), h("ix-typography", { format: "label-sm", textColor: "soft" }, props.description)));
}
const ApplicationSwitchModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    if (!this.config) {
      throw Error("ApplicationConfig not provided");
    }
  }
  render() {
    var _a, _b, _c, _d;
    return h(Host, { key: "884bce885a1fc76ba7788cfb7b1716bf9c7de5d8" }, h("ix-modal-header", { key: "2d5b9cb1b3f3a4f490f6fb21b618064c1814c242", icon: iconApps }, ((_a = this.config) === null || _a === void 0 ? void 0 : _a.i18nAppSwitch) || "Switch to application"), h("ix-modal-content", { key: "6f9d3ed61655715fc01b29bb3633dd7815bd5de7", class: "content" }, h("div", { key: "a5009da153736068be20e6862f1983bfd7a200a7", class: "content-apps" }, (!this.config || ((_b = this.config) === null || _b === void 0 ? void 0 : _b.apps.length) === 0) && h("div", { key: "90c37b779e993fcf9301c1b0fae84c15b38b702d", class: "loading" }, h("ix-spinner", { key: "ed0e7ac831d54a8f92090ebb537f1fb72e86a60a", size: "medium", variant: "primary" }), h("span", { key: "462fd8d083176dfbad472e7d225d9250a4f8e5b4" }, ((_c = this.config) === null || _c === void 0 ? void 0 : _c.i18nLoadingApps) || "Loading available applications...")), (_d = this.config) === null || _d === void 0 ? void 0 : _d.apps.map((appEntry) => {
      var _a2;
      return h(ApplicationItem, { host: this.hostElement, name: appEntry.name, description: appEntry.description, iconSrc: appEntry.iconSrc, target: appEntry.target, url: appEntry.url, selected: appEntry.id === ((_a2 = this.config) === null || _a2 === void 0 ? void 0 : _a2.currentAppId) });
    }))));
  }
  get hostElement() {
    return getElement(this);
  }
};
ApplicationSwitchModal.style = applicationSwitchModalCss;
export {
  ApplicationSwitchModal as ix_application_switch_modal
};
