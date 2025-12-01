import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./global-BkHs9YbB.js";
import { D as DateTime } from "./datetime-bDicGJUN-Rk09H-45.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
import { o as iconHistory } from "./index-8HpPmDK_-DinFJk0z.js";
const dateDropdownCss = ":host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}@media (max-width: 48em){:host .min-width{width:-moz-min-content;width:min-content}}@media (min-width: 48em){:host .border-right{border-right:var(--theme-x-weak-bdr-2)}}:host ix-button{width:100%}:host .max-height{max-height:-moz-max-content;max-height:max-content}:host .no-margin{margin:0;padding:0}:host .pull-right{float:right;padding:0 1rem 0.75rem 1rem}";
const DateDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
    this.disabled = false;
    this.format = "yyyy/LL/dd";
    this.singleSelection = false;
    this.from = "";
    this.to = "";
    this.minDate = "";
    this.maxDate = "";
    this.dateRangeId = "custom";
    this.variant = "primary";
    this.loading = false;
    this.showWeekNumbers = false;
    this.customRangeDisabled = false;
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
    if (isCustomRange && !this.customRangeDisabled) {
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
    return h(Host, { key: "2cad55fd1448a2a553abb8bdf50f9245d2cc71bf" }, h("ix-button", { key: "77bd4e5f89d500b0323c5a2771cb2268601a87d3", "data-testid": "date-dropdown-trigger", "data-date-dropdown-trigger": true, variant: this.variant, loading: this.loading, icon: iconHistory, ref: this.triggerRef, disabled: this.disabled, ariaLabel: this.ariaLabelDropdownButton }, this.getButtonLabel()), h("ix-dropdown", { key: "e1108d1cdac327961e3147d10f380f8d9850449c", "data-testid": "date-dropdown", "data-date-dropdown": true, class: "min-width max-height", trigger: this.triggerRef.waitForCurrent(), closeBehavior: "outside", placement: "bottom-start", onShowChanged: ({ detail: show }) => {
      if (!show && this.selectedDateRangeId === "custom" && this.datePickerTouched && this.currentRangeValue) {
        this.onDateSelect(this.currentRangeValue);
      }
    } }, h("ix-layout-grid", { key: "fd7ece26cbcda9da063b1832ca7c010fd508ae8b", noMargin: true }, h("ix-row", { key: "8854518f7534f9c52be1d74373c8a6d822983bca" }, ((_a = this.dateRangeOptions) === null || _a === void 0 ? void 0 : _a.length) > 1 && h("ix-col", { key: "8e7e4d96a0e91d91cee20f961b37da7645e0a28e", class: {
      "no-margin": true,
      "border-right": this.selectedDateRangeId === "custom"
    } }, this.dateRangeOptions.map((dateRangeOption) => h("ix-dropdown-item", { label: dateRangeOption.label, onClick: () => this.onRangeListSelect(dateRangeOption.id), checked: this.selectedDateRangeId === dateRangeOption.id })), h("div", { key: "f9e7879a9f2e00c5bbcd7ab454cf491345a2f1ee", hidden: this.customRangeDisabled }, h("ix-dropdown-item", { key: "e373366109b1ac41af77fc4fcab8aeb4a5cf7a29", label: this.i18nCustomItem, checked: this.selectedDateRangeId === "custom", onClick: () => this.onRangeListSelect("custom") }))), h("ix-col", { key: "4e4ad3072863235f5dda814f24811e982f407c9b", class: "no-margin" }, this.selectedDateRangeId === "custom" && h(Fragment, { key: "a9c540a66333322c54cf7814231f6213806b86db" }, h("ix-date-picker", { key: "7e59d29e3a49bee9098879b51b23d9c6fbec5c6b", embedded: true, locale: this.locale, onDateChange: (e) => {
      e.stopPropagation();
      this.currentRangeValue = Object.assign(Object.assign({}, e.detail), { id: "custom" });
      this.datePickerTouched = true;
    }, onDateRangeChange: (e) => e.stopPropagation(), format: this.format, singleSelection: this.singleSelection, from: this.from || ((_b = this.currentRangeValue) === null || _b === void 0 ? void 0 : _b.from), to: this.to || ((_c = this.currentRangeValue) === null || _c === void 0 ? void 0 : _c.to), minDate: this.minDate, maxDate: this.maxDate, today: this.today, weekStartIndex: this.weekStartIndex, showWeekNumbers: this.showWeekNumbers }), h("div", { key: "837f09d7b578640927e904f4adc2aef7fda7e65e", class: "pull-right" }, h("ix-button", { key: "09e9fbdf94d44bc52832d6787206aaded06a3aeb", onClick: () => {
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
