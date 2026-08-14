import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-BTgWS9s6.js";
import { K as iconClose, c as iconWarning, a as iconSuccess, b as iconError, d as iconInfo } from "./index-BeX6RWvV-CXzUIwMU.js";
const toastCss = () => `:host{display:flex;flex-direction:column;position:relative;min-width:17.5rem;max-width:17.5rem;min-height:3.5rem;pointer-events:all;background-color:var(--theme-toast--background);border:var(--theme-toast--border-thickness) solid var(--theme-toast--border-color);border-radius:var(--theme-toast--border-radius, var(--theme-toast--border-radus));box-shadow:var(--theme-toast--box-shadow);--animate-duration:var(--theme-medium-time)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .toast-body{display:flex;position:relative;min-height:3.5rem;width:100%;flex-grow:1;padding:0.75rem 0.75rem 0.25rem}:host .toast-body .toast-icon{display:flex;align-items:flex-start;padding:0.25rem}:host .toast-body .toast-content{overflow:hidden;min-width:0;width:100%;padding:0.25rem}:host .toast-body .toast-content .toast-title{min-width:0;margin:0.25rem 0px;overflow-wrap:break-word;word-break:break-word}:host .toast-body .toast-content .toast-message{min-width:0;overflow-wrap:break-word;word-break:break-word;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .toast-body .toast-content .toast-action{margin-top:0.5rem}:host .toast-close{display:flex;position:relative;pointer-events:all;margin-left:auto;margin-right:0px;opacity:0.6}:host .toast-close:hover{opacity:1}:host .toast-progress-bar{position:absolute;bottom:0;height:0.125rem;width:100%;background-color:var(--theme-toast-timer-value--background);transform-origin:left}:host .toast-progress-bar--animated{animation:trackProgress linear 1 forwards}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}`;
const Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeToast = createEvent(this, "closeToast", 7);
  }
  /**
   * Toast type
   */
  type = "info";
  /**
   * Toast title
   */
  toastTitle;
  /**
   * Autoclose title after delay
   */
  autoCloseDelay = 5e3;
  /**
   * Autoclose behavior
   */
  preventAutoClose = false;
  /**
   * Icon of toast
   */
  icon;
  /**
   * Icon color of toast
   */
  iconColor;
  /**
   * Allows to hide the icon in the toast.
   */
  hideIcon = false;
  /**
   * ARIA label for the close icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelCloseIconButton = "Close toast";
  /**
   * Toast closed
   */
  closeToast;
  progress = 0;
  touched = false;
  paused = false;
  get hostElement() {
    return getElement(this);
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
    return h(Host, { key: "23320a0cad0f80260f080d3ccb893b97b0de3430", role: "alert", "aria-live": "polite", "aria-atomic": "true", class: "animate__animated animate__fadeIn" }, h("div", { key: "e11be14a88b8b220d42810dc902c67f3b4bc6048", class: "toast-body", onPointerLeave: () => {
      this.touched = false;
    }, onPointerEnter: () => {
      this.touched = true;
    } }, (this.type || this.icon) && !this.hideIcon ? h("div", { class: "toast-icon" }, this.getIcon()) : null, h("div", { key: "303876065f69252b89566c73aebb23bf28ebf221", class: "toast-content" }, this.toastTitle ? h("ix-typography", { class: "toast-title", format: "h5" }, this.toastTitle) : null, h("div", { key: "bf8e2ae5a9b24c7161f1823ce9542172cd092006", class: "toast-message" }, h("slot", { key: "f60b4dae5967a6f192d432012273ab3e602f9cf3" })), h("div", { key: "97d552f3014e0f428d8beb4d1a31e6ba3b9085cd", class: "toast-action" }, h("slot", { key: "a107a97f28acc21d33024ab7a2f33ccb571648c2", name: "action" }))), h("div", { key: "b074eab437358b57a65aa2c6d96f3860cb04536e", class: "toast-close" }, h("ix-icon-button", { key: "8ca71069c1dbf7c25186357ebf508e7f69bf3c92", icon: iconClose, iconColor: "color-soft-text", size: "24", variant: "tertiary", onClick: () => this.closeToast.emit(), "aria-label": this.ariaLabelCloseIconButton }))), !this.preventAutoClose && h("div", { key: "4dc63a7a7ed80ac9758db43acc0200ad71a4fae0", class: progressBarClass.join(" "), style: progressBarStyle, onAnimationEnd: () => {
      this.close();
    }, onTransitionEnd: () => {
      if (this.progress === 0) {
        this.close();
      }
    } }));
  }
};
Toast.style = toastCss();
export {
  Toast as ix_toast
};
