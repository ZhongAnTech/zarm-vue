<template lang="html">
  <div :class='prefixCls'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zaCellTitle',
  props: {
    prefixCls: {
      type: String,
      default: 'za-cell-title',
    },
  },
};
</script>
