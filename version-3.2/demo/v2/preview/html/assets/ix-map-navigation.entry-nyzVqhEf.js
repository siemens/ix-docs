import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-DaepF4XF.js";
import { a as anime } from "./anime.es-Ou74PMQs-BIGLVYOB.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-CKM5pVsv-B0zIukL5.js";
import { x as iconContextMenu } from "./index-CB6MK0tq-MglExpDl.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
const mapNavigationCss = ":host{display:flex;position:relative;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .map-nav{display:flex;margin-left:3.25rem;position:relative;height:100%;flex-grow:1;overflow:hidden}:host .map-nav-sidebar{display:flex;flex-direction:column;align-items:center;width:29.75rem;max-width:29.75rem;min-width:29.75rem;height:100%;left:4rem;background-color:var(--theme-map-navigation--background);border-inline-end:0.125rem solid var(--theme-map-navigation-separator--background);z-index:99}:host .map-nav-sidebar.display-none{display:none}:host .map-nav-sidebar-content{align-items:center;position:relative;overflow:auto;height:100%;width:100%}:host .map-nav-sidebar-content .map-nav-sidebar-static-content{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;justify-content:space-between;margin-top:0.437rem;margin-bottom:0.812rem;margin-left:1rem;margin-right:1rem}:host .map-nav-header{display:flex;position:relative;align-items:center;height:3.5rem;min-height:3.5rem;width:100%}:host .map-nav-header .map-nav-header-brand{background-color:var(--theme-map-navigation-background);padding-left:1rem;padding-right:1rem;padding-bottom:0.625rem;height:100%;width:100%;--theme-app-header--color:var(--theme-map-navigation-header--color);--theme-app-header-logo--color:var(--theme-map-navigation-logo--color)}:host .map-nav-header .map-nav-header-brand button{margin-left:1rem}:host .map-nav-header-content{display:flex;height:3.5rem;align-items:center;overflow:hidden;padding:0 1rem}:host .map-nav-header-content.empty{height:0}:host .map-nav-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;align-items:center;flex-grow:1}:host .content{display:block;flex-grow:1;position:relative;height:100%;overflow:hidden;z-index:calc(var(--theme-z-index-sticky) - 1)}:host ::slotted(ix-menu){position:absolute}";
const MapNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navigationToggled = createEvent(this, "navigationToggled", 7);
    this.contextMenuClick = createEvent(this, "contextMenuClick", 7);
    this.hideContextMenu = true;
    this.isSidebarOpen = true;
    this.hasContentHeader = false;
  }
  get menu() {
    return this.hostElement.querySelector("ix-menu");
  }
  get menuOverlay() {
    return this.hostElement.querySelector("ix-menu-overlay");
  }
  get mapNavMenu() {
    return this.hostElement.shadowRoot.querySelector(".map-nav-menu");
  }
  get sidebar() {
    return this.hostElement.shadowRoot.querySelector(".map-nav-sidebar");
  }
  get overlay() {
    return this.hostElement.shadowRoot.querySelector("#overlay");
  }
  componentDidRender() {
    this.appendMenu();
    this.closeOverlay();
  }
  componentWillLoad() {
    useContextProvider(this.hostElement, ApplicationLayoutContext, {
      hideHeader: false,
      host: "map-navigation"
    });
  }
  appendMenu() {
    this.menu.addEventListener("mapExpandChange", (event) => {
      const state = !event.detail;
      this.toggleSidebar(state);
    });
    this.menu.enableMapExpand = true;
  }
  /**
   * Change the visibility of the sidebar
   *
   * @param show new visibility state
   */
  async toggleSidebar(show) {
    if (show !== void 0) {
      this.isSidebarOpen = show;
    } else {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
    if (this.isSidebarOpen) {
      this.openSidebar();
    } else {
      this.closeSidebar();
    }
    this.navigationToggled.emit(this.isSidebarOpen);
    this.menu.toggleMapExpand(this.isSidebarOpen);
  }
  closeSidebar() {
    anime({
      targets: this.sidebar,
      duration: MapNavigation.defaultTime,
      marginLeft: [0, "-29.75rem"],
      opacity: [1, 0],
      easing: "easeInSine",
      complete: () => {
        this.sidebar.classList.add("display-none");
      }
    });
  }
  openSidebar() {
    anime({
      targets: this.sidebar,
      duration: MapNavigation.defaultTime,
      marginLeft: ["-29.75rem", 0],
      opacity: [0, 1],
      easing: "easeOutSine",
      begin: () => {
        this.sidebar.classList.remove("display-none");
      }
    });
  }
  /**
   * Open a overlay inside content area
   * @deprecated Will be removed in 2.0.0. Use slot based approach
   *
   * @param name
   * @param component
   * @param icon
   * @param color
   */
  async openOverlay(name, component, icon, color) {
    anime({
      targets: this.overlay,
      duration: MapNavigation.slowTime,
      backdropFilter: [0, "blur(1rem)"],
      translateX: ["-4rem", 0],
      opacity: [0, 1],
      easing: "easeOutSine",
      begin: () => {
        this.overlay.classList.remove("display-none");
      }
    });
    const overlayInstance = document.createElement("ix-map-navigation-overlay");
    overlayInstance.setAttribute("color", color !== null && color !== void 0 ? color : "");
    overlayInstance.setAttribute("name", name);
    overlayInstance.setAttribute("icon", icon !== null && icon !== void 0 ? icon : "");
    overlayInstance.setAttribute("slot", "overlay");
    overlayInstance.addEventListener("closeClick", () => this.closeOverlay());
    overlayInstance.appendChild(component);
    this.hostElement.appendChild(overlayInstance);
  }
  /**
   * Close current shown overlay
   * @deprecated Will be removed in 2.0.0. Use slot based approach
   */
  async closeOverlay() {
    anime({
      targets: this.overlay,
      duration: MapNavigation.slowTime,
      backdropFilter: ["blur(1rem)", 0],
      translateX: [0, "-4rem"],
      opacity: [1, 0],
      easing: "easeInSine",
      complete: () => {
        var _a;
        if (!this.overlay) {
          return;
        }
        (_a = this.overlay.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
        this.overlay.classList.add("display-none");
      }
    });
  }
  checkHasContentHeader(e) {
    const nodes = e.currentTarget.assignedNodes({
      flatten: true
    });
    this.hasContentHeader = (nodes === null || nodes === void 0 ? void 0 : nodes.length) !== 0;
  }
  render() {
    return h(Host, { key: "1a223c8842dd37faa6b78c82fa713e3b0b3a852e" }, h("slot", { key: "e72b19ae900c98977fd19b53fb3c0b88e8aecf4e", name: "menu" }), h("div", { key: "934855ed86770b78764f878897a11d79073ac765", class: "map-nav" }, h("div", { key: "64034047cedf23818ab09755570cc16c97f555cb", class: "map-nav-sidebar" }, h("div", { key: "450e88db9c1bc6dd73015ea0cd77f3db899c0248", class: "map-nav-header" }, h("ix-application-header", { key: "43059244fb12002771d6c064cb6a72452dd513c1", name: this.applicationName, class: "map-nav-header-brand" }, h("slot", { key: "f559f98b7cde095532830efb30f5ee979d0e1b93", slot: "logo", name: "logo" }))), h("div", { key: "15a27e5b20fd7127d895cfc885a490e09a4a298a", class: "map-nav-sidebar-content" }, h("div", { key: "90628e604ca9a6ebdc750f417c3d3e0dd25905be", class: "map-nav-sidebar-static-content" }, h("div", { key: "51c9d486c284709ae46347cbb8f13519503ce6fd", class: "map-nav-title" }, this.navigationTitle), this.hideContextMenu ? "" : h("ix-icon-button", { icon: iconContextMenu, ghost: true, size: "24", variant: "secondary", onClick: (_) => this.contextMenuClick.emit(), "aria-label": this.ariaLabelContextIconButton })), h("div", { key: "04a9e0e79eb47dfb728bbc06478d6cddd88509bd", class: "map-nav-sidebar-user-content" }, h("slot", { key: "cc5e1aeb818330cbae337369170f4ae2ea60ae6d", name: "sidebar-content" })))), h("div", { key: "2361b5a10b8fe716a41b2dd2e7f6b8cc416e8cfb", class: "content" }, h("div", { key: "b6d874d45af94ee319061f0eb7a8f1b2f80aa187", class: {
      "map-nav-header-content": true,
      "bg-2": true,
      empty: !this.hasContentHeader
    } }, h("slot", { key: "cee282312d76f8825bd4790a966e84061ae61c48", name: "content-header", onSlotchange: (e) => this.checkHasContentHeader(e) })), h("main", { key: "a0743c77f4ef72adb880e97af85f00bba335aa55" }, h("slot", { key: "1a5f49709e7d82c3ff8a6cabc6f7a7c9868a0e30" }), h("slot", { key: "d0774a8ed2961f0d79fdbbaec27b85978fa99cf8", name: "overlay" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
MapNavigation.defaultTime = 150;
MapNavigation.slowTime = 500;
MapNavigation.style = mapNavigationCss;
export {
  MapNavigation as ix_map_navigation
};
