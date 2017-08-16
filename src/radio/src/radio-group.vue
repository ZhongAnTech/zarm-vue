<template lang="html">
  <div :class="{
      [`${prefixCls}`]: true,
      [`shape-${shape}`]: !!shape,
      'is-compact': compact,
      block,
      disabled,
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaRadioGroup',
  props: {
    prefixCls: {
      type: String,
      default: 'za-radio-group',
    },
    theme: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].indexOf(v) >= 0;
      },
      default: 'primary',
    },
    type: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['button', 'cell'].indexOf(v) >= 0;
      },
      default: null,
    },
    shape: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['radius', 'round'].indexOf(v) >= 0;
      },
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    value: {},
  },
};
</script>
