<template lang="html">
  <div :class='{
      [`${prefixCls}`]: true,
      [`${prefixCls}-hidden`]: !currentVisible,
    }'
  >
    <div :class='{
        [`${prefixCls}-wrapper`]: true,
        [`${prefixCls}-wrapper-${direction}`]: true,
      }'
      :style='transitionDurationStyle'
    >
      <slot></slot>
    </div>
    <za-mask
      :class='[`fade-${animationState}`]'
      :style='animationDurationStyle'
      :visible='maskVisible'
      :type='maskType'
      @mask-close='onMaskClose' />
  </div>
</template>

<script>
import zaMask from '../../mask';

export default {
  name: 'zaPopup',
  components: {
    zaMask,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-popup',
    },
    direction: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['top', 'right', 'bottom', 'left'].indexOf(v) >= 0;
      },
      default: 'bottom',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    autoClose: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    animationDuration: {
      type: Number,
      default: 200,
    },
    maskType: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['transparent', 'light', 'normal', 'dark'].indexOf(v) >= 0;
      },
      default: 'normal',
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    transitionDurationStyle() {
      return {
        WebkitTransitionDuration: `${this.animationDuration}ms`,
        transitionDuration: `${this.animationDuration}ms`,
      };
    },
    animationDurationStyle() {
      return {
        WebkitAnimationDuration: `${this.animationDuration}ms`,
        animationDuration: `${this.animationDuration}ms`,
      };
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      animationState: 'enter',
      maskVisible: this.mask && this.visible,
    };
  },
  watch: {
    visible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (value === this.currentVisible) return;
      if (this.timerEnter || this.timerLeave) {
        clearTimeout(this.timerEnter);
        clearTimeout(this.timerLeave);
      }
      if (value) {
        this.enter();
      } else {
        this.currentVisible = value;
        this.animationState = 'leave';
        this.timerLeave = setTimeout(() => {
          this.maskVisible = false;
        }, this.animationDuration);
      }
    },
  },
  methods: {
    enter() {
      this.currentVisible = true;
      this.maskVisible = true;
      this.animationState = 'enter';

      if (this.duration === 0) return;
      if (this.timerEnter) {
        clearTimeout(this.timerEnter);
      }
      if (this.autoClose) {
        this.timerEnter = setTimeout(() => {
          this.leave('timeout');
        }, this.duration);
      }
    },
    leave(reason, event) {
      this.currentVisible = false;
      // mask start leaving
      this.animationState = 'leave';
      this.$emit('update:visible', false);
      this.$emit('popup-close', reason, event);

      if (this.timerLeave) {
        clearTimeout(this.timerLeave);
      }
      // remove mask after animationDuration
      this.timerLeave = setTimeout(() => {
        this.maskVisible = false;
      }, this.animationDuration);
    },
    onMaskClose() {
      if (!this.closeOnClickModal) return;
      // clear autoClose timer
      if (this.timerEnter) {
        clearTimeout(this.timerEnter);
      }
      this.leave('clickaway', event);
    },
    removeTimer() {
      if (this.timerEnter || this.timerLeave) {
        clearTimeout(this.timerEnter);
        clearTimeout(this.timerLeave);
      }
    },
  },
  mounted() {
    if (this.currentVisible) {
      this.enter();
    }
  },
  beforeDestroy() {
    this.removeTimer();
  },
};
</script>
