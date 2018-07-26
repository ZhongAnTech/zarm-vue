<script>
import Emitter from '@/mixins/emitter';
import findParent from '@/mixins/find-parent';

export default {
  name: 'zaCollapseItem',
  mixins: [Emitter, findParent],
  props: {
    prefixCls: {
      type: String,
      default: 'za-collapse',
    },
    activeKey: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      active: false,
      itemAnimated: false,
      itemOpen: false,
      animatedHeight: '',
    };
  },
  created() {
    this.findParent('zaCollapse');
    this.setDefaultActive();
  },
  computed: {
    itemActiveKey() {
      let itemActiveKey;
      if (!this.activeKey) {
        itemActiveKey = -1;
      } else {
        itemActiveKey = this.activeKey;
      }
      return itemActiveKey;
    },
  },
  methods: {
    isActive(tag, activeKey) {
      const itemTag = tag || this.activeKey;
      this.itemActiveKeys = (activeKey !== undefined) ? activeKey : [];
      const result = this.itemActiveKeys.indexOf(itemTag) > -1;
      return result;
    },
    setDefaultActive() {
      const { parent, itemActiveKey } = this;
      this.itemAnimated = parent.animated;
      this.itemOpen = parent.open;
      this.multiple = parent.multiple;
      this.active = this.isActive(itemActiveKey, parent.activeKey);
      this.$nextTick(() => {
        if (this.itemAnimated) {
          this.setAnimateStyle(this.active);
        }
      });
    },
    setActive() {
      const { parent, active, multiple, itemAnimated } = this;
      let activeStatus;
      if (multiple) {
        const accordionItemRefs = parent.$children;
        accordionItemRefs.forEach((item) => {
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
    },
    onClickItem() {
      const { parent, open } = this;
      if (open) {
        return;
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
    const { prefixCls, active, itemOpen, title, itemAnimated, animatedHeight } = this;
    return (
      <div class={{ [`${prefixCls}-item`]: true, active: active || itemOpen }} ref='accordionItem'>
        <div class={`${prefixCls}-item-title`} on-click={this.onClickItem}>
          <div>{title}</div>
          <div class={{ [`${prefixCls}-item-arrow`]: true, [`${prefixCls}-item-arrow-hidden`]: itemOpen }}></div>
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
