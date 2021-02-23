<template>
  <za-cell
    v-if='checkboxType === "cell"'
    :disabled='checkboxDisabled'
    isLink
  >
    <div :class='{
      [`${prefixCls}--checked`]: !!isChecked,
    }'>
      <div :class='`${prefixCls}__wrapper`'>
        <span :class='`${prefixCls}__inner`'></span>
        <span :class='`${prefixCls}__text`'>
          <slot></slot>
        </span>
        <input
          type="checkbox"
          :class='`${prefixCls}__input`'
          :disabled='checkboxDisabled'
          :value='value'
          v-model='currentValue'
          @change.stop="onValueChange"
        />
      </div>
    </div>
  </za-cell>
  <za-button
    :class='cls'
    v-else-if='checkboxType === "button"'
    :theme='theme'
    size='xs'
    :block='block || isBlock'
    :shape='shape || isShape'
    :disabled='checkboxDisabled'
    :ghost='!isChecked'
  >
    <input
      type="checkbox"
      :class='`${prefixCls}__input`'
      :disabled='checkboxDisabled'
      :value='value'
      v-model='currentValue'
      @change.stop="onValueChange"
    />
    <slot></slot>
  </za-button>
  <div
    :class='cls'
    v-else
  >
    <div :class='`${prefixCls}__wrapper`'>
      <span :class='`${prefixCls}__inner`'></span>
      <span :class='`${prefixCls}__text`'>
        <slot></slot>
      </span>
      <input
        type="checkbox"
        :class='`${prefixCls}__input`'
        :disabled='checkboxDisabled'
        :value='value'
        v-model='currentValue'
        @change.stop="onValueChange"
      />
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
    size: {
      type: String,
      validator: enumGenerator(['xl', 'lg', 'sm', 'xs']),
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
    block: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: String,
      validator: enumGenerator(['rect', 'radius', 'round']),
      default: null,
    },
  },
  data() {
    return {
      currentValue: [],
      currentChecked: this.checked || false,
    };
  },
  mounted() {
    if (this.isGroup) {
      this.currentValue = this.store;
      this.currentChecked = this._checkboxGroup.modelValue.includes(this.value);
    } else {
      this.currentValue = this.currentChecked;
    }
  },
  computed: {
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
      if (this.isGroup) {
        return this._checkboxGroup.modelValue.indexOf(this.value) > -1;
      }
      if (Array.isArray(this.currentValue)) {
        return this.currentValue.indexOf(this.value) > -1;
      }
      return this.currentValue;
    },
    store() {
      return [...this._checkboxGroup.modelValue];
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
    isShape() {
      return this.isGroup ? this._checkboxGroup.shape : this.shape;
    },
    cls() {
      const { prefixCls, theme, shape, size, checkboxDisabled, isChecked } = this;
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}--${theme}`]: !!theme,
        [`${prefixCls}--${shape}`]: !!shape,
        [`${prefixCls}--${size}`]: !!size,
        [`${prefixCls}--checked`]: !!isChecked,
        [`${prefixCls}--disabled`]: !!checkboxDisabled,
      };
    },
  },
  methods: {
    onValueChange(event) {
      const self = this;
      if (self.checkboxDisabled) return;

      self.currentChecked = event.target.checked;

      if (self.isGroup) {
        const targetVal = event.target.value;
        const prev = [...self._checkboxGroup.modelValue];
        const next = self.currentChecked ? prev.concat([targetVal]) : prev.filter((p, index) => {
          return index !== prev.findIndex(i => i === targetVal);
        });
        self.dispatch('zaCheckboxGroup', 'update:modelValue', [[...Array.from(new Set(next))]]);
      } else {
        self.$emit('change', self.currentValue, self.value);
      }
    },
  },
};
</script>
