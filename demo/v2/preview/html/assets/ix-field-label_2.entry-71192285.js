import { r as registerInstance, h, H as Host, g as getElement } from "./global-7dbfff85.js";
import { b as a11yHostAttributes } from "./a11y-Bb7pDeaQ-d6b7242d.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-1c3883ca.js";
import { c as createClassMutationObserver } from "./validation-CS0nhfz1-5108567d.js";
import { h as hasAnyText, H as HelperText$1 } from "./helper-text-util-Bt8Fxxa0-5e18080a.js";
import "./index-DLTnniMb-a143a692.js";
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
    return h(Host, { key: "a06d0f490304f2e773fe3f8eda2ce62d77283741", onClick: () => this.focusOnClick() }, h("label", Object.assign({ key: "0ec7253998eb8b2a6c82a7685138324ba74253ff", htmlFor: this.htmlFor }, this.a11yAttributes, { ref: this.labelRef }), h("ix-typography", { key: "2170913df8a43d78a8c848820dcb0213de3f368d", textColor: this.isInvalid ? "alarm" : "soft", format: "label" }, h("slot", { key: "ea3e34c12dd032371e7b263230d1d6b4edc1ac38" }), this.required && h("span", { key: "863a8b631669759a0b6bc3e75fc3a3fa36d71916" }, "*"))));
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
    return h(Host, { key: "2a116d969844028d59d8840332cf61e5a54bb943" }, this.label && h("div", { key: "a30a6efebad5742041e717ad719536cecd52871a", class: "field-top" }, h("ix-field-label", { key: "65bf89fec9798cf7c484964ca728781261d6a22a", required: this.required, htmlFor: this.htmlForLabel, controlRef: this.controlRef, isInvalid: this.isInvalid }, this.label)), h("div", { key: "2027d884c1ffa7727868a4962d5310adeb25a34d", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "a2001e8b21a9c68524ce9dad3c6d152ee40eabf0" })), h("div", { key: "12da8e068ae3d8bc9a59d3121c5882d3f86d547a", class: "field-bottom" }, !this.showTextAsTooltip && h(HelperText$1, Object.assign({ key: "1aac859e833a368fbbdabbbd45303a938dd716d4" }, textOptions)), h("div", { key: "26c4a8f605d8d290c4dcfa5c5ef0e4ed2ec50519", class: "bottom-right" }, h("slot", { key: "1506bf93df5575e968af91f17d68bbce0ffa11f8", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "73bfd0bdb2a559245e4ccc42733844690b3abb72", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, h(HelperText$1, Object.assign({ key: "f57a170ade2a076ad3a7c6da784728a814b6b39c" }, textOptions))));
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
