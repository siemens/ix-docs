import { r as registerInstance, h, H as Host, g as getElement } from "./global-DaepF4XF.js";
import { b as a11yHostAttributes } from "./a11y-Bb7pDeaQ-DNI84lDX.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
import { c as createClassMutationObserver } from "./validation-C17ol6-l-BcEywiHU.js";
import { h as hasAnyText, H as HelperText$1 } from "./helper-text-util-NeawqsVC-DFFGxzZq.js";
import "./index-CB6MK0tq-MglExpDl.js";
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
    return h(Host, { key: "1523186f6399825257dbffcd1aed2522997044bc", onClick: () => this.focusOnClick() }, h("label", Object.assign({ key: "1e956399435c73d1a8d15129e86fed12b38b36b0", htmlFor: this.htmlFor }, this.a11yAttributes, { ref: this.labelRef }), h("ix-typography", { key: "a690608275495d048a0503b68d07a8d8e2b75a3c", textColor: this.isInvalid ? "alarm" : "soft", format: "label" }, h("slot", { key: "a54690a36d07d2bb28ed787cb557aa0fa51292b8" }), this.required && h("span", { key: "1f09d454bb53346f909e90eb2d6170340bd7e598" }, "*"))));
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
    return h(Host, { key: "cbe79e9b73dd83e1ba5f608f603adfea7aff881b" }, this.label && h("div", { key: "680ac23aa7d5e2bc7694d6b737754b9795bf23d4", class: "field-top" }, h("ix-field-label", { key: "6cc8df941e93c99f4b8f5494f13274cad4b9a9e1", required: this.required, htmlFor: this.htmlForLabel, controlRef: this.controlRef, isInvalid: this.isInvalid }, this.label)), h("div", { key: "7890365fe31ef8f141cf6f5f0027fdc4c5aaf043", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "79216d5a495b84f75521d6226831078e83c54ece" })), h("div", { key: "26ac12f688455b4fc261e3a23e38b3acc2a13444", class: "field-bottom" }, !this.showTextAsTooltip && h(HelperText$1, Object.assign({ key: "4411ef2c68d89c5651d609d848e154d4d92577f7" }, textOptions)), h("div", { key: "a6a4d29b3b7f01c76c3abb38f77a2f437b38fa85", class: "bottom-right" }, h("slot", { key: "a6f7949b0f7d371508759ebddc5a0c75ae8e7d6e", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "1df8e451198beb33bce572b213886b0584f9d6d6", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, h(HelperText$1, Object.assign({ key: "836951150dc94c6ffc82639bf2219c07e2a994bd" }, textOptions))));
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
