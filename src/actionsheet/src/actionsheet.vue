<template lang="html">
  <za-popup :visible='currentVisible' @popup-close='handlePopupClose'>
    <div :class='{
      [`${prefixCls}`]: true,
      [`shape-${shape}`]: !!shape,
    }'>
      <div :class='`${prefixCls}-actions`'>
        <a v-for='(action, index) in actions' :class='{
          [`${prefixCls}-btn`]: true,
          [`theme-${action.theme}`]: !!action.theme,
        }'
        :key='index'
        @click='action.onClick'
        >{{action.text}}</a>
      </div>
      <div :class='`${prefixCls}-cancel`' v-if='showCancel'>
        <a :class='`${prefixCls}-btn`' @click='onCancel'>{{cancelText}}</a>
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
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['radius'].indexOf(v) >= 0;
      },
      default: 'radius',
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
      this.$emit('cancel', event);
      this.$emit('update:visible', false);
    },
    handlePopupClose(reason, event) {
      // if clickaway on mask then sync visible
      if (reason === 'clickaway') {
        this.$emit('cancel', event);
        this.$emit('update:visible', false);
      }
    },
  },
};
</script>
