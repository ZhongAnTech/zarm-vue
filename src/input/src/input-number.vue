<template lang="html">
  <div
       ref="container"
       :class="{
         [`${prefixCls}`]: true,
         [`${prefixCls}__number`]: true,
         [`${prefixCls}--disabled`]: disabled,
         [`${prefixCls}--focus`]: visible,
       }" 
       @click="onFocus"
       >
        <div v-show='!currentValue' :class="`${prefixCls}__placeholder`">{{ placeholder }}</div>
        <div :class="`${prefixCls}__content`" ref="content">{{ currentValue }}</div>
        <input
          type="hidden"
          :value="currentValue"
          :disabled="disabled"
          :readonly='readonly'
        />
        <KeyboardPicker
          ref="picker"
          :visible.sync="visible"
          :type="type"
          @keyClick="onKeyClick"
        />
      </div>
</template>

<script>
import clickoutside from '@/utils/clickoutside';
import KeyboardPicker from '../../keyboard-picker';

export default {
  name: 'zaInputNumber',
  props: {
    prefixCls: {
      type: String,
      default: 'za-input',
    },
    placeholder: String,
    type: {
      type: String,
      default: 'number',
    },
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: Boolean,
  },
  data() {
    return {
      currentValue: this.value || '',
      hideOnClickOutside: true,
      visible: false,
    };
  },
  components: {
    KeyboardPicker,
  },
  watch: {
    'value'(val, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      this.setCurrentValue(val);
    },
  },
  mounted() {
    clickoutside.addClickoutSide({ handle: this.onOutsideBlur });
  },
  beforeDestroy() {
    clickoutside.removeClickoutSide({ handle: this.onOutsideBlur });
  },
  methods: {
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
    },

    onKeyClick(key) {
      if (['close', 'ok'].indexOf(key) > -1) {
        this.onBlur();
        return;
      }
      const value = this.value;
      const newValue = (key === 'delete')
        ? value.slice(0, value.length - 1)
        : value + key;

      if (newValue !== value) {
        this.currentValue = newValue;
        this.scrollToEnd();
        this.$emit('input', newValue);
        this.$emit('change', newValue);
      }
    },

    scrollToStart() {
      if (!this.$refs.content) return;
      this.$refs.content.scrollLeft = 0;
    },

    scrollToEnd() {
      if (!this.$refs.content) return;
      this.$refs.content.scrollLeft = this.$refs.content.scrollWidth;
    },

    onFocus() {
      if (this.disabled || this.visible) {
        return;
      }

      this.visible = true;
      this.scrollToEnd();
      this.$emit('focus', this.value);
    },

    onOutsideBlur(e) {
      if (!this.visible) {
        return;
      }
      const $el = this.$refs.picker.$el;
      const $container = this.$refs.container;
      clickoutside.clickoutSideHandle(e, { onClickoutSide: this.onBlur, ignorenode: $container, el: $el });
    },

    onBlur() {
      if (!this.visible) {
        return;
      }

      this.visible = false;
      this.scrollToStart();
      this.$emit('blur', this.value);
    },
  },
};
</script>
