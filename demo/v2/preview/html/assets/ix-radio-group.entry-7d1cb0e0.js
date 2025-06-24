import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-7dbfff85.js";
import { H as HookValidationLifecycle } from "./validation-CS0nhfz1-5108567d.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-1c3883ca.js";
const radioGroupCss = ":host{display:inline-block;position:relative}:host .checkbox-container{display:flex;flex-direction:column;gap:1rem;margin:0.375rem 0;flex-wrap:wrap}:host .checkbox-container.row-layout{flex-direction:row}";
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const RadiobuttonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.direction = "column";
    this.required = false;
    this.isInvalid = false;
    this.isValid = false;
    this.isInfo = false;
    this.isWarning = false;
    this.touched = false;
    this.groupRef = makeRef();
    this.observer = new MutationObserver(() => {
      this.ensureOnlyLastRadioChecked();
      this.hasNestedRequiredRadio();
    });
  }
  get radiobuttonElements() {
    return Array.from(this.hostElement.querySelectorAll("ix-radio"));
  }
  connectedCallback() {
    this.observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["checked", "required"]
    });
  }
  componentWillLoad() {
    this.selectInitialValue();
    this.ensureOnlyLastRadioChecked();
    this.hasNestedRequiredRadio();
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  selectInitialValue() {
    if (!this.value) {
      return;
    }
    this.radiobuttonElements.forEach((radiobutton) => {
      radiobutton.checked = radiobutton.value === this.value;
    });
  }
  ensureOnlyLastRadioChecked() {
    const checkedRadios = this.radiobuttonElements.filter((radio) => radio.checked);
    checkedRadios.forEach((radio, index) => {
      if (index === checkedRadios.length - 1) {
        return;
      }
      radio.checked = false;
    });
  }
  hasNestedRequiredRadio() {
    this.required = this.radiobuttonElements.some((radiobutton) => radiobutton.required);
  }
  onValueChangeHandler(newValue) {
    this.touched = true;
    this.radiobuttonElements.forEach((radiobutton) => {
      radiobutton.checked = radiobutton.value === newValue;
    });
  }
  onCheckedChangeHandler(event) {
    this.radiobuttonElements.forEach((radiobutton) => {
      if (radiobutton !== event.target) {
        radiobutton.checked = false;
        return;
      }
      radiobutton.checked = true;
      this.valueChange.emit(radiobutton.value);
    });
  }
  onClassField({ isInvalid, isInfo, isValid, isWarning, isInvalidByRequired }) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }
  /** @internal */
  hasValidValue() {
    return Promise.resolve(!!Array.from(this.hostElement.querySelectorAll("ix-radio")).find((radio) => radio.checked));
  }
  /** @internal */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  render() {
    return h(Host, { key: "df02d0574b1201f9dc2e4ffc0cca3b796ab38a26", onIxBlur: () => this.touched = true, ref: this.groupRef }, h("ix-field-wrapper", { key: "69166196117663244ea5dd946238b9429a71e467", label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, isInvalid: this.isInvalid, controlRef: this.groupRef }, h("div", { key: "dcea2d79018de3bb2b6d74e650964b37eb33f67a", class: {
      "checkbox-container": true,
      "row-layout": this.direction === "row"
    } }, h("slot", { key: "4a2a181e1fd167681e7d43d70072a6bd8d5761d2" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["onValueChangeHandler"]
    };
  }
};
__decorate([
  HookValidationLifecycle({
    includeChildren: true
  })
], RadiobuttonGroup.prototype, "onClassField", null);
RadiobuttonGroup.style = radioGroupCss;
export {
  RadiobuttonGroup as ix_radio_group
};
