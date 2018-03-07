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

const getInitValue = (props, defaultValue) => {
  if ('value' in props && props.value.length > 0) {
    return [].concat(props.value);
  }

  if ('defaultValue' in props && props.defaultValue.length > 0) {
    return [].concat(props.defaultValue);
  }

  return defaultValue;
};


export default {
  name: 'za-picker-view',
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
    firstObjValue: {
      type: Array,
      default: () => [],
    },
    selectedValue: Array,
  },
  data() {
    return {
      value: [],
      objValue: [],
      data: [],
      isManual: false,
    };
  },
  created() {
    const newObj = this.getState();
    this.value = newObj.value;
    this.objValue = newObj.objValue;
    this.data = newObj.data;
    this.$emit('init', newObj.objValue);
  },
  methods: {
    isCascader() {
      return this.dataSource && this.dataSource[0] && !isArray(this.dataSource[0]);
    },
    // fixed two or more wheels default data bug
    resetCols(value, level) {
      console.log(value, level) // eslint-disable-line
      const { valueMember, data, selectedValue } = this;
      const hasObj = data[level].some(item => {
        return item[valueMember] === value;
      });
      if (!selectedValue.length) {
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
      const value = getInitValue(this, dataSource.map(item => item[0] && item[0][valueMember]));

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
      let newValues = selected ? selected : getInitValue(this, []);
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
      console.log(value) // eslint-disable-line
      const newObj = this.getState();
      this.value = newObj.value;
      this.objValue = newObj.objValue;
      this.data = newObj.data;
      this.isManual = true;
      this.$emit('change', newObj.objValue, level);
    },
    // resetLevelData(value, level) {
    //   const { valueMember, cols, data, dataSource } = this;
    //   const newDateSource = [];
    //   if (value.length !== data.length) {
    //     this.data = newDateSource;
    //   }
    // },
    onTransition(isScrolling) {
      this.$emit('transition', isScrolling);
    },
  },
};
</script>