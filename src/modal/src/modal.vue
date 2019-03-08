<template lang="html">
  <div :class='{
    [`${prefixCls}`]: true,
    radius,
    [`fade-${animationState}`]: true,
    }' :style='modalStyle'>
    <div :class='`${prefixCls}-wrapper`'>
      <div :class='{
        [`${prefixCls}-dialog`]: true,
        [`${animationType}-${animationState}`]: true,
        [`fade-${animationState}`]: true,
        }' :style='dialogStyle' @click='(e) => e.stopPropagation()'>
        <div :class='`${prefixCls}-header`' v-if='$slots.title || title'>
          <div :class='`${prefixCls}-header-title`'>
            <slot name='title'></slot>
            <template v-if="!$slots.header">{{title}}</template>
          </div>
          <div v-if='showClose' :class='`${prefixCls}-header-close`' @click='handleClose'><za-icon type='wrong'/></div>
        </div>
        <div :class='`${prefixCls}-body`'>
          <slot></slot>
        </div>
        <div :class='`${prefixCls}-footer`' v-if='$slots.footer'>
          <slot name='footer'></slot>
        </div>
      </div>
    </div>
    <za-mask :visible='maskVisible' @click='onMaskClose' :type='maskType'/>
  </div>
</template>

<script>
/**
 * Should use za-popup instead of reapply mask.
 * but as css is depend on zarm-react version,
 * use popup may have potential problem
 */
import zaMask from '../../mask';
import zaIcon from '../../icon';
import getContainer from '../../mixins/get-container';

export default {
  name: 'zaModal',
  components: {
    zaMask,
    zaIcon,
  },
  mixins: [getContainer],
  props: {
    prefixCls: {
      type: String,
      default: 'za-modal',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    radius: {
      type: Boolean,
      default: false,
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
      default: 'zoom',
    },
    maskType: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['transparent', 'light', 'normal', 'dark'].indexOf(v) >= 0;
      },
      default: 'normal',
    },
    animationDuration: {
      type: Number,
      default: 200,
    },
    width: {
      type: [String, Number],
      default: '70%',
    },
    minWidth: {
      type: Number,
      default: 270,
    },
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
    title: String,
    showClose: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    modalStyle() {
      return {
        display: !this.currentVisible ? 'none' : '',
        WebkitAnimationDuration: `${this.animationDuration}ms`,
        animationDuration: `${this.animationDuration}ms`,
      };
    },
    dialogStyle() {
      return {
        width: this.width,
        minWidth: this.minWidth,
        WebkitAnimationDuration: `${this.animationDuration}ms`,
        animationDuration: `${this.animationDuration}ms`,
      };
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
        this.animationState = 'leave';
        this.timer = setTimeout(() => {
          this.currentVisible = value;
          this.maskVisible = false;
        }, this.animationDuration);
      }
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      animationState: 'enter',
      maskVisible: this.visible,
    };
  },
  methods: {
    enter() {
      this.currentVisible = true;
      this.maskVisible = true;
      this.animationState = 'enter';
    },
    leave(reason, event) {
      // mask start leaving
      this.animationState = 'leave';
      this.$emit('update:visible', false);
      this.$emit('close', reason, event);

      if (this.timer) {
        clearTimeout(this.timer);
      }
      // remove mask after animationDuration
      this.timer = setTimeout(() => {
        this.currentVisible = false;
        this.maskVisible = false;
      }, this.animationDuration);
    },
    onMaskClose(event) {
      if (!this.closeOnClickModal) return;
      // clear autoClose timer
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.leave('clickaway', event);
    },
    handleClose(event) {
      this.leave('close', event);
    },
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
