<template lang="html">
  <span :class='{
    [`${prefixCls}`]: true,
    [`theme-${theme}`]: !!theme,
    [`shape-${shape}`]: !!shape,
    }'>
    <slot></slot>
    <sup :class='{
      [`${prefixCls}-sup`]: true,
      [`${prefixCls}-sup-up`]: sup,
      }'
      @click='supClick'>
      {{text}}
      <slot name='text'></slot>
    </sup>
  </span>
</template>

<script>
export default {
  name: 'zaBadge',
  props: {
    prefixCls: {
      type: String,
      default: 'za-badge',
    },
    theme: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].indexOf(v) >= 0;
      },
      default: 'error',
    },
    shape: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['dot', 'radius', 'round', 'circle'].indexOf(v) >= 0;
      },
      default: null,
    },
    sup: {
      type: Boolean,
      default: false,
    },
    text: [String, Number],
  },
  methods: {
    supClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
