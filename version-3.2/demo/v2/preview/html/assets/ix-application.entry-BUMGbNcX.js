import { r as registerInstance, h, H as Host, g as getElement } from "./global-DaepF4XF.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-CKM5pVsv-B0zIukL5.js";
import { a as applicationLayoutService } from "./service-Ca8OHh45-6Pw2N-Ed.js";
import { m as menuController } from "./menu-service-Dl5Ra79J-Dk6abri9.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
import { t as themeSwitcher } from "./theme-switcher-BTKjoGYj-DH1_ZAJ5.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./breakpoints-D6vSVaHq-Ca0ODf6_.js";
const applicationCss = ":host{display:flex;position:relative;width:100vw;height:100vh;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .application{display:flex;position:relative;flex-direction:row;height:100%;width:100%;overflow:hidden}:host .content-area{display:flex;position:relative;flex-direction:column;flex-wrap:nowrap;height:calc(100% - var(--ix-safe-area-inset-bottom, 0px));width:100%;margin-left:var(--ix-application-menu-margin-left)}:host main{display:block;position:relative;flex-grow:1;width:100%;padding-bottom:var(--ix-safe-area-inset-bottom);overflow:auto}:host footer{display:block;position:relative;width:100%}:host(.breakpoint-md){--ix-application-menu-margin-left:calc(\n    3.25rem + var(--ix-application-menu-safe-area-left, 0rem)\n  )}:host(.breakpoint-md) aside.slotted{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-md) aside.slotted+.content-area{margin-left:0}:host(.breakpoint-md) aside:not(.slotted)+.content-area{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-lg){--ix-application-menu-margin-left:0}:host(.breakpoint-sm){--ix-application-menu-margin-left:var(\n    --ix-application-menu-safe-area-left,\n    0rem\n  )}";
const Application = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.themeSystemAppearance = false;
    this.breakpoints = ["sm", "md", "lg"];
    this.breakpoint = "lg";
    this.applicationSidebarSlotted = false;
  }
  forceLayoutChange(newMode) {
    if (!newMode) {
      applicationLayoutService.enableBreakpointDetection();
      return;
    }
    applicationLayoutService.disableBreakpointDetection();
    applicationLayoutService.setBreakpoint(newMode);
  }
  onBreakpointsChange(breakpoints) {
    applicationLayoutService.setBreakpoints(breakpoints);
  }
  get menu() {
    return this.hostElement.querySelector("ix-menu");
  }
  get applicationSidebarSlot() {
    return this.hostElement.shadowRoot.querySelector(".application-sidebar slot");
  }
  onContentClick() {
    var _a;
    if (menuController.isPinned) {
      return;
    }
    (_a = this.menu) === null || _a === void 0 ? void 0 : _a.toggleMenu(false);
  }
  componentWillLoad() {
    applicationLayoutService.setBreakpoints(this.breakpoints);
    this.contextProvider = useContextProvider(this.hostElement, ApplicationLayoutContext, {
      hideHeader: false,
      host: "basic-navigation",
      sidebar: this.applicationSidebarSlotted,
      appSwitchConfig: this.appSwitchConfig
    });
    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      this.breakpoint = mode;
    });
    this.breakpoint = applicationLayoutService.breakpoint;
    if (this.forceBreakpoint) {
      this.forceLayoutChange(this.forceBreakpoint);
    }
    this.changeTheme();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.modeDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
  }
  changeTheme() {
    if (!this.theme) {
      if (this.themeSystemAppearance) {
        themeSwitcher.setVariant();
      }
      return;
    }
    if (themeSwitcher.hasVariantSuffix(this.theme)) {
      themeSwitcher.setTheme(`theme-${this.theme}`);
      return;
    }
    themeSwitcher.setTheme(`theme-${this.theme}-dark`, this.themeSystemAppearance);
  }
  onApplicationSidebarChange() {
    if (!this.contextProvider) {
      console.error("Context provider not available");
      return;
    }
    this.contextProvider.emit({
      hideHeader: false,
      host: "basic-navigation",
      sidebar: this.applicationSidebarSlotted,
      appSwitchConfig: this.appSwitchConfig
    });
  }
  render() {
    return h(Host, { key: "aad0ef5275fe9f1171ae4dce908ddbdd7cdd11f5", "data-role": "", class: {
      [`breakpoint-${this.breakpoint}`]: true
    } }, h("slot", { key: "d4316defd6187f58d1985ac6cfbfc8b6c00c8976", name: "application-header" }), h("div", { key: "c469f5d352f3f3a5076048601d7f971e506b641f", class: "application" }, h("slot", { key: "c4eb0d2ff1072d219471812327fcea9205ef6a68", name: "menu" }), h("aside", { key: "4a21967366659f686dd6a440f5a49656152c30db", class: {
      "application-sidebar": true,
      slotted: this.applicationSidebarSlotted
    }, onClick: () => this.onContentClick() }, h("slot", { key: "8755cb0a44d236370269f6b16efd5d7abe4a65b1", name: "application-sidebar", onSlotchange: () => this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot) })), h("div", { key: "e3785747895c9088c05a31efcaa23fc24dfa9a1b", class: "content-area" }, h("main", { key: "5851ddbde96f58e34997e1170834fcbd1170788a", class: "content", onClick: () => this.onContentClick() }, h("slot", { key: "1f02153bf8b615bf9a2bcba687c355a3556a2269" })), h("footer", { key: "cd197d08463928e3f99338fb5dc48c17d3478836", class: "footer" }, h("slot", { key: "8b171ae00d0634e38bc36e98be7b7982bd25dbc8", name: "bottom" })))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "breakpoints": ["onBreakpointsChange"],
      "theme": ["changeTheme"],
      "themeSystemAppearance": ["changeTheme"],
      "appSwitchConfig": ["onApplicationSidebarChange"],
      "applicationSidebarSlotted": ["onApplicationSidebarChange"]
    };
  }
};
Application.style = applicationCss;
export {
  Application as ix_application
};
