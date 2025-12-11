import { r as registerInstance, h, H as Host, g as getElement } from "./global-CJeEgyUn.js";
import { b as a11yHostAttributes } from "./a11y-Bb7pDeaQ-DNI84lDX.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
import { c as createClassMutationObserver } from "./validation-LJh16vt2-CLjUGJAx.js";
import { h as hasAnyText, H as HelperText$1 } from "./helper-text-util-gKdL-wH2-SRvKA3Kt.js";
import "./index-8HpPmDK_-DinFJk0z.js";
function isIxInputFieldComponent(obj) {
  return obj && "getAssociatedFormElement" in obj && typeof obj.getAssociatedFormElement === "function" && "getNativeInputElement" in obj && typeof obj.getNativeInputElement === "function";
}
const fieldLabelCss = ":host{display:inline-block;position:relative;margin-top:0.5rem;margin-bottom:0.25rem}";
const FormFieldLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isInvalid = false;
    this.htmlForObserver = new MutationObserver(() => this.checkForInternalState());
    this.a11yAttributes = {};
    this.labelRef = makeRef();
  }
  connectedCallback() {
    this.registerHtmlForObserver();
    this.registerControlRefObserver();
  }
  disconnectedCallback() {
    if (this.htmlForObserver) {
      this.htmlForObserver.disconnect();
    }
    if (this.htmlForClassObserver) {
      this.htmlForClassObserver.destroy();
    }
    if (this.controlRefClassObserver) {
      this.controlRefClassObserver.destroy();
    }
  }
  componentWillRender() {
    this.checkForInternalState();
  }
  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement);
  }
  registerHtmlForObserver() {
    if (typeof window === "undefined") {
      return;
    }
    if (this.htmlForObserver) {
      this.htmlForObserver.disconnect();
    }
    if (this.htmlFor) {
      this.htmlForObserver.observe(window.document, {
        childList: true,
        subtree: true
      });
    }
  }
  async registerControlRefObserver() {
    if (typeof window === "undefined") {
      return;
    }
    if (this.controlRefClassObserver) {
      this.controlRefClassObserver.destroy();
    }
    if (this.controlRef) {
      const input = await this.controlRef.waitForCurrent();
      this.controlRefClassObserver = createClassMutationObserver(input, () => this.checkForInvalidState(input));
    }
  }
  registerHtmlForClassObserver(forElement) {
    if (this.htmlForClassObserver) {
      this.htmlForClassObserver.destroy();
    }
    this.htmlForClassObserver = createClassMutationObserver(forElement, () => this.checkForInvalidState(forElement));
  }
  checkForInvalidState(elementToCheck) {
    this.isInvalid = elementToCheck.classList.contains("is-invalid") || elementToCheck.classList.contains("ix-invalid");
  }
  async checkForInternalState() {
    if (this.htmlFor) {
      const forElement = document.getElementById(this.htmlFor);
      if (forElement) {
        if (typeof forElement.required === "boolean") {
          this.required = forElement.required;
        }
        this.registerHtmlForClassObserver(forElement);
        this.checkForInvalidState(forElement);
      }
    }
    if (this.controlRef) {
      const input = await this.controlRef.waitForCurrent();
      this.required = input.required;
    }
  }
  async focusOnClick() {
    if (this.htmlFor) {
      const target = document.getElementById(this.htmlFor);
      if (target) {
        let input = null;
        if (isIxInputFieldComponent(target)) {
          input = await target.getNativeInputElement();
        } else {
          input = target;
        }
        if (typeof input.focus === "function") {
          input.focus();
        }
      }
    }
    if (this.controlRef) {
      (await this.controlRef.waitForCurrent()).focus();
    }
  }
  render() {
    return h(Host, { key: "ca4f1ba84a3a19a4d15aa517272c90bebf782e13", onClick: () => this.focusOnClick() }, h("label", Object.assign({ key: "44e2386d5dd7c51d3b5a9e1530e986b15ba64d23", htmlFor: this.htmlFor }, this.a11yAttributes, { ref: this.labelRef }), h("ix-typography", { key: "ab97048f7a521ad398438795ba7a5ccba2571f4c", textColor: this.isInvalid ? "alarm" : "soft", format: "label" }, h("slot", { key: "faf628440f832acb412c7f5b40dab4620da785d7" }), this.required && h("span", { key: "d15676e3bf2d645ce2e1fc8f3bd91af23b6ec725" }, "*"))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "htmlFor": ["registerHtmlForObserver"],
      "controlRef": ["registerControlRefObserver"]
    };
  }
};
FormFieldLabel.style = fieldLabelCss;
const fieldWrapperCss = ":host{display:flex;position:relative;flex-direction:column}:host .slot-wrapper{display:flex;position:relative;align-items:center;justify-content:flex-start;gap:0.25rem}:host .field-bottom,:host .field-top{display:flex;flex-direction:row;position:relative;justify-content:space-between;gap:1rem;width:-moz-min-content;width:min-content;min-width:100%}:host .field-bottom .bottom-right{margin-left:auto;margin-right:0px}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--theme-helper-icon--color--invalid)}:host .text-icon.info{color:var(--theme-helper-icon--color--info)}:host .text-icon.warning{color:var(--theme-helper-icon--color--warning)}:host .text-icon.valid{color:var(--theme-helper-icon--color--valid)}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}";
const FieldWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isInvalid = false;
    this.isValid = false;
    this.isInfo = false;
    this.isWarning = false;
    this.showTextAsTooltip = false;
    this.required = false;
    this.slotRef = makeRef();
  }
  render() {
    const textOptions = {
      invalidText: this.invalidText,
      isInvalid: this.isInvalid,
      isValid: this.isValid,
      validText: this.validText,
      isWarning: this.isWarning,
      warningText: this.warningText,
      isInfo: this.isInfo,
      infoText: this.infoText,
      helperText: this.helperText
    };
    return h(Host, { key: "a27a9cefcce30e8dc30ca6a3fd72164227e86fdf" }, this.label && h("div", { key: "ef4a8585d24c3b0400e85b1a21bd9344e01bcb47", class: "field-top" }, h("ix-field-label", { key: "93c9f7cfbbde681956a7676721f1dd0821907e89", required: this.required, htmlFor: this.htmlForLabel, controlRef: this.controlRef, isInvalid: this.isInvalid }, this.label)), h("div", { key: "3a26cb08a91fc7c0f10de83a5b722b5af66f059f", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "fe73a444a23928cee7f7899cc3bb6aef76eefa68" })), h("div", { key: "bc5fa34c5a05e49427e63a87d70db0735a0a0b80", class: "field-bottom" }, !this.showTextAsTooltip && h(HelperText$1, Object.assign({ key: "67abdfcf2448d8df422cd0ee39c162f423e5c564" }, textOptions)), h("div", { key: "fecb02a2e534980491ea776cdc952b1aeea41286", class: "bottom-right" }, h("slot", { key: "9a958f810edf477be93394d887724c9763c57f17", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "d3d8810548d267811e5f298fbb41f657abbae27d", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, h(HelperText$1, Object.assign({ key: "44c241959d5db7e91c00a08a843a51dfc9307256" }, textOptions))));
  }
  get hostElement() {
    return getElement(this);
  }
};
FieldWrapper.style = fieldWrapperCss;
export {
  FormFieldLabel as ix_field_label,
  FieldWrapper as ix_field_wrapper
};
