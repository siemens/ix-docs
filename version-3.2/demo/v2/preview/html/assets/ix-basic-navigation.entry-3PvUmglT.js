import { r as registerInstance, h, H as Host, g as getElement } from "./global-DaepF4XF.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-CKM5pVsv-B0zIukL5.js";
import { a as applicationLayoutService } from "./service-Ca8OHh45-6Pw2N-Ed.js";
import { m as menuController } from "./menu-service-Dl5Ra79J-Dk6abri9.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./breakpoints-D6vSVaHq-Ca0ODf6_.js";
const basicNavigationCss = ":host{display:flex;position:relative;width:100%;height:100%;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .content{display:flex;height:100%;width:100%;position:relative;margin-left:3.25rem;overflow:auto}:host .navigation-content{display:flex;position:relative;flex-direction:row;height:calc(100% - 2.75rem);width:100%}:host(.hide-header) .navigation-content,:host(.hide-header) .content{height:100%}:host(.breakpoint-lg) .content{margin-left:0rem}:host(.breakpoint-sm) .content{margin-left:0px;width:100%}";
const BasicNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hideHeader = false;
    this.breakpoints = ["sm", "md", "lg"];
    this.breakpoint = "lg";
  }
  onHideHeaderChange() {
    var _a;
    (_a = this.contextProvider) === null || _a === void 0 ? void 0 : _a.emit({
      hideHeader: this.hideHeader,
      host: "basic-navigation"
    });
    this.breakpoint = applicationLayoutService.breakpoint;
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
      hideHeader: this.hideHeader,
      host: "basic-navigation"
    });
    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      this.breakpoint = mode;
    });
    this.breakpoint = applicationLayoutService.breakpoint;
    if (this.forceBreakpoint) {
      this.forceLayoutChange(this.forceBreakpoint);
    }
  }
  componentDidRender() {
    if (this.menu) {
      this.menu.applicationName = this.applicationName;
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.modeDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
  }
  render() {
    return h(Host, { key: "4822db1bf514b124a556e3ad84371ec65c80b79e", "data-role": "", class: {
      "hide-header": this.hideHeader,
      [`breakpoint-${this.breakpoint}`]: true
    } }, !this.hideHeader ? h("ix-application-header", { name: this.applicationName }, h("slot", { name: "logo", slot: "logo" })) : null, h("div", { key: "6dac9e78e5fdfcde1d6ceadb634edf144f92d533", class: "navigation-content" }, h("slot", { key: "32e0ae56a4bd3d71298fd8febf6dab05f352addf", name: "menu" }), h("div", { key: "9c58c183a31ab742153be18d439e44557caa70b3", class: "content", onClick: () => this.onContentClick() }, h("slot", { key: "8fba39214e60168b3780d95c1e262b976dc4a5a6" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "hideHeader": ["onHideHeaderChange"],
      "breakpoints": ["onBreakpointsChange"]
    };
  }
};
BasicNavigation.style = basicNavigationCss;
export {
  BasicNavigation as ix_basic_navigation
};
