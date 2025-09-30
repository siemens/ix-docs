import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./global-DaepF4XF.js";
import { D as DateTime } from "./datetime-bDicGJUN-EWahaxaU.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
import { o as iconHistory } from "./index-CB6MK0tq-MglExpDl.js";
const dateDropdownCss = ":host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}@media (max-width: 48em){:host .min-width{width:-moz-min-content;width:min-content}}@media (min-width: 48em){:host .border-right{border-right:var(--theme-x-weak-bdr-2)}}:host ix-button{width:100%}:host .max-height{max-height:-moz-max-content;max-height:max-content}:host .no-margin{margin:0;padding:0}:host .pull-right{float:right;padding:0 1rem 0.75rem 1rem}";
const DateDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
    this.disabled = false;
    this.format = "yyyy/LL/dd";
    this.range = true;
    this.from = "";
    this.to = "";
    this.minDate = "";
    this.maxDate = "";
    this.dateRangeId = "custom";
    this.variant = "primary";
    this.outline = false;
    this.ghost = false;
    this.loading = false;
    this.showWeekNumbers = false;
    this.customRangeAllowed = true;
    this.dateRangeOptions = [];
    this.weekStartIndex = 0;
    this.i18nCustomItem = "Custom...";
    this.i18nDone = "Done";
    this.i18nNoRange = "No range set";
    this.today = DateTime.now().toISO();
    this.selectedDateRangeId = "";
    this.triggerRef = makeRef();
    this.datePickerTouched = false;
  }
  onDateRangeIdChange() {
    this.onRangeListSelect(this.dateRangeId);
    this.updateCurrentDate();
    this.setDateRangeSelection(this.dateRangeId);
    if (!this.currentRangeValue) {
      return;
    }
    this.onDateSelect({
      from: this.currentRangeValue.from,
      to: this.currentRangeValue.to,
      id: this.currentRangeValue.id
    });
  }
  onDateRangeOptionsChange() {
    this.initialize();
    this.onDateRangeIdChange();
  }
  onDisabledChange() {
    if (this.disabled) {
      this.closeDropdown();
    }
  }
  componentWillLoad() {
    this.initialize();
    this.setDateRangeSelection(this.dateRangeId);
  }
  /**
   * Retrieves the currently selected date range from the component.
   * This method returns the selected date range as a `DateChangeEvent` object.
   */
  async getDateRange() {
    return this.currentRangeValue || { id: "", from: "", to: "" };
  }
  initialize() {
    const isCustomRange = this.dateRangeId === "custom" || !this.dateRangeId && !!this.from && !!this.to;
    if (isCustomRange && this.customRangeAllowed) {
      this.selectedDateRangeId = "custom";
      this.updateCurrentDate();
      return;
    }
    const isValidConfiguration = !isCustomRange && !this.from;
    if (!isValidConfiguration) {
      console.warn('"from" and "range-date-id" is provided this is an invalid combination. Using "custom".');
      this.selectedDateRangeId = "custom";
      this.updateCurrentDate();
      return;
    }
  }
  updateCurrentDate() {
    this.currentRangeValue = {
      id: this.selectedDateRangeId,
      from: this.from,
      to: this.to
    };
  }
  onDateSelect(rangeValue, preserveDropdown = true) {
    this.dateRangeChange.emit(rangeValue);
    if (preserveDropdown) {
      this.closeDropdown();
    }
    this.datePickerTouched = false;
  }
  onRangeListSelect(id) {
    if (this.setDateRangeSelection(id) && this.currentRangeValue) {
      this.onDateSelect(this.currentRangeValue);
    }
  }
  setDateRangeSelection(id) {
    this.selectedDateRangeId = id;
    const option = this.dateRangeOptions.find((range) => range.id === id);
    if (option) {
      this.currentRangeValue = option;
    }
    return option;
  }
  closeDropdown() {
    const dropdown = this.hostElement.shadowRoot.querySelector("ix-dropdown");
    if (dropdown) {
      dropdown.show = false;
    }
  }
  getButtonLabel() {
    var _a, _b;
    if (this.selectedDateRangeId === "custom" && ((_a = this.currentRangeValue) === null || _a === void 0 ? void 0 : _a.from)) {
      let range = this.currentRangeValue.from;
      if (this.currentRangeValue.to) {
        range += ` - ${this.currentRangeValue.to}`;
      }
      return range;
    }
    if (!this.selectedDateRangeId) {
      return this.i18nNoRange;
    }
    if (!this.dateRangeOptions || ((_b = this.dateRangeOptions) === null || _b === void 0 ? void 0 : _b.length) === 0) {
      return this.i18nNoRange;
    }
    const option = this.dateRangeOptions.find((option2) => option2.id === this.selectedDateRangeId);
    if (!option) {
      console.error(`Cannot find range option with id ${this.selectedDateRangeId}`);
      return this.i18nNoRange;
    }
    return option.label;
  }
  render() {
    var _a, _b, _c;
    return h(Host, { key: "ce1ccdbcb37e440f1180a6fb9a70d967dd37a874" }, h("ix-button", { key: "e3c9c8a499004281bb0b63c8e58b8657cf75dd04", "data-testid": "date-dropdown-trigger", "data-date-dropdown-trigger": true, variant: this.variant, ghost: this.ghost, outline: this.outline, loading: this.loading, icon: iconHistory, ref: this.triggerRef, disabled: this.disabled, ariaLabel: this.ariaLabelDropdownButton }, this.getButtonLabel()), h("ix-dropdown", { key: "4c2dd95942ffcc4289ea37d718afb7f231edf4a8", "data-testid": "date-dropdown", "data-date-dropdown": true, class: "min-width max-height", trigger: this.triggerRef.waitForCurrent(), closeBehavior: "outside", placement: "bottom-start", onShowChanged: ({ detail: show }) => {
      if (!show && this.selectedDateRangeId === "custom" && this.datePickerTouched && this.currentRangeValue) {
        this.onDateSelect(this.currentRangeValue);
      }
    } }, h("ix-layout-grid", { key: "7aaae433395f0ecee34ace5f0315ebd5ecd0a462", noMargin: true }, h("ix-row", { key: "2bf03cb45a37915d959a9ee2ecdd6e4435138eed" }, ((_a = this.dateRangeOptions) === null || _a === void 0 ? void 0 : _a.length) > 1 && h("ix-col", { key: "b4e94223ff4d6ed6942f57f3f4ff2a81f4c9e1d3", class: {
      "no-margin": true,
      "border-right": this.selectedDateRangeId === "custom"
    } }, this.dateRangeOptions.map((dateRangeOption) => h("ix-dropdown-item", { label: dateRangeOption.label, onClick: () => this.onRangeListSelect(dateRangeOption.id), checked: this.selectedDateRangeId === dateRangeOption.id })), h("div", { key: "75c58e0f961dd531c09fd05d6a2ce96894752379", hidden: !this.customRangeAllowed }, h("ix-dropdown-item", { key: "35efaababa6f19a9bb8987f8e60bb5b2730a4ff2", label: this.i18nCustomItem, checked: this.selectedDateRangeId === "custom", onClick: () => this.onRangeListSelect("custom") }))), h("ix-col", { key: "9cde18f824b5d2c553f3a03ec3277c84012a985e", class: "no-margin" }, this.selectedDateRangeId === "custom" && h(Fragment, { key: "0e86d2f2fa8f750877e72a0882cf6619079c6f99" }, h("ix-date-picker", { key: "54c23f5b71945e683b46b91ae66833a4af46fd57", standaloneAppearance: false, locale: this.locale, onDateChange: (e) => {
      e.stopPropagation();
      this.currentRangeValue = Object.assign(Object.assign({}, e.detail), { id: "custom" });
      this.datePickerTouched = true;
    }, onDateRangeChange: (e) => e.stopPropagation(), format: this.format, range: this.range, from: this.from || ((_b = this.currentRangeValue) === null || _b === void 0 ? void 0 : _b.from), to: this.to || ((_c = this.currentRangeValue) === null || _c === void 0 ? void 0 : _c.to), minDate: this.minDate, maxDate: this.maxDate, today: this.today, weekStartIndex: this.weekStartIndex, showWeekNumbers: this.showWeekNumbers }), h("div", { key: "0ddcbffe973079c6a70ada4c08e3eb7b2362cffa", class: "pull-right" }, h("ix-button", { key: "a8ea23efcf1423ac342077d1090b5c5b51760fcb", onClick: () => {
      if (this.currentRangeValue) {
        this.onDateSelect(this.currentRangeValue);
      }
    } }, this.i18nDone))))))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "dateRangeId": ["onDateRangeIdChange"],
      "to": ["onDateRangeIdChange"],
      "from": ["onDateRangeIdChange"],
      "dateRangeOptions": ["onDateRangeOptionsChange"],
      "disabled": ["onDisabledChange"]
    };
  }
};
DateDropdown.style = dateDropdownCss;
export {
  DateDropdown as ix_date_dropdown
};
