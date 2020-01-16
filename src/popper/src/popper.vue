<script>
import PopperJS from 'popper.js';
import clickoutside from '@/utils/clickoutside';
import Events from '@/utils/events';
import domUtil from '@/utils/dom';
import { enumGenerator } from '@/utils/validator';
import PopperRef from './popper-container';

const directionMap = {
  top: 'top',
  topLeft: 'top-start',
  topRight: 'top-end',
  right: 'right',
  rightTop: 'right-start',
  rightBottom: 'right-end',
  bottom: 'bottom',
  bottomLeft: 'bottom-start',
  bottomRight: 'bottom-end',
  left: 'left',
  leftTop: 'left-start',
  leftBottom: 'left-end',
};

const getPopperClientRect = (popperOffsets) => {
  const offsets = { ...popperOffsets };
  offsets.right = offsets.left + offsets.width;
  offsets.bottom = offsets.top + offsets.height;
  return offsets;
};

const customArrowOffsetFn = (data) => {
  const [placement, placement1] = data.placement.split('-');
  const arrow = data.instance.options.modifiers && data.instance.options.modifiers.arrow.element;
  const { offsets: { reference } } = data;
  const popper = getPopperClientRect(data.offsets.popper);
  const isVertical = ['left', 'right'].indexOf(placement) !== -1;
  const len = isVertical ? 'height' : 'width';
  const side = isVertical ? 'top' : 'left';
  const altSide = isVertical ? 'left' : 'top';
  const opSide = isVertical ? 'bottom' : 'right';
  const arrowSize = domUtil.getOuterSizes(arrow)[len];
  const offsetSize = parseFloat(getComputedStyle(data.instance.popper, null).paddingLeft);
  const hashMap = {
    start: (side === 'top' || side === 'left')
      ? (reference[side] + offsetSize)
      : (reference[opSide] - offsetSize - arrowSize),
    // eslint-disable-next-line no-mixed-operators
    center: reference[side] + reference[len] / 2 - arrowSize / 2,
    end: (side === 'top' || side === 'left')
      ? (reference[opSide] - offsetSize - arrowSize)
      : (reference[side] + offsetSize),
  };
  const place = hashMap[placement1 || 'center'];
  const sideValue = place - popper[side];

  data.arrowElement = arrow;
  data.arrowStyles[side] = Math.floor(sideValue).toString();
  data.arrowStyles[altSide] = '';

  return data;
};

export default {
  name: 'zaPopper',
  components: {
    PopperRef,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-popper',
    },
    content: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    hasArrow: {
      type: Boolean,
      default: false,
    },
    arrowPointAtCenter: {
      type: Boolean,
      default: false,
    },
    trigger: {
      type: String,
      validator: enumGenerator(['click', 'hover', 'focus', 'manual', 'contextMenu']),
      default: /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'click' : 'hover',
    },
    animationType: {
      type: String,
      default: 'zoom-fade',
    },
    animationDuration: {
      type: Number,
      default: 200,
    },
    direction: {
      type: String,
      validator: enumGenerator([
        'top',
        'topLeft',
        'topRight',
        'right',
        'rightTop',
        'rightBottom',
        'bottom',
        'bottomLeft',
        'bottomRight',
        'left',
        'leftTop',
        'leftBottom',
      ]),
      default: 'top',
    },
    mouseEnterDelay: {
      type: Number,
      default: 100,
    },
    mouseLeaveDelay: {
      type: Number,
      default: 100,
    },
    getContainer: {
      type: Function,
      default: () => document.body,
    },
  },
  data() {
    return {
      currentVisible: this.visible,
      popper: null,
      arrowRef: null,
      mounted: false,
      isPending: false,
      animationState: 'leave',
    };
  },
  watch: {
    visible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (value === this.currentVisible) return;
      this.currentVisible = value;
    },
  },
  mounted() {
    const { popperRef } = this.$refs;
    if (popperRef.$refs.popperNode) {
      Events.off(popperRef.$refs.popperNode, 'webkitAnimationEnd', this.animationEnd);
      Events.off(popperRef.$refs.popperNode, 'animationend', this.animationEnd);
    }
    // this.destroy();
    this.handleTrigger();
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
    clickoutside.addClickoutSide({ handle: this.onOutsideBlur });
  },
  beforeDestroy() {
    clickoutside.removeClickoutSide({ handle: this.onOutsideBlur });
  },
  methods: {
    handleTrigger() {
      const { trigger } = this;
      const { reference } = this.$refs;

      if (trigger === 'click') {
        reference.onclick = this.handleClick;
      }
      if (trigger === 'contextMenu') {
        reference.oncontextmenu = this.handleClick;
      }
      if (trigger === 'hover') {
        reference.onmouseover = this.handleEnter;
        reference.onmouseleave = this.handleLeave;
      }
      if (trigger === 'focus') {
        reference.onfocus = this.handleClick;
      }
    },
    onOutsideBlur(e) {
      const { popperRef } = this.$refs;

      if (!this.currentVisible) {
        return;
      }
      const $el = popperRef.$refs.popperNode;
      const $container = this.$refs.container;
      clickoutside.clickoutSideHandle(e, { onClickoutSide: this.handleClose, ignorenode: $container, el: $el });
    },

    handleClick(event) {
      const { currentVisible, trigger } = this;

      if (trigger === 'contextMenu') event.preventDefault();

      this.mounted = true;

      if (!currentVisible) {
        this.handleOpen();
      } else {
        this.handleClose();
      }
    },

    handleOpen() {
      const { direction, hasArrow, arrowPointAtCenter } = this;
      const { popperRef } = this.$refs;

      const reference = this.$refs.reference;
      const popperNode = popperRef.$refs.popperNode;

      if (!popperNode) {
        this.currentVisible = true;
        this.$nextTick(() => {
          this.handleOpen();
        });
        return;
      }

      if (this.popper) {
        this.destroy();
      }

      this.popper = new PopperJS(reference, popperNode, {
        placement: directionMap[direction],
        modifiers: {
          preventOverflow: {
            boundariesElement: 'window',
          },
          computeStyle: {
            gpuAcceleration: false,
          },
          arrow: {
            enabled: popperRef.$refs.arrowRef,
            element: popperRef.$refs.arrowRef,
            ...(!(hasArrow && arrowPointAtCenter) && { fn: customArrowOffsetFn }),
          },
        },
        onCreate: this.handlePopperUpdate,
        onUpdate: this.handlePopperUpdate,
      });

      Events.on(popperRef.$refs.popperNode, 'webkitAnimationEnd', this.animationEnd);
      Events.on(popperRef.$refs.popperNode, 'animationend', this.animationEnd);

      this.enter();
    },


    setTransformOrigin() {
      const { popperRef } = this.$refs;

      const placementMap = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left',
      };
      const placement = popperRef.$refs.popperNode.getAttribute('x-placement').split('-')[0];
      const origin = placementMap[placement];
      popperRef.$refs.popperNode.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1
        ? `center ${origin}`
        : `${origin} center`;
    },

    handlePopperUpdate() {
      this.setTransformOrigin();
    },

    handleClose() {
      if (!this.popper) {
        return;
      }
      this.leave();
    },

    handleEnter() {
      const { mouseEnterDelay } = this;

      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
      this.enterTimer = setTimeout(() => {
        this.mounted = true;
        this.$nextTick(() => {
          this.handleOpen();
        });
      }, mouseEnterDelay);
    },

    handleLeave() {
      const { mouseLeaveDelay } = this;

      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
      this.leaveTimer = setTimeout(() => {
        this.handleClose();
      }, mouseLeaveDelay);
    },

    enter() {
      this.currentVisible = true;
      this.isPending = true;
      this.animationState = 'enter';
    },

    leave() {
      this.currentVisible = false;
      this.isPending = true;
      this.animationState = 'leave';

      this.destroy();
    },

    animationEnd(e) {
      e.stopPropagation();

      const { destroy, animationState } = this;

      if (animationState === 'leave') {
        this.currentVisible = false;
        this.isPending = false;
        this.mounted = !destroy;

        this.$nextTick(() => {
          this.destroy();
          this.$emit('visibleChange', false);
        });
      } else {
        this.$emit('visibleChange', true);
      }
    },

    destroy() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = null;
      }
    },
  },
  render() {
    const {
      prefixCls,
      trigger,
      content,
      hasArrow,
      currentVisible,
      animationType,
      animationDuration,
      direction,
      animationState,
      isPending,
      className,
      handleClick,
    } = this;

    return (
      <div class={prefixCls} ref="container">
        <popper-ref
          ref="popperRef"
          prefixCls={prefixCls}
          trigger={trigger}
          className={className}
          visible={currentVisible}
          hasArrow={hasArrow}
          animationType={animationType}
          animationDuration={animationDuration}
          direction={direction}
          content={this.$slots.content || content}
          animationState={animationState}
          isPending={isPending}
        >
        </popper-ref>
        <div
          ref="reference"
          class={`${prefixCls}__inner`}
        >
          {this.$slots.default}
        </div>
      </div>
    );
  },
};
</script>
