<template lang="html">
  <div :class='{[`${prefixCls}`]: true,disabled}'>
    <div :class='`${prefixCls}-line`' ref='line'>
      <div :class='`${prefixCls}-line-bg`' :style='{width:`${offset}px`}'></div>
    </div>
    <za-drag
      :dragStart='onDragStart'
      :dragMove='onDragMove'
      :dragEnd='onDragEnd'>
      <div
        :class='`${prefixCls}-handle`'
        :aria-valuemin='min'
        :aria-valuemax='max'
        :aria-valuenow='value'
        :style='{left:`${offset}px`}'>
       <div :class='`${prefixCls}-handle-shadow`' ref="shadow"></div>
      </div>
     </za-drag>
  </div>
</template>

<script>
import zaDrag from '@/drag';
import zaTooltip from '@/tooltip';

export default {
  name: 'zaSlider',
  components: {
    zaDrag,
    zaTooltip,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-slider',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    defaultValue: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      value: this.getInitValue(0),
      offset: 0,
      tooltip: null,
      offsetStart: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    getInitValue(defaultValue) {
      if (this.defaultValue) {
        return this.defaultValue;
      }
      return defaultValue;
    },
    onDragStart() {
      const { disabled } = this;
      if (disabled) return;
      this.tooltip = this.$zaTooltip({ message: this.value });
      this.setShadowPosition();
    },
    onDragMove(event, { offsetX }) {
      const { disabled } = this;
      if (disabled) return;
      event.preventDefault();
      let offset = this.offsetStart + offsetX;
      if (offset < 0) {
        offset = 0;
        const value = this.getValueByOffset(offset);
        this.offset = offset;
        this.value = value;
        this.tooltip.message = value;
        this.setShadowPosition();
        return false;
      }
      if (offset > this.maxOffset()) {
        offset = this.maxOffset();
        const value = this.getValueByOffset(offset);
        this.offset = offset;
        this.value = value;
        this.tooltip.message = value;
        this.setShadowPosition();
        return false;
      }
      const value = this.getValueByOffset(offset);
      offset = this.getOffsetByValue(value);
      this.offset = offset;
      this.value = value;
      this.tooltip.message = value;
      this.setShadowPosition();
      return true;
    },
    onDragEnd(event, { offsetX }) {
      this.tooltip.close();
      if (Number.isNaN(offsetX)) return;
      this.offsetStart += offsetX;
      // const { onChange } = this;
      this.$emit('change', event, this.value);
    },
    /**
     * 通过偏移量确定值
     * @param  {number} offset 偏移量
     * @return {number}        值
     */
    getValueByOffset(offset) {
      const { min, max, step } = this;
      const percent = offset / this.maxOffset();
      const value = Math.round((min + ((max - min) * percent)) / step) * step;
      return Math.max(Math.min(value, max), min);
    },
    /**
     * 通过值获取偏移量
     * @param  {number} value 值
     * @return {number}       偏移量
     */
    getOffsetByValue(value) {
      const { min, max } = this;
      return this.maxOffset() * ((value - min) / (max - min));
    },
    /**
     * 获取最大偏移量
     */
    maxOffset() {
      // console.log(this.$refs.line.offsetWidth)// eslint-disable-line
      return this.$refs.line
        ? this.$refs.line.offsetWidth
        : 0;
    },
    /**
     * 初始化
     */
    init() {
      const offset = this.getOffsetByValue(this.value);
      this.offsetStart = offset;
      this.offset = offset;
    },
    getLineOffsetWidth() {
      return {
        width: `${this.offset}px`,
      };
    },
    getDragOffsetWidth() {
      return {
        left: `${this.offset}px`,
      };
    },
    setShadowPosition() {
      const rect = this.$refs.shadow.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
      const top = rect.top + scrollTop;
      this.tooltip.styleCls = {
        left: `${rect.left}px`,
        top: `${top}px`,
        width: `${rect.width}`,
      };
    },
  },
};
</script>