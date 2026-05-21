import { a as registerInstance, c as createEvent, h, H as Host } from "./global-DjWMysHf.js";
import { b as iconArrowLeft } from "./index-Cl7fhG1I-C77BCFLW.js";
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
    return h(Host, { key: "08d49655e0c6990b14505b590d2ba0e94a295db6" }, this.hasBackButton ? h("ix-icon-button", { class: "backButton", variant: "tertiary", icon: iconArrowLeft, onClick: () => this.backButtonClick.emit() }) : null, h("div", { key: "8afb44c00a90916824175200dd536e56eb949624", class: "titleGroup" }, h("div", { key: "2a27fa1f4b31d9114dfebc9a8aff5729f906b1c8", class: "headerTitleRow" }, h("ix-typography", { key: "d901bfeee7f8abc8e5007e53c21105f5c79b0a56", format: this.variant === "secondary" ? "h4" : "h3", class: {
      secondary: this.variant === "secondary",
      titleOverflow: true
    } }, this.headerTitle), h("div", { key: "1a846985aeb4a94d9524d1666a271c9c145095a6", class: "headerSlot" }, h("slot", { key: "25543ed73b45c08a9b50912362376fb9fc1906cd", name: "header" }))), !!this.headerSubtitle && h("ix-typography", { key: "288fe9e598a20b6dac48f0a2024c094b6680dbb3", format: "h6", "text-color": "soft", class: {
      subtitle: this.variant === "secondary",
      titleOverflow: true
    }, title: this.headerSubtitle }, this.headerSubtitle)), h("div", { key: "8e393c872c9332878140746709d4ec57cd3f2a8d", class: "buttons" }, h("slot", { key: "be658a281dd351bb609ef0f347da991288672fb7" })));
  }
};
ContentHeader.style = contentHeaderCss();
export {
  ContentHeader as ix_content_header
};
