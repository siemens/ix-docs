import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C4tOo1JZ.js";
import { D as DateTime } from "./datetime-D1WplX1z-grPSvmS5.js";
import { b as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-IK9ialav-CffRa992.js";
import { g as getLuxonDateOnlyFormatMask } from "./luxon-datetime-format-masks-CoQiziG8-DpxwPfu4.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const datetimePickerCss = () => `:host{display:block;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-time-picker{width:100%}:host .no-padding{padding:0}:host ix-col{display:flex;flex-direction:column;padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}:host .col-separator{border-bottom:0.0625rem solid var(--theme-datepicker-separator--background);border-right:none}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date-container{display:inline-flex;flex-grow:1}:host .btn-select-date-container ix-button{margin-left:auto;margin-top:auto}:host .min-width{width:-moz-min-content;width:min-content}:host ix-time-picker{width:initial}:host .col-separator{border-right:0.0625rem solid var(--theme-datepicker-separator--background);border-bottom:none}}:host .individual{box-shadow:none;border:none}:host .btn-select-date-container{display:flex;justify-content:flex-end}@media (max-width: 576px){:host .btn-select-date-container .btn-select-date{width:100%}}`;
const DatetimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * If true, disables date range selection (from/to).
   */
  singleSelection = false;
  /**
   * The earliest date that can be selected.
   * If not set there will be no restriction.
   */
  minDate;
  /**
   * The latest date that can be selected.
   * If not set there will be no restriction.
   */
  maxDate;
  /**
   * Date format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  dateFormat = "yyyy/LL/dd";
  /**
   * Time format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  timeFormat = "HH:mm:ss";
  /**
   * Earliest selectable time (`timeFormat` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0
   */
  minTime;
  /**
   * Latest selectable time (`timeFormat` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0
   */
  maxTime;
  /**
   * The selected starting date. If the picker is not in range mode, this is the selected date.
   * Format has to match the `dateFormat` property.
   */
  from;
  /**
   * The selected end date. If the picker is not in range mode, this property has no impact.
   * Format has to match the `dateFormat` property.
   */
  to;
  /**
   * Selected time value for the embedded time picker.
   * Format has to match the `timeFormat` property.
   */
  time;
  /**
   * Show AM/PM time reference control.
   */
  showTimeReference = false;
  /**
   * Time reference (AM or PM).
   */
  timeReference;
  /**
   * Text of the date select button.
   */
  i18nDone = "Done";
  /**
   * Top label of the time picker.
   *
   * @since 3.0.0
   */
  i18nTime = "Time";
  /**
   * ARIA label for the previous month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  ariaLabelPreviousMonthButton = "Previous month";
  /**
   * ARIA label for the next month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  ariaLabelNextMonthButton = "Next month";
  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on Monday.
   */
  weekStartIndex = 0;
  /**
   * Locale identifier (e.g. 'en' or 'de').
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  locale;
  /**
   * Shows week numbers displayed on the left side of the date picker.
   *
   * @since 3.0.0
   */
  showWeekNumbers = false;
  /** @internal */
  embedded = false;
  /**
   * Time change event. Emitted when the time changes in the embedded time picker.
   */
  timeChange;
  /**
   * Date change event. Emitted when the date changes in the embedded date picker.
   */
  dateChange;
  /**
   * Datetime selection event. Emitted when the user confirms the selection.
   */
  dateSelect;
  datePickerElement;
  timePickerElement;
  selectedFromDate;
  hasTimeConstraintsConfigured() {
    return !!(this.minTime?.trim() || this.maxTime?.trim());
  }
  warnIfRangeModeIgnoresTimeConstraints() {
    if (this.singleSelection || !this.hasTimeConstraintsConfigured()) {
      return;
    }
    console.warn("[ix-datetime-picker] `minTime`/`maxTime` are ignored when range selection is enabled (`singleSelection=false`).");
  }
  watchFromPropHandler(value) {
    this.selectedFromDate = value;
  }
  watchSingleSelectionPropHandler() {
    this.warnIfRangeModeIgnoresTimeConstraints();
  }
  watchMinTimePropHandler() {
    this.warnIfRangeModeIgnoresTimeConstraints();
  }
  watchMaxTimePropHandler() {
    this.warnIfRangeModeIgnoresTimeConstraints();
  }
  componentWillLoad() {
    this.selectedFromDate = this.from;
    this.warnIfRangeModeIgnoresTimeConstraints();
  }
  get dateOnlyFormat() {
    return getLuxonDateOnlyFormatMask(this.dateFormat);
  }
  parseDateValue(value) {
    if (!value) {
      return null;
    }
    let parsed = DateTime.fromFormat(value, this.dateFormat, {
      locale: this.locale
    });
    if (!parsed.isValid) {
      parsed = DateTime.fromFormat(value, this.dateOnlyFormat, {
        locale: this.locale
      });
    }
    if (!parsed.isValid) {
      return null;
    }
    return parsed;
  }
  parseDateConstraint(value, boundary) {
    const parsed = this.parseDateValue(value);
    if (!parsed) {
      return null;
    }
    return boundary === "start" ? parsed.startOf("day") : parsed.endOf("day");
  }
  getSelectedFromDateTime() {
    const parsed = this.parseDateValue(this.selectedFromDate);
    if (!parsed) {
      return null;
    }
    return parsed.startOf("day");
  }
  getEffectiveTimeConstraints() {
    if (!this.singleSelection) {
      return { minTime: void 0, maxTime: void 0 };
    }
    const hasDateBounds = !!(this.minDate || this.maxDate);
    if (!hasDateBounds) {
      return {
        minTime: this.minTime,
        maxTime: this.maxTime
      };
    }
    const selectedFromDate = this.getSelectedFromDateTime();
    if (!selectedFromDate?.isValid) {
      return { minTime: void 0, maxTime: void 0 };
    }
    const minDate = this.parseDateConstraint(this.minDate, "start");
    const maxDate = this.parseDateConstraint(this.maxDate, "end");
    const applyMinTime = !!minDate?.isValid && !!selectedFromDate?.isValid && selectedFromDate.hasSame(minDate, "day");
    const applyMaxTime = !!maxDate?.isValid && selectedFromDate.hasSame(maxDate, "day");
    return {
      minTime: applyMinTime ? this.minTime : void 0,
      maxTime: applyMaxTime ? this.maxTime : void 0
    };
  }
  async onDone() {
    const date = await this.datePickerElement?.getCurrentDate();
    const time = await this.timePickerElement?.getCurrentTime();
    this.dateSelect.emit({
      from: date?.from ?? "",
      to: date?.to ?? "",
      time: time ?? ""
    });
  }
  async onDateChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: date } = event;
    if (typeof date === "string") {
      this.selectedFromDate = date;
    } else {
      this.selectedFromDate = date?.from;
    }
    this.dateChange.emit(date);
  }
  async onTimeChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: time } = event;
    this.timeChange.emit(time);
  }
  /** @internal */
  async getDatepickerElement() {
    return this.datePickerElement;
  }
  /** @internal */
  async getTimepickerElement() {
    return this.timePickerElement;
  }
  render() {
    const { minTime, maxTime } = this.getEffectiveTimeConstraints();
    return h(Host, { key: "0eb6ec0e18a9794f023b8dd6dee89640b9a0a948" }, h("ix-date-time-card", { key: "e45f91528b04c803324da4af217ebf7eda31dba0", hideHeader: true, hasFooter: true, embedded: this.embedded, corners: "rounded", noPadding: true }, h("ix-layout-grid", { key: "4cade86af3e6a77563e528d92d52c1d86079d0f9", class: "no-padding" }, h("ix-row", { key: "657adbd57b8334398f171b5aebf6e63cbc03b2af", class: "row-separator" }, h("ix-col", { key: "02d019f2a71c6c1c8cfa716a486acd7ed844c622", class: "col-separator" }, h("ix-date-picker", {
      key: "efb6483f6528cec9660913bca6b51d907c59dd3f",
      ref: (ref) => this.datePickerElement = ref,
      corners: "left",
      singleSelection: this.singleSelection,
      onDateChange: (event) => this.onDateChange(event),
      from: this.from,
      to: this.to,
      format: this.dateFormat,
      minDate: this.minDate,
      maxDate: this.maxDate,
      weekStartIndex: this.weekStartIndex,
      embedded: true,
      locale: this.locale,
      showWeekNumbers: this.showWeekNumbers,
      ariaLabelPreviousMonthButton: this.ariaLabelPreviousMonthButton,
      ariaLabelNextMonthButton: this.ariaLabelNextMonthButton,
      tabIndex: this.embedded ? -1 : 0,
      [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: this.embedded
    })), h("ix-col", { key: "e0884bbeabca263427ed98d26febb94b9d90cf91" }, h("ix-time-picker", {
      key: "9b9088f1ed6568028ab41a7f9732e537a1438359",
      class: "min-width",
      ref: (ref) => this.timePickerElement = ref,
      embedded: true,
      dateTimePickerAppearance: true,
      onTimeChange: (event) => this.onTimeChange(event),
      format: this.timeFormat,
      time: this.time,
      minTime,
      maxTime,
      tabIndex: this.embedded ? -1 : 0,
      [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: this.embedded
    })))), h("div", { key: "ad8dacb09da1525749481373191078dc1b85ba60", slot: "footer", class: "btn-select-date-container" }, h("ix-button", { key: "1124f92c6f59f14c74385f587f665537bd6cb9e2", class: "btn-select-date", onClick: () => this.onDone() }, this.i18nDone))));
  }
  static get watchers() {
    return {
      "from": [{
        "watchFromPropHandler": 0
      }],
      "singleSelection": [{
        "watchSingleSelectionPropHandler": 0
      }],
      "minTime": [{
        "watchMinTimePropHandler": 0
      }],
      "maxTime": [{
        "watchMaxTimePropHandler": 0
      }]
    };
  }
};
DatetimePicker.style = datetimePickerCss();
export {
  DatetimePicker as ix_datetime_picker
};
