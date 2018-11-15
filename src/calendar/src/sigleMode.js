import {
  normalizeDate,
} from './utils';

export const sigleValueNormalize = function () {
  this.normalizeValue = normalizeDate(this.defaultValue || this.value);
};
export const clickSingleHandle = function (dateConfig) {
  if (dateConfig.disabled) return false;
  this.selectedDate && (this.selectedDate.active = false);
  if (this.selectedDate !== dateConfig) {
    this.selectedDate = dateConfig;
    dateConfig.active = !dateConfig.active;
  } else {
    this.selectedDate = null;
  }
  this._dateEmit(this.selectedDate && this.selectedDate.date);
};
