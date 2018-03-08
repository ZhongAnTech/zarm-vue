<template lang="html">
  <div :class='`${prefixCls}`' @click='handleClick'>
      <div :class='{
        [`${prefixCls}-input`]: true,
        [`${prefixCls}-placeholder`]: !selectedValue.join(displayAddon),
        [`${prefixCls}-disabled`]: !!disabled,
      }'>
        <input type="hidden" :value='currentValue' />
        {{display() || placeholder}}
      </div>
      <div :class='{
          [`${prefixCls}-container`]: true,
          [customCls]: !!customCls,
        }' @click.stop='() => {}'>
      <za-popup
        class='za-popup-inner'
        :visible='currentVisible'
        @close='onMaskClick'
        :closeOnClickModal='closeOnClickModal'>
        <div :class='`${prefixCls}-wrapper`'>
          <div :class='`${prefixCls}-header`'>
            <div :class='`${prefixCls}-cancel`' @click='handleCancel'>{{cancelText}}</div>
            <div :class='`${prefixCls}-title`'>{{title}}</div>
            <div :class='`${prefixCls}-submit`' @click='handleOk'>{{okText}}</div>
          </div>
          <za-picker-view
            :prefixCls='prefixCls'
            :value='selectedValue'
            :valueMember='valueMember'
            :dataSource='dataSource'
            :cols='cols'
            :selectedValue='selectedValue'
            :itemRender='itemRender'
            @change='onChange'
            @transition='onTransition'
          />
        </div>
      </za-popup>
    </div>
  </div>
</template>
<script>
import { arrayTreeFilter, formatToInit, formatBackToObject, isArray, hasChildrenObject } from './utils';
import zaPopup from '../../popup';
import zaPickerView from '../../picker-view';

export default {
  name: 'zaPicker',
  components: {
    zaPopup,
    zaPickerView,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-picker',
    },
    title: {
      type: String,
      default: '请选择',
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },

    dataSource: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    displayMember: {
      type: String,
      default: 'label',
    },
    valueMember: {
      type: String,
      default: 'value',
    },
    defaultValue: [String, Array, Number],
    value: [String, Array, Number],
    displayAddon: {
      type: String,
      default: '',
    },
    displayGenerator: Function,
    customCls: String,
    cols: Number,
    itemRender: {
      type: Function,
      default: data => data.label,
    },
  },
  data() {
    const defaultValue = this.getInitValue();
    return {
      currentValue: defaultValue,
      currentVisible: this.visible,
      oldValue: defaultValue,
    };
  },
  computed: {
    cascade() {
      const { dataSource } = this;
      return dataSource.length && !isArray(dataSource[0]) && hasChildrenObject(dataSource[0]);
    },
    data() {
      const { dataSource } = this;
      // 针对单列数据源[{}]，转换为[[{}]]
      if (this.isSingleColumn) {
        return [this.dataSource];
      }
      return dataSource;
    },
    selectedValue() {
      // eslint-disable-next-line
      return this.isSingleColumn && !isArray(this.currentValue) ? [this.currentValue] : this.currentValue;
    },
    isSingleColumn() {
      const { dataSource } = this;
      return dataSource.length && !isArray(dataSource[0]) && !hasChildrenObject(dataSource[0]);
    },
  },
  watch: {
    visible(val, oldVal) { // eslint-disable-line no-unused-vars
      if (this.currentVisible === val) return;
      this.currentVisible = val;
    },
    value(val, oldVal) { // eslint-disable-line no-unused-vars
      console.log(val, oldVal) // eslint-disable-line
      if (this.currentValue === val) return;
      this.currentValue = isArray(val) ? val : [val];
      this.oldValue = this.currentValue;
    },
  },
  methods: {
    getInitValue() {
      const initValue = this.value || this.defaultValue || [];
      // 针对单列数据源{}，转换为[{}]
      if (this.isSingleColumn) {
        return isArray(initValue) ? initValue : [initValue];
      }
      return initValue;
    },
    onChange(selected) {
      const { valueMember } = this;
      const value = selected.map(item => item[valueMember]);
      this.currentValue = this.isSingleColumn ? value[0] : value;
      this.$emit('change', this.currentValue);
    },
    handleCancel() {
      this.toggle();
      this.currentValue = this.oldValue;
    },
    handleOk() {
      if (this.isScrolling) {
        return false;
      }
      this.toggle();
      const { valueMember, cols, data, cascade } = this;
      this.currentValue = this.getValue();
      this.oldValue = this.currentValue;

      let selectedValue = this.currentValue;
      if (!isArray(selectedValue)) {
        selectedValue = [selectedValue];
      }
      const _value = formatBackToObject(data, selectedValue, cascade, valueMember, cols);
      this.$emit('ok', _value);
      this.$emit('input', this.currentValue);
    },
    getValue() {
      const { valueMember, data, currentValue, cols } = this;
      if (!currentValue || !currentValue.length) {
        if (this.cascade) {
          return formatToInit(data[0], valueMember, cols);
        }
        return data.map(d => (d[0][valueMember]));
      }
      return currentValue;
    },
    display() {
      const { currentValue, data } = this;
      if (this.cascade) {
        if (currentValue.length) {
          const treeChildren = arrayTreeFilter(data, (item, level) => {
            return item[this.valueMember] === currentValue[level];
          });
          return this.displayRender(treeChildren);
        }
      }
      // FIXED
      const treeChildren2 = data.map((d, index) => {
        if (!isArray(currentValue)) {
          return d.filter(obj => currentValue === obj[this.valueMember])[0];
        }
        if (isArray(currentValue) && currentValue[index]) {
          return d.filter(obj => currentValue[index] === obj[this.valueMember])[0];
        }
        return undefined;
      }).filter(t => !!t);

      return this.displayRender(treeChildren2);
    },
    displayRender(value) {
      const { displayGenerator, displayMember, displayAddon } = this;
      // if (oldValue.length === 0) return;
      if (typeof displayGenerator === 'function') {
        return displayGenerator(value);
      }
      return value.map((v) => {
        return v && v[displayMember];
      }).join(displayAddon);
    },
    handleClick(event) {
      if (this.disabled) return;
      this.$emit('click', event);
      this.toggle();
    },
    onMaskClick(reason) {
      if (reason === 'clickaway') {
        this.handleCancel();
      }
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
    onTransition(isScrolling) {
      this.isScrolling = isScrolling;
    },
  },
};
</script>