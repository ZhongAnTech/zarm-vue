<template>
<div :class="{[`${prefixCls}`]:true}" v-if="visible">
	<div :class="`${prefixCls}-action`">
		<div class="cancel-btn">取消</div>
		<div class="ok-btn">完成</div>
	</div>
	<div :class="`${prefixCls}-item`" v-for="item in monthItems">
		<div :class="`${prefixCls}-month`">{{item.monthText}}</div>
		<ul :class="`${prefixCls}-day`">
			<li>日</li>
			<li>一</li>
			<li>二</li>
			<li>三</li>
			<li>四</li>
			<li>五</li>
			<li>六</li>
		</ul>
		<date-item :min-date="minDate" :max-date="maxDate" :selected-suffix="selectedSuffix" :selected-value="selectedValue" :month="item" @changed="onChanged" :multi-selected="multiSelected" name='calendar'></date-item>
	</div>
</div>
</template>
<script>
import dateItem from './dateItem';
import dateUtil from './date';

export default {
  name: 'za-calendar',
  components: {
    dateItem,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-calendar',
    },
    multiSelected: Boolean,
    visible: Boolean,
    selectedSuffix: String,
    selectedValue: String,
    onClick: Function,
    callback: Function,
  },
  data() {
    return {
      minDate: '',
      maxDate: '',
      months: 12,
      selected: [],
      monthItems: [],
    };
  },
  created() {
    this.$nextTick(() => {
      this.createMonthItems();
    });
  },
  watch: {
    selected() {
      this.setRangeSelected();
    },
    minDate() {
      this.createMonthItems();
    },
    maxDate() {
      this.createMonthItems();
    },
  },
  methods: {
    onChanged(item) {
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
          self.selected[0] = item;
          self.selected.splice(1);
        }
        if (self.onClick) self.onClick(item);
        self.setRangeSelected();
      } else {
        self.selected[0] = item;
        self.setRangeSelected();
        if (self.onClick) self.onClick(item);
        self.$emit('changed', item);
      }
    },
    setRangeSelected() {
      const self = this;
      Array.prototype.forEach.call(self.$el.querySelectorAll('li[data-value]'), el => {
        const _date = el.getAttribute('data-value');
        if (_date === '') return;
        el.classList.remove(`${this.prefixCls}-selected`);
        el.classList.remove(`${this.prefixCls}-start-selected`);
        el.classList.remove(`${this.prefixCls}-end-selected`);
        el.classList.remove(`${this.prefixCls}-range-selected`);

        if (self.selected.length === 1) {
          if (_date === self.selected[0]) {
            el.classList.add(`${this.prefixCls}-selected`);
          }
          return;
        }

        if (dateUtil.compareDate(self.selected[0], self.selected[1]) < 0) {
          if (
            dateUtil.compareDate(_date, self.selected[0]) > 0 &&
            dateUtil.compareDate(_date, self.selected[1]) < 0
          ) {
            el.classList.add(`${this.prefixCls}-range-selected`);
          } else if (_date === self.selected[0]) {
            el.classList.add(`${this.prefixCls}-start-selected`);
            el.classList.add(`${this.prefixCls}-selected`);
          } else if (_date === self.selected[1]) {
            el.classList.add(`${this.prefixCls}-end-selected`);
            el.classList.add(`${this.prefixCls}-selected`);
          } else {
            el.classList.remove(`${this.prefixCls}-range-selected`);
          }
        } else {
          const flag =
            dateUtil.compareDate(_date, self.selected[1]) > 0 &&
            dateUtil.compareDate(_date, self.selected[0]) < 0;
          if (flag) {
            el.classList.add(`${this.prefixCls}-range-selected`);
          } else if (_date === self.selected[0]) {
            el.classList.add(`${this.prefixCls}-end-selected`);
            el.classList.add(`${this.prefixCls}-selected`);
          } else if (_date === self.selected[1]) {
            el.classList.add(`${this.prefixCls}-start-selected`);
            el.classList.add(`${this.prefixCls}-selected`);
          } else {
            el.classList.remove(`${this.prefixCls}-range-selected`);
          }
        }
      });
    },
    createMonthItems() {
      const self = this;
      const _minDate = self.minDate ? new Date(self.minDate) : new Date();
      let i = 0;
      while (i < self.months) {
        const _start = self.setLastDate(_minDate, i);
        // const _next = dateUtil.compareDate(_start, _maxDate);
        self.$set(self.monthItems, i, {
          monthText: `${self.getDateYear(_start)}年${self.getDateMonth(_start)}月`,
          date: self.resetDate(_start),
        });
        i += 1;
      }
    },
    setLastDate(date, months) {
      const _date = new Date(date);
      const _year = _date.getFullYear();
      const _month = _date.getMonth() + months;
      const _day = _date.getDate();
      return new Date(_year, _month, _day);
    },
    getDateYear(d) {
      return d.getFullYear();
    },
    getDateMonth(d) {
      const _m = d.getMonth() + 1;
      return _m > 12 ? 12 : _m;
    },
    resetDate(d) {
      return d.setDate(1);
    },
  },
};
</script>
