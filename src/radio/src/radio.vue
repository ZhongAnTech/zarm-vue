<template lang="html">
  <za-cell v-if='radioType === "cell"' :disabled='radioDisabled' isLink>
    <za-icon slot='description' v-if='isChecked' type="right" :theme='radioDisabled ? null : groupTheme'></za-icon>
    <input type="radio" :class='`${prefixCls}__input`' :disabled='radioDisabled' :value='value' v-model='model' @change='onValueChange' />
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
    <input type="radio" :class='`${prefixCls}__input`' :disabled='radioDisabled' :value='value' v-model='model' @change='onValueChange' />
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
      <input type="radio" :class='`${prefixCls}__input`' :disabled='radioDisabled' :value='value' v-model='model' @change='onValueChange' />
    </div>
  </div>
</template>

<script>
// necessary when used alone
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
    value: {},
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
      currentChecked: this.checked || false,
    };
  },
  computed: {
    model: {
      get() {
        return this.isGroup
          ? this.store : this.value !== undefined
            ? this.value : this.currentChecked;
      },

      set(val) {
        if (val === undefined) {
          val = true;
        }
        if (this.isGroup) {
          this.dispatch('zaRadioGroup', 'input', val);
        } else {
          this.$emit('input', val);
          this.currentChecked = val;
        }
      },
    },
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
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      }
      return this.model === this.value;
    },
    store() {
      return this.isGroup ? this._radioGroup.value : this.value;
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
      // first emit('input') to make the model up to date
      this.$nextTick(_ => { // eslint-disable-line no-unused-vars
        if (this.isGroup) {
          this.dispatch('zaRadioGroup', 'change', [this.model, event]);
        } else {
          this.$emit('change', this.model, event);
        }
      });
    },
    handleClick(event) {
      if (this.radioDisabled) return;
      if (this.isGroup) {
        this.onValueChange(event);
      } else {
        this.model = !this.model;
        this.onValueChange(event);
      }
    },
  },
};
</script>
