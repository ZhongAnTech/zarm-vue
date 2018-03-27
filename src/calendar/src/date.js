const dateUtil = {
  // 比较日期大小
  compareDate(date1, date2) {
    const a = new Date(date1);
    const b = new Date(date2);
    return (
      (new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime() -
        new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime()) /
      1000 /
      60 /
      60 /
      24
    );
  },
  // 日期添加天数
  addDays(date, daysToAdd) {
    const tempDate = date.getDate();
    const newDate = new Date(date);
    newDate.setDate(tempDate + daysToAdd);
    return newDate;
  },
  // 日期添加月数
  addMonths(date, monthsToAdd) {
    const tempDate = date.getDate();
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + monthsToAdd);
    if (tempDate !== newDate.getDate()) newDate.setDate(0);
    return newDate;
  },
  addYears(date, yearsToAdd) {
    const tempDate = date.getDate();
    const newDate = new Date(date);
    newDate.setYear(newDate.getFullYear() + yearsToAdd);
    if (tempDate !== newDate.getDate()) newDate.setDate(0);
    return newDate;
  },
  // 格式化日期
  formatDate(date, fmt) {
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
  },
};

export default dateUtil;
