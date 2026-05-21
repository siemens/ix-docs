import { a as registerInstance, g as getElement, h, H as Host } from "./global-DjWMysHf.js";
import { a as useContextProvider, A as ApplicationLayoutContext } from "./context-zqk3Dkv--CsY55SLG.js";
import { a as applicationLayoutService } from "./service-CEglFEKY-CaUBmgY_.js";
import { m as menuController } from "./menu-service-DTIYRV47-C3CDZAa1.js";
import { h as hasSlottedElements } from "./shadow-dom-BIe8Nw9M-DxOF84uP.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./breakpoints-D_Hmobxf-DBbixPq4.js";
const applicationCss = () => `:host{display:flex;position:relative;width:100vw;height:100vh;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .application{display:flex;position:relative;flex-direction:row;height:100%;width:100%;overflow:hidden}:host .content-area{display:flex;position:relative;flex-direction:column;flex-wrap:nowrap;height:calc(100% - var(--ix-safe-area-inset-bottom, 0px));width:100%;margin-left:var(--ix-application-menu-margin-left);min-width:0}:host main{display:block;position:relative;flex-grow:1;width:100%;padding-bottom:var(--ix-safe-area-inset-bottom);overflow:auto}:host footer{display:block;position:relative;width:100%}:host(.breakpoint-md){--ix-application-menu-margin-left:calc(     3.25rem + var(--ix-application-menu-safe-area-left, 0rem)   )}:host(.breakpoint-md) aside.slotted{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-md) aside.slotted+.content-area{margin-left:0}:host(.breakpoint-md) aside:not(.slotted)+.content-area{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-lg){--ix-application-menu-margin-left:0}:host(.breakpoint-sm){--ix-application-menu-margin-left:var(     --ix-application-menu-safe-area-left,     0rem   )}`;
const Application = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Application theme
   */
  theme;
  /**
   * Color schema of the theme
   *
   * @since 5.0.0
   */
  colorSchema = "system";
  /**
   * Change the responsive layout of the menu structure
   */
  forceBreakpoint;
  forceLayoutChange(newMode) {
    if (!newMode) {
      applicationLayoutService.enableBreakpointDetection();
      return;
    }
    applicationLayoutService.disableBreakpointDetection();
    applicationLayoutService.setBreakpoint(newMode);
  }
  /**
   * Supported layouts
   */
  breakpoints = ["sm", "md", "lg"];
  onBreakpointsChange(breakpoints) {
    applicationLayoutService.setBreakpoints(breakpoints);
  }
  /**
   * Define application switch configuration
   */
  appSwitchConfig;
  breakpoint = "lg";
  applicationSidebarSlotted = false;
  contextProvider;
  get menu() {
    return this.hostElement.querySelector("ix-menu");
  }
  get applicationSidebarSlot() {
    return this.hostElement.shadowRoot.querySelector(".application-sidebar slot");
  }
  modeDisposable;
  onContentClick() {
    if (menuController.isPinned) {
      return;
    }
    this.menu?.toggleMenu(false);
  }
  componentWillLoad() {
    applicationLayoutService.setBreakpoints(this.breakpoints);
    this.contextProvider = useContextProvider(this.hostElement, ApplicationLayoutContext, {
      hideHeader: false,
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
  }
  disconnectedCallback() {
    this.modeDisposable?.dispose();
  }
  changeTheme() {
    if (!this.theme) {
      return;
    }
    themeSwitcher.setTheme(this.theme);
  }
  changeColorSchema() {
    if (!this.colorSchema) {
      return;
    }
    themeSwitcher.setColorSchema(this.colorSchema);
  }
  onApplicationSidebarChange() {
    if (!this.contextProvider) {
      console.error("Context provider not available");
      return;
    }
    this.contextProvider.emit({
      hideHeader: false,
      sidebar: this.applicationSidebarSlotted,
      appSwitchConfig: this.appSwitchConfig
    });
  }
  render() {
    return h(Host, { key: "9621e446a9532a740dcdef516a51d326c59587a7", "data-role": "", class: {
      [`breakpoint-${this.breakpoint}`]: true
    } }, h("slot", { key: "0061a139b7fa722e97da65fbcaf2853bdd185466", name: "application-header" }), h("div", { key: "b2da184f99ab27ce576be02221497bb24462bb69", class: "application" }, h("slot", { key: "8e5895c10cb495320f251c9c44949700629be9ee", name: "menu" }), h("aside", { key: "60a6cd879294682b56061f4b0fd9bb2342fce229", class: {
      "application-sidebar": true,
      slotted: this.applicationSidebarSlotted
    }, onClick: () => this.onContentClick() }, h("slot", { key: "19416cec696ff2b7ae2818ebe375b98892df3116", name: "application-sidebar", onSlotchange: () => this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot) })), h("div", { key: "d6bd6479222c1b19c6e45f68e6993c534ce5afd2", class: "content-area" }, h("main", { key: "ac7117c1a192eadf913e8ab474019dcdd5c81025", class: "content", onClick: () => this.onContentClick() }, h("slot", { key: "bac13c155b023321b111f3ea89603840c6b73fe0" })), h("footer", { key: "5acded667f8360c952516a0a55ca5b0936834add", class: "footer" }, h("slot", { key: "34be70c1aa056e735aa52c17d4a8c469a68611ed", name: "bottom" })))));
  }
  static get watchers() {
    return {
      "breakpoints": [{
        "onBreakpointsChange": 0
      }],
      "theme": [{
        "changeTheme": 0
      }],
      "colorSchema": [{
        "changeColorSchema": 0
      }],
      "appSwitchConfig": [{
        "onApplicationSidebarChange": 0
      }],
      "applicationSidebarSlotted": [{
        "onApplicationSidebarChange": 0
      }]
    };
  }
};
Application.style = applicationCss();
export {
  Application as ix_application
};
