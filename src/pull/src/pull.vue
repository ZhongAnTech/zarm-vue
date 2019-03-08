<script>
import zaDrag from '@/drag';
import zaIcon from '@/icon';
import zaActivityIndicator from '@/activity-indicator';
import Event from '@/utils/events';
import { isThenable, warn } from '@/utils/misc';

const REFRESH_STATE = {
  normal: 0,  // 普通
  pull: 1,    // 下拉状态（未满足刷新条件）
  drop: 2,    // 释放立即刷新（满足刷新条件）
  loading: 3, // 加载中
  success: 4, // 加载成功
  failure: 5, // 加载失败
};

const LOAD_STATE = {
  normal: 0,  // 普通
  abort: 1, // 中止
  loading: 2, // 加载中
  success: 3, // 加载成功
  failure: 4, // 加载失败
  complete: 5, // 加载完成（无新数据）
};

export default {
  name: 'zaPull',
  components: {
    zaDrag,
    zaIcon,
    zaActivityIndicator,
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
    loading: {
      type: Boolean,
      default: false,
    },
    onRefresh: Function,
    onLoad: Function,
  },
  data() {
    return {
      offsetY: 0,
      currentDuration: 0,
      refreshState: '',
      loadState: '',
    };
  },
  created() {
    this.refreshState = this.refreshing ? REFRESH_STATE.loading : REFRESH_STATE.normal;
    this.loadState = this.loading ? LOAD_STATE.loading : LOAD_STATE.normal;
  },
  mounted() {
    Event.on(window, 'scroll', this.onSrcoll);
  },
  beforeDestroy() {
    Event.off(window, 'scroll', this.onSrcoll);
  },
  watch: {
    refreshing(val) {
      const refreshState = val ? REFRESH_STATE.loading : REFRESH_STATE.normal;
      this.loadState = '';
      this.doRefreshAction(refreshState);
    },
    loading(val) {
      if (this.loadState === LOAD_STATE.complete) return; // stop if already complete
      const loadState = val ? LOAD_STATE.loading : LOAD_STATE.normal;
      this.doLoadAction(loadState);
    },
  },
  computed: {
    refreshStyle() {
      const height = Number.isNaN(this.offsetY) ? this.offsetY : `${this.offsetY}px`;
      return {
        WebkitTransitionDuration: `${this.currentDuration}ms`,
        transitionDuration: `${this.currentDuration}ms`,
        height,
      };
    },
    loadStyle() {
      return {
        height: `${this.loadState >= LOAD_STATE.loading ? 'auto' : 0}`,
      };
    },
  },
  methods: {
    onDragMove(event, { offsetY }) {
      if (offsetY < 0) return;
      // 未滚动到顶部
      if (offsetY > 0 && (document.documentElement.scrollTop + document.body.scrollTop) > 0) return;

      if (this.refreshState >= REFRESH_STATE.loading) return;

      // fix touchmove bug on android
      event.preventDefault();
      // move half the distance of drag
      const offset = offsetY / 2;
      const action = (offset - this.refreshInitDistance) < this.refreshDistance
        ? REFRESH_STATE.pull
        : REFRESH_STATE.drop;

      this.doRefreshAction(action, offset);
      return true;
    },
    onDragEnd() {
      const { onRefresh } = this;

      if (this.refreshState === REFRESH_STATE.pull) {
        this.doRefreshAction(REFRESH_STATE.normal);
        return;
      }

      if (typeof onRefresh === 'function') {
        const P = onRefresh();
        if (!isThenable(P)) {
          return warn('on-refresh must return a Promise Object');
        }
        P.then(res => {
          const refreshState = res ? REFRESH_STATE.success : REFRESH_STATE.failure;
          this.doRefreshAction(refreshState);
        }).catch(() => {
          this.doRefreshAction(REFRESH_STATE.failure);
        });
      }
    },
    onSrcoll() {
      if (this.refreshState !== REFRESH_STATE.normal || this.loadState === LOAD_STATE.loading || this.loadState === LOAD_STATE.complete) {
        return;
      }
      const { onLoad } = this;

      if (!onLoad) return;

      const bottom = this.$refs.pull.getBoundingClientRect().bottom;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight <= clientHeight) return;

      if (bottom <= clientHeight) {
        this.doLoadAction(LOAD_STATE.loading);
        if (typeof onLoad === 'function') {
          const P = onLoad();
          if (!isThenable(P)) {
            return warn('on-load must return a Promise Object');
          }
          P.then(res => {
            const loadState = res ? LOAD_STATE.success : LOAD_STATE.complete;
            this.doLoadAction(loadState);
          }).catch(() => {
            this.doLoadAction(LOAD_STATE.failure);
          });
        }
      }
    },
    doLoadAction(loadState) {
      this.loadState = loadState;

      switch (loadState) {
        case LOAD_STATE.success:
          this.doLoadAction(LOAD_STATE.normal);
          break;

        case LOAD_STATE.failure:
          setTimeout(() => {
            this.doLoadAction(LOAD_STATE.abort);
          }, this.stayTime);
          break;

        default:
          break;
      }
    },
    doRefreshAction(refreshState, offset) {
      const { duration, stayTime } = this;

      this.refreshState = refreshState;
      switch (refreshState) {
        case REFRESH_STATE.pull:
        case REFRESH_STATE.drop:
          this.doTransition({ offsetY: offset, duration: 0 });
          break;

        case REFRESH_STATE.loading:
          this.doTransition({ offsetY: 'auto', duration });
          break;

        case REFRESH_STATE.success:
        case REFRESH_STATE.failure:
          this.doTransition({ offsetY: 'auto', duration: 0 });
          setTimeout(() => {
            this.doRefreshAction(REFRESH_STATE.normal);
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
      refreshStyle,
      loadStyle,
      offsetY,
      refreshDistance,
      refreshInitDistance,
      refreshState,
      loadState,
    } = this;

    let percent = 0;
    if (offsetY >= refreshInitDistance) {
      percent = (((offsetY - refreshInitDistance) < refreshDistance ?
        (offsetY - refreshInitDistance) : refreshDistance) * 100) / (refreshDistance - refreshInitDistance);
    }

    const renderRefresh = () => {
      let refreshPull, refreshDrop, refreshLoading, refreshSuccess, refreshFailure; // eslint-disable-line

      switch (refreshState) {
        case REFRESH_STATE.pull:
          refreshPull = this.$scopedSlots.refreshPull && this.$scopedSlots.refreshPull({
            percent,
          });
          return refreshPull || (
            <div class={`${prefixCls}__control`}>
              <za-activity-indicator percent={percent} />
              <span>下拉刷新</span>
            </div>
          );

        case REFRESH_STATE.drop:
          refreshDrop = this.$scopedSlots.refreshDrop && this.$scopedSlots.refreshDrop({
            percent,
          });
          return refreshDrop || (
            <div class={`${prefixCls}__control`}>
              <za-activity-indicator percent={100} />
              <span>释放立即刷新</span>
            </div>
          );

        case REFRESH_STATE.loading:
          refreshLoading = this.$scopedSlots.refreshLoading && this.$scopedSlots.refreshLoading({
            percent,
          });
          return refreshLoading || (
            <div class={`${prefixCls}__control`}>
              <za-activity-indicator class="rotate360" />
              <span>加载中</span>
            </div>
          );

        case REFRESH_STATE.success:
          refreshSuccess = this.$scopedSlots.refreshSuccess && this.$scopedSlots.refreshSuccess({
            percent,
          });
          return refreshSuccess || (
            <div class={`${prefixCls}__control`}>
              <za-icon type="right-round" theme="success" />
              <span>加载成功</span>
            </div>
          );

        case REFRESH_STATE.failure:
          refreshFailure = this.$scopedSlots.refreshFailure && this.$scopedSlots.refreshFailure({
            percent,
          });
          return refreshFailure || (
            <div class={`${prefixCls}__control`}>
              <za-icon type="wrong-round" theme="error" />
              <span>加载失败</span>
            </div>
          );

        default:
          return null;
      }
    };

    const renderLoad = () => {
      let loadComplete, loadLoading, loadFailure; // eslint-disable-line

      switch (loadState) {
        case LOAD_STATE.loading:
          loadLoading = this.$scopedSlots.loadLoading && this.$scopedSlots.loadLoading({
            percent,
          });
          return loadLoading || (
            <div class={`${prefixCls}__control`}>
              <za-activity-indicator class='rotate360'/>
              <span>加载中</span>
            </div>
          );

        case LOAD_STATE.complete:
          loadComplete = this.$scopedSlots.loadComplete && this.$scopedSlots.loadComplete({
            percent,
          });
          return loadComplete || (
            <div class={`${prefixCls}__control`}>
              <span>我是有底线的</span>
            </div>
          );

        case LOAD_STATE.failure:
          loadFailure = this.$scopedSlots.loadFailure && this.$scopedSlots.loadFailure({
            percent,
          });
          return loadFailure || (
            <div class={`${prefixCls}__control`}>
              <za-icon type="wrong-round" theme="error" />
              <span>加载失败</span>
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
          ref='pull'
          class={`${prefixCls}`}>
          <div class={`${prefixCls}__refresh`} style={refreshStyle}>
            {renderRefresh()}
          </div>
          {this.$slots.default}
          <div class={`${prefixCls}__load`} style={loadStyle}>
            {renderLoad()}
          </div>
        </div>
      </za-drag>
    );
  },
};
</script>
