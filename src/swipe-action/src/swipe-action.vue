<template lang="html">
  <div :class='`${prefixCls}-wrap`' ref='wrap' v-if='left.length || right.length'>
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
    <div
      :class='`${prefixCls}-content`'
      ref='content'
      @touchstart='handleTouchStart'
      @touchmove='handleTouchMove'
      @touchend='handleTouchEnd'>
      <slot></slot>
    </div>
  </div>
  <div v-else :class='`${prefixCls}-wrap`'>
    <div :class='`${prefixCls}-content`'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zaSwipeAction',
  props: {
    prefixCls: {
      type: String,
      default: 'za-swipeAction', // naming different from zarm
    },
    theme: {
      type: String,
      validator: function (v) { // eslint-disable-line object-shorthand
        return ['default', 'primary', 'info', 'success', 'warning', 'error'].indexOf(v) >= 0;
      },
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
    moveTimeDuration: {
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
    handleTouchStart(e) {
      // 记录开始touch位置，方便后面计算是否滚动
      const dragState = this.dragState;
      const touch = e.touches[0];

      dragState.startLeft = touch.pageX;
      dragState.startTop = touch.pageY;
      dragState.startTopAbsolute = touch.clientY;

      if (this.disabled) {
        return;
      }
      this.pointStart = this.getCurrentPosition(e);
      this.pointEnd = this.getCurrentPosition(e);
      if (this.openedLeft || this.openedRight) {
        this.close();
      }
    },
    handleTouchMove(e) {
      // 验证是否应该滚动页面还是侧滑对应模块
      const dragState = this.dragState;
      const touch = e.touches[0];
      const offsetLeft = touch.pageX - dragState.startLeft;
      const offsetTop = touch.clientY - dragState.startTopAbsolute;

      const distanceX = Math.abs(offsetLeft);
      const distanceY = Math.abs(offsetTop);

      if (distanceX < 5 || (distanceX >= 5 && distanceY >= 0.3 * distanceX)) {
        return;
      }

      e.preventDefault();

      if (this.disabled) {
        return;
      }

      if (this.isClosing) {
        return;
      }
      const { left = [], right = [], offset } = this;

      const pointX = this.getCurrentPosition(e);
      const posX = pointX - this.pointStart;
      const btnsLeftWidth = this.$refs.left && this.$refs.left.offsetWidth;
      const btnsRightWidth = this.$refs.right && this.$refs.right.offsetWidth;

      if (posX < 0 && right.length) {
        if (posX < -btnsRightWidth - offset) {
          return;
        }
        this.doTransition(Math.min(posX, 0), 0);
      } else if (posX > 0 && left.length) {
        if (posX > btnsLeftWidth + offset) {
          return;
        }
        this.doTransition(Math.max(posX, 0), 0);
      }

      this.pointEnd = pointX;
    },
    handleTouchEnd(e) {
      e.preventDefault();
      if (this.disabled) {
        return;
      }
      const { left = [], right = [] } = this;

      const posX = (this.pointEnd !== 0) ? this.pointEnd - this.pointStart : 0;

      const btnsLeftWidth = this.$refs.left && this.$refs.left.offsetWidth;
      const btnsRightWidth = this.$refs.right && this.$refs.right.offsetWidth;

      const leftOpenX = btnsLeftWidth * this.moveDistanceRatio;
      const rightOpenX = btnsRightWidth * this.moveDistanceRatio;

      const openLeft = posX > leftOpenX;
      const openRight = posX < -rightOpenX;

      if (openRight && posX < 0 && right.length) {
        this.open(-btnsRightWidth, 300, false, true);
      } else if (openLeft && posX > 0 && left.length) {
        this.open(btnsLeftWidth, 300, true, false);
      } else {
        this.close('retract');
      }
    },
    doTransition(offset, duration) {
      const dom = this.$refs.content;
      if (!dom) return;

      dom.style.webkitTransitionDuration = `${duration}ms`;
      dom.style.transitionDuration = `${duration}ms`;
      dom.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
      dom.style.transform = `translate3d(${offset}px, 0, 0)`;
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
    open(value, duration, openedLeft, openedRight) {
      if ((!this.openedLeft && openedLeft) ||
      (!this.openedRight && openedRight)) {
        this.$emit('open', openedLeft ? 'left' : 'right');
      }

      this.openedLeft = openedLeft;
      this.openedRight = openedRight;
      this.doTransition(value, duration);
    },
    close(reason, duration = this.moveTimeDuration) {
      this.isClosing = true;
      if (this.openedLeft || this.openedRight) {
        this.$emit('close', reason);
      }
      this.openedLeft = false;
      this.openedRight = false;
      this.timer = setTimeout(() => {
        this.isClosing = false;
      }, duration);
      this.doTransition(0, duration);
    },
    onTouchAway(e) {
      if (this.openedLeft || this.openedRight) {
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
    this.openedLeft = false;
    this.openedRight = false;
    this.isClosing = false;
    this.dragState = {};
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
