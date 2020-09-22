<template lang="html">
  <za-cell v-if='radioType === "cell"' :disabled='radioDisabled' isLink>
    <template v-slot:description>
      <za-icon v-if='isChecked' type="right" :theme='radioDisabled ? null : groupTheme'></za-icon>
    </template>
    <input type="radio" :class='`${prefixCls}__input`' :disabled='radioDisabled' :value='value' v-model='currentValue' @change='onValueChange' />
    <slot></slot>
  </za-cell>
  <za-button
    v-else-if='radioType === "button"'
    :class='{
      [`${prefixCls}`]: true,
      [`${prefixCls}--${groupTheme}`]: !!groupTheme,
      [`${prefixCls}--${groupShape}`]: !!groupShape,
      [`${prefixCls}--checked`]: isChecked,
      [`${prefixCls}--disabled`]: radioDisabled,
      [`${prefixCls}--block`]: isBlock,
    }' :theme='groupTheme' size='xs' :block='isBlock' :disabled='radioDisabled' :ghost='!isChecked' :shape='groupShape'>
    <input type="radio" :class='`${prefixCls}__input`' :disabled='radioDisabled' :value='value' v-model='currentValue' @change='onValueChange' />
    <slot></slot>
  </za-button>
  <div v-else :class='{
      [`${prefixCls}`]: true,
      [`${prefixCls}--${groupTheme}`]: !!groupTheme,
      [`${prefixCls}--checked`]: isChecked,
      [`${prefixCls}--disabled`]: radioDisabled,
    }'>
    <div :class='`${prefixCls}__wrapper`'>
      <span :class='`${prefixCls}__inner`'></span>
      <span :class='`${prefixCls}__text`' v-if='$slots.default'>
        <slot></slot>
      </span>
      <input type="radio" :class='`${prefixCls}__input`' :disabled='radioDisabled' :value='value' v-model='currentValue' @change='onValueChange' />
    </div>
  </div>
</template>

<script>
import zaButton from '@/button';
import zaIcon from '@/icon';
import zaCell from '@/cell';
import Emitter from '@/mixins/emitter';
import { enumGenerator } from '@/utils/validator';

export default {
  name: 'zaRadio',
  mixins: [Emitter],
  components: {
    zaButton,
    zaIcon,
    zaCell,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-radio',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      validator: enumGenerator(['button', 'cell']),
      default: null,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: String,
      validator: enumGenerator(['rect', 'radius', 'round']),
      default: 'radius',
    },
  },
  data() {
    return {
      currentValue: '',
      currentChecked: this.checked || false,
    };
  },
  mounted() {
    this.currentValue = this.isGroup
      ? this.store : this.value !== ''
        ? this.value : this.currentChecked;
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'zaRadioGroup') {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
    },
    isChecked() {
      return this.isGroup ? this._radioGroup.modelValue === this.value : this.currentChecked;
    },
    store() {
      return this.isGroup ? this._radioGroup.modelValue : this.value;
    },
    radioType() {
      return this.isGroup ? this._radioGroup.type : this.type;
    },
    radioDisabled() {
      return this.isGroup ? (this._radioGroup.disabled || this.disabled) : this.disabled;
    },
    isBlock() {
      return this.isGroup ? this._radioGroup.block : this.block;
    },
    groupShape() {
      return this.isGroup ? this._radioGroup.shape : this.shape;
    },
    groupTheme() {
      return this.isGroup ? this._radioGroup.theme : this.theme;
    },
  },
  methods: {
    onValueChange(event) {
      const self = this;
      if (self.radioDisabled) return;
      self.currentChecked = !self.currentChecked;
      if (self.isGroup) {
        self.dispatch('zaRadioGroup', 'update:modelValue', self.currentValue);
      } else {
        self.$emit('change', self.currentValue, self.value);
      }
    },
  },
};
</script>
