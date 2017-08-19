<template lang="html">
  <za-column-group
    :prefixCls='prefixCls'
    :displayMember='displayMember'
    :valueMember='valueMember'
    :selectedValue='getValue()'
    @change='handleChange'
    :data='getCols()'>
  </za-column-group>
</template>

<script>
import { arrayTreeFilter, formatToInit } from './utils';
import zaColumnGroup from './column-group';

export default {
  name: 'zaCascader',
  components: {
    zaColumnGroup,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-picker',
    },
    data: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    valueMember: String,
    displayMember: String,
    selectedValue: Array,
    cols: Number,
  },
  methods: {
    getValue() {
      const data = this.data;
      const value = this.selectedValue;

      if (!value || !value.length) {
        return formatToInit(data[0], this.valueMember, this.cols);
      }

      return value;
    },
    handleChange(value, index) {
      const children = arrayTreeFilter(this.data, (item, level) => {
        return level <= index && item[this.valueMember] === value[level];
      });
      let data = children[index];
      let i = index + 1;

      while (data && data.children && data.children.length) {
        if (this.cols && i >= this.cols) {
          break;
        }
        data = data.children[0];
        value[i] = data[this.valueMember];
        i += 1;
      }

      value.length = i;
      this.$emit('change', value);
    },
    getCols() {
      const { data, cols } = this;
      const value = this.getValue();
      const childrenTree = arrayTreeFilter(data, (item, level) => {
        return item[this.valueMember] === value[level];
      }).map(c => c.children);

      if (cols) {
        childrenTree.length = cols - 1;
      } else if (childrenTree.length > 1) {
        childrenTree.splice(-1);
      }
      childrenTree.unshift(data);
      return childrenTree;
    },
  },
};
</script>
