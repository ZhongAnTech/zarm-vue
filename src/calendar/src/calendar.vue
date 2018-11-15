<script>
  import {
    setDisabledFuc,
    generatorRangeDates,
    normalizeDate,
    getNextYear,
    ONEDAYTIMESTAP,
  } from './utils';
  import {
    sigleValueNormalize,
    clickSingleHandle,
  } from './sigleMode';
  import {
    multipleValueNormalize,
    clickMultipleHandleOne,
  } from './multipleMode';
  import DateItem from './dateItem';

  const today = new Date();
  const weekList = ['日', '一', '二', '三', '四', '五', '六'];
  const dateType = [Date, String, Number];
  const valueType = [Date, String, Number, Array];
  export default {
    name: 'zaCalendar',
    components: {
      DateItem,
    },
    props: {
      prefixCls: {
        type: String,
        default: 'za-calendar',
      },
      defaultValue: {
        type: valueType,
      },
      value: {
        type: valueType,
      },
      min: {
        type: dateType,
        default() {
          return today;
        },
      },
      max: {
        type: dateType,
        default() {
          return getNextYear(today);
        },
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      dateRender: {
        type: Function,
        default(date, disabled) {
          return <div class={`${this.prefixCls}_date-num`}>{date.getDate()}</div>;
        },
      },
      className: {
        type: String,
        default: '',
      },
      styles: {
        type: Object,
        default() {
          return {};
        },
      },
      disabledDate: {
        type: Function,
        default() {
          return false;
        },
      },
    },
    data() {
      return {
        monthList: [],
      };
    },
    methods: {
      _findDateInAllDatesIndex(date) {
        return Math.ceil((date.getTime() - this.monthList[0].dates[0].date.getTime()) / ONEDAYTIMESTAP);
      },
      _findDateMonthIndex(index) {
        let monthIndex = Math.floor(index / 30);
        monthIndex = this.monthList[monthIndex - 1] && this.monthList[monthIndex - 1].maxIndex >= index ? monthIndex - 1 : monthIndex;
        if (!this.monthList[monthIndex]) { return -1; }
        return monthIndex;
      },
      _findDateInMonthList(date) {
        const index = this._findDateInAllDatesIndex(date);
        const monthIndex = this._findDateMonthIndex(index);
        if (monthIndex === -1) return null;
        const dateIndex = this.monthList[monthIndex].dates.length - (this.monthList[monthIndex].maxIndex - index);
        return {
          index,
          dateModel: this.monthList[monthIndex].dates[dateIndex],
        };
      },
      _dateEmit(value) {
        this.$emit('change', value);
        this.$emit('input', value);
      },
      componentInit() {
        setDisabledFuc(this.disabledDate);
        this.monthList = generatorRangeDates(normalizeDate(this.min), normalizeDate(this.max));
        this.multiple ? this._multipleInit() : this._singleInit();
        this.normalizeValue = null;
      },
      _singleInit() {
        this._dateClick = clickSingleHandle;
        sigleValueNormalize.call(this);
        if (this.normalizeValue) {
          const date = this._findDateInMonthList(this.normalizeValue);
          if (!date) return console.error('your value is not in range');
          this._dateClick(date.dateModel);
        }
      },
      _multipleInit() {
        this._dateClick = clickMultipleHandleOne;
        multipleValueNormalize.call(this);
        if (this.normalizeValue) {
          const date = [];
          date[0] = this._findDateInMonthList(this.normalizeValue[0]);
          if (!date[0]) return console.error('your value is not in range');
          date[1] = this._findDateInMonthList(this.normalizeValue[1]);
          if (!date[1]) return console.error('your value is not in range');
          this._dateClick(date[0].dateModel);
          this._dateClick(date[1].dateModel);
        }
      },
    },
    render() {
      return (
        <div class={`${this.prefixCls} ${this.className}`} style={this.styles}>
          <ul class={`${this.prefixCls}_week`}>
            {
              weekList.map(item => <li class={`${this.prefixCls}_week-item`}>
                  {item}
                </li>)
            }
          </ul>
          <ul class={`${this.prefixCls}_month`}>
            {
              this.monthList.map(month => {
                return (<li>
                  <h3 class={`${this.prefixCls}_month-head`}>{month.title}</h3>
                  <ul class={`${this.prefixCls}_dates`}>
                    {
                      Array.from({ length: month.dates[0].date.getDay() }, () => <li class={`${this.prefixCls}_dates-item`}/>)
                    }
                    {
                      month.dates.map(dateItem => {
                        return <date-item
                          nativeOnClick={() => this._dateClick(dateItem)}
                          data={dateItem}
                          prefixCls={this.prefixCls}
                          dateRender={this.dateRender}
                        >
                        </date-item>;
                      })
                    }
                  </ul>
                </li>);
              })
            }
          </ul>
        </div>
      );
    },
    created() {
      this.componentInit();
    },
    watch: {
      multiple() { this.componentInit(); },
      max() { this.componentInit(); },
      min() { this.componentInit(); },
    },
  };
</script>
