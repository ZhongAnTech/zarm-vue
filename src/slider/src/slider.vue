<template>
  <div :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}--disabled`]: !!disabled
    }'>
    <input
      type="hidden"
      :value="currentValue"
    />
    <za-drag
      :dragStart='onDragStart'
      :dragMove='onDragMove'
      :dragEnd='onDragEnd'
    >
      <div
        :aria-valuemin='min'
        :aria-valuemax='max'
        :aria-valuenow='value'
      >
        <div
          :class='`${prefixCls}__line`'
          ref='lineRef'
        >
          <div
            :class='`${prefixCls}__line-bg`'
            :style='{width:`${offset}px`}'
          ></div>
        </div>
        <div
          :class='`${prefixCls}__handle`'
          :style='{left:`${offset}px`}'
        >
          <div
            :class='`${prefixCls}__handle-shadow`'
            ref="shadowRef"
          ></div>
        </div>
      </div>
      <za-tooltip
        ref="tooltipRef"
        :styleCls="tooltip.styleCls"
        v-model:visible="tooltip.visible"
        :message="tooltip.message"
      ></za-tooltip>
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
    value: {},
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
      currentValue: this.getInitValue() || 0,
      offset: 0,
      tooltip: {
        visible: false,
        message: null,
        styleCls: {},
      },
      offsetStart: 0,
    };
  },
  watch: {
    modelValue(val, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (val === oldValue) return;
      this.currentValue = val;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    getInitValue() {
      const value = this.defaultValue ? this.defaultValue : this.modelValue;
      if (value) {
        return value;
      }
      return false;
    },
    onDragStart() {
      const { disabled } = this;
      if (disabled) return;
      this.tooltip.visible = true;
      this.tooltip.message = this.currentValue;
      this.setShadowPosition();
    },
    onDragMove(event, { offsetX }) {
      const { disabled } = this;
      if (disabled || !this.tooltip) return;
      if (Number.isNaN(offsetX)) return;
      event.preventDefault();
      let offset = this.offsetStart + offsetX;
      if (offset < 0) {
        offset = 0;
        const value = this.getValueByOffset(offset);
        this.offset = offset;
        this.$emit('update:modelValue', value);
        this.currentValue = value;
        this.tooltip.message = value;
        this.setShadowPosition();
        return false;
      }
      if (offset > this.maxOffset()) {
        offset = this.maxOffset();
        const value = this.getValueByOffset(offset);
        this.offset = offset;
        this.$emit('update:modelValue', value);
        this.currentValue = value;
        this.tooltip.message = value;
        this.setShadowPosition();
        return false;
      }
      const value = this.getValueByOffset(offset);
      offset = this.getOffsetByValue(value);
      this.offset = offset;
      this.$emit('update:modelValue', value);
      this.currentValue = value;
      this.tooltip.message = value;
      this.setShadowPosition();
      return true;
    },
    onDragEnd(event, { offsetX }) {
      if (this.tooltip.visible) {
        this.$refs.tooltipRef.close();
      }
      if (!offsetX || Number.isNaN(offsetX)) return;
      this.offsetStart += offsetX;
      this.$emit('updated', event, this.currentValue);
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
      return this.$refs.lineRef
        ? this.$refs.lineRef.offsetWidth
        : 0;
    },
    /**
     * 初始化
     */
    init() {
      const offset = this.getOffsetByValue(this.currentValue);
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
      const rect = this.$refs.shadowRef.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
      const top = rect.top + scrollTop;
      this.tooltip.styleCls = {
        left: `${rect.left}px`,
        top: `${top}px`,
        width: `${rect.width}`,
        zIndex: 100,
      };
    },
  },
};
</script>
