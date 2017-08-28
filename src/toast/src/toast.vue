<template lang="html">
  <div :class='{
    [`${prefixCls}`]: true,
    [`${prefixCls}-open`]: currentVisible,
    }'>
    <div :class='`${prefixCls}-container`'>
      <slot>{{message}}</slot>
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
      this.currentVisible = false;
      this.event = event;
      this.reason = 'clickaway';
    },
    enter() {
      if (this.duration === 0) return;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.currentVisible = false;
        this.event = undefined;
        this.reason = 'timeout';
      }, this.duration);
    },
    leave() {
      this.$emit('update:visible', false);
      this.$emit('close', this.reason, this.event);
    },
  },
  watch: {
    visible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (value === this.currentVisible) return;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.currentVisible = value;
    },
    currentVisible(value) {
      if (value) {
        this.enter();
      } else {
        this.leave();
      }
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      message: '',
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
