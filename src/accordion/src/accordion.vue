<template lang="html">
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script>
import { isArray } from '@/utils/validator';

export default {
  name: 'zaAccordion',
  props: {
    prefixCls: {
      type: String,
      default: 'za-accordion',
    },
    defaultActiveTag: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    animated: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeTag: this.getActiveIndex(),
    };
  },
  methods: {
    onItemChange(key) {
      const { multiple, activeTag } = this;
      const hasKey = activeTag.indexOf(key) > -1;

      let newActiveIndex = [];
      if (!multiple) {
        if (hasKey) {
          newActiveIndex = activeTag.filter(i => i !== key);
        } else {
          newActiveIndex = activeTag.slice(0);
          newActiveIndex.push(key);
        }
      } else {
        newActiveIndex = hasKey ? [] : [key];
      }
      // console.log(key, newActiveIndex);
      this.activeTag = newActiveIndex;
      this.$emit('change', Number(key));
    },
    getActiveIndex() {
      const { activeTag, defaultActiveTag, multiple } = this;

      const defaultIndex = (activeTag || activeTag === 0) ? activeTag : defaultActiveTag;

      if (defaultIndex || defaultIndex === 0) {
        if (isArray(defaultIndex)) {
          return !multiple ?
          [String(defaultIndex[0])] : defaultIndex;
        } else { // eslint-disable-line
          return [String(defaultIndex)];
        }
      }

      return [];
    },
    isPropEqual(cur, next) {
      if (isArray(next) && isArray(cur)) {
        return next.length === cur.length && next.every((key, i) => key === cur[i]);
      }

      return cur === next;
    },
  },
};
</script>
