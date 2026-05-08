import { r as registerInstance, c as createEvent, h, H as Host } from "./global-7ZbTfMw3.js";
import { q as iconClose } from "./index-BBzEV-f4-ChQfUIyc.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { A as Animation } from "./animation-BLaucX4x-BWLd_Wig.js";
const drawerCss = () => `:host{top:0;right:0;display:block;position:absolute;justify-content:flex-start;align-items:center;opacity:0;max-height:100vh;min-height:1.5rem;background-color:var(--theme-color-1);border-radius:0.25rem;box-shadow:var(--theme-box-shadow-level-3)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .drawer-container{z-index:100}:host .header{display:flex;position:relative;align-items:center;justify-content:flex-end;padding:0.5rem;width:100%;order:1}:host .header .header-content{flex-grow:1;margin-right:1rem}:host .content{position:relative;flex:1;order:2;height:100%;width:100%;overflow-y:auto}:host(.display-none){display:none}`;
const Drawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = createEvent(this, "open", 7);
    this.drawerClose = createEvent(this, "drawerClose", 7);
    this.show = false;
    this.closeOnClickOutside = true;
    this.fullHeight = false;
    this.minWidth = 16;
    this.maxWidth = 28;
    this.width = this.minWidth;
    this.ariaLabelCloseButton = "Close drawer";
    this.toggle = false;
    this.callback = this.clickedOutside.bind(this);
    this.showContent = true;
  }
  onShowChanged(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    this.toggleDrawer(newValue);
  }
  /**
   * Toggle or define show state of drawer
   * @param show Overwrite toggle state with boolean
   */
  async toggleDrawer(show) {
    show = show !== null && show !== void 0 ? show : !this.show;
    if (show) {
      const { defaultPrevented } = this.open.emit();
      if (defaultPrevented) {
        return;
      }
      this.show = true;
      if (!this.toggle && this.divElement) {
        this.slideInRight(this.divElement);
        setTimeout(() => {
          window.addEventListener("mousedown", this.callback);
        }, Animation.mediumTime);
      }
    } else {
      const { defaultPrevented } = this.drawerClose.emit();
      if (defaultPrevented) {
        return;
      }
      this.show = false;
      if (this.toggle && this.divElement) {
        this.slideOutRight(this.divElement);
      }
      window.removeEventListener("mousedown", this.callback);
    }
    this.toggle = this.show;
    return Promise.resolve();
  }
  onCloseClicked() {
    this.show = false;
  }
  clickedOutside(evt) {
    if (!this.closeOnClickOutside) {
      return;
    }
    const target = evt.target;
    const closestElement = target.closest("#div-container");
    const btn = target.closest("#drawer-btn");
    if (evt.target.type !== "button" && closestElement !== this.divElement && target !== btn) {
      this.show = false;
    }
  }
  getConstrainedWidth(width) {
    return Math.min(Math.max(width, this.minWidth), this.maxWidth);
  }
  slideOutRight(el) {
    const initialWidth = `${this.getConstrainedWidth(this.width === "auto" ? this.minWidth : this.width)}rem`;
    animate(el, {
      duration: Animation.mediumTime,
      width: [initialWidth, 0],
      opacity: [1, 0],
      easing: "easeInSine",
      onComplete: () => {
        el.classList.add("display-none");
      }
    });
  }
  slideInRight(el) {
    const targetWidth = `${this.getConstrainedWidth(this.width === "auto" ? this.minWidth : this.width)}rem`;
    animate(el, {
      duration: Animation.mediumTime,
      width: [0, targetWidth],
      opacity: [0, 1],
      easing: "easeOutSine",
      onBegin: () => {
        el.classList.remove("display-none");
      },
      onComplete: () => {
        this.showContent = true;
      }
    });
  }
  componentDidLoad() {
    this.toggleDrawer(this.show);
  }
  render() {
    return h(Host, { key: "a02782f51fdf141ff257988beec49cdaff3f0050", class: {
      "drawer-container": true,
      "display-none": true
    }, style: {
      width: "0",
      "max-width": `${this.maxWidth}rem`,
      height: this.fullHeight ? "100%" : "auto",
      overflow: "hidden"
    }, ref: (el) => this.divElement = el, "data-testid": "container", id: "div-container" }, h("div", { key: "6b7464b407c72c9b7afe3b1b9fa61b1603bb40d8", style: {
      width: this.width === "auto" ? "auto" : `${this.getConstrainedWidth(this.width)}rem`
    } }, h("div", { key: "c25f79cde5e320e7e5f8aab9b87aca34fff4bdae", class: "header" }, h("div", { key: "413490aaef2405978027796a7bb49a410640bd53", class: "header-content" }, h("slot", { key: "89fe41129f30752f5057b6f73d8232599c1aae9b", name: "header" })), h("ix-icon-button", { key: "eef54b3d59ebf9db5d96f0f3241f14d16a0c6064", class: "close-button", style: {
      display: this.showContent ? "block" : "none"
    }, icon: iconClose, iconColor: "color-soft-text", size: "24", variant: "tertiary", onClick: () => this.onCloseClicked(), "data-testid": "close-button", "aria-label": this.ariaLabelCloseButton })), h("div", { key: "3f77f8e65f38c19cf06b1cae288f9cf257a094c1", class: "content", style: {
      display: this.showContent ? "block" : "none"
    } }, h("slot", { key: "a12cc29a8ad94ae58295361bf781df4068d01403" }))));
  }
  static get watchers() {
    return {
      "show": [{
        "onShowChanged": 0
      }]
    };
  }
};
Drawer.style = drawerCss();
export {
  Drawer as ix_drawer
};
