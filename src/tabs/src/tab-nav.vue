<template lang="html">
  <div :class='{
    [`${prefixCls}-header-item`]: true,
    disabled: disabled,
    active: this.name === currentName,
  }' @click='handleClick'>{{label}}</div>
</template>

<script>
import Emitter from '@/mixins/emitter';

export default {
  name: 'zaTabItem',
  mixins: [Emitter],
  props: {
    prefixCls: {
      type: String,
      default: 'za-tab',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: String,
    name: [String, Number],
  },
  computed: {
    currentName() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'zaTabs') {
          parent = parent.$parent;
        } else {
          this._tabs = parent;
          return parent.value;
        }
      }
    },
  },
  methods: {
    handleClick(event) {
      if (this.disabled) return;
      this.dispatch('zaTabs', 'input', [this.name]);
      this._tabs.changeCb(this, event);
    },
  },
};
</script>

<style lang="css">
</style>
