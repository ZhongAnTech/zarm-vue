import {
  normalizeDate,
  makeMinDateInfront,
} from './utils';

const selectedClean = function () {
  this.selectedDate.forEach(val => { val && (val.active = false); });
  this.selectedDate = null;
};
export const rangeClean = function () {
  this.rangeArr && this.rangeArr.forEach(val => { val.inrange = false; });
  this.rangeArr = null;
  selectedClean.call(this);
};
export const setRange = function (dateArray) {
  dateArray = makeMinDateInfront(dateArray);
  let minIndex = this._findDateInAllDatesIndex(dateArray[0]);
  let minInListIndex = this._findDateMonthIndex(minIndex);
  let maxIndex = this._findDateInAllDatesIndex(dateArray[1]);
  const maxInListIndex = this._findDateMonthIndex(maxIndex);
  this.rangeArr = [];
  let currentArrayIndex;
  const concatRangeArr = max => {
    currentArrayIndex = this.monthList[minInListIndex].dates.length - (this.monthList[minInListIndex].maxIndex - minIndex);
    this.rangeArr = this.rangeArr.concat(this.monthList[minInListIndex].dates.slice(currentArrayIndex, max));
  };
  while (minInListIndex !== maxInListIndex) {
    concatRangeArr();
    minIndex = this.monthList[minInListIndex].maxIndex;
    minInListIndex += 1;
  }
  maxIndex = this.monthList[maxInListIndex].dates.length - (this.monthList[maxInListIndex].maxIndex - maxIndex);
  concatRangeArr(maxIndex + 1);
  this.rangeArr.forEach(val => { val.inrange = true; });
  return true;
};
export const multipleValueNormalize = function () {
  let value = this.defaultValue || this.value;
  value = value instanceof Array ? [normalizeDate(value[0]), normalizeDate(value[1])] : [];
  this.normalizeValue = value[0] && value[1] ? value : null;
};
export const multipleValueInit = function () {
  multipleValueNormalize.call(this);
  if (this.normalizeValue) {
    const date = [];
    date[0] = this._findDateInMonthList(this.normalizeValue[0]);
    if (!date[0] || date[0].dateModel.disabled) {
      this._dateEmit(null);
      return console.error('your value is not in range');
    }
    date[1] = this._findDateInMonthList(this.normalizeValue[1]);
    if (!date[1] || date[1].dateModel.disabled) {
      this._dateEmit(null);
      return console.error('your value is not in range');
    }
    this._dateClick(date[0].dateModel);
    this._dateClick(date[1].dateModel);
  } else {
    this._dateEmit(null);
  }
};
export const clickMultipleHandleOne = function (dateConfig) {
  if (dateConfig.disabled) return false;
  if (this.rangeArr) {
    rangeClean.call(this);
    this._dateEmit(null);
  }
  dateConfig.active = true;
  this.selectedDate = [dateConfig];
  this._dateClick = clickMultipleHandleTwo; // eslint-disable-line
};
export const clickMultipleHandleTwo = function (dateConfig) {
  if (dateConfig.disabled) return false;
  if (this.selectedDate[0] === dateConfig) {
    selectedClean.call(this);
  } else {
    dateConfig.active = true;
    this.selectedDate[1] = dateConfig;
    setRange.call(this, [this.selectedDate[0].date, this.selectedDate[1].date]);
    this._dateEmit([this.selectedDate[0].date, this.selectedDate[1].date]);
  }
  this._dateClick = clickMultipleHandleOne;
};
