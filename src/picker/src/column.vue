<template lang="html">
  <div
    :class='`${prefixCls}-cascader`'>
    <div :class='`${prefixCls}-cascader-indicator`' ref='indicator' style={indicatorStyle} />
    <div :class='`${prefixCls}-cascader-content`' ref='content' :style='indicatorStyle'>
      <div
        v-for='(item, index) in data'
        :style='itemStyle'
        :class='getCls(item)'
        :key='item[valueMember]' >
        {{item[displayMember]}}
      </div>
    </div>
  </div>
</template>

<script>
/**
 * this is internal in most case
 */
import ZScroller from 'zscroller';
// import { isChildrenEqual } from './utils';

export default {
  name: 'zaColumn',
  props: {
    prefixCls: {
      type: String,
      default: 'za-picker',
    },
    indicatorStyle: Object,
    selectedValue: {},
    itemStyle: {},
    valueMember: String,
    displayMember: String,
    disabled: Boolean,
    data: {
      type: Array,
      required: true,
    },
  },
  watch: {
    selectedValue(val, oldVal) { // eslint-disable-line no-unused-vars
      this.zscroller.reflow();
      this.select(val);
      if (val !== this.currentSelectedValue) return;
      this.currentSelectedValue = val;
    },
    disabled(val) {
      this.$nextTick(() => {
        this.zscroller.setDisabled(val);
        this.zscroller.reflow();
      });
    },
  },
  data() {
    return {
      currentSelectedValue:
        this.selectedValue ||
        (this.data && this.data.length && this.data[0][this.valueMember]),
    };
  },
  mounted() {
    this.itemHeight = this.$refs.indicator.offsetHeight;
    // console.log('this.itemHeight -> ', this.indicator.offsetHeight);
    // compact
    this.$refs.content.style.padding = `${this.itemHeight * 3}px 0`;
    this.zscroller = new ZScroller(this.$refs.content, {
      scrollingX: false,
      snapping: true,
      penetrationDeceleration: 0.1,
      minVelocityToKeepDecelerating: 0.5,
      scrollingComplete: this.scrollingComplete.bind(this),
    });

    this.zscroller.setDisabled(this.disabled);
    this.zscroller.scroller.setSnapSize(0, this.itemHeight);
    this.select(this.currentSelectedValue);
  },
  beforeDestroy() {
    this.zscroller.destroy();
  },
  methods: {
    select(value) {
      const data = this.data;
      for (let i = 0, len = data.length; i < len; i += 1) {
        if (this.getItemValue(data[i], this.valueMember) === value) {
          this.selectByIndex(i);
          return;
        }
      }
      this.selectByIndex(0);
    },
    selectByIndex(index) {
      if (index < 0 || index >= this.data.length || !this.itemHeight) {
        return;
      }
      this.scrollTo(index * this.itemHeight);
    },
    scrollTo(top) {
      this.zscroller.scroller.scrollTo(0, top);
    },
    scrollingComplete() {
      const { top } = this.zscroller.scroller.getValues();
      if (top >= 0) {
        this.doScrollingComplete(top);
      }
    },
    doScrollingComplete(top) {
      let index = top / this.itemHeight;
      const floor = Math.floor(index);
      if (index - floor > 0.5) {
        index = floor + 1;
      } else {
        index = floor;
      }

      const data = this.data;
      index = Math.min(index, data.length - 1);
      const item = data[index];
      if (item) {
        this.fireValueChange(this.getItemValue(item, this.valueMember));
      } else if (process.env === 'development') {
        console.warn('item not found', data, index); // eslint-disable-line no-console
      }
    },
    fireValueChange(selectedValue) {
      if (selectedValue !== this.currentSelectedValue) {
        this.currentSelectedValue = selectedValue;
        this.$emit('change', selectedValue);
      }
    },
    getItemValue(item, key) {
      return item[key];
    },
    getCls(item) {
      const itemClassName = `${this.prefixCls}-cascader-item`;
      const selectedItemClassName = `${itemClassName} ${this.prefixCls}-cascader-item-selected`;
      return this.selectedValue === item[this.valueMember] ? selectedItemClassName : itemClassName;
    },
  },
};
</script>
