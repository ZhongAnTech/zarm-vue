<template lang="html">
  <div :class='`${prefixCls}-column-group`'>
    <div :class='`${prefixCls}-column-group-item`' v-for='(col, i) in data' :key='i'>
      <za-column
        :style='indicatorStyle'
        :prefixCls='prefixCls'
        :displayMember='displayMember'
        :valueMember='valueMember'
        :selectedValue='getValue()[i]'
        :data='col'
        @change='(selectedValue) => handleChange(selectedValue, i)'/>
    </div>
  </div>
</template>

<script>
import zaColumn from './column';

export default {
  name: 'zaColumnGroup',
  components: {
    zaColumn,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-picker',
    },
    indicatorStyle: Object,
    itemStyle: Object,
    data: {
      type: Array,
      required: true,
    },
    valueMember: String,
    displayMember: String,
    selectedValue: Array,
  },
  methods: {
    handleChange(v, i) {
      const value = this.getValue().concat(); // copy
      value[i] = v; // replace
      this.$emit('change', value, i);
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
  },
};
</script>
