import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-7ZbTfMw3.js";
import { I as iconContextMenu } from "./index-BBzEV-f4-ChQfUIyc.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
const splitButtonCss = () => `.btn-group ix-button:first-child .btn{border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:0px}.btn-group ix-button:last-child .btn{border-top-left-radius:0px;border-bottom-left-radius:0px}.btn-group ix-button:not(:first-child):not(:last-child) .btn{border-radius:0px;border-right:0px}:host{display:inline-block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .btn-group{position:relative;display:inline-flex;vertical-align:middle;width:100%}:host .btn-group>ix-button:nth-child(1),:host .btn-group>ix-icon-button:nth-child(1){width:calc(100% - 2rem);--ix-button-border-radius-right:0}:host .btn-group>ix-icon-button:nth-child(2){width:2rem;--ix-button-border-radius-left:0}:host .middle-gap{gap:0.125rem}:host .left-button-border{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem}`;
const SplitButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonClick = createEvent(this, "buttonClick", 7);
    this.variant = "primary";
    this.closeBehavior = "both";
    this.disabled = false;
    this.disableButton = false;
    this.disableDropdownButton = false;
    this.placement = "bottom-start";
    this.enableTopLayer = false;
    this.toggle = false;
    this.triggerElementRef = makeRef();
  }
  get isDisabledButton() {
    return this.disabled || this.disableButton;
  }
  get isDisabledIcon() {
    return this.disabled || this.disableDropdownButton;
  }
  render() {
    var _a;
    const hasOutline = this.variant.toLocaleLowerCase().includes("secondary");
    const baseAttributes = {
      variant: this.variant
    };
    const buttonAttributes = Object.assign(Object.assign({}, baseAttributes), { disabled: this.isDisabledButton, class: {
      "left-button-border": !hasOutline
    } });
    const dropdownButtonAttributes = Object.assign(Object.assign({}, baseAttributes), { disabled: this.isDisabledIcon });
    return h(Host, { key: "3c3430ad17d7f4bb877b57b21bfa8e7ec15196dc" }, h("div", { key: "cd36cc825c64a11619a0df7d1ead9eae0374bae8", class: { "btn-group": true, "middle-gap": !hasOutline } }, this.label ? h("ix-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e), "aria-label": this.ariaLabelButton }), this.label) : h("ix-icon-button", Object.assign({}, buttonAttributes, { icon: this.icon, onClick: (e) => this.buttonClick.emit(e), "aria-label": this.ariaLabelButton })), h("ix-icon-button", Object.assign({ key: "1846ce902e479fc9b41e5d840f3f2e8d79d99f32" }, dropdownButtonAttributes, { ref: this.triggerElementRef, class: "anchor", icon: (_a = this.splitIcon) !== null && _a !== void 0 ? _a : iconContextMenu, "aria-label": this.ariaLabelSplitIconButton }))), h("ix-dropdown", { key: "f9a05a2ae981731cd71bf4735bf956d5e5092037", closeBehavior: this.closeBehavior, trigger: this.triggerElementRef.waitForCurrent(), enableTopLayer: this.enableTopLayer }, h("slot", { key: "fda03d1edd3588a156186a52be1a6ee911bb2c49" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
SplitButton.style = splitButtonCss();
export {
  SplitButton as ix_split_button
};
