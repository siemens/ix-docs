import { r as registerInstance, f as forceUpdate, h, H as Host, c as createEvent, F as Fragment, g as getElement } from "./global-DaepF4XF.js";
import { m as matchBreakpoint } from "./breakpoints-D6vSVaHq-Ca0ODf6_.js";
import { w as iconChevronRightSmall, E as iconChevronLeftSmall, P as iconSingleCheck } from "./index-CB6MK0tq-MglExpDl.js";
import { D as DateTime, I as Info } from "./datetime-bDicGJUN-EWahaxaU.js";
import { O as OnListener } from "./listener-C3U9b2OI-bIPqCgxH.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
const colCss = ":host{position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px;padding:calc(var(--ix-layout-grid-gutter) * 0.5)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const Col = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  onResize() {
    forceUpdate(this);
  }
  getSize(breakpoint) {
    if (breakpoint === "") {
      return this.size;
    }
    if (breakpoint === "sm") {
      return this.sizeSm;
    }
    if (breakpoint === "md") {
      return this.sizeMd;
    }
    if (breakpoint === "lg") {
      return this.sizeLg;
    }
  }
  getColumnSize() {
    let size;
    Col.Breakpoints.forEach((breakpoint) => {
      const isMediaQueryActive = breakpoint !== "" ? matchBreakpoint(breakpoint) : true;
      if (!isMediaQueryActive) {
        return;
      }
      const currentSize = this.getSize(breakpoint);
      if (currentSize) {
        size = currentSize;
      }
    });
    return size;
  }
  getColumnSizeStyling() {
    const size = this.getColumnSize();
    if (!size) {
      return;
    }
    if (size === "auto") {
      return {
        flex: "0 0 auto",
        width: "auto",
        "max-width": "auto"
      };
    }
    const colSize = `calc(calc(${size} / var(--ix-layout-grid-columns)) * 100%)`;
    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`,
      "max-width": `${colSize}`
    };
  }
  render() {
    return h(Host, { key: "725f77eb880e6407ac70b50150d2575703ee5f29", style: Object.assign({}, this.getColumnSizeStyling()) }, h("slot", { key: "4b6b995339cced9d04f1118d5e9f38f19509e292" }));
  }
};
Col.Breakpoints = ["", "sm", "md", "lg"];
Col.style = colCss;
const datePickerCss = ":host{display:block;position:relative;width:21rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .header{display:flex;align-items:center;justify-content:space-between}:host .disabled-item{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled);cursor:default}:host .selector{flex-basis:100%;display:flex;align-items:center;justify-content:center;padding:0.25rem 1rem}:host .selector .dropdown{color:var(--theme-menu-item--color);font-size:14px;line-height:20px}:host .selector .fontSize{font-size:16px}:host .selector .capitalize{text-transform:capitalize}:host .selector .month-dropdown-item{margin-left:4px;margin-right:4px}:host .selector .month-dropdown-item:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .selector .arrowYear{display:flex;position:relative;padding:0.75rem 2rem;align-items:center;cursor:pointer}:host .selector .arrowYear:hover{background-color:var(--theme-select-list-item--background--hover)}:host .selector .arrowYear.selected{background-color:var(--theme-select-list-item--background--selected)}:host .selector .arrowYear .arrowPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 6px)}:host .selector .arrowYear .checkPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 8px)}:host .selector .arrowYear .monthMargin{margin-left:10px}:host .wrapper{display:flex}:host .wrapper .overflow{overflow-y:scroll;max-height:250px}:host .grid{display:grid;grid-template-columns:repeat(7, 40px);grid-template-rows:repeat(7, 40px);align-items:center;justify-items:center;justify-content:center;color:var(--theme-datepicker-today--color)}:host .grid--show-week-numbers{grid-template-columns:24px repeat(7, 40px)}:host .grid .calendar-item{position:relative;display:flex;justify-content:center;align-items:center;background-color:var(--theme-datepicker-day--background);border:1px solid var(--theme-datepicker-day--background);width:40px;height:40px;cursor:pointer}:host .grid .calendar-item:first-child{width:24px}:host .grid .calendar-item:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset);background-color:var(--theme-datepicker-day--background--selected);border:inset 1px solid var(--theme-datepicker-day--border-color--selected);color:var(--theme-datepicker-day--color--selected);font-size:14px;line-height:20px;letter-spacing:0}:host .grid .calendar-item.today{border:1px solid var(--theme-datepicker-today--border-color)}:host .grid .calendar-item.today:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .grid .calendar-item.today:active{background-color:var(--theme-datepicker-day--background--active)}:host .grid .calendar-item.today.selected{box-shadow:inset 0 0 0 1px white}:host .grid .calendar-item.today.selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .grid .calendar-item.today.selected:active{background-color:var(--theme-datepicker-day--background--selected-active)}:host .grid .calendar-item.today.selected.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);border:1px solid var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .grid .calendar-item.today.range{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range);border:1px solid var(--theme-datepicker-today--border-color--range);box-shadow:inset 0 0 0 1px white}:host .grid .calendar-item.today.range:hover{background-color:var(--theme-datepicker-day--background--range-hover);border:1px solid var(--theme-datepicker-today--border-color--range-hover)}:host .grid .calendar-item.today.range:active{background-color:var(--theme-datepicker-day--background--range-active);border:1px solid var(--theme-datepicker-today--border-color--range-active)}:host .grid .calendar-item.today.range.disabled{background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled);border:1px solid var(--theme-datepicker-today--border-color--range-disabled)}:host .grid .calendar-item.today.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled);cursor:default}:host .grid .calendar-item:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .grid .calendar-item:active{background-color:var(--theme-datepicker-day--background--active)}:host .grid .calendar-item.selected{background-color:var(--theme-datepicker-day--background--selected);color:var(--theme-datepicker-day--color--selected);border:1px solid var(--theme-datepicker-day--background--selected)}:host .grid .calendar-item.selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .grid .calendar-item.selected:active{background-color:var(--theme-datepicker-day--background--selected-active)}:host .grid .calendar-item.selected.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .grid .calendar-item.range{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range)}:host .grid .calendar-item.range:hover{background-color:var(--theme-datepicker-day--background--range-hover)}:host .grid .calendar-item.range:active{background-color:var(--theme-datepicker-day--background--range-active)}:host .grid .calendar-item.range.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled)}:host .grid .calendar-item.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled)}:host .grid .calendar-item.week-day{color:var(--theme-datepicker-weekday--color);font-size:12px;line-height:20px;border:none;background:none;cursor:initial}:host .grid .calendar-item.week-day .overflow{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .grid .calendar-item.empty-day{border:none;background:none;cursor:initial}:host .grid .calendar-item.week-number{font-size:10px;line-height:14px;color:var(--theme-datepicker-weekday--color);border:none;background:none;cursor:initial;width:1.5rem}:host .button{display:flex;justify-content:flex-end;margin-top:1rem}:host .hidden{display:none}";
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
const DatePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
    this.format = "yyyy/LL/dd";
    this.range = true;
    this.corners = "rounded";
    this.minDate = "";
    this.maxDate = "";
    this.i18nDone = "Done";
    this.weekStartIndex = 0;
    this.showWeekNumbers = false;
    this.standaloneAppearance = true;
    this.today = DateTime.now().toISO();
    this.selectedYear = 0;
    this.tempYear = 0;
    this.startYear = 0;
    this.endYear = 0;
    this.selectedMonth = 0;
    this.tempMonth = 0;
    this.dropdownButtonRef = makeRef();
    this.yearContainerRef = makeRef();
    this.firstMonthRef = makeRef();
    this.focusedDay = 1;
    this.isDayFocus = false;
    this.monthChangedFromFocus = false;
    this.DAYS_IN_WEEK = 7;
    this.calendar = [];
  }
  watchFromPropHandler(newValue) {
    if (!newValue) {
      this.currFromDate = void 0;
      return;
    }
    const date = this.parseDateString(newValue);
    if (date) {
      this.currFromDate = date;
      this.updateSelectedYearMonth(date);
    }
  }
  watchToPropHandler(newValue) {
    if (!newValue) {
      this.currToDate = void 0;
      return;
    }
    const date = this.parseDateString(newValue);
    if (date) {
      this.currToDate = date;
      this.updateSelectedYearMonth(date);
    }
  }
  onLocaleChange() {
    this.setTranslations();
  }
  /**
   * Get the currently selected date or range. The object returned contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   */
  async getCurrentDate() {
    var _a, _b, _c, _d;
    const _from = ((_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.isValid) ? (_b = this.currFromDate) === null || _b === void 0 ? void 0 : _b.toFormat(this.format) : void 0;
    const _to = ((_c = this.currToDate) === null || _c === void 0 ? void 0 : _c.isValid) ? (_d = this.currToDate) === null || _d === void 0 ? void 0 : _d.toFormat(this.format) : void 0;
    if (this.range) {
      return {
        from: _from,
        to: _to
      };
    }
    return {
      from: _from,
      to: void 0
    };
  }
  handleKeyUp(event) {
    if (!this.isDayFocus) {
      return;
    }
    let _focusedDay = this.focusedDay;
    switch (event.key) {
      case "ArrowLeft":
        _focusedDay--;
        break;
      case "ArrowRight":
        _focusedDay++;
        break;
      case "ArrowUp":
        _focusedDay = _focusedDay - 7;
        break;
      case "ArrowDown":
        _focusedDay = _focusedDay + 7;
        break;
      default:
        return;
    }
    if (_focusedDay > this.getDaysInCurrentMonth()) {
      _focusedDay = _focusedDay - this.getDaysInCurrentMonth();
      this.changeToAdjacentMonth(1);
      this.monthChangedFromFocus = true;
    } else if (_focusedDay < 1) {
      this.changeToAdjacentMonth(-1);
      _focusedDay = _focusedDay + this.getDaysInCurrentMonth();
      this.monthChangedFromFocus = true;
    }
    this.focusedDay = _focusedDay;
  }
  getDaysInCurrentMonth() {
    return DateTime.utc(this.selectedYear, this.selectedMonth + 1).daysInMonth || 0;
  }
  getDateTimeNow() {
    return DateTime.fromISO(this.today);
  }
  parseDateString(dateString) {
    const date = DateTime.fromFormat(dateString, this.format);
    if (!date.isValid) {
      console.error(date.invalidExplanation);
      return void 0;
    }
    return date;
  }
  updateSelectedYearMonth(date) {
    this.selectedYear = date.year;
    this.selectedMonth = date.month - 1;
  }
  onDayBlur() {
    this.isDayFocus = false;
  }
  onDayFocus() {
    this.isDayFocus = true;
  }
  componentWillLoad() {
    var _a, _b, _c, _d;
    this.setTranslations();
    this.currFromDate = this.from ? DateTime.fromFormat(this.from, this.format) : void 0;
    this.currToDate = this.to ? DateTime.fromFormat(this.to, this.format) : void 0;
    const year = (_b = (_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.year) !== null && _b !== void 0 ? _b : this.getDateTimeNow().year;
    this.startYear = year - 5;
    this.endYear = year + 5;
    this.selectedMonth = ((_d = (_c = this.currFromDate) === null || _c === void 0 ? void 0 : _c.month) !== null && _d !== void 0 ? _d : this.getDateTimeNow().month) - 1;
    this.selectedYear = year;
    this.tempMonth = this.selectedMonth;
    this.tempYear = this.selectedYear;
  }
  componentWillRender() {
    this.calculateCalendar();
  }
  componentDidRender() {
    if (!this.monthChangedFromFocus && !this.isDayFocus) {
      return;
    }
    const dayElem = this.hostElement.shadowRoot.querySelector(`[id=day-cell-${this.focusedDay}]`);
    dayElem.focus();
  }
  setTranslations() {
    this.dayNames = this.rotateWeekDayNames(Info.weekdays("long", {
      locale: this.locale
    }), this.weekStartIndex);
    this.monthNames = Info.months("long", {
      locale: this.locale
    });
  }
  /**
   * Rotate the WeekdayNames array.
   * Based on the position that should be the new 0-index.
   */
  rotateWeekDayNames(weekdays, index) {
    const clone = [...weekdays];
    if (index === 0) {
      return clone;
    }
    index = -index;
    const len = weekdays.length;
    clone.push(...clone.splice(0, (-index % len + len) % len));
    return clone;
  }
  async onDone() {
    const date = await this.getCurrentDate();
    this.dateSelect.emit(date);
  }
  calculateCalendar() {
    const calendar = [];
    const month = DateTime.utc(this.selectedYear, this.selectedMonth + 1);
    const monthStart = month.startOf("month");
    const monthEnd = month.endOf("month");
    let startWeek = monthStart.weekNumber;
    let endWeek = monthEnd.weekNumber;
    let monthStartWeekDayIndex = monthStart.weekday - 1;
    let monthEndWeekDayIndex = monthEnd.weekday - 1;
    if (this.weekStartIndex !== 0) {
      const weekdays = Info.weekdays();
      const monthStartWeekDayName = weekdays[monthStart.weekday];
      monthStartWeekDayIndex = this.dayNames.findIndex((d) => d === monthStartWeekDayName);
      const monthEndWeekDayName = weekdays[monthEnd.weekday];
      monthEndWeekDayIndex = this.dayNames.findIndex((d) => d === monthEndWeekDayName);
    }
    let correctLastWeek = false;
    if (endWeek === 1) {
      endWeek = monthEnd.weeksInWeekYear + 1;
      correctLastWeek = true;
    }
    let correctFirstWeek = false;
    if (startWeek === monthStart.weeksInWeekYear) {
      startWeek = 1;
      endWeek++;
      correctFirstWeek = true;
    }
    let currDayNumber = 1;
    for (let weekIndex = startWeek; weekIndex <= endWeek && currDayNumber <= 31; weekIndex++) {
      const daysArr = [];
      for (let j = 0; j < this.DAYS_IN_WEEK && currDayNumber <= 31; j++) {
        if (weekIndex === startWeek && j < monthStartWeekDayIndex || weekIndex === endWeek && j > monthEndWeekDayIndex) {
          daysArr.push(void 0);
        } else {
          daysArr.push(currDayNumber++);
        }
      }
      if (correctFirstWeek || correctLastWeek) {
        if (weekIndex === 1) {
          calendar.push({
            weekNumber: monthStart.weeksInWeekYear,
            dayNumbers: daysArr
          });
        } else if (weekIndex === monthEnd.weekNumber) {
          calendar.push({
            weekNumber: 1,
            dayNumbers: daysArr
          });
        } else {
          calendar.push({
            weekNumber: weekIndex - 1,
            dayNumbers: daysArr
          });
        }
        continue;
      }
      calendar.push({
        weekNumber: weekIndex,
        dayNumbers: daysArr
      });
    }
    this.calendar = calendar;
  }
  selectTempYear(event, year) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.tempYear = year;
  }
  focusMonth() {
    var _a;
    (_a = this.firstMonthRef.current) === null || _a === void 0 ? void 0 : _a.focus();
  }
  infiniteScrollYears() {
    const yearContainer = this.yearContainerRef.current;
    if (!yearContainer) {
      return;
    }
    const scroll = yearContainer.scrollTop;
    const maxScroll = yearContainer.scrollHeight;
    const atTop = scroll === 0;
    const atBottom = Math.round(scroll + yearContainer.offsetHeight) >= maxScroll;
    const limit = 200;
    if (this.endYear - this.startYear > limit)
      return;
    if (atTop) {
      const first = yearContainer.firstElementChild;
      this.startYear -= 5;
      yearContainer.scrollTo(0, first.offsetTop);
      return;
    }
    if (atBottom) {
      const last = yearContainer.lastElementChild;
      this.endYear += 5;
      yearContainer.scrollTo(0, last.offsetTop);
    }
  }
  selectMonth(month) {
    this.selectedMonth = month;
    this.selectedYear = this.tempYear;
    this.tempMonth = month;
    const dropdown = this.hostElement.shadowRoot.querySelector("ix-dropdown");
    if (dropdown) {
      dropdown.show = false;
    }
  }
  changeToAdjacentMonth(number) {
    if (this.selectedMonth + number < 0) {
      this.selectedYear--;
      this.selectedMonth = 11;
    } else if (this.selectedMonth + number > 11) {
      this.selectedYear++;
      this.selectedMonth = 0;
    } else {
      this.selectedMonth += number;
    }
  }
  selectDay(selectedDay, target) {
    if (target.classList.contains("disabled")) {
      return;
    }
    const date = DateTime.fromJSDate(new Date(this.selectedYear, this.selectedMonth, selectedDay));
    if (!this.range || this.currFromDate === void 0) {
      this.currFromDate = date;
      this.onDateChange();
      return;
    }
    if (this.currToDate !== void 0) {
      this.currFromDate = date;
      this.currToDate = void 0;
      this.onDateChange();
      return;
    }
    if (date < this.currFromDate) {
      this.currToDate = this.currFromDate;
      this.currFromDate = date;
      this.onDateChange();
      return;
    }
    this.currToDate = date;
    this.onDateChange();
  }
  onDateChange() {
    this.getCurrentDate().then((date) => {
      this.dateChange.emit(date);
      if (this.range) {
        this.dateRangeChange.emit(date);
      }
    });
  }
  getDayClasses(day) {
    var _a, _b, _c;
    const todayObj = this.getDateTimeNow();
    const selectedDayObj = DateTime.fromJSDate(new Date(this.selectedYear, this.selectedMonth, day));
    return {
      "calendar-item": true,
      "empty-day": day === void 0,
      today: todayObj.hasSame(selectedDayObj, "day"),
      selected: ((_a = this.currFromDate) === null || _a === void 0 ? void 0 : _a.hasSame(selectedDayObj, "day")) || ((_b = this.currToDate) === null || _b === void 0 ? void 0 : _b.hasSame(selectedDayObj, "day")),
      range: this.currFromDate && selectedDayObj.startOf("day") > this.currFromDate.startOf("day") && this.currToDate !== void 0 && selectedDayObj.startOf("day") < ((_c = this.currToDate) === null || _c === void 0 ? void 0 : _c.startOf("day")),
      disabled: !this.isWithinMinMaxDate(selectedDayObj)
    };
  }
  isWithinMinMaxYear(year) {
    const minDateYear = this.minDate ? DateTime.fromFormat(this.minDate, this.format).year : void 0;
    const maxDateYear = this.maxDate ? DateTime.fromFormat(this.maxDate, this.format).year : void 0;
    const isBefore = minDateYear ? year < minDateYear : false;
    const isAfter = maxDateYear ? year > maxDateYear : false;
    return !isBefore && !isAfter;
  }
  isWithinMinMaxMonth(month) {
    const minDateObj = this.minDate ? DateTime.fromFormat(this.minDate, this.format) : void 0;
    const maxDateObj = this.maxDate ? DateTime.fromFormat(this.maxDate, this.format) : void 0;
    const minDateMonth = minDateObj === null || minDateObj === void 0 ? void 0 : minDateObj.month;
    const maxDateMonth = maxDateObj === null || maxDateObj === void 0 ? void 0 : maxDateObj.month;
    const isBefore = minDateMonth ? this.tempYear === minDateObj.year && month < minDateMonth : false;
    const isAfter = maxDateMonth ? this.tempYear === maxDateObj.year && month > maxDateMonth : false;
    return !isBefore && !isAfter;
  }
  isWithinMinMaxDate(date) {
    const _minDate = this.minDate ? DateTime.fromFormat(this.minDate, this.format) : void 0;
    const _maxDate = this.maxDate ? DateTime.fromFormat(this.maxDate, this.format) : void 0;
    const isBefore = _minDate ? date.startOf("day") < _minDate.startOf("day") : false;
    const isAfter = _maxDate ? date.startOf("day") > _maxDate.startOf("day") : false;
    return !isBefore && !isAfter;
  }
  renderYears() {
    const rows = [];
    for (let year = this.startYear; year <= this.endYear; year++) {
      rows.push(h("div", { key: year, class: {
        arrowYear: true,
        "month-dropdown-item": true,
        "disabled-item": !this.isWithinMinMaxYear(year)
      }, onClick: (event) => this.selectTempYear(event, year), onKeyUp: (event) => {
        if (event.key === "Enter") {
          this.tempYear = year;
          this.focusMonth();
        }
      }, tabIndex: 0 }, h("ix-icon", { class: {
        hidden: this.tempYear !== year,
        arrowPosition: true
      }, name: iconChevronRightSmall, size: "12" }), h("div", { style: { "min-width": "max-content" } }, `${year}`)));
    }
    return rows;
  }
  render() {
    return h(Host, { key: "d7ceb0756b3797c5477009a42e22b453b3efb509" }, h("ix-date-time-card", { key: "1934ca0d93fbd376098248c458ed0be9e7cf50f9", corners: this.corners, standaloneAppearance: this.standaloneAppearance }, h("div", { key: "a200db5d0d66d092ddecf9ab9add58c745a182e7", class: "header", slot: "header" }, h("ix-icon-button", { key: "da4076541afedf4112f8ea8b34d1dd8ca3cecace", onClick: () => this.changeToAdjacentMonth(-1), ghost: true, icon: iconChevronLeftSmall, variant: "primary", class: "arrows", "aria-label": this.ariaLabelPreviousMonthButton }), h("div", { key: "b12fd7c6d0c8d94f2e7714d07afd15b4464602d2", class: "selector" }, h("ix-button", { key: "2c6f7f3f7df365b423c372aa00ba835b13f51b73", ghost: true, ref: this.dropdownButtonRef, "data-testid": "year-month-button" }, h("span", { key: "40f9cc4b9c2744becfbb4b9541570283ee0430c9", class: "fontSize capitalize" }, this.monthNames[this.selectedMonth], " ", this.selectedYear)), h("ix-dropdown", { key: "0290d3e82ce53e6d391a712065c64408e75e363d", "data-testid": "year-month-dropdown", class: "dropdown", trigger: this.dropdownButtonRef.waitForCurrent(), ignoreRelatedSubmenu: true, placement: "bottom-start" }, h("div", { key: "dd7a56c347ec085433fc0c1422a341f5d1e54114", class: "wrapper" }, h("div", { key: "4b8b2cea3f7c30406090444ad505a89657b4ff8c", "data-testid": "year-container", class: "overflow", onScroll: () => this.infiniteScrollYears(), ref: this.yearContainerRef }, this.renderYears()), h("div", { key: "7dc18dc889f5089c85f527bbeb4c40d1860b2b0f", class: "overflow", "data-testid": "month-container" }, this.monthNames.map((month, index) => h("div", { key: month, ref: (ref) => {
      if (month === this.monthNames[0]) {
        this.firstMonthRef(ref);
      }
    }, class: {
      arrowYear: true,
      "month-dropdown-item": true,
      selected: this.tempYear === this.selectedYear && this.tempMonth === index,
      "disabled-item": !this.isWithinMinMaxMonth(index)
    }, onClick: () => this.selectMonth(index), onKeyUp: (event) => event.key === "Enter" && this.selectMonth(index), tabIndex: 0 }, h("ix-icon", { class: {
      hidden: this.tempYear !== this.selectedYear || this.tempMonth !== index,
      checkPosition: true
    }, name: iconSingleCheck, size: "16" }), h("div", null, h("span", { class: "capitalize monthMargin" }, `${month} ${this.tempYear}`)))))))), h("ix-icon-button", { key: "3cb14ec61227db2e2ddacb4cb4f010fa31401d85", onClick: () => this.changeToAdjacentMonth(1), ghost: true, icon: iconChevronRightSmall, variant: "primary", class: "arrows", "aria-label": this.ariaLabelNextMonthButton })), h("div", { key: "bbad24ef82ffc934452132376382eea556d22c93", class: {
      grid: true,
      "grid--show-week-numbers": this.showWeekNumbers
    } }, this.showWeekNumbers && h("div", { key: "2fdf008b39da5255b89d4cba93af0f557de33e0f", class: "calendar-item week-day" }), this.dayNames.map((name) => h("div", { key: name, class: "calendar-item week-day" }, h("div", { class: "overflow" }, name.slice(0, 3)))), this.calendar.map((week) => {
      return h(Fragment, null, this.showWeekNumbers && h("div", { class: "calendar-item week-number" }, week.weekNumber), week.dayNumbers.map((day) => {
        return day ? h("div", { key: day, id: `day-cell-${day}`, "date-calender-day": true, class: this.getDayClasses(day), onClick: (e) => {
          const target = e.currentTarget;
          this.selectDay(day, target);
        }, onKeyUp: (e) => {
          const target = e.currentTarget;
          if (e.key === "Enter") {
            this.selectDay(day, target);
          }
        }, tabIndex: day === this.focusedDay ? 0 : -1, onFocus: () => this.onDayFocus(), onBlur: () => this.onDayBlur(), "aria-label": `${this.selectedMonth}: ${day}` }, day) : h("div", null);
      }));
    })), h("div", { key: "8d099f31515789994c73a28d51cf66f61e253534", class: {
      button: true,
      hidden: !this.range || !this.standaloneAppearance
    } }, h("ix-button", { key: "85c0a45384da71bcabc417d85553fe626266daf3", onClick: () => this.onDone() }, this.i18nDone))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "from": ["watchFromPropHandler"],
      "to": ["watchToPropHandler"],
      "locale": ["onLocaleChange"]
    };
  }
};
__decorate([
  OnListener("keydown")
], DatePicker.prototype, "handleKeyUp", null);
DatePicker.style = datePickerCss;
const layoutGridCss = ":host{--ix-layout-grid-gutter:24px;display:block;flex:1 1 0%;width:100%;padding-left:calc(var(--ix-layout-grid-gutter) * 0.5);padding-right:calc(var(--ix-layout-grid-gutter) * 0.5)}:host(.no-margin){padding-left:0;padding-right:0}";
const LayoutGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.noMargin = false;
    this.gap = "24";
    this.columns = 12;
  }
  render() {
    return h(Host, { key: "e70a02ebb1bf59a854fd2e7a9852eb71307b1ba8", class: {
      "no-margin": this.noMargin
    }, style: {
      "--ix-layout-grid-columns": `${this.columns}`,
      "--ix-layout-grid-gutter": `${this.gap}px`
    } }, h("slot", { key: "49d350c160d49df1a546c1b10bb460a1a63bc234" }));
  }
};
LayoutGrid.style = layoutGridCss;
const rowCss = ":host{display:flex;flex-wrap:wrap}:host(:not(:first-of-type)){margin-block-start:var(--ix-layout-grid-row-margin, 0)}";
const Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "3b0d16365de5142ce2fffa2a2e11ce877e283111" }, h("slot", { key: "0d7a715f298d2cf1c97eb19a1adcaf345d7ca4e8" }));
  }
};
Row.style = rowCss;
export {
  Col as ix_col,
  DatePicker as ix_date_picker,
  LayoutGrid as ix_layout_grid,
  Row as ix_row
};
