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
import OutsideClick from '@/utils/outsideClick';
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
    this.handleOutsideClick(true);
    if (this.autoFocus || this.focused) {
      this.onFocus();
    }
  },
  beforeDestroy() {
    this.handleOutsideClick(false);
  },
  methods: {
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
    },

    handleOutsideClick(action) {
      const _self = this;
      OutsideClick(action, _self.onOutsideBlur);
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
        this.currentValue = newValue;
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
      if (this.visible) {
        return;
      }

      this.visible = true;
      this.scrollToEnd();
      this.$emit('focus', this.value);
    },

    onOutsideBlur(e) {
      const clsRegExp = new RegExp(`(^|\\s)${this.$refs.picker.prefixCls}(\\s|$)`, 'g');
      if (!this.visible) {
        return;
      }

      const cNode = ((node) => {
        const picker = this.$refs.picker;
        const container = this.$refs.container;
        while (node.parentNode && node.parentNode !== document.body) {
          if (node === picker || node === container || clsRegExp.test(node.className)) {
            return node;
          }
          node = node.parentNode;
        }
      })(e.target);

      if (!cNode) {
        this.onBlur();
      }
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
