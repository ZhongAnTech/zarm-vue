<template lang="html">
  <za-modal ref='modal' :closeOnClickModal='false' :visible='currentVisible' :radius='radius' :animationDuration='animationDuration'>
    <za-modal-header :title='title' />
    <za-modal-body>
      <div :class='prefixCls'>
        {{message}}
      </div>
    </za-modal-body>
    <za-modal-footer>
      <za-button block bordered @click='handleClose'>{{cancelText}}</za-button>
    </za-modal-footer>
  </za-modal>
</template>

<script>
import zaModal from '../../modal';
import zaModalHeader from '../../modal-header';
import zaModalBody from '../../modal-body';
import zaModalFooter from '../../modal-footer';
import zaButton from '../../button';

export default {
  name: 'zaAlert',
  components: {
    zaModal,
    zaModalHeader,
    zaModalBody,
    zaModalFooter,
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
      this.$emit('alert-close', 'alert-close', event);
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
