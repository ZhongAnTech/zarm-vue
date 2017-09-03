<template lang="html">
  <za-cell v-if='radioType === "cell"' :disabled='radioDisabled'>
    <za-icon slot='description' v-if='isChecked' type="right" :theme='radioDisabled ? null : theme'></za-icon>
    <input type="radio" :class='`${prefixCls}-input`' :disabled='radioDisabled' :value='label' v-model='model' @change='onValueChange' />
    <slot></slot>
  </za-cell>
  <za-button
    v-else
    :class='{
      [`${prefixCls}`]: true,
      checked: isChecked,
      disabled: radioDisabled,
      block: isBlock,
    }' :theme='theme' size='xs' :block='block' :disabled='radioDisabled' :bordered='!isChecked'>
    <input type="radio" :class='`${prefixCls}-input`' :disabled='radioDisabled' :value='label' v-model='model' @change='onValueChange' />
    <slot></slot>
  </za-button>
</template>

<script>
// necessary when used alone
import zaButton from '@/button';
import zaIcon from '@/icon';
import zaCell from '@/cell';
import Emitter from '@/mixins/emitter';
import { defaultThemeValidator, enumGenerator } from '@/utils/validator';

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
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'primary',
    },
    type: {
      type: String,
      validator: enumGenerator(['button', 'cell']),
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {},
    label: {},
    block: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentChecked: false,
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
        if (this.isGroup) {
          this.dispatch('zaRadioGroup', 'input', [val]);
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
      return false;
    },
    isChecked() {
      return this.model === this.label;
    },
    store() {
      return this._radioGroup ? this._radioGroup.value : this.value;
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
  },
  methods: {
    onValueChange(event) {
      this.$emit('change', event);
      if (this.isGroup) {
        this.$nextTick(_ => { // eslint-disable-line no-unused-vars
          this.dispatch('zaRadioGroup', 'change', [this._radioGroup.value]);
        });
      }
    },
  },
};
</script>
