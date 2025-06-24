import { r as registerInstance, c as createEvent, h, H as Host } from "./global-7dbfff85.js";
import { a as anime } from "./anime.es-Ou74PMQs-025370c4.js";
import { q as iconClose, b as iconError, z as iconWarningRhomb, a as iconWarning, c as iconSuccess, i as iconInfo, A as iconNotification } from "./index-DLTnniMb-a143a692.js";
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
    return h(Host, { key: "bdca530b8707b94e4b94c0976986a127ab9142c4" }, h("div", { key: "a52bc91603d4610f1081947519f7adfcb16de098", class: { "message-container": true, [this.type]: true }, role: "alert", ref: (el) => this.divElement = el }, h("ix-icon", { key: "c2ccf0a0f507901f92b2503fdd0d4993f2151bc0", color: this.color, name: this.icon }), h("div", { key: "04ef6ca731befb5e3ab8a67f9e36aaf3c5642c55", class: "message-content" }, h("slot", { key: "0fb41fed1ee5487f943879dcf3e4635d83bc0a00" })), this.dismissible ? h("ix-icon-button", { icon: iconClose, size: "24", ghost: true, onClick: () => {
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
