import { h } from "./global-CTsFSACc.js";
import { b as iconError, a as iconWarning, i as iconInfo, c as iconSuccess } from "./index-8HpPmDK_-DinFJk0z.js";
function hasAnyText({ invalidText, warningText, infoText, validText, helperText }) {
  return [invalidText, warningText, infoText, validText, helperText].some((text) => text === null || text === void 0 ? void 0 : text.trim());
}
function HelperText$1(props) {
  if (!hasAnyText(props))
    return null;
  if (props.isInvalid && props.invalidText && props.invalidText.trim() !== "") {
    return h("ix-typography", { textColor: "alarm", class: "bottom-text" }, h("ix-icon", { class: "text-icon invalid", name: iconError, size: "16" }), props.invalidText);
  }
  if (props.isWarning && props.warningText && props.warningText.trim() !== "") {
    return h("ix-typography", { textColor: "std", class: "bottom-text" }, h("ix-icon", { class: "text-icon warning", name: iconWarning, size: "16" }), props.warningText);
  }
  if (props.isInfo && props.infoText && props.infoText.trim() !== "") {
    return h("ix-typography", { textColor: "std", class: "bottom-text" }, h("ix-icon", { class: "text-icon info", name: iconInfo, size: "16" }), props.infoText);
  }
  if (props.isValid && props.validText && props.validText.trim() !== "") {
    return h("ix-typography", { textColor: "std", class: "bottom-text" }, h("ix-icon", { class: "text-icon valid", name: iconSuccess, size: "16" }), props.validText);
  }
  return props.helperText && props.helperText.trim() !== "" && h("ix-typography", { class: "bottom-text", textColor: "soft" }, props.helperText);
}
export {
  HelperText$1 as H,
  hasAnyText as h
};
