<template lang="html">
  <za-modal ref='modal' :closeOnClickModal='false' :visible='currentVisible' :radius='radius' :animationDuration='animationDuration' :title='title'>
    <div :class='prefixCls'>
      <template v-if='!$slots.default'>{{message}}</template>
      <slot></slot>
    </div>
    <template slot='footer'>
      <za-button block bordered @click='cancel'>{{cancelText}}</za-button>
      <za-button block bordered theme="primary" @click='ok'>{{okText}}</za-button>
    </template>
  </za-modal>
</template>

<script>
import zaModal from '../../modal';
import zaButton from '../../button';

export default {
  name: 'zaConfirm',
  components: {
    zaModal,
    zaButton,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-confirm',
    },
    message: String,
    title: String,
    cancelText: {
      type: String,
      default: '关闭',
    },
    okText: {
      type: String,
      default: '确定',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    radius: {
      type: Boolean,
      default: true,
    },
    animationDuration: {
      type: Number,
      default: 200,
    },
    ok: {
      type: Function,
      default: () => {},
    },
    cancel: {
      type: Function,
      default: () => {},
    },
  },
  watch: {
    visible(value, oldValue) { // eslint-disable-line
      if (value === this.currentVisible) return;
      this.currentVisible = value;
    },
  },
  data() {
    return {
      currentVisible: this.visible,
    };
  },
};
</script>
