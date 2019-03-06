<template lang="html">
  <span :class='{
      [`${prefixCls}`]: true,
      [`${prefixCls}--${theme}`]: !!theme,
      [`${prefixCls}--checked`]: !!currentCheck,
      [`${prefixCls}--disabled`]: disabled,
    }'    
  >
    <input
      ref="input"
      type="checkbox"
      :class='`${prefixCls}__input`'
      :disabled='disabled'
      :checked='currentCheck'
      :value='getVal(currentCheck)'
      @change='handleChange'
    />
     
  </span>
</template>

<script>

const activeName = 'on';
const inActiveName = 'off';
export default {
  name: 'zaSwitch',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-switch',
    },
    defaultChecked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      currentCheck: this.getChecked(false),
      theme: 'primary',
    };
  },
  watch: {
    'checked'(val, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (val === this.currentCheck) return;
      this.currentCheck = val;
    },
  },
  methods: {
    getChecked(defaultChecked) {
      if (this.checked) {
        return !defaultChecked;
      }
      if (this.defaultChecked) {
        return !defaultChecked;
      }
      return defaultChecked;
    },
    getVal(checked) {
      return checked ? activeName : inActiveName;
    },
    handleChange(event) {
      if (this.disabled) return;
      const checked = event.target.checked;
      this.currentCheck = checked;
      this.$emit('change', checked);
    },
  },
};
</script>
