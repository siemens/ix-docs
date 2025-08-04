import { r as registerInstance, c as createEvent, a as readTask, h, F as Fragment, H as Host, g as getElement } from "./global-DaepF4XF.js";
import { h as iconMoreMenu, e as iconApps } from "./index-CB6MK0tq-MglExpDl.js";
import { s as showAppSwitch } from "./index-C0gBOvP6-BgV5uC_z.js";
import { a as applicationLayoutService } from "./service-Ca8OHh45-6Pw2N-Ed.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-CKM5pVsv-B0zIukL5.js";
import { m as menuController } from "./menu-service-Dl5Ra79J-Dk6abri9.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
import "./animation-Dp15M30K-JKj3Fz7Y.js";
import "./modal-DTeAn2rp-C0o4FQ8m.js";
import "./breakpoints-D6vSVaHq-Ca0ODf6_.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
const applicationHeaderCss = ":host{display:flex;align-items:flex-end;flex-wrap:nowrap;position:relative;width:100%;height:calc(2.75rem + var(--ix-safe-area-inset-top, 0rem));min-height:calc(2.75rem + var(--ix-safe-area-inset-top, 0rem));padding-top:0;padding-right:calc(1rem + var(--ix-safe-area-inset-right, 0rem));padding-bottom:0.3rem;padding-left:calc(0.625rem + var(--ix-safe-area-inset-left, 0rem));color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color);z-index:var(--theme-z-index-fixed)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .app-switch{margin-right:1rem}:host .name{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap;max-width:50%;margin-left:1.5rem;margin-right:2.5rem;margin-bottom:0.25rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color);margin-left:0.375rem}:host .content{display:flex;position:relative;flex-direction:row;margin-left:auto;margin-right:0px}:host .dropdown{overflow:visible}:host .dropdown-content{padding:1rem}:host .context-menu{display:none}:host .context-menu.context-menu-visible{display:block}@media only screen and (max-width: 48em){:host .logo{display:none}}:host ::slotted(ix-avatar){margin-left:1rem}:host(.breakpoint-sm) .logo{margin-left:0.5rem}";
const ApplicationHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuToggle = createEvent(this, "menuToggle", 7);
    this.openAppSwitch = createEvent(this, "openAppSwitch", 7);
    this.showMenu = false;
    this.breakpoint = "lg";
    this.menuExpanded = false;
    this.suppressResponsive = false;
    this.hasSlottedElements = false;
  }
  get contentBackground() {
    return this.hostElement.shadowRoot.querySelector(".dropdown-content");
  }
  componentWillLoad() {
    useContextConsumer(this.hostElement, ApplicationLayoutContext, (ctx) => {
      if ((ctx === null || ctx === void 0 ? void 0 : ctx.host) === "map-navigation") {
        this.suppressResponsive = true;
        this.breakpoint = "md";
        return;
      }
      this.breakpoint = applicationLayoutService.breakpoint;
      this.applicationLayoutContext = ctx;
      this.tryUpdateAppSwitch();
    }, true);
    this.menuDisposable = menuController.expandChange.on((show) => {
      this.menuExpanded = show;
    });
    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      if (this.suppressResponsive) {
        return;
      }
      this.breakpoint = mode;
    });
    this.updateIsSlottedContent();
  }
  componentDidLoad() {
    this.attachSiemensLogoIfLoaded();
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.menuDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
    (_b = this.modeDisposable) === null || _b === void 0 ? void 0 : _b.dispose();
  }
  watchApplicationLayoutContext() {
    if (this.applicationLayoutContext) {
      this.showMenu = false;
    }
  }
  watchSuppressResponsive() {
    this.breakpoint = "md";
  }
  isLogoSlotted() {
    const slotElement = this.hostElement.shadowRoot.querySelector('slot[name="logo"]');
    const nodes = slotElement.assignedNodes({
      flatten: true
    });
    return nodes.length !== 0;
  }
  attachSiemensLogoIfLoaded() {
    var _a;
    const logoElement = document.createElement("ix-siemens-logo");
    if (!this.isLogoSlotted()) {
      (_a = this.hostElement.shadowRoot.querySelector(".logo")) === null || _a === void 0 ? void 0 : _a.appendChild(logoElement);
    }
  }
  async onMenuClick() {
    if (this.applicationLayoutContext) {
      menuController.toggle();
    } else {
      this.menuExpanded = !this.menuExpanded;
    }
    this.menuToggle.emit(this.menuExpanded);
  }
  resolveContextMenuButton() {
    return new Promise((resolve) => readTask(() => resolve(this.hostElement.shadowRoot.querySelector("[data-context-menu]"))));
  }
  tryUpdateAppSwitch() {
    var _a, _b;
    if (!this.callbackUpdateAppSwitchModal || !((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig)) {
      return;
    }
    this.callbackUpdateAppSwitchModal((_b = this.applicationLayoutContext) === null || _b === void 0 ? void 0 : _b.appSwitchConfig);
  }
  async showAppSwitch() {
    var _a, _b;
    const { defaultPrevented } = this.openAppSwitch.emit();
    if (defaultPrevented) {
      return;
    }
    if (!((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig)) {
      return;
    }
    this.callbackUpdateAppSwitchModal = await showAppSwitch((_b = this.applicationLayoutContext) === null || _b === void 0 ? void 0 : _b.appSwitchConfig);
  }
  updateIsSlottedContent() {
    const slotElement = this.hostElement.shadowRoot.querySelector(".content slot");
    this.hasSlottedElements = hasSlottedElements(slotElement);
  }
  onContentBgClick(e) {
    if (e.target === this.contentBackground) {
      e.preventDefault();
    }
  }
  render() {
    var _a;
    const hasApplicationContextAvailable = !!this.applicationLayoutContext;
    const showMenuByApplicationFrame = this.breakpoint === "sm" && this.suppressResponsive === false && hasApplicationContextAvailable;
    const showApplicationSwitch = ((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig) && this.breakpoint !== "sm" && this.suppressResponsive === false;
    return h(Host, { key: "943e419968b74861f10f3d47fcdc6040fbe00a63", class: {
      [`breakpoint-${this.breakpoint}`]: true
    }, slot: "application-header" }, (this.showMenu || showMenuByApplicationFrame) && h("ix-menu-expand-icon", { key: "74404541dfcc535f1dc1fadd70bb541ce33167fc", onClick: () => this.onMenuClick(), expanded: this.menuExpanded, ixAriaLabel: this.ariaLabelMenuExpandIconButton }), showApplicationSwitch && h("ix-icon-button", { key: "d2b6c7451d95c89b44b5ba4b3760fda926932ebe", onClick: () => this.showAppSwitch(), icon: iconApps, ghost: true, class: "app-switch", "aria-label": this.ariaLabelAppSwitchIconButton }), h("div", { key: "3f911d7016457a443a7eac22069e2147c13b6ac0", class: { logo: true } }, h("slot", { key: "13f54b750b95a9e737a435d550c9357eb6f6b198", name: "logo" })), h("ix-typography", { key: "ff6dc97826a08e5d0ea0fe7a9da7871271bae808", format: "body-lg", class: "name" }, this.name), h("div", { key: "44ab0ff84cfe89cd05a28ca0c87e7a8c29099387", class: "content" }, this.breakpoint === "sm" ? h(Fragment, null, h("ix-icon-button", { class: {
      ["context-menu"]: true,
      ["context-menu-visible"]: this.hasSlottedElements
    }, "data-context-menu": true, "data-testid": "show-more", icon: iconMoreMenu, ghost: true, "aria-label": this.ariaLabelMoreMenuIconButton }), h("ix-dropdown", { "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton() }, h("div", { class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, h("slot", { onSlotchange: () => this.updateIsSlottedContent() })))) : h("slot", { onSlotchange: () => this.updateIsSlottedContent() }), h("slot", { key: "70fbf85e3dd1a47d6cc69a8892a1da49fd8f079e", name: "ix-application-header-avatar" })));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "applicationLayoutContext": ["watchApplicationLayoutContext"],
      "suppressResponsive": ["watchSuppressResponsive"]
    };
  }
};
ApplicationHeader.style = applicationHeaderCss;
export {
  ApplicationHeader as ix_application_header
};
