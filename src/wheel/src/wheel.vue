<template lang="html">
  <div :class='prefixCls' ref='wrapper'>
    <div :class='`${prefixCls}-content`'>
      <div
          :key='index+1'
          :class='{[`${prefixCls}-item`]: true, [`${prefixCls}-item-selected`] : value === item[valueMember] }'
          v-for='(item,index) in dataSource'
        >
          {{itemRender(item)}}
        </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
import { isArray } from '@/utils/validator';
import './findIndex';

const getValue = (props, defaultValue) => {
  if ('value' in props) {
    return props.value;
  }
  if ('defaultValue' in props) {
    return props.defaultValue;
  }
  if (isArray(props.dataSource) && props.dataSource[0]) {
    return props.dataSource[0][props.valueMember];
  }
  return defaultValue;
};

export default {
  name: 'za-wheel',
  props: {
    prefixCls: {
      type: String,
      default: 'za-wheel',
    },
    dataSource: {
      type: Array,
      required: true,
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
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      BScroll,
      wrapper: null,
      value: getValue(this),
    };
  },
  mounted() {
    const { prefixCls } = this;
    this.BScroll = new BScroll(this.$refs.wrapper, {
      wheel: {
        selectedIndex: 0,
        wheelWrapperClass: `${prefixCls}-content`,
        wheelItemClass: `${prefixCls}-item`,
        adjustTime: 100,
      },
      probeType: 3,
    });

    if (this.disabled) {
      this.BScroll.disable();
    }

    const initIndex = this.BScroll.getSelectedIndex(this.value);
    this.BScroll.wheelTo(initIndex);

    this.BScroll.on('scroll', () => {
      this.$emit('onTransition', true);
    });

    this.BScroll.on('scrollEnd', () => {
      const { dataSource, valueMember } = this;
      const index = this.BScroll.getSelectedIndex();
      const child = dataSource[index];
      if (child) {
        this.fireValueChange(child[valueMember]);
        this.$emit('onTransition', this.BScroll.isInTransition);
      } else if (console.warn) { // eslint-disable-line
        console.warn('child not found', dataSource, index); // eslint-disable-line
      }
    });
  },
  watch: {
    value(val) {
      console.log(val) // eslint-disable-line
      if (this.disabled) {
        this.BScroll.disable();
      }
      const newIndex = this.getSelectedIndex(val, this.dataSource);
      this.BScroll.wheelTo(newIndex);
    },
    dataSource(val) {
      const newIndex = this.getSelectedIndex(this.value, val);
      this.BScroll.wheelTo(newIndex);
    },
  },
  updated() {
    console.log('updated') // eslint-disable-line
    this.BScroll.refresh();
  },
  destroy() {
    this.BScroll.destroy();
  },
  methods: {
    fireValueChange(value) {
      if (value === this.value) {
        return;
      }

      if (('value' in this)) {
        this.value = value;
      }
      this.$emit('onChange', value, this.index);
    },
    getSelectedIndex(value, dataSource) {
      const { valueMember } = this;
      return dataSource.findIndex((item) => item[valueMember] === value);
    },
  },
};
</script>