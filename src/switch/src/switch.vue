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
      ref="input"
      type="checkbox"
      :class='`${prefixCls}-input`'
      :disabled='disabled'
      :checked='currentCheck'
      :value='getVal(currentCheck)'
      @change='handleChange'
    />
     
  </span>
</template>

<script>
import { defaultThemeValidator, enumGenerator } from '@/utils/validator';

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
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'primary',
    },
    size: {
      type: String,
      validator: enumGenerator(['xl', 'lg', 'sm', 'xs']),
      default: null,
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
