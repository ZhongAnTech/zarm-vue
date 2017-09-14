<script>
import zaDrag from '@/drag';
import zaIcon from '@/icon';
import zaSpinner from '@/spinner';

const ACTION_STATE = {
  normal: 0,  // 普通
  pull: 1,    // 下拉状态（未满足刷新条件）
  drop: 2,    // 释放立即刷新（满足刷新条件）
  loading: 3, // 加载中
  success: 4, // 加载成功
  failure: 5, // 加载失败
};

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
    refreshDistance: {
      type: Number,
      default: 50,
    },
    refreshInitDistance: {
      type: Number,
      default: 20,
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
    this.actionState = this.refreshing ? ACTION_STATE.loading : ACTION_STATE.normal;
  },
  watch: {
    refreshing(val) {
      const actionState = val ? ACTION_STATE.loading : ACTION_STATE.success;
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
      if (this.actionState >= ACTION_STATE.loading) return;

      // fix touchmove bug on android
      event.preventDefault();
      // move half the distance of drag
      const offset = offsetY / 2;
      const action = (offset - this.refreshInitDistance) < this.refreshDistance
        ? ACTION_STATE.pull
        : ACTION_STATE.drop;

      this.doAction(action, offset);
      return true;
    },
    onDragEnd() {
      const { onRefresh, actionState } = this;

      if (actionState === ACTION_STATE.pull) {
        this.doAction(ACTION_STATE.normal);
        return;
      }

      onRefresh();
    },
    doAction(actionState, offset) {
      const { duration, stayTime } = this;

      this.actionState = actionState;
      switch (actionState) {
        case ACTION_STATE.pull:
        case ACTION_STATE.drop:
          this.doTransition({ offsetY: offset, duration: 0 });
          break;

        case ACTION_STATE.loading:
          this.doTransition({ offsetY: 50, duration });
          break;

        case ACTION_STATE.success:
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
      refreshDistance,
      refreshInitDistance,
      actionState,
    } = this;

    const renderControlTop = () => {
      let percent = 0;
      if (offsetY >= refreshInitDistance) {
        percent = (((offsetY - refreshInitDistance) < refreshDistance ?
          (offsetY - refreshInitDistance) :
          refreshDistance) * 100) / (refreshDistance - refreshInitDistance);
      }

      let pull, drop, loading, success; // eslint-disable-line

      switch (actionState) {
        case ACTION_STATE.pull:
          pull = this.$scopedSlots.pull && this.$scopedSlots.pull({
            percent,
          });
          return pull || (
            <div class={`${prefixCls}-control`}>
              <za-spinner percent={percent} />
              <span>下拉刷新</span>
            </div>
          );

        case ACTION_STATE.drop:
          drop = this.$scopedSlots.drop && this.$scopedSlots.drop({
            percent,
          });
          return drop || (
            <div class={`${prefixCls}-control`}>
              <za-spinner percent={100} />
              <span>释放立即刷新</span>
            </div>
          );

        case ACTION_STATE.loading:
          loading = this.$scopedSlots.loading && this.$scopedSlots.loading({
            percent,
          });
          return loading || (
            <div class={`${prefixCls}-control`}>
              <za-spinner class="rotate360" />
              <span>加载中</span>
            </div>
          );

        case ACTION_STATE.success:
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
