import { r as registerInstance, h, H as Host, g as getElement } from "./global-7dbfff85.js";
import { H as HookValidationLifecycle } from "./validation-CS0nhfz1-5108567d.js";
const customFieldCss = ":host{display:block;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}";
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
const CustomField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.required = false;
    this.isInvalid = false;
    this.isValid = false;
    this.isInfo = false;
    this.isWarning = false;
  }
  updateValidationState({ isInvalid, isValid, isInfo, isWarning }) {
    this.isInvalid = isInvalid;
    this.isValid = isValid;
    this.isInfo = isInfo;
    this.isWarning = isWarning;
  }
  render() {
    return h(Host, { key: "169feb69a90e647f7e3d6c989bdf55fbd899e91b" }, h("ix-field-wrapper", { key: "ff3596456a62d3bf0c3a1481d60b3294ca727a7a", label: this.label, helperText: this.helperText, infoText: this.infoText, warningText: this.warningText, invalidText: this.invalidText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, required: this.required }, h("slot", { key: "4c6d8db5227627a16a08342e51ff3670e5e41f4e" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
__decorate([
  HookValidationLifecycle({
    includeChildren: true
  })
], CustomField.prototype, "updateValidationState", null);
CustomField.style = customFieldCss;
export {
  CustomField as ix_custom_field
};
