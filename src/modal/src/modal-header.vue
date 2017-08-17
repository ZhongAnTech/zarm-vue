<template lang="html">
  <div :class='prefixCls' @click='handleClick'>
    <div :class='`${prefixCls}-title`'>{{title}}</div>
    <div v-if='showClose' :class='`${prefixCls}-close`' @click='handleClose'><za-icon type='wrong'/></div>
  </div>
</template>

<script>
import zaIcon from '../../icon';

export default {
  name: 'zaModalHeader',
  components: {
    zaIcon,
  },
  props: {
    prefixCls: {
      type: String,
      default: 'za-modal-header',
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    title: String,
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
    handleClose(event) {
      const parent = this.findParent();
      if (parent) {
        parent.leave('close', event);
      }
    },
    findParent() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== 'zaModal') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
    },
  },
};
</script>
