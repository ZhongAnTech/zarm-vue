<template lang="html">
  <span :class='{
      [`${prefixCls}`]: true,
      [`theme-${theme}`]: !!theme,
      [`size-${size}`]: !!size,
      checked: !!currentCheck,
      disabled,
    }'
  >
    <input
      type="checkbox"
      :class='`${prefixCls}-input`'
      :disabled='disabled'
      :checked='currentCheck'
      :value='currentCheck'
      @change='handleChange'
    />
  </span>
</template>

<script>
export default {
  name: 'zaSwitch',
  props: {
    prefixCls: {
      type: String,
      default: 'za-switch',
    },
    theme: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].indexOf(v) >= 0;
      },
      default: 'primary',
    },
    size: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['xl', 'lg', 'sm', 'xs'].indexOf(v) >= 0;
      },
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {},
  },
  data() {
    return {
      currentCheck: this.value || false,
    };
  },
  watch: {
    'value'(val, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (val === this.currentCheck) return;
      this.currentCheck = val;
    },
  },
  methods: {
    handleChange(event) {
      if (this.disabled) return;
      const checked = event.target.checked;
      this.$emit('input', checked);
      this.$emit('switch-change', event);
    },
  },
};
</script>
