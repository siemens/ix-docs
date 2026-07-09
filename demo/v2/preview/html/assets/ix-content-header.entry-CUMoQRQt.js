import { r as registerInstance, c as createEvent, h, H as Host } from "./global-C4tOo1JZ.js";
import { m as iconArrowLeft } from "./index-DgUGsIlh-CLxQRaVd.js";
const contentHeaderCss = () => `:host{display:flex;flex-direction:row;align-items:flex-start;padding:0}:host .titleGroup{display:flex;flex-direction:column;flex:1 1 0;min-width:0;white-space:nowrap;margin-right:0.5rem}:host .titleGroup .titleOverflow{overflow:hidden;text-overflow:ellipsis}:host .titleGroup .headerTitleRow{display:flex}:host .titleGroup .headerTitleRow .headerSlot{display:inline-flex;margin-left:0.5rem}:host .titleGroup .secondary{padding:0.25rem 0}:host .subtitle{margin-top:-0.125rem}:host .backButton{margin-right:0.5rem}:host .buttons{flex:0 0 auto}`;
const ContentHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.backButtonClick = createEvent(this, "backButtonClick", 7);
  }
  /**
   * Variant of content header
   */
  variant = "primary";
  /**
   * Title of Header
   */
  headerTitle;
  /**
   * Subtitle of Header
   */
  headerSubtitle = void 0;
  /**
   * Display a back button
   */
  hasBackButton = false;
  /**
   * Triggered when back button is clicked
   */
  backButtonClick;
  render() {
    return h(Host, { key: "a81bf466bf10e9e7a0794253b246c340a9b92999" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "7b81cb2b7c5d48fdd75b631e9ef2b5da9224f455", class: "titleGroup" }, h("div", { key: "59d28222f4bbfd83a94490f10bb67b944e44c79f", class: "headerTitleRow" }, h("ix-typography", { key: "f6b3985a6b8e2420e4d63a7032b1ff1f12f93679", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      titleOverflow: true
    } }, this.headerTitle), h("div", { key: "9b1a9f865955f4b02a23a528d61e54959a8992d1", class: "headerSlot" }, h("slot", { key: "8d7d21906e9042de89123de9489b2cd8d8db25b5", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "2b29f3ebde503fa328c10bad48ba5b98455d8a31", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      titleOverflow: true
    }, title: this.headerSubtitle }, this.headerSubtitle)), h("div", { key: "0a558d5e3c40ab3e5ebd77c1ff8e0e316e263658", class: "buttons" }, h("slot", { key: "f54687cd38db7f152f3495beec362f0dc82e2bef" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
