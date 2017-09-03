<template lang="html">
  <za-cell v-if='checkboxType === "cell"' :disabled='checkboxDisabled'>
    <za-icon slot='description' v-if='isChecked' type="right" :theme='checkboxDisabled ? null : theme'></za-icon>
    <input type="checkbox" :class='`${prefixCls}-input`' :disabled='checkboxDisabled' :value='label' v-model='model' @change='onValueChange' />
    <slot></slot>
  </za-cell>
  <za-button :class='{
    [`${prefixCls}`]: true,
    checked: isChecked,
    block: isBlock,
    disabled: checkboxDisabled,
    }' v-else-if='checkboxType === "button"' :theme='theme' size='xs' :block='block' :disabled='checkboxDisabled' :bordered='!isChecked'>
    <input type="checkbox" :class='`${prefixCls}-input`' :disabled='checkboxDisabled' :value='label' v-model='model' @change='onValueChange' />
    <slot></slot>
  </za-button>
  <div v-else :class='{
    [`${prefixCls}`]: true,
    checked: isChecked,
    disabled : checkboxDisabled,
    }' >
    <div :class='`${prefixCls}-wrapper`'>
      <span :class='`${prefixCls}-inner`' />
      <span :class='`${prefixCls}-text`'>
        <slot></slot>
      </span>
      <input type="checkbox" :class='`${prefixCls}-input`' :disabled='checkboxDisabled' :value='label' v-model='model' @change='onValueChange' />
    </div>
  </div>
</template>

<script>
// necessary when used alone
import zaButton from '@/button';
import zaIcon from '@/icon';
import zaCell from '@/cell';
import Emitter from '@/mixins/emitter';
import { defaultThemeValidator, enumGenerator } from '@/utils/validator';

export default {
  name: 'zaCheckbox',
  mixins: [Emitter],
  components: {
    zaButton,
    zaIcon,
    zaCell,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-checkbox',
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
          this.dispatch('zaCheckboxGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
          this.currentChecked = val;
        }
      },
    },
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'zaCheckboxGroup') {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },
    isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      }
    },
    store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    },
    checkboxType() {
      return this.isGroup ? this._checkboxGroup.type : this.type;
    },
    checkboxDisabled() {
      return this.isGroup ? (this._checkboxGroup.disabled || this.disabled) : this.disabled;
    },
    isBlock() {
      return this.isGroup ? this._checkboxGroup.block : this.block;
    },
  },
  methods: {
    onValueChange() {
      this.$emit('change', event);
      if (this.isGroup) {
        this.$nextTick(_ => { // eslint-disable-line no-unused-vars
          this.dispatch('zaCheckboxGroup', 'change', [event]);
        });
      }
    },
  },
};
</script>
