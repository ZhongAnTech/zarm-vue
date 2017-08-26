<template lang="html">
  <za-modal ref='modal' :closeOnClickModal='false' :visible='currentVisible' :radius='radius' :animationDuration='animationDuration' :title='title'>
    <div :class='prefixCls'>
      {{message}}
    </div>
    <template slot='footer'>
      <za-button block bordered @click='handleClose'>{{cancelText}}</za-button>
    </template>
  </za-modal>
</template>

<script>
import zaModal from '../../modal';
import zaButton from '../../button';

export default {
  name: 'zaAlert',
  components: {
    zaModal,
    zaButton,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-alert',
    },
    message: String,
    title: String,
    cancelText: {
      type: String,
      default: '关闭',
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
  },
  methods: {
    handleClose(event) {
      this.$refs.modal.leave('modal-close', event);
      this.$emit('update:visible', false);
      this.$emit('close', event);
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
