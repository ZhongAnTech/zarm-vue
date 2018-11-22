<script>
import Emitter from '@/mixins/emitter';
import findParent from '@/mixins/find-parent';

export default {
  name: 'zaCollapseItem',
  mixins: [Emitter, findParent],
  props: {
    itemKey: {
      type: [String, Number],
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: false,
      itemAnimated: false,
      animatedHeight: '',
    };
  },
  created() {
    this.findParent('zaCollapse');
    this.setDefaultActive();
  },
  watch: {
    parantActiveKey() {
      this.$nextTick(() => {
        this.setDefaultActive();
      });
    },
  },
  computed: {
    itemActiveKey() {
      let itemActiveKey;
      if (!this.itemKey) {
        itemActiveKey = -1;
      } else {
        itemActiveKey = this.itemKey;
      }
      return itemActiveKey;
    },
    parantActiveKey() {
      return this.parent && this.parent.activeKey;
    },
  },
  methods: {
    isActive(tag, activeKey) {
      const itemTag = tag || this.itemKey;
      this.itemActiveKeys = (activeKey !== undefined) ? activeKey : [];
      const result = this.itemActiveKeys.indexOf(itemTag) > -1;
      return result;
    },
    setDefaultActive() {
      const { parent, itemActiveKey } = this;
      this.itemAnimated = parent.animated;
      this.multiple = parent.multiple;
      this.prefixCls = parent.prefixCls;
      this.active = this.isActive(itemActiveKey, parent.currActiveKey);
      this.$nextTick(() => {
        if (this.itemAnimated) {
          this.setAnimateStyle(this.active);
        }
      });
    },
    setActive() {
      const { parent, active, multiple, itemAnimated, itemKey } = this;
      let activeStatus;
      if (!multiple) {
        const collapseItemRefs = parent.$children;
        collapseItemRefs.forEach((item) => {
          if (item.active) {
            item.active = false;
            setTimeout(() => {
              item.animatedHeight = { height: '0px' };
            }, 0);
          }
        });
        activeStatus = active ? 1 : 0;
      } else {
        activeStatus = active ? 1 : 0;
      }
      this.active = !activeStatus;
      if (itemAnimated) {
        this.setAnimateStyle(!activeStatus);
      }
      this.$emit('item-change', itemKey);
    },
    onClickItem() {
      const { parent, disabled } = this;
      if (disabled) {
        return false;
      }
      this.setActive();
      parent.onItemChange(this.itemActiveKey);
    },
    setAnimateStyle(active) {
      const newActive = active;
      if (newActive) {
        this.animatedHeight = { height: '0px' };
        setTimeout(() => {
          this.animatedHeight = { height: `${this.getContentHeight()}px` };
        }, 0);
      } else {
        this.animatedHeight = { height: `${this.getContentHeight()}px` };
        setTimeout(() => {
          this.animatedHeight = { height: '0px' };
        }, 0);
      }
    },
    getContentHeight() {
      const content = this.$refs.animateRoom;
      const children = content.children;
      let height = 0;
      const childrenArray = [].slice.call(children);
      childrenArray.forEach((item) => {
        height += item.offsetHeight;
      });
      return height;
    },
  },
  render() {
    const { prefixCls, active, title, itemAnimated, animatedHeight, disabled } = this;
    return (
      <div class={{ [`${prefixCls}-item`]: true, active, disabled }} ref='collapseItem'>
        <div class={`${prefixCls}-item-title`} on-click={this.onClickItem}>
          <div>{title}</div>
          <div class={{ [`${prefixCls}-item-arrow`]: true }}></div>
        </div>
        <div class={{ [`${prefixCls}-item-content`]: true, [`${prefixCls}-item-content-anim`]: itemAnimated }} ref='animateRoom' style={animatedHeight}>
          <div class={`${prefixCls}-item-content-inner`}>
            {this.$slots.default}
          </div>
        </div>
      </div>
    );
  },
};
</script>
