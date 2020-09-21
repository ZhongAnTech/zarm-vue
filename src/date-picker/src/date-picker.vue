<template lang='html'>
  <div :class='{[`${prefixCls}`]: true,[`${prefixCls}--block`]: isSelect}'  @click='handleClick'>
    <div v-if='isSelect' :class='{
      [`${prefixCls}--input`]: true,
      [`${prefixCls}--placeholder`]: !date,
      [`${prefixCls}--disabled`]: !!disabled,
    }'>
      <input type="hidden" :value='date' />
      {{date ? formatFn(date) : placeholder}}
    </div>
    <div :class='{
        [`${prefixCls}__container`]: true,
        [customCls]: !!customCls,
      }' @click.stop='() => {}'>
      <za-popup
        :visible='currentVisible'
        :get-container="getContainer"
        direction="bottom"
        @maskClick='onMaskClick'>
        <div :class='`${prefixCls}__wrapper`'>
          <div :class='`${prefixCls}__header`'>
            <div :class='`${prefixCls}__cancel`' @click='onCancel'>{{cancelText}}</div>
            <div :class='`${prefixCls}__title`'>{{title}}</div>
            <div :class='`${prefixCls}__submit`' @click='onOk'>{{okText}}</div>
          </div>
          <za-date-picker-view
            :title="title"
            :placeholder="placeholder"
            :mode='mode'
            :min="min"
            :max="max"
            :value="date"
            :minuteStep="minuteStep"
            @init='onInit'
            @cancel='onCancel'
            @change='onValueChange'
            @transition='onTransition'
          />
        </div>
      </za-popup>
     </div>
  </div>
</template>

<script>
import zaPopup from '../../popup';
import zaDatePickerView from '../../date-picker-view';
import { formatValue, formatFn } from '../../date-picker-view/src/util';

const isExtendDate = (date) => {
  if (date instanceof Date) {
    return date;
  }

  if (!date) {
    return '';
  }

  return new Date(date.toString().replace(/-/g, '/'));
};

export default {
  name: 'zaDatePicker',
  components: {
    zaPopup,
    zaDatePickerView,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-datepicker',
    },
    title: {
      type: String,
      default: '请选择',
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    displayMember: {
      type: String,
      default: 'label',
    },
    valueMember: {
      type: String,
      default: 'value',
    },
    minuteStep: {
      type: Number,
      default: 1,
    },
    defaultValue: '',
    value: '',
    mode: String,
    format: [String, Function],
    valueFormat: String,
    min: {},
    max: {},
    customCls: String,
  },
  data() {
    return {
      getContainer: () => document.body,
      isSelect: this.$options.name === 'zaDateSelect',
      currentVisible: this.visible,
      date: '',
      oldDate: '',
    };
  },
  created() {
    const date = this.value && isExtendDate(this.value);
    const defaultDate = this.defaultValue && isExtendDate(this.defaultValue);
    this.date = defaultDate || date;
    this.oldDate = this.date;
  },
  watch: {
    visible(val, oldVal) { // eslint-disable-line no-unused-vars
      if (this.currentVisible === val) return;
      this.currentVisible = val;
    },
    value(val, oldVal) { // eslint-disable-line no-unused-vars
      if (this.date === val) return;
      this.date = isExtendDate(val);
      this.oldDate = this.date;
    },
  },
  methods: {
    handleClick(event) {
      if (this.disabled) return;
      this.$emit('click', event);
      this.toggle();
    },
    // 点击遮罩层
    onMaskClick(event) {
      this.$emit('maskClick', event);
      this.onCancel();
    },
    // 点击取消
    onCancel() {
      this.toggle();
      this.date = this.value || this.oldDate;
      this.$emit('cancel', this.date);
    },
    // 点击确定
    onOk() {
      if (this.isScrolling) {
        return false;
      }
      const value = this.date || this.initDate;
      const formatDate = formatValue(this, value);
      this.date = value;
      this.oldDate = this.date;
      this.$emit('ok', this.valueFormat ? formatDate : value);
      this.$emit('input', this.valueFormat ? formatDate : value);
      this.toggle();
    },
    // 切换显示状态
    toggle() {
      if (this.disabled) {
        return;
      }
      // eslint-disable-next-line
      this.currentVisible = !this.currentVisible;
      this.$emit('update:visible', this.currentVisible);
    },
    formatFn(date) {
      return formatFn(this, date);
    },
    onTransition(isScrolling) {
      this.isScrolling = isScrolling;
    },
    close(key) {
      this[`${key}`] = false;
    },
    onInit(selected) {
      this.initDate = selected;
      this.$emit('init', selected);
    },
    onValueChange(newValue) {
      this.date = newValue;
      const formatDate = formatValue(this, newValue);
      this.$emit('change', this.valueFormat ? formatDate : newValue);
    },
  },
};
</script>
