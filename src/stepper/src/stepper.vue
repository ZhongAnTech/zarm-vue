<template>
  <span :class='{
      [`${prefixCls}`]: true,
      [`${prefixCls}--${size}`]: !!size,
      [`${prefixCls}--${shape}`]: !!shape,
      [`${prefixCls}--disabled`]: !!disabled,
    }'>
    <span
      :class='{
        [`${prefixCls}__sub`]: true,
        [`${prefixCls}__sub-disabled`]: subDisabled,
      }'
      @click='handleSubClick'
    >
      <za-icon type='minus'></za-icon>
    </span>
    <input
      ref='stepper-input'
      maxlength="22"
      :class='`${prefixCls}__body`'
      type="tel"
      :disabled='disabled'
      :value='currentValue'
      @input='handleInput'
    />
    <span
      :class='{
        [`${prefixCls}__plus`]: true,
        [`${prefixCls}__plus-disabled`]: plusDisabled,
      }'
      @click='handlePlusClick'
    >
      <za-icon type='add'></za-icon>
    </span>
  </span>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import { enumGenerator } from '../../utils/validator';
import zaIcon from '../../icon';

@Component({
  name: 'zaStepper',
  components: {
    zaIcon,
  },
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
    value: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    'value'(val, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (val === this.currentValue) return;
      this.handleValue(val);
    },
  },
  created() {
    this.currentValue = this.$props.value || 0;
    this.lastValue = this.$props.value || 0;
  },
})
export default class Stepper extends Vue {
  currentValue: string | number = 0
  lastValue: string | number = 0
  get subDisabled() {
    const { min, disabled } = this.$props;
    return !!(typeof min === 'number' && this.currentValue <= min) || disabled;
  }
  get plusDisabled() {
    const { max, disabled } = this.$props;
    return !!(typeof max === 'number' && this.currentValue >= max) || disabled;
  }
  handleSubClick() {
    if (this.subDisabled) return;
    const { min, step } = this.$props;
    const { currentValue } = this;
    const value = Number(currentValue) - step;
    if (min !== null && value < min) {
      this.currentValue = min;
    } else {
      this.currentValue = value;
    }
    this.lastValue = this.currentValue;
    this.handleInputChange();
    this.handleAutoWidth(value);
  }
  handlePlusClick() {
    if (this.plusDisabled) return;
    const { max, step } = this.$props;
    const { currentValue } = this;
    const value = currentValue + step;
    if (max !== null && value > max) {
      this.currentValue = max;
    } else {
      this.currentValue = value;
    }
    this.lastValue = this.currentValue;
    this.handleInputChange();
    this.handleAutoWidth(value);
  }
  handleInput(event: any) {
    const value = Number(event.target.value);
    this.handleValue(value);
  }
  handleValue(value: any) {
    const { min, max } = this.$props;
    if (isNaN(value)) { // eslint-disable-line
      if (value === '-') {
        this.currentValue = '-';
        return;
      }
      this.currentValue = value; // first sign the value, so nextTick will update
      this.$nextTick(() => {
        this.currentValue = this.lastValue;
      });
    } else if (min !== null && value < min) {
      this.currentValue = value;
      this.$nextTick(() => {
        this.currentValue = min;
        this.lastValue = this.currentValue;
        this.handleInputChange();
      });
    } else if (max !== null && value > max) {
      this.currentValue = value;
      this.$nextTick(() => {
        this.currentValue = max;
        this.lastValue = this.currentValue;
        this.handleInputChange();
      });
    } else {
      this.currentValue = value;
      this.lastValue = this.currentValue;
      this.handleInputChange();
    }
    this.handleAutoWidth(value);
  }
  handleInputChange() {
    this.$emit('inputChange', Number(this.currentValue));
    this.$emit('input', Number(this.currentValue));
    this.$emit('change', Number(this.currentValue));
  }
  handleAutoWidth(val) {
    const _self: any = this;
    const numLen = Number(val.toString().length);
    const nowLen = (numLen * 10) + 20;
    if (numLen > 3) {
      _self.$refs['stepper-input'].style.width = `${nowLen}px`;
    } else {
      _self.$refs['stepper-input'].style.width = '50px';
    }
  }
}
</script>
