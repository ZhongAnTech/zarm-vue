<script>
  import {
    setDisabledFuc,
    generatorRangeDates,
    normalizeDate,
    getNextYear,
    ONEDAYTIMESTAP,
  } from './utils';
  import {
    sigleDateClean,
    sigleValueInit,
    clickSingleHandle,
  } from './sigleMode';
  import {
    rangeClean,
    multipleValueInit,
    clickMultipleHandleOne,
  } from './multipleMode';
  import DateItem from './dateItem';

  const today = new Date();
  const weekList = ['日', '一', '二', '三', '四', '五', '六'];
  const dateType = [Date, String, Number];
  const valueType = [Date, String, Number, Array];
  const doWeigth = ['clean', '_rangeInit', '_choiceInitType', 'valueInit'];
  let changeBySelf = false;
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
          return getNextYear(normalizeDate(this.$options.propsData.min) || today);
        },
      },
      multiple: {
        type: Boolean,
        default: false,
      },
      dateRender: {
        type: Function,
        default(date) {
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
        waitingFuc: {},
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
        changeBySelf = true;
        this.$emit('change', value);
        this.$emit('input', value);
      },
      _componentInit() {
        this._rangeInit();
        this._choiceInitType();
        this.valueInit();
        this.normalizeValue = null;
      },
      _rangeInit() {
        setDisabledFuc(this.disabledDate);
        this.monthList = generatorRangeDates(normalizeDate(this.min), normalizeDate(this.max));
      },
      _choiceInitType() {
        this.multiple ? this._multipleInit() : this._singleInit();
      },
      _singleInit() {
        this.clean = sigleDateClean;
        this._dateClick = clickSingleHandle;
        this.valueInit = sigleValueInit;
      },
      _multipleInit() {
        this.clean = rangeClean;
        this._dateClick = clickMultipleHandleOne;
        this.valueInit = multipleValueInit;
      },
      _pushWaitingStack(...arg) {
        arg.forEach(val => {
          this.waitingFuc[val] = true;
        });
        this._activeWaitingRun();
      },
      _activeWaitingRun() {
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          doWeigth.forEach(val => {
            this.waitingFuc[val] && this[val]();
          });
          this.waitingFuc = {};
        }, 10);
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
      this._componentInit();
    },
    watch: {
      multiple() {
        this._pushWaitingStack('clean', '_choiceInitType');
      },
      max() {
        this._pushWaitingStack('_rangeInit', 'valueInit');
      },
      min() {
        this._pushWaitingStack('_rangeInit', 'valueInit');
      },
      defaultValue() {
        this._pushWaitingStack('valueInit');
      },
      value() {
        !changeBySelf && !this.defaultValue && this._pushWaitingStack('valueInit');
        changeBySelf = false;
      },
    },
  };
</script>
