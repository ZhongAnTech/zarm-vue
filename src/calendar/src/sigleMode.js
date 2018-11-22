import {
  normalizeDate,
} from './utils';

export const sigleDateClean = function () {
  this.selectedDate && (this.selectedDate.active = false);
};
export const sigleValueNormalize = function () {
  this.normalizeValue = normalizeDate(this.defaultValue || this.value);
};
export const sigleValueInit = function () {
  sigleValueNormalize.call(this);
  if (this.normalizeValue) {
    const date = this._findDateInMonthList(this.normalizeValue);
    if (!date) {
      this._dateEmit(null);
      return console.error('your value is not in range');
    }
    this._dateClick(date.dateModel);
  } else { this._dateEmit(null); }
};
export const clickSingleHandle = function (dateConfig) {
  if (dateConfig.disabled) return false;
  this.clean();
  if (this.selectedDate !== dateConfig) {
    this.selectedDate = dateConfig;
    dateConfig.active = !dateConfig.active;
  } else {
    this.selectedDate = null;
  }
  this._dateEmit(this.selectedDate && this.selectedDate.date);
};
