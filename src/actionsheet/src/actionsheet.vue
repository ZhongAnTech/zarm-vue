<template lang="html">
  <za-popup :visible='currentVisible' :get-container="getContainer" @maskClick='handlePopupClose'>
    <div :class='{
      [`${prefixCls}`]: true,
      [`${prefixCls}--${shape}`]: !!shape,
      [`${prefixCls}--spacing`]: spacing,
    }'>
      <div :class='`${prefixCls}__actions`'>
        <a v-for='(action, index) in actions' :class='{
          [`${prefixCls}__item`]: true,
          [`${prefixCls}__${action.theme}`]: !!action.theme,
        }'
        :key='index'
        @click='action.onClick'
        >{{action.text}}</a>
      </div>
      <div :class='`${prefixCls}__cancel`' v-if='showCancel'>
        <a :class='`${prefixCls}__item`' @click='onCancel'>{{cancelText}}</a>
      </div>
    </div>
  </za-popup>
</template>

<script>
import zaPopup from '../../popup';

export default {
  name: 'zaActionsheet',
  components: {
    zaPopup,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-actionsheet',
    },
    shape: {
      type: String,
      default: '',
    },
    spacing: {
      type: Boolean,
      default: false,
    },
    actions: {
      type: Array,
      default: function () { // eslint-disable-line object-shorthand
        return [];
      },
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      getContainer: () => document.body,
    };
  },
  watch: {
    visible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (value === this.currentVisible) return;
      this.currentVisible = value;
    },
  },
  methods: {
    onCancel(event) {
      this.currentVisible = false;
      this.$emit('cancel', 'action', event);
      this.$emit('update:visible', false);
    },
    handlePopupClose(reason, event) {
      // if clickaway on mask then sync visible
      if (reason === 'clickaway') {
        this.$emit('cancel', reason, event);
        this.$emit('update:visible', false);
      }
    },
  },
};
</script>
