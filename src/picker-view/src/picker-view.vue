<template lang="html">
  <div :class='`${prefixCls}-panel`'>
    <div :class='`${prefixCls}-mask-top`' />
    <div :class='`${prefixCls}-view`'>
      <Wheel
          v-for='(item,index) in data'
          :key='index+1'
          :index='index'
          :dataSource='item'
          :value='value[index]'
          :valueMember='valueMember'
          :itemRender='itemRender'
          :disabled='disabled'
          @onChange='onValueChange'
          @onTransition='onTransition'
        />
    </div>
    <div :class='`${prefixCls}-mask-bottom`' />
  </div>
</template>
<script>
import Wheel from '@/wheel/src/wheel';
import { isArray } from '@/utils/validator';

const getValue = (props, defaultValue) => {
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
    defaultValue: {
      type: [String, Number],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    firstObjValue: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    // data() {
    //   const { dataSource } = this;
    //   return dataSource;
    // },
  },
  data() {
    const state = this.getState();
    if (typeof this.onInit === 'function') {
      this.onInit(state.objValue);
    }
    return Object.assign(state, {
      isManual: false,
    });
  },
  created() {
    // 如果从上层组件传进来的值与当前值一样，或者人工滑动了改变值，则不执行onInit。
    if (JSON.stringify(this.objValue) === JSON.stringify(this.firstObjValue) || this.isManual) {
      return;
    }
    if (typeof this.onInit === 'function') {
      this.onInit(this.objValue);
    }
  },
  methods: {
    isCascader() {
      return this.dataSource && this.dataSource[0] && !isArray(this.dataSource[0]);
    },
    getState(prop) {
      const state = this.isCascader(prop)
        ? this.cascaderState(prop)
        : this.normalState(prop);
      return state;
    },
    normalState(props) {
      const { valueMember, dataSource } = this;
      const value = getValue(props, dataSource.map(item => item[0] && item[0][valueMember]));

      return {
        value,
        // eslint-disable-next-line
        objValue: props.dataSource.map((item, index) => item.filter(d => d[valueMember] === value[index])[0]),
        data: dataSource,
      };
    },
    cascaderState() {
      const { valueMember, cols } = this;
      let newValues = getValue(this, []);
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
      const { dataSource, value } = this;

      value[level] = selected;
      if (this.isCascader({ dataSource })) {
        value.length = level + 1;
      }

      const newObj = this.getState({ dataSource, value });
      this.value = newObj.value;
      this.objValue = newObj.objValue;
      this.data = newObj.data;
      this.isManual = true;
      this.$emit('onChange', newObj.objValue, level);
    },
    onTransition(isScrolling) {
      if (typeof this.onTransition === 'function') {
        console.log(isScrolling) // eslint-disable-line
        // this.onTransition(isScrolling);
      }
    },
  },
};
</script>