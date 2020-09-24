<template lang="html">
  <div :class="{
    [`${prefixCls}`]: true,
    [`${prefixCls}--disabled`]: !!disabled,
    [`${prefixCls}__clearable`]: !!clearable,
    }">
    <div :class='`${prefixCls}__placeholder`' v-if='type === "date"'>{{placeholder}}</div>
    <textarea
      ref='input'
      v-if='type === "textarea"'
      v-bind="$attrs"
      :value="currentValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <input
      ref='input'
      v-else
      v-bind="$attrs"
      :value="currentValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @compositionStart="handleComposition"
      @compositionUpdate="handleComposition"
      @compositionEnd="handleComposition"
    />
    <za-icon
      :class="{
        [`${prefixCls}__clear`]: true,
        [`${prefixCls}__clear--show`]: !!(focused && currentValue && currentValue.length > 0)
      }"
      type="wrong-round-fill"
      @click="onClear"
    />
    <div :class='`${prefixCls}__length`' v-if='showLength && maxLength'>{{`${length}/${maxLength}`}}</div>
  </div>
</template>

<script>
import Autosize from 'autosize';
import zaIcon from '../../icon/src/icon';

export default {
  name: 'zaInput',
  components: {
    zaIcon,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-input',
    },
    placeholder: String,
    type: {
      type: String,
      default: 'text',
    },
    modelValue: String,
    rows: {
      type: [String, Number],
      default: 2,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autoHeight: {
      type: Boolean,
      default: false,
    },
    showLength: {
      type: Boolean,
      default: false,
    },
    readonly: Boolean,
    clearable: Boolean,
  },
  data() {
    return {
      focused: this.focused || false,
      currentValue: this.value || '',
    };
  },
  computed: {
    length() {
      return this.currentValue.length;
    },
  },
  watch: {
    modelValue(val, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      this.setCurrentValue(val);
    },
  },
  methods: {
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      if (this.type === 'textarea') {
        this.$nextTick(_ => { // eslint-disable-line no-unused-vars, arrow-parens
          this.updateAutosize();
        });
      }
      this.currentValue = value;
    },
    handleInput(event) {
      const value = event.target.value;
      if (this.clearable && this.currentValue) {
        this.focused = true;
      }
      this.currentValue = value;
      this.$emit('update:modelValue', value);
      this.$emit('change', value);
    },
    handleFocus(event) {
      if (this.clearable && this.currentValue) {
        this.focused = true;
      }
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.onBlurTimeout = setTimeout(() => {
        if (this.clearable) {
          this.focused = false;
        }
        this.$emit('blur', event);
      }, 200);
    },
    handleComposition(e) {
      if (e.type === 'compositionstart') {
        this.isOnComposition = true;
        this.$emit('compositionStart', e);
      }

      if (e.type === 'compositionupdate') {
        this.$emit('compositionUpdate', e);
      }

      if (e.type === 'compositionend') {
        // composition is end
        this.isOnComposition = false;
        const value = e.target.value;
        this.$emit('compositionEnd', e);
        this.$emit('change', value);
      }
    },
    initAutosize() {
      if (this.autoHeight) {
        Autosize(this.$refs.input);
      }
    },
    destroyAutosize() {
      if (this.autoHeight) {
        Autosize.destroy(this.$refs.input);
      }
    },
    updateAutosize() {
      if (this.autoHeight) {
        Autosize.update(this.$refs.input);
      }
    },

    onClear() {
      this.blurFromClear = true;
      this.currentValue = '';
      if (!this.isOnComposition) {
        this.focus();
      }
      this.$emit('clear', this.currentValue);
    },

    blur() {
      this.$refs.input.blur();
    },
    focus() {
      this.$refs.input.focus();
    },
  },
  mounted() {
    if (this.type === 'textarea') {
      this.initAutosize();
    }
  },
  beforeUnmount() {
    const { onBlurTimeout } = this;
    onBlurTimeout && clearTimeout(onBlurTimeout);
    this.onBlurTimeout = null;
    if (this.type === 'textarea') {
      this.destroyAutosize();
    }
  },
};
</script>
