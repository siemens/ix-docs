import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-CTsFSACc.js";
import { I as iconContextMenu } from "./index-8HpPmDK_-DinFJk0z.js";
const splitButtonCss = ".btn-group ix-button:first-child .btn{border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:0px}.btn-group ix-button:last-child .btn{border-top-left-radius:0px;border-bottom-left-radius:0px}.btn-group ix-button:not(:first-child):not(:last-child) .btn{border-radius:0px;border-right:0px}:host{display:inline-block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .btn-group{position:relative;display:inline-flex;vertical-align:middle;width:100%}:host .btn-group>ix-button:nth-child(1),:host .btn-group>ix-icon-button:nth-child(1){width:calc(100% - 2rem);--ix-button-border-radius-right:0}:host .btn-group>ix-icon-button:nth-child(2){width:2rem;--ix-button-border-radius-left:0}:host .middle-gap{gap:0.125rem}:host .left-button-border{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem}";
const SplitButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonClick = createEvent(this, "buttonClick", 7);
    this.variant = "primary";
    this.closeBehavior = "both";
    this.disabled = false;
    this.placement = "bottom-start";
    this.toggle = false;
  }
  linkTriggerRef() {
    if (this.triggerElement && this.dropdownElement) {
      this.dropdownElement.trigger = this.triggerElement;
    }
  }
  componentDidLoad() {
    this.linkTriggerRef();
  }
  render() {
    var _a;
    const hasOutline = this.variant.toLocaleLowerCase().includes("secondary");
    const buttonAttributes = {
      variant: this.variant,
      disabled: this.disabled,
      class: {
        "left-button-border": !hasOutline
      }
    };
    return h(Host, { key: "ca206f224a2569e07e777216171fc335d7bc6d6e" }, h("div", { key: "20d5564fc3a571fde50e35e53bae018e80a70a7e", class: { "btn-group": true, "middle-gap": !hasOutline } }, this.label ? h("ix-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e) }), this.label) : h("ix-icon-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e), "aria-label": this.ariaLabelButton })), h("ix-icon-button", Object.assign({ key: "13c89b4dc80509ba09d2d4a59893961d79bc06ce" }, buttonAttributes, { ref: (r) => this.triggerElement = r, class: "anchor", icon: (_a = this.splitIcon) !== null && _a !== void 0 ? _a : iconContextMenu, "aria-label": this.ariaLabelSplitIconButton }))), h("ix-dropdown", { key: "fd240af714c333bacf83077c638ff2542e516cbb", ref: (r) => this.dropdownElement = r, closeBehavior: this.closeBehavior }, h("slot", { key: "c5969f3b33deaac3687e09cc7ae0c24e50575c13" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
SplitButton.style = splitButtonCss;
export {
  SplitButton as ix_split_button
};
