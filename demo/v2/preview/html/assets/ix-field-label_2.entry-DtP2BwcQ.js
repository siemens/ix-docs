import { r as registerInstance, h, H as Host, g as getElement } from "./global-CTsFSACc.js";
import { b as a11yHostAttributes } from "./a11y-Bb7pDeaQ-DNI84lDX.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
import { c as createClassMutationObserver } from "./validation-D_dk-JqT-CRNNydA9.js";
import { h as hasAnyText, H as HelperText$1 } from "./helper-text-util-BurV4TiQ-BLIK7tug.js";
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
    return h(Host, { key: "8b95961ee8dde015e7be8c9b5d5b0c742abc66a2", onClick: () => this.focusOnClick() }, h("label", Object.assign({ key: "94e23159d8cfc8366628245ff88c66a75114ddcd", htmlFor: this.htmlFor }, this.a11yAttributes, { ref: this.labelRef }), h("ix-typography", { key: "71d0e1969ab2ffbc95366c256f22412caeca51a4", textColor: this.isInvalid ? "alarm" : "soft", format: "label" }, h("slot", { key: "73d15d7c64df8d301cbe1a0d5158c459273d90ed" }), this.required && h("span", { key: "adfe97c75781edcf3a3d84c463f019afff623765" }, "*"))));
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
    return h(Host, { key: "3e4d4cc4d1825e7c882844497a14c683e6fa4984" }, this.label && h("div", { key: "14c73ca16fca119c7ae3b57406fed9d06c92682b", class: "field-top" }, h("ix-field-label", { key: "528080fc33fbba4af32b995c2a5b812cbe546c3c", required: this.required, htmlFor: this.htmlForLabel, controlRef: this.controlRef, isInvalid: this.isInvalid }, this.label)), h("div", { key: "07dd086cb873468943feddd633ff9487c4ac28ad", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "b7cd2920a4ddfcd8c89c661a516169f965956150" })), h("div", { key: "f2976ba8ed9a373e46ad0b12b7aa4e7eefd15f16", class: "field-bottom" }, !this.showTextAsTooltip && h(HelperText$1, Object.assign({ key: "aec1f83ed3e30742d7e3d50e5287b3585cfff158" }, textOptions)), h("div", { key: "a89b5e7a6485fd220b5b1b0fa68eda56fe77367c", class: "bottom-right" }, h("slot", { key: "079a9c2ad3694da127bc03324764a317d0ad97a3", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "c43740e25841a7e14069b0f666ede1e3d3a38e35", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, h(HelperText$1, Object.assign({ key: "8cffb6fb825da3d30f8b0362359d305c53a99c93" }, textOptions))));
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
