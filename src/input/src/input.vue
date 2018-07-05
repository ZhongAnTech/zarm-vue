<template lang="html">
  <div :class="{
    [this.prefixCls]: true,
    disabled
    }">
    <div :class='`${prefixCls}-placeholder`' v-if='type === "date"'>{{placeholder}}</div>
    <textarea
      ref='input'
      :readonly='readonly'
      v-if='type === "textarea"'
      :placeholder='placeholder'
      :disabled='disabled'
      :maxLength='maxLength'
      :value="currentValue"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      :rows='rows'
    />
    <input
      :readonly='readonly'
      ref='input'
      v-else
      :type='type'
      :placeholder='placeholder'
      :disabled='disabled'
      :maxLength='maxLength'
      :value="currentValue"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @compositionStart="handleComposition"
      @compositionUpdate="handleComposition"
      @compositionEnd="handleComposition"
    />
    <za-icon v-if="clearable" type="wrong-round-fill" :class="{
      [`${prefixCls}-clear`]: true,
      [`${prefixCls}-clear-show`]: !!(focused && currentValue && currentValue.length > 0)
    }" @click="onClear" />
    <div :class='`${prefixCls}-length`' v-if='showLength && maxLength'>{{`${length}/${maxLength}`}}</div>
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
    value: [String, Number],
    maxLength: [String, Number],
    rows: {
      type: [String, Number],
      default: 2,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autosize: {
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
    'value'(val, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      this.setCurrentValue(val);
    },
  },
  methods: {
    onInput(event) {
      const value = event.target.value;
      if (this.clearable && this.currentValue) {
        this.focused = true;
      }
      this.currentValue = value;
      this.$emit('input', value);
      this.$emit('change', value);
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      if (this.type === 'textarea') {
        this.$nextTick(_ => { // eslint-disable-line no-unused-vars, arrow-parens
          this.updateAutosize();
        });
      }
      this.currentValue = value;
    },
    onFocus(event) {
      if (this.clearable && this.currentValue) {
        this.focused = true;
      }
      this.$emit('focus', event);
    },
    onBlur(event) {
      if (this.clearable) {
        this.focused = false;
      }
      this.$emit('blur', event);
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
      if (this.autosize) {
        Autosize(this.$refs.input);
      }
    },
    destroyAutosize() {
      if (this.autosize) {
        Autosize.destroy(this.$refs.input);
      }
    },
    updateAutosize() {
      if (this.autosize) {
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
  beforeDestroy() {
    if (this.type === 'textarea') {
      this.destroyAutosize();
    }
  },
};
</script>
