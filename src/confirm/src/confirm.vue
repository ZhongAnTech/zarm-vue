<template lang="html">
  <za-modal ref='modal' :closeOnClickModal='false' :visible='currentVisible' :radius='radius' :animationDuration='animationDuration' :title='title'>
    <div :class='prefixCls'>
      {{message}}
    </div>
    <template slot='footer'>
      <za-button block bordered @click='onCancel'>{{cancelText}}</za-button>
      <za-button block bordered theme="primary" @click='onOk'>{{okText}}</za-button>
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
      default: false,
    },
    animationDuration: {
      type: Number,
      default: 200,
    },
    onOk: {
      type: Function,
      default: () => {},
    },
    onCancel: {
      type: Function,
      default: () => {},
    },
  },
  watch: {
    visible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
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
