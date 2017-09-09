<template lang="html">
  <za-cell v-if='checkboxType === "cell"' :disabled='checkboxDisabled' @click='handleClick' isLink>
    <div :class='cls'>
      <div :class='`${prefixCls}-wrapper`'>
        <span :class='`${prefixCls}-inner`'></span>
        <span :class='`${prefixCls}-text`'>
          <slot></slot>
        </span>
        <input type="checkbox" :class='`${prefixCls}-input`' :disabled='checkboxDisabled' :value='label' v-model='model'/>
      </div>
    </div>
  </za-cell>
  <za-button
    :class='cls'
    v-else-if='checkboxType === "button"'
    :theme='theme'
    size='xs'
    :block='block || isBlock'
    :disabled='checkboxDisabled'
    :bordered='!isChecked'>
    <input type="checkbox" :class='`${prefixCls}-input`' :disabled='checkboxDisabled' :value='label' v-model='model' @change='onValueChange' />
    <slot></slot>
  </za-button>
  <div :class='cls' v-else>
    <div :class='`${prefixCls}-wrapper`'>
      <span :class='`${prefixCls}-inner`'></span>
      <span :class='`${prefixCls}-text`'>
        <slot></slot>
      </span>
      <input type="checkbox" :class='`${prefixCls}-input`' :disabled='checkboxDisabled' :value='label' v-model='model' @change='onValueChange'/>
    </div>
  </div>
</template>

<script>
// necessary when used alone
import zaButton from '@/button';
import zaCell from '@/cell';
import Emitter from '@/mixins/emitter';
import { defaultThemeValidator, enumGenerator } from '@/utils/validator';

export default {
  name: 'zaCheckbox',
  mixins: [Emitter],
  components: {
    zaButton,
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
    cls() {
      const { prefixCls, theme, shape, size, checkboxDisabled, isChecked } = this;
      return {
        [`${prefixCls}`]: true,
        [`theme-${theme}`]: !!theme,
        [`shape-${shape}`]: !!shape,
        [`size-${size}`]: !!size,
        checked: !!isChecked,
        disabled: !!checkboxDisabled,
      };
    },
  },
  methods: {
    onValueChange(event) {
      // first emit('input') to make the model up to date
      this.$nextTick(_ => { // eslint-disable-line no-unused-vars
        if (this.isGroup) {
          this.dispatch('zaCheckboxGroup', 'change', [[...this.model], event]);
        } else {
          this.$emit('change', this.model, event);
        }
      });
    },
    handleClick(event) {
      if (this.checkboxDisabled) return;
      if (this.isGroup) {
        const index = this.model.indexOf(this.label);
        if (index >= 0) {
          this.model.splice(index, 1);
        } else {
          this.model.push(this.label);
        }
        this.onValueChange(event);
      } else {
        this.model = !this.model;
        this.onValueChange(event);
      }
    },
  },
};
</script>
