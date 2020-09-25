<template>
  <div
    v-if='visible'
    :class='{
      [`${prefixCls}`]: true,
      [`${prefixCls}--${type}`]: !!type,
    }'
    @click="maskClick"></div>
</template>

<script>
import scrollable from '../../mixins/scrollable';

export default {
  name: 'zaMask',
  mixins: [scrollable],
  props: {
    lockScroller: {
      type: Boolean,
      default: true,
    },
    prefixCls: {
      type: String,
      default: 'za-mask',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['transparent', 'normal'].indexOf(v) >= 0;
      },
      default: 'normal',
    },
  },
  watch: {
    visible(val) {
      if (val) {
        this.onAfterOpen();
      } else {
        this.onAfterClose();
      }
    },
  },
  methods: {
    maskClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>
