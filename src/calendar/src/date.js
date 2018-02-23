const dateUtil = {
  /**
   * 比较日期大小
   */
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
};

export default dateUtil;
