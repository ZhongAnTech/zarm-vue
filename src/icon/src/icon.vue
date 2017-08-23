<template lang="html">
  <i :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}-${type}`]: !!type,
    [`theme-${theme}`]: !!theme,
  }' @click='handleClick'></i>
</template>

<script>
export default {
  name: 'zaIcon',
  props: {
    prefixCls: {
      type: String,
      default: 'za-icon',
    },
    type: String,
    theme: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].indexOf(v) >= 0;
      },
      default: null,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>
