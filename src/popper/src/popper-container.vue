<script>
import getContainer from '@/mixins/get-container';

export default {
  name: 'zaPopperRef',
  mixins: [getContainer],
  props: {
    prefixCls: {
      type: String,
      default: 'za-popper',
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
      default: 'click',
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
      default: 'top',
    },
    getContainer: {
      type: Function,
      default: () => document.body,
    },
    content: null,
  },
  data() {
    return {
    };
  },
  mounted() {

  },
  methods: {

  },
  render() {
    const {
      prefixCls,
      trigger,
      content,
      hasArrow,
      animationType,
      animationDuration,
      direction,
      className,
      animationState,
      isPending,
    } = this;

    const innerCls = {
      [`${className}`]: true,
      [`${prefixCls}__wrapper`]: true,
      [`${prefixCls}--${direction}`]: true,
      [`${prefixCls}--hidden`]: animationState === 'leave',
      [`za-${animationType}-${animationState}`]: isPending,
    };

    return (
      <div
        class="popper-container"
        disabled={trigger === 'manual'}
      >
        <div
          ref="popperNode"
          style={{
            position: 'absolute',
            animationDuration: `${animationDuration}ms`,
          }}
          class={innerCls}
        >
          <div class={`${prefixCls}__content`}>{content}</div>
          {hasArrow && <span class={`${prefixCls}__arrow`} ref="arrowRef" />}
        </div>
      </div>
    );
  },
};
</script>
