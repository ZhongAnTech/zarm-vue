<template lang="html">
  <div :class='`${prefixCls}`' ref='wrap' v-if='left.length || right.length'>
    <div :class='`${prefixCls}-actions-left`' ref='left' v-if='left.length'>
      <div v-for='(button, index) in left' :key='index' :class='{
        [`${prefixCls}-button`]: true,
        [`theme-${button.theme}`]: true,
        }' @click='handleBtnClick(button, $event)'>
        <div :class='`${prefixCls}-text`'>{{button.text || ('left' + index)}}</div>
      </div>
    </div>
    <div :class='`${prefixCls}-actions-right`' ref='right' v-if='right.length'>
      <div v-for='(button, index) in right' :key='index' :class='{
        [`${prefixCls}-button`]: true,
        [`theme-${button.theme}`]: true,
        }' @click='handleBtnClick(button, $event)'>
        <div :class='`${prefixCls}-text`'>{{button.text || ('right' + index)}}</div>
      </div>
    </div>
    <za-drag
      :dragStart='onDragStart'
      :dragMove='onDragMove'
      :dragEnd='onDragEnd'>
      <div
        :class='`${prefixCls}-content`'
        ref='content'>
        <slot></slot>
      </div>
    </za-drag>
  </div>
  <div v-else :class='`${prefixCls}-wrap`'>
    <div :class='`${prefixCls}-content`'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defaultThemeValidator } from '@/utils/validator';
import zaDrag from '@/drag';

export default {
  name: 'zaSwipeAction',
  components: {
    zaDrag,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-swipeAction', // naming different from zarm
    },
    theme: {
      type: String,
      validator: defaultThemeValidator,
      default: 'default',
    },
    left: {
      type: Array,
      default: function () { // eslint-disable-line object-shorthand
        return [];
      },
    },
    right: {
      type: Array,
      default: function () { // eslint-disable-line object-shorthand
        return [];
      },
    },
    moveTimeSpan: {
      type: Number,
      default: 300,
    },
    moveDistanceRatio: {
      type: Number,
      default: 0.5,
    },
    offset: {
      type: Number,
      default: 10,
    },
    duration: {
      type: Number,
      default: 300,
    },
    autoClose: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getCurrentPosition(e) {
      return e.touches[0].pageX;
    },
    onDragStart() {
      if (this.disabled || this.isClosing) {
        return;
      }
      if (this.isOpen) {
        this.close('close');
      }
    },
    onDragMove(e, { offsetX, offsetY }) {
      if (this.disabled || this.isClosing) return;

      // 拖动距离达到上限
      const { offset, offsetLeft } = this;
      const btnsLeftWidth = this.$refs.left && this.$refs.left.offsetWidth;
      const btnsRightWidth = this.$refs.right && this.$refs.right.offsetWidth;
      if (offsetX > 0 && (!btnsLeftWidth || offsetLeft >= btnsLeftWidth + offset)) return false;
      if (offsetX < 0 && (!btnsRightWidth || offsetLeft <= -btnsRightWidth - offset)) return false;

      // 判断滚屏情况
      const distanceX = Math.abs(offsetX);
      const distanceY = Math.abs(offsetY);
      if (distanceX < 5 || (distanceX >= 5 && distanceY >= 0.3 * distanceX)) return false;

      e.preventDefault(); // Fix Android touchcancel bug
      this.doTransition({ offsetLeft: offsetX, duration: 0 });
      return true;
    },
    onDragEnd(e, { offsetX, startTime }) {
      if (this.disabled) {
        return;
      }
      const { duration, moveDistanceRatio, moveTimeSpan } = this;
      const timeSpan = new Date().getTime() - startTime.getTime();
      const btnsLeftWidth = this.$refs.left && this.$refs.left.offsetWidth;
      const btnsRightWidth = this.$refs.right && this.$refs.right.offsetWidth;

      let distanceX = 0;
      let isOpen = false;

      if ((offsetX / btnsLeftWidth > moveDistanceRatio) ||
          (offsetX > 0 && timeSpan <= moveTimeSpan)) {
        distanceX = btnsLeftWidth;
        isOpen = true;
      } else if ((offsetX / btnsRightWidth < -moveDistanceRatio) ||
        (offsetX < 0 && timeSpan <= moveTimeSpan)) {
        distanceX = -btnsRightWidth;
        isOpen = true;
      }

      if (isOpen && !this.isOpen) {
        // 打开
        this.open(distanceX);
      } else if (!isOpen && this.isOpen) {
        // 关闭
        this.close();
      } else {
        // 还原
        this.doTransition({ offsetLeft: distanceX, duration });
      }
    },
    doTransition({ offsetLeft, duration }) {
      const dom = this.$refs.content;
      if (!dom) return;
      // here operate on dom, zarm-react does re-render
      dom.style.webkitTransitionDuration = `${duration}ms`;
      dom.style.transitionDuration = `${duration}ms`;
      dom.style.webkitTransform = `translate3d(${offsetLeft}px, 0, 0)`;
      dom.style.transform = `translate3d(${offsetLeft}px, 0, 0)`;
    },
    handleBtnClick(button, event) {
      event.preventDefault();
      if (typeof button.onClick === 'function') {
        button.onClick(event);
      }
      if (this.autoClose) {
        this.close('autoClose');
      }
    },
    open(offsetLeft) {
      const duration = this.duration;
      this.$emit('open', offsetLeft > 0 ? 'left' : 'right');
      this.isOpen = true;
      this.doTransition({ offsetLeft, duration });
    },
    // close(reason, duration = this.moveTimeDuration) {
    close(reason) {
      this.isClosing = true;
      const { duration } = this;
      this.isOpen = false;
      this.$emit('close', reason);

      this.timer = setTimeout(() => {
        this.isClosing = false;
      }, duration);

      this.doTransition({ offsetLeft: 0, duration });
    },
    onTouchAway(e) {
      if (this.isOpen) {
        const pNode = ((node) => {
          while (node.parentNode && node.parentNode !== document.body) {
            if (node === this.$refs.wrap) {
              return node;
            }
            node = node.parentNode; // eslint-disable-line no-param-reassign
          }
        })(e.target);

        if (!pNode) {
          e.preventDefault();
          this.close('touchaway');
        }
      }
    },
  },
  created() {
    this.isOpen = false;
    this.isClosing = false;
    this.offsetLeft = 0;
  },
  mounted() {
    document.body.addEventListener('touchstart', this.onTouchAway);
  },
  beforeDestroy() {
    document.body.removeEventListener('touchstart', this.onTouchAway);
    clearTimeout(this.timer);
  },
};
</script>
