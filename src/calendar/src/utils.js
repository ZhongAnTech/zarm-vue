export const ONEDAYTIMESTAP = 24 * 60 * 60 * 1000;
let disabledFuc;

const getTodayBeginTime = date => {
  date = new Date(date.getTime());
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};

const getNumMouthBeginDate = (date, nextNum = 0) => {
  date = new Date(date.getTime());
  date.setDate(1);
  date.setMonth(date.getMonth() + nextNum);
  return date;
};

const getMonthDateCount = date => {
  const currentMonthBeginDate = getNumMouthBeginDate(date, 0);
  const nextMonthBeginDate = getNumMouthBeginDate(date, 1);
  return (nextMonthBeginDate.getTime() - currentMonthBeginDate.getTime()) / ONEDAYTIMESTAP;
};

const availableDate = date => {
  return date.toString() !== 'Invalid Date';
};

const dateFormat = (date, fmt) => {
  if (!date || !fmt) {
    return date;
  }
  date = new Date(date.toString().replace(/-/g, '/'));
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  }
  Object.keys(o).forEach((k) => {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
    }
  });
  return fmt;
};
export const setDisabledFuc = fuc => {
  disabledFuc = fuc;
};
export const getNextYear = date => {
  date = new Date(date.getTime());
  date.setFullYear(date.getFullYear() + 1);
  return date;
};

const datePartGerator = (length, beginDate, value) => {
  if (!length) return [];
  return Array.from({ length }, (val, index) => {
    const date = new Date(beginDate + (index * ONEDAYTIMESTAP));
    return {
      date,
      disabled: value || disabledFuc(date),
      active: false,
      inrange: false,
    };
  });
};
export const generatorCurrentMouthDates = (min, max) => {
  const beginDate = getNumMouthBeginDate(min);
  const dateCount = getMonthDateCount(beginDate);
  let beginDateStamp = beginDate.getTime();
  const maxIndex = max ? max.getDate() : dateCount;
  const beginDisabledLen = min.getDate() - 1;
  const beginDisabled = datePartGerator(beginDisabledLen, beginDateStamp, true);
  beginDateStamp += beginDisabledLen * ONEDAYTIMESTAP;
  const availabelDateLen = maxIndex - beginDisabledLen;
  const rangeAvailabel = datePartGerator(availabelDateLen, beginDateStamp, false);
  beginDateStamp += availabelDateLen * ONEDAYTIMESTAP;
  const endDisabledLen = dateCount - maxIndex;
  const endDisabled = datePartGerator(endDisabledLen, beginDateStamp, true);
  return [].concat(beginDisabled, rangeAvailabel, endDisabled);
};


export const generatorRangeDates = (min, max) => {
  if (min.getTime() > max.getTime()) {
    const temp = min;
    min = max;
    max = temp;
  }
  let begin = min;
  const result = [];
  let nextMonthBeginDate = getNumMouthBeginDate(begin, 1);
  const pushMouthToResult = maxDate => {
    result.push(
      {
        title: dateFormat(begin, 'yyyy年MM月'),
        dates: generatorCurrentMouthDates(begin, maxDate),
      }
    );
    result[result.length - 1].maxIndex = (result[result.length - 2] ? result[result.length - 2].maxIndex : 0) + result[result.length - 1].dates.length;
  };
  while (nextMonthBeginDate.getTime() < max.getTime()) {
    pushMouthToResult();
    begin = nextMonthBeginDate;
    nextMonthBeginDate = getNumMouthBeginDate(begin, 1);
  }
  pushMouthToResult(max);
  return result;
};
export const normalizeDate = date => {
  if (typeof date === 'string') date = date.replace(/(\d{4}).+?(\d{2}).+?(\d{2})/, '$1/$2/$3');
  date = date instanceof Date ? date : new Date(date);
  return availableDate(date) ? getTodayBeginTime(date) : null;
};
export const makeMinDateInfront = dateArr => {
  return dateArr[0].getTime() > dateArr[1].getTime() ? [dateArr[1], dateArr[0]] : dateArr;
};
