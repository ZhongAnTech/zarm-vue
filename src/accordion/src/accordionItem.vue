<script>
import Emitter from '@/mixins/emitter';
import findParent from '@/mixins/find-parent';

export default {
  name: 'zaAccordionItem',
  mixins: [Emitter, findParent],
  props: {
    prefixCls: {
      type: String,
      default: 'za-accordion',
    },
    aiTag: {
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
    this.findParent('zaAccordion');
    this.setDefaultActive();
  },
  computed: {
    itemActiveTag() {
      let itemActiveTag;
      if (!this.aiTag) {
        itemActiveTag = -1;
      } else {
        itemActiveTag = this.aiTag;
      }
      return itemActiveTag;
    },
  },
  methods: {
    isActive(tag, activeTag) {
      const itemTag = tag || this.aiTag;
      this.itemActiveTags = (activeTag !== undefined) ? activeTag : [];
      const result = this.itemActiveTags.indexOf(itemTag) > -1;
      return result;
    },
    setDefaultActive() {
      const { parent, itemActiveTag } = this;
      this.itemAnimated = parent.animated;
      this.itemOpen = parent.open;
      this.multiple = parent.multiple;
      this.active = this.isActive(itemActiveTag, parent.activeTag);
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
      parent.onItemChange(this.itemActiveTag);
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
