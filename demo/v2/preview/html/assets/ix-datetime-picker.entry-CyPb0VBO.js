import { r as registerInstance, c as createEvent, h, H as Host } from "./global-DaepF4XF.js";
const datetimePickerCss = ":host{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-layout-grid{border-radius:0.25rem;box-shadow:var(--theme-shadow-4)}:host ix-time-picker{width:100%}:host .no-padding{padding:0}:host ix-col{display:flex;flex-direction:column;padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date-container{display:inline-flex;flex-grow:1}:host .btn-select-date-container ix-button{margin-left:auto;margin-top:auto}:host .min-width{width:-moz-min-content;width:min-content}:host ix-time-picker{width:initial}}:host .individual{box-shadow:none;border:none}:host .btn-select-date-container{padding:0 1rem 1rem}@media (max-width: 576px){:host .btn-select-date-container .btn-select-date{width:100%}}";
const DatetimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
    this.range = true;
    this.showHour = true;
    this.showMinutes = true;
    this.showSeconds = true;
    this.dateFormat = "yyyy/LL/dd";
    this.timeFormat = "HH:mm:ss";
    this.showTimeReference = false;
    this.i18nDone = "Done";
    this.i18nTime = "Time";
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
    return h(Host, { key: "2899806be0d87d46a7f74b378543b27bbe73a9cd" }, h("ix-layout-grid", { key: "18bd58ee6f4a65807c21505ad4e4caea9075afac", class: "no-padding" }, h("ix-row", { key: "7fd193ca32ef352e2607cf4a4cd9aae97338ad7e" }, h("ix-col", { key: "1bc648f1f95d563ae8d75b530d8701b72a300d1e" }, h("ix-date-picker", { key: "06b4a0a5d060f8d788768307db8cf8236b0de184", ref: (ref) => this.datePickerElement = ref, corners: "left", range: this.range, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, standaloneAppearance: false, locale: this.locale, showWeekNumbers: this.showWeekNumbers, ariaLabelPreviousMonthButton: this.ariaLabelPreviousMonthButton, ariaLabelNextMonthButton: this.ariaLabelNextMonthButton })), h("ix-col", { key: "66c344692064e4d8dea5572d4ab9e1adc172c9df" }, h("ix-time-picker", { key: "15237851e30a965c0c6e8d465417e1c06654da45", class: "min-width", ref: (ref) => this.timePickerElement = ref, standaloneAppearance: false, dateTimePickerAppearance: true, onTimeChange: (event) => this.onTimeChange(event), format: this.timeFormat, textTime: this.i18nTime, time: this.time, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds }), h("div", { key: "75c1d6b357af020fbd98598bc97d09f1caea8fc8", class: "btn-select-date-container" }, h("ix-button", { key: "506e3d8ac20f7bde7f792ef1ee6e9934bb00fefd", class: "btn-select-date", onClick: () => this.onDone() }, this.i18nDone))))));
  }
};
DatetimePicker.style = datetimePickerCss;
export {
  DatetimePicker as ix_datetime_picker
};
