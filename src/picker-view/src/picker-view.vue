<template lang="html">
  <div :class='`${prefixCls}-panel`'>
    <div :class='`${prefixCls}-mask-top`' />
    <div :class='`${prefixCls}-view`'>
      <Wheel
          v-for='(item,index) in data'
          :key='index+1'
          :index='index'
          :dataSource='item'
          :selectedValue='getValue()[index]'
          :defaultValue='defaultValue[index]'
          :valueMember='valueMember'
          :itemRender='itemRender'
          :disabled='disabled'
          @reset='resetCols'
          @transition='onTransition'
          @change='onValueChange'
        />
    </div>
    <div :class='`${prefixCls}-mask-bottom`' />
  </div>
</template>
<script>
import { isArray } from '@/utils/validator';
import Wheel from '@/wheel/src/wheel';

export default {
  name: 'zaPickerView',
  components: {
    Wheel,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-picker',
    },
    dataSource: {
      type: Array,
      required: true,
    },
    defaultValue: {
      type: Array,
      default: () => [],
    },
    cols: {
      type: Number,
      default: Infinity,
    },
    valueMember: {
      type: String,
      default: 'value',
    },
    itemRender: {
      type: Function,
      default: item => item.label,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    selectedValue: Array,
  },
  data() {
    this.value = this.getValue();
    const newObj = this.getState();
    return Object.assign({
      isManual: false,
    }, newObj);
  },
  methods: {
    getInitValue(defaultValue) {
      if ('value' in this && this.value.length > 0) {
        return [].concat(this.value);
      }

      if ('defaultValue' in this && this.defaultValue.length > 0) {
        return [].concat(this.defaultValue);
      }

      return defaultValue;
    },
    isCascader() {
      return this.dataSource && this.dataSource[0] && !isArray(this.dataSource[0]);
    },
    // fixed two or more wheels default data bug
    resetCols(value, level) {
      const { valueMember, data, selectedValue } = this;
      const hasObj = data[level].some(item => {
        return item[valueMember] === value;
      });
      // console.log(value, hasObj) // eslint-disable-line
      if (selectedValue && !selectedValue.length && this.isCascader()) {
        this.value = selectedValue;
        const newObj = this.cascaderState();
        this.data = newObj.data;
      }
      if (!hasObj && this.isCascader()) {
        const newObj = this.cascaderState(selectedValue);
        this.$set(data, level, newObj.data[level]);
      }
    },
    getState() {
      const state = this.isCascader()
        ? this.cascaderState()
        : this.normalState();
      return state;
    },
    getValue() {
      const { data, selectedValue } = this;
      if (selectedValue && selectedValue.length) {
        return selectedValue;
      }
      if (!data) {
        return [];
      }
      return data.map((c) => {
        return c && c[0] && c[0][this.valueMember];
      });
    },
    normalState() {
      const { valueMember, dataSource } = this;
      const value = this.getInitValue(dataSource.map(item => item[0] && item[0][valueMember]));
      console.log(value,this.selectedValue) // eslint-disable-line
      return {
        value,
        // eslint-disable-next-line
        objValue: this.dataSource.map((item, index) => item.filter(d => d[valueMember] === value[index])[0]),
        data: dataSource,
      };
    },
    cascaderState(selected) {
      const { valueMember, cols } = this;
      // eslint-disable-next-line
      let newValues = selected ? selected : this.getInitValue([]);
      const newObjValues = [];
      const newDateSource = [];

      const parseLevel = ({ level = 0, dataSource }) => {
        newDateSource[level] = dataSource.map((item, index) => {
          const { children, ...others } = item;
          // eslint-disable-next-line
          if (newValues[level] && item[valueMember] === newValues[level] || !newValues[level] && index === 0) {
            newValues[level] = item[valueMember];
            newObjValues[level] = others;

            if (isArray(children) && children.length > 0 && level + 1 < cols) {
              parseLevel({
                dataSource: children,
                level: level + 1,
              });
            }
          }

          return others;
        });

        return newValues;
      };

      newValues = parseLevel({ dataSource: this.dataSource });
      return {
        value: newValues,
        objValue: newObjValues,
        data: newDateSource,
      };
    },
    onValueChange(selected, level) {
      const { value } = this;
      value[level] = selected;
      if (this.isCascader()) {
        value.length = level + 1;
      }
      // console.log(value) // eslint-disable-line
      const newObj = this.getState();
      this.value = newObj.value;
      this.objValue = newObj.objValue;
      this.data = newObj.data;
      this.isManual = true;
      this.$emit('change', newObj.objValue, level);
    },
    onTransition(isScrolling) {
      this.$emit('transition', isScrolling);
    },
  },
};
</script>