<template>
 <div :class='`${prefixCls}`' v-show='visible'>
  <div :class='`${prefixCls}-action`'>
   <div class='cancel-btn' @click='handlecancel'>{{cancelBtnText}}</div>
   <div class='ok-btn' @click='handleok'>{{okBtnText}}</div>
  </div>
  <div :class='`${prefixCls}-item`' v-for='item in monthItems'>
   <div :class='`${prefixCls}-month`'>{{item.monthText}}</div>
   <ul :class='`${prefixCls}-day`'>
    <li :key='index' v-for='(item, index) in titles'>{{item}}</li>
   </ul>
   <date-item :prefixCls='prefixCls' :min-date='minDate' :max-date='maxDate' :selected-suffix='selectedSuffix' :selected-value='selected' :month='item'
    @changed='setChanged' :multi-selected='multiSelected' name='calendar'></date-item>
  </div>
 </div>
</template>
<script>
import dateItem from './dateItem';
import dateUtil from './date';
import getContainer from '../../mixins/get-container';

const defaultMinDate = new Date();
const defaultMaxDate = dateUtil.addYears(new Date(), 1);

export default {
  name: 'zaCalendar',
  components: {
    dateItem,
  },
  mixins: [getContainer],
  props: {
    prefixCls: {
      type: String,
      default: 'za-calendar',
    },
    multiSelected: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    titles: {
      type: Array,
      default: () => ['日', '一', '二', '三', '四', '五', '六'],
    },
    dateItemFormat: {
      type: String,
      default: 'yyyy年MM月',
    },
    min: {
      type: Date,
      default: () => defaultMinDate,
    },
    max: {
      type: Date,
      default: () => defaultMaxDate,
    },
    months: {
      type: Number,
      default: 13,
    },
    okBtnText: {
      type: String,
      default: '确定',
    },
    cancelBtnText: {
      type: String,
      default: '取消',
    },
    selectedSuffix: String,
    selectedValue: Array,
  },
  data() {
    return {
      minDate: this.getMinDate(),
      maxDate: this.getMaxDate(),
      selected: this.getInitValue(),
      monthItems: [],
    };
  },
  created() {
    this.$nextTick(() => {
      this.createMonthItems();
    });
  },
  watch: {
    visible(val) {
      if (val === true) {
        // console.log(val) // eslint-disable-line
        this.selected = this.getInitValue();
        this.setRangeSelected();
      }
    },
  },
  methods: {
    getInitValue() {
      const value = this.selectedValue || [];
      // console.log(value) // eslint-disable-line
      return value;
    },
    getMinDate() {
      const value = this.min || defaultMinDate;
      return value;
    },
    getMaxDate() {
      const value = this.max || defaultMaxDate;
      return value;
    },
    setChanged(item) {
      const self = this;
      self.scrollY = document.body.scrollTop;
      if (self.multiSelected) {
        if (self.selected.length === 0) {
          self.selected[0] = item;
        } else if (self.selected.length === 1) {
          if (dateUtil.compareDate(self.selected[0], item) > 0) {
            self.selected[1] = self.selected[0];
            self.selected[0] = item;
          } else {
            self.selected[1] = item;
          }
        } else {
          self.selected = [item];
        }
        self.setRangeSelected();
        self.$emit('changed', self.selected);
      } else {
        self.selected = [item];
        self.setRangeSelected();
        self.$emit('changed', self.selected);
      }
    },
    setRangeSelected() {
      const self = this;
      const prefixCls = this.prefixCls;
      Array.prototype.forEach.call(self.$el.querySelectorAll('li[data-value]'), (el) => {
        const _date = el.getAttribute('data-value');
        if (_date === '') return;
        el.classList.remove(`${prefixCls}-selected`);
        el.classList.remove(`${prefixCls}-start-selected`);
        el.classList.remove(`${prefixCls}-end-selected`);
        el.classList.remove(`${prefixCls}-range-selected`);

        if (self.selected.length === 1) {
          if (_date === self.selected[0]) {
            el.classList.add(`${prefixCls}-selected`);
          }
          return;
        }

        if (dateUtil.compareDate(self.selected[0], self.selected[1]) < 0) {
          if (dateUtil.compareDate(_date, self.selected[0]) > 0
            && dateUtil.compareDate(_date, self.selected[1]) < 0) {
            el.classList.add(`${prefixCls}-range-selected`);
          } else if (_date === self.selected[0]) {
            el.classList.add(`${prefixCls}-start-selected`);
            el.classList.add(`${prefixCls}-selected`);
          } else if (_date === self.selected[1]) {
            el.classList.add(`${prefixCls}-end-selected`);
            el.classList.add(`${prefixCls}-selected`);
          } else {
            el.classList.remove(`${prefixCls}-range-selected`);
          }
        } else {
          if (dateUtil.compareDate(_date, self.selected[1]) > 0 && dateUtil.compareDate(_date, self.selected[0]) < 0) { // eslint-disable-line
            el.classList.add(`${prefixCls}-range-selected`);
          } else if (_date === self.selected[0]) {
            el.classList.add(`${prefixCls}-end-selected`);
            el.classList.add(`${prefixCls}-selected`);
          } else if (_date === self.selected[1]) {
            el.classList.add(`${prefixCls}-start-selected`);
            el.classList.add(`${prefixCls}-selected`);
          } else {
            el.classList.remove(`${prefixCls}-range-selected`);
          }
        }
      });
    },
    createMonthItems() {
      const self = this;
      const _minDate = self.minDate ? new Date(self.minDate) : new Date();
      let i = 0;
      let _start;

      while (i < self.months) {
        _start = self.setLastDate(_minDate, i);
        self.$set(self.monthItems, i, {
          monthText: dateUtil.formatDate(_start, self.dateItemFormat),
          date: self.resetDate(_start),
        });
        i++;// eslint-disable-line
      }
    },
    setLastDate(date, months) {
      const _date = new Date(date);
      _date.setDate(1);
      return dateUtil.addMonths(_date, months);
    },
    getDateYear(d) {
      return d.getFullYear();
    },
    getDateMonth(d) {
      const _m = d.getMonth() + 1;
      return _m > 12 ? 12 : _m;
    },
    resetDate(d) {
      const _date = d.setDate(1);
      return _date;
    },
    handlecancel() {
      this.$emit('update:visible', false);
    },
    handleok() {
      this.$emit('ok', this.selected);
      this.$emit('update:visible', false);
    },
  },
};
</script>