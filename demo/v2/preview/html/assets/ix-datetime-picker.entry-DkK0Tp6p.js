import { r as registerInstance, c as createEvent, h, H as Host } from "./global-7ZbTfMw3.js";
const datetimePickerCss = () => `:host{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-layout-grid{border-radius:0.25rem;box-shadow:var(--theme-shadow-4)}:host ix-time-picker{width:100%}:host .no-padding{padding:0}:host ix-col{display:flex;flex-direction:column;padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}:host .row-separator,:host .col-separator{border-bottom:0.0625rem solid var(--theme-datepicker-separator--background)}:host .col-separator{border-right:none}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date-container{display:inline-flex;flex-grow:1}:host .btn-select-date-container ix-button{margin-left:auto;margin-top:auto}:host .min-width{width:-moz-min-content;width:min-content}:host ix-time-picker{width:initial}:host .col-separator{border-right:0.0625rem solid var(--theme-datepicker-separator--background);border-bottom:none}}:host .individual{box-shadow:none;border:none}:host .btn-select-date-container{padding:1rem}@media (max-width: 576px){:host .btn-select-date-container .btn-select-date{width:100%}}`;
const DatetimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
    this.singleSelection = false;
    this.dateFormat = "yyyy/LL/dd";
    this.timeFormat = "HH:mm:ss";
    this.showTimeReference = false;
    this.i18nDone = "Done";
    this.i18nTime = "Time";
    this.ariaLabelPreviousMonthButton = "Previous month";
    this.ariaLabelNextMonthButton = "Next month";
    this.weekStartIndex = 0;
    this.showWeekNumbers = false;
  }
  async onDone() {
    var _a, _b, _c, _d;
    const date = await ((_a = this.datePickerElement) === null || _a === void 0 ? void 0 : _a.getCurrentDate());
    const time = await ((_b = this.timePickerElement) === null || _b === void 0 ? void 0 : _b.getCurrentTime());
    this.dateSelect.emit({
      from: (_c = date === null || date === void 0 ? void 0 : date.from) !== null && _c !== void 0 ? _c : "",
      to: (_d = date === null || date === void 0 ? void 0 : date.to) !== null && _d !== void 0 ? _d : "",
      time: time !== null && time !== void 0 ? time : ""
    });
  }
  async onDateChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: date } = event;
    this.dateChange.emit(date);
  }
  async onTimeChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: time } = event;
    this.timeChange.emit(time);
  }
  render() {
    return h(Host, { key: "b9d86c0b546ff3dd211233be90f45cf340904392" }, h("ix-layout-grid", { key: "70904c2a642e1365186ce7e7d4b9bf5adb79eefb", class: "no-padding" }, h("ix-row", { key: "434f29448c882e9699b36f5f6556a685d9c62b94", class: "row-separator" }, h("ix-col", { key: "869ff4df2ee82fd9d5e852b466b7a82f56dd5cf4", class: "col-separator" }, h("ix-date-picker", { key: "2f5de1e8d151e03d09c57c365a7cfa25e3c8beb1", ref: (ref) => this.datePickerElement = ref, corners: "left", singleSelection: this.singleSelection, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, embedded: true, locale: this.locale, showWeekNumbers: this.showWeekNumbers, ariaLabelPreviousMonthButton: this.ariaLabelPreviousMonthButton, ariaLabelNextMonthButton: this.ariaLabelNextMonthButton })), h("ix-col", { key: "118da04fff83d0c5980dddf257e9065b73d48e6e" }, h("ix-time-picker", { key: "93683737b572f841bc3b5e0158013cff8f0c0015", class: "min-width", ref: (ref) => this.timePickerElement = ref, embedded: true, dateTimePickerAppearance: true, onTimeChange: (event) => this.onTimeChange(event), format: this.timeFormat, time: this.time }))), h("ix-row", { key: "d2b71237c70c8305ba5ccf7026d03e7b32445bae" }, h("ix-col", { key: "5da543ff42da3110b1cdfdd1690c0ccd5612e3de" }, h("div", { key: "1fc6d77082b8dd7469ab417a9837007b46efcdf0", class: "btn-select-date-container" }, h("ix-button", { key: "35678b604a1f84eeeea63d0566c3f51895956a1f", class: "btn-select-date", onClick: () => this.onDone() }, this.i18nDone))))));
  }
};
DatetimePicker.style = datetimePickerCss();
export {
  DatetimePicker as ix_datetime_picker
};
