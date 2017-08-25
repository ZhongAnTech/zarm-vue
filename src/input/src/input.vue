<template lang="html">
  <div :class="{
    [this.prefixCls]: true,
    disabled
    }">
    <div :class='`${prefixCls}-placeholder`' v-if='type === "date"'>{{placeholder}}</div>
    <textarea
      ref='input'
      v-if='type === "textarea"'
      :placeholder='placeholder'
      :disabled='disabled'
      :maxLength='maxLength'
      :value="currentValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      :rows='rows'
    />
    <input
      ref='input'
      v-else
      :type='type'
      :placeholder='placeholder'
      :disabled='disabled'
      :maxLength='maxLength'
      :value="currentValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <div :class='`${prefixCls}-length`' v-if='showLength && maxLength'>{{`${length}/${maxLength}`}}</div>
  </div>
</template>

<script>
import Autosize from 'autosize';

export default {
  name: 'zaInput',
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
  },
  data() {
    return {
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
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.$emit('input', value);
      // this.setCurrentValue(value);
      this.$emit('change', value);
      this.currentValue = value;
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
    handleFocus(event) {
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.$emit('blur', event);
    },
    initAutosize() {
      if (this.autosize) {
        Autosize(this.$refs.input);
      }
    },
    destroyAutosize() {
      if (this.autosize) {
        Autosize.destroy(this.input);
      }
    },
    updateAutosize() {
      if (this.autosize) {
        Autosize.update(this.input);
      }
    },
    // setLength() {
    //   this.length = this.$refs.input.value.length;
    // },
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>
