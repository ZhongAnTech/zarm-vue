<template lang="html">
  <span :class='{
      [`${prefixCls}`]: true,
      [`theme-${theme}`]: !!theme,
      [`size-${size}`]: !!size,
      checked: !!currentCheck,
      [`${className}`]:!!className,
      disabled,
    }'    
  >
    <input
      type="checkbox"
      :class='`${prefixCls}-input`'
      :disabled='disabled'
      :checked='currentCheck'
      :value='currentCheck?onName:offName'
      @change='handleChange'
    />
  </span>
</template>

<script>
import { defaultThemeValidator, enumGenerator } from '@/utils/validator';
// import { valid } from 'semver';

const activeName = 'on';
const inActiveName = 'off';
export default {
  name: 'zaSwitch',
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
    className: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      validator: enumGenerator([activeName, inActiveName]),
      default: null,
    },
    checked: {
      type: Boolean,
      default: null,
    },
    onName: {
      type: String,
      default: activeName,
    },
    offName: {
      type: String,
      default: inActiveName,
    },
  },
  data() {
    return {
      currentCheck: this.getChecked(false),
    };
  },
  mounted() {
    if (typeof this.checked !== 'object') {
      if (!((this.checked && this.value === this.onName) || (!this.checked && this.value === this.offName))) {
        this.$emit('input', this.checked ? this.onName : this.offName);
      }
    }
  },
  watch: {
    'value'(val, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      this.currentCheck = val === this.onName;
    },
    'checked'(val, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      this.currentCheck = val;
      this.$emit('input', val ? this.onName : this.offName);
    },
  },
  methods: {
    getChecked(defaultVal) {
      if (typeof this.checked !== 'object') {
        return this.checked;
      }
      if (typeof this.value !== 'object' && this.value && this.value === this.onName) {
        return true;
      }
      if (this.defaultChecked) {
        this.$emit('input', this.onName);
        return true;
      }
      this.$emit('input', this.offName);
      return defaultVal;
    },
    handleChange(event) {
      if (this.disabled) return;
      const checked = event.target.checked;
      this.currentCheck = checked;
      this.$emit('input', checked ? this.onName : this.offName);
      this.$emit('change', event);
    },
  },
};
</script>
