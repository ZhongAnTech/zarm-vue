import {
  normalizeDate,
  makeMinDateInfront,
} from './utils';

const selectedClean = function () {
  this.selectedDate.forEach(val => { val && (val.active = false); });
  this.selectedDate = null;
};
const rangeClean = function () {
  this.rangeArr.forEach(val => { val.inrange = false; });
  this.rangeArr = null;
  selectedClean.call(this);
  this._dateEmit(null);
};
export const setRange = function (dateArray) {
  dateArray = makeMinDateInfront(dateArray);
  let minIndex = this._findDateInAllDatesIndex(dateArray[0]);
  let minInListIndex = this._findDateMonthIndex(minIndex);
  if (minInListIndex === -1) return console.error('your value is not in range');
  let maxIndex = this._findDateInAllDatesIndex(dateArray[1]);
  const maxInListIndex = this._findDateMonthIndex(maxIndex);
  if (maxInListIndex === -1) return console.error('your value is not in range');
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
export const clickMultipleHandleOne = function (dateConfig) {
  if (dateConfig.disabled) return false;
  this.rangeArr && rangeClean.call(this);
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
