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

export default {
  name: 'zaWheel',
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
    selectedValue: {
      type: [String, Number],
      default: '',
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
      value: this.getValue(),
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

    const initIndex = this.getWheelSelectedIndex(this.value, this.dataSource);
    this.BScroll.wheelTo(initIndex);
    this.BScroll.on('scroll', () => {
      this.$emit('transition', true);
    });

    this.BScroll.on('scrollEnd', () => {
      this.scollEnd();
    });
  },
  watch: {
    selectedValue(val) {
      if (val === this.value) return;
      if (this.disabled) {
        this.BScroll.disable();
      }
      const newIndex = this.getWheelSelectedIndex(val, this.dataSource);
      this.BScroll.wheelTo(newIndex);
      this.value = val;
      this.$emit('reset', val, this.index);
    },
    dataSource(val) {
      const newIndex = this.getWheelSelectedIndex(this.value, val);
      this.BScroll.wheelTo(newIndex);
    },
  },
  updated() {
    this.BScroll.refresh();
  },
  destroy() {
    this.BScroll.destroy();
  },
  methods: {
    getValue() {
      // eslint-disable-next-line
      return this.defaultValue || this.selectedValue || (this.data && this.data.length && this.data[0][this.valueMember]);
    },
    fireValueChange(value) {
      if (value === this.value) {
        return;
      }

      if (('value' in this)) {
        this.value = value;
      }
      this.$emit('change', value, this.index);
    },
    getWheelSelectedIndex(value, dataSource) {
      const { valueMember } = this;
      let _index = 0;
      // if (!dataSource) return _index;
      dataSource.filter((item, index) => {
        if (item[valueMember] === value) {
          _index = index;
          return true;
        }
        return false;
      });
      return _index;
    },
    scollEnd() {
      const { dataSource, valueMember } = this;
      const index = this.BScroll.getSelectedIndex();
      const child = dataSource[index];
      if (child) {
        this.fireValueChange(child[valueMember]);
        this.$emit('transition', this.BScroll.isInTransition);
      } else if (console.warn) { // eslint-disable-line
        console.warn('child not found', dataSource, index); // eslint-disable-line
      }
    },
  },
};
</script>