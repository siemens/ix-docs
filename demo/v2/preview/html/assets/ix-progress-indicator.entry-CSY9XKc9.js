import { r as registerInstance, h, F as Fragment, H as Host, g as getElement } from "./global-DaepF4XF.js";
import { U as iconCirclePause, c as iconSuccess, a as iconWarning, i as iconInfo, b as iconError } from "./index-CB6MK0tq-MglExpDl.js";
function LinearBar({ value }) {
  return h(
    "div",
    { class: "linear-progress-container" },
    h(
      "div",
      { class: "progress", role: "progressbar", "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": 100 },
      h("div", { class: {
        "progress-bar": true
      }, style: { width: `${value}%` }, "data-value": value })
    )
  );
}
function getCircularSize(size) {
  switch (size) {
    case "xs":
      return 16;
    case "sm":
      return 24;
    case "md":
      return 32;
    case "lg":
      return 48;
    case "xl":
      return 64;
    default:
      return 32;
  }
}
const CircularProgress = (props, children) => {
  const { value, size, alignment } = props;
  const sizeInPixel = getCircularSize(size);
  const radius = sizeInPixel / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.round(circumference * ((100 - value) / 100));
  const slotInsideCircular = size === "lg" || size === "xl";
  return h(
    "div",
    { class: {
      "circular-progress-container": true,
      [`align-${alignment}`]: !!alignment
    } },
    h(
      "svg",
      { width: sizeInPixel, height: sizeInPixel, viewBox: `-${sizeInPixel * 0.125} -${sizeInPixel * 0.125} ${sizeInPixel * 1.25} ${sizeInPixel * 1.25}`, version: "1.1", xmlns: "http://www.w3.org/2000/svg", style: { transform: "rotate(-90deg)" } },
      h("circle", { r: radius, cx: radius, cy: radius, fill: "transparent", stroke: "var(--theme-color-component-4)", "stroke-width": `3px` }),
      percentage > 0 && h("circle", { r: radius, cx: radius, cy: radius, stroke: "var(--ix-progress-indicator-color)", "stroke-width": "3px", "stroke-dashoffset": `${percentage}px`, fill: "transparent", "stroke-dasharray": `${circumference}px` }),
      h("foreignObject", { x: `0px`, y: `0px`, width: `${sizeInPixel}px`, height: `${sizeInPixel}px`, style: {
        transform: `rotate(90deg) translate(0px, -${sizeInPixel}px)`
      } }, slotInsideCircular && h("div", { class: "slotted-container slotted-container-inside" }, children))
    ),
    !slotInsideCircular && h("div", { class: "slotted-container" }, children)
  );
};
const progressIndicatorCss = ":host{display:block;position:relative;width:24rem;height:-moz-fit-content;height:fit-content}:host .progress-container{display:flex;width:100%;align-items:center;gap:0.25rem;flex-wrap:nowrap}:host .label{margin:0.5rem 0 0.25rem 0}:host .helper-text{display:flex;align-items:center;margin:0.25rem 0px;gap:0.25rem}:host .helper-text ix-icon{margin:0.125rem}:host .helper-text.default{color:var(--theme-color-soft-text)}:host .helper-text.success ix-icon{color:var(--theme-color-success)}:host .helper-text.error{color:var(--theme-color-alarm-text)}:host .helper-text.error ix-icon{color:var(--theme-color-alarm)}:host .helper-text.info ix-icon{color:var(--theme-color-info)}:host .helper-text.warning ix-icon{color:var(--theme-color-warning)}:host .helper-text.paused ix-icon{color:var(--theme-color-neutral)}:host .helper-text .text.align-left{text-align:start}:host .helper-text .text.align-right{text-align:end}:host .helper-text .text.align-center{text-align:center}:host .progress-indicator{display:flex;flex-direction:column;--ix-progress-indicator-color:var(--theme-color-dynamic);--ix-progress-indicator-margin:0.5rem 0;height:100%}:host .progress-indicator.text-center{align-items:center}:host .progress-indicator.text-left{align-items:flex-start}:host .progress-indicator.text-right{align-items:flex-end}:host .progress-indicator.xs{--ix-progress-indicator-height:0.125rem;--ix-progress-indicator-margin:0.25rem 0}:host .progress-indicator.sm{--ix-progress-indicator-height:0.25rem;--ix-progress-indicator-margin:0.375rem 0}:host .progress-indicator.md{--ix-progress-indicator-height:0.5rem}:host .progress-indicator.lg{--ix-progress-indicator-height:1rem}:host .progress-indicator.xl{--ix-progress-indicator-height:1.5rem}:host .progress-indicator.success{--ix-progress-indicator-color:var(--theme-color-success)}:host .progress-indicator.error{--ix-progress-indicator-color:var(--theme-color-alarm)}:host .progress-indicator.info{--ix-progress-indicator-color:var(--theme-color-info)}:host .progress-indicator.warning{--ix-progress-indicator-color:var(--theme-color-warning)}:host .progress-indicator.paused{--ix-progress-indicator-color:var(--theme-color-neutral)}:host(.linear) .progress-indicator.xs{--ix-progress-indicator-height:0.125rem}:host(.linear) .progress-indicator.sm{--ix-progress-indicator-height:0.25rem}:host(.linear) .progress-indicator.md{--ix-progress-indicator-height:0.5rem}:host(.linear) .progress-indicator.lg{--ix-progress-indicator-height:1rem}:host(.linear) .progress-indicator.xl{--ix-progress-indicator-height:1.5rem}:host(.linear) .linear-progress-container{width:100%;height:var(--ix-progress-indicator-height);background-color:var(--theme-color-component-4);border-radius:2px;overflow:hidden;margin:var(--ix-progress-indicator-margin, 0.5rem 0)}:host(.linear) .progress{width:100%;height:100%;position:relative}:host(.linear) .progress-bar{height:100%;background-color:var(--ix-progress-indicator-color);transition:width 0.3s ease}:host(.linear) .linear-slot{min-width:2.25rem}:host(.circular) .circular-progress-container{display:flex;align-items:center;width:100%;gap:0.25rem;margin:var(--ix-progress-indicator-margin, 0.5rem 0)}:host(.circular) .circular-progress-container.align-left{justify-content:flex-start}:host(.circular) .circular-progress-container.align-center{justify-content:center}:host(.circular) .circular-progress-container.align-right{justify-content:flex-end}:host(.circular) .slotted-container{height:100%}:host(.circular) .slotted-container.slotted-container-inside{display:flex;align-items:center;justify-content:center;width:100%;height:100%}";
const ProgressIndicator = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = "linear";
    this.size = "md";
    this.value = 0;
    this.min = 0;
    this.max = 100;
    this.status = "default";
    this.textAlignment = "left";
    this.showTextAsTooltip = false;
  }
  getHelperText() {
    let icon = null;
    switch (this.status) {
      case "error":
        icon = iconError;
        break;
      case "info":
        icon = iconInfo;
        break;
      case "warning":
        icon = iconWarning;
        break;
      case "success":
        icon = iconSuccess;
        break;
      case "paused":
        icon = iconCirclePause;
        break;
      default:
        icon = null;
    }
    if (!this.helperText) {
      return h("slot", { name: "helper-text" });
    }
    return h("div", { class: {
      "helper-text": true,
      [this.status]: true
    } }, icon && h("ix-icon", { name: icon, size: "16" }), h("div", { class: {
      text: true,
      "align-left": this.textAlignment === "left",
      "align-center": this.textAlignment === "center",
      "align-right": this.textAlignment === "right"
    } }, this.helperText), h("slot", { name: "helper-text" }));
  }
  render() {
    const normalizedValue = (this.value - this.min) / (this.max - this.min) * 100;
    const clampedValue = Math.max(0, Math.min(normalizedValue, 100));
    return h(Host, { key: "631e87bd03afc9f408d0784fc9c00d0cc26a13b0", class: {
      linear: this.type === "linear",
      circular: this.type === "circular"
    }, tabIndex: -1 }, h("div", { key: "d21e6a6c03bf6c7fb228fe8f3bc81c555ee1f401", class: {
      "progress-indicator": true,
      [this.size]: true,
      [this.status]: true,
      ["text-center"]: this.textAlignment === "center",
      ["text-left"]: this.textAlignment === "left",
      ["text-right"]: this.textAlignment === "right"
    } }, this.label && h("ix-typography", { key: "8b1a531de706ce65e978bf2f72d39f8c7e674a46", format: "label", textColor: this.status === "error" ? "alarm" : "soft", class: "label" }, this.label), h("div", { key: "678750aea2a5cbe004985ffff9b4034ed3aedb12", class: "progress-container" }, this.type === "linear" ? h(Fragment, null, h(LinearBar, { value: clampedValue }), h("div", { class: "linear-slot" }, h("slot", null))) : h(CircularProgress, { alignment: this.textAlignment, value: clampedValue, size: this.size }, h("slot", null))), this.showTextAsTooltip === true && this.helperText ? h("ix-tooltip", { for: this.hostElement, showDelay: 500, placement: "bottom" }, this.getHelperText()) : this.getHelperText()));
  }
  get hostElement() {
    return getElement(this);
  }
};
ProgressIndicator.style = progressIndicatorCss;
export {
  ProgressIndicator as ix_progress_indicator
};
