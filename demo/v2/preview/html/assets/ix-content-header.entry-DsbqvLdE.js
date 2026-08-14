import { r as registerInstance, c as createEvent, h, H as Host } from "./global-BTgWS9s6.js";
import { z as iconArrowLeft } from "./index-BeX6RWvV-CXzUIwMU.js";
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
    return h(Host, { key: "f61310f6ea0a3469000fee7fb7b7186baa2cf36e" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "e0676de94ec7d4ab15fb9fd482da5667f10cf4e4", class: "titleGroup" }, h("div", { key: "6d0a6a9ff21a04430fa33f8a41c4e333bf3a4249", class: "headerTitleRow" }, h("ix-typography", { key: "b66eb7cd9d491e3182765ad9747ecd626f45b23f", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      titleOverflow: true
    } }, this.headerTitle), h("div", { key: "04c444efdf2cffaeb1ea0120c9e745626aef6f8c", class: "headerSlot" }, h("slot", { key: "775eee1677756fd3a8f77f558b8110c93491bcd1", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "abea3fa4aedd7ba74da32e656f34d472012dca14", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      titleOverflow: true
    }, title: this.headerSubtitle }, this.headerSubtitle)), h("div", { key: "798601c8081c2798088ebaeb3bce279947543e52", class: "buttons" }, h("slot", { key: "330aa42677e2b0991519c0f3c9007c5f7eaa8483" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
