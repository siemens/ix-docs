import { r as registerInstance, c as createEvent, h, H as Host } from "./global-DaepF4XF.js";
import { n as iconArrowLeft } from "./index-CB6MK0tq-MglExpDl.js";
const contentHeaderCss = ":host{display:flex;flex-direction:row;align-items:flex-start;padding:0}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0}:host .titleGroup .secondary{padding:0.25rem 0}:host .subtitle{margin-top:-0.125rem}:host .backButton{margin-right:0.5rem}:host .buttons{flex:0 0 auto}";
const ContentHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.backButtonClick = createEvent(this, "backButtonClick", 7);
    this.variant = "primary";
    this.headerSubtitle = void 0;
    this.hasBackButton = false;
  }
  render() {
    return h(Host, { key: "e1289f0a76f8019796f87829f15f61409973bed0" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "primary", icon: iconArrowLeft, ghost: true, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "7749798c2f8f8121d334d7ae78ad3530f095ef48", class: "titleGroup" }, h("ix-typography", { key: "0e448a5cd660f088101c406da3af96f12d2e2690", format: this.variant === "secondary" ? "h4" : "h3", class: this.variant === "secondary" ? "secondary" : "" }, this.headerTitle), !!this.headerSubtitle && h("ix-typography", { key: "ffb763836bdde4eba3a4cfc4f981e7a2c7dd46a2", format: "h6", "text-color": "soft", class: this.variant === "secondary" ? "subtitle" : "" }, this.headerSubtitle)), h("div", { key: "aa50a3909afbc6ef73521ac957d79a1ae01f19fd", class: "buttons" }, h("slot", { key: "a72ec6709a889fadfe486a1fb9896ca482242307" })));
  }
};
ContentHeader.style = contentHeaderCss;
export {
  ContentHeader as ix_content_header
};
