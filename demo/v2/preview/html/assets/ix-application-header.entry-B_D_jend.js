import { r as registerInstance, c as createEvent, a as readTask, h, H as Host, g as getElement } from "./global-CTsFSACc.js";
import { e as iconMoreMenu, f as iconApps } from "./index-8HpPmDK_-DinFJk0z.js";
import { s as showAppSwitch } from "./index-Kp5Wf9wr-CEFkQm40.js";
import { a as applicationLayoutService } from "./service-Da0kv8hS-ChZKlHDF.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-BniHpAE1-BXrc-Gwu.js";
import { g as getCurrentBreakpoint } from "./breakpoints-D_Hmobxf-DBbixPq4.js";
import { m as menuController } from "./menu-service-BMvtckRa-Dk6abri9.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
import { a as a11yBoolean } from "./a11y-Bb7pDeaQ-DNI84lDX.js";
import "./animation-C5MWUgDN-BXCJNYHu.js";
import "./modal-BTxff2hq-Cy6rmdf-.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
const applicationHeaderCss = ":host{display:flex;flex-wrap:nowrap;align-items:end;justify-content:space-between;position:relative;width:100%;min-height:3rem;padding-top:var(--ix-safe-area-inset-top, 0rem);padding-right:calc(0.625rem + var(--ix-safe-area-inset-right, 0rem));padding-left:calc(0.625rem + var(--ix-safe-area-inset-left, 0rem));color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color);z-index:var(--theme-z-index-fixed)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .left-side,:host .right-side{display:flex;flex-direction:row;flex-wrap:nowrap;position:relative;align-items:center;min-width:0;min-height:3rem;height:100%}:host .left-side{flex:0 1 auto}:host .left-side .app-icon{display:block;position:relative;width:2rem;min-width:2rem;max-width:2rem;height:2rem;min-height:2rem;max-height:2rem}:host .left-side .app-icon.app-icon-outline{outline:1px solid var(--theme-app-header-app-icon--outline-color);border-radius:0.125rem}:host .left-side .app-icon img{position:relative;display:block;width:100%;height:100%;border-radius:0.125rem}:host .left-side .app-switch{margin:0 0.625rem}:host .left-side .app-switch.without-app-icon{margin-left:0px}:host .left-side .name{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;margin-left:0.75rem;margin-right:0.75rem;color:var(--theme-app-header--color);min-width:0;gap:0.75rem;overflow:hidden}:host .left-side .application-name,:host .left-side .application-name-suffix{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap}:host .left-side .application-name{flex:0 1 auto;min-width:0;flex-shrink:0;max-width:100%}:host .left-side .application-name-suffix{flex:1 1 auto;margin-top:0.4rem;min-width:0;flex-shrink:1;color:var(--theme-app-header-name-suffix--color)}:host .left-side .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color);margin-right:1rem;margin-left:1rem;min-width:-moz-fit-content;min-width:fit-content}:host .left-side .logo.hide-logo{display:none}:host .right-side{flex:1 1 auto;overflow:hidden;justify-content:space-between}:host .right-side .content,:host .right-side .secondary{display:flex;position:relative;align-items:center;justify-content:space-between;flex-direction:row;flex-wrap:nowrap;height:100%}:host .right-side .content{min-width:-moz-max-content;min-width:max-content}:host .right-side .secondary{overflow:hidden}:host .right-side .dropdown{overflow:visible}:host .right-side .dropdown-content>.slot-content-active{padding:0.5rem 1.5rem 0.5rem 1.5rem;border-top:none}:host .right-side .dropdown-content .slot-content-active~.slot-content-active{border-top:1px solid var(--theme-color-x-weak-bdr)}:host .right-side .context-menu{display:none}:host .right-side .context-menu.context-menu-visible{display:block;margin-left:0.5rem}:host .right-side ::slotted(ix-avatar){margin-left:0.5rem}:host .right-side .primary-navigation{align-self:end}:host .right-side.sm{justify-content:end}@media only screen and (max-width: 48em){:host .logo{margin-left:0.5rem;display:none !important}:host .content,:host .secondary,:host .app-icon{display:none}}:host(.hide-bottom-border){border-bottom:none}";
const ApplicationHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuToggle = createEvent(this, "menuToggle", 7);
    this.openAppSwitch = createEvent(this, "openAppSwitch", 7);
    this.appIconOutline = false;
    this.hideBottomBorder = false;
    this.showMenu = false;
    this.breakpoint = "lg";
    this.menuExpanded = false;
    this.suppressResponsive = false;
    this.hasSlottedLogo = false;
    this.hasOverflowContextMenu = false;
    this.hasSecondarySlotElements = false;
    this.hasDefaultSlotElements = false;
    this.hasOverflowSlotElements = false;
  }
  get contentBackground() {
    return this.hostElement.shadowRoot.querySelector(".dropdown-content");
  }
  componentWillLoad() {
    this.breakpoint = getCurrentBreakpoint();
    useContextConsumer(this.hostElement, ApplicationLayoutContext, (ctx) => {
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
    this.updateHasSlotAssignedElementsStates();
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
  checkLogoSlot() {
    const slotElement = this.hostElement.shadowRoot.querySelector('slot[name="logo"]');
    const isSiemensLogoDefined = window.customElements.get("ix-siemens-logo") !== void 0;
    if (isSiemensLogoDefined) {
      return hasSlottedElements(slotElement);
    }
    let assignedElements = slotElement === null || slotElement === void 0 ? void 0 : slotElement.assignedElements({ flatten: true });
    assignedElements = assignedElements === null || assignedElements === void 0 ? void 0 : assignedElements.filter((element) => element.tagName !== "IX-SIEMENS-LOGO");
    return (assignedElements === null || assignedElements === void 0 ? void 0 : assignedElements.length) !== 0;
  }
  attachSiemensLogoIfLoaded() {
    if (this.companyLogo) {
      return;
    }
    if (!this.checkLogoSlot()) {
      const logoElement = document.createElement("ix-siemens-logo");
      logoElement.slot = "logo";
      this.hostElement.appendChild(logoElement);
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
  updateHasSlotAssignedElementsStates() {
    const defaultSlot = this.hostElement.shadowRoot.querySelector(".content slot:not([name])");
    const secondarySlot = this.hostElement.shadowRoot.querySelector('.content slot[name="secondary"]');
    const overflowSlot = this.hostElement.shadowRoot.querySelector('.content slot[name="overflow"]');
    this.hasDefaultSlotElements = hasSlottedElements(defaultSlot);
    this.hasSecondarySlotElements = hasSlottedElements(secondarySlot);
    this.hasOverflowSlotElements = hasSlottedElements(overflowSlot);
    this.hasOverflowContextMenu = this.hasDefaultSlotElements || this.hasSecondarySlotElements;
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
    const showCompanyLogoByProperty = this.breakpoint !== "sm" && !!this.companyLogo;
    return h(Host, { key: "0568c65fa9cfe4f1250a5f7704cc19f7e38a5d19", class: {
      [`breakpoint-${this.breakpoint}`]: true,
      "hide-bottom-border": this.hideBottomBorder
    }, slot: "application-header" }, h("div", { key: "a5c4fa84d92bd9ce8e236f117605652bfc92e60d", class: "left-side" }, this.appIcon && this.breakpoint !== "sm" && h("div", { key: "0f790883c295875ef6b3f023cd9daa34980c5c96", class: {
      "app-icon": true,
      "app-icon-outline": this.appIconOutline
    } }, h("img", { key: "3e20234523c716d04e123706912eef1023eb884f", src: this.appIcon, alt: this.appIconAlt })), (this.showMenu || showMenuByApplicationFrame) && h("ix-menu-expand-icon", { key: "b46e806adadc12a7a355691bdb14bb2a3ee0f98f", onClick: () => this.onMenuClick(), expanded: this.menuExpanded, ixAriaLabel: this.ariaLabelMenuExpandIconButton }), showApplicationSwitch && h("ix-icon-button", { key: "57112cb328fc5231871e18496863ebc3a38f978b", onClick: () => this.showAppSwitch(), icon: iconApps, variant: "subtle-tertiary", class: {
      "app-switch": true,
      "without-app-icon": !this.appIcon
    }, "aria-label": this.ariaLabelAppSwitchIconButton }), showCompanyLogoByProperty && h("div", { key: "b622ece9a3c1645141c1cb54d9cb88f0b2b12646", class: "logo" }, h("img", { key: "854a9696190d015ce052c745f9ed7acc206f16d5", src: this.companyLogo, alt: this.companyLogoAlt })), h("div", { key: "0d5ff7f62bb55cb15d2e15e41279ca671716224c", class: {
      logo: true,
      "hide-logo": !this.hasSlottedLogo
    } }, h("slot", { key: "42d42aab0493036c165f1d7d969288bc2dc339c8", name: "logo", onSlotchange: () => this.hasSlottedLogo = this.checkLogoSlot() })), h("div", { key: "a388e25471839639f82f2e3d8798d041cdab1f78", class: "name" }, h("ix-typography", { key: "f7d197105b6609597fa742ca8b85aa2c80b2c25d", format: "body-lg", class: "application-name" }, this.name), this.nameSuffix && this.breakpoint !== "sm" && h("ix-typography", { key: "5a78095814f0d39666bbe26bb968d4df72233016", format: "body-xs", class: "application-name-suffix" }, this.nameSuffix))), h("div", { key: "e4a01fd2bf06bd9ae064c5f336e7ef2fe2880e1c", class: { "right-side": true, sm: this.breakpoint === "sm" } }, this.breakpoint !== "sm" && h("div", { key: "f3c3221c2dbcccf19d23502ff05984815fc8ea1e", class: "secondary" }, h("slot", { key: "9392845b82451cb62b886ab1bafa7ba7ddf21d13", name: "secondary" })), h("div", { key: "a288be02d9ee23480339d8de284c186fbc9bfd26", class: "content" }, this.breakpoint !== "sm" && h("slot", { key: "34dfa9b114c85e3e59183fce1b5a977eabe02d6a" }), h("ix-icon-button", { key: "c884b249320deb5f105538dd0fd7e47efd6207c0", class: {
      "context-menu": true,
      "context-menu-visible": this.hasOverflowContextMenu || this.hasOverflowSlotElements
    }, "data-context-menu": true, "data-testid": "show-more", icon: iconMoreMenu, variant: "subtle-tertiary", "aria-label": this.ariaLabelMoreMenuIconButton, "aria-hidden": a11yBoolean(!(this.hasOverflowContextMenu || this.hasOverflowSlotElements)) }), h("ix-dropdown", { key: "42ea43e1f28ecdd7651a2f652edb6eb2462a0df3", "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton(), "aria-hidden": a11yBoolean(!(this.hasOverflowContextMenu || this.hasOverflowSlotElements)) }, h("div", { key: "b57645df48b14862e17510560386dffdc7f918f2", class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, this.breakpoint === "sm" && h("div", { key: "d27a3ab3dcccb24deea6452aab078975d7657c1f", class: {
      "slot-content": true,
      "slot-content-active": this.hasSecondarySlotElements
    } }, h("slot", { key: "8236935ea329c8650b08c0fbb2be11a4233b54a5", name: "secondary", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), this.breakpoint === "sm" && h("div", { key: "d947b3da7b1c2683f319604698550e6deede8bb5", class: {
      "slot-content": true,
      "slot-content-active": this.hasDefaultSlotElements
    } }, h("slot", { key: "5e60684fe9b2d19e67a4b8c56225be76a2aff668", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), h("div", { key: "c072ab98aa238e71087064f9ffcbc46a8b43cacd", class: {
      "slot-content": true,
      "slot-content-active": this.hasOverflowSlotElements
    } }, h("slot", { key: "99752eacbebd15e6b9dda9b9dc96c919ed8ebcf6", name: "overflow", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })))), h("slot", { key: "c6c071f3ee91c6f0aa709ba59e979e644f22f22d", name: "ix-application-header-avatar" }))));
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
