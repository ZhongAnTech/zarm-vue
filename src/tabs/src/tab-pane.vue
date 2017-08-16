<template lang="html">
  <div :class='`${prefixCls}-container`'>
    <div :class='{
      [`${prefixCls}-container-item`]: true,
      active: name === currentName,
    }'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
let paneIndex = 0;

export default {
  name: 'zaTabPane',
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
      return this.container && this.container.value;
    },
    container() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'zaTabs') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
  },
  watch: {
    label() {
      this.notifyParent();
    },
    name() {
      this.notifyParent();
    },
    disabled() {
      this.notifyParent();
    },
  },
  created() {
    this._panelIndex = paneIndex;
    paneIndex += 1;
    this.notifyParent();
  },
  beforeDestroy() {
    this.notifyParent(false);
  },
  methods: {
    notifyParent(flag = true) {
      if (this.container) {
        this.container.notify(this, flag);
      }
    },
  },
};
</script>
