<template lang="html">
    <za-cell v-if='radioType === "cell"' :disabled='radioDisabled' isLink>
      <za-icon
        slot='description'
        v-if='isChecked'
        type="right"
        :theme='radioDisabled ? null : groupTheme'
      />
      <input
        v-model='model'
        type="radio"
        :class='`${prefixCls}-input`'
        :disabled='radioDisabled'
        :value='label'
        @change='onValueChange'
      />
      <slot></slot>
    </za-cell>
    <za-button
      v-else-if='radioType === "button"'
      :theme='groupTheme'
      :block='isBlock'
      :disabled='radioDisabled'
      :bordered='!isChecked'
      :shape='groupShape'
      size='xs'
      :class="{
        [`${prefixCls}`]: true,
        ['checked']: isChecked,
        ['disabled']: radioDisabled,
        ['block']: isBlock,
      }"
    >
      <input
        v-model='model'
        type="radio"
        :class='`${prefixCls}-input`'
        :disabled='radioDisabled'
        :value='label'
        @change='onValueChange'
      />
      <slot></slot>
    </za-button>
    <div
      v-else
      :class="{
        [`${prefixCls}`]: true,
        [`theme-${groupTheme}`]: !!groupTheme,
        [`shape-${groupShape}`]: !!groupShape,
        ['checked']: isChecked,
        ['disabled']: radioDisabled,
      }"
    >
      <div :class='`${prefixCls}-wrapper`'>
        <span :class='`${prefixCls}-inner`'></span>
        <span
          :class='`${prefixCls}-text`'
          v-if='$slots.default'
        >
          <slot></slot>
        </span>
        <input
          v-model='model'
          type="radio"
          :class='`${prefixCls}-input`'
          :disabled='radioDisabled'
          :value='label'
          @change='onValueChange'
        />
      </div>
    </div>
</template>

<script>
import zaButton from '@/button';
import zaIcon from '@/icon';
import zaCell from '@/cell';
import Emitter from '@/mixins/emitter';

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
    label: {},
  },
  beforeCreate() {
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
  computed: {
    model: {
      get() {
        return this.store;
      },
      set(val) {
        this.dispatch('zaRadioGroup', 'input', [val]);
      },
    },
    isChecked() {
      return this.model === this.label;
    },
    store() {
      return this._radioGroup.value;
    },
    radioType() {
      return this._radioGroup.type;
    },
    radioDisabled() {
      return this._radioGroup ? (this._radioGroup.disabled || this.disabled) : this.disabled;
    },
    isBlock() {
      return this._radioGroup.block;
    },
    groupShape() {
      return this._radioGroup.shape;
    },
    groupTheme() {
      return this._radioGroup.theme;
    },
  },
  methods: {
    onValueChange(event) {
      this.$emit('change', event);
      this.$nextTick(_ => { // eslint-disable-line no-unused-vars
        this.dispatch('zaRadioGroup', 'change', [this._radioGroup.value]);
      });
    },
  },
};
</script>
