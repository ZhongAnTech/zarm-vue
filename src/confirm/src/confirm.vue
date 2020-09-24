<template>
  <za-modal
    ref='modal'
    :get-container="getContainer"
    :closeOnClickModal='false'
    :visible='currentVisible'
    :radius='radius'
    :animationDuration='animationDuration'
    :title='title'
  >
    <div :class='prefixCls'>
      <template v-if='!$slots.default'>{{message}}</template>
      <slot></slot>
    </div>
    <template v-slot:footer>
      <za-button
        block
        ghost
        shape="rect"
        @click='cancel'
      >{{cancelText || cancelBtnText}}</za-button>
      <za-button
        block
        ghost
        theme="primary"
        shape="rect"
        @click='ok'
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
  },
};
</script>
