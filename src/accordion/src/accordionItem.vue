<template lang="html">
  <div :class="{
    [`${prefixCls}-item`]: true,
    'active': active || itemOpen,
  }" ref='accordionItem'>
      <div :class="`${prefixCls}-item-title`" @click="onClickItem">
        <div>{{title}}</div>
        <div :class="{
            [`${this.prefixCls}-item-arrow`]: true,
            [`${this.prefixCls}-item-arrow-hidden`]: itemOpen
        }"></div>
      </div>
      <div :class="{
        [`${prefixCls}-item-content`]: true,
        [`${prefixCls}-item-content-anim`]: itemAnimated,
      }" ref='animateRoom' :style="animatedHeight">
        <div :class="`${prefixCls}-item-content-inner`">
          <slot></slot>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'zaAccordionItem',
  components: {
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-accordion',
    },
    animated: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
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
      animatedHeight: '',
    };
  },
  created() {
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
    itemAnimated() {
      if (!this.animated) {
        let parent = this.$parent;
        let itemAnimated;
        // while (parent) {
        if (parent.$options.name !== 'zaAccordion') {
          parent = parent.$parent;
        } else {
          itemAnimated = parent.animated;
          return itemAnimated;
        }
        // }
      } else {
        return this.animated;
      }
    },
    itemOpen() {
      if (!this.open) {
        let parent = this.$parent;
        let itemOpen;
        // while (parent) {
        if (parent.$options.name !== 'zaAccordion') {
          parent = parent.$parent;
        } else {
          itemOpen = parent.open;
          return itemOpen;
        }
        // }
      } else {
        return this.open;
      }
    },
    activeTag() {
      let parent = this.$parent;
      let activeTag;
      if (parent.$options.name !== 'zaAccordion') {
        parent = parent.$parent;
      } else {
        activeTag = parent.activeTag;
      }
      return activeTag;
    },
  },
  watch: {
    activeTag() {
      this.setActive();
    },
  },
  methods: {
    isActive(tag, activeTag) {
      const itemTag = tag || this.itemAiTag;
      const itemActiveTag = activeTag || this.itemActiveTag;
      const result = itemActiveTag.indexOf(itemTag) > -1;
      this.active = result;
    },
    setDefaultActive() {
      const self = this;
      if (!self.active) {
        const parent = self.$parent;
        let defaultActive = false;
        if (parent.$options.name === 'zaAccordion') {
          const defaultActiveTag = parent.defaultActiveTag;
          const activeTag = parent.activeTag;
          if (activeTag && activeTag instanceof Array && activeTag.length > 0) {
            activeTag.some((child) => {
              if (child.toString() === self.itemActiveTag.toString()) {
                defaultActive = true;
                return true;
              }
              return false;
            });
          } else if (defaultActiveTag instanceof Array && defaultActiveTag.length > 0) {
            defaultActiveTag.some((child) => {
              if (child.toString() === self.itemActiveTag.toString()) {
                defaultActive = true;
                return true;
              }
              return false;
            });
          } else {
            defaultActive = false;
          }
        }
        self.active = defaultActive;
      } else {
        self.active = self.active;
      }
    },
    setActive() {
      const self = this;
      let activeStatus = false;
      const activeTag = this.activeTag;
      activeTag.some((child) => {
        if (child.toString() === self.itemActiveTag.toString()) {
          activeStatus = true;
          return true;
        }
        return false;
      });
      self.active = activeStatus;
    },
    onClickItem() {
      const itemAnimated = this.itemAnimated;
      const open = this.open;
      const active = this.active;

      if (open) {
        return;
      }
      this.active = !active;
      if (itemAnimated) {
        this.setStyle(active);
      }
      this.itemChange();
    },
    setStyle(active) {
      const self = this;
      const newActive = active;

      if (newActive) {
        self.animatedHeight = { height: `${this.getContentHeight()}px` };
        setTimeout(() => {
          self.animatedHeight = { height: '0px' };
        }, 0);
      } else {
        self.animatedHeight = { height: '0px' };
        setTimeout(() => {
          self.animatedHeight = { height: `${this.getContentHeight()}px` };
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
    itemChange() {
      const parent = this.$parent;
      if (parent.$options.name !== 'zaAccordion') {
        // parent = parent.$parent;
        this.$emit('change', this.aiTag);
      } else {
        const onchange = parent.onchange;
        if (onchange) {
          this.$nextTick(_ => { // eslint-disable-line no-unused-vars
            onchange(this.aiTag);
          });
        }
      }
    },
  },
};
</script>
