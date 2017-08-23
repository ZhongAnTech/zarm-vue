<template lang="html">
<ul :class="`${prefixCls}-date`">
	<li v-for="item in items" :class="{[`${prefixCls}-invalid`]:item.enabled==false,[`${prefixCls}-selected`]:isSelected(item)}" :data-value="item.date" @click="setChanged(item)"><span class="date-item">{{item.text}}</span>
		<span :class="`${prefixCls}-selected-suffix`" v-if="isSelected(item)">{{selectedSuffix}}</span>
	</li>
</ul>
</template>
<script>
import dateUtil from './date';

export default {
  name: 'za-calendar-dateitem',
  props: {
    prefixCls: {
      type: String,
      default: 'za-calendar',
    },
    minDate: String,
    maxDate: String,
    selectedSuffix: String,
    month: Object,
    multiSelected: Boolean,
  },
  data() {
    return {
      selectedValue: '',
      items: [],
      selected: [],
    };
  },
  created() {
    this.createDateItems();
  },
  watch: {
    month() {
      this.createDateItems();
    },
  },
  methods: {
    setChanged(item) {
      // const self = this;
      if (item.enabled === false) {
        return;
      }
      this.$emit('changed', item.date);
    },
    isSelected(item) {
      if (this.multiSelected) {
        return this.selected[0] === item.date || this.selected[1] === item.date;
      }
    },
    createDateItems() {
      const self = this;
      const num = 42;
      let _enabled = true;
      let count = 1;
      const _oldDate = new Date(self.month.date);
      const _date = new Date(_oldDate.setDate(count));
      let weekday = self.getDay(_date);
      // const _month = self.getMonth(_oldDate);

      for (let i = 0; i < num; i += 1) {
        weekday = self.getDay(_date);
        if (i < 7 && i < weekday) {
          self.$set(self.items, i, {
            enabled: false,
            date: '',
            text: '',
          });
        }
        _date.setDate(count);
        if (self.isCurrentMonth(_date, _oldDate)) {
          if (self.compareDate(_date, self.minDate) < 0) {
            _enabled = false;
          } else if (self.compareDate(_date, self.maxDate) > 0) {
            _enabled = false;
          } else {
            _enabled = true;
          }
          self.$set(self.items, i, {
            enabled: _enabled,
            date: dateUtil.formatDate(_date, 'yyyy-MM-dd'),
            text: _date.getDate(),
          });
        }

        count += 1;
      }
    },
    getYear(date) {
      return date.getFullYear();
    },
    getDate(date, i) {
      return date.getDate(i);
    },
    getDay(date) {
      return date.getDay();
    },
    getMonth(date) {
      return date.getMonth() + 1;
    },
    isCurrentMonth(date, oldDate) {
      const self = this;
      const y1 = self.getYear(date);
      const y2 = self.getYear(oldDate);
      const m1 = self.getMonth(date);
      const m2 = self.getMonth(oldDate);
      if (y1 === y2) {
        return m1 > m2 ? 0 : 1;
      }
      return y1 - y2 > 0 ? 0 : 1;
    },
    compareDate(a, b) {
      const start = new Date(a);
      const end = new Date(b);
      start.setHours(0);
      start.setMinutes(0);
      start.setSeconds(0);
      end.setHours(0);
      end.setMinutes(0);
      end.setSeconds(0);
      return start.getTime() - end.getTime();
    },
  },
};
</script>
