<template lang="html">
  <div :class='prefixCls' :style='{height}' @click='handleClick'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaModalBody',
  props: {
    prefixCls: {
      type: String,
      default: 'za-modal-body',
    },
    height: [String, Number],
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
