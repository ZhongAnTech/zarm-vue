<template lang="html">
  <div :class='{
    [`${prefixCls}`]: true,
    [`theme-${theme}`]: !!theme,
    block,
  }'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaMessage',
  props: {
    prefixCls: {
      type: String,
      default: 'za-message',
    },
    block: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].indexOf(v) >= 0;
      },
      default: 'primary',
    },
  },
};
</script>
