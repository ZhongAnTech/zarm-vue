<template lang="html">
  <div
    :class='prefixCls'
    @click='handleClick'>
    <div :class='{
      [`${prefixCls}-input`]: true,
      [`${prefixCls}-placeholder`]: !date,
      [`${prefixCls}-disabled`]: !!disabled,
    }'>
      <input type="hidden" :value='date' />
      {{date ? formatFn(date) : placeholder}}
    </div>
    <div :class='{
        [`${prefixCls}-container`]: true,
        [`${prefixCls}-hidden`]: !visible,
      }' @click.stop='() => {}'>
      <za-popup
        :visible='currentVisible'
        @close='onPopupClose'>
        <div :class='`${prefixCls}-wrapper`'>
          <div :class='`${prefixCls}-header`'>
            <div :class='`${prefixCls}-cancel`' @click='handleCancel'>{{cancelText}}</div>
            <div :class='`${prefixCls}-title`'>{{title}}</div>
            <div :class='`${prefixCls}-submit`' @click='handleOk'>{{okText}}</div>
          </div>
          <div :class='`${prefixCls}-mask-top`'>
            <div :class='`${prefixCls}-mask-bottom`'>
              <za-column-group
                :prefixCls='prefixCls'
                :disabled='disabled'
                :displayMember='displayMember'
                :valueMember='valueMember'
                :selectedValue='getValueCols().value'
                :data='getValueCols().cols'
                @change='handleChange'>
              </za-column-group>
            </div>
          </div>
        </div>
      </za-popup>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { getFormatter } from './utils';
import defaultLocale from '../locale/zh_CN';
import zaColumnGroup from './column-group';
import zaPopup from '../../popup';

const DATETIME = 'datetime';
const DATE = 'date';
const TIME = 'time';
const MONTH = 'month';
const YEAR = 'year';

// 获取当月天数
function getDaysInMonth(now) {
  return now.clone().endOf('month').date();
}

// 补齐格式
function pad(n) {
  return n < 10 ? `0${n}` : `${n}`;
}

// 转成moment格式
function getGregorianCalendar(arg) {
  return moment(arg);
}

export default {
  name: 'zaDatePicker',
  components: {
    zaPopup,
    zaColumnGroup,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-picker',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    title: {
      type: String,
      default: '请选择',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },
    mode: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return [YEAR, MONTH, DATE, TIME, DATETIME].indexOf(v) >= 0;
      },
      default: DATE,
    },
    defaultValue: {},
    value: {},
    disabled: {
      type: Boolean,
      default: false,
    },
    displayMember: {
      type: String,
      default: 'label',
    },
    valueMember: {
      type: String,
      default: 'value',
    },
    minuteStep: {
      type: Number,
      default: 1,
    },
    wheelDefaultValue: {},
    format: [String, Function],
    min: {},
    max: {},
    locale: {
      type: Object,
      default: () => defaultLocale,
    },
    formatMonth: Function,
    formatDay: Function,
  },
  watch: {
    visible(val, oldVal) { // eslint-disable-line no-unused-vars
      if (this.currentVisible === val) return;
      this.currentVisible = val;
    },
    value(val, oldVal) { // eslint-disable-line no-unused-vars
      if (this.date === val) return;
      this.date = this.isExtendMoment(val);
      this.oldDate = this.date;
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      date: this.getInitDate(),
      oldDate: this.getInitDate(),
      display: this.wheelDefaultValue && this.isExtendMoment(this.wheelDefaultValue),
    };
  },
  methods: {
    getInitDate() {
      const date = this.value || this.defaultValue;
      return this.isExtendMoment(date);
    },
    isExtendMoment(date) {
      const { mode } = this;
      if (date instanceof moment) {
        return date;
      }

      if (!date) {
        return '';
      }

      if (mode === TIME) {
        // 如果传递参数不合法，默认转换为时：分
        return moment(date).isValid() ? moment(date, 'YYYY-MM-DD HH:mm') : moment(date, 'HH:mm');
      }
      return moment(date, 'YYYY-MM-DD HH:mm');
    },
    handleClick(event) {
      if (this.disabled) return;
      this.$emit('click', event);
      this.toggle();
    },
    toggle() {
      if (this.disabled) {
        return;
      }
      this.currentVisible = !this.currentVisible;
      this.$emit('update:visible', this.currentVisible);
    },
    formatFn(date) {
      const { format } = this;
      const type = typeof format;

      if (type === 'string') {
        return date.format(format);
      }

      if (type === 'function') {
        return format(date);
      }

      return date.format(getFormatter(this.mode));
    },
    onPopupClose(reason) {
      if (reason === 'clickaway') {
        this.handleCancel();
      }
    },
    handleCancel(event) {
      this.toggle();
      this.date = this.oldDate;
      this.$emit('cancel', event);
    },
    handleOk() {
      this.date = this.getDate();
      this.oldDate = this.date;

      this.toggle();
      this.$emit('ok', this.formatFn(this.date));
      this.$emit('input', this.formatFn(this.date));
    },
    getDate() {
      return this.date || this.display || this.getMinDate() || moment(new Date());
    },

    getMinYear() {
      return this.getMinDate().year();
    },

    getMaxYear() {
      return this.getMaxDate().year();
    },

    getMinMonth() {
      return this.getMinDate().month();
    },

    getMaxMonth() {
      return this.getMaxDate().month();
    },

    getMinDay() {
      return this.getMinDate().date();
    },

    getMaxDay() {
      return this.getMaxDate().date();
    },

    getMinHour() {
      return this.getMinDate().hour();
    },

    getMaxHour() {
      return this.getMaxDate().hour();
    },

    getMinMinute() {
      return this.getMinDate().minute();
    },

    getMaxMinute() {
      return this.getMaxDate().minute();
    },

    getMinDate() {
      const minDate = this.isExtendMoment(this.min);
      return minDate || this.getDefaultMinDate();
    },

    getMaxDate() {
      const maxDate = this.isExtendMoment(this.max);
      return maxDate || this.getDefaultMaxDate();
    },

    getDefaultMinDate() {
      if (!this.defaultMinDate) {
        this.defaultMinDate = getGregorianCalendar([2000, 0, 1, 0, 0, 0]);
      }
      return this.defaultMinDate;
    },

    getDefaultMaxDate() {
      if (!this.defaultMaxDate) {
        this.defaultMaxDate = getGregorianCalendar([2030, 1, 1, 23, 59, 59]);
      }
      return this.defaultMaxDate;
    },
    handleChange(date, index) {
      const value = parseInt(date[index], 10);

      const { mode } = this;
      let newValue = this.getDate().clone();

      if (mode === DATETIME || mode === DATE || mode === YEAR || mode === MONTH) {
        switch (index) {
          case 0:
            newValue.year(value);
            break;
          case 1:
            newValue.month(value);
            break;
          case 2:
            newValue.date(value);
            break;
          case 3:
            newValue.hour(value);
            break;
          case 4:
            newValue.minute(value);
            break;
          default:
            break;
        }
      } else {
        switch (index) {
          case 0:
            newValue.hour(value);
            break;
          case 1:
            newValue.minute(value);
            break;
          default:
            break;
        }
      }

      newValue = this.clipDate(newValue);
      this.date = newValue;
      this.$emit('change', this.formatFn(newValue), index);
      // this.$emit('input', this.formatFn(newValue), index);
    },

    clipDate(date) {
      const { mode } = this;
      const minDate = this.getMinDate();
      const maxDate = this.getMaxDate();

      if (mode === DATETIME) {
        if (date.isBefore(minDate)) {
          return minDate.clone();
        }
        if (date.isAfter(maxDate)) {
          return maxDate.clone();
        }
      } else if (mode === DATE) {
        if (date.isBefore(minDate, 'day')) {
          return minDate.clone();
        }
        if (date.isAfter(maxDate, 'day')) {
          return maxDate.clone();
        }
      } else {
        const maxHour = maxDate.hour();
        const maxMinutes = maxDate.minute();
        const minHour = minDate.hour();
        const minMinutes = minDate.minute();
        const hour = date.hour();
        const minutes = date.minute();
        if (hour < minHour || (hour === minHour && minutes < minMinutes)) {
          return minDate.clone();
        }
        if (hour > maxHour || (hour === maxHour && minutes > maxMinutes)) {
          return maxDate.clone();
        }
      }
      return date;
    },

    getValueCols() {
      const { mode } = this;
      const date = this.getDate();

      let cols = [];
      let value = [];

      if (mode === YEAR) {
        return {
          cols: this.getDateData(),
          value: [`${date.year()}`],
        };
      }

      if (mode === MONTH) {
        return {
          cols: this.getDateData(),
          value: [`${date.year()}`, `${date.month()}`],
        };
      }

      if (mode === DATETIME || mode === DATE) {
        cols = this.getDateData();
        value = [`${date.year()}`, `${date.month()}`, `${date.date()}`];
      }

      if (mode === DATETIME || mode === TIME) {
        cols = cols.concat(this.getTimeData());
        value = value.concat([`${date.hour()}`, `${date.minute()}`]);
      }
      return {
        value,
        cols,
      };
    },

    getDateData() {
      const { locale, formatMonth, formatDay, mode } = this;
      const date = this.getDate();

      const selYear = date.year();
      const selMonth = date.month();
      const minDateYear = this.getMinYear();
      const maxDateYear = this.getMaxYear();
      const minDateMonth = this.getMinMonth();
      const maxDateMonth = this.getMaxMonth();
      const minDateDay = this.getMinDay();
      const maxDateDay = this.getMaxDay();
      const years = [];

      for (let i = minDateYear; i <= maxDateYear; i += 1) {
        years.push({
          value: `${i}`,
          label: `${i + locale.year}`,
        });
      }

      if (mode === YEAR) {
        return [years];
      }

      const months = [];
      let minMonth = 0;
      let maxMonth = 11;

      if (minDateYear === selYear) {
        minMonth = minDateMonth;
      }
      if (maxDateYear === selYear) {
        maxMonth = maxDateMonth;
      }
      for (let i = minMonth; i <= maxMonth; i += 1) {
        const label = formatMonth ? formatMonth(i, date) : `${i + 1 + locale.month}`;
        months.push({
          value: `${i}`,
          label,
        });
      }

      if (mode === MONTH) {
        return [years, months];
      }

      const days = [];
      let minDay = 1;
      let maxDay = getDaysInMonth(date);

      if (minDateYear === selYear && minDateMonth === selMonth) {
        minDay = minDateDay;
      }
      if (maxDateYear === selYear && maxDateMonth === selMonth) {
        maxDay = maxDateDay;
      }

      for (let i = minDay; i <= maxDay; i += 1) {
        const label = formatDay ? formatDay(i, date) : `${i + locale.day}`;
        days.push({
          value: `${i}`,
          label,
        });
      }
      return [
        years,
        months,
        days,
      ];
    },

    getTimeData() {
      let minHour = 0;
      let maxHour = 23;
      let minMinute = 0;
      let maxMinute = 59;
      const { mode, locale, minuteStep } = this;
      const date = this.getDate();

      const minDateMinute = this.getMinMinute();
      const maxDateMinute = this.getMaxMinute();
      const minDateHour = this.getMinHour();
      const maxDateHour = this.getMaxHour();
      const hour = date.hour();

      if (mode === DATETIME) {
        const year = date.year();
        const month = date.month();
        const day = date.date();

        const minDateYear = this.getMinYear();
        const maxDateYear = this.getMaxYear();
        const minDateMonth = this.getMinMonth();
        const maxDateMonth = this.getMaxMonth();
        const minDateDay = this.getMinDay();
        const maxDateDay = this.getMaxDay();

        if (minDateYear === year && minDateMonth === month && minDateDay === day) {
          minHour = minDateHour;
          if (minDateHour === hour) {
            minMinute = minDateMinute;
          }
        }
        if (maxDateYear === year && maxDateMonth === month && maxDateDay === day) {
          maxHour = maxDateHour;
          if (maxDateHour === hour) {
            maxMinute = maxDateMinute;
          }
        }
      } else {
        minHour = minDateHour;
        if (minDateHour === hour) {
          minMinute = minDateMinute;
        }
        maxHour = maxDateHour;
        if (maxDateHour === hour) {
          maxMinute = maxDateMinute;
        }
      }

      const hours = [];
      for (let i = minHour; i <= maxHour; i += 1) {
        hours.push({
          value: `${i}`,
          label: locale.hour ? `${i + locale.hour}` : pad(i),
        });
      }

      const minutes = [];

      for (let i = minMinute; i <= maxMinute; i += minuteStep) {
        minutes.push({
          value: `${i}`,
          label: locale.minute ? `${i + locale.minute}` : pad(i),
        });
      }

      return [
        hours,
        minutes,
      ];
    },
  },
};
</script>
