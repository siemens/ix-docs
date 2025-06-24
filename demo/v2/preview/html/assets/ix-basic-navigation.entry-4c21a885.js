import { r as registerInstance, h, H as Host, g as getElement } from "./global-7dbfff85.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-CKM5pVsv-a58f9e76.js";
import { a as applicationLayoutService } from "./service-Ca8OHh45-2542e53e.js";
import { m as menuController } from "./menu-service-Dl5Ra79J-fca92c46.js";
import "./typed-event-BdCnOrqW-8705fd69.js";
import "./breakpoints-D6vSVaHq-0b67251c.js";
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
    return h(Host, { key: "554173d72095d06ac3d5513c91174c083f3e35a6", "data-role": "", class: {
      "hide-header": this.hideHeader,
      [`breakpoint-${this.breakpoint}`]: true
    } }, !this.hideHeader ? h("ix-application-header", { name: this.applicationName }, h("slot", { name: "logo", slot: "logo" })) : null, h("div", { key: "7d075b4b4f09e258bf8067ac5faee35777e955d0", class: "navigation-content" }, h("slot", { key: "23e5d833f6aa27e5dd5103e3ef029f274397169e", name: "menu" }), h("div", { key: "1ae544b1a13a03981af145ca73c9320cd93350c3", class: "content", onClick: () => this.onContentClick() }, h("slot", { key: "2087065094c3cc5de206d771bcfe5be56adccb70" }))));
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
