import { r as registerInstance, g as getElement, h, H as Host, M as Mixin } from "./global-C4tOo1JZ.js";
import { b as a11yHostAttributes } from "./a11y-C21npbUc-CU_Bg8RX.js";
import { i as isIxInputFieldComponent } from "./index-XBTykBKS-D8xrYMLu.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { c as closestPassShadow } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import { c as createClassMutationObserver } from "./validation-VVt5EFy0-CDNoT5VG.js";
import { r as resolveTextFromValidationState, h as hasAnyText, H as HelperText$1 } from "./helper-text-util-D0LEFZuB-BiHj4otU.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import "./index-DgUGsIlh-CLxQRaVd.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const fieldLabelCss = () => `:host{display:inline-block;position:relative;margin-top:0.5rem;margin-bottom:0.25rem}:host(.text-overflow-no-wrap){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(.text-overflow-no-wrap) ix-typography{text-overflow:ellipsis;overflow:hidden}`;
const FormFieldLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * A value is required or must be checked for the form to be submittable
   */
  required;
  /**
   * The id of the form element that the label is associated with
   */
  htmlFor;
  /** @internal */
  controlRef;
  /** @internal */
  isInvalid = false;
  textOverflow = "wrap";
  explicitIsInvalid = void 0;
  isInvalidChanged(newValue) {
    this.explicitIsInvalid = newValue;
  }
  htmlForObserver = new MutationObserver(() => this.checkForInternalState());
  htmlForClassObserver;
  controlRefClassObserver;
  a11yAttributes = {};
  labelRef = makeRef();
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
    if (closestPassShadow(this.hostElement, "ix-range-field")) {
      this.textOverflow = "no-wrap";
    }
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
    if (this.controlRef && !this.htmlFor) {
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
    const hasInvalidClass = elementToCheck.classList.contains("is-invalid") || elementToCheck.classList.contains("ix-invalid");
    this.isInvalid = this.explicitIsInvalid ?? hasInvalidClass;
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
        return;
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
    return h(Host, { key: "ae3bda5074f387a20d9d464a7237584bf9cd185f", onClick: () => this.focusOnClick(), class: {
      "text-overflow-wrap": this.textOverflow === "wrap",
      "text-overflow-no-wrap": this.textOverflow === "no-wrap"
    } }, h("label", { key: "1813ab2ed336d585667522a9e01f30891da1c794", htmlFor: this.htmlFor, ...this.a11yAttributes, ref: this.labelRef }, h("ix-typography", { key: "0af94d2c01fbaf5450af1d7a5beeb591401dd4f3", textColor: this.isInvalid ? "alarm" : "soft", format: "label" }, h("slot", { key: "4eff5cfac2491d6a716b8def24671422c5796a15" }), this.required && h("span", { key: "d466918f68a18d7474b607827649baf67caf0a01" }, "*"))));
  }
  static get watchers() {
    return {
      "isInvalid": [{
        "isInvalidChanged": 0
      }],
      "htmlFor": [{
        "registerHtmlForObserver": 0
      }],
      "controlRef": [{
        "registerControlRefObserver": 0
      }]
    };
  }
};
FormFieldLabel.style = fieldLabelCss();
const fieldWrapperCss = () => `:host{display:flex;position:relative;flex-direction:column}:host .slot-wrapper{display:flex;position:relative;align-items:center;justify-content:flex-start;gap:0.25rem}:host .field-bottom,:host .field-top{display:flex;flex-direction:row;position:relative;justify-content:space-between;gap:1rem;width:100%;min-width:100%}:host .field-bottom .bottom-right{margin-left:auto;margin-right:0px}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--theme-helper-icon--color--invalid)}:host .text-icon.info{color:var(--theme-helper-icon--color--info)}:host .text-icon.warning{color:var(--theme-helper-icon--color--warning)}:host .text-icon.valid{color:var(--theme-helper-icon--color--valid)}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}`;
const FieldWrapper = class extends Mixin(...DefaultMixins, ComponentIdMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Show text below the field component
   */
  helperText;
  /**
   * Label for the field component
   */
  label;
  /**
   * Error text for the field component
   */
  invalidText;
  /**
   * Valid text for the field component
   */
  validText;
  /**
   * Info text for the field component
   */
  infoText;
  /**
   * Warning text for the field component
   */
  warningText;
  /**
   * Is the field component invalid
   */
  isInvalid = false;
  /**
   * Is the field component valid
   */
  isValid = false;
  /**
   * Is the field component info
   */
  isInfo = false;
  /**
   * Is the field component warning
   */
  isWarning = false;
  /**
   * Show helper, error, info, warning text as tooltip
   */
  showTextAsTooltip = false;
  /**
   * Show label as required
   */
  required = false;
  /**
   * The control element that the label is associated with
   */
  controlRef;
  slotRef = makeRef();
  hasExplicitAriaLabel = false;
  componentDidLoad() {
    this.syncAriaLabel(true);
  }
  syncAriaLabel(initialSync = false) {
    if (!this.controlRef || this.hasExplicitAriaLabel) {
      return;
    }
    this.controlRef.waitForCurrent().then((el) => {
      if (initialSync && (el.hasAttribute("aria-label") || el.hasAttribute("aria-labelledby"))) {
        this.hasExplicitAriaLabel = true;
        return;
      }
      if (this.label) {
        el.setAttribute("aria-label", this.label);
      } else {
        el.removeAttribute("aria-label");
      }
    });
  }
  componentWillLoad() {
    if (!this.hostElement.querySelector(".error-message-container")) {
      const errorMessageContainer = document.createElement("span");
      errorMessageContainer.classList.add("error-message-container");
      errorMessageContainer.id = `${this.getHostElementId()}-errormessage`;
      errorMessageContainer.hidden = true;
      this.hostElement.appendChild(errorMessageContainer);
    }
    if (!this.hostElement.querySelector(".helper-message-container")) {
      const helperMessageContainer = document.createElement("span");
      helperMessageContainer.classList.add("helper-message-container");
      helperMessageContainer.id = `${this.getHostElementId()}-helpermessage`;
      helperMessageContainer.hidden = true;
      this.hostElement.appendChild(helperMessageContainer);
    }
  }
  componentWillRender() {
    const errorMessageElement = this.hostElement.querySelector(`#${this.getHostElementId()}-errormessage`);
    const helperMessageElement = this.hostElement.querySelector(`#${this.getHostElementId()}-helpermessage`);
    if (this.isInvalid && this.invalidText && errorMessageElement) {
      errorMessageElement.textContent = this.invalidText;
    }
    if (helperMessageElement) {
      helperMessageElement.textContent = resolveTextFromValidationState({
        isInvalid: this.isInvalid,
        invalidText: this.invalidText,
        isWarning: this.isWarning,
        warningText: this.warningText,
        isInfo: this.isInfo,
        infoText: this.infoText,
        isValid: this.isValid,
        validText: this.validText,
        helperText: this.helperText
      });
    }
  }
  /** @internal */
  getAriaErrorMessageElement() {
    return Promise.resolve(this.hostElement.querySelector(`#${this.getHostElementId()}-errormessage`));
  }
  /** @internal */
  getAriaHelperMessageElement() {
    return Promise.resolve(this.hostElement.querySelector(`#${this.getHostElementId()}-helpermessage`));
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
    let additionalAriaAttributes = {};
    if (this.isInvalid && this.invalidText) {
      additionalAriaAttributes = {
        role: "alert",
        "aria-live": "polite"
      };
    }
    return h(Host, { key: "25255aed5f9b7fb77fdeb61473bf2b75a262ffba", ...additionalAriaAttributes }, this.label && h("div", { key: "bb885771ecfcf509a62bbe6f7ba1a7d518f17c78", class: "field-top" }, h("ix-field-label", { key: "916a96ca521dd4e9dd7f55e9f3bd19cc947ba123", required: this.required, controlRef: this.controlRef, isInvalid: this.isInvalid, ariaHidden: true }, this.label)), h("div", { key: "ce2d746aea87f49611ef413f49fbb52c59ab468a", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "2bb54f35cc1ff930918dc211e2018875ce105d7b" })), h("div", { key: "c427f40269dd19c40c413d0794cbf0096a7f8cd1", class: "field-bottom" }, !this.showTextAsTooltip && h(HelperText$1, { key: "76100d6cd0e6c22eeca8de06b7aa7ae59ab9ea33", ...textOptions }), h("div", { key: "b9d5688b85687792c491d8cecd9411dbb5bddb0e", class: "bottom-right" }, h("slot", { key: "95102f11d6b5c82d67be1c7c104eadf56bcb8112", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "c484b0edcd735b2d9155819ad9eb8d98c45e2633", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, h(HelperText$1, { key: "7d0ea7c1cd80af012492984d7ad2b5399ee50c4d", ...textOptions })));
  }
  static get watchers() {
    return {
      "label": [{
        "syncAriaLabel": 0
      }]
    };
  }
};
FieldWrapper.style = fieldWrapperCss();
export {
  FormFieldLabel as ix_field_label,
  FieldWrapper as ix_field_wrapper
};
