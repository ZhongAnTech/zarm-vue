<template lang="html">
  <span :class='{
      [`${prefixCls}`]: true,
      [`theme-${theme}`]: !!theme,
      [`size-${size}`]: !!size,
      [`shape-${shape}`]: !!shape,
      disabled,
    }'
  >
    <span :class='{
        [`${prefixCls}-sub`]: true,
        disabled: subDisabled,
      }'
      @click='handleSubClick'
    >
      <za-icon type='minus'></za-icon>
    </span>
    <input :class='`${prefixCls}-body`' type="tel" :disabled='disabled' :value='currentValue' @input='handleInput'/>
    <span :class='{
        [`${prefixCls}-plus`]: true,
        disabled: plusDisabled,
      }'
      @click='handlePlusClick'
    >
      <za-icon type='add'></za-icon>
    </span>
  </span>
</template>

<script>
import zaIcon from '../../icon';

export default {
  components: {
    zaIcon,
  },
  name: 'zaStepper',
  props: {
    prefixCls: {
      type: String,
      default: 'za-stepper',
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
    shape: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['radius', 'circle'].indexOf(v) >= 0;
      },
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    subDisabled() {
      return !!(typeof this.min === 'number' && this.currentValue <= this.min) || this.disabled;
    },
    plusDisabled() {
      return !!(typeof this.max === 'number' && this.currentValue >= this.max) || this.disabled;
    },
  },
  watch: {
    'value'(val, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (val === this.currentValue) return;
      this.handleValue(val);
    },
  },
  data() {
    return {
      currentValue: this.value || 0,
      lastValue: this.value || 0,
    };
  },
  methods: {
    handleSubClick(event) {
      if (this.subDisabled) return;
      const value = this.currentValue - this.step;
      if (this.min !== null && value < this.min) {
        this.currentValue = this.min;
      } else {
        this.currentValue = value;
      }
      this.lastValue = this.currentValue;
      this.$emit('input', Number(this.currentValue));
      this.$emit('change', event);
    },
    handlePlusClick(event) {
      if (this.plusDisabled) return;
      const value = this.currentValue + this.step;
      if (this.max !== null && value > this.max) {
        this.currentValue = this.max;
      } else {
        this.currentValue = value;
      }
      this.lastValue = this.currentValue;
      this.$emit('input', Number(this.currentValue));
      this.$emit('change', event);
    },
    handleInput(event) {
      const value = Number(event.target.value);
      this.handleValue(value);
    },
    handleValue(value) {
      if (isNaN(value)) {
        if (event.target.value === '-') {
          this.currentValue = '-';
          return;
        }
        this.currentValue = value; // first sign the value, so nextTick will update
        this.$nextTick(() => {
          this.currentValue = this.lastValue;
        });
      } else if (this.min !== null && value < this.min) {
        this.currentValue = value;
        this.$nextTick(() => {
          this.currentValue = this.min;
          this.lastValue = this.currentValue;
          this.$emit('input', Number(this.currentValue));
          this.$emit('change', event);
        });
      } else if (this.max !== null && value > this.max) {
        this.currentValue = value;
        this.$nextTick(() => {
          this.currentValue = this.max;
          this.lastValue = this.currentValue;
          this.$emit('input', Number(this.currentValue));
          this.$emit('change', event);
        });
      } else {
        this.currentValue = value;
        this.lastValue = this.currentValue;
        this.$emit('input', Number(this.currentValue));
        this.$emit('change', event);
      }
    },
  },
};
</script>
