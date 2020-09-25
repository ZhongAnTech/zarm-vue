<template>
  <div :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}--${theme}`]: !!theme,
    [`${prefixCls}--${type}`]: !!type,
    }'>
    <div v-if="type==='circle' || type==='semi-circle'" :class='`${prefixCls}__inner`'>
      <svg :class='{
        [`${prefixCls}`]: true,
        [`${prefixCls}__${type}`]: true,
        [`${prefixCls}--${theme}`]: !!theme,
      }'
        :viewBox='viewBox'
        ref='svg'>
        <path
          :class='`${prefixCls}__track`'
          :d='path'
          :stroke-width='calStrokeWidth'
          :stroke-linecap='strokeLinecap'
        />
        <path
          :d='path'
          :class='`${prefixCls}__line`'
          :stroke-width='calStrokeWidth'
          :stroke-linecap='strokeLinecap'
          :stroke-dasharray='dasharray'
          :stroke-dashoffset='dashoffset'
        />
      </svg>
    </div>

    <div v-else :class='`${prefixCls}__inner`' :style='{height: `${strokeWidth}px`, borderRadius: `${borderR}px`}'>
      <div :class='`${prefixCls}__bg`' :style='{ width: `${percent}%`, borderRadius: `${borderR}px`}' />
    </div>

    <div :class='`${prefixCls}__text`'>
      <slot></slot>
    </div>

  </div>
</template>

<script>
import { defaultThemeValidator, enumGenerator } from '@/utils/validator';

const diameter = 62;
export default {
  name: 'zaProgress',
  data() {
    return {
      diameter,
      calStrokeWidth: 0,
    };
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-progress',
    },
    shape: {
      type: String,
      validator: enumGenerator(['rect', 'round']),
      default: 'rect',
    },
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'primary',
    },
    weight: {
      type: [String, Number],
      default: 'normal',
    },
    percent: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['line', 'circle', 'semi-circle'].indexOf(v) >= 0;
      },
      default: 'line',
    },
  },
  mounted() {
    if (this.type !== 'line') {
      this.calStrokeWidth = (this.diameter / this.$refs.svg.clientWidth) * this.strokeWidth;
    }
  },
  watch: {
    weight() {
      if (this.type !== 'line') {
        this.calStrokeWidth = (this.diameter / this.$refs.svg.clientWidth) * this.strokeWidth;
      }
    },
  },
  computed: {
    strokeWidth() {
      return (typeof this.weight) === 'number' ? this.weight : this.weight === 'normal' ? 8 : 4;
    },
    borderR() {
      return this.shape === 'round' ? this.strokeWidth : 0;
    },
    half() {
      return this.diameter / 2;
    },
    r() {
      return this.half + (this.calStrokeWidth / 2);
    },
    strokeLinecap() {
      return this.shape === 'round' ? 'round' : 'butt';
    },
    viewBox() {
      return this.type === 'semi-circle' ? `
      0 0 ${this.diameter + this.calStrokeWidth} ${(this.diameter + this.calStrokeWidth) / 2}`
        : `
      0 0 ${this.diameter + this.calStrokeWidth} ${this.diameter + this.calStrokeWidth}`;
    },
    dasharray() {
      return this.type === 'circle' ? Math.PI * this.diameter : Math.PI * (this.diameter / 2);
    },
    dashoffset() {
      return ((this.dasharray * (100 - this.percent)) / 100);
    },
    path() {
      return this.type === 'circle' ? `
        M${this.r}, ${this.r}
        m0 ${-this.half}
        a${this.half} ${this.half} 0 1 1 0 ${diameter}
        a${this.half} ${this.half} 0 1 1 0 ${-diameter}`
        : `
        M${this.r}, ${this.r}
        m${-this.half} 0
        a${this.half} ${this.half} 0 0 1 ${this.diameter} 0`;
    },
  },
};
</script>
