<template lang="html">
  <div :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}-open`]: currentVisible,
    }'>
    <div :class='`${prefixCls}-container`'>
      <slot></slot>
    </div>
    <za-mask type="transparent" :visible='currentVisible' @mask-close='onMaskClose'></za-mask>
  </div>
</template>

<script>
import zaMask from '../../mask';

export default {
  name: 'zaToast',
  components: {
    zaMask,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-toast',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onMaskClose(event) {
      if (!this.closeOnClickModal) return;
      this.leave('clickaway', event);
    },
    enter() {
      this.currentVisible = true;
      if (this.duration === 0) return;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.leave('timeout');
      }, this.duration);
    },
    leave(reason, event) {
      this.currentVisible = false;
      this.$emit('update:visible', false);
      this.$emit('toast-close', reason, event);
    },
  },
  watch: {
    visible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (value === this.currentVisible) return;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (value) {
        this.enter();
      } else {
        this.currentVisible = value;
      }
    },
  },
  data() {
    return {
      currentVisible: this.visible,
    };
  },
  mounted() {
    if (this.currentVisible) {
      this.enter();
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>
