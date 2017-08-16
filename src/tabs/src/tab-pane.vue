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
  mounted() {
    this._panelIndex = paneIndex;
    paneIndex += 1;
    this.notifyParent();
  },
  beforeDestroy() {
    this.notifyParent(false);
  },
  methods: {
    notifyParent(flag = true) {
      if (this._tabs) {
        this._tabs.notify(this, flag);
      }
    },
  },
};
</script>
