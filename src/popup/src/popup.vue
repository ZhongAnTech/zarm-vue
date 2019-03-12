<template lang="html">
  <div :class='{
      [`${prefixCls}`]: true,
      [`${prefixCls}--hidden`]: !currentVisible,
    }'
  >
    <div :class='{
        [`${prefixCls}__wrapper`]: true,
        [`${prefixCls}__wrapper-${direction}`]: true,
        [`${animationType}-${animationState}`]: directionCenter,
      }'
      :style='transitionDurationStyle'
    >
      <slot></slot>
    </div>
    <za-mask
      v-if="hasMask"
      :class='[`fade-${animationState}`]'
      :style='animationDurationStyle'
      :visible='maskVisible'
      :type='maskType'
      @click="onMaskClick"/>
  </div>
</template>

<script>
import zaMask from '../../mask';
import getContainer from '../../mixins/get-container';

export default {
  name: 'zaPopup',
  components: {
    zaMask,
  },
  mixins: [getContainer],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['top', 'right', 'bottom', 'left', 'center'].indexOf(v) >= 0;
      },
      default: 'center',
    },
    animationType: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return [
          'fade', 'door', 'flip', 'rotate', 'zoom',
          'moveUp', 'moveDown', 'moveLeft', 'moveRight',
          'slideUp', 'slideDown', 'slideLeft', 'slideRight',
        ].indexOf(v) >= 0;
      },
      default: 'fade',
    },
    animationDuration: {
      type: Number,
      default: 200,
    },
    hasMask: {
      type: Boolean,
      default: true,
    },
    maskType: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['normal', 'transparent'].indexOf(v) >= 0;
      },
      default: 'normal',
    },
    prefixCls: {
      type: String,
      default: 'za-popup',
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
    directionCenter() {
      return this.direction === 'center';
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      animationState: 'enter',
      maskVisible: this.hasMask && this.visible,
    };
  },
  watch: {
    visible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (value === this.currentVisible) return;
      this.removeTimer();
      if (value) {
        this.enter();
      } else {
        if (!this.directionCenter) {
          this.currentVisible = value;
        }
        this.animationState = 'leave';
        this.timerLeave = setTimeout(() => {
          this.maskVisible = false;
          this.currentVisible = value;
        }, this.animationDuration);
      }
    },
  },
  methods: {
    enter() {
      this.currentVisible = true;
      this.maskVisible = true;
      this.animationState = 'enter';
    },
    removeTimer() {
      if (this.timerLeave) {
        clearTimeout(this.timerLeave);
      }
    },
    onMaskClick(event) {
      this.$emit('maskClick', event);
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
