<template lang="html">
  <div :class="prefixCls">
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
    defaultActiveKey: {
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
      activeKey: [],
    };
  },
  created() {
    this.activeKey = this.getActiveIndex();
  },
  methods: {
    onItemChange(key) {
      const { multiple, activeKey } = this;
      const hasKey = activeKey.indexOf(key) > -1;

      let newActiveIndex = [];
      if (!multiple) {
        if (hasKey) {
          newActiveIndex = activeKey.filter(i => i !== key);
        } else {
          newActiveIndex = activeKey.slice(0);
          newActiveIndex.push(key);
        }
      } else {
        newActiveIndex = hasKey ? [] : [key];
      }
      this.activeKey = newActiveIndex;
      this.$emit('change', key);
    },
    getActiveIndex() {
      const { defaultActiveKey, multiple } = this;
      const defaultIndex = (defaultActiveKey !== undefined) ? defaultActiveKey : [];
      return multiple ? [defaultIndex[0]] : defaultIndex;
    },
  },
};
</script>
