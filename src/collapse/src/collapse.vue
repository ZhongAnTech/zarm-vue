<template lang="html">
  <div :class="[prefixCls, className]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaCollapse',
  props: {
    prefixCls: {
      type: String,
      default: 'za-collapse',
    },
    className: {
      type: String,
    },
    defaultActiveKey: {
      type: [String, Number, Array],
      default: () => [],
    },
    activeKey: {
      type: [String, Number, Array],
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
      currActiveKey: [],
    };
  },
  watch: {
    activeKey(val) {
      this.$nextTick(() => {
        const currActiveKey = typeof val === 'object' ? val : [val];
        this.currActiveKey = this.multiple ? currActiveKey : [currActiveKey[0]];
      });
    },
  },
  created() {
    const { multiple, activeKey } = this;
    const currActiveKey = typeof activeKey === 'object' ? activeKey : [activeKey];
    if (currActiveKey.length > 0) {
      this.currActiveKey = multiple ? currActiveKey : [currActiveKey[0]];
    } else {
      this.currActiveKey = this.getActiveIndex();
    }
  },
  methods: {
    onItemChange(key) {
      const { multiple, currActiveKey } = this;
      const hasKey = currActiveKey.indexOf(key) > -1;

      let newActiveIndex = [];
      if (!multiple) {
        if (hasKey) {
          newActiveIndex = currActiveKey.filter(i => i !== key);
        } else {
          newActiveIndex = currActiveKey.slice(0);
          newActiveIndex.push(key);
        }
      } else {
        newActiveIndex = hasKey ? [] : [key];
      }
      this.currActiveKey = newActiveIndex;
      this.$emit('change', key);
    },
    getActiveIndex() {
      const { defaultActiveKey, multiple } = this;
      const defaultIndex = (typeof defaultActiveKey === 'object') ? defaultActiveKey : [defaultActiveKey];
      return multiple ? defaultIndex : [defaultIndex[0]];
    },
  },
};
</script>
