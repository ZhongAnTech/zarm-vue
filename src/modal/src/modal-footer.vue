<template lang="html">
  <div :class='prefixCls' @click='handleClick'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaModalFooter',
  props: {
    prefixCls: {
      type: String,
      default: 'za-modal-footer',
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
