import { r as registerInstance, c as createEvent, h, H as Host } from "./global-DaepF4XF.js";
import { a as anime } from "./anime.es-Ou74PMQs-BIGLVYOB.js";
import { q as iconClose, A as iconNotification, i as iconInfo, c as iconSuccess, a as iconWarning, B as iconWarningRhomb, b as iconError } from "./index-CB6MK0tq-MglExpDl.js";
const messageBarCss = ":host{margin:0.5rem 0.5rem 0rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}:host .alarm{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .danger{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .critical{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-critical)}:host .warning{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}:host .success{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-success)}:host .info{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}:host .neutral{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-neutral)}:host .primary{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-primary)}:host .message-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:normal;white-space:normal}:host ix-icon{margin-top:0.25rem}:host .message-bar-hidden{display:none}";
const MessageBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closedChange = createEvent(this, "closedChange", 7);
    this.closeAnimationCompleted = createEvent(this, "closeAnimationCompleted", 7);
    this.type = "info";
    this.dismissible = true;
  }
  componentWillRender() {
    const config = MessageBar.messageTypeConfigs[this.type];
    if (config) {
      this.icon = config.icon;
      this.color = config.color;
    }
  }
  closeAlert(el) {
    const { defaultPrevented } = this.closedChange.emit();
    if (!defaultPrevented) {
      anime({
        targets: el,
        duration: MessageBar.duration,
        opacity: [1, 0],
        easing: "easeOutSine",
        complete: () => {
          el.classList.add("message-bar-hidden");
          this.closeAnimationCompleted.emit();
        }
      });
    }
  }
  render() {
    return h(Host, { key: "0bd38e554e2187671f52e24dce3a98f2adde2a31" }, h("div", { key: "45738b43dd3877625f8933e3ae2d0ef96e9c58f6", class: { "message-container": true, [this.type]: true }, role: "alert", ref: (el) => this.divElement = el }, h("ix-icon", { key: "2355cddb483927e4d8cd046daed919ef0e446eb2", color: this.color, name: this.icon }), h("div", { key: "2238498ee5f6210db085a02048f9057a5b8e04d0", class: "message-content" }, h("slot", { key: "b3554201cb4c09d769fa38697e89b784e12c2a71" })), this.dismissible ? h("ix-icon-button", { icon: iconClose, size: "24", ghost: true, onClick: () => {
      if (this.divElement) {
        this.closeAlert(this.divElement);
      }
    }, "data-testid": "close-btn" }) : ""));
  }
};
MessageBar.duration = 300;
MessageBar.messageTypeConfigs = {
  alarm: { icon: iconError, color: "color-alarm" },
  danger: { icon: iconError, color: "color-alarm" },
  critical: { icon: iconWarningRhomb, color: "color-critical" },
  warning: { icon: iconWarning, color: "color-warning" },
  success: { icon: iconSuccess, color: "color-success" },
  info: { icon: iconInfo, color: "color-info" },
  neutral: { icon: iconNotification, color: "color-neutral" },
  primary: { icon: iconNotification, color: "color-primary" }
};
MessageBar.style = messageBarCss;
export {
  MessageBar as ix_message_bar
};
