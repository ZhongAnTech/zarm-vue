<template lang="html">
  <span :class='{
      [`${prefixCls}`]: true,
      [`${prefixCls}--${size}`]: !!size,
      [`${prefixCls}--${shape}`]: !!shape,
      [`${prefixCls}--disabled`]: !!disabled,
    }'
  >
    <span :class='{
        [`${prefixCls}__sub`]: true,
        [`${prefixCls}__sub-disabled`]: subDisabled,
      }'
      @click='handleSubClick'
    >
      <za-icon type='minus'></za-icon>
    </span>
    <input ref='stepper-input' maxlength="22" :class='`${prefixCls}__body`' type="tel" :disabled='disabled' :value='currentValue' @input='handleInput'/>
    <span :class='{
        [`${prefixCls}__plus`]: true,
        [`${prefixCls}__plus-disabled`]: plusDisabled,
      }'
      @click='handlePlusClick'
    >
      <za-icon type='add'></za-icon>
    </span>
  </span>
</template>

<script>
import { enumGenerator } from '@/utils/validator';
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
    size: {
      type: String,
      validator: enumGenerator(['md', 'sm']),
      default: 'md',
    },
    shape: {
      type: String,
      validator: enumGenerator(['radius', 'circle']),
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
    modelValue: {
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
    'modelValue'(val, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (val === this.currentValue) return;
      this.handleValue(val);
    },
  },
  data() {
    return {
      currentValue: this.modelValue || 0,
      lastValue: this.modelValue || 0,
    };
  },
  methods: {
    handleSubClick() {
      if (this.subDisabled) return;
      const value = this.currentValue - this.step;
      if (this.min !== null && value < this.min) {
        this.currentValue = this.min;
      } else {
        this.currentValue = value;
      }
      this.lastValue = this.currentValue;
      this.handleInputChange();
      this.handleAutoWidth(value);
    },
    handlePlusClick() {
      if (this.plusDisabled) return;
      const value = this.currentValue + this.step;
      if (this.max !== null && value > this.max) {
        this.currentValue = this.max;
      } else {
        this.currentValue = value;
      }
      this.lastValue = this.currentValue;
      this.handleInputChange();
      this.handleAutoWidth(value);
    },
    handleInput(event) {
      const value = Number(event.target.value);
      this.handleValue(value, event);
    },
    handleValue(value, event) {
      if (Number.isNaN(value)) {
        if (value === '-') {
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
          this.handleInputChange(event);
        });
      } else if (this.max !== null && value > this.max) {
        this.currentValue = value;
        this.$nextTick(() => {
          this.currentValue = this.max;
          this.lastValue = this.currentValue;
          this.handleInputChange(event);
        });
      } else {
        this.currentValue = value;
        this.lastValue = this.currentValue;
        this.handleInputChange(event);
      }
      this.handleAutoWidth(value);
    },
    handleInputChange(event) {
      this.$emit('inputChange', Number(this.currentValue));
      this.$emit('update:modelValue', Number(this.currentValue));
      this.$emit('change', event);
    },
    handleAutoWidth(val) {
      const numLen = Number(val.toString().length);
      const nowLen = (numLen * 10) + 20;
      if (numLen > 3) {
        this.$refs['stepper-input'].style.width = `${nowLen}px`;
      } else {
        this.$refs['stepper-input'].style.width = '50px';
      }
    },
  },
};
</script>
