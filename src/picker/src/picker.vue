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
          @close='onPopupClose'
          :closeOnClickModal='closeOnClickModal'>
          <div :class='`${prefixCls}-wrapper`'>
            <div :class='`${prefixCls}-header`'>
              <div :class='`${prefixCls}-cancel`' @click='handleCancel'>{{cancelText}}</div>
              <div :class='`${prefixCls}-title`'>{{title}}</div>
              <div :class='`${prefixCls}-submit`' @click='handleOk'>{{okText}}</div>
            </div>
            <div :class='`${prefixCls}-mask-top`'>
              <div :class='`${prefixCls}-mask-bottom`'>
                <za-cascader
                  v-if='cascade'
                  :prefixCls='prefixCls'
                  :data='data'
                  :cols='cols'
                  :selectedValue='selectedValue'
                  :displayMember='displayMember'
                  :valueMember='valueMember'
                  @change='handleChange'/>
                <za-column-group
                  v-else
                  :prefixCls='prefixCls'
                  :displayMember='displayMember'
                  :valueMember='valueMember'
                  :selectedValue='selectedValue'
                  :itemStyle='itemStyle'
                  :data='data'
                  @change='handleChange'/>
              </div>
            </div>
          </div>
        </za-popup>
      </div>
    </div>
  </template>
  
  <script>
  import zaPopup from '../../popup';
  import zaColumnGroup from './column-group';
  import zaCascader from './cascader';
  import { arrayTreeFilter, formatToInit, formatBackToObject, isArray, hasChildrenObject } from './utils';
  
  export default {
    name: 'zaPicker',
    components: {
      zaPopup,
      zaColumnGroup,
      zaCascader,
    },
    props: {
      prefixCls: {
        type: String,
        default: 'za-picker',
      },
      placeholder: {
        type: String,
        default: '请选择',
      },
      visible: {
        type: Boolean,
        default: false,
      },
      defaultValue: [String, Array, Number],
      value: [String, Array, Number],
      title: {
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
      displayAddon: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      dataSource: {
        type: Array,
        required: true,
      },
      displayMember: {
        type: String,
        default: 'label',
      },
      valueMember: {
        type: String,
        default: 'value',
      },
      closeOnClickModal: {
        type: Boolean,
        default: true,
      },
      // custom value generator: receive value
      displayGenerator: Function,
      customCls: String,
      cols: Number,
      indicatorStyle: Object,
      itemStyle: Object,
    },
    watch: {
      visible(val, oldVal) { // eslint-disable-line no-unused-vars
        if (this.currentVisible === val) return;
        this.currentVisible = val;
      },
      value(val, oldVal) { // eslint-disable-line no-unused-vars
        if (this.currentValue === val) return;
        this.currentValue = isArray(val) ? val : [val];
        this.oldValue = this.currentValue;
      },
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
        return this.isSingleColumn ? [this.currentValue] : this.currentValue;
      },
      isSingleColumn() {
        const { dataSource } = this;
        return dataSource.length && !isArray(dataSource[0]) && !hasChildrenObject(dataSource[0]);
      },
    },
    created() {
      this.currentValue = this.getInitValue();
      this.oldValue = this.getInitValue();
    },
    data() {
      return {
        currentVisible: this.visible,
        currentValue: '',
        oldValue: '',
      };
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
      handleClick(event) {
        if (this.disabled) return;
        this.$emit('click', event);
        this.toggle();
      },
      toggle() {
        if (this.disabled) {
          return;
        }
        this.currentVisible = !this.currentVisible;
        this.$emit('update:visible', this.currentVisible);
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
          if (currentValue[index]) {
            return d.filter(obj => currentValue[index] === obj[this.valueMember])[0];
          }
          return undefined;
        }).filter(t => !!t);
  
        return this.displayRender(treeChildren2);
      },
      displayRender(value) {
        const { displayGenerator, displayMember, displayAddon } = this;
  
        if (typeof displayGenerator === 'function') {
          return displayGenerator(value);
        }
        return value.map((v) => {
          return v && v[displayMember];
        }).join(displayAddon);
      },
      onPopupClose(reason) {
        if (reason === 'clickaway') {
          this.toggle();
          this.currentValue = this.oldValue;
          // this.currentVisible = !this.currentVisible;
          // this.$emit('update:visible', this.currentVisible);
        }
      },
      handleCancel(event) {
        this.toggle();
        this.currentValue = this.oldValue;
        this.$emit('cancel', event);
      },
      handleOk() {
        const { valueMember, cols, data, cascade } = this;
        this.currentValue = this.getValue();
        this.oldValue = this.currentValue;
  
        this.toggle();
        const _value = formatBackToObject(data, this.currentValue, cascade, valueMember, cols);
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
      handleChange(value, index) {
        this.currentValue = this.isSingleColumn ? value[0] : value;
        this.$emit('change', this.currentValue, index);
        // do not emit input here, just change
        // this.$emit('input', value);
      },
    },
  };
  </script>
  