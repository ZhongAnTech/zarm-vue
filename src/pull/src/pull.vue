<script>
import zaDrag from '@/drag';
import zaIcon from '@/icon';
import zaSpinner from '@/spinner';

export default {
  name: 'zaPull',
  components: {
    zaDrag,
    zaIcon,
    zaSpinner,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-pull',
    },
    refreshing: {
      type: Boolean,
      default: false,
    },
    moveDistance: {
      type: Number,
      default: 50,
    },
    duration: {
      type: Number,
      default: 300,
    },
    stayTime: {
      type: Number,
      default: 1000,
    },
    onRefresh: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      offsetY: 0,
      currentDuration: 0,
      actionState: '',
    };
  },
  created() {
    this.actionState = this.refreshing ? 'loading' : 'normal';
  },
  watch: {
    refreshing(val) {
      const actionState = val ? 'loading' : 'success';
      this.doAction(actionState);
    },
  },
  computed: {
    topStyle() {
      return {
        WebkitTransitionDuration: `${this.currentDuration}ms`,
        transitionDuration: `${this.currentDuration}ms`,
        height: `${this.offsetY}px`,
      };
    },
  },
  methods: {
    onDragMove(event, { offsetY }) {
      if (offsetY < 0) return;
      if (document.body.scrollTop > 0) return;

      // fix touchmove bug on android
      event.preventDefault();

      const action = (offsetY / 2) < this.moveDistance
        ? 'pull'
        : 'drop';

      this.doAction(action, offsetY);
      return true;
    },
    onDragEnd() {
      const { onRefresh, actionState } = this;

      if (actionState === 'pull') {
        this.doAction('normal');
        return;
      }

      onRefresh();
    },
    doAction(actionState, offset) {
      const { duration, stayTime } = this;

      this.actionState = actionState;
      switch (actionState) {
        case 'pull':
        case 'drop':
          this.doTransition({ offsetY: offset / 2, duration: 0 });
          break;

        case 'loading':
          this.doTransition({ offsetY: 50, duration });
          break;

        case 'success':
          this.doTransition({ offsetY: 50, duration: 0 });
          setTimeout(() => {
            this.doAction('normal');
          }, stayTime);
          break;

        default:
          this.doTransition({ offsetY: 0, duration });
          break;
      }
    },
    doTransition({ offsetY, duration }) {
      this.offsetY = offsetY;
      this.currentDuration = duration;
    },
  },
  render() {
    const {
      onDragMove,
      onDragEnd,
      prefixCls,
      topStyle,
      offsetY,
      moveDistance,
      actionState,
    } = this;

    const renderControlTop = () => {
      const percent = ((offsetY < moveDistance ? offsetY : moveDistance) * 100) / moveDistance;
      let pull, drop, loading, success; // eslint-disable-line

      switch (actionState) {
        case 'pull':
          pull = this.$scopedSlots.pull && this.$scopedSlots.pull({
            percent,
          });
          return pull || (
            <div class={`${prefixCls}-control`}>
              <za-spinner percent={percent} />
              <span>下拉刷新</span>
            </div>
          );

        case 'drop':
          drop = this.$scopedSlots.drop && this.$scopedSlots.drop({
            percent,
          });
          return drop || (
            <div class={`${prefixCls}-control`}>
              <za-spinner percent={100} />
              <span>释放加载</span>
            </div>
          );

        case 'loading':
          loading = this.$scopedSlots.loading && this.$scopedSlots.loading({
            percent,
          });
          return loading || (
            <div class={`${prefixCls}-control`}>
              <za-spinner class="rotate360" />
              <span>加载中</span>
            </div>
          );

        case 'success':
          success = this.$scopedSlots.success && this.$scopedSlots.success({
            percent,
          });
          return success || (
            <div class={`${prefixCls}-control`}>
              <za-icon type="right-round" theme="success" />
              <span>加载成功</span>
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <za-drag
        dragMove={onDragMove}
        dragEnd={onDragEnd}>
        <div
          class={`${prefixCls}`}>
          <div class={`${prefixCls}-down`} style={topStyle}>
            {renderControlTop()}
          </div>
          {this.$slots.default}
        </div>
      </za-drag>
    );
  },
};
</script>
