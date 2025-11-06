import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-CTsFSACc.js";
import { q as iconClose, a as iconWarning, c as iconSuccess, b as iconError, i as iconInfo } from "./index-8HpPmDK_-DinFJk0z.js";
const toastCss = ":host{display:flex;flex-direction:column;position:relative;min-width:17.5rem;max-width:17.5rem;min-height:3.5rem;pointer-events:all;background-color:var(--theme-toast--background);border:var(--theme-toast--border-thickness) solid var(--theme-toast--border-color);border-radius:var(--theme-toast--border-radius, var(--theme-toast--border-radus));box-shadow:var(--theme-toast--box-shadow);--animate-duration:var(--theme-medium-time)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .toast-body{display:flex;position:relative;min-height:3.5rem;width:100%;flex-grow:1;padding:0.75rem}:host .toast-body .toast-icon{display:flex;align-items:flex-start;margin-right:0.5rem}:host .toast-body .toast-content{overflow:hidden;text-overflow:ellipsis;min-width:0;width:100%}:host .toast-body .toast-content .toast-title{margin:0.25rem 0px}:host .toast-body .toast-content .toast-message{min-width:0;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .toast-body .toast-content .toast-action{margin-top:0.5rem}:host .toast-body .toast-icon+.toast-content{max-width:10.25rem}:host .toast-close{display:flex;position:relative;pointer-events:all;margin-left:auto;margin-right:0px;opacity:0.6}:host .toast-close:hover{opacity:1}:host .toast-progress-bar{position:absolute;bottom:0;height:0.125rem;width:100%;background-color:var(--theme-toast-timer-value--background);transform-origin:left}:host .toast-progress-bar--animated{animation:trackProgress linear 1 forwards}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}";
const Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeToast = createEvent(this, "closeToast", 7);
    this.type = "info";
    this.autoCloseDelay = 5e3;
    this.preventAutoClose = false;
    this.progress = 0;
    this.touched = false;
    this.paused = false;
  }
  getIcon() {
    if (this.icon) {
      return h("ix-icon", { "data-testid": "toast-icon", name: this.icon, color: this.iconColor, size: "24" });
    }
    switch (this.type) {
      case "info":
        return h("ix-icon", { "data-testid": "toast-icon", name: iconInfo, size: "24", color: "color-std-text" });
      case "error":
        return h("ix-icon", { "data-testid": "toast-icon", name: iconError, size: "24", color: "color-alarm" });
      case "success":
        return h("ix-icon", { "data-testid": "toast-icon", name: iconSuccess, size: "24", color: "color-success" });
      case "warning":
        return h("ix-icon", { "data-testid": "toast-icon", name: iconWarning, size: "24", color: "color-warning-text" });
      default:
        return "";
    }
  }
  close() {
    if (this.hostElement) {
      this.hostElement.classList.add("animate__fadeOut");
    }
    setTimeout(() => {
      this.closeToast.emit();
    }, 250);
  }
  /**
   * Pause the toast's auto-close progress bar and timer.
   */
  async pause() {
    this.paused = true;
  }
  /**
   * Resume the toast's auto-close progress bar and timer if previously paused.
   */
  async resume() {
    this.paused = false;
  }
  /**
   * Returns whether the toast is currently paused (auto-close is paused).
   */
  async isPaused() {
    return this.paused || this.touched;
  }
  render() {
    let progressBarStyle = {};
    const progressBarClass = ["toast-progress-bar"];
    progressBarStyle = {
      animationDuration: `${this.autoCloseDelay}ms`,
      animationPlayState: this.touched || this.paused ? "paused" : "running"
    };
    progressBarClass.push("toast-progress-bar--animated");
    return h(Host, { key: "40179af0218a8618fad55768771f13ac66ea7954", class: "animate__animated animate__fadeIn" }, h("div", { key: "c896949bb6663f4b024e56088d21a81ed847426d", class: "toast-body", onPointerLeave: () => {
      this.touched = false;
    }, onPointerEnter: () => {
      this.touched = true;
    } }, this.type || this.icon ? h("div", { class: "toast-icon" }, this.getIcon()) : null, h("div", { key: "f7f2afb2f99e46378f149482ce84b7cef0274bdf", class: "toast-content" }, this.toastTitle ? h("ix-typography", { class: "toast-title", format: "h5" }, this.toastTitle) : null, h("div", { key: "f59c5db2920eb5d616e026bc9a213b4eb2421502", class: "toast-message" }, h("slot", { key: "2685a9a8d6b665555325cb7d68cc887bce51e491" })), h("div", { key: "d2b4a4b38df4034965cfefcc54777c7fccbef8c4", class: "toast-action" }, h("slot", { key: "d990ffca70a6dfd58624886c99cf399959eb270b", name: "action" }))), h("div", { key: "41cc8c4dc62e60eec6534db08250068e782d3477", class: "toast-close" }, h("ix-icon-button", { key: "13926a4f1dd7047d8a3f814529e48cb9c505ea37", icon: iconClose, iconColor: "color-soft-text", size: "24", variant: "tertiary", onClick: () => this.closeToast.emit(), "aria-label": this.ariaLabelCloseIconButton }))), !this.preventAutoClose && h("div", { key: "a577d05563675079f6cab8364ef66794b4556f49", class: progressBarClass.join(" "), style: progressBarStyle, onAnimationEnd: () => {
      this.close();
    }, onTransitionEnd: () => {
      if (this.progress === 0) {
        this.close();
      }
    } }));
  }
  get hostElement() {
    return getElement(this);
  }
};
Toast.style = toastCss;
export {
  Toast as ix_toast
};
