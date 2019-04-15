<template>
  <svg
    :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}--${size}`]: !!size,
  }'
    :viewBox='`0 0 ${diameter} ${diameter}`'
    ref='svg'
  >
    <circle
      :class='`${prefixCls}__path`'
      :cx='half'
      :cy='half'
      :r='r'
      fill="none"
      :style='{ strokeWidth }'
    />
    <circle
      :class='`${prefixCls}__line`'
      :cx='half'
      :cy='half'
      :r='r'
      fill="none"
      :style='style'
    />
  </svg>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import { enumGenerator } from '../../utils/validator';

const diameter: number = 62;

@Component({
  name: 'zaActivityIndicator',
  props: {
    prefixCls: {
      type: String,
      default: 'za-activity-indicator',
    },
    size: {
      type: String,
      validator: enumGenerator(['xl', 'lg', 'sm', 'xs']),
      default: null,
    },
    strokeWidth: {
      type: Number,
      default: 5,
    },
    percent: {
      type: Number,
      default: 15,
    },
  },
})
export default class ActivityIndicator extends Vue {
  diameter = diameter;
  get half() {
    return this.diameter / 2;
  }
  get r() {
    const { strokeWidth } = this.$props;
    return (this.half - strokeWidth) / 2;
  }
  get style() {
    const round = 2 * Math.PI * this.r;
    const { percent, strokeWidth } = this.$props;
    return {
      strokeDasharray: `${(round * percent) / 100} ${round}`,
      strokeWidth,
    };
  }
}
</script>
