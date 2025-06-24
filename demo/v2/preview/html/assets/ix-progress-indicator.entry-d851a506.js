import { r as registerInstance, h, F as Fragment, H as Host, g as getElement } from "./global-bbf431ac.js";
import { U as iconCirclePause, c as iconSuccess, a as iconWarning, i as iconInfo, b as iconError } from "./index-C0zeM1D4-b0cf2da8.js";
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
  const { value, size } = props;
  const sizeInPixel = getCircularSize(size);
  const radius = sizeInPixel / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.round(circumference * ((100 - value) / 100));
  const slotInsideCircular = size === "lg" || size === "xl";
  return h(
    "div",
    { class: "circular-progress-container" },
    h(
      "svg",
      { width: sizeInPixel, height: sizeInPixel, viewBox: `-${sizeInPixel * 0.125} -${sizeInPixel * 0.125} ${sizeInPixel * 1.25} ${sizeInPixel * 1.25}`, version: "1.1", xmlns: "http://www.w3.org/2000/svg", style: { transform: "rotate(-90deg)" } },
      h("circle", { r: radius, cx: radius, cy: radius, fill: "transparent", stroke: "var(--theme-color-component-4)", "stroke-width": `3px` }),
      percentage > 0 && h("circle", { r: radius, cx: radius, cy: radius, stroke: "var(--ix-progress-indicator-color)", "stroke-width": "3px", "stroke-linecap": "round", "stroke-dashoffset": `${percentage}px`, fill: "transparent", "stroke-dasharray": `${circumference}px` }),
      h("foreignObject", { x: `0px`, y: `0px`, width: `${sizeInPixel}px`, height: `${sizeInPixel}px`, style: {
        transform: `rotate(90deg) translate(0px, -${sizeInPixel}px)`
      } }, slotInsideCircular && h("div", { class: "slotted-container slotted-container-inside" }, children))
    ),
    !slotInsideCircular && h("div", { class: "slotted-container" }, children)
  );
};
const progressIndicatorCss = ":host{display:block;position:relative;width:24rem;height:-moz-fit-content;height:fit-content}:host .progress-container{display:flex;align-items:center;gap:0.5rem;flex-wrap:nowrap}:host .label{margin:0.25rem 0px}:host .helper-text{display:flex;align-items:flex-start;margin:0.25rem 0px;gap:0.25rem}:host .helper-text ix-icon{margin:0.125rem}:host .helper-text.success ix-icon{color:var(--theme-color-success)}:host .helper-text.error{color:var(--theme-color-alarm-text)}:host .helper-text.error ix-icon{color:var(--theme-color-alarm)}:host .helper-text.info ix-icon{color:var(--theme-color-info)}:host .helper-text.warning ix-icon{color:var(--theme-color-warning)}:host .helper-text.paused ix-icon{color:var(--theme-color-neutral)}:host .helper-text.text-left{justify-content:flex-start}:host .helper-text.text-right{justify-content:flex-end}:host .helper-text.text-center{justify-content:center}:host .progress-indicator{--ix-progress-indicator-color:var(--theme-color-success);height:100%}:host .progress-indicator.xs{--ix-progress-indicator-height:0.125rem}:host .progress-indicator.sm{--ix-progress-indicator-height:0.25rem}:host .progress-indicator.md{--ix-progress-indicator-height:0.5rem}:host .progress-indicator.lg{--ix-progress-indicator-height:1rem}:host .progress-indicator.xl{--ix-progress-indicator-height:1.5rem}:host .progress-indicator.success{--ix-progress-indicator-color:var(--theme-color-success)}:host .progress-indicator.error{--ix-progress-indicator-color:var(--theme-color-alarm)}:host .progress-indicator.info{--ix-progress-indicator-color:var(--theme-color-info)}:host .progress-indicator.warning{--ix-progress-indicator-color:var(--theme-color-warning)}:host .progress-indicator.paused{--ix-progress-indicator-color:var(--theme-color-neutral)}:host(.linear) .progress-indicator.xs{--ix-progress-indicator-height:0.125rem}:host(.linear) .progress-indicator.sm{--ix-progress-indicator-height:0.25rem}:host(.linear) .progress-indicator.md{--ix-progress-indicator-height:0.5rem}:host(.linear) .progress-indicator.lg{--ix-progress-indicator-height:1rem}:host(.linear) .progress-indicator.xl{--ix-progress-indicator-height:1.5rem}:host(.linear) .linear-progress-container{width:100%;height:var(--ix-progress-indicator-height);background-color:var(--theme-color-component-4);border-radius:2px;overflow:hidden}:host(.linear) .progress{width:100%;height:100%;position:relative}:host(.linear) .progress-bar{height:100%;background-color:var(--ix-progress-indicator-color);transition:width 0.3s ease}:host(.linear) .linear-slot{min-width:2.25rem}:host(.circular) .circular-progress-container{display:flex;align-items:center;width:100%;gap:0.25rem}:host(.circular) .slotted-container{width:100%;height:100%}:host(.circular) .slotted-container.slotted-container-inside{display:flex;align-items:center;justify-content:center;width:100%;height:100%}";
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
      [this.status]: true,
      "text-left": this.textAlignment === "left",
      "text-center": this.textAlignment === "center",
      "text-right": this.textAlignment === "right"
    } }, icon && h("ix-icon", { name: icon, size: "16" }), h("div", { class: "text" }, this.helperText), h("slot", { name: "helper-text" }));
  }
  render() {
    const normalizedValue = (this.value - this.min) / (this.max - this.min) * 100;
    const clampedValue = Math.max(0, Math.min(normalizedValue, 100));
    return h(Host, { key: "32bf507b1309388dd154d0b91ebbe405a60f86b6", class: {
      linear: this.type === "linear",
      circular: this.type === "circular"
    }, tabIndex: -1 }, h("div", { key: "79aefd04beb1f50395809b3a3ee7f66e8c13e3a8", class: {
      "progress-indicator": true,
      [this.size]: true,
      [this.status]: true
    } }, this.label && h("ix-typography", { key: "0a8715af41f0684d2ec9886be1bf711d8fcbfea0", format: "label", textColor: this.status === "error" ? "alarm" : "soft", class: "label" }, this.label), h("div", { key: "176766a1cb87119e94f913b887b1f460330638b4", class: "progress-container" }, this.type === "linear" ? h(Fragment, null, h(LinearBar, { value: clampedValue }), h("div", { class: "linear-slot" }, h("slot", null))) : h(CircularProgress, { value: clampedValue, size: this.size }, h("slot", null))), this.showTextAsTooltip === true && this.helperText ? h("ix-tooltip", { for: this.hostElement, showDelay: 500, placement: "bottom" }, this.getHelperText()) : this.getHelperText()));
  }
  get hostElement() {
    return getElement(this);
  }
};
ProgressIndicator.style = progressIndicatorCss;
export {
  ProgressIndicator as ix_progress_indicator
};
