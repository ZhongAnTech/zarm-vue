<template>
  <za-modal
    ref='modal'
    :class='prefixCls'
    :get-container="getContainer"
    :closeOnClickModal='false'
    :visible='currentVisible'
    :radius='radius'
    :animationDuration='animationDuration'
    :title='title'
  >
    <template v-if='!$slots.default'>{{message}}</template>
    <slot></slot>
    <template v-slot:footer>
      <za-button
        block
        ghost
        shape="rect"
        @click='handleCancel'
      >{{cancelText || cancelBtnText}}</za-button>
      <za-button
        block
        ghost
        shape="rect"
        style="border-left:0"
        @click='handleOk'
      >{{okText || okBtnText}}</za-button>
    </template>
  </za-modal>
</template>

<script>
import Locale from '../../utils/locale';
import zaModal from '../../modal';
import zaButton from '../../button';

export default {
  name: 'zaConfirm',
  components: {
    zaModal,
    zaButton,
  },
  inject: {
    localeProvider: {
      default: '',
    },
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
      default: '',
    },
    okText: {
      type: String,
      default: '',
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
      default: () => { },
    },
    cancel: {
      type: Function,
      default: () => { },
    },
  },
  computed: {
    cancelBtnText() {
      return this.localeProvider.lang ? this.getLocales('cancelText') : '关闭';
    },
    okBtnText() {
      return this.localeProvider.lang ? this.getLocales('okText') : '确定';
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
      getContainer: () => document.body,
    };
  },
  methods: {
    // 国际化
    getLocales(key) {
      return Locale.getLocaleByComponent(this.localeProvider, 'Confirm', key);
    },
    onClose(event) {
      this.$emit('update:visible', false);
      this.$emit('close', event);
    },
    handleCancel(event) {
      const { cancel } = this;
      if (typeof cancel === 'function') {
        cancel();
      }
      this.onClose();
    },
    handleOk(event) {
      const { ok } = this;
      if (typeof ok === 'function' && ok()) {
        this.onClose();
      } else {
        this.onClose(event);
      }
    },
  },
};
</script>
