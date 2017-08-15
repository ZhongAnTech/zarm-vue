<template lang="html">
  <svg :class='{
    [`${prefixCls}`]: true,
    [`theme-${theme}`]: !!theme,
    [`size-${size}`]: !!size,
  }'
    :viewBox='`0 0 ${diameter} ${diameter}`'
    ref='svg'>
    <circle :class='`${prefixCls}-path`' :cx='half' :cy='half' :r='r' fill="none" :style='{ strokeWidth }' />
    <circle :class='`${prefixCls}-line`' :cx='half' :cy='half' :r='r' fill="none" :style='style' />
  </svg>
</template>

<script>

const diameter = 100;

export default {
  name: 'zaSpinner',
  props: {
    prefixCls: {
      type: String,
      default: 'za-spinner',
    },
    size: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['xl', 'lg', 'sm', 'xs'].indexOf(v) >= 0;
      },
      default: null,
    },
    theme: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].indexOf(v) >= 0;
      },
      default: 'primary',
    },
    strokeWidth: {
      type: Number,
      default: 4,
    },
    percent: {
      type: Number,
      default: 15,
    },
  },
  data() {
    return {
      diameter,
    };
  },
  computed: {
    half() {
      return this.diameter / 2;
    },
    r() {
      return this.half - (this.strokeWidth / 2);
    },
    style() {
      const round = 2 * Math.PI * this.r;
      return {
        strokeDasharray: `${(round * this.percent) / 100} ${round}`,
        strokeWidth: this.strokeWidth,
      };
    },
  },
};
</script>

<style lang="css">
</style>
